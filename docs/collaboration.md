### REMEMBER to commit often.

Every time somethiing works hurry and commit. That implies 2 things - `git add .` and `git commit -m "what works now type here and other info"`

git remote -v 

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

### Fixing merge conflicts in VSCode
This is how to resolve merge conflicts in VSCode ---
Look at the
GREEN(current code on your laptop)
and BLUE (incoming code)
at the TOP of the snippet is has a tiny bar with options of which to accept or both if desired.  - Click what you want and be sure to hit save file also make sure to add and commit before and after. Remember to look for the 'purple c' in the file folder area to see which files

![9yz5d](https://user-images.githubusercontent.com/25558342/49952562-64e60080-feb9-11e8-8fac-9af849897bcd.jpg)
