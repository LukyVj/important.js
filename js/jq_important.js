/*========================================================
important.js | http://sandbox.lucasbonomi.com/important.js 
2013 @lukyvj | http://lucasbonomi.com 
licensed MIT |(http://lucasbonomi.com/MIT)
 ========================================================*/
document.write('<');
document.write('script id="jq"');
document.write('src="');
document.write('//ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js');
document.write('" type="text/javascript"></');
document.write('script');
document.write('>');
document.write('<script>$(document).ready(function () { $(\'#important\').each(function () { var theStyle = $(\'#important\'), txt = theStyle.text(); theStyle.text(txt.replace(new RegExp("!", "g"), "!important")); }); });</script>');
