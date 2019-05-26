cordova.define('cordova/plugin_list', function(require, exports, module) {
  module.exports = [
    {
      "id": "com.brodysoft.sqlitePlugin.SQLitePlugin",
      "file": "plugins/com.brodysoft.sqlitePlugin/www/SQLitePlugin.js",
      "pluginId": "com.brodysoft.sqlitePlugin",
      "clobbers": [
        "SQLitePlugin"
      ]
    }
  ];
  module.exports.metadata = {
    "com.brodysoft.sqlitePlugin": "1.0.6"
  };
});