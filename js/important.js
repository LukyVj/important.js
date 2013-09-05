/*========================================================
important.js | http://sandbox.lucasbonomi.com/important.js 
2013 @lukyvj | http://lucasbonomi.com 
licensed MIT |(http://lucasbonomi.com/MIT)
 ========================================================*/
$(document).ready(function () {
	    $('style#important').each(function () {
	        var theStyle = $('style#important'),
	            txt = theStyle.text();
	        theStyle.text(txt.replace(new RegExp("!", "g"), "!important"));
	    });
});