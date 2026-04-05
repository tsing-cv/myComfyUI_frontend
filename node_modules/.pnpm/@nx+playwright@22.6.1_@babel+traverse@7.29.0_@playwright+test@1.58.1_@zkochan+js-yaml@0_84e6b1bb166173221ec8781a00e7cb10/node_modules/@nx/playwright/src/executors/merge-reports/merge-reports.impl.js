"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mergeReportsExecutor = mergeReportsExecutor;
const devkit_1 = require("@nx/devkit");
const config_utils_1 = require("@nx/devkit/src/utils/config-utils");
const node_child_process_1 = require("node:child_process");
const node_fs_1 = require("node:fs");
const node_path_1 = require("node:path");
const reporters_1 = require("../../utils/reporters");
async function mergeReportsExecutor(options, context) {
    const { config, expectedSuites } = options;
    const projectRoot = (0, node_path_1.join)(context.root, context.projectsConfigurations.projects[context.projectName].root);
    const configPath = (0, node_path_1.join)(projectRoot, config);
    const playwrightConfig = await (0, config_utils_1.loadConfigFile)(configPath);
    const reporterOutputs = (0, reporters_1.getReporterOutputs)(playwrightConfig);
    const blobReporterOutput = reporterOutputs.find(([reporter]) => reporter === 'blob');
    if (!blobReporterOutput) {
        devkit_1.output.warn({
            title: 'The blob reporter is not configured',
            bodyLines: [
                'The "blob" reporter is not configured in the Playwright configuration. Skipping merging the reports.',
                '',
                'To merge reports across tasks, enable the "blob" reporter in your Playwright configuration.',
                'If using the preset from "@nx/playwright/preset", you can do this by setting `generateBlobReports: true` in the preset options.',
                '',
                'For more information see:',
                '- Blob reporter: https://playwright.dev/docs/test-reporters#blob-reporter',
                '- Merging reports: https://playwright.dev/docs/test-cli#merge-reports',
            ],
        });
        return { success: true };
    }
    if (reporterOutputs.length === 1) {
        devkit_1.output.warn({
            title: 'No additional reporters are configured',
            bodyLines: [
                'Only the "blob" reporter is configured in your Playwright configuration.',
                'To produce a different merged report, add at least one additional reporter alongside the "blob" reporter.',
            ],
        });
    }
    const blobReportDir = blobReporterOutput[1];
    const absoluteBlobReportDir = (0, node_path_1.join)(projectRoot, blobReportDir);
    if (!(0, node_fs_1.existsSync)(absoluteBlobReportDir)) {
        devkit_1.output.warn({
            title: 'Merging the blob reports skipped',
            bodyLines: [
                `The blob reporter output directory "${blobReportDir}" does not exist.`,
                'This can happen if no Playwright tests were run, or due to a misconfiguration.',
                '',
                'For more information see:',
                '- Merge Atomized Outputs: https://nx.dev/docs/technologies/test-tools/playwright/guides/merge-atomized-outputs',
            ],
        });
        return { success: true };
    }
    const blobReportFiles = collectBlobReports(absoluteBlobReportDir);
    const pmc = (0, devkit_1.getPackageManagerCommand)();
    const result = (0, node_child_process_1.spawnSync)(pmc.exec, ['playwright', 'merge-reports', blobReportDir, '--config', configPath], {
        cwd: projectRoot,
        stdio: 'inherit',
        shell: true,
        windowsHide: true,
    });
    if (result.error) {
        devkit_1.output.error({
            title: 'Merging the blob reports failed',
            bodyLines: [result.error.message, 'See above for more details.'],
        });
        return { success: false };
    }
    if (result.status !== 0) {
        devkit_1.output.error({
            title: 'Merging the blob reports failed',
            bodyLines: [
                `Process exited with code ${result.status}`,
                'See above for more details.',
            ],
        });
        return { success: false };
    }
    if (expectedSuites !== undefined) {
        if (blobReportFiles.length !== expectedSuites) {
            const hasAdditionalReports = blobReportFiles.length > expectedSuites;
            devkit_1.output.warn({
                title: hasAdditionalReports
                    ? 'There are more blob reports than expected'
                    : 'Some test results were not reported',
                bodyLines: [
                    `Expected results for ${expectedSuites} test suites, but ${blobReportFiles.length} were reported.`,
                    ...(hasAdditionalReports
                        ? [
                            `Ensure the blob reporter's output folder only contains the blob reports for the test suites that were run.`,
                        ]
                        : []),
                ],
            });
        }
    }
    return { success: true };
}
exports.default = mergeReportsExecutor;
function collectBlobReports(blobReportsDir) {
    const blobReportFiles = [];
    for (const report of (0, node_fs_1.readdirSync)(blobReportsDir)) {
        if (report.endsWith('.zip')) {
            blobReportFiles.push((0, node_path_1.join)(blobReportsDir, report));
        }
    }
    return blobReportFiles;
}
