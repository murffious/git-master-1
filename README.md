# git-master-1


How do I know if I am a "git master" for week 2 of bootcamp? <br/>

I know what all of these commands do and know them by heart -


### these commands are for working with the class repo or other repos you did not create or ones you did and want to copy new from online
`git clone <paste a url to a repo here>` 
notes - you do not need those carrot things just a URL that you get by clicking the green clone button on a git hub repo. you only do this step if you are literally copying someone's or your own repo to your laptop or computer. it is literally for copying code 

`git pull` 
notes - command to DOWNLOAD code from an exisitng repo or folder on your machine. so go inside the folder with "cd" in terminal and do git pull this will download any NEW code that is online but not on your machine - if there is a conflict use `git add .` then  `git commt -m "fixing conflict"` and try the pull again. a conflict means soemthing online is different than on your machine and it NO LIKEY.


### THESE COMMANDS below are for working back and forth with your code and github
`git init`
notes - do this inside a folder in terminal that you want to use git with - it initializes it to use git - you can see if that is done but using `ls -a` and see a .git folder in there. Also you can use file finder to show hidden files (. in front of a file or foler means its default to hidden) and delete the .git folder to get rid of git. do that if you have major issues and want to restart it all for git at least

`git add .`
notes - gets files ready to commit - "." means everything in folder _ALL

`git commit -m "please write a really cool meaningful mesasge here about WHAT and WHY you are committing"` 
notes - "-m" means message so write one for sure - when you commit something it gets a fancy reference number and creates a pciture perfect copy of all the code that was "added" in the step before. this reference number is stored in the .git folder.

`git log` 
notes -- you can see the nice commit message and reference number and ALL your commits here

`git remote add origin https://github.com/this_is_your_github_username/your_newly_created_repo_name_here.git`
notes - this line of code is copy and pasted from github AFTER you click the PLUS sign button top right and click NEW REPOSITORY then put a name in the box (no spaces) and click the GREEN BUTTON saying "Create Repository". It means that you are adding a HOME online in the cloud on github so a remote destination for the git to send code to for this folder. - this can be changed but that is later y'all.

AT THIS point you can PUSH or send or upload to that newly created HOME on github. 
`git push -u origin master` 
notes- this can also be copied and pasted from github when you create a new repo if you forget it. It pushed or sends all the code that has been COMMITED at that moment to github for living there. YAY always do this daily for all code you wrote - trsut me on that 

- lets say I did all that and pushed all my code up and all is happy and fine. okay now I changed my code and added some?
MAGIC 3 words everytime 
`git add .`
`git commit -m "I added some new nav bar and other cool stuff and it works so I am saving to git now"`
`git push`  *you only need to type "git push -u origin master" one time cause it locks in (sets upstream to be exact and upstream means which branch to send back and forth and usually its master so it says master)

if you ever get and error you likely forgot to add and commit so do that again for fun.  

Then to host make 100% sure you have an index.html file in the ROOT or main level of the folder on github so not nested anywhere. Then click top bar right on SETTINGS go down and find section called GIT HUB PAGES and click the button that says NONE under source area and change it to MASTER BRANCH and click SAVE - then scroll down and click the live link and SHOUT YAY THIS IS SO COOL if it worked if not then SLACK out - Pauls DOCS suck but not really just a kinder version of it though. 


THINGS we will learn later but is not requried to be a MASTER at this level - its kinda like this is an ORANGE BELT in KARATE terms and we are not BLACK BELT yet but soon very soon
`git checkout -b nameyourbranch`
`git checkout putbiglongcommitnumberheretogobackintime`
`git merge`

