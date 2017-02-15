(function (doc, cssText) {
    var styleEl = doc.createElement("style");
    doc.getElementsByTagName("head")[0].appendChild(styleEl);
    if (styleEl.styleSheet) {
        if (!styleEl.styleSheet.disabled) {
            styleEl.styleSheet.cssText = cssText;
        }
    } else {
        try {
            styleEl.innerHTML = cssText;
        } catch (ignore) {
            styleEl.innerText = cssText;
        }
    }
}(document, "\n" +
".ionic_toast {\n" +
"  z-index: 9999;\n" +
"}\n" +
"\n" +
".toast_section {\n" +
"  color: #FFF;\n" +
"  cursor: default;\n" +
"  font-size: 1em;\n" +
"  display: none;\n" +
"  border-radius: 5px;\n" +
"  opacity: 1;\n" +
"  padding: 10px 30px 10px 10px;\n" +
"  margin: 10px;\n" +
"  position: fixed;\n" +
"  left: 0;\n" +
"  right: 0;\n" +
"  text-align: center;\n" +
"  z-index: 9999;\n" +
"  background-color: rgba(0, 0, 0, 0.75);\n" +
"}\n" +
"\n" +
".ionic_toast_top {\n" +
"  top: 10px;\n" +
"}\n" +
"\n" +
".ionic_toast_middle {\n" +
"  top: 40%;\n" +
"}\n" +
"\n" +
".ionic_toast_bottom {\n" +
"  bottom: 10px;\n" +
"}\n" +
"\n" +
".ionic_toast_close {\n" +
"  border-radius: 2px;\n" +
"  color: #CCCCCC;\n" +
"  cursor: pointer;\n" +
"  display: none;\n" +
"  position: absolute;\n" +
"  right: 4px;\n" +
"  top: 4px;\n" +
"  width: 20px;\n" +
"  height: 20px;\n" +
"}\n" +
"\n" +
".toast_close_icon {\n" +
"  position: relative;\n" +
"  top: 1px;\n" +
"}\n" +
"\n" +
".ionic_toast_sticky .ionic_toast_close {\n" +
"  display: block;\n" +
"}\n" +
"\n" +
".ionic_toast_close:active {\n" +
"\n" +
"}"));
