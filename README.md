---
ctime: 2026-11-04
mtime: 2026-11-04
spdx: GPL-3.0-only
title: "std-repo-docs"
description: "Standardised specification of repository documentation"
tags:
  - repo
  - docs
  - standard
  - spec
  - agent
  - skills
  - plan
  - note
  - wiki
  - project
---

<!--
   -
   - ~chewygumxx/std-repo-docs.git
   - ::: :/README.md
   -
   -->

# std-repo-docs

Standardised specification of repository documentation

## CI

`.github/workflows/ci.yaml` calls the shared
[standard workflow](https://github.com/chewygumxx/.github#standard-workflow):
commitlint, the header sync, generic lint and format checks for workflows,
shell and zsh scripts, TOML, YAML and `.editorconfig`, and the metadata sync.
This repository's own `bun run check` follows, against the commit the header
sync pushed.

## Development

- `bun run commit` composes a commit interactively.
- `bun run check` runs the checks CI runs: the typecheck, Biome's format and
  lint checks, Markdown lint (remark, then markdownlint), the YAML checks
  (prettier with `@chewygumxx/prettier-config`, then yamllint with
  `@chewygumxx/yamllint-config`), tombi's TOML format and lint checks,
  ShellCheck and shfmt on the shell scripts, editorconfig-checker, actionlint on
  the workflows, sort-package-json's key order check, knip's check for unused
  dependencies and files, CSpell, secretlint and a check that rejects em dashes.
  Each tool runs by its shared `@chewygumxx` configuration; a word of this
  repository's own goes in `cspell.words` in `package.json`.
- `bun run format` applies Biome formatting, prettier's to YAML, tombi's to
  TOML, which Biome does not read, and shfmt's to the shell scripts.

The pre-commit hook runs the same checks on staged files. The commit-msg hook
runs commitlint.

<!-- vim:set expandtab shiftwidth=2 filetype=markdown foldlevel=3: -->
