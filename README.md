# Git tests

###  Pre-commit hooks
A precommit hook should prevent a user's commit (locally) based on certain checks in the script (private keys, passwords, etc)

1. Add intended script to .git/hooks (can be in bash, ruby, python I believe)
1. Rename script to pre-commit
1. Test it out!

Check to run lint scripts in pre-commit? Would be a bit aggressive

#### CI/CD checks?
Should we add a check in ci/cd?

### Commit+PR bots, github work flows
Add a bot which checks linting, tests, etc
Runs and reports on tests


## References
1. Copy paste Precommit hook for string checks - https://stackoverflow.com/questions/53416905/git-pre-commit-hook-to-check-for-a-string-and-exit-code-1-if-the-string-exists
1. Great explanation on the different types of hooks - https://www.atlassian.com/git/tutorials/git-hooks