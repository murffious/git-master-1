# Help I am Stuck: A quick guide to help beginner programmers get unstuck?
Purpose: This document is intended to be an aid to you in the first 6 - 12 mon. of your coding career to help develop some habits that will make you an independent problem sovling developer.  

## **KEY attitude 1**
- Learning takes humility.

A humble learner is the readiest learner. Naturally if you are stuck you will be getting feedback. Understand and accept that you will make mistakes. The point is to find them early, before they make it into production. Fortunately, except for the few of us developing rocket guidance software at a place like DragonX or NASA, mistakes are rarely fatal in our industry, so we can, and should, learn, laugh, and move on. You are not your code. Also remember to treat others as you would be treated with feedback. Critique code instead of people-be kind to the coder, not to the code. It was hard for me at first to take critical feedback - I felt defensive - don't do that. It's just code it's not you. Also don't ever think you know eveything, as a new dev you most certainly won't "be there" for at least 6 mo. - 18 mo. depending...

## **KEY attitude 2**
- Learning to code is very hard thus learning to code/program [web dev] takes patience and determination.

You can never learn everything at once, NEO in the Matrix could do stuff like that BUT we have not left the MATRIX ... Just kidding. Sometimes you will stare at code for hours and that is not necessarily okay but is reality. Like learning any new language fluency is not usually easy or super fast. 

"Put in the Hard Hours, at Least 20 Hours, outside of class. According to author Malcolm Gladwell, successful people put in a minimum of 10,000 hours of deliberate effort to master their craft. As newcomers to the field of web development, be ready to put in your share of hours. While the bare minimum to survive this program is 10 hours of outside class time, we've consistently found that those most successful put in closer to 20 hours of outside effort per week. At times, this number might even need to go upwards of 30 or 40 hours per week during more challenging topics. Simply said, there is no substitute for long, hard hours." (see pre work)

## SKILLS/HABITS to develop for getting UNSTUCK and just being a good programmer!
1. Debugging
2. Google-FU aka Googling
3. Thinking Like a Programmer
4. Getting Outside Help
5. Mastering Workflow Tools Better & General Tips
6. Learning How to Learn [for Mastery]

#### **Skill 1: Debugging (Fullstack JS Web Dev Style)** 
At times, it might even feel like fixing an issue is taking 3–4 times as long as conceiving the original solution. Know in advance that this is completely normal. For novices and experts alike, fixing code is often the most time-consuming task of all. Instead of seeing these spent hours as a distraction, learn to see them as a critical part of the learning process. Each bug you pursue is a lengthy lesson that adds to your arsenal of understanding. Also it is an employable skill I have seen many times on job postings and know many interviewers use broken code to test your skills on.

###### Debugging Overview
A. Write CLEAN code aka just don't write bugs 
B. Ahhh BUG! Where? What? When? Why? How[to fix]? - Error knowledge
C. HTML - Common issues for NOOBS
D. CSS - Common issues for NOOBS
E. JavaScript - Common Errors Checklist for NOOBS
F. General Libraries and Frameworks Troubleshooting Tips 

##### A Write CLEAN code aka just don't write bugs
"Precursor to a BUG" Yeah I said it : Writing Cleaner More Efficient Maintainable Code  It has been said this is the key to squashing bugs in our code just don't' write bugs in the first place. Much has been said about this as a precursor to debugging so that in the future you will have less bugs. It should be your goal to CARE about your code. Furthermore, many a job posting has the required skill of Write Cleaner Code and avoid bugs. It was said in a recent retrospective of a group of university bootcamp students that they wished they wished they had focused more on things like code style/conventions which would have led to less confusion which in this case is from a group working on the same project. To fully support this we read in "The Art of Readable Code” by Boswell&Foucher,  "The fundamental theorem of readability : code should be written to minimize the time it would take for someone else to understand it !" I paraphrase further advice from the book: Things you can do to improve your code: picking good names,(semantic meaningful names for variables, functions etc) writing good comments, formatting your code neatly (clean use of whitespace). 

Clean maintainable code - Coming from a non technical background where I thought everything should be automated and why are we using terminal not GUI etc for me especially writing well spaced code was so annoying and I was by habit a sloppy writer. 2 spaces or 4 naming conventions for variables and functions. feed back from other cohorts is hat they wish they knew this stuff before Just start good habits early and be very CLEan in all your code I promise it will pay off. " write code for OTHERS to come then read it"
DRY - if you ever fin yourself repeating code even twice you may need to refactor and generalize and do something better 
after you have exhausted the checklist you are ready to Google it - trust me that list helps Google ain’t going to solve your typos BUT it might tell you someone else had a typo and then fixed their typos to fix said error. so either way it gets done. So onto Google. Continued below... 

