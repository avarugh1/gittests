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

CircleCI Check (same as Github Workflow except uses circleci)
- Probably won't be able to easily comment on Github PRs without some sort of creds

## Commit+PR bots, github work flows
Add a bot which checks linting, tests, etc
Runs and reports on tests

Github Workflow with actions
Reqs: Python scripts? Tests with testcafe?
1. Job 1 - Grab all files changed on pull request
   - Utilize git diff - compare between direct commits if needed
   - Store output to Github job output
1. Job 2 - Parse which changed files have the keywords we want.
   - Check which files have keywords for test notation
   - Check file type to make sure its runnable
   - Check file location is in the proper one
   - Output these files to the user or console
   - Store output files to Github job output
1. Job 3 - Run the files
   - Run the files with the appropriate config and files passed as parameters
   - Note the output
1. Job 4 - Output to Github pull request
   - Show as a check
   - Or show as a Github comment (can be done through Issue API)

### <ins>References<ins>
1. Detecting changed files (different than git diff, uses Github repos api) - https://github.com/jitterbit/get-changed-files/blob/master/src/main.ts
1. Job outputs - https://docs.github.com/en/actions/reference/workflow-syntax-for-github-actions#jobsjob_idoutputs
1. Comment on github pull request - https://github.com/thollander/actions-comment-pull-request/blob/master/src/main.ts

## Pull Request templates/other git templates (.github)

## BuildPulse action integration