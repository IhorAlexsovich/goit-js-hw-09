var refs={bodyEl:document.querySelector("body"),startButton:document.querySelector("button[data-start]"),stopButton:document.querySelector("button[data-stop]"),isInterval:null};function getRandomHexColor(){return"#".concat(Math.floor(16777215*Math.random()).toString(16))}function changeColor(){refs.stopButton.disabled=!1,isInterval=setInterval((function(){var t=getRandomHexColor();refs.bodyEl.style.backgroundColor=t}),1e3),refs.startButton.setAttribute("disabled","disabled")}function stopChangingColor(){isInterval&&clearInterval(isInterval),refs.startButton.disabled=!1,refs.stopButton.setAttribute("disabled","disabled")}refs.stopButton.setAttribute("disabled","disabled"),refs.startButton.addEventListener("click",changeColor),refs.stopButton.addEventListener("click",stopChangingColor);
//# sourceMappingURL=01-color-switcher.a4014712.js.map