Handy tools for helping with syntax and so forth 
JS hint http://jshint.com/
JSON pretty print - pasting huge JSON objects like when console logging a response obj from an API call or what have you and being able to actually see it. also console.table is good too. 
CSS lint
HTML validator 
NOTE: Linting code is a topic for later discussion once you have good habits for writing clean code. ESLint/Prettier/Beautify tools for JS can check and fix syntax errors but if you don't learn on your own first it will always be a crutch and you may get caught in a pickle someday do use linters like ES lint later after like 4 months or so. Preventing BUGS is also related to testing code but will not be covered in this DOCS. 
VS code has tons of extensions :I fyou soley rely on these they will be a crutch so jst decidde now to install them in about 4 mo after you have good clean habits without them as with many tools like with hitting tab for a for loop - I asked a student to write a for loop and he could not do it after about 7 weeks because he only used the auto complete snippets. True story - and plus your future employer may not allow those tools or force you to use a different code editor. NO bueno. 
As with HTML and CSS, you can ensure better quality, less error-prone JavaScript code using a linter, which points out errors and can also flag up warnings about bad practices, etc., and be customized to be stricter or more relaxed in their error/warning reporting. The JavaScript/ECMAScript linters we'd recommend are JSHint and ESLint; these can be used in a variety of ways, some of which we'll detail below.
It is not very convenient to have to copy and paste your code over to a web page to check its validity several times. What you really want is a linter that will fit into your standard workflow with the minimum of hassle. Many code editors have linter plugins, for example Github's Atom code editor has a JSHint plugin available.Or in the command line itself

Using the JavaScript debugger
maybe chrome tools link here too



##### B. Ahhh BUG! Where? What? When? Why? How[to fix]? 
Plan of Attack
Ask these questions when you have tried you best to write clean code and you still have broken code - everyday :
**Where?** By where we mean *Where* in the code stopped on? A specific line of code and file name. Code reader computer reads the code from top to bottom. Code will not even run if there is what is known as a fatal error meaning there is a syntax error . So the code compiles first then runs. Languages are different but in javascript this is how it works.Some times its nestes in the error message Where is the origin of said running code. function etc. Find out the last function that worked what variables are being used and then you can find what stopped the code. Stack Trace  yellow red clicking on browser it takes you to the line of code if you you two screens if not it will go there if you click back to the code editor it wil be there. Not sure if its jsut Chrome or React or what. 

**What?** What caused the code to stop? More specifically what is the error(message hopefully)? A bug duh. But what is that bug now that we have found it?
most the time you will know but not always 

Error reading - Understanding how Javascript is run this cannot be fully covered here so all can say is the computer (node js/bash terminal, or chrome V8 engine - the code runner/executor) is going to compile the code. The first goals is to find the point in the code at which the Error was instantiated. Node Bash console may tell you or Chrome/Mozilla tools in the console.

- Syntax errors: These are spelling errors in your code that actually cause the program not to run at all, or stop working part way through — you will usually be provided with some error messages too. These are usually okay to fix, as long as you are familiar with the right tools and know what the error messages mean!
- Logic errors: These are errors where the syntax is actually correct but the code is not what you intended it to be, meaning that program runs successfully but gives incorrect results. These are often harder to fix than syntax errors, as there usually isn't a resulting error message to direct you to the source of the error. 
What line of code did it stop on.? console log and variables in the vicinity - check for loops and if statements 
ReferenceError: Syntax error fatal errors read debug code error 
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Errors
**When?** Does it happen before running the code  Did it happen after a certain event like a click - if it is event based you can track those down.

**Why?** undefined, imporperly used object or reference to an object or function


How to fix it?

Check for typos its a common mistake for beginners just make sure to spell check each and every word and especially quotes multiple times before giving up especially if you think you did everything right use the tools mentioned above like JShint to fix syntax errors , missing curly brace. missing a period ro bad nesting on object reference, missing one [], missing (), 

run code after each function to make sure that piece works - hard to pinpoint if you wrote 10 functions and so forth 
you could Google how to fix and paste the error message this leads to our next sections so jump ther if neede.d 
variable is undefined or of the wrong type - type of console.log
console.log(the exact code inside a conditional )
Click on the error in the yellow or red big error message in Chrome and it will jump you right to the error in the code in at least VS Code and I think Sublime . I t can also show a list of functions that were fired that were all tied together and where it finally broke. 
comment out as much code as you can to pinpoint that area of code and make sure it is running okay expecially with callbacks and anything nested 

Making sure all your divs are in order proper indenting helps with this. 


