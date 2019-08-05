---
title: Git update-index --skip-worktree, and how I used to hate config files
date: "2016-06-01"
description: "A use case for managing local changes to config files"
---

While working on a large project with a team, there's always a handful of config files that need to be set up differently on local than on production. Ignoring files works in some cases, but becomes a headache when dealing with config files that need to be tweaked for local or any non-production development. Say hello to:

```bash
git update-index <file_name>
```

When _update-index_ is told about a file, it clears any _unmerged_ or needs updating state. It won't show up on your git status anymore. If a change is made to the file, it will again be flagged with an _unmerged_ or needs updating state. To make the incognito status more permanent, just add the _skip-worktree_ flag like so:

```bash
git update-index --skip-worktree <file_name>
```

When a file is marked as _skip-worktree_, git will read it as if it were up to date. Any changes made and saved to the file will not be flagged as a change. The file will be updated on a pull if the upstream file was changed. Git will output a conflict if both the local and upstream file are changed. This may seem like a negative if you're consistently getting conflicts here, but this is a good thing! If a config file changes upstream, that would mean that you need to change something on your end anyway, consider it a little reminder to update that local config and then re-apply _update-index_.

If/when you need to remove the _update-index_ flag:

```bash
git update-index --no-skip-worktree <file_name>
```

To list all flagged files:

```bash
git ls-files -v|grep '^S'
```

If you're a bash poweruser, here's some helpful functions I use in my profile:

```bash
# checks for any files flagged w/ --skip-worktree alias
check="git ls-files -v|grep '^S'"
# add --skip-worktree flag to file
skip() {  git update-index --skip-worktree "$@";  git status; }
# remove --skip-worktree flag from file
unskip() {  git update-index --no-skip-worktree "$@";  git status; }
```
