/* jquery, javascript and canvas */
/* jquery function */
$(document).ready(function(){
  $(window).resize(function start(){
	var jqviewportWidth = $(window).width();
	var jqdivWidth = $("#jqbox").innerWidth();
	var jqdivColor = $("#jqbox").css("background-color");
  jqtext = "<h2>jQery</h2>Ändra webbläsarens storlek!<br><br>Webbläsarens bredd: " + jqviewportWidth + " pixlar<br>Bredd på denna div: " + jqdivWidth + " pixlar.<br>Färgens RGB-värde: " + jqdivColor;
	$("#jqbox").html(jqtext);});});
/* javascript function */
function reportWindowSize() {
  const jstxt = document.getElementById("jsbox");
  const jsviewportWidth = document.documentElement.clientWidth;
  const jsdivColorid = window.getComputedStyle(jstxt);
    jstxt.innerHTML = "<h2>JavaScript</h2>Ändra webbläsarens storlek!<br><br>Webbläsarens bredd: " + jsviewportWidth + " pixlar.<br>Bredd på denna div: " + document.getElementById("jsbox").offsetWidth + " pixlar.<br>Färgens RGB värde: " + jsdivColorid.getPropertyValue("background-color");}
window.onresize = reportWindowSize;

/* canvas script */
window.addEventListener('resize', resizeCanvas);
function resizeCanvas(){
  var iconcanvas = document.getElementById('canvasicon');
  context = iconcanvas.getContext('2d');
  if (window.innerWidth > 1000){
      iconImage = new Image();
      iconImage.src = "img/MainIconfixed.svg";
    }else {
      iconImage = new Image();
      iconImage.src = "img/MainIconSmallfixed.svg";
    }
  iconImage.onload = function(){
  context.drawImage(iconImage, 0, 0);
}}
/* runs the scripts reportWindowSize and resizeCanvas on page load */
function onloadStart(){
  reportWindowSize();
  resizeCanvas();}
window.onload = onloadStart;




























/* canvas script 
window.addEventListener('resize', resizeCanvas);
function resizeCanvas(){
  if (window.innerWidth > 1000){
      var iconcanvas = document.getElementById('canvasicon'),
  context = iconcanvas.getContext('2d');
  makeIcon();
    function makeIcon(){
    iconImage = new Image();
    iconImage.src = "/wordpress/wp-content/themes/customtheme/img/MainIconfixed.svg";
    iconImage.onload = function(){
    context.drawImage(iconImage, 0, 0);}}}
  else {
    var iconcanvas = document.getElementById('canvasicon'),
    context = iconcanvas.getContext('2d');
    makeIcon();
    function makeIcon(){
      iconImage = new Image();
      iconImage.src = "/wordpress/wp-content/themes/customtheme/img/MainIconSmallfixed.svg";
      iconImage.onload = function(){
      context.drawImage(iconImage, 0, 0);}}}}
/* runs the scripts reportWindowSize and resizeCanvas on page load 
function onloadStart(){
  reportWindowSize();
  resizeCanvas();}
window.onload = onloadStart;*/







/* jquery, javascript and canvas */

/* canvas script 
window.addEventListener('resize', resizeCanvas);


function resizeCanvas(){
  var iconcanvas = document.getElementById('canvasicon');

context = iconcanvas.getContext('2d');
  
  if (window.innerWidth > 1000){
      
    
    makeIcon();
      function makeIcon(){
      iconImage = new Image();
      iconImage.src = "/wordpress/wp-content/themes/customtheme/img/MainIconfixed.svg";
      }
    
    }

  else {
    
    
    makeIcon();
    function makeIcon(){
      iconImage = new Image();
      iconImage.src = "/wordpress/wp-content/themes/customtheme/img/MainIconSmallfixed.svg";
      }
    
    }

  iconImage.onload = function(){
  context.drawImage(iconImage, 0, 0);
}

}


/* runs the scripts reportWindowSize and resizeCanvas on page load 
function onloadStart(){
  reportWindowSize();
  resizeCanvas();}
window.onload = onloadStart;*/





/* canvas script */
window.addEventListener('resize', resizeCanvas);
function resizeCanvas(){
  var iconcanvas = document.getElementById('canvasicon');
  context = iconcanvas.getContext('2d');
  if (window.innerWidth > 1000){
      iconImage = new Image();
      iconImage.src = "/wordpress/wp-content/themes/customtheme/img/MainIconfixed.svg";
    }
  else {
      iconImage = new Image();
      iconImage.src = "/wordpress/wp-content/themes/customtheme/img/MainIconSmallfixed.svg";
    }
  iconImage.onload = function(){
  context.drawImage(iconImage, 0, 0);
}
}
/* runs the scripts reportWindowSize and resizeCanvas on page load */
function onloadStart(){
  reportWindowSize();
  resizeCanvas();}
window.onload = onloadStart;