When you cannot answer all theese questions that is a problem> Do this. Shotf=gun spray console logs all over With number comments or line disiticntion somehow. before and after ainside each and every funcitno till you find t. OCnsole log all vairbales being used beofre and after the funcitnn. 
###### C. HTML
With HTML 
what elements have what attribute like select inputs and input validation as properties how they work , how to Iframe work and 

use the Chrome debugger tools after validating it . check closing tags like in React IMG and BR HR tags all have to be closed. For our purposes VS code will catch almost all HTML errors and Chrome inspector tools are awesome hitting f12 to view source code to see HTML in action. 
elements and selector tool click into the DOM tree and click drop downs to dig deeper into the page . take a free youtube Chrome tools tutorials which could be my answer to anything . If not answered her google more. Honesty just go to a cool site and click around yes click everything and everywhere to see what happens hover over stuff click it hover it and back and forth. its very intuitive for most.  

###### D .CSS
CSS just play with the Chrome tools - up and down arrows on keyboard to play with pixels and percents . you can delete elements add stuff in change stuff. just get it right then copy paste styles into your code editor and refresh the page. 
click one div and it highlights the closing div or whatever tag
google cool buttons css or cool background css 
layouts containers wrappers and planning those out on paper

how to move this element space it right, how to do animations or what not and how to fix my image to make it look right.
Toggles display none and display block issues and that is mostly based on having the right javascript in place
how to center stuff and have nice layouts and knowing your selectors.  https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Selectors Xpath for advanced stuff CSS grid Flexbox. 
use bootstrap or Materialize or a host of other like Foundation Zorb etc. UI kit
what is Cascading and when using bootstrap hw to override and all of that. 
Learn SASS to be more powerful and 
https://specificity.keegan.st/ specificity issues not to have !important or inline styles everywhere. 
layout issues float issues. only answer study good sites and see how they do it and take another tutorial then Practice practice practice is the best answer for that. X path advanced stuff. 
Responsiveness media queries and dealing with image sizing in general -
learning deeply about background attributes can h=be very helpful like position and images and repeating al that. 

honestly Lynda com has some essentials classes that are free if you are a SLC city library member 



###### E .JS


Finally knowing more about Javascript (or your language) in depth will understanding how it works behind the sense under the hood will greatly help you prevent bugs as well in helping you write code a certain way based on that . JavsSctipr the hard parts, doing toy problems and building stuff with Javscript and reading tons of Javascript books
Learn more will get you unstyck see Skill 6***

wrap Code blocks in these then usually just console.log(err)
try {
    Block of code to try
}
catch(err) {
    Block of code to handle errors
    //Example: 
    console.log("Error:", err)
}

https://www.w3schools.com/js/js_errors.asp
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/try...catch

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Errors
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error
NOde https://nodejs.org/api/errors.html

Rollbar is a much used super cool and one of many many tools that try to catch bugs in production code and they have compiled a list of common errors . I can say with certainty the very first answer brought a big smile b/c YUP that is an error I have had hundreds of times 1. Uncaught TypeError: Cannot read property read more here. 1, 6,7, and 8 are very applicable to javascript full stack devs and guaranteed you will see them in the future unless you are that rocket science guy or use super powerful linting tools. You won't need to learn rollbar that is more for Dev Ops people but jsut knowing of tools like it is helpful. https://rollbar.com/blog/top-10-javascript-errors/ - these won't make sense to you know _ so I am going to hope you come back and back to this till its a mastered skill. Error reading


HOW to fix it ?
My 10 most common errors done by me and fellow boot campers and beginners 

Debugging Checklist - just do all these steps several times to be sure before giving up and then never give up 
This mainly pertains to JavaScript or other code - HTML and CSS is a little different

1. Check for spelling typos everything HAS to be exact - even file names etc. most common one for beginners I would say including me.  many frustrating hours spent till you finally learn spell everything exact already. Most the time someone else has to look at it to be honest cause you cant see your won spelling errors. then someone else takes one look and says hey that is spelled wrong countless times this has happened . 
2. Check for undefined variables, log all closely related variables 
3. Check to see if loops are correctly used logically i.e. (let i = 0 ; i< arr.length; i++) operator is in the right direction. are you starting at a logical starting point, is the middle piece condition really a number many times you will be looping over an object or something that is not a number. hence no workey.
4. check conditionals to see if they are true or false or what they are and/or log immediately inside the loop or conditional and if the log logs to the console lat least you know the loop or conditional is true and loop works at least once.
if you don't know what line the code is broke on you have to use the VS Code/Node/JS debugger tools or Chrome dev tools under SOURCES for break points OR you can just console log my favorite ( hello 1 ) (hello 2 ) or more descriptive phrase like (inside for loop:)
5. Reference Working Code even pull up side by side of a working example 
6. Take a quick break come back with fresh eyes or even better get some other eyes on it especially with typos.
The reason that is needing to be said is that the very first hurdle to jump over is that code must be essentially perfect to work or run so typos will kill ya. 
7. Check file paths to linked css and JS files KEY trust me and exact spelling of said paths 
8. check to make sure the file is even linked if nothing is happening at all. JS particularly again countless times student have no idea why the code is not working - its not linked up - this is so key it was actually an interview question two times to why is this code not working 

