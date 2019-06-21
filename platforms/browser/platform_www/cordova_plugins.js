cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "file": "plugins/com.brodysoft.sqlitePlugin/www/SQLitePlugin.js",
        "id": "com.brodysoft.sqlitePlugin.SQLitePlugin",
        "pluginId": "com.brodysoft.sqlitePlugin",
        "clobbers": [
            "SQLitePlugin"
        ]
    },
    {
        "file": "plugins/cordova-plugin-call-number/www/CallNumber.js",
        "id": "cordova-plugin-call-number.CallNumber",
        "pluginId": "cordova-plugin-call-number",
        "clobbers": [
            "call"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "com.brodysoft.sqlitePlugin": "1.0.6",
    "cordova-plugin-geolocation": "4.0.1",
    "cordova-plugin-call-number": "1.0.1"
}
// BOTTOM OF METADATA
});