(function(){
var b=document.body,$=function(i){return document.getElementById(i)};
function menu(o){b.classList.toggle("mo",!!o);$("mb").setAttribute("aria-expanded",o?"true":"false")}
$("mb").onclick=function(){menu(!b.classList.contains("mo"))};$("mc").onclick=$("ov").onclick=function(){menu(0)};
$("dr").addEventListener("click",function(e){if(e.target.closest("a"))menu(0)});
addEventListener("keydown",function(e){if(e.key==="Escape")menu(0)});
var bk=$("bk");if(bk)bk.onclick=function(){history.length>1?history.back():location.href="index.html"};
document.addEventListener("submit",function(e){var f=e.target;if(!f.classList.contains("cf"))return;e.preventDefault();
var g=function(k){return f.elements[k]?f.elements[k].value:""};
var t="Name: "+g("n")+"\nPhone: "+g("p")+"\nEmail: "+g("e")+"\nService: "+g("s")+"\n\n"+g("m");
location.href="mailto:homemantinace.om@gmail.com?subject="+encodeURIComponent("Website enquiry - Home Safely Solutions")+"&body="+encodeURIComponent(t)});
var dp=null,shown=0;
function sa(){return (matchMedia&&matchMedia("(display-mode: standalone)").matches)||navigator.standalone}
addEventListener("beforeinstallprompt",function(e){e.preventDefault();dp=e});
function hide(){$("ib").classList.remove("on")}
$("ic").onclick=hide;
function inst(){hide();if(sa()){alert("App already installed.");return}
if(dp){dp.prompt();dp.userChoice.then(function(){dp=null});return}
var ios=/iphone|ipad|ipod/i.test(navigator.userAgent);
alert(ios?"iPhone: Safari mein Share button dabayein, phir Add to Home Screen chunein.":"Browser menu kholein, phir Install app ya Add to Home screen chunein.")}
document.addEventListener("click",function(e){var a=e.target.closest(".inst");if(a){e.preventDefault();inst()}});
setTimeout(function(){if(shown||sa())return;shown=1;$("ib").classList.add("on");setTimeout(hide,10000)},1000);
if("serviceWorker" in navigator)navigator.serviceWorker.register("sw.js").catch(function(){});
})();
