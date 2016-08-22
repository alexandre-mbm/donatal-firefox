var buttons = require('sdk/ui/button/action');

var button = buttons.ActionButton({
  id: "donatal-link",
  label: "Acessar Diário Oficial de Natal",
  icon: {
    "16": "./icon-16.png",
    "32": "./icon-32.png",
    "64": "./icon-64.png"
  },
  onClick: handleClick
});

var { Cc, Ci } = require("chrome");

function aPostDataFor(dataString) {

  var stringStream = Cc["@mozilla.org/io/string-input-stream;1"].
                     createInstance(Ci.nsIStringInputStream);
  if ("data" in stringStream) // Gecko 1.9 or newer
    stringStream.data = dataString;
  else // 1.8 or older
    stringStream.setData(dataString, dataString.length);

  var postData = Cc["@mozilla.org/network/mime-input-stream;1"].
                 createInstance(Ci.nsIMIMEInputStream);
  postData.addHeader("Content-Type", "application/x-www-form-urlencoded");
  postData.addContentLength = true;
  postData.setData(stringStream);
  return postData;
}

var { modelFor } = require("sdk/model/core");
var { viewFor } = require("sdk/view/core");

var tabs = require("sdk/tabs");
var utils = require("sdk/tabs/utils");

function handleClick(state) {
  var xulActiveTab = viewFor(tabs.activeTab);
  var tabBrowser = utils.getTabBrowserForTab(xulActiveTab);
  var postData = aPostDataFor("chave=cuidador&dtini=01/08/2016&dtfim=21/08/2016&list=Listar");
  var xulTab = tabBrowser.addTab(
      "http://portal.natal.rn.gov.br/dom/index.php?p=c",
      null,
      null,
      postData
  );
  // fast enough it goes to next step, or not?
  tabs.on("ready", function(tab) {
    tab.attach({
      contentScriptFile: "./content-script.js",
      contentScriptOptions: {
      chave: "cuidador",
      dtini: "01/08/2016",
      dtfim: "21/08/2016"
      }
    });
  });
}

var { Hotkey } = require("sdk/hotkeys");

var donatalHotKey = Hotkey({
  combo: "control-shift-d",
  onPress: function() {
    handleClick();  // state?
  }
});
