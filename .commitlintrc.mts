// vim:set expandtab shiftwidth=4 filetype=typescript:
// SPDX-License-Identifier: GPL-3.0-only

//
//
// ~chewygumxx/std-repo-docs.git
// ::: :/.commitlintrc.mts
//
//

import { defineConfig } from "@chewygumxx/commitlint-config";

// Types, limits and the prompt are shared; only the scopes are this
// repository's own.
export default defineConfig({
    scopes: [
        {
            name: "claude",
            fullName: "Claude",
            description: "Claude Code assets ie. hooks, skills, agents, etc.",
        },
        {
            name: "skill",
            fullName: "Skill",
            description: "Skill",
        },
        {
            name: "spec",
            fullName: "Spec",
            description: "Spec",
        },
        {
            name: "schema",
            fullName: "Schema",
            description: "Schema",
        },
        {
            name: "format",
            fullName: "Format",
            description: "Format",
        },
        {
            name: "util",
            fullName: "Util",
            description: "Util",
        },
    ],
});
