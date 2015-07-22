// intended to be run as a Google Apps Script

var props = PropertiesService.getUserProperties();
var ATOM_URL = props.getProperty("ATOM_URL");
var BACKUP_FOLDER_ID = props.getProperty("BACKUP_FOLDER_ID");

function doBackup() {
  var atomXml = UrlFetchApp.fetch(ATOM_URL).getBlob();
  var folder = DriveApp.getFolderById(BACKUP_FOLDER_ID);
  var timestamp = Utilities.formatDate(new Date(), "GMT", "yyyy-MM-dd'T'HHmmss'Z'");

  folder.createFile("rmilk-atom-" + timestamp + ".xml", atomXml.getDataAsString(), "application/rss+xml");
}

