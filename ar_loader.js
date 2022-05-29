
/* This script made by "TOPMADEAPP" Web and App Development Studio. For contact - https://www.topmadeapp.com */

function getScript(src, callback) {
  var script = document.createElement('scr' + 'ipt');
  script.src = src;
  // script.async = true;
  script.type = "module";
  script.onreadystatechange = script.onload = function() {
    if (!callback.done && (!script.readyState || /loaded|complete/.test(script.readyState))) {
      callback.done = true;
      callback();
    }
  };
  var s = document.getElementsByTagName('scr' + 'ipt')[0]; 
  s.parentNode.insertBefore(script, s);
}


getScript('https://unpkg.com/@google/model-viewer/dist/model-viewer.min.js', function() {

  (function() { 
 var em = document.createElement('scr' + 'ipt'); em.type = 'text/javascript'; 
 // em.async = true; 
 em.type = "nomodule";
 em.src = 'https://unpkg.com/@google/model-viewer/dist/model-viewer-legacy.js';
 var s = document.getElementsByTagName('scr' + 'ipt')[0]; s.parentNode.insertBefore(em, s); 
 })();

});

(function() { 

    var link  = document.createElement('link');
    link.rel  = 'stylesheet';
    link.type = 'text/css';
    link.href = 'https://tma-script.com/src/script/ar_loader.min.css';
    var s = document.getElementsByTagName('link')[0]; 
    if (s != null) {
      s.parentNode.insertBefore(link, s);
    } else {
      document.body.appendChild(link);
    }
 })();


function getCurrentPageLocationName() {

	var str = window.location.pathname.toString();
	var slashSplitArray = str.split("/");
	var lastSiteStr = slashSplitArray[slashSplitArray.length-1];
	var dotsSplitArray = lastSiteStr.split(".");
	var siteCurrentResultPageName = dotsSplitArray[0];

	var hostName = window.location.hostname.toString();
	hostName = hostName.replace("www.", "");
	var hostSplitArray = hostName.split(".");
	hostName = hostSplitArray[0];

	return {
		"host" : hostName,
		"page" : siteCurrentResultPageName
	};

}

var _checkFile = function(url) {

  var http = new XMLHttpRequest();

    http.open('HEAD', url, false);
    http.send();

    return http.status != 404;

}

function addArButton() {

  var div = document.createElement('div');

    div.innerHTML = '<a onclick="model3DButtonClick()" style="\
        position: fixed;\
        top: 55%;\
        right: 5%;\
        display: inline-block;\
        -webkit-box-sizing: border-box;\
        -moz-box-sizing: border-box;\
        box-sizing: border-box;\
        height: 60px;\
        width: 60px;\
        padding: 10px;\
        z-index: 99999999;\
        background: rgba(255,255,255,0.7);\
        -webkit-border-radius: 6px;\
        border-radius: 6px;\
        cursor: pointer;\
        "\
        onmouseover="this.style.background=\'rgba(255,255,255,0.8)\';"\
        onmouseout="this.style.background=\'rgba(255,255,255,0.7)\';"\
        onmousedown="this.style.background=\'rgba(255,255,255,1.0)\';"\
        onmouseup="this.style.background=\'rgba(255,255,255,0.7)\';"\
        >\
\
        <img src="https://tma-script.com/images/panorama.png" alt="" width="100%" height="100%">\
\
</a>';

    document.body.appendChild(div);

}

addArButton();


function model3DButtonClick() {
  addModalContainer("TOPMADEAPP", "Тестовый AR файл");
}


var _myModalDiv;
var _myModalDivLoader;
// var _myModalDivContainer;

var locProp = getCurrentPageLocationName();

var _emviCompName = locProp.host;
var _emviObjName = locProp.page;