9. For HXR requests the network tabs in Chrome tools is very useful . Also console logging any responses immediately is key to know how deeply nested your data is. before using it. Objects in general
Making sure asynchronous operations have returned before trying to use the values they return. For example, this Ajax example checks to make sure the request is complete and the response has been returned before trying to use the response for anything. This kind of operation has been made easier to handle by the introduction to Promises to the JavaScript language.

10. Error: Cannot find module 'C:\c\Users\Duran's coding comp\AppData\Roaming\npm\node_modules\babel\lib\cli.js'
    at Function.Module._resolveFilename (module.js:547:15)
    at Function.Module._load (module.js:474:25)
    at Function.Module.runMain (module.js:693:10)
    at startup (bootstrap_node.js:188:16)
    at bootstrap_node.js:609:3
    npm install or its somehow lost so jsut re install it and make sure file sturcture is such that the node modules exist in the folder.  Node modules are literally plisttle pacakges of code someone wrote to do stuff and you call them into action into your code to do that stuff they proclaim to do so you don't have to write the code yourself - rememebr to go look at the node modules for a particualr 
CHeck the pacakge.json and see if it is listed in dependece (or dev deveopedices) also note the version.

Runnign the right file? drag file into command linke in vs code. and kill all other insatnces of node if you can - use task manager on windows a nd activity moniter on mac 

To top it off here is one more respecable top 10 resource. See if you can spot any you have made. 
https://www.toptal.com/javascript/10-most-common-javascript-mistakes

If none of this helps YUP read elsewhere. Here are articles you may have read but may need to review AND/OR Google and read more just like them.
https://remysharp.com/2015/10/14/the-art-of-debugging
https://news.ycombinator.com/item?id=11729806
https://developers.google.com/web/tools/chrome-devtools/debug/?hl=en


  

console. back end front end dev tools in Chrome or Firefox whatever and backend in the node or bash terminal 


F. General Libraries and Frameworks Troubleshooting Tips 
express - full stack how to send data to back end and back to front etc. 
each libariy ahs its own error messags so all these princiels can appy there.
any framework library debugging its about finding code that it every similar in purpose and is working on stack-overflow , codepen js bin and the like then just going over the DOCS and really understanding how stuff works https://www.javascripting.com/
PRO TIP:
Better you learn real "vanilla JS the better off you will be" 
PRO TIP - DOM manipulation is a skill is called grabbing elements on the page to do stuff with that is the starting -  jQuery or React /Angular all have different ways but learn vanilla first well . 

#### **Skill 2: Google-FU** 
Programming is also one of the most frustrating things you will ever do.working through that frustrating feeling.there is almost certainly a solution out there. after hours of digging I have found help for very tough complex problems 
3.You will hear often from TAs and Teachers just Google it but this doc is for expounding on that a bit.
 google can be intimidating.

stack overflow  why waste time looking at the question the bad code just jump to the green check marks - etc 
 Now copy and paste the error message and google it looking for stack overflow type articles - then share or bookmark it to never have to google it again and save others the same frustration
be sure to stripe out your local info and just google the generic error. with like our file name etc. cause no one on Google has the exact file name or at least less people.
Your answer could be in a video it could be in a git hub issues post, it could be on reddit. 80% for me are on Stack overflow and 15 percent in the git hub issues threads. this is more common with packages cause that is where people complain about the package and the authors respond and address them and 7% just out there. 8% in cool tutorials in medium or similar articles.

how to scan stack overflow fast look for how many votes ALWASY read the comments below I have solved many problems with those EVEN if they have lots of upvotes 
green check mark and title of the post 

If following someones read me tutorial try to clone the repo and get it working all by itself exactly as intended by the author but on your machine then once that is done you can try to move pieces of it or all of it into your project. 

