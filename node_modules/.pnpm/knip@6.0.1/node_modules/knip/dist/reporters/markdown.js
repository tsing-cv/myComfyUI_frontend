import { relative } from "../util/path.js";
import { flattenIssues, getIssueTypeTitle } from "./util/util.js";
export default ({ report, issues, cwd }) => {
    console.log('# Knip report\n');
    const getFilePath = (issue) => {
        if (!(issue.line && issue.col))
            return relative(cwd, issue.filePath);
        return `${relative(cwd, issue.filePath)}:${issue.line}:${issue.col}`;
    };
    const sortLongestSymbol = (a, b) => b.symbol.length - a.symbol.length;
    const sortLongestFilePath = (a, b) => getFilePath(b).length - getFilePath(a).length;
    for (const [reportType, isReportType] of Object.entries(report)) {
        if (isReportType) {
            const title = getIssueTypeTitle(reportType);
            const issuesForType = flattenIssues(issues[reportType]);
            if (issuesForType.length > 0) {
                console.log(`## ${title} (${issuesForType.length})\n`);
                const longestSymbol = issuesForType.sort(sortLongestSymbol)[0].symbol.length;
                const sortedByFilePath = issuesForType.sort(sortLongestFilePath);
                const longestFilePath = getFilePath(sortedByFilePath[0]).length;
                console.log(`| ${'Name'.padEnd(longestSymbol)} | ${'Location'.padEnd(longestFilePath)} | Severity |`);
                console.log(`| :${'-'.repeat(longestSymbol - 1)} | :${'-'.repeat(longestFilePath - 1)} | :------- |`);
                for (const issue of sortedByFilePath) {
                    console.log(`| ${issue.symbol.padEnd(longestSymbol)} | ${getFilePath(issue).padEnd(longestFilePath)} | ${(issue.severity ?? '').padEnd(8)} |`);
                }
                console.log('');
            }
        }
    }
};