function addModalContainer(aRTitle, aRDescription) {

    var _arFileLink = 'https://tma-script.com/src/files/' + _emviCompName + '/usdz/' + _emviObjName + '.usdz';
    var _glbFileLink = 'https://tma-script.com/src/files/' + _emviCompName + '/glb/' + _emviObjName + '.glb';

    if (!_checkFile(_arFileLink.replace('.usdz', '.png'))) {
        _arFileLink = 'https://tma-script.com/src/files/demo/usdz/Astronaut.usdz';
    }

    if (!_checkFile(_glbFileLink.replace('.glb', '.png'))) {
        _glbFileLink = 'https://tma-script.com/src/files/demo/glb/Astronaut.glb';
    }


    var viewerHtmlDataVaribles = '';

  if (isInAppBrowser()) {

    viewerHtmlDataVaribles = '\
    \
    <model-viewer id="_myCanvaContainer" style="width: 100%; height: 90%; display: inline-block; text-align: center; z-index: 999999991;\" \
     src="' + _glbFileLink + '"\
      ar ar-modes="webxr scene-viewer quick-look fallback" camera-controls\
      environment-image="https://tma-script.com/images/image_LDR.jpg"\
        alt="AR 3D model"\
         "> \
\
<button onclick="showAlertWithHaveNotOpenArFile()" style="\
    border: none; \
        position: absolute;\
        position: fixed;\
        bottom: 15%;\
        right: 20%;\
        display: inline-block;\
        -webkit-box-sizing: border-box;\
        -moz-box-sizing: border-box;\
        box-sizing: border-box;\
        height: 60px;\
        width: 60px;\
        padding: 10px;\
        z-index: 99999999;\
        background: rgba(255,255,255,0.7);\
        -webkit-border-radius: 6px;\
        border-radius: 6px;\
        cursor: pointer;\
        box-shadow: 2px 2px 7px #888888; \
        "\
        onmouseover="this.style.background=\'rgba(255,255,255,0.8)\';"\
        onmouseout="this.style.background=\'rgba(255,255,255,0.7)\';"\
        onmousedown="this.style.background=\'rgba(255,255,255,1.0)\';"\
        onmouseup="this.style.background=\'rgba(255,255,255,0.7)\';"\
        \
        ">\
          <img src="https://tma-script.com/images/ARKit_Glyph.svg" alt="" width="100%" height="100%"> \
      </button>\
        \
         </model-viewer>\
    ';

  } else {

    const actionValue = '#callToAction=Готово&checkoutTitle=' + aRTitle.replace(' ', '%20') + '&checkoutSubtitle=' + aRDescription.replace(' ', '%20');

    viewerHtmlDataVaribles = '\
    \
    <model-viewer id="_myCanvaContainer" style="width: 100%; height: 90%; display: inline-block; text-align: center; z-index: 999999991;\" \
     src="' + _glbFileLink + '"\
      ar ar-modes="webxr scene-viewer quick-look fallback" camera-controls\
      environment-image="https://tma-script.com/images/image_LDR.jpg"\
        alt="AR 3D model"\
         ios-src="' + _arFileLink + actionValue + '"> \
\
<button slot="ar-button" style="\
    border: none; \
        position: absolute;\
        position: fixed;\
        bottom: 15%;\
        right: 20%;\
        display: inline-block;\
        -webkit-box-sizing: border-box;\
        -moz-box-sizing: border-box;\
        box-sizing: border-box;\
        height: 60px;\
        width: 60px;\
        padding: 10px;\
        z-index: 99999999;\
        background: rgba(255,255,255,0.7);\
        -webkit-border-radius: 6px;\
        border-radius: 6px;\
        cursor: pointer;\
        box-shadow: 2px 2px 7px #888888; \
        "\
        onmouseover="this.style.background=\'rgba(255,255,255,0.8)\';"\
        onmouseout="this.style.background=\'rgba(255,255,255,0.7)\';"\
        onmousedown="this.style.background=\'rgba(255,255,255,1.0)\';"\
        onmouseup="this.style.background=\'rgba(255,255,255,0.7)\';"\
        \
        ">\
          <img src="https://tma-script.com/images/ARKit_Glyph.svg" alt="" width="100%" height="100%"> \
      </button>\
\
         </model-viewer>\
    ';

  }

    
  var mainDiv = document.createElement('div');

    mainDiv.innerHTML = '\
    <div style="\
      position: fixed;\
      z-index: 999999991;\
      padding-top: 50px;\
      left: 0;\
      top: 0;\
      width: 100%;\
      height: 100%;\
      overflow: auto;\
      background-color: rgb(0,0,0);\
      background-color: rgba(0,0,0,0.4);\
    ">\
\
  \
  <div style="\
  background-color: #fefefe;\
      margin: auto;\
      padding: 20px;\
      border: 1px solid #888;\
      width: 80%;\
      height: 90%;\
  ">\
    <span onclick="clousModalButtonClick()" style="\
    color: #aaaaaa;\
      float: right;\
      font-size: 28px;\
      font-weight: bold;\
      cursor: pointer;\
    "\
    onmouseover="this.style.color=\'gray\';"\
   onmouseout="this.style.color=\'#aaaaaa\';"\
   onmousedown="this.style.color=\'black\';"\
   onmouseup="this.style.color=\'#aaaaaa\';"\
    >&times;</span>\
    \
    \
    <div id="_arloader" style="\
      position: absolute;\
      z-index: 999999992;\
      margin: auto;\
      top: 0;\
      left: 0;\
      right: 0;\
      bottom: 0;\
      border: 6px solid #f3f3f3;\
      border-radius: 50%;\
      border-top: 6px solid gray;\
      width: 150px;\
      height: 150px;\
      -webkit-animation: spin 2s linear infinite; /* Safari */\
      animation: spin 2s linear infinite;\
    "></div>'
    + viewerHtmlDataVaribles + '\
  </div>\
\
</div>\
    ';

    document.body.appendChild(mainDiv);

    _myModalDiv = mainDiv;

    _myModalDivLoader = document.getElementById("_arloader");

    setTimeout(function(){

     _myModalDivLoader.style.display = "none";

    }, 2000);

}

function clousModalButtonClick() {

  _myModalDiv.parentNode.removeChild(_myModalDiv);

}

function isInAppBrowser() {
    var ua = navigator.userAgent || navigator.vendor || window.opera;
    return (ua.indexOf("FBAN") > -1) || (ua.indexOf("FBAV") > -1) || ua.indexOf('Instagram') > -1;
}

function showAlertWithHaveNotOpenArFile() {
  alert("Откройте пожалуйста страницу в основном браузере вашего устройства чтобы открыть AR");
}

