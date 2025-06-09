//══════════════════════════════════════════════════════════════════════════════════════════════════════//
//                                                                                                      //
//                                   𝗤𝗨𝗘𝗘𝗡-𝗔𝗡𝗝𝗨 𝗫ᴾᴿᴼ 𝐁𝐎𝐓                                               //
//                                                                                                      //
//                                         Ｖ：5.0.0                                                       //
//
//
//░██████╗░██╗░░░██╗███████╗███████╗███╗░░██╗  ░█████╗░███╗░░██╗░░░░░██╗██╗░░░██╗  ██╗░░██╗██████╗░██████╗░░█████╗░
//██╔═══██╗██║░░░██║██╔════╝██╔════╝████╗░██║  ██╔══██╗████╗░██║░░░░░██║██║░░░██║  ╚██╗██╔╝██╔══██╗██╔══██╗██╔══██╗
//██║██╗██║██║░░░██║█████╗░░█████╗░░██╔██╗██║  ███████║██╔██╗██║░░░░░██║██║░░░██║  ░╚███╔╝░██████╔╝██████╔╝██║░░██║
//╚██████╔╝██║░░░██║██╔══╝░░██╔══╝░░██║╚████║  ██╔══██║██║╚████║██╗░░██║██║░░░██║  ░██╔██╗░██╔═══╝░██╔══██╗██║░░██║
//░╚═██╔═╝░╚██████╔╝███████╗███████╗██║░╚███║  ██║░░██║██║░╚███║╚█████╔╝╚██████╔╝  ██╔╝╚██╗██║░░░░░██║░░██║╚█████╔╝
//░░░╚═╝░░░░╚═════╝░╚══════╝╚══════╝╚═╝░░╚══╝  ╚═╝░░╚═╝╚═╝░░╚══╝░╚════╝░░╚═════╝░  ╚═╝░░╚═╝╚═╝░░░░░╚═╝░░╚═╝░╚════╝░
//
//
//
//══════════════════════════════════════════════════════════════════════════════════════════════════════//
//*
//  * @project_name : © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ
//  * @version      : 5.0
//  * @author       : Janith Rashmika
//  * @youtube      : https://www.youtube.com/@gamingrash2006
//  * @description  : © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ, A Multi-functional WhatsApp bot created by Janith Rashmika.
//*
//*
//Base by Janith Rashmika
//GitHub: @Mrrashmika
//WhatsApp: +94717775628
//Want more free bot scripts? Subscribe to my YouTube channel: https://youtube.com/@gamingrash2006
//   * Created By GitHub: Mrrashmika
//   * Credit To Janith Rashmika
//   * © 2025 © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ-V4.
// ⛥┌┤
// */

const fs = require("fs");
if (fs.existsSync("config.env"))
  require("dotenv").config({ path: "./config.env" });

