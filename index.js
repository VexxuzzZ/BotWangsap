// BASE CREATE BY ruztanxd 
/* JANGAN DI HPS HARGAI GOBLOK

• APA BILAH KEHAPUS CREDITS MAKA DI ANGGAP DOSA BESAR 

# RuztanXD Bukan Sepuh ataupun Pengocok jandal RuztanXD cuma mau di anggap ada:) */

require("./lib/global")
const func = require("./lib/place")
const readline = require("readline")
const chalk = require('chalk')
const CFonts = require('cfonts')
const welcome = JSON.parse(fs.readFileSync("./lib/Database/welcome.json"))
const NodeCache = require("node-cache")
const msgRetryCounterCache = new NodeCache()
const yargs = require('yargs/yargs')
const _ = require('lodash')
const usePairingCode = true
const question = (text) => {
const rl = readline.createInterface({
input: process.stdin,
output: process.stdout
})
const store = makeInMemoryStore({ logger: pino().child({ level: 'silent', stream: 'store' }) })
CFonts.say(` `)
CFonts.say(`RyuMa`, {
   font: 'block',
  align: 'left',
  colors: ['ungi'],

});
 console.log(chalk.cyan(`keep smiling even though you are hurt`))

console.log(chalk.black(chalk.bgCyan(`• 目立つようにする\n${chalk.bgBlue("• 考慮されていなくても :v")}`)))
return new Promise((resolve) => {
rl.question(text, resolve)
})}

