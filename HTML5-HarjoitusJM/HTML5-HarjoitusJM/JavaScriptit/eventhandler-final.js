 var EventUtil = new Object;
                EventUtil.addEventHandler = function (oTarget, sEventType, fnHandler) {
                    if (oTarget.addEventListener) {
                        oTarget.addEventListener(sEventType, fnHandler, false);
                    } else if (oTarget.attachEvent) {
                        oTarget.attachEvent("on" + sEventType, fnHandler);
                    } else {
                        oTarget["on" + sEventType] = fnHandler;
                    }
                };
				
function sayhello() {
				alert("Tämä käynnistyi modernisti");
				//var oDiv = document.getElementById("xxx");
				//EventUtil.removeEventHandler(oDiv, "click", handleClick);
			}
function saytitle() {
	alert(document.title);
}
	
                
window.onload = function() {
	var oDiv = document.getElementById("xxx");                
	EventUtil.addEventHandler(oDiv, "click", sayhello);
	EventUtil.addEventHandler(oDiv, "click", saytitle);
}