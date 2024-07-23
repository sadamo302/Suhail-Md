const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "." ;  
global.video= "." ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923167437883";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_20_25_07_23_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQwLFxuICAgICAgICAxNjgsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMjE1LFxuICAgICAgICAxMjQsXG4gICAgICAgIDEzLFxuICAgICAgICAyMzgsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxMTMsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMjAwLFxuICAgICAgICAyMjcsXG4gICAgICAgIDIxNSxcbiAgICAgICAgNjcsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTU1LFxuICAgICAgICAyMzIsXG4gICAgICAgIDIzNSxcbiAgICAgICAgNjUsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTUsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMjIxLFxuICAgICAgICA3OCxcbiAgICAgICAgMTE3LFxuICAgICAgICAyNDIsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTc0LFxuICAgICAgICA4MCxcbiAgICAgICAgMTQwLFxuICAgICAgICA5OVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNTMsXG4gICAgICAgIDgwLFxuICAgICAgICAxNjEsXG4gICAgICAgIDE3MixcbiAgICAgICAgOTEsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMjMwLFxuICAgICAgICAzMixcbiAgICAgICAgMTE2LFxuICAgICAgICAxNzYsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTAwLFxuICAgICAgICAyMixcbiAgICAgICAgMTQ5LFxuICAgICAgICA5MyxcbiAgICAgICAgMjA3LFxuICAgICAgICAxNjAsXG4gICAgICAgIDU4LFxuICAgICAgICAyMzQsXG4gICAgICAgIDg1LFxuICAgICAgICA3MixcbiAgICAgICAgMjQyLFxuICAgICAgICAxNDMsXG4gICAgICAgIDcxLFxuICAgICAgICAyMjYsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMjE1LFxuICAgICAgICA3OCxcbiAgICAgICAgMTMwLFxuICAgICAgICAyMTksXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTE2XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4MCxcbiAgICAgICAgMTY0LFxuICAgICAgICAyMzQsXG4gICAgICAgIDIsXG4gICAgICAgIDI4LFxuICAgICAgICAxNjAsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTI2LFxuICAgICAgICAyMjIsXG4gICAgICAgIDcwLFxuICAgICAgICA4NCxcbiAgICAgICAgNTEsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTg2LFxuICAgICAgICA4MSxcbiAgICAgICAgOTksXG4gICAgICAgIDE3OSxcbiAgICAgICAgMjMsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMjI2LFxuICAgICAgICAxNjksXG4gICAgICAgIDQsXG4gICAgICAgIDU3LFxuICAgICAgICAxNjYsXG4gICAgICAgIDExOCxcbiAgICAgICAgMSxcbiAgICAgICAgMjAyLFxuICAgICAgICAxNzcsXG4gICAgICAgIDI0LFxuICAgICAgICA5MCxcbiAgICAgICAgNzIsXG4gICAgICAgIDExMVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNDAsXG4gICAgICAgIDE2LFxuICAgICAgICAxNTQsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTM0LFxuICAgICAgICAxNjMsXG4gICAgICAgIDIyMyxcbiAgICAgICAgNCxcbiAgICAgICAgOTEsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTM5LFxuICAgICAgICAyMCxcbiAgICAgICAgMTYxLFxuICAgICAgICA2MCxcbiAgICAgICAgMTY3LFxuICAgICAgICAxNzEsXG4gICAgICAgIDczLFxuICAgICAgICAxNDMsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMjIyLFxuICAgICAgICA5NCxcbiAgICAgICAgMjQ1LFxuICAgICAgICAxMjUsXG4gICAgICAgIDczLFxuICAgICAgICAxODYsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTMxLFxuICAgICAgICAyMixcbiAgICAgICAgMTA5LFxuICAgICAgICA5NixcbiAgICAgICAgMTI5LFxuICAgICAgICAxMDBcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTIxLFxuICAgICAgICAyNDUsXG4gICAgICAgIDMwLFxuICAgICAgICAxMDcsXG4gICAgICAgIDg3LFxuICAgICAgICAxMzksXG4gICAgICAgIDIwMyxcbiAgICAgICAgMjU1LFxuICAgICAgICA2LFxuICAgICAgICAxODAsXG4gICAgICAgIDksXG4gICAgICAgIDI4LFxuICAgICAgICAyMTYsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMjI2LFxuICAgICAgICAxNTQsXG4gICAgICAgIDIzMixcbiAgICAgICAgMjEzLFxuICAgICAgICAyOSxcbiAgICAgICAgMSxcbiAgICAgICAgMTcsXG4gICAgICAgIDExNixcbiAgICAgICAgMzYsXG4gICAgICAgIDU5LFxuICAgICAgICA5MCxcbiAgICAgICAgNDksXG4gICAgICAgIDE2MixcbiAgICAgICAgODAsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTI3LFxuICAgICAgICA4OFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNCxcbiAgICAgICAgMTE5LFxuICAgICAgICA1NixcbiAgICAgICAgMjI1LFxuICAgICAgICAzLFxuICAgICAgICAxNjgsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTcyLFxuICAgICAgICAxNDAsXG4gICAgICAgIDg3LFxuICAgICAgICAyMjYsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTMzLFxuICAgICAgICAyMTUsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMzQsXG4gICAgICAgIDEwMCxcbiAgICAgICAgNTMsXG4gICAgICAgIDcyLFxuICAgICAgICA4LFxuICAgICAgICAyNDIsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTUyLFxuICAgICAgICAxNjcsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTM1LFxuICAgICAgICAyNDgsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMjEwLFxuICAgICAgICAxMDcsXG4gICAgICAgIDE4MixcbiAgICAgICAgNjZcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICA2OCxcbiAgICAgICAgICA0MCxcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICA5MyxcbiAgICAgICAgICA4NyxcbiAgICAgICAgICAxNCxcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgOCxcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgODdcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICAxNyxcbiAgICAgICAgICAxLFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgMSxcbiAgICAgICAgICA3MSxcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICA5NyxcbiAgICAgICAgICAxMixcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgNTRcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA5NyxcbiAgICAgICAgNDEsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMjUwLFxuICAgICAgICAyMCxcbiAgICAgICAgNjAsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTAwLFxuICAgICAgICAxNjMsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTgsXG4gICAgICAgIDE5NCxcbiAgICAgICAgNTAsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTI0LFxuICAgICAgICA3MSxcbiAgICAgICAgMTY5LFxuICAgICAgICAxMTMsXG4gICAgICAgIDEwMixcbiAgICAgICAgMjQ0LFxuICAgICAgICAxNzgsXG4gICAgICAgIDQ1LFxuICAgICAgICAxOTgsXG4gICAgICAgIDI3LFxuICAgICAgICAxNjMsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMzMsXG4gICAgICAgIDIxOSxcbiAgICAgICAgODcsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTgxLFxuICAgICAgICAxODAsXG4gICAgICAgIDEsXG4gICAgICAgIDg4LFxuICAgICAgICAxNjYsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTE4LFxuICAgICAgICA2LFxuICAgICAgICA5MSxcbiAgICAgICAgMjMyLFxuICAgICAgICAyNixcbiAgICAgICAgMTg0LFxuICAgICAgICA3LFxuICAgICAgICA3NyxcbiAgICAgICAgMjU0LFxuICAgICAgICAxMTAsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMjA0LFxuICAgICAgICAyMTksXG4gICAgICAgIDc2LFxuICAgICAgICA5NyxcbiAgICAgICAgMjAzLFxuICAgICAgICAxNjMsXG4gICAgICAgIDc2LFxuICAgICAgICAxMDMsXG4gICAgICAgIDAsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTU0LFxuICAgICAgICAyNDEsXG4gICAgICAgIDg0LFxuICAgICAgICAxMzksXG4gICAgICAgIDg3LFxuICAgICAgICA1NCxcbiAgICAgICAgMTQzXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiA1NyxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJrei9lUnRyMitzUEptQnRqTnhOUWhScGt0OW10T0NHd0pjVVRaaWx6aXNzPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJOaUx0RWxUVFJubVc2LXFpWm5nanZ3XCIsXG4gIFwicGhvbmVJZFwiOiBcImMwYTg2ODQ1LWU5ZDAtNDE1ZS1hZjMxLWFlMzlkNGQ0N2NjZFwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMDcsXG4gICAgICAzMixcbiAgICAgIDkzLFxuICAgICAgMTU2LFxuICAgICAgMzksXG4gICAgICAyMzAsXG4gICAgICAyOCxcbiAgICAgIDY5LFxuICAgICAgMjcsXG4gICAgICAzNyxcbiAgICAgIDI0NCxcbiAgICAgIDExMSxcbiAgICAgIDE2MixcbiAgICAgIDM4LFxuICAgICAgMjgsXG4gICAgICAyMjEsXG4gICAgICA4NyxcbiAgICAgIDIyMixcbiAgICAgIDYyLFxuICAgICAgMjEwXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDExLFxuICAgICAgMjAsXG4gICAgICA3MCxcbiAgICAgIDgwLFxuICAgICAgMTQyLFxuICAgICAgOTEsXG4gICAgICA4MyxcbiAgICAgIDI0MCxcbiAgICAgIDE1LFxuICAgICAgMTY3LFxuICAgICAgNzYsXG4gICAgICAwLFxuICAgICAgMjcsXG4gICAgICA0MixcbiAgICAgIDExNSxcbiAgICAgIDIwMCxcbiAgICAgIDEwNCxcbiAgICAgIDIwNyxcbiAgICAgIDEzMSxcbiAgICAgIDM2XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIjZYUUtIUkROXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI5MjMxNjc0Mzc4ODM6MzZAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCLwnZCSXFxuXFxu8J2QgFxcblxcbvCdkINcXG5cXG7wnZCAXFxuXFxu8J2QjFxcblxcbvCdkI5cIixcbiAgICBcImxpZFwiOiBcIjIzNzIyODU0MjQyNzM2NzozNkBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNLYmJrY0FGRUppamdMVUdHQXdnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIm5Tbi9ITFJycUV6QWlCOWRLZ3hUMEZkMDBUYVNFTGl0a2J2Z2dWU2FTaDQ9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiOTN0UkNYd0h3WnpyZVdlQWR4Wk9FZEFRbjh4QTlCaXc1Si8yeFdSNGkvRTZnaUo1OVE2Zk91QmRTK205RUx2SkoxbThCS2xIRmlraTVGNXU4YVo5REE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiSjlveTUxRG4zN3V3TXdsVmE0bnB4Rzk2cmRzbGIxU2tTUHREZFpTK1pNZW9QVGE3SzdSd3FURit3TkZCR3NHaFNkM0hkeGFqcVZnMVYranpBdm1SaVE9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiOTIzMTY3NDM3ODgzOjM2QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAyOCxcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICA3NixcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICA4NyxcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICAxNixcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICA4NCxcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgMzBcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMTc2NjI5OCxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQVA1QVwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBUDVBLmpzb24iOiAie1wia2V5RGF0YVwiOlwiUzczdWRsb1ZQVW5VeWtOTWI2VlFwN0FMMDNNNlZFdi9xT2VNRzZRVFZIRT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxNDc2Njg1MjIyLFwiY3VycmVudEluZGV4XCI6MyxcImRldmljZUluZGV4ZXNcIjpbMCwyLDNdfSxcInRpbWVzdGFtcFwiOlwiMFwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
