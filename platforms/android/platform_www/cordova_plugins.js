cordova.define('cordova/plugin_list', function(require, exports, module) {
  module.exports = [
    {
      "id": "com.brodysoft.sqlitePlugin.SQLitePlugin",
      "file": "plugins/com.brodysoft.sqlitePlugin/www/SQLitePlugin.js",
      "pluginId": "com.brodysoft.sqlitePlugin",
      "clobbers": [
        "SQLitePlugin"
      ]
    },
    {
      "id": "cordova-plugin-geolocation.geolocation",
      "file": "plugins/cordova-plugin-geolocation/www/android/geolocation.js",
      "pluginId": "cordova-plugin-geolocation",
      "clobbers": [
        "navigator.geolocation"
      ]
    },
    {
      "id": "cordova-plugin-geolocation.PositionError",
      "file": "plugins/cordova-plugin-geolocation/www/PositionError.js",
      "pluginId": "cordova-plugin-geolocation",
      "runs": true
    },
    {
      "id": "cordova-plugin-call-number.CallNumber",
      "file": "plugins/cordova-plugin-call-number/www/CallNumber.js",
      "pluginId": "cordova-plugin-call-number",
      "clobbers": [
        "call"
      ]
    }
  ];
  module.exports.metadata = {
    "com.brodysoft.sqlitePlugin": "1.0.6",
    "cordova-plugin-geolocation": "4.0.1",
    "cordova-plugin-call-number": "1.0.1"
  };
});