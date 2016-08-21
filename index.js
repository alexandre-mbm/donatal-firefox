var buttons = require('sdk/ui/button/action');
var tabs = require("sdk/tabs");

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

function handleClick(state) {
  tabs.open("http://portal.natal.rn.gov.br/dom/index.php?p=c");
}

var { Hotkey } = require("sdk/hotkeys");

var donatalHotKey = Hotkey({
  combo: "control-shift-d",
  onPress: function() {
    handleClick();  // state?
  }
});
