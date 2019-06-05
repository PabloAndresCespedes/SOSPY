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
    }
  ];
  module.exports.metadata = {
    "com.brodysoft.sqlitePlugin": "1.0.6",
    "cordova-plugin-geolocation": "4.0.1"
  };
});