

export { CApp };


class CApp {

    static async run(): Promise<CApp> {
        
        console.log("(() => z1x.CApp.run())();");
        
        let x = new CApp();
 
        // x.jumpIntoVirtualDimension();

        return x;
    }

};



const z1x = { CApp: CApp }; // workaround javascript namespaces





/**************************************************************************************************************** 
 ****************************************************************************************************************
 ****************************************************************************************************************
 

WHY SHOULD YOU NEVER USE REACTJS?



1. It’s unnecessarily large

The basic file size of React is over 100kb. That’s just the basic file size! 
To make it anything like suitable to use on a website, extra files need to be included to allow it to do anything. 
It really isn’t worth the extra bloat it adds to websites… just to create a view layer on the front-end.





2. IT's NOT SEMANTICALLY CORRECT CODE

All of the code that creates the components that are rendered to the browser are written in JavaScript files. 
This means that whole sections of HTML code is written in files where it does not belong. 
Only the smallest snippets of HTML are acceptable in a JavaScript file, when used within the $.html(); 
function of jQuery or other functions which output the code.
To merge Html with code is a very very very bad idea.  AWFUL
Only imbeciles merge html with javascript.  F*ckoff JSX!!!







3. IT's NOT STANDARDS COMPLIANT

One of the most basic of Web Standards is that all websites must load 70-80% of the content 
on every page correctly when JavaScript is disabled. 
React runs in JavaScript, meaning the whole page is created via a front-end language. 
Functions are available to run the initial page load on the server and serve that to the browser, 
however anything that happens after this will now function. 
This means that if the user decides to have JavaScript disabled, the site will not function correctly.







4. It’s super slow

When using React, page load speeds are greatly reduced. 
This is because JavaScript functions are running in the browser to load 
the content from the server and render it through the React functions, before displaying it in the browser. 
Page load speeds can have a detrimental effect on the SEO of the website, 
causing visitors to leave the site and look elsewhere for the information they were trying to find.








5. It’s 9 times out of 10 the wrong context to use it

React is built for Web Apps! These are applications that run in the browser that process ‘big data’, 
and have constantly refreshing elements of the page. Facebook is a Web App, 
it has updating notification icons, chat functions, news ticker, 
and updating page titles when new messages / notifications come in. 
The majority of websites will not have these functions, 
so there won’t be anything on the website that can’t be done in a more versatile language such as jQuery.

Use languages that are suited to the website, and the page will  load faster, 
use semantically correct code, comply with Web Standards, and not have any code that does not serve a viable purpose.





 

 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 ****************************************************************************************************************
 ****************************************************************************************************************
 ****************************************************************************************************************
 ****************************************************************************************************************
 ****************************************************************************************************************

*/