CAUTION and TIPS from the HOT SHOT PROs - Stephen Grider tips 25000 students (good for MERN stack so please check all his courses out well worth it in my opinion and I don't get paid to say that).
Don't ever take any code snippets you find online if you don't understand how they work.
Remember once As a result, any problem you've already solved will get a lot easier to solve next time.

You have already read this article in the prework but here it is again just so you can re read or Google another one like it to learn even more. 
[Googling better](http://www.informit.com/articles/article.aspx?p=1315437)
google fu also google more articles like this one how to google fu or how to google for developers or many others 

Hint 1 - first and foremost Google the entire "thought" or "question" you have exactly as you thought it - and add words like examples of, how to, why ? and then the language like javascript on the end of it all - You can click over the right side in Google for last month or years results to weed out old results. If you are a google hater I would stop it now. There is evidence it has more relevant results for coders but that is highly debated so do what you want But when it comes to spelling things wrong Google is WAY better like WAY better at guessing what you meant so just I suggest using it.

How to Read Docs is a real job skill - learning new tech will  likely forever be a part of your job as a developer. Read the docs once then code some more then come back to the docs I promise they make more sense over time. 
HOW TO INSTALL
quick basic examples of how to use the BASICS. most complicated stuff is not in the docs. so getting it to work with your code FOLLOW exactly what is said and if it does not work double check then google your dev environment issues then maybe try to change it up a bit if needed - Being a pro developer is KNOWING the docs for a particular library or framework. 

go to the docs - try to get the code for the package or what not working independent of any other code IF you can " if that makes sense. then once working bring into your own code. sometimes the docs are not good enough for you use case. Then there are sites like JSBIN, Code Sandbox, REPLIT, where snippets of code are saved in a working order fashion to see in action.  Codepen NOW the risk of using this is you become the copy and paste guy and that will not get you a job 98 % of the time. SO do what you can to be the problem 

Medium, Stack overflow, Scotch.io Youtube, 
google with specifialy looking for a video cause it has links to other relatd videos on the side or click video on the saerch results

**Skill 3:"Thinking Like a Programmer"** 
Be a Problem Solver: 

& Pseudocode
If you find yourself in a project and don't know where to start. Read on. 
Details- Attention to detail like follwing a README step by step exactly. IF something is nor workign restart at step 1 and double check each step.  Computers are exact so be like them.
If you want be better at algorithm problems and handling nasty complicated code /data manipulation in your projects or even refactor and better your code . 
Trade offs CS algorithm class - more efficient, cost etc. 
it is said that is about trade offs start to see that 8 years off stuff  CEO stuff 

There is a common saying in programming "Rubber Duck It."

Walk through your code out loud to an inanimate object (like a rubber duck!) and pose your question. As you’re asking the question, the answer might come to you. so many times I have just asked my senior  or co worker devs a question and just asking it the answer came to me but I had to ask it out loud (or at least in a Slack message) verbalize or vocalize it 

write your program on paper. In a real world technical interview we call it white boarding but paper or whiteboard writing the code helps take you out of the help from a code editor or syntax errors etc and just focus on the solving the problem. 
Toy Problems technical Challenges thinking like programmer
Look up all the possible array or string methods on W3 schools or MDN and find out if any of them can help do something like sort, or whatever.  break things down into tiny functions that do one thing and do it well. 
Immediately handle edge cases - empty array zero negative numbers weird stuff 
Once solved a problem look at or google all the other answers to the problem this will teach you much. 
be able to go back and forth between data types like Number and string, working with indexOf and splice and slice and replace , join, split making a map over an object as taught by Grider push pop shift unshift - really Grider says its usually just have you seen that one before so do toons of them read coding challenge books and Code wars leet code and code fighters , Codility and so forth - timed eventually for interviews so you need to be good EVEN if you are one to think these problems have nothing to do with how I can build a site trust me it does help and employers do it anyways in most cases expect for start ups but still you eventually benefit by mastering these 

break down pseudo code and know the language more and more of what it can do understanding for in for of and map Number and toString - again playing around with nested objects doing stuff to the data inside them and so forth will come up in real coding i promise and reg ex
manipulating, checking, tool box: conditional, loops, methods on that data type - 

Never write a line of code you never FULLY understand - at first this is obviously too much to ask but as time goes on make sure you know and can explain out loud every single detail of every character or line of cod.e I have asked many students what is that or what does this mean exactly and they say they know but can't explain it.  CEO code smith says world class engineers master the skill of technical communication and you will be asked by employers to explain code so get to it.Try pair programming for a bit with someone so you can see how others think and you will grow a lot.  
Take some MIT Stanford Harvard free real CS classes online 
Introduction to Programming Logic
https://www.youtube.com/watch?v=GNyvRP6HzhA&feature=youtu.be

Pseudo Coding - A real story - It happens all the time
Breaking things down into small steps: Story student comes after projects were planned and started and says I am supposed to make this button click and do this and that and all this and have no idea where to start. 
I then showed the student how she knew exactly how to do each and every thing she was assigned but was not breaking it down to see that. At first this will seem annoying but it will help you break down tough problems into manageable bite size pieces. Just ask yourself what is the exact thing I am trying to accomplish right now and write it down in pseudo code - now Google that exact phrase in a general way - CEO code smith  research research research and no coding then you have the copy and paste from stack overflow all your answers. You want to be in the middle in the "independent problem solver" zone. 

After your second language, you'll get much faster at picking up new languages. You will see patterns emrge and things like React handlebars all build on previous patterns. 
according to the MIT course algorithm that class shaves off about 8 years of experience. trade offs efficiency etc. algorithms course from a pro I respect says just having had that problem is the almost only way to solve it hardly anyone very very rarely someone come up with some answer to a really tough algorithm like Recursive Fibonacci but those having studied it before hand will be able to pass the interview. that is why books like cracking the coding interview are popular. 

MIT algorithms class lots of JS free books etc. algorithms helping you be better code faster 

OOP - understanding basically that all of coding is mostly 
Function do do one thing and do it well
Functional  
Declarative 
OOP 
and just in general understanding how compilers work and what programming is in general 
patterns MVC , React Container/Presentational 
Clean maintainable code - maintainable lots of time has to do with learning these types of things. the =overall style and architecture of yoru code MVC and organization. General functions resuable 
Get smart - Microsoft  Podium - if learning is always there and problems solving requires elegant creative solutions then analytical thinking critical thinking skills are key Steve jobs Law school skills quote. 


**Skill 4 : Getting Outside Help**
Use Slack chat groups, Facebook Groups, Meet-ups, Office Hours, Tutors, these are real people not Google, Videos, Tutorials, ReadMe etc. Slack is by far the best but for some things Facebook group comments and other message boards like Git Hub or Reddit can be huge help as well. 

I was helping someone at the UofU bootcamp when they asked a quesiton abotu React native Tab navigaotr. I did not know the answer off hand and our first google saerches led to nothing.  I told him to slack it out in a specific channel for that tech and he got the exact spot on answer in less than minutes. he promptly joined the Slack channel I recommened and also told him to post it in Facebook Group for React native at the same time.  WIhtin 2 miniutes the exact anser came to him by some awesome fellow coder. It was a link to the full explanation we had never found. 

I have also been helped by Slack messages many times. There are a few things I have learned in doing so. Basically the rule is jsut respect the community common sense type of stuff.  If you care to have it spelled out here are a few tips. 

1. - Slack the question out to multiple places at once if it is super urgent - when is it not urgent to get help..? ;P. You won't always need to do this but it can help you see where and how fast helps come and what quality of help from each source. If no one answers the question within like 40 min. it won't help you that much get unstuck anywasy so delete the message off the board so people don't waster their time. LIke if you solve it before them, it happens, rememebr just asking the question outloud usually helps a ton, then post the answer it might help out someone else. 

2. - Make it easy for others to help you without asking a lot of time consuming questions or really any quesitons. be exlicit and clear enough in the first post the best you can, many times clarification will  be needed. 

    For example - "I want to do .... with ...." x " tech...Here is what I have tried ....(code snippet) here is my error - please help ...this post (use a link of something related but not totally all there to show you tried to solve it on your own to no avail etc)- that allows gracious people to jump right in and help and not have to ask back and forth and spam the threads so much and spend too much valuable time. Be specific. paste code snippets using ``` code here ``` basically it takes practice. how can you ask in a way that someone else not looking at your entire code base be able to help. Less is definitely better cause its other people's time so JUST enought to get the exact issue across. Hopefully so that don't have to ask any clarifying quesitons but its okay if they do cause it means they want ot help.  

if the question is asked right more will be happy to answer. So if you get little help its very likely just the way you are asking 
I say this b/c I have asked questions and only got crickets till I delted the post and totally re wrote it so it actually made sense to someone not looking at your entire code base. I eventually learned how to write in a way people would be happy to help. Quick answer usually come in the form of oh yeah do this, jsut add this line of code, change that line to this, or here is the link that helped me solve it. 

3. - ALWAYS give great thanks to someone who gave you FREE help. More likley they will help again and others will see it too. It creats the feel good vibes that make it all work. Give credit where credit is due type of thing. 

4. - Pair coding in class or after class or going to freecode camp or other local coding meet-ups have many of them have group coding time to help each other out 

SLACK CHAT - "Where work is done"
Here is a list of totally free public Slack groups: CodeNewbie, Code Buddies, and Career Change, Coders. There are literally lists complied that have over 1000 groups 
https://blog.standuply.com/the-ultimate-list-of-400-slack-communities-2a7f3954f1d3?gi=a6a2c5ba0a47

UoU bootcamp channel - all channels 

FACEBOOK -
There are Facebook "Pages" and "Groups" - both can lead to some help. These are just some of them. 

Web Design and Development
https://www.facebook.com/groups/websworld/ 

freeCodeCampEarth ( also most states and/or cities have more local groups)
https://www.facebook.com/groups/freeCodeCampEarth/ ,

JavaScript
https://www.facebook.com/groups/JavaScript.Programming/ ,
https://www.facebook.com/javascriptJS/ , 

FreeProgrammingBooksAndCourses https://www.facebook.com/FreeProgrammingBooksAndCourses/ , 
 
JSWeekly
https://www.facebook.com/JSWeekly/ , 
https://www.facebook.com/react/

The React and React Native groups are helpful jsut look for the groups with the most people in them and ask to join. 

Finally you have Office hours and optional Tutor (ask Corrine and instructors about this ) If you are willing to put in the time it will come to you. You have a support network. Never take the easy way out at least come to office hours and get a C level HW with their help is better than incomplete since there is no GPA based final grade. 

Do you want to challenge your self and get help to learn new tech not taught in the curriculum?

Office hours at any point if you would like to learn outside topics not covered in the course request that it be taught in office hours mini lecture format by TA or instructor IT YOUR TIME> - use it Redux, Flexbox, CSS GRID, Selenium,React native, Docker etc. OR want to have a group review of the class content we can and would love to do that ,

Also check out :

FreeCodeCamp Message Boards, MDN Learner Area boards and tons more. 

I promise eventually you will be the one helping out and you will not really be the one asking the questions but use these resources as much as you need as a NOOBIE.

**5. Master Your Workflow Tools Better & General Tips**
These are basically time saving, gray hair stopping tips stress and frustration. Not going to techically make or break the code but can save time effort. 

Workflow and Tools VS Code GIT/Terminal - master your tools the proverbial tricks of the trade - swing the hammer a certain way even work smarter not harder. 
Things like being able to create new branhces and merge stuff in so you dont break working code with experimentation new features 
Time Saving Frustrations saving skills
Master your tools
hot keys like up arrow and VS code tricks can save lots of time and frustration. like dragging the file down to terminal to run it and knowing how to save all files with save key and on and on - using things like Replit to run JS and Chrome dev tools to fix UI issues CSS and HTML problems of any sort. using the debugger tools in VS code and Chrome. 
Tons of courses on your code editor of choice.  VS code in partifualr is gaining speed and has more powerful extensions and new tools coming out each month. 
Keyboard shortcuts 
VS code debugger tools (the no bug symbol of hte left) You can run a node debugger instance and chrome tools from VS code all for a front end back end debugging "line by line" experience.
All the bars (bottom tip left right ) all have veyr pwoerul stuff play around with them. 
VS code hot keys 
https://code.visualstudio.com/shortcuts/keyboard-shortcuts-windows.pdf
https://code.visualstudio.com/shortcuts/keyboard-shortcuts-macos.pdf
Prettier
Snippets (React and HTML etc *EMMET)
Terminal TAB UpArrow cd ~ if you don't know those you should.
ESLint - This tool was mentioned above in writing Clean code point. 
Beatuify 
OPen in Browser
New SQL tools being built right in for connecting and viewing data
https://github.com/mtxr/vscode-sqltools
PLAN with detail 
Use project management tool like Trello !  break stuff down all that is applicable here .This was stated during a retorspective of uof tudnets they wished they ahs planned orgainzed better with Trello. Organization is said to have cause less repeat work and planning is well everything.
draw.io or Google version to plan apps out 
Save the best for last. Commit and push often - I repeat commit and push often - YOU Will face a day when that will save you so much headache  Back up, back up, back up. 

Learning your tools will help you get unstuck.
dev tools https://flaviocopes.com/chrome-devtools-tips/

**SKILL 6 Learn How to Learn for Mastery**
Really this section is about knowing something - taking the learning to a level of proficiency or mastery - so can you do it on your own develop a skill.

1. Learning aka Master New Content Fast learning how to learn - its on countless job postings as real skill. so do it. 

As a benchmark, consider spending 70–80% of your outside class time writing and reviewing code. Only the remaining 20% is for other passive activities. If you are watching a tutorial or long course you are either coidng line for line with the instructor or you are pausing the video periodlically to go put into practice what you are learning.

  build stuff build stuff anything just build little sandbox stuff watching tutorials is like listening to how to speak Spanish cds all day and never saying a work in Spanish or never going to a Spanish restaurant for example and practice the phrase learn by doing 
Get it working then refactor
Learning Mastery and Pro Tips:
Always be coding! Language Center whether it be programming language or human spoken language is only learned by speaking and in this case coding. 

Apply what you learn - one of th msot skilled proffesors I ever saw used a quiz one quesions about an [irnciel oin the coues e we had to dfine it for the ansere and the other part of the quiz was to go and find that principle working in a real world current news aritcle of some sort and imemedlaeyt show with graphs and what not how the princpele was applicable to the aritcel. I still remmeber some of those aritlces pop quizzes and the stories. APplication fast . KEy. 

]
HW and Sandbox
https://alternativeto.net/software/js-bin/
Even better make your own folder called Sandbox for trying new stuff you could even have one for each language. react-sandbox , js-sandbox , etc. 
https://codesandbox.io/
https://www.sitepoint.com/7-code-playgrounds/
HW should build on class activities. So make a sandbox and try to rebuild every single thing done in class 
Watch the Videos in the VideoGuide.md for each week and code along. 

write an article just like this one and the many you find and read and it helps you master the content even make a Youtube video you could even put on your portfolio "your tutorials" I once spent 3 hours a a problems then found a 5 minute fix so I made a video and got 78 50 views. Employers like that you contribute to open source and also in my opinion to the coding community in general 
helo out on stack overflwo and slack.

Make sure to Proof read the other README for lots of euros and maybe cut it all out and check the prework for all that debugging advice I found somewhere  . check my full stack mastery github repo and then ship this to medium and the repo

Falshcards - jsut phsycally going thorugh teh motions tons of reaserch on that . 

Mastering all technologies taught in the course. You'll learn so much in this bootcamp, it'll make your head spin. The skill you're really trying to pick up: learning how to teach yourself new technologies using online resources.we have countless resources for you so just ask if you are not finding what you want on Google 

Hwo to do more: how can I use for loops conditionals and OBjects strings ,arrays(and their methods) and fucntions to make stuff happen - how to tell a computer to bring my idea to life. Callbacks, objects communicating with other objects by methods and using theri values to track stuff "how to use Javascript to .....?" or just "... Javacirpt" 

Learning How to Learn - One of the most important skills you will learn in this program is how to independently learn. This course grounds you in a methodology.
Learn from others:
https://www.coursera.org/learn/learning-how-to-learn


https://frontendmasters.com/books/front-end-handbook/2018/learning/self-direct-learning.html
HAs a great list of resouces 
https://github.com/AllThingsSmitty/must-watch-javascript
anythine awesome https://github.com/sindresorhus/awesome
must watch 
free JS books 
Livecoding.tv - Watch (and chat with) developers live as they code projects. Great for seeing the thought process of other developers. It's also fun to watch them struggle with bugs.
TwitchTV - Programming - Similar concept as Livecoding.tv.
YouTube:

LevelUpTuts - Great (free) resources for taking your web development skills to the next level. Both novices and advanced developers will find plenty to learn from here.

LearnCode.academy - Another great resource, particularly for advanced topics on JavaScript, jQuery and Angular.js.
open source, volunteer work family friends on facebook ask around to offer free work as way to build portfolio. or accept money too 
sandbox have fun make cool stuff that interests you . i am a single guy and made a cool dating app and that is how I learned React. 

take a tutorial but then code 

If you are stuck Revisit What You’ve Already Learned its really hard to learn all the first time through go back and see if you missed something in the lesson materials. Only after months of developing and a revisit to the DOCS was I able to grasp them. Reading and learning from the DOCS is tough at first. So don't give up. 

CONCLUSION:
These all should be skills[the ability to do something well; expertise] which come from habits[an acquired mode of behavior that has become nearly or completely involuntary]. 

Little checklist to reference CHEAT SHEET - 
1. Debugging [Error Knowledge, Checklists, CLEAN]
2. Google-FU aka Googling [Exact full thought, Date Filter, By Language, Skimming, DOCS, "Examples of" && || addding Codepen or Video]
3. Thinking Like a Programmer [Patterns, Generalize to Reuse, DRY, Psuedo-Code, Toy Problems aka Algorithms Practice]
4. Getting Outside Help [Slack, Facebook, Others]
5. Master Your Workflow Tools Better & General Tips [Code editor, Git, Terminal, Dev Tools] 
6. Learning to Learn(for Mastery) [Review, Practice in Sandbox, Share, 75/25 rule]

Code Always. In sales it goes "alwasy be closing," at the languge center I taught at for 3 years it was "Always Speak Your Langage." Learning that sticks (so knowing and gaining skills) requires "Action" my friends.  
