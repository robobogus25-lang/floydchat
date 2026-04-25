const fs = require('fs');

const dbFile = "./chat.db";
const exists = fs.existsSync(dbFile);
const sqlite3 = reqiure("sqlite3").verbose();
const dbWrapper = require("sqlite");
let db;