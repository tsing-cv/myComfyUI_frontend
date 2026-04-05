import { ProjectConfiguration } from '../../../config/workspace-json-project-json';
/**
 * Manages deferred project name substitutions across the plugin result
 * merge phase of project graph construction.
 *
 * ### Why this exists
 *
 * When plugins return `createNodes` results, a node `A` may declare a
 * `dependsOn` or `inputs` entry that references another project `B` by
 * name. A *later* plugin is allowed to rename project `B` to `C`. After
 * all plugin results are merged into the root map, node `A` would still
 * hold a stale reference to the now-nonexistent name `B`.
 *
 * This class solves that by:
 * 1. Scanning each plugin's results for project-name references in
 *    `inputs` and `dependsOn` ({@link registerSubstitutorsForNodeResults}).
 *    Substitutors are indexed by the **referenced name as it appeared in
 *    the plugin result** — no lookup into any project map is needed at
 *    registration time.
 * 2. When a project's name changes during the merge, recording that change
 *    via {@link markDirty} so substitutors for the old name can be located.
 * 3. After all results are merged, applying the substitutors for every
 *    renamed project so that references are updated to the final name
 *    ({@link applySubstitutions}).
 */
export declare class ProjectNameInNodePropsManager {
    private projectNameSubstitutors;
    private substitutorsByArrayKey;
    private dirtyEntries;
    private knownProjectNodes;
    private removeSubstitutorEntry;
    private clearSubstitutorAtIndex;
    private clearSubstitutorsFromIndex;
    private clearSubstitutorsFromSubIndex;
    private forEachTargetConfig;
    private registerProjectNameSubstitutor;
    /**
     * Scans `pluginResultProjects` for `inputs` and `dependsOn` entries that
     * reference another project by name, and registers substitutors so those
     * references are updated if the target project is later renamed.
     *
     * Project nodes from each call are accumulated internally so that
     * string-form `dependsOn` entries (e.g. `"project:target"`) can be
     * properly parsed with {@link splitTargetFromNodes}, even when project
     * or target names contain colons.
     *
     * @param pluginResultProjects Projects from a single plugin's createNodes call.
     */
    registerSubstitutorsForNodeResults(pluginResultProjects?: Record<string, Omit<ProjectConfiguration, 'root'> & Partial<ProjectConfiguration>>): void;
    private createInputsStringSubstitutor;
    private createInputsArraySubstitutor;
    private createDependsOnStringSubstitutor;
    private createDependsOnArraySubstitutor;
    private createDependsOnTargetStringSubstitutor;
    private registerSubstitutorsForInputs;
    private registerSubstitutorsForDependsOn;
    /**
     * Records that the project at `root` was renamed from `previousName`.
     * Substitutors registered for `previousName` will fire during
     * {@link applySubstitutions}.
     */
    markDirty(root: string, previousName: string): void;
    /**
     * Executes all registered substitutors for renamed projects, updating
     * stale project name references in the final merged `rootMap`. Should be
     * called once after all plugin results have been merged.
     */
    applySubstitutions(rootMap: Record<string, ProjectConfiguration>): void;
}
//# sourceMappingURL=name-substitution-manager.d.ts.map