function convertToBool(text, fault = "true") {
  return text === fault ? true : false;
}
module.exports = {
  SESSION_ID:
    process.env.SESSION_ID ||
    "ANJU-XPRO~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNE5qamdtMnlScy81clZFTGJkc3VFQnRTR2wwS1RRUlp4SEg4SFFVaFdIMD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVWU0RForVDJBbm42SGRKdmZoUE11Z09zMm9JQ1lUM3FVd3Z1MnRPb1pCMD0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ1QlE5NGh6R1BsQUdhbHhMKzJaaWI5aWVIdlpRMnZnZTRzdjZnd0ZqeVdnPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJScnJQNGd0TWN1WTNnbEd5aGg3RjQ3c1JOWHI0MzNUMHR1M0pPNkFycldBPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjBKUFArRDQ2Y3cvR0l1enZ2STN1NjZOellXd2ZuRkcwWklPSEFTYXQvMTQ9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkZVemZQMzdKa3FvMy9RYnhoaEhBU3lVVXhnZlZVZEFTdXpUTnNPSzZkVDA9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoieUltek5vdzZQOXBESEJSa0JzOVkyTzNqbk05dm84dFB6YnhFb1FNbnhWVT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZUdoQ3VSTkFqdWUrY1NpZFZoZDI3aWZqN1hrcGl2NXJaVStQZmczS0l3MD0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ii83MTJtYkJhVnIxVXBqb0FtSU5ib1FqOVBRdmllb053TGJqTFFLVWhZKzREa0NCbDkxZjNzSnU5cGx5TEErV3Q2UVRyUExQcXQweEIwZ1dDa0cvVERBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6NDEsImFkdlNlY3JldEtleSI6ImlZTWlYd0hBRHRSaHFSNnBlN2dRWDdKWmRPaWwyUzJYd05sOXZySytwWDg9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbeyJrZXkiOnsicmVtb3RlSmlkIjoiOTQ3NzU3MDA4MTVAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiQTVBRDhERjBGODYyMUNDNTNGM0I1Nzk5QjY3N0I1OUQifSwibWVzc2FnZVRpbWVzdGFtcCI6MTc0OTQzMjQ1NX0seyJrZXkiOnsicmVtb3RlSmlkIjoiOTQ3NzU3MDA4MTVAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiMTgyNTQyQ0NENEEwRTcxNDRDNkRBM0U1Qzc0RkIxOEQifSwibWVzc2FnZVRpbWVzdGFtcCI6MTc0OTQzMjQ1Nn1dLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MSwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sImRldmljZUlkIjoiYk5ncWJFNEpURWVRMzMxSUxmX1gtUSIsInBob25lSWQiOiJmZjIxMDE0NC1jZjg4LTRjNmItOTdjMS03YzZkMTU0MzZkZjMiLCJpZGVudGl0eUlkIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlFJcit0dmZWZjBWa3hia00zUXRBN2J6NldzPSJ9LCJyZWdpc3RlcmVkIjp0cnVlLCJiYWNrdXBUb2tlbiI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlExSmx2UkFkbVd0VDBmVFRrdDVyTjVqMnU1Zz0ifSwicmVnaXN0cmF0aW9uIjp7fSwicGFpcmluZ0NvZGUiOiJQOTdCVk5ZMiIsIm1lIjp7ImlkIjoiOTQ3NzU3MDA4MTU6OEBzLndoYXRzYXBwLm5ldCIsImxpZCI6IjExNjQxNTY5MjU0MjA4Nzo4QGxpZCIsIm5hbWUiOiJETyBOT1QgRk9MTE9XIE1FICEifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0tIMXIrb0ZFUG53bU1JR0dBUWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IkUwWHViY1lHVmV5QTNXem12RXE2UXg5azhhUHU1UVhCSHlCbXNNaGI1Q0U9IiwiYWNjb3VudFNpZ25hdHVyZSI6Ilo1MENwQUh6MzlIZmRxZC9XN0pESm5wd0NybDNUT1F5bDVDMUtSOHJmZUo1QVVjbEIyOGdJQVAwMzRHQitsQ3hpMmJscjlhMitEbjk1U1cyZ1M5ckNnPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJOdXBTY2RMckU2VlFlTUVUQU9aUjlsQitsV3VaRHB0YVhCWGRpcXFBL0x5OElWLzk0N0RMaFkwQ1NveW1qNWhVc0dRc3V6M29TOXoyNks5WHFlcUlDdz09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6Ijk0Nzc1NzAwODE1OjhAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCUk5GN20zR0JsWHNnTjFzNXJ4S3VrTWZaUEdqN3VVRndSOGdackRJVytRaCJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsInJvdXRpbmdJbmZvIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ0JJSURRPT0ifSwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzQ5NDMyNDUzLCJsYXN0UHJvcEhhc2giOiIzUjlaMzkiLCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQU9TaCJ9",
  BOT_NUMBER:
    process.env.BOT_NUMBER || "94775700815",
  PASSWORD: 
    process.env.PASSWORD || "12345dilisha",
  SUDO: process.env.SUDO
    ? process.env.SUDO.split(",")
    : ["94717775628", "94758775628"],
  PORT: process.env.PORT || "3000",
  SESSION_DIR: process.env.SESSION_DIR || "sess",
};
