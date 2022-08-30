

#  WHY SHOULD YOU NEVER USE REACTJS?  
      
<br><br><br><br>      


      
### IT's NOT SEMANTICALLY CORRECT CODE !!!!!!!!!!
      
All of the code that creates the components that are rendered to the browser are written in JavaScript files. 
This means that whole sections of HTML code is written in files where it does not belong!!!!!!! 
**Only the smallest snippets of HTML are acceptable in a JavaScript file**, when used within the $.html(); 
function of jQuery or other functions which output the code.<br>
Mixing Html with JS code is a **[very very very bad idea](https://youtu.be/eKQ6JnmvNfA)**.
      
<br>

### IT's NOT STANDARDS COMPLIANT 
      
One of the most basic of Web Standards is that all websites must load 70-80% of the content 
on every page correctly when JavaScript is disabled. 
React runs in JavaScript, meaning the whole page is created via a front-end language. 
Functions are available to run the initial page load on the server and serve that to the browser, 
however anything that happens after this will now function. 
This means that if the user decides to have JavaScript disabled, the site will not function correctly.
     
<br>
     
     
### IT's UNNECESSARILY LARGE 
    
The basic file size of React is over 100kb. That’s just the basic file size! 
To make it anything like suitable to use on a website, extra files need to be included to allow it to do anything. 
It really isn’t worth the extra bloat it adds to websites… just to create a view layer on the front-end. 

<br>

### REACTJS IS FAT AND EATS YOUR RAM FOR BREAKFAST
      
Many people think that React is unique because it uses virtual DOM for rendering. 
What you may not realize, is that React and the virtual DOM are 2 separate concepts entirely. 
You may be interested to know that Vue along with a bunch of smaller libraries also makes use of the virtual DOM. 
Many people praise the virtual DOM for being this fast revolutionary technology. 
However, it appears that the virtual DOM is nothing but a memory hog.

If you’re not familiar with how the virtual DOM operates, allow me to enlighten you. 

Basically what happens is that the virtual DOM keeps a copy of the DOM tree in the client’s memory. 
Then when a change occurs a new virtual DOM tree is built and diffed with the old tree. 
Then React will apply those transformations to the browser so those changes are visible to the user.
Here’s a little diagram of how the virtual DOM works [....]
The gray tree on the left is the incoming change and the gray tree on the right is the old information. 
Then the result is that one node was removed and another was added elsewhere in the tree. 
This causes every render to become an expensive memory-intensive operation. 
This is not ideal if you’re hoping your app will run smoothly on a mobile phone.
You may be thinking at this point “oh but there are plenty of React apps that run just fine on a mobile phone”. 

It pays to remember that just because it does work, doesn’t mean it’s working well. 

While your computer, tablet, or phone may have sufficient memory to run these kinds of operations does that really mean we want to? 
I would also like to point out that this doesn’t fully prevent you from having a web app that does actually run well, 
but it means you have to do a lot more work and be a lot more careful if you want it to actually run well.
The virtual DOM has one more drawback, it’s fat and you can’t tree shake it. What is tree shaking? Basically, 
tree shaking is the process of removing things from your final build that you don’t need or don’t use. 
The virtual DOM is not tree-shakable because you will never know what you need until you hit the runtime. 
This means that you have to send the whole thing instead of a smaller lighter version. 
This has another obvious draw on your app’s performance in that your build ALWAYS has to include the whole virtual DOM. 
For smaller apps, this can be pretty negligible, but if you have a large and complex application this can become a nightmare.
      
<br>
      
### IT's SUPER SLOW
      
When using React, page load speeds are greatly reduced. 
This is because JavaScript functions are running in the browser to load 
the content from the server and render it through the React functions, before displaying it in the browser. 
Page load speeds can have a detrimental effect on the SEO of the website, 
causing visitors to leave the site and look elsewhere for the information they were trying to find.
      
      
<br>
      
      
### IT's 90% THE WRONG CONTEXT TO USE IT
      
React is built for Web Apps! These are applications that run in the browser that process ‘big data’, 
and have constantly refreshing elements of the page. Facebook is a Web App, 
it has updating notification icons, chat functions, news ticker, 
and updating page titles when new messages / notifications come in. 
The majority of websites will not have these functions, 
so there won’t be anything on the website that can’t be done in a more versatile language such as jQuery.
Use languages that are suited to the website, and the page will  load faster, 
use semantically correct code, comply with Web Standards, and not have any code that does not serve a viable purpose.
      
<br>

### IT'S PURE CR4P
      
Before we even get started I can already hear you pounding away at your keyboards writing your angry response. 
I would ask that you read my full explanation before going off at me in the comments. 
I really want to emphasize that I’m not trying to attack you personally because you use React or like React. 
However, what I am trying to say is that I think that React leaves a lot to be desired. 
What I want to do is explore the pain points and detail why I think React is an overall flawed library.
      
<br>

### IT's MOSTLY HYPE
      
In the business world of upper managers React has become something of a buzzword. 
I have worked for several companies that have had **upper managers that decided that every front-end is going to use React 
for no other reason than they think it’s popular.<br> Never forget: [the majority is always wrong](https://youtu.be/KiszaMhevsQ)**.<br>
Right away whenever you have non-technical upper managers making development decisions you know nothing good is going to come out of it. 
While React may be popular, I don’t think you can say that it’s the right thing to use based ONLY on its popularity.
Why would upper management be making these decisions? Well, they figure that since React is popular it must be easy to hire React developers. 
While yes, that is indeed true, it doesn’t mean it’s any more difficult to hire front-end developers with other skills as well. 
I also think any developer worth their salt should be able to adapt and learn another framework or library. 
This is entirely anecdotal, but when I got my first job working with React I had 0 experience using it and 
now I’ve been using it at work for the last 3 years or so.
In short, let developers pick their own tools. If it’s React good, but if it’s not you have to trust the people you hired to do the job. 
What I’m going to be talking about mostly is how I think React is a really bad choice for medium to large teams and complex applications.
One of the reasons people love React when they’re making a personal project is because you can kind of do whatever you want. 
It’s a pretty free-form library that lets you kind of build what you want how you want. 
If you’re an experienced developer and have a personal project you’re hacking away at and use React it’s probably worked out pretty well for you.
However, that freedom comes at a cost. 
I often say that if you worked on one React project, you’ve worked on one React project.
That basically means that everyone has a different way of doing things and organizing their React project. 
These differences can often be pretty extreme and when it comes time to start adding team members onto the project, 
even for experienced developers, it takes a while to get up to speed. 
The other side of that is that every developer will be working on a different set of standards. 
You try to create a standard for the project you’re working on that everyone HOPEFULLY follows but I’ve seen that fall apart way too often.
The second cost is the lack of safeguards. 
I think that there is a very fine line between having safeguards and treating developers like idiots. 
You want developers to get their job done and you also want to get out of their way and help them where you can. 
The React philosophy is basically: do whatever you want. This gives you complete freedom but almost no safety. 
So you can make some really horrible mistakes early on and not realize it until it’s too late. 
Now you’re stuck having to refactor large amounts of your codebase. 
Often time when that happens what do you do? You jerry-rig it up until it works fine and then you never touch it again.
      
      

<br>

### COMPLEXITY IS KEY
      
If you’ve ever worked on a large application that is fairly complex, 
you’ll recognize that standards are the key to ensuring that you don’t hate your life. 
The more complex an application becomes the harder it becomes to work on. 
If you implement and stick to standards from the start you can come out alright and have something that works fairly well. 
If you deviate and start doing whatever you want then you’re going to have a bad time.
In a previous section, I mentioned that React kind of follows the “do what you want” model. 
I also mentioned that when you add developers to your project sometimes the lack of standards and 
safeguards embedded into React means that developers have real power to royally screw up your application. 
The larger your team is the worse the problem is going to be. This all adds to the complexity of your app. 
The more complex your application gets the messier it is, the worse it becomes, and ultimately it turns into a nightmare to use or work on. 
This is bad for both your users and your developers. 
I’ve seen this very thing play out numerous times with the same result every time: 
we get a large complex application that is hellish to work and functions poorly.
      
<br>

### APPLIANCES SOLD SEPARATELY
      
I mentioned React is a library, but what does that mean for us? Basically, 
it means that React is going to give you some minor functionality and then leave you to it. 
For comparison, JQuery is also a library. However, there are some key things that differentiate React from libraries like JQuery 
that make it more difficult to use.
React can’t really be used anywhere other than a React app. 
You can use JQuery in a React app or an Angular app because it’s a library and you can use it wherever. 
Angular is a full framework so it stands to reason you can’t use it anywhere other than an Angular app. 
However, React kind of tries to strike this weird balancing act between library and Framework. 
On one level it’s a library because it comes with the base version of itself and then you have to add what you want onto it. 
On the other hand, you can’t really do much else with it like you’re stuck with React once you decide you’re using it like it’s a framework.
The real problem with this paradigm is that React is missing some really crucial things. 
I won’t talk about all of them, but form handling comes to mind. 
Ever tried to make a largely form-based application in React? My advice is this: don’t. 
Creating, validating, and maintaining forms in React is a complete nightmare. 
If you decide you’re going to handle it yourself, then you’re in for a bad time. 
The only other option is that you’re going to go install a 3rd party React form handling library and hope version updates don’t break your app.
This is a specific example of a larger issue. 
That is, React doesn’t give you everything you need but forces you to tac on bits and pieces 
(like form handling) here and there. 
In contrast, a framework like Angular comes with all that stuff built into it. 
With Angular, you don’t have to download any 3rd party form handling or testing frameworks or libraries for example.
      
<br>

### UPGRADES NIGHTMARE
      
Version updates happen to us all. 
One second we’re on version 1.0.0 and all of a sudden version 2.0.0 has just hit and it’s shiny and new and we just want to play with it. 
However, React doesn’t make its version updates very easy. Let’s say you’ve developed a large application in React version, say 16. 
Your app works and you’re happy with it, but then all of a sudden React version 16.8 hits and there are some super fancy new things, 
like React hooks. I won’t get into React hooks, 
but if you want to use React hooks you had better strap in because you’re about to rewrite your whole application.
This seems to be a common theme for React updates. Whenever they add large new features, 
they do so in a way that forces us to rewrite either large portions of our code or the whole codebase to get it working properly. 
I think this has been a common criticism of Facebook's maintenance of the library and something 
I think only adds stress to the lives of the developers using it.
      
<br>

### IT's a WRAP
      
I think React has a place in the world of front-end development, 
but I think it’s vastly overused in places it just doesn’t belong. 
I think that its overuse is a result of it constantly being over-hyped. 
Due to the over-hyping and overuse React makes our jobs much harder at the end of the day 
when we’re developing large complex applications with multiple teammates.
When you use React for larger applications and have so many people working on them they get out of hand fast. 
When you want to do major version upgrades you’re probably going to end up re-writing large portions of your code 
or just rewriting the codebase entirely. This would be fine for a small app, 
but when companies force developers to go and use React, 
it becomes a problem for the app’s stability as well as the stress levels of your developers.

<br><br><br><br>

# So you think you should stop using React?

### [You’re so wrong. Let me explain...](https://youtu.be/KXwqUMkXFiI)
 

<br><br><br><br>


 
 
 
 
 


