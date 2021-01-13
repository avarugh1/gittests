# Git notable use cases

##  Pre-commit hooks
A precommit hook should prevent a user's commit (locally) based on certain checks in the script (private keys, passwords, etc)

1. Add intended script to .git/hooks (can be in bash, ruby, python I believe)
1. Rename script to pre-commit
1. Test it out!

Check to run lint scripts in pre-commit? Would be a bit aggressive. Also, convert to python

### <ins> References</ins>
1. Copy paste Precommit hook for string checks - https://stackoverflow.com/questions/53416905/git-pre-commit-hook-to-check-for-a-string-and-exit-code-1-if-the-string-exists
1. Great explanation on the different types of hooks - https://www.atlassian.com/git/tutorials/git-hooks
1. Sharing git hooks with team (since .git folder doesnt get added to vcs) - https://medium.com/@chamikakasun/how-to-share-git-hooks-with-the-team-37424603dd91


## .gitignore exceptions
A .gitignore exception would be useful if we have a folder with only a sample file that should be committed. For example, in Postman, creds and such have to be noted in the collection env file. Generally, we can commit Postman scripts to VCS with a sample env file. Then, if someone wants to setup their own env file with their own creds, they can copy and have the 2nd env in the same location.

With the gitignore exception, we can ignore all the files in this env folder except for the sample, to prevent users from committing their personal env file into VCS

```
# Test gitignore exceptions
samples/*.notsample
!samples/*.sample
```

### <ins>References<ins>

1. .gitignore exceptions - https://stackoverflow.com/questions/987142/make-gitignore-ignore-everything-except-a-few-files

## CI/CD checks?
Should we add a check in ci/cd? Add additional checks

## Commit+PR bots, github work flows
Add a bot which checks linting, tests, etc
Runs and reports on tests

## Pull Request templates/other git templates (.github)