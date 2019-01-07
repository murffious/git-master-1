#### Steps to become a world class engineer

1. Know The Code
####### A. Write CLEAN code aka just don't write bugs
- "Precursor to a BUG" Yeah I said it : Writing Cleaner More Efficient Maintainable Code  It has been said this is the key to squashing bugs in our code just don't' write bugs in the first place. Much has been said about this as a precursor to debugging so that in the future you will have less bugs. It should be your goal to CARE about your code. Furthermore, many a job posting has the required skill of Write Cleaner Code and avoid bugs. It was said in a recent retrospective of a group of university bootcamp students that they wished they wished they had focused more on things like code style/conventions which would have led to less confusion which in this case is from a group working on the same project. To fully support this we read in "The Art of Readable Code” by Boswell&Foucher,  "The fundamental theorem of readability : code should be written to minimize the time it would take for someone else to understand it !" I paraphrase further advice from the book: Things you can do to improve your code: picking good names,(semantic meaningful names for variables, functions etc) writing good comments, formatting your code neatly (clean use of whitespace). 

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
2. Problem Solivng aka Thinking Like a Programmer
3. Debugging 

###### B. Ahhh BUG! Where? What? When? Why? How[to fix]? - Plan of Attack
Ask these questions when you have tried you best to write clean code and you still have broken code - everyday :
-----------------------------------------
**Where?** By where we mean *Where* in the code stopped on? A specific line of code and file name. Code reader computer reads the code from top to bottom. Code will not even run if there is what is known as a fatal error meaning there is a syntax error . So the code compiles first then runs. Languages are different but in javascript this is how it works.Some times its nestes in the error message Where is the origin of said running code. function etc. Find out the last function that worked what variables are being used and then you can find what stopped the code. Stack Trace  yellow red clicking on browser it takes you to the line of code if you you two screens if not it will go there if you click back to the code editor it wil be there. Not sure if its jsut Chrome or React or what. 
-----------------------------------------
**What?** What caused the code to stop? More specifically what is the error(message hopefully)? A bug duh. But what is that bug now that we have found it?
most the time you will know but not always 

Error reading - Understanding how Javascript is run this cannot be fully covered here so all can say is the computer (node js/bash terminal, or chrome V8 engine - the code runner/executor) is going to compile the code. The first goals is to find the point in the code at which the Error was instantiated. Node Bash console may tell you or Chrome/Mozilla tools in the console.

- Syntax errors: These are spelling errors in your code that actually cause the program not to run at all, or stop working part way through — you will usually be provided with some error messages too. These are usually okay to fix, as long as you are familiar with the right tools and know what the error messages mean!
- Logic errors: These are errors where the syntax is actually correct but the code is not what you intended it to be, meaning that program runs successfully but gives incorrect results. These are often harder to fix than syntax errors, as there usually isn't a resulting error message to direct you to the source of the error. 
What line of code did it stop on.? console log and variables in the vicinity - check for loops and if statements 
ReferenceError: Syntax error fatal errors read debug code error 
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Errors
-----------------------------------------
**When?** Does it happen before running the code  Did it happen after a certain event like a click - if it is event based you can track those down.
-----------------------------------------
**Why?** undefined, imporperly used object or reference to an object or function
-----------------------------------------

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

4. Knowing My Tools
5. Thoughtful Collaboration
