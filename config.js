//#ENJOY
/**
**/

const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "";
global.location = "Sri lanka .";
global.mongodb = process.env.MONGODB_URI || "mongodb://mongo:bREwFKCVLDvzfqqsqVNXloIYCiiLBbuR@monorail.proxy.rlwy.net:38244";
global.allowJids = process.env.ALLOW_JID || "94789958225@s.whatsapp.net";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "postgresql://rcdnew:DUjQ85jkrvaF5HmsoyjBgyoSYhpsHIjN@dpg-cqamj22ju9rs739asi6g-a.oregon-postgres.render.com/rcd";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "srilank/ampara";
global.github = process.env.GITHUB || "https://github.com/DEXTER-BOTS/RCD-MD";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029Vag1WQFJf05dF0pQeU3u";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029Vag1WQFJf05dF0pQeU3u";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/1f4e6e1cc2ed1662adb36.jpg";
global.devs = "94789958225";
global.sudo = process.env.SUDO || "94789958225,94757660788,94770730717,94785274495,94753574803";
global.owner = process.env.OWNER_NUMBER || "94789958225,94753574803";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "true";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "true";
global.userImages = process.env.USER_IMAGES || "";
global.waPresence = process.env.WAPRESENCE || "recording";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "";
global.scan = "";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoicUt5dEhXaXk2VjRHS3JIbG5pNlVzUVJhczVZWHprSFMxR1Y3Z1VoSTFXYz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZnhTMFNack84emdDUE5xbCt2bkt4UjBtS0dzYUN5SlJpVGFSS1Q4dG9Rdz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI0TDFZM29HNStQMExDeFNvNzJ3c0Viejd2cUtTaFVNSVRDc3BTVjlRT0Y0PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ2NjFQYzBVMDB1V3JoS0IxS25TYktDZGNmNEJORFVhQnBCWks1V3B0MzE0PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im9BZnpmRnFKaDFqaHdNSjFWSytCKytjTkJ5TTJUQlVmU1h2QlhFR3JSVlU9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjRsdHhyVE51V3N2MEFVTGVtSVUwN3RBZU9xb3RDVnNnRGNLenBWenI2QTQ9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNk05U2VsUDhGVStBNWs1L3A4MFFNakdwazhmSVYzVkk0MGxlV3o5ZTdYdz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidWoxc3IzS3IyaE96ZWt1eGU0UmVtUUR4RVRucnE1aEs4QW4vSDhha1NRND0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkhBdklOTmJ3Wm1JUllUQ3NwcGRiTFI1UndkWEJYYnFocXJyUDd2aHBIRjNOVkpHemR0WWNSWWMxV2pyRHJ1UnRNY25oNEloVlpPZmw0dngvUUoyVURnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTEzLCJhZHZTZWNyZXRLZXkiOiJTVVljY1NvNmxpZnRxTWVoN25aNHBxR200VmJhdTJNSy9md3VWdFNhTUhrPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6Ijk0NzY2OTgwNTUzQHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IjM2QTlCNTMxQURCM0I4REMxQUVDQTA1MUQyQUZGMDRCIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3MjE0NDgxNzZ9LHsia2V5Ijp7InJlbW90ZUppZCI6Ijk0NzY2OTgwNTUzQHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IkExOTMxMkU2OEZBMjQ2RDExNUFGMTU5RUI1MjBDNkI4In0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3MjE0NDgxNzd9LHsia2V5Ijp7InJlbW90ZUppZCI6Ijk0NzY2OTgwNTUzQHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IkNFN0YzRTdCNDkyQzVBNjBCNkJDNkJGQTJCNTg4RUVCIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3MjE0NDgxNzl9XSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjEsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6IkJ4Uk92SnJZU21XOG1vRktFcFh0dmciLCJwaG9uZUlkIjoiZTMzZTZhNmItYjUyNy00NzI1LWJlMzktMjY3NWE2OGI1YTU1IiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IndXVEUwZXVvbHZxc2VxWG9mUkxmd0prTisrOD0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJJUTVUcldmUVYxTCtuVHc4OFdmQnk3ZlUxb0U9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiWU1XQzNQRUUiLCJtZSI6eyJpZCI6Ijk0NzY2OTgwNTUzOjhAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoi8J+nkPCfp5Dwn6eQIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNNV253Zm9IRU9MdDdMUUdHQVFnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJzQ243bXVSd0dUWmtwaTBrRW41aEptam1tWVdCYXZFOFVGZG9iZGsxM2xjPSIsImFjY291bnRTaWduYXR1cmUiOiJ3K0k5ZjBIRExieklYREN3Sm83eTc4dElzQ0JzM3F1bHQ3aUxGN0sydlZxQnROZU9laHpnLzdZM2tycHY1QXd6N1RVdkVwOExaVkFaMFBSYmh4UlFDdz09IiwiZGV2aWNlU2lnbmF0dXJlIjoiK1o0a1hzek9DMjhsYUFIRDFWSG1OQkVmdnMwbjRhWHdvQTFROTJvdXlScVRIVzIxSDVCSG0wYXhsS2txVEFlSWlsVHF1S1dKcUVQcU96RW5Wcll2RHc9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiI5NDc2Njk4MDU1Mzo4QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQmJBcCs1cmtjQmsyWktZdEpCSitZU1pvNXBtRmdXcnhQRkJYYUczWk5kNVgifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MjE0NDgxNzQsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBQU5ZIn0="
module.exports = {
  menu: process.env.MENU || "",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "𝗥𝗖𝗗 𝗠𝗗 𝗣𝗢𝗪𝗘𝗥 𝗕𝗬 🇱🇰",
  author: process.env.PACK_AUTHER || "𝐑𝐂𝐃",
  packname: process.env.PACK_NAME || "♥️",
  botname: process.env.BOT_NAME || "𝐑𝐂𝐃 𝐌𝐃",
  ownername: process.env.OWNER_NAME || "𝗥𝗖𝗗 𝗧𝗘𝗔𝗠",
  errorChat: process.env.ERROR_CHAT || "94789958225",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "chat.whatsapp.com",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "public",
  LANG: (process.env.THEME || "WASI").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
