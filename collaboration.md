### REMEMBER to commit often.

Every time somethiing works hurry and commit. That implies 2 things - `git add .` and `git commit -m "what works now type here and other info"`

### Getting the team project on my laptop

`git clone https://url_get_after_clicking_green_cloneButton_in repo`

### Create my own branch to start coding/collaborating

After cloning branch `cd` into the newly cloned repo. Then `git checkout -b nameofnewbranch`.

### Moving to another branch

`git checkout nameofbranch`
_BEFORE_ you switch branches ever do `git add .` and `git commit -m "going to merge other branch or what not"`

### Get branch to Git hub

`git push --set-upstream origin currentBranch`

### Pull Request

Go to git hub and click tab for pull request
go to right side and click green button to create new one
make sure to pick what branch merge with master or other branch
Ping a group memeber to APPROVE the PR
after getting approval CLICK GREEN button to MERGE

### Rebase - get current online most recent code

-- on current branch
git add .
git commit -m "message"

git checkout master
git pull origin master

git checkout currentbranch
git merge master
