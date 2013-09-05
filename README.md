important.js
============
[official Page](http://sandbox.lucasbonomi.com/important.js/)

Make your life easier for testing developement pages. 

####INTRO :
###Why important.js ?

The idea behind important.js is more or less to suggest an alternative to the traditional !important method in css. The aim is to make the design testing operation easier and faster.

Its just a kind of proposition, and also something that can be usefull if you have to test some designs quickly. And everybody can use important.js because everybody knows how to use the !important rule.

#####INFOS :
###What is important.js

Important.js is a little Jquery script (456o minified) that will help you to save your time.

Important.js will seek if you added a *<style id="important">*  </style> onto your webpages, and it will target all important rules.

####HOW TO:
###How to declare an!important rule with important.js ?

There's nothing simplier than using important.js to declare important rules. In CSS, if you want to add an important rule, you have to add !important at the end of your lines, right ? 
With important.js, you just have to add ! just before the end of your lines, and the script will do the rest.

####For example :

###A normal important rule :

    div{ 
    background:blue !important;
    background:red;
    }
                            
 An important rule with important.js:

    div{ 
    background:blue !;
    background:red;
    }
                            
For both codes, the div background will be blue, even if the background:red is loaded at the end.
Be careful !

As you know, !important is something that everyone try to avoid.

You can use it to test stuff without kicking out your current css code, and that is why important.js exists. Only to help you to test stuff without kicking out your css.

When does I should use it ?

Well its simple, for example, you are coding your own website, when you hesitate between different backgrounds. You can simply add a following code to your document :

    body{
    background:red;
    background:blue;
    background:url(path/to/your/image.jpg) !; /* <-- The background will be this image */
    background:url(path/to/your/image_2.jpg);
    background:radial-gradient(#eee,#ccc);
    background:linear-gradient(#eee,#ccc);
    }

                        
And it should be used in that case ONLY. You shouldn't use it for production websites.

####EXAMPLES:

[Official page](http://sandbox.lucasbonomi.com/important.js/)

#### Different files
*important.js | Basic file, works with jquery
*important.min.js | Basic file, works with jquery, its minified
*jq_important.js | This version import jquery directly, you don't need to have Jquery pre loaded on your site.


###Demos of important.js

[Demo of important.js]()  [Demo of Jq_important.js]()

###Download :
[Download important.js]()

[Download minified (456o)]() [Download Developement (507o)]()  [Download with Jquery included (750o)]()


####MORE INFORMATIONS ABOUT !IMORTANT:
###!important over the web :

*[http://webdesign.about.com/od/css/f/blcssfaqimportn.htm](http://webdesign.about.com/od/css/f/blcssfaqimportn.htm)
*[http://css-tricks.com/when-using-important-is-the-right-choice/](http://css-tricks.com/when-using-important-is-the-right-choice/ )
*[http://coding.smashingmagazine.com/2010/11/02/the-important-css-declaration-how-and-when-to-use-it/](http://coding.smashingmagazine.com/2010/11/02/the-important-css-declaration-how-and-when-to-use-it/)