async function startSesi() {
const store = makeInMemoryStore({ logger: pino().child({ level: 'silent', stream: 'store' }) })
const { state, saveCreds } = await useMultiFileAuthState(`./RyuSession`)
const { version, isLatest } = await fetchLatestBaileysVersion()

const connectionOptions = {
version,
keepAliveIntervalMs: 30000,
printQRInTerminal: !usePairingCode,
logger: pino({ level: "silent" }),
auth: state,
browser: ["Yandex","Chrome","20.0.04"],
getMessage: async (key) => {
if (store) {
const msg = await store.loadMessage(key.remoteJid, key.id, undefined)
return msg?.message || undefined
}
return {
conversation: 'WhatsApp Bot By RyuMa'
}}
}

const ryu = func.makeWASocket(connectionOptions)
if (usePairingCode && !ryu.authState.creds.registered) {
var phoneNumber = await question(chalk.black(chalk.bgCyan(`\n62 から始まる番号を入力してください:\n`)))
phoneNumber = phoneNumber.replace(/[^0-9]/g, '')
var code = await ryu.requestPairingCode(phoneNumber.trim())
code = code?.match(/.{1,4}/g)?.join("-") || code
console.log(chalk.black(chalk.bgCyan(`Your Pairing Code : `)), chalk.black(chalk.bgWhite(code)))
}

ryu.ev.on('creds.update', await saveCreds)
store?.bind(ryu.ev)

ryu.ev.on('call', async (user) => {
if (!global.anticall) return
let botNumber = await ryu.decodeJid(ryu.user.id)
for (let ff of user) {
if (ff.isGroup == false) {
if (ff.status == "offer") {
    let sendcall = await ryu.sendMessage(ff.from, {text: `@${ff.from.split("@")[0]} 申し訳ありませんが、オーナーボットが *Anticall* 機能をオンにしたため、あなたをブロックします。\n誤ってブロックしてしまった場合は、すぐに所有者に連絡してブロックを解除してください。`, contextInfo: {mentionedJid: [ff.from], externalAdReply: {thumbnailUrl: global.imgreply, title: "乂 通話検出", body: "搭載 "+global.namabot, previewType: "PHOTO"}}}, {quoted: null})
ryu.sendContact(ff.from, [owner], "コールまたはVC = ブロック", sendcall)
await sleep(7000)
await ryu.updateBlockStatus(ff.from, "block")
}}
}})

ryu.public = true

ryu.ev.on('messages.upsert', async (chatUpdate) => {
try {
m = chatUpdate.messages[0]
if (!m.message) return
m.message = (Object.keys(m.message)[0] === 'ephemeralMessage') ? m.message.ephemeralMessage.message : m.message
if (m.key && m.key.remoteJid === 'status@broadcast') {
if (global.autoreadsw) ryu.readMessages([m.key])
}
if (!ryu.public && m.key.remoteJid !== global.owner+"@s.whatsapp.net" && !m.key.fromMe && chatUpdate.type === 'notify') return
if (m.isBaileys) return
if (global.autoread) ryu.readMessages([m.key])
m = func.smsg(ryu, m, store)
require("./RyuMa.js")(ryu, m, store)
} catch (err) {
console.log(err)
}
})

ryu.ev.on('group-participants.update', async (anu) => {
if (!welcome.includes(anu.id)) return
let botNumber = await ryu.decodeJid(ryu.user.id)
if (anu.participants.includes(botNumber)) return
try {
let metadata = await ryu.groupMetadata(anu.id)
let namagc = metadata.subject
let participants = anu.participants
for (let num of participants) {
let check = anu.author !== num && anu.author.length > 1
let tag = check ? [anu.author, num] : [num]
try {
ppuser = await ryu.profilePictureUrl(num, 'image')
} catch {
ppuser = 'https://telegra.ph/file/de7c8230aff02d7bd1a93.jpg'
}
if (anu.action == 'add') {
ryu.sendMessage(anu.id, {text: check ? `@${anu.author.split("@")[0]} Telah Menambahkan @${num.split("@")[0]} Ke Dalam Grup Ini`, 
contextInfo: {mentionedJid: [...tag], externalAdReply: { thumbnailUrl: ppuser, title: '© Welcome Message', body: '', renderLargerThumbnail: true, sourceUrl: "https://whatsapp.com/channel/0029Vb6KtdzG8l5M16Qpam3X", mediaType: 1}}})
} 
if (anu.action == 'remove') { 
ryu.sendMessage(anu.id, {text: check ? `@${anu.author.split("@")[0]} Telah Mengeluarkan @${num.split("@")[0]} Dari Grup Ini`, 
contextInfo: {mentionedJid: [...tag], externalAdReply: { thumbnailUrl: ppuser, title: '© Leaving Message', body: '', renderLargerThumbnail: true, sourceUrl: "https://whatsapp.com/channel/0029Vb6KtdzG8l5M16Qpam3X", mediaType: 1}}})
}
if (anu.action == "promote") {
ryu.sendMessage(anu.id, {text: `@${anu.author.split("@")[0]} Telah Menjadikan @${num.split("@")[0]} Sebagai Admin Grup Ini`, 
contextInfo: {mentionedJid: [...tag], externalAdReply: { thumbnailUrl: ppuser, title: '© Promote Message', body: '', renderLargerThumbnail: true, sourceUrl: "https://whatsapp.com/channel/0029Vb6KtdzG8l5M16Qpam3X", mediaType: 1}}})
}
if (anu.action == "demote") {
ryu.sendMessage(anu.id, {text: `@${anu.author.split("@")[0]} Telah Memberhentikan @${num.split("@")[0]} Sebagai Admin Grup Ini`, 
contextInfo: {mentionedJid: [...tag], externalAdReply: { thumbnailUrl: ppuser, title: '© Demote Message', body: '', renderLargerThumbnail: true, sourceUrl: "https://whatsapp.com/channel/0029Vb6KtdzG8l5M16Qpam3X", mediaType: 1}}})
}
} 
} catch (err) {
console.log(err)
}})

ryu.ev.on('connection.update', async (update) => {
const { connection, lastDisconnect } = update
if (connection === 'close') {
const reason = new Boom(lastDisconnect?.error)?.output.statusCode
console.log(color(lastDisconnect.error, 'deeppink'))
if (lastDisconnect.error == 'Error: Stream Errored (unknown)') {
process.exit()
} else if (reason === DisconnectReason.badSession) {
console.log(color(`Bad Session File, Please Delete Session and Scan Again`))
process.exit()
} else if (reason === DisconnectReason.connectionClosed) {
console.log(color('[SYSTEM]', 'white'), color('Connection closed, reconnecting...', 'deeppink'))
process.exit()
} else if (reason === DisconnectReason.connectionLost) {
console.log(color('[SYSTEM]', 'white'), color('Connection lost, trying to reconnect', 'deeppink'))
process.exit()
} else if (reason === DisconnectReason.connectionReplaced) {
console.log(color('Connection Replaced, Another New Session Opened, Please Close Current Session First'))
ryu.logout()
} else if (reason === DisconnectReason.loggedOut) {
console.log(color(`Device Logged Out, Please Scan Again And Run.`))
ryu.logout()
} else if (reason === DisconnectReason.restartRequired) {
console.log(color('Restart Required, Restarting...'))
await startSesi()
} else if (reason === DisconnectReason.timedOut) {
console.log(color('Connection TimedOut, Reconnecting...'))
startSesi()
}
} else if (connection === "connecting") {
console.log(color('Menghubungkan . . . '))
} else if (connection === "open") {
let teksnotif = `*BOT VIIP By RyuMa Tersambung*
Connected To ${ryu.user.id.split(":")[0]}`
ryu.sendMessage(global.owner+"@s.whatsapp.net", {text: teksnotif})
console.log(color('Bot Berhasil Tersambung'))
}
})

return ryu
}

startSesi()

process.on('uncaughtException', function (err) {
console.log('Caught exception: ', err)
})
