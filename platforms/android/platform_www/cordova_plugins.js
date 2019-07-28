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
    },
    {
      "id": "cordova-plugin-contacts.contacts",
      "file": "plugins/cordova-plugin-contacts/www/contacts.js",
      "pluginId": "cordova-plugin-contacts",
      "clobbers": [
        "navigator.contacts"
      ]
    },
    {
      "id": "cordova-plugin-contacts.Contact",
      "file": "plugins/cordova-plugin-contacts/www/Contact.js",
      "pluginId": "cordova-plugin-contacts",
      "clobbers": [
        "Contact"
      ]
    },
    {
      "id": "cordova-plugin-contacts.convertUtils",
      "file": "plugins/cordova-plugin-contacts/www/convertUtils.js",
      "pluginId": "cordova-plugin-contacts"
    },
    {
      "id": "cordova-plugin-contacts.ContactAddress",
      "file": "plugins/cordova-plugin-contacts/www/ContactAddress.js",
      "pluginId": "cordova-plugin-contacts",
      "clobbers": [
        "ContactAddress"
      ]
    },
    {
      "id": "cordova-plugin-contacts.ContactError",
      "file": "plugins/cordova-plugin-contacts/www/ContactError.js",
      "pluginId": "cordova-plugin-contacts",
      "clobbers": [
        "ContactError"
      ]
    },
    {
      "id": "cordova-plugin-contacts.ContactField",
      "file": "plugins/cordova-plugin-contacts/www/ContactField.js",
      "pluginId": "cordova-plugin-contacts",
      "clobbers": [
        "ContactField"
      ]
    },
    {
      "id": "cordova-plugin-contacts.ContactFindOptions",
      "file": "plugins/cordova-plugin-contacts/www/ContactFindOptions.js",
      "pluginId": "cordova-plugin-contacts",
      "clobbers": [
        "ContactFindOptions"
      ]
    },
    {
      "id": "cordova-plugin-contacts.ContactName",
      "file": "plugins/cordova-plugin-contacts/www/ContactName.js",
      "pluginId": "cordova-plugin-contacts",
      "clobbers": [
        "ContactName"
      ]
    },
    {
      "id": "cordova-plugin-contacts.ContactOrganization",
      "file": "plugins/cordova-plugin-contacts/www/ContactOrganization.js",
      "pluginId": "cordova-plugin-contacts",
      "clobbers": [
        "ContactOrganization"
      ]
    },
    {
      "id": "cordova-plugin-contacts.ContactFieldType",
      "file": "plugins/cordova-plugin-contacts/www/ContactFieldType.js",
      "pluginId": "cordova-plugin-contacts",
      "merges": [
        ""
      ]
    }
  ];
  module.exports.metadata = {
    "com.brodysoft.sqlitePlugin": "1.0.6",
    "cordova-plugin-geolocation": "4.0.1",
    "cordova-plugin-call-number": "1.0.1",
    "cordova-plugin-contacts": "3.0.1"
  };
});