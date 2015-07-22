# rtm-backup

A Google Apps Script to automatically back up Remember the Milk tasks to Google Drive.

## To Use

 1. Create a new Google Apps Script and copy the contents from [rtm-backup.js](rtm-backup.js).
 2. Set the user properties `ATOM_URL` and `BACKUP_FOLDER_ID` to your Remember the Milk Atom feed URL and the ID of the Google drive folder where you'd like the backups to go, respectively.
 3. Set a time-driven trigger for however often you'd like to run `doBackup`. :)
