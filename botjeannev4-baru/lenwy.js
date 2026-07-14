// ◆◇◆◇◆◇◆◇◆◇◆◇◆◇◆◇◆◇◆◇◆◇◆
// ◇ 🍒 VERSION UPDATE ◇
// ◇ UPDATE CHAT LYNN.ID : 6288286533186
// ◇ SCRIPT : Jeanne V4
// ◇ VERSION : 3.0
// ◆◇◆◇◆◇◆◇◆◇◆◇◆◇◆◇◆◇◆◇◆◇◆
// 𝐉𝐀𝐍𝐆𝐀𝐍 𝐔𝐁𝐀𝐇 𝐓𝐄𝐗𝐓 ❗=============



require('./len')
const { WA_DEFAULT_EPHEMERAL, getAggregateVotesInPollMessage, generateWAMessageFromContent, proto, generateWAMessageContent, InteractiveMessage, generateWAMessage, prepareWAMessageMedia, downloadContentFromMessage, areJidsSameUser, getContentType } = require("baileys");
const fs = require('fs')
const path = require('path')
const util = require('util')
let ms;
const toMs = require('ms');
(async () => {
  ms = (await import('parse-ms')).default;
})()
const chalk = require('chalk')
const os = require('os')
const axios = require('axios')
const fsx = require('fs-extra')
const crypto = require('crypto')
const ffmpeg = require('fluent-ffmpeg')
const moment = require('moment-timezone')
const cron = require('node-cron')
const { color, bgcolor } = require('./library/color')
const { uploader60Minute, uploaderLebih, up } = require('./library/uploader')
const { fromBuffer } = require('file-type')
const cheerio = require('cheerio')
const speed = require('performance-now')
const { Image } = require('node-webpmux')
const { performance } = require('perf_hooks')
const { exec, spawn, execSync } = require("child_process")
const { smsg, tanggal, getTime, formatp, isUrl, sleep, clockString, runtime, fetchJson, getBuffer, jsonformat, format, parseMention, getRandom, getGroupAdmins, generateProfilePicture, toJid } = require('./library/myfunc.js')
const { FajarNews, BBCNews, metroNews, CNNNews, iNews, KumparanNews, TribunNews, DailyNews, DetikNews, OkezoneNews, CNBCNews, KompasNews, SindoNews, TempoNews, IndozoneNews, AntaraNews, RepublikaNews, VivaNews, KontanNews, MerdekaNews, KomikuSearch, AniPlanetSearch, KomikFoxSearch, KomikStationSearch, MangakuSearch, KiryuuSearch, KissMangaSearch, KlikMangaSearch, PalingMurah, LayarKaca21, AminoApps, Mangatoon, WAModsSearch, Emojis, CoronaInfo, JalanTikusMeme,Cerpen, Quotes, Couples, Darkjokes } = require("dhn-api")
const { addResponList, delResponList, isAlreadyResponList, isAlreadyResponListGroup, sendResponList, updateResponList, getDataResponList, updateKey, readDatabasePayment, writeDatabasePayment, updateId, getGroupIdFromLink, resetList, deleteListSampah } = require('./library/respon-list')
const { isKeyResponStick, getDataResponStick, isAlreadyResponStickGroup, delResponStick } = require('./library/funcStick')
const { addSewaGroup, getSewaExpired, getSewaPosition, checkSewaGroup, getAllPremiumUser } = require('./library/sewa')
const { number, command } = require('yargs')
const { error } = require('console')
const { cekStatusAkunDigi, cekLayananDigiPrabayar, isiSaldoDigi, orderDigi, cekItemDigi, cekOrderanDigi } = require('./project/digiflazz')
const { generateQris, checkQrisStatus, formatSaldo } = require('./project/paymentGateway.js')
const { webpToMp4, imageToWebp, videoToWebp, writeExifImg, writeExifVid } = require('./library/exif')
const { igdl } = require('btch-downloader')
const { cekMl } = require('./library/mlRegi.js')
const { applyTags, getDefaultTextOpen, getDefaultTextClose, saveGroupDB, getGroupTextOpen, getGroupTextClose, updateTextOpen, updateTextClose } = require('./library/groupTextConfig')
const dns = require('dns').promises

const pathsewa = './storage/sewa.json';
global.db.data = JSON.parse(fs.readFileSync('./storage/database.json'))
if (global.db.data) global.db.data = {
users: {},
chats: {},
game: {},
database: {},
settings: {},
setting: {},
others: {},
sticker: {},
...(global.db.data || {})
}

let kuismath = db.data.game.math = []
let tebakgambar = db.data.game.tebakgambar = []
let tebakkata = db.data.game.tebakkata = []
let caklontong = db.data.game.lontong = []
let caklontong_desk = db.data.game.lontong_desk = []
let tebakkalimat = db.data.game.kalimat = []
let tebaklirik = db.data.game.lirik = []
let tebaktebakan = db.data.game.tebakan = []
let db_respon_list = JSON.parse(fs.readFileSync('./storage/list-message.json'))
let reminders = {};

const authorr = global.owner
const pengguna = JSON.parse(fs.readFileSync('./storage/user.json'))
const owner = JSON.parse(fs.readFileSync('./premium.json'))
const authorFilePath = path.resolve(__dirname, './author.json')
const author = JSON.parse(fs.readFileSync(authorFilePath))
const dbgcFilePath = path.join(__dirname, './storage/databaseGroup.json')
global.datagc
try {
  global.datagc = JSON.parse(fs.readFileSync(dbgcFilePath, 'utf-8'));
} catch (error) {
  console.error('Terjadi kesalahan saat membaca file database:', error);
}


module.exports = lenwy = async (lenwy, m, chatUpdate, store) => {
 try {
var body =
(m.mtype === 'conversation') ? m.message.conversation :
(m.mtype === 'imageMessage') ? (m.message.imageMessage.caption || '[ IMAGE ]') :
(m.mtype === 'videoMessage') ? (m.message.videoMessage.caption || '[ VIDEO ]') :
(m.mtype === 'audioMessage') ? '[ AUDIO ]' :
(m.mtype === 'stickerMessage') ? '[ STICKER ]' :
(m.mtype === 'documentMessage') ? `[ DOCUMENT ] ${m.message.documentMessage.fileName || ''}` :
(m.mtype === 'contactMessage') ? '[ CONTACT ]' :
(m.mtype === 'locationMessage') ? '[ LOCATION ]' :
(m.mtype === 'extendedTextMessage') ? m.message.extendedTextMessage.text :
(m.mtype === 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId :
(m.mtype === 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId :
(m.mtype === 'interactiveResponseMessage') ? JSON.parse(m.message.interactiveResponseMessage.nativeFlowResponseMessage.paramsJson).id :
(m.mtype === 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId :
(m.mtype === 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text) :
''
var budy = (typeof m.text == 'string' ? m.text : '')
const premiumFilePath = path.join("./premium.json")
const dbFilePath = path.join(__dirname, './storage/database.json')
const rawBody = body || "";
const prefix = /^[°zZ#$@+,.?=''():√%!¢£¥€π¤ΠΦ&><™©®Δ^βα¦|/\\©^]/.test(rawBody) ? rawBody.match(/^[°zZ#$@+,.?=''():√%!¢£¥€π¤ΠΦ&><™©®Δ^βα¦|/\\©^]/gi)[0]: '';

const content = rawBody.slice(prefix.length).trim() || ""; 
const parts = content.split(/ +/);
const commandRaw = parts[0] || "";
const args = parts.slice(1);
const command = commandRaw.toLowerCase();
const commandPrivate = commandRaw.toLowerCase();
const isCmd = body?.startsWith(prefix)
const cmd = prefix + command

const full_args = body?.replace(command, '').slice(1).trim()
const spychat = body?.replace().slice().trim()
const pushname = m.pushName || "No Name"
const text = q = args.join(" ")
const { type, quotedMsg, mentioned, now, fromMe } = m
const quoted = m.quoted ? m.quoted : m
const quoted2 = (quoted.mtype == 'buttonsMessage') ? quoted[Object.keys(quoted)[1]] : (quoted.mtype == 'templateMessage') ? quoted.hydratedTemplate[Object.keys(quoted.hydratedTemplate)[1]] : (quoted.mtype == 'product') ? quoted[Object.keys(quoted)[0]] : m.quoted ? m.quoted : m
const mime = (quoted.msg || quoted).mimetype || ''
const isMedia = /image|video|sticker|audio/.test(mime)
const from = m.key.remoteJid

const rawIds = [lenwy.user?.id, lenwy.user?.jid].filter(Boolean)
const botNumber = rawIds.map(v => {
  const jid = typeof v === 'string' ? v : ''
  return jid
    .split('@')[0]
    .split(':')[0]
    .replace(/[^0-9]/g, '')
}).filter(Boolean)
const isBot = botNumber.includes(m.sender.replace(/[^0-9]/g, ''))

const creatorFilePathh = path.resolve(__dirname, './author.json')
const creatorNumbers = JSON.parse(fs.readFileSync(creatorFilePathh))

const premiumFilePathh = path.resolve(__dirname, './premium.json')
const premiumNumbers = JSON.parse(fs.readFileSync(premiumFilePathh))
const allPremium = [botNumber, ...creatorNumbers, ...premiumNumbers]

const bannedFilePathh = path.resolve(__dirname, './banned.json')
const bannedNumbers = JSON.parse(fs.readFileSync(bannedFilePathh))

const gcMutedPath = path.resolve(__dirname, './storage/gcMuted.json')
const gcMuted = JSON.parse(fs.readFileSync(gcMutedPath))
const isGcMuted = [...gcMuted].includes(m.chat)

const gcTopupPath = path.resolve(__dirname, './project/database/gcTopup.json')
const gcTopup = JSON.parse(fs.readFileSync(gcTopupPath))
const isGcTopup = [...gcTopup].includes(m.chat)

const sender = m.isGroup ? (m.key.participant ? m.key.participant : m.sender) : m.sender
const groupMetadata = m.isGroup ? await lenwy.groupMetadata(m.chat).catch(e => {}) : ''
const groupName = m.isGroup ? await groupMetadata?.subject : ''
const participants = m.isGroup ? await groupMetadata?.participants : []
const groupAdmins = m.isGroup ? await getGroupAdmins(participants) : []

const senderNumber = (m.sender || sender || '').replace(/[^0-9]/g, '');
const isCreator = creatorNumbers.includes(senderNumber);
const isPrem = allPremium.includes(senderNumber);
const isBan = bannedNumbers.includes(senderNumber);

const isBotAdmins = m.isGroup ? [lenwy.user.id, lenwy.user.lid].some(j => groupAdmins.includes(j?.replace(/:\d+@/, '@'))) : false
const isAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
const isUser = pengguna.includes(m.sender)
const numberQuery = text.replace(new RegExp("[()+-/ +/]", "gi"), "") + "@s.whatsapp.net"
const mentionByTag = m.mtype == "extendedTextMessage" && m.message.extendedTextMessage.contextInfo != null ? m.message.extendedTextMessage.contextInfo.mentionedJid : []
const time = moment(Date.now()).tz('Asia/Jakarta').locale('id').format('HH:mm:ss z')
const salam = moment(Date.now()).tz('Asia/Jakarta').locale('id').format('a')
const qtod = m.quoted? "true":"false"
const more = String.fromCharCode(8206)
const readmore = more.repeat(4001)
const isQuotedViewOnce = m.quoted?.viewOnce ? true : false


const harinya = moment.tz('Asia/Jakarta').format('dddd')
const tanggalnya = moment.tz('Asia/Jakarta').format('DD')
const bulannya = moment.tz('Asia/Jakarta').format('MM')
const tahunnya = moment.tz('Asia/Jakarta').format('YYYY')
const namabulannya = moment.tz('Asia/Jakarta').format('MMMM')
const jamnya = moment.tz('Asia/Jakarta').format('HH')
const menitnya = moment.tz('Asia/Jakarta').format('mm')
const detiknya = moment.tz('Asia/Jakarta').format('ss')

const hariini = moment.tz('Asia/Jakarta').format('dddd, DD MMMM YYYY')
const hariini2 = moment.tz('Asia/Jakarta').format('DD MMMM YYYY')
const hariini3 = moment.tz('Asia/Jakarta').format('dddd')
const hariini4 = moment.tz('Asia/Jakarta').format('DD-MMMM-YYYY')
const waktubackup = moment.tz('Asia/Jakarta').format('DDMMMM')
const wib = moment.tz('Asia/Jakarta').format('HH : mm : ss')
const wit = moment.tz('Asia/Jayapura').format('HH : mm : ss')
const wita = moment.tz('Asia/Makassar').format('HH : mm : ss')
const time2 = moment().tz('Asia/Jakarta').format('HH:mm:ss')

let ucapanWaktu = `${global.emoji} Selamat Malam`
if (time2 < "03:00:00") {
  ucapanWaktu = `${global.emoji} Selamat Tengah Malam`
} else if (time2 < "05:00:00") {
  ucapanWaktu = `${global.emoji} Selamat Subuh`
} else if (time2 < "10:00:00") {
  ucapanWaktu = `${global.emoji} Selamat Pagi`
} else if (time2 < "15:00:00") {
  ucapanWaktu = `${global.emoji} Selamat Siang`
} else if (time2 < "18:00:00") {
  ucapanWaktu = `${global.emoji} Selamat Sore`
} else if (time2 < "19:00:00") {
  ucapanWaktu = `${global.emoji} Selamat Petang`
}
    
const toxicWords = /(ewe|bangsad|mmk|koncol|puki|kojtol|kintil|momok|nigga|ajg|ewean|yatim|anjing|kontol|memek|bangsat|babi|goblok|goblog|kntl|pepek|ppk|ngentod|ngentd|ngntd|kentod|kntd|bgst|anjg|anj|fuck|hitam|ireng|jawir|gay|asw|ktl|ngentot|ngewe|bokep|bkp)/i;
function parseMention(text = '') {
return [...text.matchAll(/@([0-9]{5,16}|0)/g)].map(v => v[1] + '@s.whatsapp.net')
}
async function LenwyLD() {
  await sleep(100)
  await lenwy.sendMessage(from, { react: { text: '🕒', key: m.key } })
}

try {
    if (m.isGroup) {
        const isNew = !global.datagc[m.chat]
        global.datagc[m.chat] ??= {
            text_welcome: "",
            text_left: "",
            text_open: "",
            text_close: "",
            text_proses: "",
            text_done: "",
            text_list: "",
            text_list_simbol: "",
            waktu_Open: "",
            waktu_Close: ""
        }
        if (isNew) {
            fs.writeFileSync(dbgcFilePath, JSON.stringify(global.datagc, null, 2), "utf-8")
        }
    }
} catch (error) {
    console.error("Terjadi kesalahan saat membaca atau menulis file database:", error)
}

try {
    const isNumber = x => typeof x === 'number' && !isNaN(x)
    const user = global.db.data.users[m.sender] ??= {}
    user.afk ??= {}

    if (m.isGroup) {
        user.afk[m.chat] ??= { time: -1, reason: '' }
        
        const chats = global.db.data.chats[m.chat] ??= {}
        chats.onlyAdmin ??= false
        chats.wlcm ??= true
        chats.left ??= true
        chats.linkgc ??= ''
        //antimenu
        chats.antilinktt ??= false
        chats.antilinkyt ??= false
        chats.antiwame ??= false
        chats.antilink1 ??= false
        chats.antilink2 ??= false
        chats.antitoxic1 ??= false
        chats.antitoxic2 ??= false
        chats.antilinkgc1 ??= false
        chats.antilinkgc2 ??= false
        chats.antisw1 ??= false
        chats.antisw2 ??= false
    }

    if (!isNumber(user.level)) user.level = 0
    user.autolevelup ??= true

    const setting = global.db.data.settings[botNumber] ??= {}
    if (!isNumber(setting.status)) setting.status = 0
    setting.autobio ??= false
    setting.autoread ??= false
} catch (err) {
    console.error(err)
}


if (isCmd) {
  if (global.db.data.chats[m.chat]?.onlyAdmin && !isAdmins && !isCreator && !isBot) return
  if (isGcMuted && !isCreator && !isBot) return
  if (!m.isGroup && !isCreator && !isBot) return
}

if (isCmd) {
  const listcolor = ['red', 'yellow', 'blue', 'magenta', 'cyan', 'white', 'gray']
  console.log(
    color(`\n⏰ [ ${jamnya}:${menitnya}:${detiknya} ]`, listcolor[Math.floor(Math.random() * listcolor.length)]),
    color(`👥 [ ${m.isGroup ? groupName : m.chat.split("@")[0] || 'NoName'} ]`, listcolor[Math.floor(Math.random() * listcolor.length)]),
    color(`\n👤 ${pushname || 'NoName'}`, 'cyan'),
    color(`:`, 'white'),
    color(`${body}`, 'green', 'bold')
  );
}

if (isCmd && !isUser) {
  pengguna.push(sender)
  fs.writeFileSync('./storage/user.json', JSON.stringify(pengguna, null, 2))
}

if (global.db.data.settings[botNumber].autoread) {
  if (m.message) {
    lenwy.readMessages([m.key])
  }
}

// ========== RESPONSE LIST FITUR ========== //
if (m.isGroup && isAlreadyResponList(m.chat, String(body || '').toLowerCase(), db_respon_list)) {
  var get_data_respon = getDataResponList(m.chat, String(body || '').toLowerCase(), db_respon_list)
  if (get_data_respon.isImage === false) {
    lenwy.sendMessage(m.chat, { text: sendResponList(m.chat, String(body || '').toLowerCase(), db_respon_list) }, {quoted: m})
  } else {
    try {
      lenwy.sendMessage(m.chat, { image: await getBuffer(get_data_respon.image_url), caption: get_data_respon.response }, {quoted: m})
    } catch (e) {
      m.reply(`Foto tidak tersedia silahkan chat admin untuk melakukan ${prefix}updatelist bergambar pada Key ${body}`)
      await sleep(5000)
      lenwy.sendMessage(m.chat, { text: sendResponList(m.chat, String(body || '').toLowerCase(), db_respon_list) }, {quoted: m})
    }
  }
}
if (m.isGroup && isKeyResponStick(m.chat, String(body || '').toLowerCase(), JSON.parse(fs.readFileSync('./storage/databaseSticker.json')))) {
  if (!isAdmins) return;
  var getRespon = getDataResponStick(m.chat, String(body || '').toLowerCase(), JSON.parse(fs.readFileSync('./storage/databaseSticker.json')));
  let buffer = fs.readFileSync(getRespon.imageUrl);
  await lenwy.sendMessage(from, { sticker: buffer }, { quoted: m.quoted ? m.quoted.fakeObj : m })
}


// ========== ANTI FITUR ========== //
const chat = db.data.chats[m.chat] || {};
const isNormalMember = !m.key.fromMe && !isCreator && !isAdmins;
const isThisGcLink = chat.linkgc ? new RegExp(chat.linkgc, 'i').test(text) : false;
const punish = async (replyMsg, shouldKick = false) => {
  if (replyMsg) m.reply(replyMsg);
  lenwy.sendMessage(m.chat, { delete: m.key });
  if (shouldKick) {
    await sleep(1500);
    await lenwy.groupParticipantsUpdate(m.chat, [m.sender], 'remove');
  }
};
if (isNormalMember) {
  if (chat.antilinktt && text.includes('vt.tiktok.com')) { 
   return punish(`*antilink tt sedang aktif*\n⛔ *Pesan kamu akan dihapus*`);
  }
  if (chat.antilinkyt && text.includes('youtube.')) { 
   return punish(`*antilink yt sedang aktif*\n⛔ *Pesan kamu akan dihapus*`);
  }
  if (chat.antiwame && text.includes('wa.me')) {
   return punish(`*anti wa.me sedang aktif*\n⛔ *Pesan kamu akan dihapus*`);
  }
  if (!isThisGcLink && text.includes('http')) {
    if (chat.antilink1) return punish(`*Anti link sedang aktif*\n⛔ *Pesan kamu akan dihapus*`, false);
    if (chat.antilink2) return punish(`*Anti link sedang aktif*\n⛔ *Pesan kamu akan dihapus dan kamu akan dikeluarkan*`, true);
  }
  if (toxicWords.exec(m.text || budy)) {
    if (chat.antitoxic1) return punish(null, false);
    if (chat.antitoxic2) return punish(null, true);
  }
  if (!isThisGcLink && text.includes('chat.whatsapp.com')) {
    if (chat.antilinkgc1) return punish(`*Anti link grup sedang aktif*\n⛔ *Pesan kamu akan dihapus*`, false);
    if (chat.antilinkgc2) return punish(`*Anti link grup sedang aktif*\n⛔ *Pesan kamu akan dihapus dan kamu akan dikeluarkan*`, true);
  }
  if (m.mtype === 'groupStatusMentionMessage') {
    if (chat.antisw1) return punish(`*Anti status mention sedang aktif*\n⛔ *Pesan kamu akan dihapus*`, false);
    if (chat.antisw2) return punish(`*Anti status mention sedang aktif*\n⛔ *Pesan kamu akan dihapus dan kamu akan dikeluarkan*`, true);
  }
}


let list = []
for (let i of owner) {
list.push({
displayName: await lenwy.getName(i + '@s.whatsapp.net'),
vcard: `BEGIN:VCARD\n
VERSION:3.0\n
N:${await lenwy.getName(i + '@s.whatsapp.net')}\n
FN:${await lenwy.getName(i + '@s.whatsapp.net')}\n
item1.TEL;waid=${i}:${i}\n
item1.X-ABLabel:Ponsel\n
item2.EMAIL;type=INTERNET:FakeLenwy@gmail.com\n
item2.X-ABLabel:Email\n
item3.URL:Youtube : Lenwy\n
item3.X-ABLabel:Grup WangSaff\n
item4.ADR:;;Mars Area 51;;;;\n
item4.X-ABLabel:Region\n
END:VCARD`
})
}

if (isMedia && m.msg.fileSha256 && (m.msg.fileSha256.toString('base64') in global.db.data.sticker)) {
let hash = global.db.data.sticker[m.msg.fileSha256.toString('base64')]
let { text, mentionedJid } = hash
let messages = await generateWAMessage(from, { text: text, mentions: mentionedJid }, {
userJid: lenwy.user.id,
quoted : m.quoted && m.quoted.fakeObj
})
messages.key.fromMe = areJidsSameUser(m.sender, lenwy.user.id)
messages.key.id = m.key.id
messages.pushName = m.pushName
if (m.isGroup) messages.participant = m.sender
let msg = {
...chatUpdate,
messages: [proto.WebMessageInfo.fromObject(messages)],
type: 'append'
}
lenwy.ev.emit('messages.upsert', msg)
}

const quizMap = {
  kuismath: {
    data: kuismath,
    title: 'Kuis Matematika',
    replay: 'Math Mode'
  },
  tebakgambar: {
    data: tebakgambar,
    title: 'Tebak Gambar',
    replay: 'Tebak Gambar'
  },
  tebakkata: {
    data: tebakkata,
    title: 'Tebak Kata',
    replay: 'Tebak Kata'
  },
  caklontong: {
    data: caklontong,
    title: 'Tebak Lontong',
    replay: 'Tebak Lontong',
    extraDelete: () => delete caklontong_desk[room]
  },
  tebakkalimat: {
    data: tebakkalimat,
    title: 'Tebak Kalimat',
    replay: 'Tebak Kalimat'
  },
  tebaklirik: {
    data: tebaklirik,
    title: 'Tebak Lirik',
    replay: 'Tebak Lirik'
  },
  tebaktebakan: {
    data: tebaktebakan,
    title: 'Tebak Tebakan',
    replay: 'Tebak Tebakan'
  }
}

for (const { data, title, replay, extraDelete } of Object.values(quizMap)) {
  if (!isCmd || !data[m.chat]) continue
  kuis = true
  jawaban = data[m.chat]
  if (body.toLowerCase() === jawaban) {
    await m.reply(`${global.emoji} *${title}*

🎁 *Jawaban Benar*
📣 *Ingin Bermain Lagi? Silakan Ketik ${replay}*`)
    delete data[m.chat]
    if (extraDelete) extraDelete()
  } else {
    await m.reply('❌ *Jawaban Salah!*')
  }
  return
}

this.game = this.game ? this.game : {}
let room = Object.values(this.game).find(room => room.id && room.game && room.state && room.id.startsWith('tictactoe') && [room.game.playerX, room.game.playerO].includes(m.sender) && room.state == 'PLAYING')
if (room) {
let ok
let isWin = !1
let isTie = !1
let isSurrender = !1
if (!/^([1-9]|(me)?nyerah|surr?ender|off|skip)$/i.test(m.text)) return
isSurrender = !/^[1-9]$/.test(m.text)
if (m.sender !== room.game.currentTurn) { // nek wayahku
if (!isSurrender) return !0
}
if (!isSurrender && 1 > (ok = room.game.turn(m.sender === room.game.playerO, parseInt(m.text) - 1))) {
m.reply({
'-3': 'Game telah berakhir',
'-2': 'Invalid',
'-1': 'Posisi Invalid',
0: 'Posisi Invalid',
}[ok])
return !0
}
if (m.sender === room.game.winner) isWin = true
else if (room.game.board === 511) isTie = true
let arr = room.game.render().map(v => {
return {
X: '❌',
O: '⭕',
1: '1️⃣',
2: '2️⃣',
3: '3️⃣',
4: '4️⃣',
5: '5️⃣',
6: '6️⃣',
7: '7️⃣',
8: '8️⃣',
9: '9️⃣',
}[v]
})
if (isSurrender) {
room.game._currentTurn = m.sender === room.game.playerX
isWin = true
}
let winner = isSurrender ? room.game.currentTurn : room.game.winner
let str = `Room ID: ${room.id}

${arr.slice(0, 3).join('')}
${arr.slice(3, 6).join('')}
${arr.slice(6).join('')}

${isWin ? `@${winner.split('@')[0]} Menang!` : isTie ? `Game berakhir` : `Giliran ${['❌', '⭕'][1 * room.game._currentTurn]} (@${room.game.currentTurn.split('@')[0]})`}
❌: @${room.game.playerX.split('@')[0]}
⭕: @${room.game.playerO.split('@')[0]}

Ketik *nyerah* untuk menyerah dan mengakui kekalahan`
if ((room.game._currentTurn ^ isSurrender ? room.x : room.o) !== from)
room[room.game._currentTurn ^ isSurrender ? 'x' : 'o'] = from
if (room.x !== room.o) await lenwy.sendText(room.x, str, m, { mentions: parseMention(str) } )
await lenwy.sendText(room.o, str, m, { mentions: parseMention(str) } )
if (isTie || isWin) {
delete this.game[room.id]
}
}
this.suit = this.suit ? this.suit : {}
let roof = Object.values(this.suit).find(roof => roof.id && roof.status && [roof.p, roof.p2].includes(m.sender))
if (roof) {
let win = ''
let tie = false
if (m.sender == roof.p2 && /^(acc(ept)?|terima|gas|oke?|tolak|gamau|nanti|ga(k.)?bisa|y)/i.test(m.text) && m.isGroup && roof.status == 'wait') {
if (/^(tolak|gamau|nanti|n|ga(k.)?bisa)/i.test(m.text)) {
lenwy.sendTextWithMentions(from, `@${roof.p2.split`@`[0]} menolak suit, suit dibatalkan`, m)
delete this.suit[roof.id]
return !0
}
roof.status = 'play'
roof.asal = from
clearTimeout(roof.waktu)
lenwy.sendText(from, `Suit telah dikirimkan ke chat

@${roof.p.split`@`[0]} dan 
@${roof.p2.split`@`[0]}

Silahkan pilih suit di chat masing"
klik https://wa.me/${botNumber.split`@`[0]}`, m, { mentions: [roof.p, roof.p2] })
if (!roof.pilih) lenwy.sendText(roof.p, `Silahkan pilih \n\nBatu🗿\nKertas📄\nGunting✂️`, m)
if (!roof.pilih2) lenwy.sendText(roof.p2, `Silahkan pilih \n\nBatu🗿\nKertas📄\nGunting✂️`, m)
roof.waktu_milih = setTimeout(() => {
if (!roof.pilih && !roof.pilih2) lenwy.sendText(from, `Kedua pemain tidak niat main,\nSuit dibatalkan`)
else if (!roof.pilih || !roof.pilih2) {
win = !roof.pilih ? roof.p2 : roof.p
lenwy.sendTextWithMentions(from, `@${(roof.pilih ? roof.p2 : roof.p).split`@`[0]} tidak memilih suit, game berakhir`, m)
}
delete this.suit[roof.id]
return !0
}, roof.timeout)
}
let jwb = m.sender == roof.p
let jwb2 = m.sender == roof.p2
let g = /gunting/i
let b = /batu/i
let k = /kertas/i
let reg = /^(gunting|batu|kertas)/i
if (jwb && reg.test(m.text) && !roof.pilih && !m.isGroup) {
roof.pilih = reg.exec(m.text.toLowerCase())[0]
roof.text = m.text
m.reply(`Kamu telah memilih ${m.text} ${!roof.pilih2 ? `\n\nMenunggu lawan memilih` : ''}`)
if (!roof.pilih2) lenwy.sendText(roof.p2, '_Lawan sudah memilih_\nSekarang giliran kamu', 0)
}
if (jwb2 && reg.test(m.text) && !roof.pilih2 && !m.isGroup) {
roof.pilih2 = reg.exec(m.text.toLowerCase())[0]
roof.text2 = m.text
m.reply(`Kamu telah memilih ${m.text} ${!roof.pilih ? `\n\nMenunggu lawan memilih` : ''}`)
if (!roof.pilih) lenwy.sendText(roof.p, '_Lawan sudah memilih_\nSekarang giliran kamu', 0)
}
let stage = roof.pilih
let stage2 = roof.pilih2
if (roof.pilih && roof.pilih2) {
clearTimeout(roof.waktu_milih)
if (b.test(stage) && g.test(stage2)) win = roof.p
else if (b.test(stage) && k.test(stage2)) win = roof.p2
else if (g.test(stage) && k.test(stage2)) win = roof.p
else if (g.test(stage) && b.test(stage2)) win = roof.p2
else if (k.test(stage) && b.test(stage2)) win = roof.p
else if (k.test(stage) && g.test(stage2)) win = roof.p2
else if (stage == stage2) tie = true
lenwy.sendText(roof.asal, `_*Hasil Suit*_${tie ? '\nSERI' : ''}

@${roof.p.split`@`[0]} (${roof.text}) ${tie ? '' : roof.p == win ? ` Menang \n` : ` Kalah \n`}
@${roof.p2.split`@`[0]} (${roof.text2}) ${tie ? '' : roof.p2 == win ? ` Menang \n` : ` Kalah \n`}
`.trim(), m, { mentions: [roof.p, roof.p2] })
delete this.suit[roof.id]
}
}

let mentionUser = [...new Set([...(m.mentionedJid || []), ...(m.quoted ? [m.quoted.sender] : [])])]
for (let jid of mentionUser) {
  let user = global.db.data.users[jid]
  if (!user) continue
  let afkTime = user.afkTime
  if (!afkTime || afkTime < 0) continue
  let reason = user.afkReason || ''
  let ygSedangAfk = await lenwy.getName(jid) || jid
  let pushnameYgNgetag = await lenwy.getName(m.sender) || m.sender

  m.reply(`⚠️ *${pushnameYgNgetag} Jangan Tag ${ygSedangAfk}! Dia Sedang AFK*
❗❗ *Dengan Alasan :* ${reason ? reason : 'Dia Ga Ngasih Alasan Jir. Lanjut Aja Tag Dia Lagi 💀'}
🕒 *Selama : ${clockString(new Date - afkTime)}*
`.trim())
}
if (global.db.data.users[m.sender].afkTime > -1) {
  let user = global.db.data.users[m.sender]
  m.reply(`*${pushname} Kembali Dari Afk*
⚠️ ${'*Dengan Alasan :* ' + (user.afkReason ? user.afkReason : 'Tidak Ada')}
🕒 *Selama : ${clockString(new Date - user.afkTime)}*
`.trim())
  user.afkTime = -1
  user.afkReason = ''
}

if (m.msg?.contextInfo?.mentionedJid?.some(jid => global.owner.includes(jid.replace(/@s\.whatsapp\.net$/, '')))) {
  if (fromMe) return
  return m.reply(mess.tagOwner);
}

const gameState = {
  angkaAcak: null,
  jumlahTebakan: 0
};


switch (command) {

//--------------------------------------------------------------------[ MENU UTAMA ]--------------------------------------------------------------------//

case 'menu': 
case 'mainmenu': {
if (isBan) return m.reply('⚠️ *Kamu Di Ban Owner*')
LenwyLD()
await sleep(200)
    
let anu = `  ⢀ ⣾⣿⣦  
  ⣼⣿⣿⣿⡆⡤           
⢈⣿⣿⣿⣿⣇⢅⣨⣤⣶⣦⣄      
⣾⣿⣿⣿⣿⣿⣿⣿⣿⣷⣿⠟ ℘earl °•🪷•° 
⠈⠛⠋⠉⣿⣿⣿⡿⠿⠟   · · ─ ·𖥸· ─ · ·     
           ⠛⠿⠟⠃   Floating on grace 𔓘
Butterflies in my mind
╭〢═══════════════╮ 
       .✦ ݁˖ menu bot  .✦ ݁˖  
╰────────୨ৎ───────╯

╭┄꯭───────────────᭝ ᨳଓ ՟
┊°•🪷ᕤ𖹭 aboutmenu
┊°•🪷ᕤ𖹭 antimenu
┊°•🪷ᕤ𖹭 beritamenu
┊°•🪷ᕤ𖹭 downloadmenu
┊°•🪷ᕤ𖹭 funmenu
┊°•🪷ᕤ𖹭 gamemenu
┊°•🪷ᕤ𖹭 groupmenu
┊°•🪷ᕤ𖹭 islamimenu
┊°•🪷ᕤ𖹭 ownermenu
┊°•🪷ᕤ𖹭 randommenu
┊°•🪷ᕤ𖹭 searchmenu
┊°•🪷ᕤ𖹭 toolsmenu
╰┄꯭───────────────᭝ ᨳଓ ՟

𐔌 𖹭 ׁ ₊  Ketik menu di atas untuk menampilkan list
`
m.reply(anu)
}
break

case 'almenu':
case 'allmenu': {
if (isBan) return m.reply('⚠️ *Kamu Di Ban Owner*')
LenwyLD()
await sleep(200)

let gambarMenu = 'https://uploader.merllerm.tech/flashdrop/9898-2054-14jul2026.jpg'

let anu = `⢀ ⣾⣿⣦  
  ⣼⣿⣿⣿⡆⡤           
⢈⣿⣿⣿⣿⣇⢅⣨⣤⣶⣦⣄      
⣾⣿⣿⣿⣿⣿⣿⣿⣿⣷⣿⠟ ℘earl °•🪷•° 
⠈⠛⠋⠉⣿⣿⣿⡿⠿⠟   · · ─ ·𖥸· ─ · ·     
            ⠛⠿⠟⠃   Floating on grace 𔓘
Butterflies in my mind
╭〢═══════════════╮ 
       .✦ ݁˖  all menu   .✦ ݁˖  
╰────────୨ৎ───────╯
╭🌸ᕤ⊹ *name* : ${pushname}
│🌸ᕤ⊹ *time* : ${jamnya}:${menitnya}:${detiknya} WIB
╰🌸ᕤ⊹ *date* : ${tanggalnya} ${namabulannya} ${tahunnya}

╭〢═══════════════╮
˚⊱🪷⊰˚ *about menu*  ʚ··ɞ
╰────────୨ৎ───────╯
╭─╮
│ꕤ 𝗰𝗮𝘁𝗮𝘁𝗮𝗻
│ꕤ 𝗱𝗲𝘃𝗲𝗹𝗼𝗽𝗲𝗿
│ꕤ 𝗼𝘄𝗻𝗲𝗿
│ꕤ 𝗽𝗶𝗻𝗴
│ꕤ 𝘀𝗰𝗿𝗶𝗽𝘁
│ꕤ 𝘀𝗲𝘄𝗮
│ꕤ 𝘀𝘁𝗮𝘁𝘂𝘀𝗴𝗰
╰─╯

╭〢═══════════════╮
˚⊱🪷⊰˚ *owner menu*  ʚ··ɞ
╰────────୨ৎ───────╯
╭─╮
│ꕤ addallprem
│ꕤ addcase
│ꕤ addlimit
│ꕤ addprem
│ꕤ addsewa
│ꕤ autoread
│ꕤ backupbot
│ꕤ ban
│ꕤ banall
│ꕤ bcgc
│ꕤ bcgcvideo
│ꕤ block
│ꕤ cekcase
│ꕤ cekdata
│ꕤ cekexpiredl
│ꕤ cekip
│ꕤ ceksewa
│ꕤ cekidgc
│ꕤ changeppj
│ꕤ changesewa
│ꕤ delban
│ꕤ delbanall
│ꕤ delcase
│ꕤ delgc
│ꕤ delsampah
│ꕤ delsesi
│ꕤ delsewa
│ꕤ editcase
│ꕤ getcase
│ꕤ getuser
│ꕤ join
│ꕤ leave
│ꕤ listban
│ꕤ listprem
│ꕤ listsewa
│ꕤ perpanjangsewa
│ꕤ public
│ꕤ resetlimit
│ꕤ resetwdsewa
│ꕤ resetwdppj
│ꕤ restart
│ꕤ self
│ꕤ setppbot
│ꕤ setppbotpanjang
│ꕤ setppsewa
│ꕤ setwdsewa
│ꕤ setwdppj
│ꕤ unblock
╰─╯

╭〢═══════════════╮
˚⊱🪷⊰˚ *group menu*  ʚ··ɞ
╰────────୨ৎ───────╯
╭─╮
│ note : ketik on/off
││- - - - - - - - - - - - -
│ꕤ add
│ꕤ addlist
│ꕤ afk
│ꕤ antilink1
│ꕤ antilink2
│ꕤ antilinktt
│ꕤ antilinkyt
│ꕤ antisw1
│ꕤ antisw2
│ꕤ antitoxic1
│ꕤ antitoxic2
│ꕤ antiwame
│ꕤ cekjadwal
│ꕤ close
│ꕤ delbutton
│ꕤ dellist
│ꕤ demote
│ꕤ demoteall
│ꕤ editdesk
│ꕤ editsubjek
│ꕤ faketag
│ꕤ hapusjadwal
│ꕤ hidetag
│ꕤ inspect
│ꕤ Inspect2
│ꕤ jeda
│ꕤ kick
│ꕤ left
│ꕤ linkgroup
│ꕤ open
│ꕤ onlyadmin
│ꕤ pay
│ꕤ promote
│ꕤ promoteall
│ꕤ reportbug
│ꕤ resetlinkgc
│ꕤ saran
│ꕤ sendlinkgc
│ꕤ setbuttoncopy
│ꕤ setbuttonurl
│ꕤ setclose
│ꕤ setclosejam
│ꕤ setdesk
│ꕤ setdone
│ꕤ setgrup
│ꕤ setleft
│ꕤ setlist
│ꕤ setopen
│ꕤ setopenjam
│ꕤ setpayment
│ꕤ setppgc
│ꕤ setproses
│ꕤ setsimbol
│ꕤ setwdpay
│ꕤ setwelcome
│ꕤ tagall
│ꕤ updatelist
│ꕤ updatenamelist
│ꕤ welcome
╰─╯

╭〢═══════════════╮
˚⊱🪷⊰˚ *fun menu*  ʚ··ɞ
╰────────୨ৎ───────╯
╭─╮
│ꕤ apakah
│ꕤ bagaimanakah
│ꕤ bisakah
│ꕤ bucin
│ꕤ cantikcek
│ꕤ cekkodam
│ꕤ couple
│ꕤ cwr
│ꕤ dare
│ꕤ faktaunik
│ꕤ fml
│ꕤ gantengcek
│ꕤ jodoh
│ꕤ kapankah
│ꕤ katabijak
│ꕤ katacinta
│ꕤ katagalau
│ꕤ katahacker
│ꕤ katailham
│ꕤ katasenja
│ꕤ katasindiran
│ꕤ meme
│ꕤ motivasi
│ꕤ nickff
│ꕤ pantun
│ꕤ puisi
│ꕤ quotesnya
│ꕤ quotesanime
│ꕤ quotesislamic
│ꕤ quotespubg
│ꕤ rate
│ꕤ readmore
│ꕤ truth
╰─╯

╭〢═══════════════╮
˚⊱🪷⊰˚ *tools menu*  ʚ··ɞ
╰────────୨ৎ───────╯
╭─╮
│ꕤ attp
│ꕤ brat
│ꕤ brat2
│ꕤ bratvid
│ꕤ confes
│ꕤ confes2
│ꕤ createqr
│ꕤ cwr
│ꕤ detectqr
│ꕤ ffstalk
│ꕤ getname
│ꕤ getpic
│ꕤ hd
│ꕤ hd2
│ꕤ hd3
│ꕤ hd4
│ꕤ hdvid
│ꕤ img2Txt
│ꕤ mlstalk
│ꕤ ocr
│ꕤ qc
│ꕤ qckode
│ꕤ readmore
│ꕤ reminder
│ꕤ removebg
│ꕤ smeme
│ꕤ sshp
│ꕤ sstab
│ꕤ ssweb
│ꕤ sticker
│ꕤ text2speech
│ꕤ toanime
│ꕤ tocomic
│ꕤ tocyberpunk
│ꕤ todisney
│ꕤ todonghua
│ꕤ todreamscape
│ꕤ toghibli
│ꕤ toimg
│ꕤ tourl
│ꕤ ttstalk
│ꕤ txt2anime
│ꕤ txt2flux
│ꕤ txt2img
│ꕤ txt2photoleap
│ꕤ txt2waifu
│ꕤ wm
╰─╯

╭〢═══════════════╮
˚⊱🪷⊰˚ *game menu*  ʚ··ɞ
╰────────୨ৎ───────╯
╭─╮
│ꕤ deltc
│ꕤ kuismath Easy
│ꕤ kuismath Extreme
│ꕤ kuismath Hard
│ꕤ kuismath Impossible
│ꕤ kuismath Impossible2
│ꕤ kuismath Medium
│ꕤ kuismath Noob
│ꕤ tebak Gambar
│ꕤ tebak Kalimat
│ꕤ tebak Kata
│ꕤ tebak Lirik
│ꕤ tebak Lontong
│ꕤ ttc
╰─╯

╭〢═══════════════╮
˚⊱🪷⊰˚ *berita menu*  ʚ··ɞ
╰────────୨ৎ───────╯
╭─╮
│ꕤ dailyNews
│ꕤ detikNews
│ꕤ inews
│ꕤ kompasNews
│ꕤ kontan
╰─╯

╭〢═══════════════╮
˚⊱🪷⊰˚ *random menu*  ʚ··ɞ
╰────────୨ৎ───────╯
╭─╮
│ꕤ confes
│ꕤ couple
│ꕤ faktaunik
│ꕤ getpic
│ꕤ meme
│ꕤ menfes
│ꕤ nickff
│ꕤ pantun
│ꕤ puisi
│ꕤ qc
│ꕤ qckode
│ꕤ reminder
│ꕤ setname
│ꕤ smeme
│ꕤ sticker
╰─╯

╭〢═══════════════╮
˚⊱🪷⊰˚ *download menu*  ʚ··ɞ
╰────────୨ৎ───────╯
╭─╮
│ꕤ fb
│ꕤ fbaudio
│ꕤ fbfoto
│ꕤ fbvideo
│ꕤ Ig
│ꕤ mediafire (linknya)
│ꕤ play (linknya)
│ꕤ spotify (text)
│ꕤ spotifydl (Linknya)
│ꕤ tt
│ꕤ ttaudio
│ꕤ twitter
│ꕤ twitterfoto
│ꕤ twittervideo
│ꕤ ytmp3 (linknya)
│ꕤ ytmp4 (linknya)
╰─╯

╭〢═══════════════╮
˚⊱🪷⊰˚ *islami menu*  ʚ··ɞ
╰────────୨ৎ───────╯
╭─╮
│ꕤ asmaul Husna
│ꕤ ayat Kursi
│ꕤ doa
╰─╯

╭〢═══════════════╮
˚⊱🪷⊰˚ *search menu*  ʚ··ɞ
╰────────୨ৎ───────╯
╭─╮
│ꕤ ai
│ꕤ animedownload
│ꕤ animeinfo
│ꕤ animesearch
│ꕤ apksearch
│ꕤ chord
│ꕤ cuaca
│ꕤ google
│ꕤ imdb
│ꕤ jarack
│ꕤ jeanne
│ꕤ kodebahasa
│ꕤ lirik
│ꕤ mcserver
│ꕤ search
│ꕤ translate
╰─╯

╭〢═══════════════╮
˚⊱🪷⊰˚ *anti menu*  ʚ··ɞ
╰────────୨ৎ───────╯
╭─╮
│ꕤ antilink1
│ꕤ antilink2
│ꕤ antilinktt
│ꕤ antilinkyt
│ꕤ antisw1
│ꕤ antisw2
│ꕤ antitoxic1
│ꕤ antitoxic2
│ꕤ antiwame
╰─╯
`
await lenwy.sendMessage(m.chat, { image: { url: gambarMenu }, caption: anu }, { quoted: m })

}
break

case 'aboutmenu': {
if (isBan) return m.reply('⚠️ *Kamu Di Ban Owner*')
LenwyLD()
await sleep(200)
m.reply(`╭〢═══════════════╮
˚⊱🪷⊰˚ *about menu*  ʚ··ɞ
╰────────୨ৎ───────╯
╭─╮
│ꕤ 𝗰𝗮𝘁𝗮𝘁𝗮𝗻
│ꕤ 𝗱𝗲𝘃𝗲𝗹𝗼𝗽𝗲𝗿
│ꕤ 𝗼𝘄𝗻𝗲𝗿
│ꕤ 𝗽𝗶𝗻𝗴
│ꕤ 𝘀𝗰𝗿𝗶𝗽𝘁
│ꕤ 𝘀𝗲𝘄𝗮
│ꕤ 𝘀𝘁𝗮𝘁𝘂𝘀𝗴𝗰
╰─╯

`)
}
break

case 'ownermenu':
case 'menuowner': {
  if (isBan) return m.reply('⚠️ *Kamu Di Ban Owner*')
  LenwyLD()
  await sleep(200)
  m.reply(`╭〢═══════════════╮
˚⊱🪷⊰˚ *owner menu*  ʚ··ɞ
╰────────୨ৎ───────╯
╭─╮
│ꕤ addallprem
│ꕤ addcase
│ꕤ addlimit
│ꕤ addprem
│ꕤ addsewa
│ꕤ autoread
│ꕤ backupbot
│ꕤ ban
│ꕤ banall
│ꕤ bcgc
│ꕤ bcgcvideo
│ꕤ block
│ꕤ cekcase
│ꕤ cekdata
│ꕤ cekexpiredl
│ꕤ cekip
│ꕤ ceksewa
│ꕤ cekidgc
│ꕤ changeppj
│ꕤ changesewa
│ꕤ delban
│ꕤ delbanall
│ꕤ delcase
│ꕤ delgc
│ꕤ delsampah
│ꕤ delsesi
│ꕤ delsewa
│ꕤ editcase
│ꕤ getcase
│ꕤ getuser
│ꕤ join
│ꕤ leave
│ꕤ listban
│ꕤ listprem
│ꕤ listsewa
│ꕤ perpanjangsewa
│ꕤ public
│ꕤ resetlimit
│ꕤ resetwdsewa
│ꕤ resetwdppj
│ꕤ restart
│ꕤ self
│ꕤ setppbot
│ꕤ setppbotpanjang
│ꕤ setppsewa
│ꕤ setwdsewa
│ꕤ setwdppj
│ꕤ unblock
╰─╯
`)
}
break

case 'groupmenu':
case 'grupmenu': {
if (isBan) return m.reply('⚠️ *Kamu Di Ban Owner*')
LenwyLD()
await sleep(200)
m.reply(`╭〢═══════════════╮
˚⊱🪷⊰˚ *group menu*  ʚ··ɞ
╰────────୨ৎ───────╯
╭─╮
│ note : ketik on/off
││- - - - - - - - - - - - -
│ꕤ add
│ꕤ addlist
│ꕤ afk
│ꕤ antilink1
│ꕤ antilink2
│ꕤ antilinktt
│ꕤ antilinkyt
│ꕤ antisw1
│ꕤ antisw2
│ꕤ antitoxic1
│ꕤ antitoxic2
│ꕤ antiwame
│ꕤ cekjadwal
│ꕤ close
│ꕤ delbutton
│ꕤ dellist
│ꕤ demote
│ꕤ demoteall
│ꕤ editdesk
│ꕤ editsubjek
│ꕤ faketag
│ꕤ hapusjadwal
│ꕤ hidetag
│ꕤ inspect
│ꕤ Inspect2
│ꕤ jeda
│ꕤ kick
│ꕤ left
│ꕤ linkgroup
│ꕤ open
│ꕤ onlyadmin
│ꕤ pay
│ꕤ promote
│ꕤ promoteall
│ꕤ reportbug
│ꕤ resetlinkgc
│ꕤ saran
│ꕤ sendlinkgc
│ꕤ setbuttoncopy
│ꕤ setbuttonurl
│ꕤ setclose
│ꕤ setclosejam
│ꕤ setdesk
│ꕤ setdone
│ꕤ setgrup
│ꕤ setleft
│ꕤ setlist
│ꕤ setopen
│ꕤ setopenjam
│ꕤ setpayment
│ꕤ setppgc
│ꕤ setproses
│ꕤ setsimbol
│ꕤ setwdpay
│ꕤ setwelcome
│ꕤ tagall
│ꕤ updatelist
│ꕤ updatenamelist
│ꕤ welcome
╰─╯
`)
}
break

case 'funmenu': {
if (isBan) return m.reply('⚠️ *Kamu Di Ban Owner*')
LenwyLD()
await sleep(200)
m.reply(`╭〢═══════════════╮
˚⊱🪷⊰˚ *fun menu*  ʚ··ɞ
╰────────୨ৎ───────╯
╭─╮
│ꕤ apakah
│ꕤ bagaimanakah
│ꕤ bisakah
│ꕤ bucin
│ꕤ cantikcek
│ꕤ cekkodam
│ꕤ couple
│ꕤ cwr
│ꕤ dare
│ꕤ faktaunik
│ꕤ fml
│ꕤ gantengcek
│ꕤ jodoh
│ꕤ kapankah
│ꕤ katabijak
│ꕤ katacinta
│ꕤ katagalau
│ꕤ katahacker
│ꕤ katailham
│ꕤ katasenja
│ꕤ katasindiran
│ꕤ meme
│ꕤ motivasi
│ꕤ nickff
│ꕤ pantun
│ꕤ puisi
│ꕤ quotesnya
│ꕤ quotesanime
│ꕤ quotesislamic
│ꕤ quotespubg
│ꕤ rate
│ꕤ readmore
│ꕤ truth
╰─╯
`)
}
break

case 'toolsmenu':
case 'toolmenu': {
if (isBan) return m.reply('⚠️ *Kamu Di Ban Owner*')
LenwyLD()
await sleep(200)
m.reply(` ╭〢═══════════════╮
˚⊱🪷⊰˚ *tools menu*  ʚ··ɞ
╰────────୨ৎ───────╯
╭─╮
│ꕤ attp
│ꕤ brat
│ꕤ brat2
│ꕤ bratvid
│ꕤ confes
│ꕤ confes2
│ꕤ createqr
│ꕤ cwr
│ꕤ detectqr
│ꕤ ffstalk
│ꕤ getname
│ꕤ getpic
│ꕤ hd
│ꕤ hd2
│ꕤ hd3
│ꕤ hd4
│ꕤ hdvid
│ꕤ img2Txt
│ꕤ mlstalk
│ꕤ ocr
│ꕤ qc
│ꕤ qckode
│ꕤ readmore
│ꕤ reminder
│ꕤ removebg
│ꕤ smeme
│ꕤ sshp
│ꕤ sstab
│ꕤ ssweb
│ꕤ sticker
│ꕤ text2speech
│ꕤ toanime
│ꕤ tocomic
│ꕤ tocyberpunk
│ꕤ todisney
│ꕤ todonghua
│ꕤ todreamscape
│ꕤ toghibli
│ꕤ toimg
│ꕤ tourl
│ꕤ ttstalk
│ꕤ txt2anime
│ꕤ txt2flux
│ꕤ txt2img
│ꕤ txt2photoleap
│ꕤ txt2waifu
│ꕤ wm
╰─╯
`)
}
break

case 'gamemenu': {
if (isBan) return m.reply('⚠️ *Kamu Di Ban Owner*')
LenwyLD()
await sleep(200)
m.reply(`╭〢═══════════════╮
˚⊱🪷⊰˚ *game menu*  ʚ··ɞ
╰────────୨ৎ───────╯
╭─╮
│ꕤ deltc
│ꕤ kuismath Easy
│ꕤ kuismath Extreme
│ꕤ kuismath Hard
│ꕤ kuismath Impossible
│ꕤ kuismath Impossible2
│ꕤ kuismath Medium
│ꕤ kuismath Noob
│ꕤ tebak Gambar
│ꕤ tebak Kalimat
│ꕤ tebak Kata
│ꕤ tebak Lirik
│ꕤ tebak Lontong
│ꕤ ttc
╰─╯
`)
}
break

case 'beritamenu': {
if (isBan) return m.reply('⚠️ *Kamu Di Ban Owner*')
LenwyLD()
await sleep(200)
m.reply(`╭〢═══════════════╮
˚⊱🪷⊰˚ *berita menu*  ʚ··ɞ
╰────────୨ৎ───────╯
╭─╮
│ꕤ dailyNews
│ꕤ detikNews
│ꕤ inews
│ꕤ kompasNews
│ꕤ kontan
╰─╯
`)
}
break

case 'randommenu':
case 'randmenu':{
if (isBan) return m.reply('⚠️ *Kamu Di Ban Owner*')
const y11 = `╭〢═══════════════╮
˚⊱🪷⊰˚ *random menu*  ʚ··ɞ
╰────────୨ৎ───────╯
╭─╮
│ꕤ confes
│ꕤ couple
│ꕤ faktaunik
│ꕤ getpic
│ꕤ meme
│ꕤ menfes
│ꕤ nickff
│ꕤ pantun
│ꕤ puisi
│ꕤ qc
│ꕤ qckode
│ꕤ reminder
│ꕤ setname
│ꕤ smeme
│ꕤ sticker
╰─╯
`
m.reply(y11)
}
break

case 'downmenu':
case 'downloadmenu': {
if (isBan) return m.reply('⚠️ *Kamu Di Ban Owner*')
LenwyLD()
await sleep(200)
m.reply(`╭〢═══════════════╮
˚⊱🪷⊰˚ *download menu*  ʚ··ɞ
╰────────୨ৎ───────╯
╭─╮
│ꕤ fb
│ꕤ fbaudio
│ꕤ fbfoto
│ꕤ fbvideo
│ꕤ Ig
│ꕤ mediafire (linknya)
│ꕤ play (linknya)
│ꕤ spotify (text)
│ꕤ spotifydl (Linknya)
│ꕤ tt
│ꕤ ttaudio
│ꕤ twitter
│ꕤ twitterfoto
│ꕤ twittervideo
│ꕤ ytmp3 (linknya)
│ꕤ ytmp4 (linknya)
╰─╯
`)
}
break

case 'islamimenu': {
if (isBan) return m.reply('⚠️ *Kamu Di Ban Owner*')
LenwyLD()
await sleep(200)
m.reply(` ╭〢═══════════════╮
˚⊱🪷⊰˚ *islami menu*  ʚ··ɞ
╰────────୨ৎ───────╯
╭─╮
│ꕤ asmaul Husna
│ꕤ ayat Kursi
│ꕤ doa
╰─╯

`)
}
break

case 'searchmenu': {
if (isBan) return m.reply('⚠️ *Kamu Di Ban Owner*')
LenwyLD()
await sleep(200)
m.reply(`╭〢═══════════════╮
˚⊱🪷⊰˚ *search menu*  ʚ··ɞ
╰────────୨ৎ───────╯
╭─╮
│ꕤ ai
│ꕤ animedownload
│ꕤ animeinfo
│ꕤ animesearch
│ꕤ apksearch
│ꕤ chord
│ꕤ cuaca
│ꕤ google
│ꕤ imdb
│ꕤ jarack
│ꕤ jeanne
│ꕤ kodebahasa
│ꕤ lirik
│ꕤ mcserver
│ꕤ search
│ꕤ translate
╰─╯
`)
}
break

case 'antimenu': {
if (isBan) return m.reply('⚠️ *Kamu Di Ban Owner*')
LenwyLD()
await sleep(200)
m.reply(`╭〢═══════════════╮
˚⊱🪷⊰˚ *anti menu*  ʚ··ɞ
╰────────୨ৎ───────╯
╭─╮
│ꕤ antilink1
│ꕤ antilink2
│ꕤ antilinktt
│ꕤ antilinkyt
│ꕤ antisw1
│ꕤ antisw2
│ꕤ antitoxic1
│ꕤ antitoxic2
│ꕤ antiwame
╰─╯
`)
}
break

case 'help': {
m.reply(`*panduan menggunakan fitur bot*

🌸1 tutor setpayment
🌸2 tutor setlist
🌸3 tutor setopen/close
🌸4 tutor setwdsewa/ppj
🌸5 tutor setwdpay/delbutton

*untuk menampilkan panduan ketik sesuai nomor, contoh : tutor1* 
`)
}
break

case 'list':
case 'listmenu': {
  if (args[0] === 'edit') {
    if (!isAdmins) return m.reply(mess.admin)
    const teks = args.slice(1).join(' ').trim()
    global.datagc[m.chat].text_list = teks;
    m.reply(teks ? `Teks ${command} berhasil diubah` : `Teks ${command} berhasil direset ke bawaan`)
    fs.writeFileSync('./storage/databaseGroup.json', JSON.stringify(global.datagc, null, 2));
    return
  }

  if (text && args[0] !== 'edit') {
    return m.reply(`╭ ────╮🌸 catatan setting bot’ ! 
╰ ── ❥ ───────╯

⸼ ꤥ‌ ּ ꞌꞋ #date : format tanggal
⸼ ꤥ‌ ּ ꞌꞋ #time : format jam
⸼ ꤥ‌ ּ ꞌꞋ #group : tag group
⸼ ꤥ‌ ּ ꞌꞋ #tag : tag member
⸼ ꤥ‌ ּ ꞌꞋ #catatan : pesan done/proses
⸼ ꤥ‌ ּ ꞌꞋ #simbol : menampilkan list

        jeanne’ 𝖻! › 𖹭 beauty
             flowers ╯🌸 ╰ 𝖼𝗁𝖾α𝗉

*Cara ubah template list:*
Ketik: *${prefix + command} edit <teks template>*
Ketik: *${prefix}setsimbol <simbol>* untuk mengubah ikon list`)
  }

  if (db_respon_list.length === 0) return m.reply(`*Belum Ada List Yang Ditambahkan*`);
  if (!isAlreadyResponListGroup(m.chat, db_respon_list)) return m.reply(`*Belum Ada List Yang Terdaftar Di Grup Ini*`);

  const groupID = m.chat;
  const usertag = `@${m.sender.split("@")[0]}`;

  if (!global.datagc[groupID]) {
    global.datagc[groupID] = {
      text_list: '',
      text_list_simbol: ''
    };
    fs.writeFileSync('./storage/databaseGroup.json', JSON.stringify(global.datagc, null, 2));
  }

  const textListTemplate = global.datagc[groupID].text_list || `𝘄𝗲𝗹𝗰𝗼𝗺𝗲. 
 ꕤ 게다가, 당신은 큰 거래를 ⸼“𝓟𝗲𝗿𝘀” 𓈈 ˳ ֹ 𖣁 #group
 
╭┄┄─━ ᡣ𐭩⭒❅⭒ ⸻𝆬 
┃..𐙚 ۫۫ 𔓘 𝘂𝘀𝗲𝗿 : #tag
┃..𐙚 ۫۫ 𔓘 𝘁𝗶𝗺𝗲 : #time
┃..𐙚 ۫۫ 𔓘 𝗱𝗮𝘁𝗲 : #date 
└──┄┄┄━━━━━━━━

 ּ ʾʿ۪𑁯 ִ݃ 입하세 𓊆!𓊇 𓈈 .. 𓏴 ׁ (𝓟𝗋𝖾𝗍𝗒𝗒) #group 𝗆𝖾𝗇𝗒𝖾𝖽𝗂𝖺𝗄𝖺𝗇 𝖻𝖾𝗋𝖻𝖺𝗀𝖺𝗂 𝗂𝗍𝖾𝗆 𝗆𝖾𝗇𝖺𝗋𝗂𝗄 𝖽𝗂 𝗌𝗂𝗇𝗂... 𝗌𝗂𝗅𝖺𝗄𝖺𝗇 𝗅𝗂𝗁𝖺𝗍 𝖼𝖺𝗍𝖺𝗅𝗈𝗀 𝗒𝖺𝗇𝗀 𝗄𝖺𝗆𝗎 𝗂𝗇𝗀𝗂𝗇𝗄𝖺𝗇 ──

╭╾─ 𓈒 ׄ 𓊆 𝗖𝗮𝘁𝗮𝗹𝗼𝗴𝘂𝗲 🌸 .. 𓏴 ׁ ⨳ 
│#simbol
╰ ۪ 𖣂 ׂ ─────────────╍`

  const simbol = global.datagc[groupID].text_list_simbol || '┃⠟ ֺ˚.ⓘ';

  const replaceTags = (text) => {
    return text
      .replaceAll('#tag', usertag)
      .replaceAll('#group', groupName)
      .replaceAll('#time', `${jamnya}:${menitnya}:${detiknya} WIB`)
      .replaceAll('#date', `${harinya}, ${tanggalnya} ${namabulannya} ${tahunnya}`);
  };

  try {
    const sortedList = db_respon_list.filter(i => i.id === groupID).sort((a, b) => a.key.localeCompare(b.key));
    if (sortedList.length === 0) return m.reply(`*Tidak ada list yang tersedia di grup ini*`);
    
    const listBody = sortedList.map(i => `\n${simbol} *${i.key.toUpperCase()}*`).join('');
    const finalText = replaceTags(textListTemplate).replaceAll('#simbol', listBody);
 
    await lenwy.sendMessage(m.chat, { text: finalText, mentions: [m.sender] }, { quoted: m });
    const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));
    await sleep(200);

    let buttons = sortedList.map(i => ({
        title: i.key,
        id: i.key
    }));

    let buttonParamsJson = {
        title: "📝 List",
        sections: [
            {
                title: "✨ Daftar List",
                rows: buttons
            }
        ]
    };
    let msgButton = generateWAMessageFromContent(m.chat, {
        viewOnceMessage: {
            message: {
                messageContextInfo: {
                    deviceListMetadata: {},
                    deviceListMetadataVersion: 2,
                },
                interactiveMessage: proto.Message.InteractiveMessage.create({
                    body: proto.Message.InteractiveMessage.Body.create({
                        text: "🌸 _Silahkan klik tombol di bawah ini lalu pilih *list* yang tersedia_"
                    }),
                    footer: proto.Message.InteractiveMessage.Footer.create({ text: '' }),
                    header: proto.Message.InteractiveMessage.Header.create({ title: '' }),
                    nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                        buttons: [{
                            name: "single_select",
                            buttonParamsJson: JSON.stringify(buttonParamsJson)
                        }]
                    }),
                }),
            },
        },
    }, { quoted: m });

    await lenwy.relayMessage(m.chat, msgButton.message, {
        additionalNodes: [
            {
                tag: "biz",
                attrs: {},
                content: [
                    {
                        tag: "interactive",
                        attrs: { type: "native_flow", v: "1" },
                        content: [{ tag: "native_flow", attrs: { name: "quick_reply" } }]
                    }
                ]
            }
        ]
    });

  } catch (err) {
    console.error(err);
    m.reply(`❌ *Terjadi Kesalahan Saat Menampilkan List*`);
  }
}
break;

//--------------------------------------------------------------------[ ABOUT MENU ]--------------------------------------------------------------------//

case 'sc':
case 'script': {
if (text) return
let buy = `*Script?*
🍒 *No Enc, Pairing Code*
💲 *Buy? :* wa.me/${global.developer}
🤖 *Sewa? :* wa.me/${global.owner}`
lenwy.relayMessage(m.chat,  {
    requestPaymentMessage: {
      currencyCodeIso4217: 'IDR',
      amount1000: 99999999,
      requestFrom: m.sender,
      noteMessage: {
      extendedTextMessage: {
      text: buy,
      contextInfo: {
      externalAdReply: {
      showAdAttribution: false
      }}}}}}, {})
}
break

case 'owner':
case 'creator': 
case 'developer': {
  if (text) return
  await lenwy.sendContact(m.chat, author.map( i => i.split("@")[0]), m.quoted ? m.quoted.fakeObj : m)
}
break

case 'ping':
case 'botstatus':
case 'statusbot': {
    const { execSync } = require('child_process');
    const used = process.memoryUsage();
    const cpus = os.cpus().map(cpu => {
        cpu.total = Object.keys(cpu.times).reduce((last, type) => last + cpu.times[type], 0);
        return cpu;
    });
    const cpu = cpus.reduce((last, cpu, _, { length }) => {
        last.total += cpu.total;
        last.speed += cpu.speed / length;
        last.times.user += cpu.times.user;
        last.times.nice += cpu.times.nice;
        last.times.sys += cpu.times.sys;
        last.times.idle += cpu.times.idle;
        last.times.irq += cpu.times.irq;
        return last;
    }, { speed: 0, total: 0, times: { user: 0, nice: 0, sys: 0, idle: 0, irq: 0 } });

    let timestamp = speed();
    let latensi = speed() - timestamp;
    let neww = performance.now();
    let oldd = performance.now();

    let serverLocation = 'Tidak diketahui';
    let ispName = 'Tidak diketahui';
    let timeZone = 'Tidak diketahui';
    try {
        const res = await fetch('http://ip-api.com/json/');
        const data = await res.json();
        serverLocation = `${data.city}, ${data.regionName}, ${data.country}`;
        ispName = data.isp;
        timeZone = data.timezone;
    } catch (e) {
        serverLocation = 'Gagal mengambil data lokasi';
        ispName = 'Gagal mengambil ISP';
    }

    let diskSpace = 'Tidak diketahui';
    try {
        if (os.platform() === 'win32') {
            diskSpace = 'Gagal membaca (OS Windows)';
        } else {
            diskSpace = execSync("df -h / | awk 'NR==2 {print $3\" Terpakai dari \"$2\" (\"$5\")\"}'").toString().trim();
        }
    } catch (err) {
        diskSpace = 'Error membaca disk';
    }

    const loadAvg = os.loadavg().map(v => v.toFixed(2)).join(' | ');

    let respon = `
⏱️ *Kecepatan Respon :* ${latensi.toFixed(4)} Detik
🚀 *Speed :* ${oldd - neww} Milidetik

🤖 *INFO BOT*
 *⨠ Runtime Bot :* ${runtime(process.uptime())}
 *⨠ Process ID :* ${process.pid}
 *⨠ Storage / Disk :* ${diskSpace}
 *⨠ Total RAM :* ${formatp(os.totalmem())}
 *⨠ RAM Terpakai Bot :* ${formatp(used.rss)}
 *⨠ RAM Sisa Sistem :* ${formatp(os.freemem())}

💻 *INFO VPS & SERVER*
 *⨠ Hostname :* ${os.hostname()}
 *⨠ Node.js :* ${process.version}
 *⨠ Platform :* ${os.platform()} ${os.arch()}
 *⨠ Uptime Server :* ${runtime(os.uptime())}
 *⨠ Provider/ISP :* ${ispName}
 *⨠ Region VPS :* ${serverLocation}
 *⨠ Timezone :* ${timeZone}

📈 *INFO CPU & BEBAN SISTEM*
 *⨠ Load Average :* ${loadAvg} (1m | 5m | 15m)
${cpus[0] ? ` *⨠ Model :* ${cpus[0].model.trim()} (${cpu.speed} MHZ)
${Object.keys(cpu.times).map(type => ` *⨠ ${(type + '*').padEnd(6)}:* ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}
 *⨠ Core(s) :* ${cpus.length} Core` : ''}
`.trim();

    m.reply(respon);
}
break

case 'catatan': {
if (text) return
let catat =`╭ ────╮🌸 catatan setting bot’ ! 
╰ ── ❥ ───────╯

⸼ ꤥ‌ ּ ꞌꞋ #date : format tanggal
⸼ ꤥ‌ ּ ꞌꞋ #time : format jam
⸼ ꤥ‌ ּ ꞌꞋ #group : tag group
⸼ ꤥ‌ ּ ꞌꞋ #tag : tag member
⸼ ꤥ‌ ּ ꞌꞋ #catatan : pesan done/proses
⸼ ꤥ‌ ּ ꞌꞋ #simbol : menampilkan list

        jeanne’ 𝖻! › 𖹭 beauty
             flowers ╯🌸 ╰ 𝖼𝗁𝖾α𝗉`

m.reply(catat)
}
break

case 'sewa': {
 async function createImage(url) {
 const { imageMessage } = await generateWAMessageContent({
 image: { url }
 }, {
 upload: lenwy.waUploadToServer
 });
 return imageMessage;
 }
 
 let tekssewa = global.text_sewa ? global.text_sewa : `             ⓘ  🎡 𝐬𝐞𝐰𝐚 — 𝐛𝐨𝐭 𝐬𝐭𝐨𝐫𝐞 𝐣𝐞́𝐚𝐧𝐧𝐞 𝐕𝟒 .. 𐙚 ˚

𓂂 ་  ⓘ  ⋆. 𐙚 .˚⎯  product details below ...⊹ ࣪ ˖

ⓘ ׁ ۪ ᳸ 🍒 1 bulan : 5k
ⓘ ׁ ۪ ᳸ 🍒 2 bulan : 10k
ⓘ ׁ ۪ ᳸ 🍒 3 bulan : 15k
ⓘ ׁ ۪ ᳸ 🍒 4 bulan : 18k
ⓘ ׁ ۪ ᳸ 🍒 5 bulan : 23k
|
╰┈➤ ⎙ note :
> dilarang spam bot, chat/call
> bot akan join dan out otomatis
₊ 사랑 "Life is too short not to
enjoy every second,
especially with our products!"⊹ ࣪ ˖`
  let teksppj = global.text_ppj ? global.text_ppj : `ⓘ  🎡 𝐬𝐞𝐰𝐚 — 𝐛𝐨𝐭 𝐟𝐮𝐧 𝐣𝐞́𝐚𝐧𝐧𝐞 𝐕𝟒 .. 𐙚 ˚

𓂂 ་  ⓘ  ⋆. 𐙚 .˚⎯  product details below ...⊹ ࣪ ˖

ⓘ ׁ ۪ ᳸ 🍒 1 bulan : 7k
ⓘ ׁ ۪ ᳸ 🍒 2 bulan : 14k
ⓘ ׁ ۪ ᳸ 🍒 3 bulan : 21k
ⓘ ׁ ۪ ᳸ 🍒 4 bulan : 26k
ⓘ ׁ ۪ ᳸ 🍒 5 bulan : 30k
|
╰┈➤ ⎙ note :
> dilarang spam bot, chat/call
> bot akan join dan out otomatis
₊ 사랑 
    Life is too short not to
enjoy every second,
especially with our products!⊹ ࣪ ˖`
  
 let imageUrl
 if (fs.existsSync('./storage/data/image/fotosewa.jpg')) {
 imageUrl = await createImage('./storage/data/image/fotosewa.jpg');
 } else if (fs.existsSync('./storage/data/image/fotosewa.png')) {
 imageUrl = await createImage('./storage/data/image/fotosewa.png');
 } else if (fs.existsSync('./storage/data/image/fotosewa.webp')) {
 imageUrl = await createImage('./storage/data/image/fotosewa.webp');
 } else {
 return m.reply(`Foto tidak tersedia, kamu harus ${prefix}setppsewa terlebih dahulu`)
 }

 const push = [{
 body: proto.Message.InteractiveMessage.Body.fromObject({
 text: tekssewa
 }),
 footer: proto.Message.InteractiveMessage.Footer.fromObject({
 text: `Klik Admin Dibawah Ya`
 }),
 header: proto.Message.InteractiveMessage.Header.fromObject({
 hasMediaAttachment: true,
 imageMessage: imageUrl
 }),
 nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
 buttons: [
 {
 name: "cta_url",
 buttonParamsJson: `{"display_text":"Admin - ${global.ownername}","url":"https://api.whatsapp.com/send/?phone=${global.owner}&text=Haii+${global.ownername}%0ANak+Nyewa&type=phone_number&app_absent=0"}`
 },
 {
 name: "cta_url",
 buttonParamsJson: `{"display_text":"Developer - ${global.developername}","url":"https://api.whatsapp.com/send/?phone=${global.developer}&text=%0AHaii+${global.developername}%0AAda+Yang+Bug+Nih&type=phone_number&app_absent=0"}`
 }
 ]
 })
 }, {
 body: proto.Message.InteractiveMessage.Body.fromObject({
 text: teksppj
 }),
 footer: proto.Message.InteractiveMessage.Footer.fromObject({
 text: `Klik Admin Dibawah Ya`
 }),
 header: proto.Message.InteractiveMessage.Header.fromObject({
 hasMediaAttachment: true,
 imageMessage: imageUrl
 }),
 nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
 buttons: [
 {
 name: "cta_url",
 buttonParamsJson: `{"display_text":"Admin - ${global.ownername}","url":"https://api.whatsapp.com/send/?phone=${global.owner}&text=Haii+${global.ownername}%0ANak+Perpanjang&type=phone_number&app_absent=0"}`
 },
 {
 name: "cta_url",
 buttonParamsJson: `{"display_text":"Developer - ${global.developername}","url":"https://api.whatsapp.com/send/?phone=${global.developer}&text=%0AHaii+${global.developername}%0AAda+Yang+Bug+Nih&type=phone_number&app_absent=0"}`
 }
 ]
 })
 }];

 const bot = generateWAMessageFromContent(m.chat, {
 viewOnceMessage: {
 message: {
 interactiveMessage: proto.Message.InteractiveMessage.fromObject({
 body: proto.Message.InteractiveMessage.Body.create({
 text: 'Berikut Daftarnya',
 }),
 footer: proto.Message.InteractiveMessage.Footer.create({
 text: `> ${botname}`,
 }),
 header: proto.Message.InteractiveMessage.Header.create({
 hasMediaAttachment: false
 }),
 carouselMessage: proto.Message.InteractiveMessage.CarouselMessage.fromObject({
 cards: push
 })
 })
 }
 }
 }, { quoted: m });

 await lenwy.relayMessage(m.chat, bot.message, { messageId: bot.key.id });
}
break

//--------------------------------------------------------------------[ OWNER MENU ]--------------------------------------------------------------------//

case 'cekidgc': {
if (!isCreator) return m.reply(mess.owner)
LenwyLD()
await sleep(200)
let getGroups = await lenwy.groupFetchAllParticipating()
let groups = Object.entries(getGroups).slice(0).map((entry) => entry[1])
let anu = groups.map((v) => v.id)
let teks = `*List Grup Yang Dimasuki ${botname}*\n🎁 *Total Group : ${anu.length} Group*\n\n`

for (let x of anu) {
  await sleep(5000)
  let metadata2 = await lenwy.groupMetadata(x)
  try {
    let response2 = await lenwy.groupInviteCode(metadata2.id)
    linkgc = `https://chat.whatsapp.com/${response2}`
  } catch {
    linkgc = '-'
  }
  teks += `*Nama Group : ${metadata2.subject}*
🌸 *ID group : ${metadata2.id}*
👤 *total member : ${metadata2.participants.length}*
🌐 *link group : ${linkgc}*
────────────────────────\n\n`
  }
  m.reply(teks + `*Cara Penggunaan : Pushkontak ID Group|Teks*\n🎁 *Contoh : Pushkontak ID Group|Save ${botname}*`)
}
break

case 'addallprem': {
  if (!isCreator) return m.reply(mess.owner)
  if (!m.isGroup) return m.reply(`*Perintah Ini Hanya Dapat Digunakan Di Dalam Grup.*`)

  let groupMetadata;
  try {
      groupMetadata = await lenwy.groupMetadata(from)
  } catch (e) {
      console.error('Error fetching group metadata:', e)
      return m.reply('*Gagal Mengambil Metadata Grup.*')
  }

  let participants;
  try {
      participants = groupMetadata.participants;
  } catch (e) {
      console.error('Error fetching group participants:', e)
      return m.reply('*Gagal Mengambil Daftar Peserta Grup.*')
  }

  if (!participants || participants.length === 0) return m.reply('Tidak ada peserta dalam grup.')

  let owner;
  try {
      owner = JSON.parse(fs.readFileSync('./premium.json', 'utf8'))
  } catch (err) {
      console.error('Error reading premium.json:', err)
      return m.reply('*Gagal Memuat Daftar Premium.*')
  }

  let addedNumbers = []
  let existingNumbers = []

  for (let participant of participants) {
      let number = participant.id.replace('@s.whatsapp.net', '').replace(/[^0-9]/g, '')
      if (number.length > 0 && !owner.includes(number)) {
          owner.push(number)
          addedNumbers.push(number)
      } else if (owner.includes(number)) {
          existingNumbers.push(number)
      }
  }

  try {
      fs.writeFileSync('./premium.json', JSON.stringify(owner, null, 2))
  } catch (err) {
      console.error('Error writing premium.json:', err)
      return m.reply('*Gagal Menyimpan Daftar Premium.*')
  }

  if (addedNumbers.length > 0) {
      m.reply(`*Nomor Berikut Telah Ditambahkan Ke Daftar Premium:*\n\n${addedNumbers.join('\n')}`)
  }
  if (existingNumbers.length > 0) {
      m.reply(`*Nomor Berikut Sudah Ada Di Daftar Premium:*\n\n${existingNumbers.join('\n')}`)
  }
}
break

case 'delallprem': {
    if (!isCreator) return m.reply(mess.owner)
    if (!m.isGroup) return m.reply(`Perintah ini hanya dapat digunakan di dalam grup.`)

    let groupMetadata;
    try {
        groupMetadata = await lenwy.groupMetadata(from)
    } catch (e) {
        console.error('Error fetching group metadata:', e)
      return m.reply('*Gagal Mengambil Metadata Grup.*')
    }

    let participants;
    try {
        participants = groupMetadata.participants;
    } catch (e) {
        console.error('Error fetching group participants:', e)
      return m.reply('*Gagal Mengambil Daftar Peserta Grup.*')
    }

    if (!participants || participants.length === 0) return m.reply('Tidak ada peserta dalam grup.')

    let owner;
    try {
        owner = JSON.parse(fs.readFileSync('./premium.json', 'utf8'))
    } catch (err) {
        console.error('Error reading premium.json:', err)
      return m.reply('*Gagal Memuat Daftar Premium.*')
    }

    let removedNumbers = []
    let notFoundNumbers = []

    for (let participant of participants) {
        let number = participant.id.replace('@s.whatsapp.net', '').replace(/[^0-9]/g, '')
        if (number.length > 0) {
            let index = owner.indexOf(number)
            if (index !== -1) {
                owner.splice(index, 1)
                removedNumbers.push(number)
            } else {
                notFoundNumbers.push(number)
            }
        }
    }

    try {
        fs.writeFileSync('./premium.json', JSON.stringify(owner, null, 2))
    } catch (err) {
        console.error('Error writing premium.json:', err)
      return m.reply('*Gagal Menyimpan Daftar Premium.*')
    }

    if (removedNumbers.length > 0) {
        m.reply(`*Nomor Berikut Telah Dihapus Dari Daftar Premium.*\n\n${removedNumbers.join('\n')}`)
    }
    if (notFoundNumbers.length > 0) {
        m.reply(`*Nomor Berikut Tidak Ditemukan Di Daftar Premium:*\n\n${notFoundNumbers.join('\n')}`)
    }
}
break

case 'addprem': {
  if (!isCreator) return m.reply(mess.owner)
  if (!args[0]) return m.reply('*Mana Nomornya?*')

  let numbers = text
    .split('|')[0]
    .split(/\s+/)
    .map(number => number.replace(/[^0-9]/g, ''))
    .filter(Boolean)

  if (numbers.length === 0) return m.reply('*Tidak Ada Nomor Yang Diberikan.*')

  let invalidNumbers = []
  let validNumbers = []

  for (let number of numbers) {
    let ceknye = await lenwy.onWhatsApp(number + '@s.whatsapp.net')
    if (ceknye.length === 0) {
      invalidNumbers.push(number)
    } else {
      validNumbers.push(number)
    }
  }

  if (validNumbers.length > 0) {
    let owner = JSON.parse(fs.readFileSync('./premium.json', 'utf8'))
    owner = [...new Set([...owner, ...validNumbers])]
    fs.writeFileSync('./premium.json', JSON.stringify(owner, null, 2))

    m.reply(`Nomor ${validNumbers.join(', ')} ditambahkan ke daftar premium.`)
  }

  if (invalidNumbers.length > 0) {
    m.reply(`Nomor berikut tidak valid: ${invalidNumbers.join(', ')}`)
  }
}
break

case 'delprem': {
    if (!isCreator) return m.reply(mess.owner)
    if (!args[0]) return m.reply(`*Mana Nomornya?*`)

    let numbers = text.split('|')[0].split(/\s+/).map(number => number.replace(/[^0-9]/g, ''))

    if (numbers.length === 0) return m.reply(`*Tidak Ada Nomor Yang Diberikan.*`)

    let removedNumbers = []
    let notFoundNumbers = []

    let owner = JSON.parse(fs.readFileSync('./premium.json', 'utf8'))

    for (let number of numbers) {
        if (number.length === 0) continue;

        let index = owner.indexOf(number)
        if (index !== -1) {
            owner.splice(index, 1)
            removedNumbers.push(number)
        } else {
            notFoundNumbers.push(number)
        }
    }

    fs.writeFileSync('./premium.json', JSON.stringify(owner, null, 2))

    if (removedNumbers.length > 0) {
        m.reply(`Nomor ${removedNumbers.join(', ')} telah dihapus dari daftar premium.`)
    }
    if (notFoundNumbers.length > 0) {
        m.reply(`Nomor berikut tidak ditemukan dalam daftar premium: ${notFoundNumbers.join(', ')}`)
    }
}
break

case 'listprem': {
    if (!isCreator) return m.reply(mess.owner)

    let owner;
    try {
        owner = JSON.parse(fs.readFileSync('./premium.json', 'utf8'))
    } catch (err) {
        console.error('Error reading premium.json:', err)
        return m.reply('*Gagal Memuat Daftar Premium.*')
    }

    if (owner.length === 0) return m.reply('*Daftar Premium Masih Kosong.*')

    let teksooo = 'List Premium\n';
    for (let i of owner) {
        teksooo += `✉️ ${i}\n`
    }
    teksooo += `\nTotal: ${owner.length}`;

    lenwy.sendMessage(from, { text: teksooo.trim() }, { quoted: m })
}
break

case 'banall': {
    if (!isCreator) return m.reply(mess.owner)
    if (!m.isGroup) return m.reply('*Perintah ini hanya bisa digunakan dalam grup.*')

    let groupMetadata;
    try {
        groupMetadata = await lenwy.groupMetadata(m.chat)
    } catch (err) {
        console.error('Error fetching group metadata:', err)
        return m.reply('*Gagal mengambil metadata grup.*')
    }

    let participants = groupMetadata.participants || []
    
    let banned;
    try {
        banned = JSON.parse(fs.readFileSync('./banned.json', 'utf8'))
    } catch (err) {
        console.error('Error reading banned.json:', err)
        banned = []
    }

    let bannedNumbers = []
    let alreadyBannedNumbers = []

    for (let participant of participants) {
        let orgnye = participant.id;
        if (banned.includes(orgnye)) {
            alreadyBannedNumbers.push(orgnye)
        } else {
            banned.push(orgnye)
            bannedNumbers.push(orgnye)
        }
    }

    try {
        fs.writeFileSync('./banned.json', JSON.stringify(banned, null, 2))
    } catch (err) {
        console.error('Error writing banned.json:', err)
        return m.reply('*Gagal menyimpan daftar banned.*')
    }

    if (bannedNumbers.length > 0) {
        m.reply(`*Nomor Berikut Telah Dibanned:*\n\n${bannedNumbers.join('\n')}`)
    }
    if (alreadyBannedNumbers.length > 0) {
        m.reply(`*Nomor Berikut Sudah Ada Dalam Daftar Banned:*\n\n${alreadyBannedNumbers.join('\n')}`)
    }
}
break

case 'delbanall': {
    if (!isCreator) return m.reply(mess.owner)
    if (!m.isGroup) return m.reply('*Perintah ini hanya bisa digunakan dalam grup.*')

    let groupMetadata;
    try {
        groupMetadata = await lenwy.groupMetadata(m.chat)
    } catch (err) {
        console.error('Error fetching group metadata:', err)
        return m.reply('*Gagal mengambil metadata grup.*')
    }

    let participants = groupMetadata.participants || []
    
    let banned;
    try {
        banned = JSON.parse(fs.readFileSync('./banned.json', 'utf8'))
    } catch (err) {
        console.error('Error reading banned.json:', err)
        banned = []
    }

    let removedNumbers = []
    let notFoundNumbers = []

    for (let participant of participants) {
        let orgnye = participant.id;
        const index = banned.indexOf(orgnye)
        if (index !== -1) {
            banned.splice(index, 1) // Menghapus nomor dari daftar banned
            removedNumbers.push(orgnye)
        } else {
            notFoundNumbers.push(orgnye) // Nomor tidak ditemukan dalam daftar banned
        }
    }

    try {
        fs.writeFileSync('./banned.json', JSON.stringify(banned, null, 2))
    } catch (err) {
        console.error('Error writing banned.json:', err)
        return m.reply('*Gagal menyimpan daftar banned.*')
    }

    if (removedNumbers.length > 0) {
        m.reply(`*Nomor Berikut Telah Dihapus dari Daftar Banned:*\n\n${removedNumbers.join('\n')}`)
    }
    if (notFoundNumbers.length > 0) {
        m.reply(`*Nomor Berikut Tidak Ditemukan dalam Daftar Banned:*\n\n${notFoundNumbers.join('\n')}`)
    }
}
break

case 'ban': {
    if (!isCreator) return m.reply(mess.owner)
    let mentionedJids = m.mentionedJidList || []
    
    if (mentionedJids.length === 0) {
        if (!args[0]) return m.reply(`*Bukan Gitu Loh*\n\n> *Contoh : ${command} @tag1 @tag2 @tag3*`)
        mentionedJids = args.map(number => number.replace(/[^0-9]/g, '') + "@s.whatsapp.net")
    }
    
    let banned;
    try {
        banned = JSON.parse(fs.readFileSync('./banned.json', 'utf8'))
    } catch (err) {
        console.error('Error reading banned.json:', err)
        banned = []
    }

    let bannedNumbers = []
    let alreadyBannedNumbers = []

    for (let orgnye of mentionedJids) {
        if (banned.includes(orgnye)) {
            alreadyBannedNumbers.push(orgnye)
        } else {
            banned.push(orgnye)
            bannedNumbers.push(orgnye)
        }
    }

    try {
        fs.writeFileSync('./banned.json', JSON.stringify(banned, null, 2))
    } catch (err) {
        console.error('Error writing banned.json:', err)
        return m.reply('*Gagal Menyimpan Daftar Banned.*')
    }

    if (bannedNumbers.length > 0) {
        m.reply(`*Nomor Telah Dibanned:*\n\n${bannedNumbers.join('\n')}`)
    }
    if (alreadyBannedNumbers.length > 0) {
        m.reply(`*Nomor Berikut Sudah Ada Dalam Daftar Banned:*\n\n${alreadyBannedNumbers.join('\n')}`)
    }
}
break

case 'delban': {
    if (!isCreator) return m.reply(mess.owner)

    let mentionedJids = m.mentionedJidList || []
    
    if (mentionedJids.length === 0) {
        if (!args[0]) return m.reply(`*Bukan Gitu Loh*\n\n> *Contoh : ${command} @tag1 @tag2 @tag3*`)
        mentionedJids = args.map(number => number.replace(/[^0-9]/g, '') + "@s.whatsapp.net")
    }
    
    let banned;
    try {
        banned = JSON.parse(fs.readFileSync('./banned.json', 'utf8'))
    } catch (err) {
        console.error('Error reading banned.json:', err)
        banned = []
    }

    let removedNumbers = []
    let notFoundNumbers = []

    for (let orgnye of mentionedJids) {
        const index = banned.indexOf(orgnye)
        if (index !== -1) {
            banned.splice(index, 1) // Menghapus nomor dari daftar banned
            removedNumbers.push(orgnye)
        } else {
            notFoundNumbers.push(orgnye) // Nomor tidak ditemukan dalam daftar banned
        }
    }

    try {
        fs.writeFileSync('./banned.json', JSON.stringify(banned, null, 2))
    } catch (err) {
        console.error('Error writing banned.json:', err)
        return m.reply('*Gagal Menyimpan Daftar Banned.*')
    }

    if (removedNumbers.length > 0) {
        m.reply(`*Nomor Telah Dihapus dari Daftar Banned:*\n\n${removedNumbers.join('\n')}`)
    }
    if (notFoundNumbers.length > 0) {
        m.reply(`*Nomor Berikut Tidak Ditemukan dalam Daftar Banned:*\n\n${notFoundNumbers.join('\n')}`)
    }
}
break

case 'listban': {
    if (!isCreator) return m.reply(mess.owner)

    let banned;
    try {
        banned = JSON.parse(fs.readFileSync('./banned.json', 'utf8'))
    } catch (err) {
        console.error('Error reading banned.json:', err)
        return m.reply('*Gagal Membaca Daftar Banned.*')
    }

    let response = '*Daftar Banned:*\n\n';
    if (banned.length === 0) {
        response += '*Daftar Banned Kosong.*';
    } else {
        response += banned.map((number, index) => `${index + 1}. ${number}`).join('\n')
    }

    m.reply(response)
}
break

case 'setppbot': {
if (!isCreator) return m.reply(mess.owner)
if (!quoted) return m.reply(`Kirim/Balas Image Dengan Caption ${prefix + command}`)
if (!/image/.test(mime)) return m.reply(`Kirim/Balas Image Dengan Caption ${prefix + command}`)
if (/webp/.test(mime)) return m.reply(`Kirim/Balas Image Dengan Caption ${prefix + command}`)
var medis = await lenwy.downloadAndSaveMediaMessage(quoted, 'ppbot')
if (args[0] == `/full`) {
var { img } = await generateProfilePicture(medis)
await lenwy.query({
tag: 'iq',
attrs: {
to: botNumber,
type:'set',
xmlns: 'w:profile:picture'
},
content: [
{
tag: 'picture',
attrs: { type: 'image' },
content: img
}
]
})
fs.unlinkSync(medis)
m.reply(mess.success)
} else {
var memeg = await lenwy.updateProfilePicture(botNumber, { url: medis })
fs.unlinkSync(medis)
m.reply(mess.success)
}
}
break

case 'setppbotpanjang': {
if (!isCreator) return m.reply(mess.owner)
if (!quoted) return m.reply(`Kirim/Balas Image Dengan Caption ${prefix + command}`)
if (!/image/.test(mime)) return m.reply(`Mana Fotonya?`)
if (/image/g.test(mime)) {
if (/webp/.test(mime)) return m.reply(`Kirim/Balas Image Dengan Caption ${prefix + command}`)
var medis = await lenwy.downloadAndSaveMediaMessage(quoted, 'ppbot')
var { img } = await generateProfilePicture(medis)
await lenwy.query({
tag: 'iq',
attrs: {
to: botNumber,
type:'set',
xmlns: 'w:profile:picture'
},
content: [
{
tag: 'picture',
attrs: { type: 'image' },
content: img
}
]
})
fs.unlinkSync(medis)
m.reply(`Sukses`)
} else {
var memeg = await lenwy.updateProfilePicture(botNumber, { url: medis })
fs.unlinkSync(medis)
m.reply(mess.success)
}
}
break

case 'join': {
 if (!isCreator) return m.reply(mess.owner)
 if (!text) return m.reply('Masukkan Link Group!')
 if (!isUrl(text) || !text.includes('whatsapp.com')) return m.reply('Link tidak valid! 🤔')
 let linknya = text
 if (text.includes('?')) linknya = text.split('?')[0]
 m.reply('Sabar Yaa')

 try {
 let result = linknya.split('https://chat.whatsapp.com/')[1]
 if (!result) return m.reply('Link tidak valid! 🤔')
 
 await lenwy.groupAcceptInvite(result)
 m.reply('Bot berhasil bergabung ke grup!')
 } catch (err) {
 if (err.message.includes('not-authorized')) {
 return m.reply('Gagal bergabung ke grup. Bot kemungkinan baru saja dikeluarkan.')
 } else if (err.message.includes('gone')) {
 return m.reply('Link grup sudah di reset.')
 } else if (err.message.includes('conflict')) {
 m.reply('Bot sudah berada di dalam grup.')
 } else if (err.message.includes('already-exists')) {
 return m.reply('Bot sudah meminta gabung ke grup.')
 } else {
 console.log(err)
 return m.reply('Terjadi error yang tidak dikenali.')
 }
 }
}
break

case 'leave': {
 if (!isCreator) return m.reply(mess.owner)

 if (m.isGroup) {
 if (text) return
 setTimeout(async () => {
 try {
 await lenwy.groupLeave(m.chat)
 console.log(`Successfully left the group ${m.chat}`)
 } catch (err) {
 console.error('Error leaving the group:', err)
 await m.reply('*Gagal meninggalkan grup.*')
 }
 }, 2000)
 } else if (!m.isGroup) {
 if (!text) return m.reply('*Mana ID Grup / Link Nya?*\n*Ketik cekidgc Buat Liat Id Nya*')
 let groupId
 if (text.includes('https://chat.whatsapp.com')) {
 let linknya = text
 if (text.includes('?')) linknya = text.split('?')[0]
 groupId = await getGroupIdFromLink(linknya, lenwy)
 } else if (text.includes('@g.us')) {
 groupId = text
 } else {
 return m.reply(`Itu bukan id grup ataupun link grup`)
 }
 setTimeout(async () => {
 try {
 await lenwy.groupLeave(groupId)
 m.reply(`Berhasil keluar dari grup ${groupId}`)
 } catch (err) {
 console.error('Error leaving the group:', err)
 await m.reply('*Gagal meninggalkan grup.*')
 }
 }, 2000) // 5000 ms = 5 detik
 }
}
break

case 'bcgc':
case 'bcgroup': {
    if (!isCreator) return m.reply(mess.OnlyOwner)
    if (!q) return m.reply(`*Bukan Gitu Loh*\n> *Contoh : ${prefix + command} OEE SEMUAANYAA*`)
    if (!text) return m.reply(`*Teks Broadcast Tidak Ditemukan*\n> *Contoh : ${prefix + command} OEEE*`)

    let getGroups;
    try {
        getGroups = await lenwy.groupFetchAllParticipating()
    } catch (err) {
        console.error('Error fetching groups:', err)
        return m.reply('*Gagal mengambil daftar grup.*')
    }
    let groups = Object.entries(getGroups).slice(0).map(entry => entry[1])
    let groupIds = groups.map(v => v.id)
    m.reply(`*Mengirim Broadcast Ke ${groupIds.length} Group Chat, Waktu Selesai ${groupIds.length * 1.5} detik*`)
    for (let groupId of groupIds) {
        await sleep(200)
        try {
            await lenwy.sendMessage(groupId, { text: `${text}` }, { quoted: m })
        } catch (err) {
            console.error('Error sending message to group:', groupId, err)
        }
    }
    m.reply(`*Sukses Mengirim Broadcast Ke ${groupIds.length} Group*`)
}
break

case 'bcimg':
case 'bcvid':
case 'bcvideo':
case 'share': {
    if (!isCreator) return m.reply('Maaf, Command ini Khusus untuk Developer Bot WhatsApp')
    if (m.isGroup) return m.reply(mess.private)
    if (!text) return m.reply(`*Penggunaan Salah Silahkan Gunakan Seperti Ini*\n${prefix + command} teks\n\nReply Gambar/Video Untuk Mengirim Gambar/Video Ke Semua Group`)



    let getGroups;
    try {
        getGroups = await lenwy.groupFetchAllParticipating()
    } catch (err) {
        console.error('Error fetching groups:', err)
        return m.reply('*Gagal mengambil daftar grup.*')
    }

    let groups = Object.entries(getGroups).map(entry => entry[1])
    let groupIds = groups.map(v => v.id)

    global.teksjpm = text;

    let mime = m.quoted ? m.quoted.mimetype : '';

    for (let groupId of groupIds) {
        let metadata;
        try {
            metadata = await lenwy.groupMetadata(groupId)
        } catch (err) {
            console.error(`Error fetching metadata for group ${groupId}:`, err)
            continue; // Lanjutkan ke grup berikutnya jika terjadi kesalahan
        }

        let participants = metadata.participants || []

        try {
            if (/image/.test(mime)) {
                if (!m.quoted) return m.reply('Tidak ada gambar yang di-reply.')
                let media = await lenwy.downloadAndSaveMediaMessage(m.quoted)
                let mediaUrl = await uploader60Minute(media)
                await lenwy.sendMessage(groupId, { image: { url: mediaUrl }, caption: global.teksjpm, contextInfo: { mentionedJid: participants.map(p => p.id) } }, { quoted: m })
            } else if (/video/.test(mime)) {
                if (!m.quoted) return m.reply('Tidak ada video yang di-reply.')
                let media = await lenwy.downloadAndSaveMediaMessage(m.quoted)
                let mediaUrl = await uploader60Minute(media)
                await lenwy.sendMessage(groupId, { video: { url: mediaUrl }, caption: global.teksjpm, contextInfo: { mentionedJid: participants.map(p => p.id) } }, { quoted: m })
            } else {
                await lenwy.sendMessage(groupId, { text: global.teksjpm, contextInfo: { mentionedJid: participants.map(p => p.id) } }, { quoted: m })
            }
            await sleep(200) 
        } catch (err) {
            console.error(`Error sending message to group ${groupId}:`, err)
        }
    }

    m.reply(`*Sukses Mengirim Broadcast Ke ${groupIds.length} Group*`)
}
break

case 'autoread': {
  if (!isCreator) return m.reply(mess.owner);
  if (q === 'on') {
      global.db.data.settings[botNumber].autoread = true;
      m.reply(`Berhasil mengubah autoread ke ${q}`);
  } else if (q === 'off') {
      global.db.data.settings[botNumber].autoread = false;
      m.reply(`Berhasil mengubah autoread ke ${q}`);
  } else {
      m.reply(`*Ketik ${prefix + command} on/off*`);
  }
}
break

case 'block': {
if (!isCreator) return m.reply(mess.owner)
LenwyLD()
await sleep(200)
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await lenwy.updateBlockStatus(users, 'block').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
}
break

case 'unblock': {
if (!isCreator) return m.reply(mess.owner)
LenwyLD()
await sleep(200)
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await lenwy.updateBlockStatus(users, 'unblock').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
}
break

case 'onlyadmin': {
  if (!isAdmins) return m.reply(mess.admin)
  if (!global.db.data.chats[m.chat]) global.db.data.chats[m.chat] = {}
  if (!global.datagc[m.chat]) global.datagc[m.chat] = {}
  if (!text) return m.reply(`Contoh:
${prefix + command} on / off`)
  if (args[0] === 'on') {
    global.db.data.chats[m.chat].onlyAdmin = true
  } else if (args[0] === 'off') {
    global.db.data.chats[m.chat].onlyAdmin = false
  }
  fs.writeFileSync('./storage/database.json', JSON.stringify(global.db.data, null, 2))
  m.reply(mess.success)
}
break

case 'restart': {
if (!isCreator) return m.reply(mess.owner)
if (text) return
m.reply(`restarting ${botname}`)
await sleep(1500)
process.exit()
}
break

case 'delsession': 
case 'delsesi': {
 if (!isCreator) return
 fs.readdir(`./${sessionName}`, async function(err, files) {
 if (err) {
 console.log('Unable to scan directory: ' + err)
 return m.reply('Unable to scan directory: ' + err)
 }
 let filteredArray = files.filter(item => 
 item.startsWith("pre-key") || 
 item.startsWith("sender-key") || 
 item.startsWith("session-") || 
 item.startsWith("app-state")
 )
 console.log(filteredArray.length)
 let teks = `Detected ${filteredArray.length} junk files\n\n`
 if (filteredArray.length === 0) return m.reply('Sedang menghapus sampah...')
 filteredArray.forEach((item, i) => {
 teks += (i + 1) + `. ${item}\n`
 })
 console.log(teks)
 await sleep(200)
 m.reply("Menghapus session...")
 for (const file of filteredArray) {
 fs.unlinkSync(`./${sessionName}/${file}`)
 }
 await sleep(200)
 m.reply('Sukses menghapus session!')
 })
}
break

case 'delsampah': {
if (!isCreator) return
let directoryPath = path.join("./")
fs.readdir(directoryPath, async function (err, files) {
if (err) {
  return m.reply("Tidak dapat memindai direktori: " + err)
}
let filteredArray = await files.filter(
  (item) =>
item.endsWith("gif") ||
item.endsWith("png") ||
item.endsWith("mp3") ||
item.endsWith("mp4") ||
item.endsWith("jpg") ||
item.endsWith("jpeg") ||
item.endsWith("webp") ||
item.endsWith("webm"),
)
var teks = `Terdeteksi ${filteredArray.length} file sampah\n\n`
if (filteredArray.length == 0) return m.reply(teks)
filteredArray.map(function (e, i) {
  teks += i + 1 + `. ${e}\n`
})
m.reply(teks)
await sleep(200)
m.reply("Menghapus file sampah...")
await filteredArray.forEach(function (file) {
  fs.unlinkSync(`./${file}`)
})
await sleep(200)
m.reply("Berhasil menghapus semua sampah")
  })
}
break

case 'statusgc': {
  if (!m.isGroup) return m.reply('⚠️ Perintah ini hanya bisa digunakan di dalam grup!')

  try {
    const groupData = global.db.data.chats[from]
    if (!groupData) return m.reply('⚠️ Data grup tidak ditemukan dalam database,Coba kirim pesan di grup ini terlebih dahulu.');

    const check = (status) => status ? '✅ Aktif' : '❌ Off'
    let statusMessage = `*📊 STATUS PENGATURAN GRUP*\n`
    statusMessage += `ID: ${from}\n\n`

    statusMessage += `*Pengaturan Umum:*\n`
    statusMessage += `• onlyadmin : ${check(groupData.onlyAdmin)}\n`
    statusMessage += `• welcome : ${check(groupData.wlcm)}\n`
    statusMessage += `• left : ${check(groupData.left)}\n`
    statusMessage += `> contoh = onlyadmin on/onlyadmin off\n\n`
    statusMessage += `*Keamanan & Perlindungan:*\n`
    statusMessage += `• antitoxic1 : ${check(groupData.antitoxic1)}\n`
    statusMessage += `• antitoxic2 : ${check(groupData.antitoxic2)}\n`
    statusMessage += `• antilink1 (hapus pesan) : ${check(groupData.antilink1)}\n`
    statusMessage += `• antilink2 (hapus + kick) : ${check(groupData.antilink2)}\n`
    statusMessage += `• antilinkgc1 (hapus pesan) : ${check(groupData.antilinkgc)}\n`
    statusMessage += `• antilinkgc2 (hapus + kick) : ${check(groupData.antilinkgc2)}\n`
    statusMessage += `• antilinkyt: ${check(groupData.antilinkyt)}\n`
    statusMessage += `• antilinktt: ${check(groupData.antilinktt)}\n`
    statusMessage += `• antisw1 (hapus sw): ${check(groupData.antisw1)}\n`
    statusMessage += `• antisw2 (hapus + kick): ${check(groupData.antisw2)}\n`
    statusMessage += `• antiwame: ${check(groupData.antiwame)}\n`
    statusMessage += `> contoh = antilink1 on/antilink2 off`
    
    m.reply(statusMessage)

  } catch (error) {
    console.error('Terjadi kesalahan di statusgc:', error)
    m.reply('⚠️ Terjadi kesalahan saat membaca database grup.')
  }
}
break

case 'getcase': {
  if (!isCreator) return m.reply(mess.owner)
  if (!text) return m.reply(`Contoh: "getcase menu"`)

  try {
    const fileContent = fs.readFileSync("./lenwy.js").toString()
    let validasii = fileContent.split(`case '${text}'`)
    const caseSplit = validasii ? validasii : fileContent.split(`case '${text}'`)
    
    if (caseSplit.length < 2) {
        throw new Error(`Case '${text}' tidak ditemukan.`)
    }

    const caseContent = caseSplit[1].split("break")[0]
    m.reply("case " + `'${text}'` + caseContent + "break")
  } catch (error) {
    m.reply(`${error.message}`)
  }
}
break

case 'addcase': {
  if (!isCreator) return m.reply(mess.owner)
  if (!q) return m.reply(`Masukan input`)
  if (!q.includes("|||")) return m.reply(`❌ Format salah!\n\nGunakan:\n.addcase <caseTarget>|||<kodeCaseBaru>\n\nContoh:\n.addcase bot1|case 'bot2': {\n  m.reply(\`hii\`)\n}\nbreak`)

  const [targetCase, newCaseCode] = q.split("|||")
  const filePath = "./lenwy.js"
  let fileContent = fs.readFileSync(filePath, "utf-8")

  const casePattern = new RegExp(`case ['"\`]${targetCase}['"\`]:\\s*{`)
  const match = fileContent.match(casePattern)
  if (!match) return m.reply(`❌ Tidak ditemukan case '${targetCase}' di dalam lenwy.js.`)

  const startIndex = match.index

  const closingPattern = /}\s*\n\s*break/
  const afterCase = fileContent.slice(startIndex)
  const closeMatch = afterCase.match(closingPattern)

  if (!closeMatch) return m.reply(`❌ Tidak dapat menemukan akhir blok \n\n}\nbreak\n\n untuk case '${targetCase}'. Pastikan format case-nya benar.`)

  const insertPos = startIndex + closeMatch.index + closeMatch[0].length

  const updatedContent = fileContent.slice(0, insertPos) + `\n\n${newCaseCode}\n` + fileContent.slice(insertPos)

  fs.writeFileSync(filePath, updatedContent, "utf-8")

  m.reply(`✅ Case baru berhasil ditambahkan di bawah *case '${targetCase}'!*\n\n🧩 Case yang ditambahkan:\n${newCaseCode}`)
}
break

case 'editcase': {
  if (!isCreator) return m.reply(mess.owner)
  if (!text) return m.reply(`Contoh: ${prefix + command} <nama_case>|<case_baru>`)
  let [caseName, ...newContentArr] = text.split('|')
  caseName = caseName.trim()
  let newContent = newContentArr.join('|').trim()
  if (!caseName || !newContent) return m.reply(`Contoh:\n\n${prefix + command} hai|case 'hai':\n{m.reply('Hai juga')\n}\nbreak`)
  const filePath = './lenwy.js';
  try {
      if (!fs.existsSync(filePath)) return m.reply(`File bot tidak ditemukan.`)
      let fileContent = fs.readFileSync(filePath, 'utf-8')
      const regex = new RegExp(`case ['"]${caseName}['"]: {([\\s\\S]*?)}\\s*break`, 'g')
      if (!regex.test(fileContent)) return m.reply(`Case *${caseName}* tidak ditemukan.`)
      const updatedFileContent = fileContent.replace(regex, `${newContent}`)
      fs.writeFileSync(filePath, updatedFileContent, 'utf-8')
      m.reply(`Case *${caseName}* berhasil diedit.`)
  } catch (error) {
      console.error('Error:', error)
      m.reply('Terjadi kesalahan saat mengedit case. Coba lagi nanti.')
  }
}
break

case 'delcase': {
if (!isCreator) return m.reply(mess.owner)
if (!q)
return m.reply("Masukan nama case yang akan di hapus")
let filePath = "./lenwy.js"
fs.readFile(filePath, "utf8", (err, data) => {
    if (err) console.error("Kesalahan untuk menambahkan case:", err)

    const regex = new RegExp(`case\\s*['"]${q}['"]\\s*:.*?break?`, "gs")
    const modifiedData = data.replace(regex, "")
    if (modifiedData === data) {
      console.log(`Case '${q}' tidak ditemukan.`)
    } else {
      fs.writeFile(filePath, modifiedData, "utf8", (err) => {
      if (err) {
        m.reply(`Case ${q} Tidak Ada`)
        console.error("Terjadi kesalahan saat menulis file:", err)
      }
      m.reply(`Mas, Done. Coba Cek`)
      console.log(`Teks dari case '${q}' telah dihapus dari file.`)
    })
  }
})
}
break

case 'listcase':
case 'listfitur': {
  const code = fs.readFileSync("./lenwy.js", "utf8")
  var regex = /case\s+'([^']+)':/g;
  var matches = []
  var match;
  while ((match = regex.exec(code))) {
  matches.push(match[1])
  }
  let teks = `*Total Case*: ${matches.length} \n\n` 
  matches.forEach(function (x) {
    teks += "  ◦  " + x + "\n"
  })
m.reply(teks)
}
break

case 'totalfeature':
case 'totalfitur': 
case 'totalcmd': 
case 'totalcommand': {
  var mytext = fs.readFileSync("./lenwy.js").toString()
  var numUpper = (mytext.match(/case '/g) || []).length
  m.reply(`Hallo ${pushname}
Saat ini ${botname} memiliki total fitur ${numUpper}`)
}
break

case 'cekcase': {
if (!isCreator) return
if (!text) return m.reply(`Contoh: ${prefix+command} caseName`)
const caseName = text.trim()
if (!caseName) return m.reply(`Masukkan nama case yang ingin dicek. Contoh: ${prefix+command} caseName`)
const cekCase = async (caseName) => {
try {
const fileContent = await fs.promises.readFile("./lenwy.js", "utf-8")
const caseRegex = new RegExp(`case '${caseName}'[\\s\\S]*?break`, 'g')
const match = fileContent.match(caseRegex)
if (!match) {
return { found: false };
}
const lines = fileContent.split('\n')
const caseLines = match[0].split('\n')
const startLine = lines.indexOf(caseLines[0]) + 1;
const endLine = startLine + caseLines.length - 1;
return {
found: true,
startLine,
endLine,
content: match[0]
};
} catch (error) {
return { error: `Terjadi kesalahan saat membaca file: ${error.message}` };
}};
const result = await cekCase(caseName)
if (result.error) {
m.reply(result.error)
} else if (result.found) {
const message = `*CASE DITEMUKAN!*
• Nama Case: ${caseName}
• Baris Awal: ${result.startLine}
• Baris Akhir: ${result.endLine}

Mau sekalian di ambil? Ketik getcase ${caseName}`
m.reply(message)
} else {
m.reply(`Case '${caseName}' tidak ditemukan.`)
}
}
break

case 'setppsewa': {
  if (!isCreator) return m.reply(mess.owner);
  if (!/image/.test(mime)) return m.reply(`Fotonya Mana?`);
  
  const path = './storage/data/image/fotosewa'; // Menentukan path file foto
  
  if (fs.existsSync(path)) {
    fs.unlinkSync(path); // Menghapus file yang sudah ada
    console.log(`File "${path}" berhasil dihapus.`);
  }

  await lenwy.downloadAndSaveMediaMessage(quoted, path);

  m.reply('Foto berhasil diperbarui menjadi foto sewa.');
}
break

case 'setwdsewa': {
if (!isCreator) return (mess.owner)
let teksnya = text ? text : ''
global.text_sewa = teksnya
m.reply(mess.success)
}
break

case 'resetwdsewa': {
if (!isCreator) return (mess.owner)
let teksnya = text ? text : ''
global.text_sewa = teksnya
m.reply(mess.success)
}
break        
        
case 'setwdppj': {
if (!isCreator) return (mess.owner)
let teksnya = text ? text : ''
global.text_ppj = teksnya
m.reply(mess.success)
}
break

case 'resetwdppj': {
if (!isCreator) return (mess.owner)
let teksnya = text ? text : ''
global.text_ppj = teksnya
m.reply(mess.success)
}
break        
        
case 'addsewa':
case 'tambahsewa': {
 if (!isCreator) return m.reply(mess.owner)

 if (!text && !m.isGroup) {
 return m.reply(`Penggunaan:\n1. ${prefix + command} [durasi] (dari dalam grup)\n2. ${prefix + command} [durasi] [link grup] (dari chat pribadi)\n\nContoh:\n${prefix + command} 30d https://chat.whatsapp.com/xxxxx`)
 }

 let sewa = JSON.parse(fs.readFileSync(pathsewa, 'utf8'))

 try {
 let duration, groupId

 if (m.isGroup && !text.includes('http')) {
 [duration] = text.split(' ')
 if (!duration) return m.reply(`Durasi harus diisi!\nContoh: ${prefix + command} 30d`)
 groupId = m.chat
 } else {
 let [d, link] = text.split(' ')
 if (!d || !link) return m.reply(`Durasi dan link grup harus diisi!\nContoh:\n${prefix + command} 30d https://chat.whatsapp.com/xxxxx`)
if (link.includes('?')) link = link.split('?')[0]
 duration = d

 const coded = link.split("https://chat.whatsapp.com/")[1]
 if (!coded) return m.reply("Link tidak valid 🤔")

 try {
 await lenwy.groupAcceptInvite(coded)
 m.reply('Bot berhasil masuk ke grup.')
 } catch (err) {
 if (err.message.includes('not-authorized')) {
 return m.reply('Gagal bergabung ke grup. Bot kemungkinan baru saja dikeluarkan.')
 } else if (err.message.includes('gone')) {
 return m.reply('Link grup sudah di reset.')
 } else if (err.message.includes('conflict')) {
 m.reply('Bot sudah berada di dalam grup.')
 } else if (err.message.includes('already-exists')) {
 return m.reply('Bot sudah meminta gabung ke grup.')
 } else {
 console.log(err)
 return m.reply('Terjadi error yang tidak dikenali.')
 }
 }

 groupId = await getGroupIdFromLink(link, lenwy)
 if (!groupId) return m.reply('Gagal mendapatkan ID grup.')
 }
 if (sewa.some(entry => entry.groupId === groupId)) {
 return m.reply(`Grup sudah ada dalam daftar sewa.`)
 }
 addSewaGroup(groupId, duration, sewa)
 m.reply(`✅ Grup berhasil ditambahkan ke daftar sewa selama *${duration}*.`)
 if (!m.isGroup) {
 await lenwy.sendMessage(groupId, {text: `Hallo semua, saya adalah bot ${global.botname}. Grup ini telah disewa selama *${duration}*.\n\n- Admin dapat cek sisa waktu dengan ketik *${prefix}ceksewa*\n- Untuk fitur lengkap ketik *${prefix}allmenu*`})
 }

 } catch (err) {
 console.error('Error saat addsewa:', err)
 m.reply('❌ Gagal menambahkan sewa grup.')
 }
}
break

case 'delsewa':
case 'hapussewa': {
 if (!isCreator) return m.reply(mess.owner)

 if (!text && !m.isGroup) {
 return m.reply(`Untuk menghapus sewa grup dari chat pribadi, sertakan link grup.\nContoh:\n${prefix + command} https://chat.whatsapp.com/xxxxx`)
 }

 try {
 let groupId
 let link = text
 if (m.isGroup) {
 groupId = m.chat
 } else if (text.includes('@g.us')) {
 groupId = text
 } else if (text.includes('https')) {
 if (text.includes('?')) link = text.split('?')[0];
 groupId = await getGroupIdFromLink(link, lenwy)
 }

 let sewa = JSON.parse(fs.readFileSync(pathsewa, 'utf8'))
 const index = sewa.findIndex(entry => entry.groupId === groupId)

 if (index === -1) return m.reply('Grup ini tidak ditemukan dalam daftar sewa.')

 sewa.splice(index, 1)
 fs.writeFileSync(pathsewa, JSON.stringify(sewa, null, 2))

 lenwy.sendMessage(groupId, {text: `Masa sewa di group ini telah *hapus*.`})
 m.reply('✅ Sewa grup berhasil dihapus.')
 } catch (err) {
 console.error('Error saat delsewa:', err)
 m.reply('❌ Gagal menghapus sewa grup.')
 }
}
break

case 'checksewa':
case 'ceksewa': {
  if (!isAdmins && !isCreator) return m.reply(mess.admin)
  if (!m.isGroup && !text) return m.reply(`Untuk mengecek sewa grup dari chat pribadi, sertakan link grup.\nContoh:\n${prefix + command} https://chat.whatsapp.com/xxxxx`)
  let groupId = from
  let link = text
  if (!m.isGroup) {
    if (text.includes('?')) link = text.split('?')[0]
    groupId = await getGroupIdFromLink(link, lenwy)
    if (!groupId) return m.reply(`Untuk mengecek sewa grup dari chat pribadi, sertakan link grup.\nContoh:\n${prefix + command} https://chat.whatsapp.com/xxxxx`)
  }
  try {
    const currentDir = JSON.parse(fs.readFileSync(pathsewa, 'utf8'))
    const entry = currentDir.find(entry => entry.groupId === groupId)
    if (!entry) return m.reply(`Perintah ini hanya bisa dilakukan di dalam grup yang sudah di "${prefix}addsewa"`)
    if (entry.isAlifetime) return m.reply(`Akan Habis Hingga Owner Pensiun.`)
    const expiry = entry.expired;
    const remainingTime = expiry - Date.now()
    var days = Math.floor(remainingTime / (1000 * 60 * 60 * 24))
    var hours = Math.floor((remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    var minutes = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60))
    const status = `${days} hari ${hours} jam ${minutes} menit`;
    m.reply(`Akan Habis Hingga ${status}.`)
  } catch (error) {
    m.reply('Terjadi kesalahan: ' + error.message)
  }
}
break

case 'removeexpired':
case 'cekexp':
case 'cekexpired': {
  if (!isCreator) return m.reply(mess.owner)
  try {
    const currentDir = JSON.parse(fs.readFileSync(pathsewa, 'utf8'))
    await expiredCheck(lenwy, currentDir) // Asumsikan `conn` adalah objek koneksi bot
    m.reply('Pengecekan masa sewa sedang dilakukan, grup yang masa sewanya telah habis akan dihapus secara otomatis.')
  } catch (error) {
    m.reply(error.message)
  }
}
break

case 'ppjsewa':
case 'perpanjangsewa': {
 if (!isCreator) return m.reply(mess.owner)
 if (!text && !m.isGroup) {
 return m.reply(`Ada 2 cara untuk melakukan ${prefix + command} ini:\n1. Di dalam grup tanpa tambahan (cukup durasi).\n2. Di private chat dengan menyertakan *durasi* + *link grup*.\n\nContoh:\n${prefix + command} 30d https://chat.whatsapp.com/xxxxx`)
 }

 await sleep(500)
 let currentDir = JSON.parse(fs.readFileSync(pathsewa, 'utf8'))

 try {
 let groupId, duration;

 if (m.isGroup && !text.includes('https://chat.whatsapp.com/')) {
 [duration] = text.split(' ')
 if (!duration) return m.reply(`Durasi harus diisi!\nContoh:\n${prefix + command} 30d`)
 groupId = m.chat
 } else {
 let [d, link] = text.split(' ')
 if (!d || !link) return m.reply(`Durasi dan link grup harus diisi!\nContoh:\n${prefix + command} 30d https://chat.whatsapp.com/xxxxx`)
 duration = d
if (link.includes('?')) link = link.split('?')[0]
 groupId = await getGroupIdFromLink(link, lenwy)
 if (!groupId) return m.reply('Gagal mendapatkan ID grup dari link.')
 }

 if (!checkSewaGroup(groupId, currentDir)) {
 return m.reply('Grup ini tidak ditemukan dalam daftar sewa. Anda tidak dapat memperpanjang masa sewanya.')
 }

 const pos = currentDir.findIndex(entry => entry.groupId === groupId)
 if (pos !== -1) {
 const isLifetime = ['alifetime', 'permanent', 'permanen', 'perma'].includes(duration.toLowerCase())

 if (isLifetime) {
 currentDir[pos].expired = null
 currentDir[pos].isAlifetime = true
 currentDir[pos].reminded1d = false
 currentDir[pos].reminded1h = false
 currentDir[pos].reminded1m = false
 m.reply(`✅ Masa sewa grup${m.isGroup ? '' : ` dengan ID ${groupId}`} diperpanjang menjadi *Permanen*.`)
 await lenwy.sendMessage(groupId, { text: `🎉 Masa sewa grup ini telah di ubah menjadi *Permanen*!` })
 } else {
 if (currentDir[pos].expired === null || currentDir[pos].isAlifetime === true) {
 currentDir[pos].expired = Date.now() + toMs('3s') // Atau kamu bisa langsung toMs(duration)
 await sleep(500)
 }

 currentDir[pos].expired += toMs(duration)
 currentDir[pos].isAlifetime = false // Reset lifetime

 currentDir[pos].reminded1d = false
 currentDir[pos].reminded1h = false
 currentDir[pos].reminded1m = false
 let entry = currentDir[pos]
 let expiry = entry.expired
 let remainingTime = expiry - Date.now()
 var days = Math.floor(remainingTime / (1000 * 60 * 60 * 24))
 var hours = Math.floor((remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
 var minutes = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60))
 
 let status = `${days} hari ${hours} jam ${minutes} menit`;
 await lenwy.sendMessage(groupId, { text: `⏳ Masa sewa telah diperpanjang selama *${duration}*. Sisa masa sewa saat ini adalah:\n*${status}*` })
 m.reply(`✅ Masa sewa grup${m.isGroup ? '' : ` dengan ID ${groupId}`} berhasil diperpanjang selama *${duration}*.`)
 }

 fs.writeFileSync(pathsewa, JSON.stringify(currentDir, null, 2))
 }

 } catch (err) {
 console.error('Error:', err)
 m.reply('Terjadi kesalahan saat memperpanjang sewa. Pastikan format benar dan link masih aktif.')
 }
}
break

case 'listsewa': {
  if (!isCreator) return m.reply(mess.owner)
  LenwyLD()
  try {
      const currentDir = JSON.parse(fs.readFileSync(pathsewa, 'utf8'))
      let ordernye = `*List Sewa*\nJumlah : ${currentDir.length}\n\n`
      for (const entry of currentDir) {
        await sleep(5000)
          let idgc = entry.groupId;
            let linkgc
            try {
              let response2 = await lenwy.groupInviteCode(idgc)
              linkgc = `https://chat.whatsapp.com/${response2}`
            } catch {
              linkgc = '-'
            }
            try {
              let metadata = await lenwy.groupMetadata(idgc)
              const totalMembers = metadata.participants ? metadata.participants.length : 0;
              let expirednya = `Permanent`
              if (!entry.isAlifetime) {
                const expiry = entry.expired;
                const remainingTime = expiry - Date.now()
                var days = Math.floor(remainingTime / (1000 * 60 * 60 * 24))
                var hours = Math.floor((remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
                var minutes = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60))
                expirednya = `${days || '-'} hari ${hours || '-'} jam ${minutes || '-'} menit`
              }

              ordernye += `✅ ${metadata.subject}
🎁 ID Group : ${entry.groupId}
📦 Total Member : ${totalMembers || '-'} Member
⏰ Expired : ${expirednya}
> Link Group : ${linkgc}
────────────────────────\n\n`
            } catch (e) {
              ordernye += `⛔
🎁 Group ID: ${idgc}
📦 Tidak bisa mengakses metadata grup, Kemungkinan bot telah keluar dari group.
> Pesan: ${e.message}
────────────────────────\n\n`
            }
      }
      m.reply(ordernye + `> Gunakan ${prefix}delsewa (idGroup) untuk menghapus sewa jika private chat dengan bot
> Gunakan ${prefix}delsewa untuk menghapus sewa jika berada di dalam grup`)
  } catch (error) {
      m.reply('Terjadi kesalahan saat membaca file: ' + error.message)
  }
}
break

case 'backupbot':
case 'botbackup': {
 if (!isAdmins && !isCreator) return m.reply(`Khusus admin dan owner`);

 const selectedFiles = [
  'library', 'project', 'Session', 'storage',
  'author.json', 'banned.json', 'index.js',
  'len.js', 'lenwy.js', 'package-lock.json', 'package.json', 'premium.json'
 ];

 const directoryPath = path.join("./");
 fs.readdir(directoryPath, async (err, files) => {
 if (err) return m.reply("Gagal membaca direktori: " + err);

 const fileSampah = files.filter(item =>
 item.match(/\.(gif|png|mp3|mp4|jpg|jpeg|webp|webm|zip|tar.gz|rar)$/)
 );

 if (fileSampah.length === 0) return m.reply(`Tidak ada file sampah ditemukan.`);

 let teks = `🧹 Terdeteksi ${fileSampah.length} file sampah:\n\n`;
 fileSampah.forEach((e, i) => teks += `${i + 1}. ${e}\n`);
 m.reply(teks);
 await sleep(1000);
 m.reply("Menghapus file sampah...");

 fileSampah.forEach(file => {
 try {
 fs.unlinkSync(path.join(directoryPath, file));
 } catch (e) {
 console.error(`Gagal hapus: ${file}`, e);
 }
 });

 await sleep(1000);
 m.reply("✅ Semua file sampah berhasil dihapus.");
 });

 await sleep(3000);

 const ownerJid = `${global.owner}@s.whatsapp.net`;
 const waktu = moment.tz('Asia/Jakarta').format('DD-MM');
 const zipFileName = `Sc${global.ownername || 'Bot'}_${waktu}.zip`;

 try {
 const command = `zip -r ${zipFileName} ${selectedFiles.join(" ")}`;
 execSync(command);

 await lenwy.sendMessage(ownerJid, {
 document: fs.readFileSync(`./${zipFileName}`),
 mimetype: "application/zip",
 fileName: zipFileName,
 }, { quoted: m });

 fs.unlink(`./${zipFileName}`, err => {
 if (err) console.error(`❌ Gagal hapus ${zipFileName}:`, err);
 else console.log(`✅ Backup "${zipFileName}" dikirim dan dihapus.`);
 });

 m.reply("📦 Backup berhasil dikirim ke owner.");
 } catch (err) {
 console.error("❌ Gagal backup:", err);
 m.reply("❌ Terjadi kesalahan saat backup.");
 }
}
break

case 'autobackup': {
  if (!isCreator) return m.reply(mess.owner)
  if (!text) return m.reply(`*Ketik ${prefix + command} on/off*`)
    if (q == 'on') {
      global.autobakcup = true;
      m.reply(mess.success)
  } else if (q == 'off') {
      global.autobakcup = false;
      m.reply(mess.success)
  } else {
      m.reply(`*Ketik ${prefix + command} on/off*`)
  }
}
break

case 'getip':
case 'cekip': {
    if (!isCreator) return m.reply(mess.owner)
    
    try {
        const res = await fetch('http://ip-api.com/json/');
        const data = await res.json();

        let ipv4 = data.query

        if (ipv4) {
            const replyMessage = `*📮INFO SERVER*\n\n*IP :* ${ipv4}\n*Country :* ${data.city}, ${data.regionName}, ${data.country}`;
            m.reply(replyMessage)
        } else {
            m.reply('Gagal mengambil informasi IP IPv4. Silakan coba lagi nanti.')
        }
    } catch (error) {
        console.error('Error fetching IP:', error)
        m.reply('Gagal mengambil informasi IP. Silakan coba lagi nanti.')
    }
}
break

case 'setpayment': {
  if (!isAdmins) return m.reply(mess.admin);
  if (!text) return m.reply(`Contoh: Kirimkan foto dengan caption:\n${prefix + command} ewallet@Berikut Nomor E-Wallet nya:\nGopay: 085261255548\nDana: 085261255548`)
  if (!/image/.test(mime)) return m.reply(`Fotonya Mana?`);

  let paymentMethod = text.split('@')[0]; 
  let paymentData = text.split('@')[1];
  if (!paymentData || !paymentMethod) {
      return m.reply(`Contoh: ${prefix + command} ewallet@Berikut Nomor E-Wallet nya:\nGopay: 085261255548\nDana: 085261255548`);
  }

  let groupID = m.chat;
  let paymentDataId = `${groupID.split('@')[0]}-${paymentMethod}`; 
  let imageUrl = await lenwy.downloadAndSaveMediaMessage(quoted, `./storage/data/image/${paymentDataId}`);
  let _db = readDatabasePayment();

  if (!Array.isArray(_db)) {
      _db = [];
  }

  let existingPayment = _db.find(entry => entry.id === groupID && entry.key === paymentMethod);
  if (existingPayment) {
      return m.reply(`Key dengan metode ${paymentMethod} sudah ada untuk grup ini.`);
  }

  let obj_add = {
      id: groupID,
      key: paymentMethod,
      paymentData: paymentData, 
      imageUrl: imageUrl
  };

  _db.push(obj_add);

  writeDatabasePayment(_db);

  return m.reply(`Pembayaran dengan metode ${paymentMethod} berhasil disimpan. Gambar pembayaran telah diterima.`);
}
break

case 'delpayment': {
  if (!isAdmins) return
  let key = text;
  if (!key) return m.reply("Harap kirimkan format yang benar: delpayment <key>");

  let _db = readDatabasePayment();

  let paymentIndex = _db.findIndex(item => item.key === key && item.id === m.chat);

  if (paymentIndex === -1) {
    let availableKeys = _db
      .filter(item => item.id === m.chat)
      .map((item, index) => `${index + 1}. ${item.key}`);
    if (availableKeys.length === 0) {
      return m.reply("Tidak ada data pembayaran yang tersedia di grup ini.");
    }
    return m.reply(`Key "${key}" tidak ditemukan. Key yang tersedia:\n${availableKeys.join('\n')}`);
  }

  let deletedPayment = _db.splice(paymentIndex, 1)[0];

  if (deletedPayment.imageUrl) {
    const fs = require('fs');
    fs.unlink(deletedPayment.imageUrl, (err) => {
      if (err) console.error("Gagal menghapus file gambar:", err);
    });
  }

  writeDatabasePayment(_db);

  m.reply(`Data pembayaran dengan key "${key}" berhasil dihapus.`);
}
break

case 'addripper': {
  if (!isCreator) return m.reply(mess.owner)
  if (!isBotAdmins) return m.reply(mess.botAdmin)
    if (!text) return m.reply(`Masukkan nomor yang ingin ditambahkan.\nContoh: ${prefix + command} 628xxx`)

    let nomor = text.replace(/[^0-9]/g, '')
    var cek = await lenwy.onWhatsApp(nomor)
    if (cek.length < 1) return m.reply("Nomor Tersebut Tidak Terdaftar Di WhatsApp")
    const filePath = path.join(__dirname, './storage/dataRipper.json');

    if (!fs.existsSync(filePath)) {
        fs.writeFileSync(filePath, JSON.stringify([]));
    }

    let data = JSON.parse(fs.readFileSync(filePath));

    if (data.includes(nomor)) {
        return m.reply(`Nomor ${nomor} sudah terdaftar sebagai ripper.`)
    }

    data.push(nomor);
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2));

    m.reply(`Nomor ${nomor} berhasil ditambahkan ke daftar ripper.`)
}
break

case 'delripper': {
  if (!isCreator) return m.reply(mess.owner)
    if (!text) return m.reply(`Masukkan nomor yang ingin dihapus.\nContoh: ${prefix + command} 628xxx`);

    let nomor = text.replace(/[^0-9]/g, '');
    const filePath = path.join(__dirname, './storage/dataRipper.json');

    if (!fs.existsSync(filePath)) {
        return m.reply('Daftar ripper masih kosong.');
    }

    let data;
    try {
        data = JSON.parse(fs.readFileSync(filePath));
        if (!Array.isArray(data)) data = [];
    } catch (e) {
        data = [];
    }

    if (!data.includes(nomor)) {
        return m.reply(`Nomor ${nomor} tidak ditemukan dalam daftar ripper.`);
    }

    data = data.filter(n => n !== nomor);
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2));

    m.reply(`Nomor ${nomor} berhasil dihapus dari daftar ripper.`);
}
break

case 'listripper': {
  if (!isCreator) return m.reply(mess.owner)

    let owner;
    try {
        owner = JSON.parse(fs.readFileSync('./storage/dataRipper.json', 'utf8'))
    } catch (err) {
        console.error('Error reading premium.json:', err)
        return m.reply('*Gagal Memuat Daftar Premium.*')
    }

    if (owner.length === 0) return m.reply('*Daftar Ripper Masih Kosong.*')

    let teksooo = '\`— 𝗟𝗶𝘀𝘁 𝗥𝗶𝗽𝗽𝗲𝗿\`\n';
    for (let i of owner) {
        teksooo += `✉️ ${i}\n`
    }
    teksooo += `\nTotal: ${owner.length}`;

    lenwy.sendMessage(from, { text: teksooo.trim() }, { quoted: m })
}
break

//--------------------------------------------------------------------[ GROUP MENU ]--------------------------------------------------------------------//

case 'setsimbol': {
  if (!m.isGroup) return m.reply(mess.group);
  if (!isAdmins) return m.reply(mess.admin);
  let teks_simbol = text || ''
  global.datagc[m.chat].text_list_simbol = teks_simbol;
  m.reply(mess.success)
  fs.writeFileSync('./storage/databaseGroup.json', JSON.stringify(global.datagc, null, 2))
}
break

case 'addlist': {
if (!isAdmins) return m.reply(mess.admin)
if (!m.isGroup) return m.reply(mess.group)
let args = q.split("@")
let args1 = args[0].toLowerCase().trim()
let args2 = args[1]
if (!q.includes('@')) return m.reply(`*Cara Pengunaan : ${prefix+command} Key@Respon*\n🎁 *Contoh : addlist wdp@harga wdp _-*`)
if (!args1 && !args2) return m.reply(`Key Dan Respon Harus Diisi!!`)
if (isAlreadyResponList(from, args1, db_respon_list)) return m.reply(`⚠️ *Nama Key ${args1} Sudah Ada Dalam Group Ini*`)
if (/image/.test(mime)) {
media = await lenwy.downloadAndSaveMediaMessage(quoted)
mem = await uploaderLebih(media)
addResponList(from, args1, args2, true, `${mem}`, db_respon_list)
m.reply(`Successfully set list message with key : *${args1}*`)
if (fs.existsSync(media)) fs.unlinkSync(media)
} else {
addResponList(from, args1, args2, false, '-', db_respon_list)
m.reply(`📑 *Sukses Menambahkan Key Dengan Kode : ${args1}*`)
}
}
break

case 'dellist': {
if (!m.isGroup) return m.reply(mess.group)
if (!isAdmins) return m.reply(mess.admin)
if (db_respon_list.length === 0) return m.reply(`*Belum Ada List Yang Ditambahkan*`)
if (!text) return m.reply(`*Ketik Nama Item Yang Ingin Dihapus*`)
  let sortedList = db_respon_list.filter(i => i.id === m.chat).sort((a, b) => {
    if (a.key < b.key) return -1;
    if (a.key > b.key) return 1;
    return 0;
})
    let buttons = sortedList.map(i => ({
        title: `${prefix}dellist ${i.key}`,
        id: `${prefix}dellist ${i.key}` 
    }))
let buttonParamsJson = JSON.stringify({
    title: "[ LIST ]",
    sections: [{
        title: "Daftar List",
        rows: buttons
    }]
})
let msg = generateWAMessageFromContent(m.chat, {
    viewOnceMessage: {
        message: {
            "messageContextInfo": {
                "deviceListMetadata": {},
                "deviceListMetadataVersion": 2
            },
            interactiveMessage: {
                body: {
                    text: "Ketik Nama Item Nya Atau Coba Klik List Dibawah Ini"
                },
                footer: {
                    text: ""
                },
                header: {
                    title: "",
                    subtitle: "",
                    hasMediaAttachment: false
                },
                nativeFlowMessage: {
                    buttons: [{
                        name: "single_select",
                        buttonParamsJson: buttonParamsJson
                    }/*,{
                       name: "quick_reply",
                        buttonParamsJson: `{"display_text":"Payment","id":"pay a"}`          
                    }*/]
                },
                contextInfo: {
                    mentionedJid: [m.sender],
                }
            }
        }
    }
}, { quoted: m })
if (!isAlreadyResponList(m.chat, q.toLowerCase(), db_respon_list)) {
await lenwy.sendMessage(m.chat, {
text: "Periksa Lagi List Nya Dan Ketikkan Dengan Benar Atau Gunakan Tombol Dibawah Jika Tidak Muncul.\n\nSilahkan Hubungi Owner Jika Anda Mengalami Kesulitan Dalam Penghapusan List."
}, {
quoted: m
})
    lenwy.relayMessage(m.key.remoteJid, msg.message, {
    additionalNodes: [
      {
        tag: "biz",
        attrs: {},
        content: [
          {
            tag: "interactive",
            attrs: {
              type: "native_flow",
              v: "1",
            },
            content: [
              {
                tag: "native_flow",
                attrs: {
                  name: "quick_reply",
                },
              },
            ],
          },
        ],
      },
    ],
  })
}
if (isAlreadyResponList(m.chat, q.toLowerCase(), db_respon_list)) {
delResponList(m.chat, q.toLowerCase(), db_respon_list)
m.reply(`⚠️ *Sukses Menghapus Item Dengan kode : ${q}*`)
}
}
break

case 'updatenamelist': {
 if (!m.isGroup) return m.reply(mess.group)
 if (!isAdmins) return m.reply(mess.admin)
 let args = q.split("@")
 if (args.length !== 2) {
 return m.reply(`*Cara Penggunaan : Updatenamelist OldKey@NewKey*\n🎁 *Contoh : Updatenamelist wdp@antri wdp*`)
 }
 let oldKey = args[0].toLowerCase().trim()
 let newKey = args[1].toLowerCase().trim()
 if (updateKey(m.chat, oldKey, newKey, db_respon_list)) {
 m.reply(`📑 *Sukses Memperbarui Kode Dari ${oldKey} Menjadi ${newKey}*`)
 } else {
 m.reply(`⚠️ *Nama Item ${oldKey} Belum Terdaftar Dalam Group Ini*`)
 }
}
break

case 'updatelist': {
if (!m.isGroup) return m.reply(mess.group)
if (!isAdmins) return m.reply(mess.admin)
let args = q.split("@")
let args1 = args[0].toLowerCase()
let args2 = args[1]

if (!q.includes("@")) return m.reply(`*Cara Pengunaan : Updatelist Item@Respon*\n🎁 *Contoh : Updatelist wdp@harga wdp eaa apala*`)
if (!isAlreadyResponList(m.chat, args1, db_respon_list)) return m.reply(`⚠️ *Nama Item ${args1} Belum Terdaftar Dalam Group Ini*`)
if (/image/.test(mime)) {
let media = await lenwy.downloadAndSaveMediaMessage(quoted)
let mem = await uploaderLebih(media)

updateResponList(m.chat, args1, args2, true, `${mem}`, db_respon_list)
m.reply(`📑 *Sukses Memperbarui Item Dengan Kode : ${args1}*`)
if (fs.existsSync(media)) fs.unlinkSync(media)
} else {
updateResponList(m.chat, args1, args2, false, '-', db_respon_list)
m.reply(`📑 *Sukses Memperbarui Item Dengan Kode : ${args1}*`)
}
}
break

case 'sendlist': {
  let oldId
  let newId
  if (!m.isGroup) {
    if (!isCreator) return
    if (!text) return m.reply(`*Cara Penggunaan : ${prefix + command} linkGroup1|linkGroup2*`)
    if (!budy.includes('|')) return m.reply(`*Cara Penggunaan : ${prefix + command} linkGroup1|linkGroup2*`)
    let links = text.split('|')
    oldId = await getGroupIdFromLink(links[0].trim(), lenwy)
    newId = await getGroupIdFromLink(links[1].trim(), lenwy)
  } else {
    if (!isAdmins) return m.reply(mess.admin)
    if (!text) return m.reply(`*Cara Penggunaan : ${prefix + command} linkGroup2*`)
    oldId = m.chat
    newId = await getGroupIdFromLink(text, lenwy)
  }
  let datagrup = await lenwy.groupMetadata(newId)
  if (updateId(oldId, newId, db_respon_list)) {
      m.reply(`📑 *Sukses mengirimkan list ke Group ${datagrup.subject}*`);
  } else {
      m.reply(`⚠️ *Gagal mengirimkan list ke Group ${datagrup.subject}*`);
  }
}
break

case 'resetlist': {
  if (!isAdmins) return m.reply(mess.admin)
  if (!m.isGroup) return m.reply(mess.group)
  if (resetList(m.chat, db_respon_list)) {
      m.reply(`📑 *Sukses mereset list*`);
  } else {
      m.reply(`⚠️ *Gagal mereset list*`);
  }
}
break

case 'dellistsampah': {
  if (!isCreator) return m.reply(mess.owner)
  LenwyLD()
  m.reply('🧹 Sedang memeriksa daftar grup dan membersihkan list sampah... (harap tunggu)')

  let getGroups = await lenwy.groupFetchAllParticipating()
  let groups = Object.entries(getGroups).map(([_, v]) => v)

  let groupIDs = []

  for (let i = 0; i < groups.length; i++) {
      try {
          let metadata = await lenwy.groupMetadata(groups[i].id)
          groupIDs.push(metadata.id)
          console.log(`✅ Dapat metadata grup: ${metadata.subject} (${metadata.id})`)
      } catch (e) {
          console.log(`⚠️ Gagal fetch metadata grup ke-${i + 1}:`, e.message)
      }

      await sleep(5000)
  }

  let deletedCount = deleteListSampah(db_respon_list, groupIDs)

  if (deletedCount > 0) {
      m.reply(`🧾 *Selesai membersihkan list sampah!*\n🗑️ *Total dihapus:* ${deletedCount} data`)
  } else {
      m.reply(`✨ *Tidak ada list sampah yang ditemukan!*`)
  }
}
break

case 'saran': {
let lenwy_txt = args[0]
if (!text) return m.reply('*Mana Teksnya?*')
if (text.length > 30) return m.reply(`*Maksimal 30 Karakter*`)    
m.reply('*Saran Berhasil Terkirim, Terimakasih*')
lenwy.sendMessage(`${global.owner}@s.whatsapp.net`, { text: `📦 *Saran / Masukan*\n🎁 *Dari :* @${sender.split('@')[0]}\n📃 *Pesan :* ${q}\n\n 📣 *Saran Ini Dikirim Oleh ${botname}*`, mentions: [sender]}, { quoted: m })
}
break

case 'reportbug': {
let lenwy_txt = args[0]
if (!text) return m.reply('*Mana Teksnya?*')
if (text.length > 15) return m.reply(`*Maksimal 15 Karakter*`)    
m.reply('⚠️ *Report Berhasil Terkirim, Terimakasih*')
lenwy.sendMessage(`${global.owner}@s.whatsapp.net`, { text: `⚠️ *Report Bug*\n🎁 *Dari :* @${sender.split('@')[0]}\n📃 *Pesan :* ${q}\n\n 📣 *Laporan Ini Dikirim Oleh ${botname}*`, mentions: [sender]}, { quoted: m })
}
break

case 'linkgroup':
case 'linkgc': {
    if (!m.isGroup) return m.reply(mess.group)
    if (!isBotAdmins) return m.reply(mess.botAdmin)
    
    try {
        const groupMetadata = await lenwy.groupMetadata(from)

        let response = await lenwy.groupInviteCode(from)

        const message = `*Nama Group :* ${groupMetadata.subject}\n\n\n🎁 *Link Group :* https://chat.whatsapp.com/${response}\n\n🎁 *ID Group :* ${from}`;
        lenwy.sendText(from, message, m, { detectLink: true })
    } catch (error) {
        console.error('Error while fetching group info:', error)
        m.reply('Terjadi kesalahan saat mengambil informasi grup.')
    }
}
break

case 'resetlinkgc': {
  if (!isAdmins) return m.reply(mess.admin)
  if (!m.isGroup) return m.reply(mess.group)
  if (!isBotAdmins) return m.reply(mess.botAdmin)
  try {
    await lenwy.groupRevokeInvite(from)
    await new Promise(resolve => setTimeout(resolve, 2000))
    let newLink = await lenwy.groupInviteCode(from)
    m.reply(`*Link Grup Berhasil Di Reset*\n\n*Menjadi:* https://chat.whatsapp.com/${newLink}`)
    global.db.data.chats[m.chat].linkgc = `https://chat.whatsapp.com/${newLink}`;
    fs.writeFileSync('./storage/database.json', JSON.stringify(global.db.data, null, 2));
  } catch (err) {
    console.error('Error saat mereset link grup:', err)
    m.reply('Terjadi kesalahan saat mereset link grup.')
  }
}
break

case 'sendlinkgc': {
if (!m.isGroup) return m.reply(mess.group)
if (!isBotAdmins) return m.reply(mess.botAdmin)
if (!text) return m.reply(`Penggunaan ${prefix+command} nomor\nContoh ${prefix+command} 6285261255548`)
if (!args[0]) return m.reply(`Penggunaan ${prefix+command} nomor\nContoh ${prefix+command} 6285261255548`)
var bnnd =  m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
var cek = await lenwy.onWhatsApp(`${bnnd.split("@")[0]}`)
if (cek.length < 1) return m.reply("Nomor Tersebut Tidak Terdaftar Di WhatsApp")
try {
let response = await lenwy.groupInviteCode(from)
await lenwy.sendText(bnnd, `https://chat.whatsapp.com/${response}\n\nLink Group : ${groupMetadata.subject}`, len, { detectLink: true })
m.reply('Selesai')
} catch (e) {
console.log(e)
m.reply('Gini Loh\n\n> sendlinkgc 628xx')
}
}
break

case 'add':
case 'addmember': {
if (!m.isGroup) return m.reply(mess.group)
if (!isAdmins) return m.reply(mess.admin)
if (!isBotAdmins) return m.reply(mess.botAdmin)
var teks =  m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
var cek = await lenwy.onWhatsApp(`${teks.split("@")[0]}`)
if (cek.length < 1) return m.reply("Nomor Tersebut Tidak Terdaftar Di WhatsApp")
var a = await lenwy.groupParticipantsUpdate(m.chat, [teks], 'add')
if (a[0].status == 200) lenwy.sendMessage(m.chat, {text: `Berhasil Menambahkan @${teks.split("@")[0]} Kedalam Grup Ini`, mentions: [`${teks}`]}, {quoted: m}).catch((err) => m.reply(err.toString()))
if (a[0].status == 408) lenwy.sendMessage(m.chat, {text: `Gagal Menambahkan @${teks.split("@")[0]} Ke Dalam Grup Ini, Karna Target Tidak Mengizinkan Orang Lain Dapat Menambahkan Dirinya Ke Dalam Grup`, mentions: [`${teks}`]}, {quoted: m}).catch((err) => m.reply(err.toString()))
if (a[0].status == 409) lenwy.sendMessage(m.chat, {text: `@${teks.split("@")[0]} Sudah Ada Di Dalam Grup Ini!`, mentions: [`${teks}`]}, {quoted: m}).catch((err) => m.reply(err.toString()))
if (a[0].status == 403) lenwy.sendMessage(m.chat, {text: `Gagal Menambahkan @${teks.split("@")[0]} Ke Dalam Grup Ini, Karna Target Tidak Mengizinkan Orang Lain Dapat Menambahkan Dirinya Ke Dalam Grup`, mentions: [`${teks}`]}, {quoted: m}).catch((err) => m.reply(err.toString()))
}
break

case 'kickall': {
  if (!m.isGroup) return m.reply(mess.group);
  if (!isAdmins) return m.reply(mess.admin);
  if (!isBotAdmins) return m.reply(mess.botAdmin);

  try {
      const groupe = await lenwy.groupMetadata(from);
      const members = groupe.participants;

      const mems = members
          .filter(member => member.id !== m.sender && member.id !== botNumber)
          .map(member => member.id);

      if (mems.length === 0) {
          return m.reply("Tidak ada anggota yang dapat dikeluarkan.");
      }

      await lenwy.groupParticipantsUpdate(from, mems, 'remove')
          .then(() => m.reply(`Berhasil mengeluarkan ${mems.length} anggota dari grup.`))
          .catch(err => m.reply(`Gagal mengeluarkan anggota: ${err.toString()}`));
  } catch (error) {
      return m.reply(`Terjadi kesalahan: ${error.toString()}`);
  }
}
break

case 'dor':
case 'kick': {
if (!m.isGroup) return m.reply(mess.group)
if (!isAdmins) return m.reply(mess.admin)
if (!isBotAdmins) return m.reply(mess.botAdmin)
if (text || m.quoted) {
try {
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await lenwy.groupParticipantsUpdate(m.chat, [users], 'remove').then((res) => lenwy.sendMessage(m.chat, {text: `Berhasil Mengeluarkan @${users.split("@")[0]} Dari Grup Ini`, mentions: [`${users}`]}, {quoted: m})).catch((err) => m.reply(err.toString()))
} catch (e) {
  return m.reply(e)
}
} else {
return m.reply(`tag atau @user`)
}
}
break

case 'promote': {
if (!m.isGroup) return m.reply(mess.group)
if (!isBotAdmins) return m.reply(mess.botAdmin)
if (!isAdmins) return m.reply(mess.admin)
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await lenwy.groupParticipantsUpdate(from, [users], 'promote')
m.reply(mess.success)
}
break

case 'demote': {
if (!m.isGroup) return m.reply(mess.group)
if (!isBotAdmins) return m.reply(mess.botAdmin)
if (!isAdmins) return m.reply(mess.admin)
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await lenwy.groupParticipantsUpdate(from, [users], 'demote')
m.reply(mess.success)
}
break

case 'promoteall': {
  if (!m.isGroup) return m.reply(mess.group);
  if (!isAdmins) return m.reply(mess.admin);
  if (!isBotAdmins) return m.reply(mess.botAdmin);

  try {
      const groupe = await lenwy.groupMetadata(from);
      const members = groupe.participants;

      const mems = members
          .filter(member => member.id !== m.sender && member.id !== botNumber)
          .map(member => member.id);

      if (mems.length === 0) {
          return m.reply("Tidak ada anggota yang dapat di-promote.");
      }

      await lenwy.groupParticipantsUpdate(from, mems, 'promote')
          .then(() => m.reply(`Berhasil mempromosikan ${mems.length} anggota ke admin.`))
          .catch(err => m.reply(`Gagal mempromosikan anggota: ${err.toString()}`));
  } catch (error) {
      return m.reply(`Terjadi kesalahan: ${error.toString()}`);
  }
}
break

case 'demoteall': {
  if (!m.isGroup) return m.reply(mess.group);
  if (!isAdmins) return m.reply(mess.admin);
  if (!isBotAdmins) return m.reply(mess.botAdmin);

  try {
      const groupe = await lenwy.groupMetadata(from);
      const members = groupe.participants;

      const mems = members
          .filter(member => member.id !== m.sender && member.id !== botNumber)
          .map(member => member.id);

      if (mems.length === 0) {
          return m.reply("Tidak ada anggota yang dapat di-demote.");
      }

      await lenwy.groupParticipantsUpdate(from, mems, 'demote')
          .then(() => m.reply(`Berhasil mendemote ${mems.length} admin dari grup.`))
          .catch(err => m.reply(`Gagal mendemote anggota: ${err.toString()}`));
  } catch (error) {
      return m.reply(`Terjadi kesalahan: ${error.toString()}`);
  }
}
break

case 'setppgroup':
case 'setppgrup':
case 'setppgc': {
if (!m.isGroup) return m.reply(mess.group)
if (!isAdmins) return m.reply(mess.admin)
if (!/image/.test(mime)) return m.reply(`Mana Fotonya?`)

let media = await lenwy.downloadAndSaveMediaMessage(quoted)
await lenwy.updateProfilePicture(m.chat, { url: media }).catch((err) => fs.unlinkSync(media))
m.reply(mess.success)
}
break

case 'setppgcpanjang': {
  const jimp = require('jimp')
  
  async function processImage(media) {
    const image = await jimp.read(media)
    const cropped = image.crop(0, 0, image.getWidth(), image.getHeight())
    return {
      img: await cropped.scaleToFit(720, 720).getBufferAsync(jimp.MIME_JPEG),
      preview: await cropped.normalize().getBufferAsync(jimp.MIME_JPEG)
    };
  }

  let media = await lenwy.downloadAndSaveMediaMessage(quoted)
  var { img } = await processImage(media)

  await lenwy.query({
    tag: "iq",
    attrs: {
      to: m.chat,
      type: "set",
      xmlns: "w:profile:picture",
    },
    content: [
      {
        tag: "picture",
        attrs: { type: "image" },
        content: img,
      },
    ],
  })
  
  await lenwy.sendMessage(m.chat, {
    react: {
      text: "✅",
      key: m.key,
    },
  })
  
  m.reply(mess.success)
}
break

case 'hidetag':
case 'h': {
  if (!m.isGroup) return m.reply(mess.group);
  if (!isAdmins) return m.reply(mess.admin);
  const texthidetag_ = text ? text : (m.quoted ? m.quoted.text : '')
  const mime = m.quoted ? m.quoted.mtype : m.mtype
  try {
    if (/image/.test(mime)) {
      const media = await (m.quoted ? m.quoted.download() : m.download())
      console.log(media)
      if (!media) return m.reply("Gambar tidak ditemukan atau gagal diunduh.")
      await lenwy.sendMessage(from, { image: media, caption: texthidetag_, mentions: participants.map(a => a.id) },{ quoted: m })
    } else if (/video/.test(mime)) {
      const media = await (m.quoted ? m.quoted.download() : m.download())
      if (!media) return m.reply("Video tidak ditemukan atau gagal diunduh.")
      await lenwy.sendMessage(from, { video: media, caption: texthidetag_, mentions: participants.map(a => a.id) }, { quoted: m })
    } else {
      lenwy.sendMessage(from,{ text: texthidetag_, mentions: participants.map(a => a.id) }, { quoted: m })
    }
  } catch (err) {
    console.error(err);
    m.reply("Terjadi kesalahan saat memproses media.");
  }
}
break
       
        
case 'close': {
    if (!m.isGroup) return m.reply(mess.group);
    if (!isAdmins) return m.reply(mess.admin);
    if (!isBotAdmins) return m.reply(mess.botAdmin);

    const argsTime = q ? q.trim() : "";
    let isScheduled = false;
    let delay = 0;
    let targetTimeStr = '';
    if (argsTime) {
        const timeRegex = /^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/;
        if (!timeRegex.test(argsTime)) {
            return m.reply('❌ *Format waktu salah!*\nGunakan format *HH:MM* 24 jam.\nContoh: `.close 22:00` atau ketik `.close` untuk langsung menutup.');
        }

        const [hours, minutes] = argsTime.split(':').map(Number);
        const sekarangWIB = new Date(new Date().toLocaleString("en-US", { timeZone: "Asia/Jakarta" }));
        const targetWIB = new Date(sekarangWIB.getFullYear(), sekarangWIB.getMonth(), sekarangWIB.getDate(), hours, minutes, 0, 0);
        if (targetWIB.getTime() <= sekarangWIB.getTime()) {
            targetWIB.setDate(targetWIB.getDate() + 1);
        }

        delay = targetWIB.getTime() - sekarangWIB.getTime();
        isScheduled = true;
        targetTimeStr = argsTime;
    }

    let settextclose = global.datagc[from]?.text_close;
    let usertag = `@${m.sender.split("@")[0]}`;

    // Handle @tagreply (butuh validasi reply dulu)
    if (settextclose && settextclose.includes('@tagreply')) {
        if (m.quoted) {
            let userreply = `@${m.quoted.sender.split("@")[0]}`;
            settextclose = settextclose.replace('@tagreply', userreply);
        } else {
            return m.reply(`Anda menggunakan @tagreply, anda harus mereply pesan seseorang untuk mengetag nya`);
        }
    }

    // Gunakan default kalau belum ada custom text
    if (!settextclose) {
        settextclose = `‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎‎  ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎⣠⣶⣶⣶⣦  
‎ ‎‎ ⣠⣤⣤⣄⣀⣾⣿⠟⠛⠻⢿⣷ 
⡇⣿⡿⠛⠙⠻⣿⣿⠁‎ ‎ ‎‎ ⣶⢿⡇
⢿⣿⣇‎ ‎ ‎⠁ ⠏‎ ‎  𝅄 ׄ‎ ‎ ‎*𝖼𝗅𝗈𝗌𝖾𝖉 𝗅𝖾𝗍𝗍𝖾𝗋* ( 🔒 ) 마감   ֹ  ׅ  ꒱꒱
‎ ‎ ‎ ‎ ‎ 〔 #time 〕𝗍𝗂𝗆𝖾 𝖿𝗈𝗋 .. ⓘ ׄ 𝅄 *𝖼𝗅𝗈𝗌𝖾*
‎ ‎ ‎‎  ‎ ‎ ‎ ‎ ‎ ┈─┈──┈─┈ ‎ ׅ ‎ 🎀 ‎ ׅ ‎┈─┈──┈─┈
 ‎ 
‎ ‎ ‎ ‎ ‎ *#group*  ° 𝗌𝖾𝖾 𝗒𝗈𝗎‎ 𝗌𝗈𝗈𝗇
‎ ‎‎ ‎ ‎  ‎ ‎ ⊂⊃ ‎‎ 종료  ׄ 𝅄 𝗍𝗁𝖆𝗇𝖐'𝗌 𝖿𝗈𝗋 𝗌𝗁𝗈𝗉𝗉𝗂𝗇𝗀 𝗍𝗈𝖉𝖆𝗒`;
    }

    // Proses SEMUA tag (@... dan #...) lewat applyTags
    settextclose = applyTags(settextclose, {
        groupName,
        usertag,
        jam: jamnya,
        menit: menitnya,
        detik: detiknya,
        hari: harinya,
        tanggal: tanggalnya,
        bulan: bulannya,
        tahun: tahunnya,
        namabulan: namabulannya
    });

    const targetGroupId = from;
    if (isScheduled) {
        m.reply(`⏳ *JADWAL DIATUR (WIB)*\n\nGrup ini akan ditutup oleh bot secara otomatis pada pukul *${targetTimeStr} WIB*.\n_(Jangan restart bot sebelum jam tersebut)_`);
        setTimeout(async () => {
            try {
                await lenwy.groupSettingUpdate(targetGroupId, 'announcement');
                await lenwy.sendMessage(targetGroupId, { text: settextclose, mentions: [m.sender] });
            } catch (err) {
                console.error('Gagal mengeksekusi close otomatis:', err);
            }
        }, delay);

    } else {
        await lenwy.groupSettingUpdate(targetGroupId, 'announcement')
            .then((res) => lenwy.sendMessage(targetGroupId, { text: settextclose, mentions: [m.sender] }, { quoted: m }))
            .catch((err) => m.reply(jsonformat(err)));
    }
}
break;

case 'open': {
    if (!m.isGroup) return m.reply(mess.group);
    if (!isAdmins) return m.reply(mess.admin);
    if (!isBotAdmins) return m.reply(mess.botAdmin);

    const argsTime = q ? q.trim() : "";
    let isScheduled = false;
    let delay = 0;
    let targetTimeStr = '';
    if (argsTime) {
        const timeRegex = /^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/;
        if (!timeRegex.test(argsTime)) {
            return m.reply('❌ *Format waktu salah!*\nGunakan format *HH:MM* 24 jam.\nContoh: `.open 12:00` atau ketik `.open` untuk langsung membuka.');
        }

        const [hours, minutes] = argsTime.split(':').map(Number);
        const sekarangWIB = new Date(new Date().toLocaleString("en-US", { timeZone: "Asia/Jakarta" }));
        const targetWIB = new Date(sekarangWIB.getFullYear(), sekarangWIB.getMonth(), sekarangWIB.getDate(), hours, minutes, 0, 0);

        if (targetWIB.getTime() <= sekarangWIB.getTime()) {
            targetWIB.setDate(targetWIB.getDate() + 1);
        }

        delay = targetWIB.getTime() - sekarangWIB.getTime();
        isScheduled = true;
        targetTimeStr = argsTime;
    }

    let settextopen = global.datagc[m.chat]?.text_open;
    let usertag = `@${m.sender.split("@")[0]}`;

    // Handle @tagreply (butuh validasi reply dulu)
    if (settextopen && settextopen.includes('@tagreply')) {
        if (m.quoted) {
            let userreply = `@${m.quoted.sender.split("@")[0]}`;
            settextopen = settextopen.replace('@tagreply', userreply);
        } else {
            return m.reply(`Anda menggunakan @tagreply, anda harus mereply pesan seseorang untuk mengetag nya`);
        }
    }

    // Gunakan default kalau belum ada custom text
    if (!settextopen) {
        settextopen = `‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎‎  ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎⣠⣶⣶⣶⣦  
‎ ‎‎ ⣠⣤⣤⣄⣀⣾⣿⠟⠛⠻⢿⣷ 
⡇⣿⡿⠛⠙⠻⣿⣿⠁‎ ‎ ‎‎ ⣶⢿⡇
⢿⣿⣇‎ ‎ ‎⠁ ⠏‎ ‎  𝅄 ׄ‎ ‎ ‎*𝗅𝗈𝗏𝖾's 𝗅𝖾𝗍𝗍𝖊𝗋* ( ✉️ ) 사랑   ֹ  ׅ  ꒱꒱
‎ ‎ ‎ ‎ ‎ 〔 #time 〕𝗍𝗂𝗆𝖾 𝖿𝗈𝗋 .. ⓘ ׄ 𝅄 *𝗈𝗉𝖾𝗇*
‎ ‎ ‎‎  ‎ ‎ ‎ ‎ ‎ ┈─┈──┈─┈ ‎ ׅ ‎ 🎀 ‎ ׅ ‎┈─┈──┈─┈
 ‎ 
‎ ‎ ‎ ‎ ‎ *#group*  ° 𝗂𝗇𝖋𝗂𝗇𝗂𝗍𝗒‎ 𝖿𝗈𝗋 𝗌𝗁𝗈𝗉𝗉𝗂𝗇𝗀
‎ ‎‎ ‎ ‎  ‎ ‎ ⊂⊃ ‎‎ 판매  ׄ 𝅄 𝗅𝖾𝗍'𝗌 𝗁𝖆𝗏𝖾 𝖆 𝗍𝗋𝖆𝗇𝗌𝖆𝖈𝗍𝗂𝗈𝗇`;
    }

    // Proses SEMUA tag (@... dan #...) lewat applyTags
    settextopen = applyTags(settextopen, {
        groupName,
        usertag,
        jam: jamnya,
        menit: menitnya,
        detik: detiknya,
        hari: harinya,
        tanggal: tanggalnya,
        bulan: bulannya,
        tahun: tahunnya,
        namabulan: namabulannya
    });

    const targetGroupId = from;
    if (isScheduled) {
        m.reply(`⏳ *JADWAL DIATUR (WIB)*\n\nGrup ini akan dibuka oleh bot secara otomatis pada pukul *${targetTimeStr} WIB*.\n_(Jangan restart bot sebelum jam tersebut)_`);

        setTimeout(async () => {
            try {
                await lenwy.groupSettingUpdate(targetGroupId, 'not_announcement');
                await lenwy.sendMessage(targetGroupId, { text: settextopen, mentions: [m.sender] });
            } catch (err) {
                console.error('Gagal mengeksekusi open otomatis:', err);
            }
        }, delay);

    } else {
        await lenwy.groupSettingUpdate(targetGroupId, 'not_announcement')
            .then((res) => lenwy.sendMessage(targetGroupId, { text: settextopen, mentions: [m.sender] }, { quoted: m }))
            .catch((err) => m.reply(jsonformat(err)));
    }
}
break;

case 'setopen': {
if (!m.isGroup) return m.reply(mess.group)
if (!isAdmins) return m.reply(mess.admin)
let teks = text ? text : ''
await updateTextOpen(m, teks)
m.reply(mess.success)
}
break

case 'setclose': {
if (!m.isGroup) return m.reply(mess.group)
if (!isAdmins) return m.reply(mess.admin)
let teks = text ? text : ''
await updateTextClose(m, teks)
m.reply(mess.success)
}
break        
        
case 'setclosejam': {
    if (!m.isGroup) return m.reply(mess.group);
    if (!isAdmins) return m.reply(mess.admin);
    
    const argsTime = q ? q.trim() : "";
    const timeRegex = /^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/;
    
    if (!argsTime) {
        return m.reply(`❌ *Format waktu salah!*\nContoh: \`.${command} 22:00\``);
    }
    
    if (!timeRegex.test(argsTime)) {
        return m.reply(`❌ *Format waktu salah!*\nContoh: \`.${command} 22:00\``);
    }
    
    // NORMALISASI KE 2 DIGIT
    const [h, mnt] = argsTime.split(':');
    const normalized = `${h.padStart(2, '0')}:${mnt}`;
    
    if (!global.datagc[m.chat]) global.datagc[m.chat] = {};
    
    // SIMPAN JID YANG NGETIK COMMAND (PENTING!)
    global.datagc[m.chat]['jadwal_close'] = normalized;
    global.datagc[m.chat]['jadwal_close_last'] = '';
    global.datagc[m.chat]['jadwal_close_triggerby'] = m.sender; // Simpan JID yang ngetik
    
    saveGroupDB(global.datagc);
    
    m.reply(`✅ Jadwal *CLOSE* otomatis diset ke *${normalized} WIB* setiap hari.\n💡 Bot akan menutup grup dan mention kamu saat jam ${normalized}`);
}
break;

case 'setopenjam': {
    if (!m.isGroup) return m.reply(mess.group);
    if (!isAdmins) return m.reply(mess.admin);
    
    const argsTime = q ? q.trim() : "";
    const timeRegex = /^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/;
    
    if (!argsTime) {
        return m.reply(`❌ *Format waktu salah!*\nContoh: \`.${command} 09:00\``);
    }
    
    if (!timeRegex.test(argsTime)) {
        return m.reply(`❌ *Format waktu salah!*\nContoh: \`.${command} 09:00\``);
    }
    
    // NORMALISASI KE 2 DIGIT
    const [h, mnt] = argsTime.split(':');
    const normalized = `${h.padStart(2, '0')}:${mnt}`;
    
    if (!global.datagc[m.chat]) global.datagc[m.chat] = {};
    
    // SIMPAN JID YANG NGETIK COMMAND (PENTING!)
    global.datagc[m.chat]['jadwal_open'] = normalized;
    global.datagc[m.chat]['jadwal_open_last'] = '';
    global.datagc[m.chat]['jadwal_open_triggerby'] = m.sender; // Simpan JID yang ngetik
    
    saveGroupDB(global.datagc);
    
    m.reply(`✅ Jadwal *OPEN* otomatis diset ke *${normalized} WIB* setiap hari.\n💡 Bot akan membuka grup dan mention kamu saat jam ${normalized}`);
}
break;
        
case 'hapusjadwal': {
    if (!m.isGroup) return m.reply(mess.group);
    if (!isAdmins) return m.reply(mess.admin);

    const target = (q || '').trim().toLowerCase(); // "open" / "close"
    if (!['open', 'close'].includes(target)) {
        return m.reply('Gunakan: `.hapusjadwal open` atau `.hapusjadwal close`');
    }
    if (global.datagc[m.chat]) {
        delete global.datagc[m.chat][`jadwal_${target}`];
        delete global.datagc[m.chat][`jadwal_${target}_last`];
    }
    if (typeof saveDatabase === 'function') saveDatabase();
    m.reply(`🗑️ Jadwal *${target}* otomatis telah dihapus.`);
}
break;

case 'cekjadwal': {
    if (!m.isGroup) return m.reply(mess.group);
    const data = global.datagc[m.chat] || {};
    m.reply(`📅 *JADWAL OTOMATIS GRUP INI*\n\nOpen : ${data.jadwal_open || '-'} WIB\nClose: ${data.jadwal_close || '-'} WIB`);
}
break;      
        
case 'jeda': {
    if (!m.isGroup) return m.reply(mess.group)
    if (!isAdmins) return m.reply(mess.admin)
    if (!isBotAdmins) return m.reply(mess.botAdmin)
    if (!args[0]) return m.reply(`*Pilih Waktu:*\n-s = Second\n-m = Minute\n-h = Hour\n-d = Day\n\n*Contoh:*\n${prefix+command} 10m`)
    let timeArg = args[0]
    let timer = toMs(timeArg)
    m.reply(`*Group akan ditutup selama ${timeArg}*`)
    lenwy.groupSettingUpdate(from, 'announcement')
        .then(() => {
            m.reply(`Group telah ditutup selama ${timeArg}. Grup akan dibuka kembali setelah waktu habis.`)
            setTimeout(() => {
                lenwy.groupSettingUpdate(from, 'not_announcement')
                    .then(() => {
                        m.reply(`Group telah dibuka kembali setelah ${timeArg}.`)
                    })
                    .catch(err => {
                        console.error('Error membuka grup:', err)
                        m.reply(`Terjadi kesalahan saat membuka grup kembali.`)
                    })
            }, timer)
        })
        .catch(err => {
            console.error('Error menutup grup:', err)
            m.reply(`Terjadi kesalahan saat menutup grup.`)
        })
}
break

case 'setdesk': {
if (!m.isGroup) return m.reply(mess.group)
if (!isAdmins) return m.reply(mess.admin)
 if (q == 'on'){
await lenwy.groupSettingUpdate(from, 'unlocked').then((res) => m.reply(`Sukses Membuka Edit Info Group 🫡`)).catch((err) => m.reply(jsonformat(err)))
 } else if (q == 'off'){
await lenwy.groupSettingUpdate(from, 'locked').then((res) => m.reply(`Sukses Menutup Edit Info Group 🫡`)).catch((err) => m.reply(jsonformat(err)))
 } else {
 lenwy.sendMessage(m.chat, { image: ppnyauser, caption: ` Silahkan Ketik
Setdesk on
Setdesk off`}, {quoted:m}) 

}
}
break

case 'editsubjek': {
if (!m.isGroup) return m.reply(mess.group)
if (!isBotAdmins) return m.reply(mess.botAdmin)
if (!isAdmins) return m.reply(mess.admin)
if (!text) m.reply('Text nya ?')
await lenwy.groupUpdateSubject(from, text).catch((err) => m.reply(jsonformat(err)))
}
break

case 'editdesk': {
if (!m.isGroup) return m.reply(mess.group)
if (!isBotAdmins) return m.reply(mess.botAdmin)
if (!isAdmins) return m.reply(mess.admin)
if (!text) m.reply('Text Nya ?')
await lenwy.groupUpdateDescription(from, text).catch((err) => m.reply(jsonformat(err)))
}
break

case 'tagall': {
if (!m.isGroup) return m.reply(mess.group)
if (!isAdmins) return m.reply(mess.admin)
let teks = `*Tag All*
🎁 *Pesan : ${q ? q : 'Kosong'}*\n\n`
for (let mem of participants) {
teks += `⨠ @${mem.id.split('@')[0]}\n`
}
lenwy.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, { quoted:m })
}
break

case 'inspect': {
if (isBan) return m.reply('*Lu Di Ban Owner*')
if (!args[0]) return m.reply("Linknya?")
let linkRegex = args.join(" ")
let coded = linkRegex.split("https://chat.whatsapp.com/")[1]
if (!coded) return m.reply("Link Invalid 🤔")
lenwy.query({
tag: "iq",
attrs: {
type: "get",
xmlns: "w:g2",
to: "@g.us"
},
content: [{ tag: "invite", attrs: { code: coded } }]
}).then(async(res) => { 
tekse = `*Group Link Yang Di Inspect*

 *⨠ Nama Group : ${res.content[0].attrs.subject ? res.content[0].attrs.subject : "undefined"}*
 *⨠ Deskripsi Di Ubah : ${res.content[0].attrs.s_t ? moment(res.content[0].attrs.s_t *1000).tz("Asia/Jakarta").format("DD-MM-YYYY, HH:mm:ss") : "undefined"}*
 *⨠ Pembuat Group : ${res.content[0].attrs.creator ? "@" + res.content[0].attrs.creator.split("@")[0] : "undefined"}*
 *⨠ Group Di Buat : ${res.content[0].attrs.creation ? moment(res.content[0].attrs.creation * 1000).tz("Asia/Jakarta").format("DD-MM-YYYY, HH:mm:ss") : "undefined"}*
 *⨠ Total Member : ${res.content[0].attrs.size ? res.content[0].attrs.size : "undefined"} Member*

*⨠ ID Group  : ${res.content[0].attrs.id ? res.content[0].attrs.id : "undefined"}*
🎁 *By ${botname}*`
try {
pp = await lenwy.profilePictureUrl(res.content[0].attrs.id + "@g.us", "image")
} catch {
pp = "https://tse2.mm.bing.net/th?id=OIP.n1C1oxOvYLLyDIavrBFoNQHaHa&pid=Api&P=0&w=153&h=153"
}
lenwy.sendFile(from, pp, "", m, { caption: tekse, mentions: await lenwy.parseMention(tekse) })

})
}
break

case 'inspect2': {
if (isBan) return m.reply('Lu Di Ban Owner')
if (!args[0]) return m.reply("Linknya?")
let linkRegex = args.join(" ")
let coded = linkRegex.split("https://chat.whatsapp.com/")[1]
if (!coded) return reply("Link Invalid")
lenwy.query({
tag: "iq",
attrs: {
type: "get",
xmlns: "w:g2",
to: "@g.us"
},
content: [{ tag: "invite", attrs: { code: coded } }]
}).then(async(res) => { 
tekse = `「 Group Link Yang Di Inspect 」
▸ Nama Group : ${res.content[0].attrs.subject ? res.content[0].attrs.subject : "undefined"}

▸ Deskripsi Di Ubah : ${res.content[0].attrs.s_t ? moment(res.content[0].attrs.s_t *1000).tz("Asia/Jakarta").format("DD-MM-YYYY, HH:mm:ss") : "undefined"}
▸ Pembuat Group : ${res.content[0].attrs.creator ? "@" + res.content[0].attrs.creator.split("@")[0] : "undefined"}
▸ Group Di Buat : ${res.content[0].attrs.creation ? moment(res.content[0].attrs.creation * 1000).tz("Asia/Jakarta").format("DD-MM-YYYY, HH:mm:ss") : "undefined"}
▸ Total Member : ${res.content[0].attrs.size ? res.content[0].attrs.size : "undefined"} Member

▸ ID Group  : ${res.content[0].attrs.id ? res.content[0].attrs.id : "undefined"}@g.us

©By ${botname}`
try {
pp = await lenwy.profilePictureUrl(res.content[0].attrs.id + "@g.us", "image")
} catch {
pp = "https://tse2.mm.bing.net/th?id=OIP.n1C1oxOvYLLyDIavrBFoNQHaHa&pid=Api&P=0&w=153&h=153"
}
lenwy.sendFile(from, pp, "", m, { caption: tekse, mentions: await lenwy.parseMention(tekse) })

})
}
break

case 'afk': {
if (!isAdmins) return m.reply (mess.admin)
if (isBan) return m.reply('⚠️ *Kamu Di Ban Owner*')
if (text.length > 100) return m.reply(`*Maksimal 100 Karakter*`)    
let user = global.db.data.users[m.sender]
user.afkTime = + new Date
user.afkReason = text
lenwy.sendMessage(m.chat, { text: `*${pushname} Sedang AFK*\n⚠️ *Dengan Alasan :* ${text ? text : 'Tidak Ada'}` })
}
break

case 'del':
case 'delete': {
 if (!isAdmins) return m.reply(mess.admin)
 if (!isBotAdmins) return m.reply(mess.botAdmin)
 if (!m.quoted) return m.reply("*Balas Pesan Yang Ingin Dihapus Oleh Bot*")
 let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, "") + "@s.whatsapp.net";
 await lenwy.sendMessage(m.chat, {
 delete: {
 remoteJid: m.chat,
 id: m.quoted.id,
 participant: m.quoted.sender,
 },
 })
}
break

case 'd':
case 'done': {
  if (!m.isGroup) return m.reply(mess.group)
  if (!isAdmins) return m.reply(mess.admin)
  if (!global.datagc[m.chat]) global.datagc[m.chat] = {}
  
  const teksDefault =`⢠⣿⣶⣄⣠⣾⣿⣤ 
⠻⣻⣿⡟⢻⣿⣟⠋‎ ‎ ‎ ‎   　ִ  ♡   ...    
  ⣴⣿  ⁺ִ ‎ d𝖾𝗅𝗂𝖼𝖺𝗍𝖾'𝗌 𝖼𝗁𝖾𝗋𝗒𝗌 🍒 [러운]
 ׄ  ︵ ‎ 𝗒𝗈𝗎𝗋 𝗈𝗋𝖽𝖾𝗋 ‎ ‎ ┈─┈─ ‎ 𐀔‎ ׅ  *done* ◌

‎ ‎ ‎ ╭──┈  ⟅ ׄ 𝗉𝗅𝖾𝖺𝗌𝖾 𝖻𝖾 𝗉𝖺𝗍𝗂𝖾𝗇𝗍 ₊  ..
‎ ‎ ‎ ‎╰──━‎ ‎  𝗍𝗂𝗆𝖾 :〔 *#time* 〕

 ׄꤠ tanggal : #date
 ׄꤠ pesanan : #catatan

 ‎‎ ‎ ‎ 판매  ׄ 𝅄 𝖿𝖺𝗋𝖾𝗐𝖾𝗅𝗅, 𝗁𝖺𝗏𝖾 𝖺 𝗀𝗋𝖾𝖺𝗍 𝖽𝖺𝗒
   ─╼ thanks #tag`

  if (!text && !m.quoted) {
    return m.reply(`╭ ────╮🌸 catatan setting bot’ ! 
╰ ── ❥ ───────╯

⸼ ꤥ‌ ּ ꞌꞋ #date : format tanggal
⸼ ꤥ‌ ּ ꞌꞋ #time : format jam
⸼ ꤥ‌ ּ ꞌꞋ #group : tag group
⸼ ꤥ‌ ּ ꞌꞋ #tag : tag member
⸼ ꤥ‌ ּ ꞌꞋ #catatan : pesan done/proses

        jeanne’ 𝖻! › 𖹭 beauty
             flowers ╯🌸 ╰ 𝖼𝗁𝖾α𝗉

*Cara ubah template:*
Ketik: ${prefix + command} edit <teks barumu>`)
  }

  if (args[0] === 'edit') {
    const newText = args.slice(1).join(' ').trim()
    global.datagc[m.chat].text_done = newText
    fs.writeFileSync('./storage/databaseGroup.json', JSON.stringify(global.datagc, null, 2))
    return m.reply(newText ? mess.success : 'Direset ke bawaan.')
  }
  
 if (!m.quoted) return m.reply('⚠️ *Reply pesan si pemesan*')
  
  const quotedSender = m.quoted.sender
  const quotedText = m.quoted.text || m.quoted.body || m.quoted.conversation || ''
  const query = q ? `*${q}*` : (quotedText ? `*${quotedText}*` : '-')
  
  const tagReply = `@${quotedSender.split('@')[0]}`
  
  let settextdone = global.datagc[m.chat].text_done || teksDefault
  
  const replacers = {
    '#group': groupName,
    '#tag': tagReply,
    '#time': `${jamnya}:${menitnya}:${detiknya} WIB`,
    '#date': `${harinya}, ${tanggalnya} ${namabulannya} ${tahunnya}`,
    '#catatan': query,
    '#simbol': '✦ ✧ ✦ ✧'
  }
  
  for (const [key, value] of Object.entries(replacers)) {
    settextdone = settextdone.replaceAll(key, value)
  }
  
  await lenwy.sendMessage(m.chat, { text: settextdone, mentions: [quotedSender, m.sender] }, { quoted: m })
}
break

case 'p':        
case 'proses': {
  if (!m.isGroup) return m.reply(mess.group)
  if (!isAdmins) return m.reply(mess.admin)
  if (!global.datagc[m.chat]) global.datagc[m.chat] = {}

  const teksDefault = ` ⢠⣿⣶⣄⣠⣾⣿⣤ 
⠻⣻⣿⡟⢻⣿⣟⠋‎ ‎ ‎ ‎   　ִ  ♡   ...    
  ⣴⣿  ⁺ִ ‎ d𝖾𝗅𝗂𝖼𝖺𝗍𝖾'𝗌 𝖼𝗁𝖾𝗋𝗒𝗌 🍒 [러운]
 ׄ  ︵ ‎ 𝗒𝗈𝗎𝗋 𝗈𝗋𝖽𝖾𝗋 ‎ ‎ ┈─┈─ ‎ 𐀔‎ ׅ  *𝗉𝗋𝗈𝖼𝖾𝗌𝗌* ◌

‎ ‎ ‎ ╭──┈  ⟅ ׄ 𝗉𝗅𝖾𝖺𝗌𝖾 𝖻𝖾 𝗉𝖺𝗍𝗂𝖾𝗇𝗍 ₊  ..
‎ ‎ ‎ ‎╰──━‎ ‎  𝗍𝗂𝗆𝖾 :〔 *#time* 〕

 ׄꤠ tanggal : #date
 ׄꤠ pesanan : #catatan

 ‎‎ ‎ ‎ 판매  ׄ 𝅄 𝖿𝖺𝗋𝖾𝗐𝖾𝗅𝗅, 𝗁𝖺𝗏𝖾 𝖺 𝗀𝗋𝖾𝖺𝗍 𝖽𝖺𝗒
   ─╼ thanks #tag`

  if (!text && !m.quoted) {
    return m.reply(`╭ ────╮🌸 catatan setting bot’ ! 
╰ ── ❥ ───────╯

⸼ ꤥ‌ ּ ꞌꞋ #date : format tanggal
⸼ ꤥ‌ ּ ꞌꞋ #time : format jam
⸼ ꤥ‌ ּ ꞌꞋ #group : tag group
⸼ ꤥ‌ ּ ꞌꞋ #tag : tag member
⸼ ꤥ‌ ּ ꞌꞋ #catatan : pesan done/proses

        jeanne’ 𝖻! › 𖹭 beauty
             flowers ╯🌸 ╰ 𝖼𝗁𝖾α𝗉

*Cara ubah template:*
Ketik: ${prefix + command} edit <teks barumu>`)
  }

  if (args[0] === 'edit') {
    const newText = args.slice(1).join(' ').trim()
    global.datagc[m.chat].text_proses = newText
    fs.writeFileSync('./storage/databaseGroup.json', JSON.stringify(global.datagc, null, 2))
    return m.reply(newText ? mess.success : 'Direset ke bawaan.')
  }
  
  if (!m.quoted) return m.reply('⚠️ *Reply pesan si pemesan*')
  
  const quotedSender = m.quoted.sender
 
  const quotedText = m.quoted.text || m.quoted.body || m.quoted.conversation || ''
  const query = q ? `*${q}*` : (quotedText ? `*${quotedText}*` : '-')
  
  const tagReply = `@${quotedSender.split('@')[0]}`
  
  let settextproses = global.datagc[m.chat].text_proses || teksDefault
  
  const replacers = {
    '#group': groupName,
    '#tag': tagReply,
    '#time': `${jamnya}:${menitnya}:${detiknya} WIB`,
    '#date': `${harinya}, ${tanggalnya} ${namabulannya} ${tahunnya}`,
    '#catatan': query,
    '#simbol': '✦ ✧ ✦ ✧'
  }

  for (const [key, value] of Object.entries(replacers)) {
    settextproses = settextproses.replaceAll(key, value)
  }

  await lenwy.sendMessage(m.chat, { text: settextproses, mentions: [quotedSender, m.sender] }, { quoted: m })
}
break

case 'welcome': {
  if (!isAdmins) return m.reply(mess.admin)
  if (!global.db.data.chats[m.chat]) global.db.data.chats[m.chat] = {}
  if (!global.datagc[m.chat]) global.datagc[m.chat] = {}
  
  if (!text) {
    return m.reply(`╭ ────╮🌸 catatan setting bot’ ! 
╰ ── ❥ ───────╯

⸼ ꤥ‌ ּ ꞌꞋ #date : format tanggal
⸼ ꤥ‌ ּ ꞌꞋ #time : format jam
⸼ ꤥ‌ ּ ꞌꞋ #group : tag group
⸼ ꤥ‌ ּ ꞌꞋ #tag : tag member

        jeanne’ 𝖻! › 𖹭 beauty
             flowers ╯🌸 ╰ 𝖼𝗁𝖾α𝗉

*Opsi Fitur:*
- *${prefix + command} on* : mengaktifkan welcome
- *${prefix + command} off* : menonaktifkan welcome
- *${prefix + command} edit <teks>* : mengubah template welcome`)
  }
  
  if (args[0] === 'on') {
    global.db.data.chats[m.chat].wlcm = true
    fs.writeFileSync('./storage/database.json', JSON.stringify(global.db.data, null, 2))
    return m.reply('Fitur Welcome berhasil diaktifkan.')
  }
  
  if (args[0] === 'off') {
    global.db.data.chats[m.chat].wlcm = false
    fs.writeFileSync('./storage/database.json', JSON.stringify(global.db.data, null, 2))
    return m.reply('Fitur Welcome berhasil dinonaktifkan.')
  }
  
  if (args[0] === 'edit') {
    const teksnye = args.slice(1).join(' ').trim()
    global.datagc[m.chat].text_welcome = teksnye
    fs.writeFileSync('./storage/databaseGroup.json', JSON.stringify(global.datagc, null, 2))
    return m.reply(teksnye ? `Teks ${command} berhasil diubah` : `Teks ${command} berhasil direset ke bawaan`)
  }
  
  return m.reply(`Pilihan tidak valid.\nGunakan: on, off, atau edit`)
}
break

case 'left': {
  if (!isAdmins) return m.reply(mess.admin)
  if (!global.db.data.chats[m.chat]) global.db.data.chats[m.chat] = {}
  if (!global.datagc[m.chat]) global.datagc[m.chat] = {}
  
  if (!text) {
    return m.reply(`╭ ────╮🌸 catatan setting bot’ ! 
╰ ── ❥ ───────╯

⸼ ꤥ‌ ּ ꞌꞋ #date : format tanggal
⸼ ꤥ‌ ּ ꞌꞋ #time : format jam
⸼ ꤥ‌ ּ ꞌꞋ #group : tag group
⸼ ꤥ‌ ּ ꞌꞋ #tag : tag member

        jeanne’ 𝖻! › 𖹭 beauty
             flowers ╯🌸 ╰ 𝖼𝗁𝖾α𝗉

*Opsi Fitur:*
- *${prefix + command} on* : mengaktifkan left
- *${prefix + command} off* : menonaktifkan left
- *${prefix + command} edit <teks>* : mengubah template left`)
  }
  
  if (args[0] === 'on') {
    global.db.data.chats[m.chat].left = true
    fs.writeFileSync('./storage/database.json', JSON.stringify(global.db.data, null, 2))
    return m.reply('Fitur Left berhasil diaktifkan.')
  }
  
  if (args[0] === 'off') {
    global.db.data.chats[m.chat].left = false
    fs.writeFileSync('./storage/database.json', JSON.stringify(global.db.data, null, 2))
    return m.reply('Fitur Left berhasil dinonaktifkan.')
  }
  
  if (args[0] === 'edit') {
    const teksnye = args.slice(1).join(' ').trim()
    global.datagc[m.chat].text_left = teksnye
    fs.writeFileSync('./storage/databaseGroup.json', JSON.stringify(global.datagc, null, 2))
    return m.reply(teksnye ? `Teks ${command} berhasil diubah` : `Teks ${command} berhasil direset ke bawaan`)
  }
  
  return m.reply(`Pilihan tidak valid.\nGunakan: on, off, atau edit`)
}
break

case 'tagsubject':
case 'faketag': {
if (!m.isGroup) return m.reply(mess.group)
if (!isAdmins) return m.reply(mess.admin)
if (!q) return m.reply(`Teks Nya Mana Kak?`)
lenwy.sendMessage(m.chat, {
  text: "@"+m.chat,
  contextInfo: {
    mentionedJid: participants.map(a => a.id),
    groupMentions: [{
        groupJid: m.chat,
        groupSubject: q
    }]
   }
})
}
break

case 'setbuttonurl': {
  if (!isAdmins) return
  if (!budy.includes('@')) return m.reply("Harap kirimkan format yang benar: setbuttonurl <key>@<displayName>@<url>")

  let key = text.split('@')[0];
  let displayName = text.split('@')[1];
  let url = text.split('@')[2];

  let _db = readDatabasePayment();

  let paymentData = _db.find(item => item.key === key && item.id === m.chat);
  if (!paymentData) {
      return m.reply(`Key "${key}" tidak ditemukan di grup ini.`);
  }

  let button = {
      name: "cta_url",
      buttonParamsJson: JSON.stringify({
          display_text: displayName, // Nama tombol
          url: url                   // URL yang akan diarahkan ketika tombol ditekan
      })
  };

  if (!paymentData.buttonData) {
      paymentData.buttonData = []; // Inisialisasi jika belum ada buttonData
  }

  paymentData.buttonData.push(button);

  writeDatabasePayment(_db);

  return m.reply(`Tombol URL dengan teks "${displayName}" dan URL "${url}" telah berhasil diset untuk key "${key}".`);
}
break

case 'setbuttoncopy': {
  if (!isAdmins) return
  if (!budy.includes('@')) return m.reply("Harap kirimkan format yang benar: setbuttonurl <key>@<displayName>@<url>")

  let key = text.split('@')[0];
  let displayName = text.split('@')[1];
  let nilaiCopy = text.split('@')[2];
  let _db = readDatabasePayment();

  let paymentData = _db.find(item => item.key === key && item.id === m.chat);
  if (!paymentData) {
      return m.reply(`Key "${key}" tidak ditemukan di grup ini.`);
  }

  let button = {
      name: "cta_copy",
      buttonParamsJson: JSON.stringify({
          display_text: displayName, // Nama tombol
          id: nilaiCopy,             // ID yang bisa diubah sesuai kebutuhan
          copy_code: nilaiCopy      // Teks yang disalin
      })
  };

  if (!paymentData.buttonData) {
      paymentData.buttonData = []; // Inisialisasi jika belum ada buttonData
  }

  paymentData.buttonData.push(button);

  writeDatabasePayment(_db);

  return m.reply(`Tombol salin dengan teks "${nilaiCopy}" telah berhasil diset untuk key "${key}".`);
}
break

case 'setwdpay': {
    if (!isAdmins) return
    if (!text) return m.reply('contoh: setwdpay key@new wording');
    
    let [key, newWording] = text.split('@');
    
    if (!key || !newWording) return m.reply('format yang benar: setwdpay pay@new wording');
    
    let _db = readDatabasePayment();
    
    let payments = _db.filter(item => item.id === m.chat);
    
    if (payments.length === 0) {
        return m.reply("Tidak ada data pembayaran yang ditemukan di grup ini.");
    }
    
    let payment = payments.find(item => item.key === key);
    
    if (!payment) {
        return m.reply(`Key "${key}" tidak ditemukan di grup ini.`);
    }

    payment.paymentData = newWording;

    writeDatabasePayment(_db);

    return m.reply(`Wording untuk key "${key}" berhasil diubah.`);
}
break

case 'delbutton': {
    if (!isAdmins) return
    if (!text) return m.reply('Contoh: delbutton key');
    
    let key = text  
    
    if (!key) return m.reply('Contoh: delbutton key');
    
    let _db = readDatabasePayment();
    
    let payments = _db.filter(item => item.id === m.chat);
    
    if (payments.length === 0) {
        return m.reply("Tidak ada data pembayaran yang ditemukan di grup ini.");
    }
    
    let payment = payments.find(item => item.key === key);
    
    if (!payment) {
        return m.reply(`Key "${key}" tidak ditemukan di grup ini.`);
    }

    payment.buttonData = [];  // Empty the buttonData array

    writeDatabasePayment(_db);

    return m.reply(`Semua tombol untuk key "${key}" berhasil dihapus.`);
}
break

case 'pay': {
  let _db = readDatabasePayment();
  
  let payments = _db.filter(item => item.id === m.chat);
  
  if (payments.length === 0) {
      return m.reply("Tidak ada data pembayaran yang ditemukan di grup ini.");
  }
  
  let missingButtons = [];

  for (let payment of payments) {
      if (!payment.buttonData || payment.buttonData.length === 0) {
          missingButtons.push(payment.key); // Menambahkan key ke array missingButtons
      }
  }

  if (missingButtons.length > 0) {
      return m.reply(`Key "${missingButtons.join(', ')}" belum di setbuttoncopy atau setbuttonurl.`);
  }
  
  async function createImage(filePath) {
      let { imageMessage } = await generateWAMessageContent({
          image: { url: filePath }  // Menggunakan path file lokal
      }, {
          upload: lenwy.waUploadToServer
      });
      return imageMessage;
  }

  let push = payments.map(async (payment) => {
      let imageMessage = await createImage(payment.imageUrl); // Menggunakan imageUrl dari data JSON
      
      return {
          body: proto.Message.InteractiveMessage.Body.fromObject({
              text: payment.paymentData
          }),
          footer: proto.Message.InteractiveMessage.Footer.fromObject({
              text: ``
          }),
          header: proto.Message.InteractiveMessage.Header.fromObject({
              hasMediaAttachment: true,
              imageMessage: imageMessage // Gunakan imageUrl yang ada di dalam data
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
              buttons: payment.buttonData.map(button => ({
                  name: button.name,
                  buttonParamsJson: button.buttonParamsJson
              }))
          })
      };
  });

  let pushCards = await Promise.all(push);

  let bot = generateWAMessageFromContent(m.chat, {
      viewOnceMessage: {
          message: {
              interactiveMessage: proto.Message.InteractiveMessage.fromObject({
                  body: proto.Message.InteractiveMessage.Body.create({
                      text: 'Berikut Daftarnya',
                  }),
                  footer: proto.Message.InteractiveMessage.Footer.create({
                      text: `> ${botname}`,
                  }),
                  header: proto.Message.InteractiveMessage.Header.create({
                      hasMediaAttachment: false
                  }),
                  carouselMessage: proto.Message.InteractiveMessage.CarouselMessage.fromObject({
                      cards: pushCards
                  })
              })
          }
      }
  }, { quoted: m });

  await lenwy.relayMessage(m.chat, bot.message, {
      messageId: bot.key.id
  });
}
break

case 'mutegc': {
  if (!isCreator) return

  let gcList;
  try {
    const data = fs.readFileSync('./storage/gcMuted.json', 'utf-8');
    gcList = JSON.parse(data);
  } catch (error) {
    console.error('Error membaca file gcMuted.json:', error);
    gcList = [];
  }

  let groupId;

  if (m.isGroup) {
    groupId = m.chat;
  } else {
    if (!text) return m.reply(`Kirim link grupnya dulu bang!\nContoh:\n${prefix + command} https://chat.whatsapp.com/xxxxx`)
    let linknya = text
    if (text.includes('?')) linknya = text.split('?')[0]
    try {
      groupId = await getGroupIdFromLink(linknya, lenwy);
    } catch (err) {
      console.error(err);
      return m.reply("Gagal ambil ID grup dari link. Link mungkin tidak valid atau sudah expired.");
    }
  }

  if (gcList.includes(groupId)) return m.reply(`Grup ${groupId} sudah dalam daftar mute.`);

  gcList.push(groupId);
  fs.writeFileSync('./storage/gcMuted.json', JSON.stringify(gcList, null, 2));
  m.reply(`Grup ${groupId} berhasil dimute.`);
}
break

case 'unmutegc': {
  if (!isCreator) return

  let gcList;
  try {
    const data = fs.readFileSync('./storage/gcMuted.json', 'utf-8');
    gcList = JSON.parse(data);
  } catch (error) {
    console.error('Error membaca file gcMuted.json:', error);
    gcList = [];
  }

  let groupId;

  if (m.isGroup) {
    groupId = m.chat;
  } else {
    if (!text) return m.reply(`Kirim link grupnya dulu bang!\nContoh:\n${prefix + command} https://chat.whatsapp.com/xxxxx`);
    let linknya = text
    if (text.includes('?')) linknya = text.split('?')[0]
    try {
      groupId = await getGroupIdFromLink(linknya, lenwy);
    } catch (err) {
      console.error(err);
      return m.reply("Gagal mengambil ID grup dari link. Link mungkin tidak valid atau sudah kadaluarsa.");
    }
  }

  const index = gcList.indexOf(groupId);
  if (index === -1) return m.reply(`Grup ${groupId} tidak ditemukan dalam daftar mute.`);

  gcList.splice(index, 1);
  fs.writeFileSync('./storage/gcMuted.json', JSON.stringify(gcList, null, 2));
  m.reply(`Grup ${groupId} berhasil dihapus dari daftar gcMuted.`);
}
break

//--------------------------------------------------------------------[ ANTI MENU ]--------------------------------------------------------------------//

case 'antilinktt':
case 'antilinkyt':
case 'antiwame':
case 'antilink1':
case 'antilink2':
case 'antitoxic1':
case 'antitoxic2':
case 'antilinkgc1':
case 'antilinkgc2':
case 'antisw1':
case 'antisw2': {
  if (!m.isGroup) return m.reply(mess.group);
  if (!isAdmins && !isCreator) return m.reply(mess.admin);
  if (!isBotAdmins) return m.reply(mess.botAdmin);
  let dbKey = command;

  if (q === 'on') {
      global.db.data.chats[m.chat][dbKey] = true;
      if (['antilink1', 'antilink2', 'antilinkgc1', 'antilinkgc2'].includes(command)) {
          let newLink = await lenwy.groupInviteCode(m.chat);
          global.db.data.chats[m.chat].linkgc = `https://chat.whatsapp.com/${newLink}`;
          fs.writeFileSync('./storage/database.json', JSON.stringify(global.db.data, null, 2));
      }
      if (command.endsWith('1')) {
          let cmd2 = command.replace('1', '2');
          let displayCmd = cmd2.charAt(0).toUpperCase() + cmd2.slice(1);
          return m.reply(`*Berhasil Mengaktifkan ${command}*\n🎁 *Ketik ${displayCmd} Untuk Mengaktifkan Autokick*`);
      }
      return m.reply(`*Berhasil Mengaktifkan ${command}*`);

  } else if (q === 'off') {
      global.db.data.chats[m.chat][dbKey] = false;
      if (['antilink1', 'antilink2', 'antilinkgc1', 'antilinkgc2'].includes(command)) {
          let newLink = await lenwy.groupInviteCode(m.chat);
          global.db.data.chats[m.chat].linkgc = `https://chat.whatsapp.com/${newLink}`;
      }
      fs.writeFileSync('./storage/database.json', JSON.stringify(global.db.data, null, 2));
      return m.reply(`*Menonaktifkan ${command}*`);

  } else {
      return m.reply(`*Ketik ${prefix + command} on/off*`);
  }
}
break
//--------------------------------------------------------------------[ FUN MENU ]--------------------------------------------------------------------//

case 'hai': {
m.reply('*Hallo Juga*')
}
break

case 'malas': {
if (text) return 
const t3xt = require(`./storage/teks/${command}.json`)
const r4andT3xt = t3xt[Math.floor(Math.random() * t3xt.length)]
lenwy.sendMessage(from, { text: r4andT3xt }, { quoted: m })
}
break

case 'assalamualaikum': {
m.reply(`*Waalaikumussalam*`)
}
break

case 'hi': {
m.reply(`*Halo Juga*`)
}
break

case 'huft': case 'hmmph': {
const t3xt = require(`./storage/teks/${command}.json`)
const r4andT3xt = t3xt[Math.floor(Math.random() * t3xt.length)]
lenwy.sendMessage(from, { text: r4andT3xt }, { quoted: m })
}
break

case 'rate': {
if (!q) return m.reply(`*Contoh: ${prefix + command} Penampilan gw*`)
if (text.length > 40) return m.reply(`*Maksimal 40 Karakter*`)
const ra = ['5', '10', '15', '20', '25', '30', '35', '40', '45', '50', '55', '60', '65', '70', '75', '80', '85', '90', '95', '100']
const te = ra[Math.floor(Math.random() * ra.length)]
m.reply(`*Rate : ${q}*\n🎁 *Jawaban : ${te}%*`)
}
break

case 'apakah': {
if (!q) return m.reply(`*Contoh: ${prefix + command} gw lagi marah*`)
if (text.length > 40) return m.reply(`*Maksimal 40 Karakter*`)
const apa = ['Iya', 'Tidak', 'Bisa Jadi', 'Betul']
const kah = apa[Math.floor(Math.random() * apa.length)]
m.reply(`*Pertanyaan : Apakah ${q}*\n🎁 *Jawaban : ${kah}*`)
}
break

case 'kapankah': {
if (!q) return m.reply(`*Contoh: ${prefix + command} gw masuk rsj*`)
if (text.length > 40) return m.reply(`*Maksimal 40 Karakter*`)
const kapan = ['5 Hari Lagi', '10 Hari Lagi', '15 Hari Lagi', '20 Hari Lagi', '25 Hari Lagi', '30 Hari Lagi', '35 Hari Lagi', '40 Hari Lagi', '45 Hari Lagi', '50 Hari Lagi', '55 Hari Lagi', '60 Hari Lagi', '65 Hari Lagi', '70 Hari Lagi', '75 Hari Lagi', '80 Hari Lagi', '85 Hari Lagi', '90 Hari Lagi', '95 Hari Lagi', '100 Hari Lagi', '5 Bulan Lagi', '10 Bulan Lagi', '15 Bulan Lagi', '20 Bulan Lagi', '25 Bulan Lagi', '30 Bulan Lagi', '35 Bulan Lagi', '40 Bulan Lagi', '45 Bulan Lagi', '50 Bulan Lagi', '55 Bulan Lagi', '60 Bulan Lagi', '65 Bulan Lagi', '70 Bulan Lagi', '75 Bulan Lagi', '80 Bulan Lagi', '85 Bulan Lagi', '90 Bulan Lagi', '95 Bulan Lagi', '100 Bulan Lagi', '1 Tahun Lagi', '2 Tahun Lagi', '3 Tahun Lagi', '4 Tahun Lagi', '5 Tahun Lagi', 'Besok', 'Lusa', `Abis Command Ini Juga Lu ${q}`]
const kapankah = kapan[Math.floor(Math.random() * kapan.length)]
m.reply(`*Pertanyaan : Kapankah ${q}*\n🎁 *Jawaban : ${kapankah}*`)
}
break

case 'bisakah': {
if (!q) return m.reply(`*Contoh: ${prefix + command} gw hamil*`)
if (text.length > 40) return m.reply(`*Maksimal 40 Karakter*`)
const bisa = ['Bisa', 'Gak Bisa', 'Gak Bisa Awokawok', 'TENTU KAMU PASTI BISA!!!!']
const ga = bisa[Math.floor(Math.random() * bisa.length)]
m.reply(`*Pertanyaan : Bisakah ${q}*\n🎁 *Jawaban : ${ga}*`)
}
break

case 'bagaimanakah': {
if (!q) return m.reply(`*Contoh: ${prefix + command} gw kuyang*`)
if (text.length > 40) return m.reply(`*Maksimal 40 Karakter*`)
const gimana = ['Ya Begitulah', 'Gak Normal', 'Maaf Bot Tidak Bisa Menjawab', 'Coba Deh Cari Di Gugel', 'Kayaknya Lanjut Part 2', 'Kepo Kamu', 'Gimana Aja']
const ya = gimana[Math.floor(Math.random() * gimana.length)]
m.reply(`*Pertanyaan : Bagaimanakah ${q}*\n🎁 *Jawaban : ${ya}*`)
}
break

case 'gantengcek': case 'cekganteng': {
if (!q) return m.reply(`*Contoh: ${prefix + command} gw*`)
if (text.length > 40) return m.reply(`*Maksimal 40 Karakter*`)
const gan = ['Normal','Ganteng Njir','Ganteng Amat Bang','Jaga Penampilan Ya','Kurang :c','Lumayan','Boleh Juga']
const teng = gan[Math.floor(Math.random() * gan.length)]
m.reply(`*Nama* ${q}\n🎁 *Jawaban : ${teng}*`)
}
break

case 'cantikcek': case 'cekcantik': {
if (!q) return m.reply(`*Contoh: ${prefix + command} gw*`)
if (text.length > 40) return m.reply(`*Maksimal 40 Karakter*`)
const can = ['Normal','Cantik Njir','Cantik Amat Sih','Jaga Penampilan Ya','Kurang :c','Lumayan','Boleh Juga']
const tik = can[Math.floor(Math.random() * can.length)]
m.reply(`*Nama* ${q}\n🎁 *Jawaban : ${tik}*`)
}
break

case 'jodoh': {
if (!m.isGroup) return
let member = participants.map(u => u.id)
let me = m.sender
let jodoh = member[Math.floor(Math.random() * member.length)]
await lenwy.sendMessage(from, { text : `@${me.split('@')[0]} ❤ @${jodoh.split('@')[0]}`, mentions : [me, jodoh] }, { quoted: m })
}
break

case 'jodoh2': {
  if (!m.isGroup) return
  let member = participants.map(u => u.id)
  let me = m.sender
  let jodoh = member[Math.floor(Math.random() * member.length)]
  let msg = generateWAMessageFromContent(m.chat, {
    viewOnceMessage: {
      message: {
          "messageContextInfo": {
            "deviceListMetadata": {},
            "deviceListMetadataVersion": 2
          },
          interactiveMessage: proto.Message.InteractiveMessage.create({
            body: proto.Message.InteractiveMessage.Body.create({
              text: `@${me.split('@')[0]} ❤ @${jodoh.split('@')[0]}`
            }),
            footer: proto.Message.InteractiveMessage.Footer.create({
              text: "HALOO INI FOOTER"
            }),
            header: proto.Message.InteractiveMessage.Header.create({
              title: "HAIII INi header",
              subtitle: "HUEEEEEKKK",
              hasMediaAttachment: false
            }),
            nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
              buttons: [
                {
                  name: "single_select",
                  "buttonParamsJson": JSON.stringify({
                    title:"[ PILIH ]",
                    sections:[{
                      title: "INI JUDUL",

                      rows:[{
                        title: "pay a",
                        id: `pay a`
                      }]
                    }]
                  })
                }
              ],
            }),
            contextInfo: {
            mentionedJid: [me, jodoh], 
            forwardingScore: 9999,
            isForwarded: true
            }
         })
      }
    }
  }, { quoted: m })
  await lenwy.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id
  })
  }
  break

case 'bucin': case 'dare': case 'faktaunik': case 'fml': case 'katabijak': case 'katacinta': case 'katagalau': case 'katahacker': case 'katailham': case 'katasenja': case 'katasindiran': case 'motivasi': case 'nickff': case 'pantun': case 'puisi': case 'quotesislamic': case 'quotespubg': case 'truth': {
if (isBan) return m.reply('⚠️ *Kamu Di Ban Owner*')
const t3xt = require(`./storage/teks/${command}.json`)
const r4andT3xt = t3xt[Math.floor(Math.random() * t3xt.length)]
lenwy.sendMessage(from, { text: r4andT3xt }, { quoted: m })
}
break

case 'quotes': {
if (isBan) return m.reply('⚠️ *Kamu Di Ban Owner*')
var resi = await Quotes()
teks = `\n${global.emoji} *Author: ${resi.author}*\n`
teks = `\n🎁 *Quotes:*\n`
teks = `*${resi.quotes}*\n`
m.reply(teks)
}
break

case 'quotesanime': {
if (isBan) return m.reply('⚠️ *Kamu Di Ban Owner*')
const an1 = JSON.parse(fs.readFileSync("./storage/text/quotesanime.json"))
const r4ndan1 = an1[Math.floor(Math.random() * an1.length)]
const tgt99 = `*Random Quotes Anime*

🍁 *Nama Anime : ${r4ndan1.anime}*
🍁 *Nama Character : ${r4ndan1.character}*
🍁 *Episode : ${r4ndan1.episode}*

🎁 *Quotes : ${r4ndan1.quotes}*`
lenwy.sendMessage(from, { text: tgt99 }, { quoted: m })
}
break

case 'meme': {
var reis = await JalanTikusMeme()
teks = ""
teks += "*Random Meme*\n\n"
teks += `🎁 *Source Meme :* ${reis}`
teks += ""
lenwy.sendMessage(m.chat, { image : { url : reis }, caption: teks }, { quoted:m })
}
break

case 'couple': {
LenwyLD()
await sleep(200)
let anu = await fetchJson('https://raw.githubusercontent.com/iamriz7/kopel_/main/kopel.json')
let random = anu[Math.floor(Math.random() * anu.length)]
lenwy.sendMessage(from, { image: { url: random.male }, caption: `🎁 *Couple Male*` }, {quoted:m})
lenwy.sendMessage(from, { image: { url: random.female }, caption: `🎁 *Couple Female*` }, {quoted:m})
}
break

case 'cwr': {
if (!text) return m.reply('*Format : Cwr [Total Match] [Winrate Saat Ini] [Target Winrate]*\n\n📑 *Contoh : Cwr 1200 67% 89%*')
var cwl = text.split(' ')
if (!cwl || cwl.length !== 3) return m.reply('*Format : Cwr [Total Match] [Winrate Saat Ini] [Target Winrate]*\n\n📑 *Contoh : Cwr 1200 67% 89%*')          
const tMatch = parseFloat(cwl[0])
const tWr = parseFloat(cwl[1])
const wrReq = parseFloat(cwl[2])          
if (isNaN(tMatch) || isNaN(tWr) || isNaN(wrReq)) {
return m.reply('⚠️ *Pastikan Semuanya Berupa Angka*')
}
let tLose = tMatch * (100 - tWr) / 100;
let seratusPersen = tLose * (100 / (100 - wrReq))
let final = seratusPersen - tMatch;
const tekl = `*Winrate Calculator Mobile Legend*

📑 *Data Yang Diberikan*
 *⨠ Total Petandingan : ${tMatch}*
 *⨠ Winrate Saat Ini : ${tWr}%*
 *⨠ Target Winrate : ${wrReq}%*

🎁 *Hasil :*
*Butuh ${Math.round(final)} Pertandingan Tanpa Kalah Untuk Mencapai ${wrReq}% Winrate*`;
m.reply(tekl)
}
break

case 'tebakangka': {
    if (gameState.angkaAcak === null) {
        gameState.angkaAcak = Math.floor(Math.random() * 20) + 1;
        gameState.jumlahTebakan = 0; // Reset jumlah tebakan
        m.reply('Aku sudah memikirkan sebuah angka antara 1-20. Coba tebak!')
    } else {
        const tebakan = parseInt(text)
        if (isNaN(tebakan) || tebakan < 1 || tebakan > 20) {
            return m.reply('Tebakan harus berupa angka antara 1-20.')
        }

        gameState.jumlahTebakan++;

        if (tebakan < gameState.angkaAcak) {
            return m.reply("Tebakan Anda terlalu rendah. Coba lagi!")
        } else if (tebakan > gameState.angkaAcak) {
            return m.reply("Tebakan Anda terlalu tinggi. Coba lagi!")
        } else {
            m.reply(`Selamat! Anda telah menebak angka ${gameState.angkaAcak} dengan ${gameState.jumlahTebakan} tebakan.`)
            gameState.angkaAcak = null;
        }
    }
}
break

case 'readmore': {
m.reply(`*Pemisahnya adalah "|"*\n\n*Contoh:*\n> ${command} Hai, |Nama Saya Adalah ${botname}`)
let [l, r] = text.split`|`
if (!l) l = ''
if (!r) r = ''
lenwy.sendMessage(m.chat, {text: l + readmore + r}, {quoted: m})
}
break

case 'cekkhodam':
case 'cekkodam': {
if (!q) return m.reply(`*Contoh: ${prefix + command} gw*`)
if (text.length > 40) return m.reply(`*Maksimal 40 Karakter*`)
const tik = await (await fetch(`https://${global.api.ham.domain}/primbon/cekkhodam?apikey=${global.api.ham.apikey}&name=${q}`)).json()
m.reply(tik.result.message)
}
break

case 'pantun': {
    try {
        let response = await axios.get('https://apis.xyrezz.online-server.biz.id/api/pantun');
        let pantunList = response.data;
        let randomIndex = Math.floor(Math.random() * pantunList.length);
        let randomPantun = pantunList[randomIndex];

        m.reply(randomPantun.trim());
    } catch (error) {
        console.error(error);
        m.reply('Terjadi kesalahan saat memuat pantun.');
    }
}
break

//--------------------------------------------------------------------[ TOOLS MENU ]--------------------------------------------------------------------//

case 'kalkulator':
case 'calculator': {
    if (!q) return m.reply(`*Contoh:*
> kalkulator 12/2
> kalkulator 12*2
> kalkulator 12+2
> kalkulator 12-2`)

    const operator = q.match(/[+\-*/]/)?.[0]
    if (!operator) return m.reply('*Operator tidak valid!*')

    const [a, b] = q.split(operator).map(x => Number(x.trim()))
    if (isNaN(a) || isNaN(b)) return m.reply('*Input harus berupa angka!*')
    if (operator === '/' && b === 0) return m.reply('*Pembagian dengan nol tidak diperbolehkan!*')

    const hasil = {
        '+': a + b,
        '-': a - b,
        '*': a * b,
        '/': a / b
    }[operator]

    m.reply(`🎁 *Hasil:* ${hasil}`)
}
break

case 'createqr': {
if (!text) return m.reply(`*Contoh : Createqr ${botname}*`)
LenwyLD()
await sleep(200)
const qrcode = require('qrcode')
const qyuer = await qrcode.toDataURL(text, { scale: 8 })
let data = new Buffer.from(qyuer.replace('data:image/png;base64,', ''), 'base64')
lenwy.sendMessage(from, { image: data, caption: mess.success }, { quoted: m })
}
break

case 'detectqr': {
LenwyLD()
await sleep(200)
try {
mee = await lenwy.downloadAndSaveMediaMessage(quoted)
mem = await uploader60Minute(mee)
const res = await fetch(`http://api.qrserver.com/v1/read-qr-code/?fileurl=${mem}`)
const data = await res.json()
  LenwyLD()
  await sleep(200) 
m.reply(util.format(data[0]))
} catch (err) {
m.reply(`*Mana Qrnya?*`)
}
}
break

case 'hdvid':
case 'hdvidio':
case 'hdvideo': {
  const who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? lenwy.user.jid : m.sender;
  const q = m.quoted ? m.quoted : m;
  const mime = (q.msg || q).mimetype || '';

  if (!mime) return m.reply(`Videonya mana?`)
  if (!/video/.test(mime)) {
    return m.reply(`Kirim/kutip video dengan caption ${prefix + command}`)
  }

  LenwyLD()
  await sleep(200)
  let media = await q.download()
let video = Math.floor(Math.random() * 100) + 1;

  const inputFilePath = `./input${video}.mp4`;
  fs.writeFileSync(inputFilePath, media)

  const outputFilePath = `./output${video}.mp4`;
  const dir = './';
  if (!fs.existsSync(dir)){
      fs.mkdirSync(dir)
  }

  const ffmpegCommand = `ffmpeg -i ${inputFilePath} -vf "hqdn3d=1.5:1.5:6:6,unsharp=3:3:0.6,eq=brightness=0.05:contrast=1.1:saturation=1.05" -vcodec libx264 -preset slower -crf 22 -acodec copy -movflags +faststart ${outputFilePath}`;

  exec(ffmpegCommand, (error, stdout, stderr) => {
    if (error) {
      console.error(`Error: ${error.message}`)
      return
    }
    console.log(`stdout: ${stdout}`)
    console.error(`stderr: ${stderr}`)
    lenwy.sendMessage(m.chat, { caption: `_Video berhasil ditingkatkan kualitasnya_`, video: { url: outputFilePath } }, { quoted: m })
    fs.unlinkSync(inputFilePath)
  })
}
break

case 'hd':
case 'hdr':
case 'remini': {
 if (!quoted) return m.reply(`Fotonya Mana?`)
 if (!/image/.test(mime)) return m.reply(`Fotonya Mana?`)
 await LenwyLD()
 try {
 let media = await lenwy.downloadAndSaveMediaMessage(quoted)
 let anu = await uploader60Minute(media)
 let result = (util.format(anu))
 console.log(anu)
 await lenwy.sendMessage(m.chat, { image: { url: `https://api.nexray.eu.cc/tools/v1/enhancer?url=${result}` }, caption: 'SUCCESS ✅' }, { quoted: m })
 } catch (e) {
 console.error(e);
 return m.reply('Error, Coba Pakai hd2')
 }
}
break

case 'hd2':
case 'hdr2':
case 'remini2': {
if (!quoted) return m.reply('Fotonya Mana?')
if (!/image/.test(mime)) return m.reply('Fotonya Mana?')
LenwyLD()
let media = await lenwy.downloadAndSaveMediaMessage(quoted)
let anu = await uploader60Minute(media)
let result = util.format(anu)
try {
 await lenwy.sendMessage(m.chat, { image: { url: `https://api.nexray.eu.cc/tools/upscale?url=${result}&resolusi=2` }, caption: 'Selesai' }, { quoted: m })
} catch {
 return m.reply('Error, Coba Pakai hd3')
}
}
break

case 'hd3':
case 'hdr3':
case 'remini3': {
if (!quoted) return m.reply(`Fotonya Mana?`)
if (!/image/.test(mime)) return m.reply(`Fotonya Mana?`)
LenwyLD()
let media = await lenwy.downloadAndSaveMediaMessage(quoted)
let anu = await uploader60Minute(media)
let result = (util.format(anu))
try {
 await lenwy.sendMessage(m.chat,{ image:{ url: `https://api.nexray.eu.cc/tools/v1/upscale?url=${result}` }, caption:'Selesai' },{ quoted: m })
} catch (e) {
 return m.reply('Error, Coba Pakai hd4')
}
}
break

case 'hd4':
case 'hdr4':
case 'remini4': {
if (!quoted) return m.reply(`Fotonya Mana?`)
if (!/image/.test(mime)) return m.reply(`Fotonya Mana?`)
LenwyLD()
let media = await lenwy.downloadAndSaveMediaMessage(quoted)
let anu = await uploader60Minute(media)
let result = (util.format(anu))
try {
  await lenwy.sendMessage(m.chat,{ image:{ url: `https://api.nexray.eu.cc/tools/v3/upscale?url=${result}` }, caption:'Selesai' },{ quoted: m })
} catch (e) {
  return m.reply('Error, Coba Pakai hd5')
}
}
break

case 'hd5':
case 'hdr5':
case 'remini5': {
if (!quoted) return m.reply(`Fotonya Mana?`)
if (!/image/.test(mime)) return m.reply(`Fotonya Mana?`)
LenwyLD()
let media = await lenwy.downloadAndSaveMediaMessage(quoted)
let anu = await uploader60Minute(media)
let result = (util.format(anu))
try {
  const { data } = await axios.get(`https://api.vreden.my.id/api/v1/artificial/imglarger/enhance?url=${result}`, { headers: { 'User-Agent': 'Mozilla/5.0' } })
  console.log(data.result)
  await lenwy.sendMessage(m.chat,{ image:{ url: data.result.download }, caption:'Selesai' },{ quoted: m })
} catch (e) {
  return m.reply('Error')
}
}
break

case 'skinswap': {
  if (!quoted) return m.reply(`Fotonya Mana?`)
  if (!/image/.test(mime)) return m.reply(`Fotonya Mana?`)

  let color_Skin = ["black", "pink", "green", "blue", "purple", "red", "gold", "silver", "brown", "orange"]

  if (!color_Skin.includes(text.toLowerCase())) {
      return m.reply(`Warna *${text}* tidak tersedia!\nGunakan salah satu dari:\n${color_Skin.join(', ')}`)
  }

  LenwyLD()
  await sleep(200)
  let media = await lenwy.downloadAndSaveMediaMessage(quoted)
  let anu = await uploader60Minute(media)
  let result = (util.format(anu))
  try {
      const result2 = await (await fetch(`https://${global.api.maelyn.domain}/api/img2img/skinswap?url=${result}&style=${text.toLowerCase()}`, {
          headers: {
              'x-maelyn-auth': global.api.maelyn.apikey
          }
      })).json()
      await lenwy.sendMessage(m.chat, { image: { url: result2.result }, caption: 'Selesai' }, { quoted: m })
  } catch (e) {
      console.log(e)
      return m.reply('Error saat proses skinswap!')
  }
}
break

case 'ocr': {
if (!quoted) return m.reply(`Fotonya Mana?`)
if (!/image/.test(mime)) return m.reply(`Fotonya Mana?`)
try{
let media = await lenwy.downloadAndSaveMediaMessage(quoted)
let anu = await uploader60Minute(media)
let result = (util.format(anu))
const proses = await (await fetch(`https://deoberon-api.vercel.app/tools/ocr?url=${result}`)).json()
let teks = proses.result
await lenwy.sendMessage(m.chat, { text: `Hasilnya: ${teks}` }, { quoted: m})
} catch (error) {
console.error(error)
m.reply('Error')
}
}
break

case 'removebg':
case 'nobg': {
if (!quoted) return m.reply(`Fotonya Mana?`)
if (!/image/.test(mime)) return m.reply(`Mana Fotonya?`)
LenwyLD()
let media = await lenwy.downloadAndSaveMediaMessage(quoted)
let anu = await uploader60Minute(media)
let result = (util.format(anu))
const proses = await (await fetch(`https://${global.api.ham.domain}/tools/removebg?apikey=${global.api.ham.apikey}&url=${result}`)).json()
console.log(proses)
await lenwy.sendMessage(m.chat, { image: { url: proses.result.url }, caption: '🎁 *Removebg Selesai*'}, { quoted: m })
}
break

case 'qc': {
    if (!q) return m.reply(`*Contoh :* Qc white Lenwy\n🎁 *Kode Warna:* Qckode`)
    if (q.length > 400) return m.reply('*Maksimal 400 Karakter*')

    const [color, ...msg] = q.split(' ')
    const message = msg.join(' ')
    if (!message) return m.reply('*Teks tidak boleh kosong!*')

    const colors = {
        pink: '#f68ac9',
        blue: '#6cace4',
        red: '#f44336',
        green: '#4caf50',
        yellow: '#ffeb3b',
        purple: '#9c27b0',
        darkblue: '#0d47a1',
        lightblue: '#03a9f4',
        ash: '#9e9e9e',
        orange: '#ff9800',
        black: '#000000',
        white: '#ffffff',
        teal: '#008080',
        lightpink: '#ffc0cb',
        chocolate: '#a52a2a',
        salmon: '#ffa07a',
        magenta: '#ff00ff',
        tan: '#d2b48c',
        wheat: '#f5deb3',
        deeppink: '#ff1493',
        fire: '#b22222',
        lenwyblue: '#00bfff',
        brightlenwyblue: '#1e90ff',
        hotpink: '#ff69b4',
        lightlenwyblue: '#87ceeb',
        seagreen: '#20b2aa',
        darkred: '#8b0000',
        orangered: '#ff4500',
        cyan: '#48d1cc',
        violet: '#ba55d3',
        mossgreen: '#00ff7f',
        darkgreen: '#008000',
        navyblue: '#191970',
        darkorange: '#ff8c00',
        darkpurple: '#9400d3',
        fuchsia: '#ff00ff',
        darkmagenta: '#8b008b',
        darkgray: '#2f4f4f',
        peachpuff: '#ffdab9',
        darkishgreen: '#bdb76b',
        darkishred: '#dc143c',
        goldenrod: '#daa520',
        darkishgray: '#696969',
        darkishpurple: '#483d8b',
        gold: '#ffd700',
        silver: '#c0c0c0'
    }

    const backgroundColor = colors[color]
    if (!backgroundColor) {
        return m.reply(
            '☘ *Kode Warna Tidak Ditemukan*\n' +
            '🎁 Contoh : Qc white Lenwy\n' +
            '⚠ Gunakan huruf kecil'
        )
    }

    const obj = {
        type: 'quote',
        format: 'png',
        backgroundColor,
        width: 512,
        height: 768,
        scale: 2,
        messages: [{
            entities: [],
            avatar: true,
            from: {
                id: 1,
                name: pushname,
                photo: {
                    url: await lenwy.profilePictureUrl(m.sender, 'image')
                        .catch(() => 'https://telegra.ph/file/6880771a42bad09dd6087.jpg')
                }
            },
            text: message,
            replyMessage: {}
        }]
    }

    const res = await axios.post('https://bot.lyo.su/quote/generate', obj)
    const buffer = Buffer.from(res.data.result.image, 'base64')

    await lenwy.sendImageAsSticker(m.chat, buffer, m, { packname: global.packname, author: global.author })
}
break

case 'qckode': {
m.reply(`📦 Kode Warna Qc
 *⨠ Pink*
 *⨠ Blue*
 *⨠ Red*
 *⨠ Green*
 *⨠ Yellow*
 *⨠ Purple*
 *⨠ Darkblue*
 *⨠ Lightblue*
 *⨠ Ash*
 *⨠ Orange*
 *⨠ Black*
 *⨠ White*
 *⨠ Teal*
 *⨠ Lightpink*
 *⨠ Chocolate*
 *⨠ Salmon*
 *⨠ Magenta*
 *⨠ Tan*
 *⨠ Wheat*
 *⨠ Deeppink*
 *⨠ Fire*
 *⨠ lenwyblue*
 *⨠ Safron*
 *⨠ Brightlenwyblue*
 *⨠ Hotpink*
 *⨠ Lightlenwyblue*
 *⨠ Seagreen*
 *⨠ Darkred*
 *⨠ Orangered*
 *⨠ Cyan*
 *⨠ Violet*
 *⨠ Mossgreen*
 *⨠ Darkgreen*
 *⨠ Navyblue*
 *⨠ Darkorange*
 *⨠ Darkpurple*
 *⨠ Fuchsia*
 *⨠ Darkmagenta*
 *⨠ Darkgray*
 *⨠ Peachpuff*
 *⨠ Blackishgreen*
 *⨠ Darkishred*
 *⨠ Goldenrod*
 *⨠ Darkishgray*
 *⨠ Darkishpurple*
 *⨠ Gold*
 *⨠ Silver*

⚠️ Kalo Ada Error Bisa Chat Owner Ya
`)
}
break

case 'img2txt':
if (!/image/.test(mime)) return m.reply(`Gambarnya Mana?`)
if (/image/.test(mime)) {
LenwyLD()
let mee = await lenwy.downloadAndSaveMediaMessage(quoted)
let mem = await uploader60Minute(mee)
let res = await (await fetch(`https://itzpire.com/tools/img2text?url=${mem}`)).json()
let result = res.result
lenwy.sendMessage(m.chat,{image:{url: mem}, caption:`${result}`},{quoted: m})
}
break

case 'txt2img':
case 'texttoimage':
case 'tekstoimage':
case 'text2image':
case 'teks2image':
case 'txt2image': {
    if (!q) return m.reply(`*Mau Gambar Apa?*`)

    LenwyLD
    await sleep(200)


    try {
        const apiUrl = `https://endpoint.web.id/ai/txt2img?key=315602&prompt=${encodeURIComponent(q)}`;

        let response = await fetch(apiUrl)
        let json = await response.json()

        if (json.status && json.code === 200) {
            let imageUrl = json.result.url;

            lenwy.sendMessage(m.chat, { image: { url: imageUrl }, caption: `Gambar untuk prompt: "${q}"` }, { quoted: m })
        } else {
            m.reply(`Gagal mendapatkan gambar. Silakan coba lagi.`)
        }
    } catch (error) {
        console.error('Error:', error)
        m.reply(`Terjadi kesalahan saat memproses permintaan.`)
    }
}
break

case 'geminiimg': {
if (!quoted) return m.reply('Mana Gambarnya?')
m.reply('Sabar Yaa')
if (!/image/.test(mime)) return m.reply("Hanya Support Gambar")
let media = await lenwy.downloadAndSaveMediaMessage(quoted)
let anu = await uploader60Minute(media)
let { data } = await axios.get("https://gmni.vercel.app/api/img?imageUrl="+ anu +"&prompt=" + text)
m.reply(data.text)
}
break

case 'stiker':
case 'sticker':
case 's':
case 'stickers':
case 'sgif': {
 if (isBan) return m.reply('⚠ *Kamu Di Ban Owner*')
 if (!quoted) return m.reply(`Balas Video/Image Dengan Caption ${prefix + command}`)
 if (!/image/.test(mime) && !/video/.test(mime)) return
 if (/image/.test(mime)) {
 var stream = await downloadContentFromMessage(m.quoted? quoted : m.message.imageMessage, 'image');
 var buffer = Buffer.from([]);
 for await(const chunk of stream) {
 buffer = Buffer.concat([buffer, chunk]);
 }
 let buffers = await writeExifImg(buffer, { packname: global.packname, author: global.author });
 await lenwy.sendMessage(from, { sticker: { url: buffers } }, { quoted: m });
 } else if (/video/.test(mime)) {
 var stream = await downloadContentFromMessage(m.quoted? quoted : m.message.videoMessage, 'video');
 var buffer = Buffer.from([]);
 for await(const chunk of stream) {
 buffer = Buffer.concat([buffer, chunk]);
 }
 let buffers = await writeExifVid(buffer, { packname: global.packname, author: global.author });
 await lenwy.sendMessage(from, { sticker: { url: buffers } }, { quoted: m });
 } else {
 m.reply(`Balas gambar/video/sticker dengan caption ${prefix + 'sticker'} \n*(MAKSIMAL 10 DETIK!*)`);
 } 
 }
break

case 'smeme':
case 'stickermeme':
case 'stickmeme': {
let respond = `Kirim/reply image/sticker dengan caption ${prefix + command} text1|text2`
if (!/image/.test(mime)) return
if (!text) return m.reply(respond)
LenwyLD()
await sleep(200)
let atas = text.split('|')[0] ? text.split('|')[0] : '-'
let bawah = text.split('|')[1] ? text.split('|')[1] : '-'
try {
let mee = await lenwy.downloadAndSaveMediaMessage(quoted)
let mem = await uploader60Minute(mee)
let smeme = `https://api.memegen.link/images/custom/${encodeURIComponent(atas)}/${encodeURIComponent(bawah)}.png?background=${mem}`
let awikwok = await lenwy.sendImageAsSticker(m.chat, smeme, m, { packname: global.packname, author: global.author })
await fs.unlinkSync(awikwok)
} catch (e) {
m.reply(mess.error + e)
}
}
break

case 'toimg': {
if (isBan) return m.reply(mess.ban)
try {
  LenwyLD()
  await sleep(200)
if (!quoted) return m.reply ('Reply Image')
if (!/webp/.test(mime)) reply `Balas sticker dengan caption *${prefix + command}*`
let media = await lenwy.downloadAndSaveMediaMessage(quoted)
let ran = await getRandom('.png')
exec(`ffmpeg -i ${media} ${ran}`, (err) => {
fs.unlinkSync(media)
if (err) m.reply(err)
let buffer = fs.readFileSync(ran)
lenwy.sendMessage(from, { image: buffer }, {quoted:m})
fs.unlinkSync(ran)
})
} catch (e) {
    m.reply('[!] pastikan kamu reply stiker yang tidak gerak')
}
}
break

case 'tovid': {
  if (isBan) return m.reply(mess.ban);
  try {
    if (!quoted) return m.reply(`Balas sticker dengan caption *${prefix + command}*`);

    if (!/webp/.test(mime)) return m.reply(`Balas sticker dengan caption *${prefix + command}*`);

    if (/webp/.test(mime)) {
      let media = await lenwy.downloadAndSaveMediaMessage(quoted); // Download sticker
      let ran = await getRandom('.mp4'); // Generate nama file video

      const isAnimated = await isAnimatedWebp(media);
      if (!isAnimated) {
        return m.reply('Sticker yang kamu kirim bukan animasi webp. Harap kirim sticker animasi.');
      }

      exec(`ffmpeg -v error -i ${media} -t 10 -c:v libx264 -pix_fmt yuv420p -f mp4 ${ran}`, (err) => {
        fs.unlinkSync(media); // Hapus file sticker
        if (err) {
          return m.reply(`Terjadi kesalahan saat mengonversi sticker: ${err.message}`);
        }

        let buffer = fs.readFileSync(ran); // Baca file video
        lenwy.sendMessage(from, { video: buffer, caption: 'Sticker converted to video' }, { quoted: m }); // Kirim video hasil konversi
        fs.unlinkSync(ran); // Hapus file video setelah dikirim
      });
    }
  } catch (e) {
    m.reply(`[!] Pastikan kamu reply sticker dengan benar (format sticker GIF atau video). Error: ${e.message}`);
  }
}
break;

case 'ssweb': 
case 'ssdesktop':
case 'ssdesk': {
  if (!q) return m.reply(`*Contoh ${prefix + command} Link Kamu*`)
  try {
      lenwy.sendMessage(from, { image: { url: `https://api.autoresbot.com/api/ssweb?url=${encodeURIComponent(q)}&apikey=4c04faf21fb8524bad4a9cb7` }, caption: mess.success }, { quoted: m })
  } catch (error) {
    console.error('Error saat memanggil API:', error)
    m.reply('Terjadi kesalahan saat memproses permintaan.')
  }
}
break

case 'sswebhp': 
case 'sshp':
case 'sshandphone': {
  if (!q) return m.reply(`*Contoh ${prefix + command} Link Kamu*`)
  const apiUrl = `https://endpoint.web.id/tools/sswebphone?key=315602&url=${encodeURIComponent(q)}`;
  try {
    const response = await axios.get(apiUrl)
    if (response.data.status && response.data.code === 200) {
      const imageUrl = response.data.result;
      lenwy.sendMessage(from, { image: { url: imageUrl }, caption: mess.success }, { quoted: m })
    } else {
      m.reply('Gagal mendapatkan tangkapan layar dari API.')
    }
  } catch (error) {
    console.error('Error saat memanggil API:', error)
    m.reply('Terjadi kesalahan saat memproses permintaan.')
  }
}
break

case 'sstab': {
  if (!q) return m.reply(`*Contoh ${prefix + command} Link Kamu*`)
  const apiUrl = `https://endpoint.web.id/tools/sswebtab?key=315602&url=${encodeURIComponent(q)}`;
  try {
    const response = await axios.get(apiUrl)
    if (response.data.status && response.data.code === 200) {
      const imageUrl = response.data.result;
      lenwy.sendMessage(from, { image: { url: imageUrl }, caption: mess.success }, { quoted: m })
    } else {
      m.reply('Gagal mendapatkan tangkapan layar dari API.')
    }
  } catch (error) {
    console.error('Error saat memanggil API:', error)
    m.reply('Terjadi kesalahan saat memproses permintaan.')
  }
}
break

case 'wm': {
  if (isBan) return m.reply('⚠️ *Kamu Di Ban Owner*')
  if (!quoted) return m.reply(`⚠️ Balas sticker dengan caption ${prefix + command}`)
  if (!text) return m.reply(`Contoh: ${prefix + command} teks_packname`)

  try {
    if (quoted.mtype !== 'stickerMessage') return m.reply(`⚠️ Fitur ini khusus untuk reply ke *sticker*!`);
    const webpBuffer = await quoted.download()
    if (!webpBuffer || webpBuffer.length === 0) return m.reply('⚠️ Gagal download sticker!');

    const img = new Image()
    await img.load(webpBuffer)

    const json = {
      "sticker-pack-id": "com.snowcorp.stickerly.android.stickercontentprovider b5e7275f-f1de-4137-961f-57becfad34f2",
      "sticker-pack-name": text,
      "sticker-pack-publisher": '',
      "emojis": ["🤖"] 
    }

    const exifAttr = Buffer.from([0x49, 0x49, 0x2A, 0x00, 0x08, 0x00, 0x00, 0x00, 0x01, 0x00, 0x41, 0x57, 0x07, 0x00, 0x00, 0x00, 0x00, 0x00, 0x16, 0x00, 0x00, 0x00])
    const jsonBuf = Buffer.from(JSON.stringify(json), 'utf-8')
    const padding = Buffer.alloc(jsonBuf.length % 2 === 1 ? 1 : 0)
    const exif = Buffer.concat([exifAttr, jsonBuf, padding])
    exif.writeUInt32LE(jsonBuf.length, 14)
    img.exif = exif
    const finalStickerBuffer = await img.save(null)
    await lenwy.sendMessage(from, { sticker: finalStickerBuffer }, { quoted: m })
  } catch (err) {
    console.error('Error detail:', err)
    m.reply(`⚠️ Error! ${err.message}`)
  }
}
break

case 'tourl': {
if (!/image/.test(mime) && !/video/.test(mime)) return m.reply(`*Mana Foto Atau Video Nya?*`)
if (/image/.test(mime)) {
LenwyLD()
await sleep(200)
let media = await lenwy.downloadAndSaveMediaMessage(quoted)
let anu = await uploader60Minute(media)
m.reply(util.format(anu))
} else if (/video/.test(mime)) {
  let q = m.quoted ? m.quoted : m;

    let media = await q.download()
    let link = await uploader60Minute(media)
    console.log(link)
    await m.reply(`${link}`)
} else {
m.reply(`Mokad kah? Chat Developer!!!`)
}
}
break

case 'tourl2': {
if (!/image/.test(mime) && !/video/.test(mime)) return m.reply(`*Mana Foto Atau Video Nya?*`)
if (/image/.test(mime)) {
LenwyLD()
await sleep(200)
let media = await lenwy.downloadAndSaveMediaMessage(quoted)
let anu = await uploaderLebih(media)
m.reply(util.format(anu))
} else if (/video/.test(mime)) {
  let q = m.quoted ? m.quoted : m;

    let media = await q.download()
    let link = await uploader60Minute(media)
    console.log(link)
    await m.reply(`${link}`)
} else {
m.reply(`Mokad kah? Chat Developer!!!`)
}
}
break

case 'tourlvid': {
if (!/video/.test(mime)) return m.reply(`*Mana Video Nya?*`)
LenwyLD()
await sleep(200)
let media = await lenwy.downloadAndSaveMediaMessage(quoted)
if (/video/.test(mime)) {
  let q = m.quoted ? m.quoted : m;

    let media = await q.download()
    let link = await uploader60Minute(media)
    await m.reply(`${link}`)
} else if (/video/.test(mime)) {
let anu = await uploader60Minute(media)
m.reply(util.format(anu))
} else {
m.reply(`Mokad kah? Chat Developer!!!`)
}
await fs.unlinkSync(media)
}
break

case 'getname': {
if (qtod === "true") {
namenye = await lenwy.getName(m.quoted.sender)
m.reply(`Namanya: ${namenye}`)
} else if (qtod === "false") {
lenwy.sendMessage(from, {text:"✉️ *Reply Orangnya*"}, {quoted:m})
}
}
break

case 'getpic': {
if (qtod === "true") {
try {
pporg = await lenwy.profilePictureUrl(m.quoted.sender, 'image')
} catch {
pporg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
}
lenwy.sendMessage(from, { image : { url : pporg }, caption:`*Selesai*` }, {quoted:m})
} else if (qtod === "false") {
try {
pporgs = await lenwy.profilePictureUrl(from, 'image')
} catch {
pporgs = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
}
lenwy.sendMessage(from, { image : { url : pporgs }, caption:`*Selesai*` }, {quoted:m})
}
}
break

case 'ffstalk': {
 if (isBan) return m.reply(mess.ban)
 if (!text) return m.reply('*Contoh :*\n> *ffstalk* 587531837')
try {
 let checkerResult = await (await fetch(`https://${global.api.ham.domain}/stalk/ff?apikey=${global.api.ham.apikey}&id=${text}`)).json()
console.log(checkerResult)
 m.reply(`Username: ${checkerResult.result.nickname || '-'}
Region: ${checkerResult.result.region || '-'}
Id: ${text}`)
} catch (e) {
 m.reply('terjadi error :' + e)
}
}
break

case 'mlstalk': {
 if (!q) return m.reply(`Contoh ${prefix + command} 696964467(8770)`)
 let parts = q.split("(");
 let id = parts[0].trim();
 let serverId = parts[1] ? parts[1].replace(")", "").trim() : "";

 let nicknameUser = '-';
 let regionUser = '-';
 let regionFlag = '-';
 let checkerResult = {};

 try {
 checkerResult = await (await fetch(`https://deoberon-api.vercel.app/stalk/mlbb?apikey=merl&userId=${id}&zoneId=${serverId}`)).json();
 } catch (e) {
 console.error('Gagal fetch checkerResult:', e);
 }

 const countryStr = checkerResult.country || '';
 const matchFlag = countryStr.match(/^(.*?)\s*([\u{1F1E6}-\u{1F1FF}]{2})$/u);
 
 if (matchFlag) {
 regionUser = matchFlag[1].trim(); 
 regionFlag = matchFlag[2]; 
 } else {
 regionUser = countryStr || '-';
 }
 
 nicknameUser = checkerResult?.username || '-';
 let topupText = "";
 try {
 let urlFirstTopup = await axios.get(`https://merlapi.xyz/api/gameStalk/mlbb-infodm?id=${id}&zone=${serverId}&apikey=merlapi-cc2a1195e1e81982`);
 let topupJson = urlFirstTopup?.data;

 if (topupJson?.status === true && topupJson?.result) {
 for (let [pkg, status] of Object.entries(topupJson.result)) {
 let statusDisplay = (status === "🔴") ? "❌ Sudah Dibeli" : (status === "🟢") ? "✅ Tersedia" : status;
 topupText += `• ${pkg} 💎: ${statusDisplay}\n`;
 }
 } else {
 topupText += "-\n";
 }
 
 } catch (e) {
 console.error('Gagal fetch firstTopup API Baru:', e);
 topupText += "-\n";
 }

 m.reply(` ࣪ ׅ 𝆹𝅥𝆺𝅥 .. 𖹭 𝐕𝐚𝐥𝐢𝐝𝐚𝐬𝐢 𝐚𝐤𝐮𝐧
╰ ┄ׅ┄─ׂ┄┄ׅ┄ ┈ ┄ׅ┄─ׂ┄┄ 𖹭

◌ ۪ 🌸 ࣪Username: ${nicknameUser}
◌ ۪ 🌸 ࣪Id: ${id}
◌ ۪ 🌸 ࣪Id Server: ${serverId}
◌ ۪ 🌸 ࣪Region: ${regionUser}
◌ ۪ 🌸 ࣪Flag: ${regionFlag}

 ◞🍒˒˓۪ *First Topup:*
╰─┈┈ׄ┈──꯭─꯭┈꯭──┈ִ┈─
${topupText}`);
}
break

case 'jadinyata':
case 'toreal':
case 'toanime':
case 'jadianime': {
    if (!quoted) return m.reply('*Fotonya Mana?*')
    if (!/image/.test(mime)) return m.reply(`*Send/Reply Foto Dengan Caption ${prefix + command}*`)

    const { key } = await lenwy.sendMessage(m.chat, { text: mess.wait }, { quoted: m })
    const type = ['jadinyata', 'toreal'].includes(command) ? 'anime2real' : 'anime2d'

    try {
        const media = await lenwy.downloadAndSaveMediaMessage(quoted)
        const url = await uploader60Minute(media)

        const res = await fetch(`${api.xterm.url}/api/img2img/filters?action=${type}&url=${url}&key=${api.xterm.key}`).then(v => v.json())
        if (!res.status) return m.reply(res.msg || 'Error!')

        let i = 0
        while (i < 55) {
            const s = await fetch(`${api.xterm.url}/api/img2img/filters/batchProgress?id=${res.id}`).then(v => v.json())
            await lenwy.sendMessage(m.chat, { text: s.progress || 'Prepare...', edit: key }, { quoted: m })

            if (s.status === 3) return s.url
                ? lenwy.sendMessage(m.chat, { image: { url: s.url } }, { quoted: m })
                : m.reply('Gambar tidak tersedia. Coba lagi.')

            if (s.status === 4) return m.reply('Terjadi kesalahan. Gunakan gambar lain.')

            await new Promise(r => setTimeout(r, 5000))
            i++
        }
    } catch (e) {
        console.error(e)
        m.reply(e.message || 'Terjadi kesalahan')
    }
}
break

case 'tocyberpunk':
case 'jadicyberpunk': {
    if (isBan) return m.reply(mess.ban)
    if (!quoted) return m.reply('*Fotonya Mana?*')
    if (!/image/.test(mime)) return m.reply(`*Send/Reply Foto Dengan Caption ${prefix + command}*`)

    try {
        m.reply('Process converting image, mohon tunggu...')
        const q = m.quoted || m
        const url = await uploader60Minute(await q.download())
        const res = await fetch(`https://api.nyxs.pw/ai-image/jadicyberpunk?url=${url}`).then(v => v.json())

        lenwy.sendMessage(m.chat, { image: { url: res.result }, caption: 'Nih Bos' }, { quoted: m })
    } catch (e) {
        console.error(e)
        m.reply('Harap coba beberapa saat lagi')
    }
}
break

case 'todreamscape':
case 'jadidreamscape': {
    if (isBan) return m.reply(mess.ban)
    if (!quoted) return m.reply('*Fotonya Mana?*')
    if (!/image/.test(mime)) return m.reply(`*Send/Reply Foto Dengan Caption ${prefix + command}*`)

    try {
        m.reply('Process converting image, mohon tunggu...')
        const q = m.quoted || m
        const url = await uploader60Minute(await q.download())
        const res = await fetch(`https://api.nyxs.pw/ai-image/jadidreamscape?url=${url}`).then(v => v.json())

        lenwy.sendMessage(m.chat, { image: { url: res.result }, caption: 'Nih Bos' }, { quoted: m })
    } catch (e) {
        console.error(e)
        m.reply('Harap coba beberapa saat lagi')
    }
}
break

case 'tocomic':
case 'jadicomic': {
    if (isBan) return m.reply(mess.ban)
    if (!quoted) return m.reply('*Fotonya Mana?*')
    if (!/image/.test(mime)) return m.reply(`*Send/Reply Foto Dengan Caption ${prefix + command}*`)

    try {
        m.reply('Process converting image, mohon tunggu...')
        const q = m.quoted || m
        const url = await uploader60Minute(await q.download())
        const res = await fetch(`https://api.nyxs.pw/ai-image/jadivaporwave?url=${url}`).then(v => v.json())

        lenwy.sendMessage(m.chat, { image: { url: res.result }, caption: 'Nih Bos' }, { quoted: m })
    } catch (e) {
        console.error(e)
        m.reply('Harap coba beberapa saat lagi')
    }
}
break

case 'todonghua':
case 'jadidonghua': {
    if (isBan) return m.reply(mess.ban)
    if (!quoted) return m.reply('*Fotonya Mana?*')
    if (!/image/.test(mime)) return m.reply(`*Send/Reply Foto Dengan Caption ${prefix + command}*`)

    try {
        m.reply('Process converting image, mohon tunggu...')
        const q = m.quoted || m
        const url = await uploader60Minute(await q.download())
        const res = await fetch(`https://api.nyxs.pw/ai-image/jadianime?url=${url}`).then(v => v.json())

        lenwy.sendMessage(m.chat, { image: { url: res.result }, caption: 'Nih Bos' }, { quoted: m })
    } catch (e) {
        console.error(e)
        m.reply('Harap coba beberapa saat lagi')
    }
}
break

case 'todisney':
case 'jadidisney': {
    if (isBan) return m.reply(mess.ban)
    if (!quoted) return m.reply('*Fotonya Mana?*')
    if (!/image/.test(mime)) return m.reply(`*Send/Reply Foto Dengan Caption ${prefix + command}*`)

    try {
        m.reply('Process converting image, mohon tunggu...')
        const q = m.quoted || m
        const url = await uploader60Minute(await q.download())
        const res = await fetch(`https://api.nyxs.pw/ai-image/jadidisney?url=${url}`).then(v => v.json())

        lenwy.sendMessage(m.chat, { image: { url: res.result }, caption: 'Nih Bos' }, { quoted: m })
    } catch (e) {
        console.error(e)
        m.reply('Harap coba beberapa saat lagi')
    }
}
break

case 'toghibli':
case 'jadighibli': {
    if (isBan) return m.reply(mess.ban)
    if (!quoted) return m.reply('*Fotonya Mana?*')
    if (!/image/.test(mime)) return m.reply(`*Send/Reply Foto Dengan Caption ${prefix + command}*`)

    try {
        m.reply('Process converting image, mohon tunggu...')
        const q = m.quoted || m
        const url = await uploader60Minute(await q.download())
        const res = await fetch(`https://api.nyxs.pw/ai-image/jadighibli?url=${url}`).then(v => v.json())

        lenwy.sendMessage(m.chat, { image: { url: res.result }, caption: 'Nih Bos' }, { quoted: m })
    } catch (e) {
        console.error(e)
        m.reply('Harap coba beberapa saat lagi')
    }
}
break

case 'fluxschenell':
case 'flux':
case 'txt2flux':
case 'texttoflux': {
if (isBan) return m.reply(mess.ban)
if (!text) return m.reply(`*Mau Gambar Apa?*`)
LenwyLD()
await sleep(200)
try{
let result = await (await fetch(`https://endpoint.web.id/ai/flux-schnell?key=315602&prompt=${text}`)).json()
lenwy.sendMessage(m.chat, { image: { url: result.result }, caption: `Gambar untuk prompt: "${text}"` }, { quoted: m })
} catch (error) {
m.reply(mess.error)
}
}
break

case 'photoleap':
case 'txt2photoleap':
case 'texttophotoleap': {
    if (isBan) return m.reply(mess.ban)
    if (!text) return m.reply(`*Mau Gambar Apa?*`)
    LenwyLD()
    await sleep(200)
    try {
        let result = await (await fetch(`https://endpoint.web.id/ai/photoleap?key=315602&prompt=${text}`)).json()
        let imageUrl = result.result.result_url;
        lenwy.sendMessage(m.chat, { image: { url: imageUrl }, caption: `Gambar untuk prompt: "${text}"` }, { quoted: m })
    } catch (error) {
        console.error(error)
        m.reply(mess.error)
    }
}
break

case '2waifu':
case 'towaifu':
case 'txt2waifu':
case 'texttowaifu': {
  if (isBan) return m.reply(mess.ban)
  if (!text) return m.reply(`*Mau Gambar Apa?*`)
  LenwyLD()
  await sleep(200)
  try {
      let result = await (await fetch(`https://endpoint.web.id/ai/sdxl-waifu?key=315602&prompt=${text}`)).json()
      let imageUrl = result.result.image;
      lenwy.sendMessage(m.chat, { image: { url: imageUrl }, caption: `Gambar untuk prompt: "${text}"` }, { quoted: m })
  } catch (error) {
      console.error(error)
      m.reply(mess.error)
  }
}
break

case 'tinyurl': {
  if (!text) return m.reply(`*Mana Link Yang Akan Di Pendekkan?*`)

  let urlToShorten = q; // Pastikan q berisi URL yang valid
  let response = await fetch(`https://api.ryzendesu.vip/api/tool/tinyurl?url=${urlToShorten}`)
  
  if (!response.ok) {
      return m.reply(`*Error: ${response.status} ${response.statusText}*`)
  }
  
  let result = await response.json()
  let shortUrl = result.shortUrl;
  m.reply(shortUrl)
}
break

case 'rvo':
case 'readviewonce': {
if (!m.isGroup) return m.reply(mess.group)
if (!isAdmins && !isCreator) return m.reply(mess.admin)
if (!isQuotedViewOnce) return m.reply('*Reply Foto, Video Atau Voice Note Yang Di View Once*')
let type = m.quoted.mtype
let media = await downloadContentFromMessage(quoted, type === "audioMessage" ? "audio" : type === "imageMessage" ? "image" : "video");
let buffer = Buffer.from([])
for await (const chunk of media) {
buffer = Buffer.concat([buffer, chunk])
}
if (/video/.test(type)) {
await lenwy.sendMessage(m.chat, { video: buffer, caption: `Caption: ${m.quoted?.fakeObj?.message.videoMessage.text || ''}` }, {quoted: m})
} else if (/image/.test(type)) {
await lenwy.sendMessage(m.chat, { image: buffer, caption: `Caption: ${m.quoted?.fakeObj?.message.imageMessage.text || ''}` }, {quoted: m})
} else if (/audio/.test(type)) {
await lenwy.sendMessage(m.chat, { audio: buffer, mimetype: 'audio/mp4', ptt: true}, {quoted: m})
}
}
break

case 'tovn': {
  if (!/audio|video/.test(mime)) return m.reply('*Reply ke pesan audio atau video*');

  if (/video/.test(mime)) {
    let media;
    try {
      media = await downloadContentFromMessage(quoted, type === "audioMessage" ? 'audio' : 'video');
    } catch (err) {
      console.log('Error saat download media:', err);
      return m.reply('*Gagal mengunduh media*');
    }
  
    if (!media) {
      return m.reply('*Media tidak valid*');
    }
  
    const tempFilePath = path.join(__dirname, `temp_${Date.now()}.${mime.includes('audio') ? 'mp3' : 'mp4'}`);
    const outputFilePath = path.join(__dirname, `output_${Date.now()}.mp3`);
    let buffer = Buffer.from([]);
  
    try {
      for await (const chunk of media) {
        buffer = Buffer.concat([buffer, chunk]);
      }
      fs.writeFileSync(tempFilePath, buffer);
    } catch (err) {
      console.log('Error saat memproses buffer:', err);
      return m.reply('*Gagal memproses media*');
    }
  
    if (mime.includes('video')) {
      try {
        await new Promise((resolve, reject) => {
          exec(`ffmpeg -i "${tempFilePath}" -vn -acodec libmp3lame -y "${outputFilePath}"`, (err) => {
            if (err) return reject(err);
            resolve();
          });
        });
        buffer = fs.readFileSync(outputFilePath);
      } catch (err) {
        console.log('Error saat konversi video ke audio:', err);
        return m.reply('*Gagal mengonversi video ke audio*');
      } finally {
        fs.unlinkSync(tempFilePath)
        if (fs.existsSync(outputFilePath)) fs.unlinkSync(outputFilePath);
      }
    }
  
    try {
      await lenwy.sendMessage(m.chat, { audio: buffer, mimetype: 'audio/mp4', ptt: true }, { quoted: m });
    } catch (error) {
      console.log('Error saat mengirim pesan:', error);
    }  
  } else if (/audio/.test(mime)) {
    let media;
    try {
      media = await downloadContentFromMessage(quoted, 'audio');
    } catch (err) {
      console.log('Error saat mengunduh media:', err);
      return m.reply('*Gagal mengunduh media. Pastikan Anda mereply ke pesan audio yang valid.*');
    }
  
    let buffer = Buffer.from([]);
    try {
      for await (const chunk of media) {
        buffer = Buffer.concat([buffer, chunk]);
      }
    } catch (err) {
      console.log('Error saat memproses buffer:', err);
      return m.reply('*Gagal memproses audio.*');
    }
  
    if (buffer.length === 0) {
      return m.reply('*Audio kosong atau gagal diproses.*');
    }
  
    try {
      await lenwy.sendMessage(m.chat, {
        audio: buffer,
        mimetype: 'audio/mp4',
        ptt: true
      }, { quoted: m });
    } catch (error) {
      console.log('Error saat mengirim pesan:', error);
      return m.reply('*Gagal mengirim audio.*');
    }
  }
}
break

case 'bingimg': {
await lenwy.sendMessage(m.chat, { react: { text: "🕛",key: m.key,}
})
await lenwy.sendMessage(m.chat, { react: { text: "🕒",key: m.key,}
})
await lenwy.sendMessage(m.chat, { react: { text: "🕕",key: m.key,}
})
await lenwy.sendMessage(m.chat, { react: { text: "🕘",key: m.key,}
})
await lenwy.sendMessage(m.chat, { react: { text: "✅️",key: m.key,}
})
if (!text) return m.reply('Masukan Gambarannya\nContoh:\nAnime cowok memakai baju hitam sedang coding bertuliskan ${botname}')
m.reply('*Proses ini membutuhkan waktu beberapa saat silahkan tunggu*')
try {
let img = await fetchJson(`http://15.235.142.199/api/ai/bingAi?prompt=${text}&apikey=DdUFIJY3sIGZW0g`)
let imgs = img.image
let c = 0
for (let ims of img.image) {
if (c == 0) await lenwy.sendMessage(m.chat, { image: { url: ims }, caption: `*[ V1 ]* Bing ${botname} ☑\n\n${m.isGroup ? '_Sisa Foto Dikirim Di Private Chat_' : ""}` }, { quoted: m })
else await lenwy.sendMessage(m.sender, { image: { url: ims }}, { quoted: m })
c += 4
await sleep(200)
}
} catch {
m.reply('Terjadi kesalahan!')
}
}
break

case 'texttospeech':
case 'tekstospeech':
case 'txt2speech':
case 'tts': {
if (isBan) return m.reply('⚠️ *Kamu Di Ban Owner*')
if (args.length == 0) return m.reply(`*Mo Convert Text Apa Ke Suara?*`)
try {
  let result = await (await fetch(`https://deoberon-api.vercel.app/tools/text-to-speech?text=${q}`)).json()
  let data = result.result
  let dataTts = data.find(u => u.voice_name.toLowerCase() == "eminem")
  lenwy.sendMessage(m.chat, { audio: { url: dataTts.eminem }, mimetype: 'audio/mp4' })
} catch (e) {
m.reply('Error')
console.log(e)
}
}
break

case 'sdxl':
case 'texttoanime':
case 'tekstoanime':
case 'text2anime':
case 'teks2anime':
case 'txt2anime': {
if (!text) return m.reply(`*Mau Gambar Apa?*`)
LenwyLD
await sleep(200)
LenwyLD()
await sleep(200)
try{
let mauGambar = text
let result = await (await fetch(`https://endpoint.web.id/ai/sdxl-anime?key=315602&prompt=${q}`)).json()
lenwy.sendMessage(m.chat, { image: { url: result.result.image }, caption: `Gambar untuk prompt: "${mauGambar}"` }, { quoted: m })
} catch (error) {
m.reply(mess.error)
}
}
break

case 'brat': {
 if (isBan) return m.reply('⚠ *Kamu Di Ban Owner*');
 if (!text) return m.reply(`Penggunaan : ${prefix + command} <teks>`);
 try {
const proses = await (await fetch(`https://${global.api.maelyn.domain}/api/canvas/brat?text=${text}&isvideo=false&speed=medium`,
  {
    method: "GET",
    headers: {
      "x-maelyn-auth": global.api.maelyn.apikey
    }
  }
)).json()
 console.log(proses)
 await lenwy.sendImageAsSticker(from, proses.result.url, m, { packname: global.packname, author: global.author });
 } catch (e) {
 console.log(e);
 await m.reply(`Terjadi kesalahan saat membuat stiker`);
 }
}
break

case 'cekipurl': {
if (!text) return m.reply(`Contoh: ${prefix + command} urlNya\n\n> Note: Tanpa https://`)
if (text.startsWith('https://')) return m.reply(`Note: Tanpa https://`)
  try {
    const address = await dns.lookup(text);
    m.reply(`IPv4 Address of https://${text}: ${address.address}`);
  } catch (err) {
    console.error('Error:', err.message);
  }    
}
break

case 'ttp': {
  if (!q) return m.reply(`Gunakan dengan cara ${command} text\n\nContoh : ${command} lucu abis`)
  if (q.length > 75) return m.reply(`Teksnya terlalu panjang`)
  
  var data = await getBuffer(`https://${global.api.lolhuman.domain}/api/ttp?apikey=${global.api.lolhuman.apikey}&text=${encodeURIComponent(q)}`)
  var rand2 = getRandom('.webp')
  fs.writeFileSync(`./${rand2}`, data)
    exec(`webpmux -set exif ./data.exif ./${rand2} -o ./${rand2}`, async (error) => {
    lenwy.sendMessage(from, { sticker: fs.readFileSync(`./${rand2}`) }, { quoted: m })
    execSync(`rm -rf ./${rand2}.png`)
    fs.unlinkSync(`./${rand2}`)
  })
}
break

case 'attp': {
  if (!q) return m.reply(`Gunakan dengan cara ${command} text\n\nContoh : ${command} lucu abiss`)
  if (q.length > 75) return reply(`Teksnya terlalu panjang`)
            
  var data = await getBuffer(`https://${global.api.lolhuman.domain}/api/attp?apikey=${global.api.lolhuman.apikey}&text=${encodeURIComponent(q)}`)
  var rand2 = getRandom('.webp')
  fs.writeFileSync(`./${rand2}`, data)
  exec(`webpmux -set exif ./data.exif ./${rand2} -o ./${rand2}`, async (error) => {
    lenwy.sendMessage(from, { sticker: fs.readFileSync(`./${rand2}`) }, { quoted: m })
    fs.unlinkSync(`./${rand2}`)
})
}
break

case 'setstick': {
  if (!isAdmins) return m.reply(mess.admin);
  if (!text) return m.reply(`Contoh: Reply foto/sticker dengan caption:\n${prefix + command} (Key)`)
  if (!/image/.test(mime)) return m.reply(`Foto atau Sticker nya Mana?`);

  let nameKey = text
  let groupID = m.chat; // Menggunakan ID grup untuk penyimpanan data
  let imageUrl = await lenwy.downloadAndSaveMediaMessage(quoted, `./storage/data/sticker/${nameKey + groupID}`)
  let db_sticker = JSON.parse(fs.readFileSync('./storage/databaseSticker.json'))

  if (!Array.isArray(db_sticker)) {
    db_sticker = [];
  }
  let existingPayment = db_sticker.find(entry => entry.id === groupID && entry.key === nameKey);
  if (existingPayment) {
      return m.reply(`Sticker dengan key ${nameKey} sudah ada untuk grup ini.`);
  }
  let obj_add = {
    id: groupID,
    key: nameKey,
    imageUrl: imageUrl
  };

  db_sticker.push(obj_add);
  fs.writeFileSync('./storage/databaseSticker.json', JSON.stringify(db_sticker, null, 3), 'utf-8');
  m.reply(`Sticker ${nameKey} berhasil disimpan`);
}
break

case 'liststick': {
  if (text) return
  let db_sticker = JSON.parse(fs.readFileSync('./storage/databaseSticker.json'))
  if (!isAlreadyResponStickGroup(m.chat, db_sticker)) return m.reply(`*Belum Ada Sticker Yang Terdaftar Di Grup Ini*`);
  let sortedList = db_sticker.filter(i => i.id === m.chat).sort((a, b) => a.key.localeCompare(b.key));
  let tek = `List Sticker Yang Terdaftar Di Group ${groupName}\n`
  for (let i of sortedList) {
    tek += `\n> *${i.key}*`
  }
  m.reply(tek)
}
break

case 'delstick': {
  if (!isAdmins) return m.reply(mess.admin);
  if (!text) return m.reply(`Contoh: ${prefix + command} (key)`);
  let db_sticker = JSON.parse(fs.readFileSync('./storage/databaseSticker.json'))
  if (!isKeyResponStick(m.chat, text.toLowerCase(), db_sticker)) return m.reply(`*Sticker Dengan Key ${text} Tidak Ada Dalam Liststick*`);
  await delResponStick(m.chat, text.toLowerCase(), db_sticker)
  m.reply(`*Sukses Menghapus Sticker Dengan Key ${text}*`)
}
break

case 'bratvid': {
if (!text) return m.reply(`text nya`)
 try {
 const proses = await (await fetch(`https://${global.api.maelyn.domain}/api/canvas/brat?text=${text}&isvideo=true&speed=medium`,
  {
    method: "GET",
    headers: {
      "x-maelyn-auth": global.api.maelyn.apikey
    }
  }
)).json()
 console.log(proses)
 await lenwy.sendImageAsSticker(from, proses.result.url, m, { packname: global.packname, author: global.author })

 } catch (err) {
 console.error(err);
 m.reply("Maaf, terjadi kesalahan saat memproses permintaan.");
 }
}
break

case 'txt2chibi':
case 'text2chibi':
case 'texttochibi':
case 'chibi': {
  if (!text) m.reply(`Contoh: ${prefix + command} a boy with a black jacket and blue hair`)
  LenwyLD()
  let res = await (await fetch(`https://${global.api.maelyn.domain}/api/txt2chibi?prompt=${text}&resolution=Square`, {
    headers: {
      'x-maelyn-auth': global.api.maelyn.apikey
    }
  })).json()
  for (let imageUrl of res.result) {
    await lenwy.sendMessage(m.chat, { image: { url: imageUrl }}, { quoted: m })
  }
}
break

case 'txt2chibi':
case 'text2chibi':
case 'texttochibi':
case 'chibi': {
  if (!text) m.reply(`Contoh: ${prefix + command} a boy with a black jacket and blue hair`)
  LenwyLD()
  let res = await (await fetch(`https://${global.api.maelyn.domain}/api/txt2img/minecraft?prompt=${text}&resolution=Square`, {
    headers: {
      'x-maelyn-auth': global.api.maelyn.apikey
    }
  })).json()
  for (let imageUrl of res.result) {
    await lenwy.sendMessage(m.chat, { image: { url: imageUrl }}, { quoted: m })
  }
}
break

case 'fetch': {
if (!text) m.reply('Masukkan link nya')

try {
let res = await (await fetch(`${text}`)).json()
console.log(res)
m.reply(`${text}\n\n`+ JSON.stringify(res, null, 2))
} catch (e) {
m.reply(JSON.stringify(e, null, 2))
m.reply(e.message)
}
}
break

case 'cekidch': 
case 'inspectch': {
 if (!text) return m.reply('📌 Kirim link channel WhatsApp-nya!');
 if (!text.includes("https://whatsapp.com/channel/")) return m.reply('❌ Link tidak valid! Format harus: https://whatsapp.com/channel/...');

 try {
 const channelCode = text.split('https://whatsapp.com/channel/')[1];
 const res = await lenwy.newsletterMetadata("invite", channelCode);

 if (!res?.id) return reply('❌ Gagal mengambil info channel.');

 const verified = res.verification === 'VERIFIED' ? '✅ Ya' : '❌ Tidak';
 const status = res.state === 'ACTIVE' ? '🟢 Aktif' : '🔴 Tidak aktif';
 
 const teks = `⬣ *INFORMASI CHANNEL*\n\n` +
 `📌 *Nama:* ${res.name || '-'}\n` +
 `🆔 *ID:* ${res.id}\n` +
 `👥 *Followers:* ${res.subscribers?.toLocaleString('id-ID') || 0}\n` +
 `📶 *Status:* ${status}\n` +
 `☑️ *Verified:* ${verified}`;

 await lenwy.sendMessage(m.chat, {
 text: teks,
 footer: `🔹 Gunakan tombol di bawah untuk copy ID Channel`,
 title: `📡 Channel: ${res.name || 'Tidak diketahui'}`,
 interactiveButtons: [
 {
 name: 'cta_copy',
 buttonParamsJson: JSON.stringify({
 display_text: '📋 Copy ID Channel',
 id: res.id,
 copy_code: res.id
 })
 }
 ]
 }, { quoted: m });

 } catch (err) {
 console.error(err);
 return m.reply(`❌ *Gagal mengambil data channel:*\n${err.message || 'Tidak diketahui.'}`);
 }
}
break

case 'id': {
let idGroupAcc = ['120363372763481297@g.us','120363310148910007@g.us','120363347092512933@g.us']
if (!idGroupAcc.includes(from)) return
if (!text) return m.reply(`Contoh: ${prefix + command} bot/aku`)
if (text === 'bot') {
let lidnya = lenwy.user?.lid.replace(/:\d+@/, '@')
let idnya = lenwy.user?.id.replace(/:\d+@/, '@')
m.reply(`Lid: ${lidnya}
Id: ${idnya}`)
} else if (text === 'aku') {
m.reply(`Id: ${m.sender}`)
}
await sleep (5000)
await lenwy.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
}
break

case 'stalkroblox':
case 'robloxstalk': {
 if (!text) return m.reply('masukkan username roblox anda');
 LenwyLD();
 try {
 const response = await (await fetch(`https://${global.api.ham.domain}/stalk/roblox?apikey=${global.api.ham.apikey}&nickname=${encodeURIComponent(text)}`)).json()
 const data = response.result;
 console.log(data)

 const formatPesan = `*🍒 ROBLOX PROFILE 🍒*\n\n` +
 `*PROFILE*\n` +
 `> *Username*: @${data.userInfo.name || '-'}\n` +
 `> *Display Name*: ${data.userInfo.displayName || '-'}\n` +
 `> *Bio*: ${data.userInfo.description && data.userInfo.description !== '-' ? data.userInfo.description : 'No bio available'}\n\n` +
 `*INFORMATION*\n` +
 `> *Created*: ${new Date(data.userInfo.created).toLocaleString('en-US')}\n` +
 `> *Verified*: ${data.userInfo.hasVerifiedBadge ? '✅' : '❌'}\n\n` +
 `*STATISTICS*\n` +
 `> *Friends*: ${data.userFriendCount.count.toLocaleString() || '-'}`

 await lenwy.sendMessage(m.chat, { image: { url: data.userAvatar.data[0].imageUrl }, caption: formatPesan }, { quoted: m });
 } catch (e) {
 console.error(e);
 m.reply('Terjadi kesalahan saat mengambil data.');
 }
}
break

//--------------------------------------------------------------------[ GAME MENU ]--------------------------------------------------------------------//

case 'tebak': {
if (isBan) return m.reply('⚠️ *Kamu Di Ban Owner*')
 if (args[0] === "gambar") {
 if (tebakgambar.hasOwnProperty(m.sender.split('@')[0])) m.reply('⚠️ *Masih Ada Sesi Yang Belum Diselesaikan!*')
 let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakgambar.json')
 let result = anu[Math.floor(Math.random() * anu.length)]
 lenwy.sendImage(from, result.img, `*Silahkan Jawab Soal Di Atas Ini*\n\n📑 *Deskripsi :* ${result.deskripsi}\n\n🕒 *Waktu : 60s*`, m).then(() => {
 tebakgambar[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
 })
 await sleep(60000)
 if (tebakgambar.hasOwnProperty(m.sender.split('@')[0])) {
 console.log("Jawaban: " + result.jawaban)
 lenwy.sendMessage(m.chat, { text: `🕒 *Waktu Habis*\n🎁 *Jawaban : ${tebakgambar[m.sender.split('@')[0]]}*\n\n📣 *Ingin Bermain Lagi? Ketik Tebak Gambar*`}, {quoted:m}) 
 delete tebakgambar[m.sender.split('@')[0]]
 }
 } else if (args[0] === 'kata') {
 if (tebakkata.hasOwnProperty(m.sender.split('@')[0])) m.reply('⚠️ *Masih Ada Sesi Yang Belum Diselesaikan!*')
 let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakkata.json')
 let result = anu[Math.floor(Math.random() * anu.length)]
 lenwy.sendText(from, `*Silahkan Jawab Pertanyaan Berikut :*\n\n📦 *${result.soal}*\n\n🕒 *Waktu : 60s*`, m).then(() => {
 tebakkata[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
 })
 await sleep(60000)
 if (tebakkata.hasOwnProperty(m.sender.split('@')[0])) {
 console.log("Jawaban: " + result.jawaban)
 lenwy.sendMessage(m.chat, { text: `🕒 *Waktu Habis*\n🎁 *Jawaban : ${tebakkata[m.sender.split('@')[0]]}*\n\n📣 *Ingin Bermain Lagi? Ketik Tebak Kata*` }, {quoted:m}) 
 delete tebakkata[m.sender.split('@')[0]]
 }
 } else if (args[0] === 'kalimat') {
 if (tebakkalimat.hasOwnProperty(m.sender.split('@')[0])) m.reply('⚠️ *Masih Ada Sesi Yang Belum Diselesaikan!*')
 let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakkalimat.json')
 let result = anu[Math.floor(Math.random() * anu.length)]
 lenwy.sendText(from, `*Silahkan Jawab Pertanyaan Berikut :*\n\n📦 *Pertanyaan :* ${result.soal}\n\n🕒 *Waktu : 60s*`, m).then(() => {
 tebakkalimat[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
 })
 await sleep(60000)
 if (tebakkalimat.hasOwnProperty(m.sender.split('@')[0])) {
 console.log("Jawaban: " + result.jawaban)
 lenwy.sendMessage(m.chat, { text:`🕒 *Waktu Habis*\n🎁 *Jawaban : ${tebakkalimat[m.sender.split('@')[0]]}*\n\n📣 *Ingin Bermain Lagi? Ketik Tebak Kalimat*`}, {quoted:m}) 
 delete tebakkalimat[m.sender.split('@')[0]]
 }
 } else if (args[0] === 'lirik') {
 if (tebaklirik.hasOwnProperty(m.sender.split('@')[0])) m.reply('⚠️ *Masih Ada Sesi Yang Belum Diselesaikan!*')
 let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebaklirik.json')
 let result = anu[Math.floor(Math.random() * anu.length)]
 lenwy.sendText(from, `*Ini Adalah Lirik Dari Lagu? :* \n\n📦 *${result.soal}?*\n\n🕒 *Waktu : 60s*`, m).then(() => {
 tebaklirik[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
 })
 await sleep(60000)
 if (tebaklirik.hasOwnProperty(m.sender.split('@')[0])) {
 console.log("Jawaban: " + result.jawaban)
 lenwy.sendMessage(m.chat, { text: `🕒 *Waktu Habis*\n🎁 *Jawaban : ${tebaklirik[m.sender.split('@')[0]]}*\n\n📣 *Ingin Bermain Lagi? Ketik Tebak Lirik*`} , {quoted:m}) 
 delete tebaklirik[m.sender.split('@')[0]]
 }
 } else if (args[0] === 'lontong') {
 if (caklontong.hasOwnProperty(m.sender.split('@')[0])) m.reply('⚠️ *Masih Ada Sesi Yang Belum Diselesaikan!*')
 let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/caklontong.json')
 let result = anu[Math.floor(Math.random() * anu.length)]
 lenwy.sendText(from, `*Jawablah Pertanyaan Berikut :*\n📦 *${result.soal}*\n🕒 *Waktu : 60s*`, m).then(() => {
 caklontong[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
caklontong_desk[m.sender.split('@')[0]] = result.deskripsi
 })
 await sleep(60000)
 if (caklontong.hasOwnProperty(m.sender.split('@')[0])) {
 console.log("Jawaban: " + result.jawaban)
 lenwy.sendMessage(m.chat, { text:`🕒 *Waktu Habis*\n🎁 *Jawaban : ${caklontong[m.sender.split('@')[0]]}*\n\n📑 *Deskripsi : ${caklontong_desk[m.sender.split('@')[0]]}* \n\n📣 *Ingin Bermain Lagi? Ketik Tebak Lontong*`}, {quoted:m}) 
 delete caklontong[m.sender.split('@')[0]]
delete caklontong_desk[m.sender.split('@')[0]]
 }
 }
}
break

case 'kuismath':
case 'math': {
  if (isBan) return m.reply('⚠️ *Kamu Di Ban Owner*')
  if (kuismath.hasOwnProperty(m.sender.split('@')[0])) m.reply('⚠️ *Masih Ada Sesi Yang Belum Diselesaikan!*')
  if (!text) return m.reply(`Mode: ${Object.keys(modes).join(' | ')}
Contoh penggunaan: ${prefix}math medium`);
  let { genMath, modes } = require('./library/math')
  let result = await genMath(text.toLowerCase())
  await lenwy.sendText(from,
    `*Berapa Hasil Dari : ${result.soal.toLowerCase()}*?
🕒 *Waktu : ${(result.waktu / 1000).toFixed(2)} detik*`,
  m).then(() => {
    kuismath[m.sender.split('@')[0]] = result.jawaban
  })
  await sleep(result.waktu)
  if (kuismath.hasOwnProperty(m.sender.split('@')[0])) {
    console.log("Jawaban: " + result.jawaban)
    m.reply("🕒 *Waktu Habis*\n🎁 *Jawaban :* " + kuismath[m.sender.split('@')[0]])
    delete kuismath[m.sender.split('@')[0]]
  }
}
break

case 'ttc': case 'ttt': case 'tictactoe': {
if (isBan) return m.reply('⚠️ *Kamu Di Ban Owner*')
let TicTacToe = require("./library/tictactoe")
this.game = this.game ? this.game : {}
if (Object.values(this.game).find(room => room.id.startsWith('tictactoe') && [room.game.playerX, room.game.playerO].includes(m.sender))) return m.reply('⚠️ *Kamu Masih Didalam Permainan Atau Menunggu Lawan Bermain*\n\n> Ketik delttc atau nyerah untuk keluar dari permainan')
let room = Object.values(this.game).find(room => room.state === 'WAITING' && (text ? room.name === text : true))
if (room) {
m.reply('*Lawan Bermain Ditemukan*')
room.o = from
room.game.playerO = m.sender
room.state = 'PLAYING'
let arr = room.game.render().map(v => {
return {
X: '❌',
O: '⭕',
1: '1️⃣',
2: '2️⃣',
3: '3️⃣',
4: '4️⃣',
5: '5️⃣',
6: '6️⃣',
7: '7️⃣',
8: '8️⃣',
9: '9️⃣',
}[v]
})
let str = `Room ID: ${room.id}

${arr.slice(0, 3).join('')}
${arr.slice(3, 6).join('')}
${arr.slice(6).join('')}

Menunggu @${room.game.currentTurn.split('@')[0]}

Ketik *nyerah* untuk menyerah dan mengakui kekalahan`
if (room.x !== room.o) await lenwy.sendText(room.x, str, m, { mentions: parseMention(str) } )
await lenwy.sendText(room.o, str, m, { mentions: parseMention(str) } )
} else {
room = {
id: 'tictactoe-' + (+new Date),
x: from,
o: '',
game: new TicTacToe(m.sender, 'o'),
state: 'WAITING'
}
if (text) room.name = text
m.reply('*Menunggu Lawan Bermain*' + (text ? ` mengetik command dibawah ini ${prefix}${command} ${text}` : ''))
this.game[room.id] = room
}
}
break

case 'delttc': case 'delttt': {
if (isBan) return m.reply('*Lu Di Ban Owner Gak Usah Sok asik Tolol*')
let roomnya = Object.values(this.game).find(room => room.id.startsWith('tictactoe') && [room.game.playerX, room.game.playerO].includes(m.sender))
if (!roomnya) return m.reply('Kamu sedang tidak berada di room tictactoe!')
delete this.game[roomnya.id]
m.reply('Berhasil delete session room tictactoe!')
}
break

//--------------------------------------------------------------------[ RANDOM MENU ]--------------------------------------------------------------------//

case 'reminder': {
if (isBan) return m.reply('⚠️ *Kamu Di Ban Owner*')
if (!args[0] || !args[1]) return m.reply('*Format : Reminder Waktu s/m/h/d Pesan*\n\n📑 *Contoh : Reminder 30m Jangan Lupa Sholat*')
const time = toMs(args[0])
const message = args.slice(1).join(' ')
setTimeout(() => {
lenwy.sendMessage(from, { text : `*Reminder Untuk @${sender.split("@")[0]}*\n\n📑 *Dengan Pesan :* ${message}`, contextInfo:{mentionedJid:[sender]}}, { quoted: m })}, time)
m.reply(`📑 *Berhasil Mengatur Reminder Untuk ${args[0]} ${args[1]} Ke Depan*`)
}
break

//--------------------------------------------------------------------[ DOWNLOAD MENU ]--------------------------------------------------------------------//

case 'play':
case 'song': {
 if (isBan) return m.reply(mess.ban);
 if (!text) return m.reply(`*Mau Dengerin Lagu Apa?*`);
 LenwyLD();

 try {
 let searchnya = await (await fetch(`https://api.nexray.eu.cc/search/youtube?q=${encodeURIComponent(text)}`)).json();
 let res = searchnya.result; // Ambil semua hasil pencarian
 let audioInfo = res?.[0] || {};
 let procees = await (await fetch(`https://api.nexray.eu.cc/downloader/v1/ytmp3?url=${audioInfo.url}`)).json();
 console.log(procees)
 await lenwy.sendMessage(m.chat, { audio: { url: procees.result.url }, mimetype: 'audio/mp4' }, { quoted: m })
 } catch (e) {
 console.log(e)
 }
}
break

case 'ytmp3': {
 if (!text) return m.reply(`*Link Youtubenya Mana?*`)
try {
LenwyLD()
await sleep(200)
m.reply('Process sending audio, mungkin ini membutuhkan 1-3 menit jika durasi audio terlalu panjang!')
let procees = await (await fetch(`https://api.nexray.eu.cc/downloader/v1/ytmp3?url=${encodeURIComponent(text)}`)).json();
console.log(procees)
let audioUrl = procees.result.url

lenwy.sendMessage(m.chat, { audio: { url: audioUrl }, mimetype: 'audio/mp4' }, { quoted: m });
} catch (e) {
m.reply('terjadi error :' + e)
}
}
break

case 'ytmp4': {
if (!text) return m.reply(`*Link Youtubenya Mana?*`)
try {
LenwyLD()
m.reply('Process sending video, mungkin membutuhkan 1-3 menit jika durasi video terlalu panjang!')
let procees = await (await fetch(`https://api.nexray.eu.cc/downloader/v1/ytmp4?url=${encodeURIComponent(text)}`)).json();
console.log(procees)
lenwy.sendMessage(m.chat,{ video: {url: procees.result.url }, caption: `Caption: ${procees.result.title}` }, {quoted: m})
} catch (e) {
m.reply('terjadi error :' + e)
}
}
break

case 'spotify': {
  if (!text) return m.reply("*Mau Cari Lagu Apa?*");
  LenwyLD();
  try {
    var result = await axios.get(`https://api.vreden.my.id/api/v1/search/spotify?query=${text}&limit=3`, { headers: { 'User-Agent': 'Mozilla/5.0' } })
  } catch (error) {
    return m.reply('*Gagal melakukan pencarian, coba lagi nanti.*');
  }

  if (!result || !result.data.result || result.data.result.search_data.length === 0) {
    return m.reply('*Tidak ada hasil ditemukan*');
  }

  let res = result.data.result.search_data; // Ambil semua hasil pencarian
  let audioInfo = res[Math.floor(Math.random() * res.length)];
  console.log(audioInfo.song_link)
  let { data } = await axios.get(`https://api.vreden.my.id/api/v1/download/spotify?url=${audioInfo.song_link}`, { headers: { 'User-Agent': 'Mozilla/5.0' } })
  console.log(data)

  if (data.result) {
    lenwy.sendMessage(m.chat, { audio: { url: data.result.download }, mimetype: 'audio/mp4' }, { quoted: m });
  } else {
    return m.reply('*Gagal mendapatkan audio preview, coba lagi nanti.*');
  }
}
break

case 'ttdl':
case 'tt': {
  if (!text) return m.reply(`*Link Tiktoknya Mana?*`);
  if (!isUrl(text)) return m.reply(mess.link);
  
  LenwyLD();

  try {
    let response = await (await fetch(`https://api.siputzx.my.id/api/d/tiktok/v2?url=${encodeURIComponent(text)}`)).json();
    console.log(response);

    if (!response.status || !response.data) {
      return m.reply("Gagal mengambil data dari API.");
    }

    let data = response.data;
    
    let capt = `*Title:* ${data.text || 'No Title'}\n` +
               `*Author:* ${data.author_nickname}\n` +
               `*Views:* ${data.play_count.toLocaleString()} | *Likes:* ${data.like_count.toLocaleString()}\n` +
               `*Shares:* ${data.share_count.toLocaleString()}`;

    if (data.slides && typeof data.slides === 'object') {
      for (const key in data.slides) {
        const slide = data.slides[key];
        if (slide?.url) {
          await lenwy.sendMessage(m.chat, { image: { url: slide.url } }, { quoted: m });
        }
      }
      m.reply(capt || '');
    } else if (data.no_watermark_link) {
      let videoUrl = data.no_watermark_link;
      await lenwy.sendMessage(m.chat, {
        video: { url: videoUrl },
        caption: capt
      }, { quoted: m });
    } else {
      m.reply("Tipe konten tidak dikenali atau media tidak ditemukan.");
    }

    if (data.music_link) {
      let audioTitle = 'Tiktok_Audio';
      await lenwy.sendMessage(m.chat, {
        audio: { url: data.music_link },
        mimetype: 'audio/mpeg',
        fileName: `${audioTitle}.mp3`
      }, { quoted: m });
    }

  } catch (error) {
    console.error("Error TikTok DL:", error);
    m.reply("Terjadi kesalahan saat memproses permintaan.");
  }
}
break

case 'ig':
case 'igdl': {
  if (!text) return m.reply(`*Link Instagramnya Mana?*`)
  if (!isUrl(text)) return m.reply(mess.link)
  
  LenwyLD()
  await sleep(200)
  try {
    let ress = await igdl(text);
    console.log(ress);
    
    const total = ress.length;
    const step = Math.floor(Math.sqrt(total));
    const batas = step;
    for (let i = 0; i < step; i++) {
      let responseIg = await axios.head(ress[i].url); 
      let contentType = responseIg.headers['content-type'];
      if (contentType.startsWith('image/')) {
        await lenwy.sendMessage(m.chat, { image: { url: ress[i].url}, caption: mess.success }, { quoted: m });
      } else {
        await lenwy.sendMessage(m.chat, { video: { url: ress[i].url}, caption: mess.success }, { quoted: m });
      }
    }
  } catch (e) {
    m.reply(e)
  }
}
break

case 'fb':
case 'fbdl': {
 if (!text) return m.reply(`*Link Fbnya Mana?*`)
 if (!isUrl(text)) return m.reply(mess.link)
 LenwyLD()
 await sleep(200)
 try {
 let { status, result } = await (await fetch(`https://${global.api.maelyn.domain}/api/facebook?url=${text}`, {
   headers: {
     'x-maelyn-auth': global.api.maelyn.apikey
   }
 })).json()
 if (status === "Success") {
 let videoHD = result.medias.find(media => media.quality === 'hd')
 await lenwy.sendMessage(m.chat, { video: { url: videoHD?.url }}, { quoted: m })
 } else {
 m.reply(`Gagal mengambil data`)
 }
 } catch (error) {
 m.reply(`Error: ${error}`)
 console.log(error)
 }
}
break

case 'twitter':
case 'xdl': {
  if (!text) return m.reply(`*Link Twitternya Mana?*`)
  if (!isUrl(text)) return m.reply(mess.link)
  LenwyLD()
  try {
    let response = await (await fetch(`https://${global.api.maelyn.domain}/api/x?url=${text}`, {
      headers: {
        'x-maelyn-auth': global.api.maelyn.apikey
      }
    })).json()
    lenwy.sendMessage(m.chat, { video: { url: response.result.video_hd }, caption: `Caption: ${response.result.desc}` }, { quoted: m })
    await sleep(200)
    await lenwy.sendMessage(m.chat, { audio: { url: response.result.audio }, mimetype: 'audio/mp4' }, { quoted: m });
  } catch (error) {
    console.error(error)
    m.reply(mess.error)
  }
}
break

case 'mediafire': {
  if (isBan) return m.reply(mess.ban)
  if (!text) return m.reply(mess.link)
  LenwyLD()
  await sleep(200)
  const baby1 = await (await fetch('https://endpoint.web.id/downloader/mediafire?key=315602&url=' + text)).json()
  const shanz = baby1.result;
  const extension = shanz.filename.split('.').pop().toLowerCase()

  const mimeTypes = {
      'pdf': 'application/pdf',
      'jpg': 'image/jpeg',
      'jpeg': 'image/jpeg',
      'png': 'image/png',
      'gif': 'image/gif',
      'mp4': 'video/mp4',
      'mp3': 'audio/mpeg',
      'zip': 'application/zip',
      'txt': 'text/plain',
  };
  const mimeType = mimeTypes[extension] || 'application/octet-stream';

  const result4 = `🔧 *MEDIAFIRE DOWNLOADER*\r\n\r\n🔖 *Name* : ${shanz.name}\r\n💽 *Size* : ${shanz.size}\r\n📌 *Desc* : ${shanz.desc}`
  
  lenwy.sendMessage(m.chat, {
      document: { url: shanz.media },
      fileName: shanz.filename,
      mimetype: mimeType,
      caption: result4
  }, { quoted: m })
}
break

case 'pin':
case 'pinterest': {
  if (!text) return m.reply(`*Contoh:* ${prefix + command} FF🗿`)
  
  LenwyLD()
  await sleep(200)
  let push = []
  try {
    async function createImage(url) {
      const { imageMessage } = await generateWAMessageContent({
        image: { url }
      }, {
        upload: lenwy.waUploadToServer
      })
      return imageMessage;
    }

    function shuffleArray(array) {
      for (let i = array.length - 1; i > 0; i--) {
        let randIndex = Math.floor(Math.random() * (i + 1));
        [array[i], array[randIndex]] = [array[randIndex], array[i]];
      }
    }
    
    let { data } = await axios.get(`https://api.nexray.eu.cc/search/pinterest?q=${encodeURIComponent(text)}`)
    
    if (!data.status || !data.result || data.result.length === 0) {
      throw new Error("Gagal mengambil data atau gambar tidak ditemukan")
    }
    
    let res = data.result
    shuffleArray(res) // Acak urutan gambarnya
    res = res.slice(0, 10) // Ambil maksimal 10 gambar

    let i = 1;
    for (let pinData of res) {
      push.push({
        body: proto.Message.InteractiveMessage.Body.fromObject({
          text: `*${pinData.grid_title || 'Pinterest'}*\n\nImage Ke ${i++}/${res.length}`
        }),
        footer: proto.Message.InteractiveMessage.Footer.fromObject({
          text: `By ${botname}`
        }),
        header: proto.Message.InteractiveMessage.Header.fromObject({
          title: '', 
          hasMediaAttachment: false,
          imageMessage: await createImage(pinData.images_url) // Ambil link gambar dari JSON terbaru
        }),
        nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
          buttons: [
            {
              "name": "cta_url",
              "buttonParamsJson": `{"display_text":"Source Pin","url":"${pinData.pin}","merchant_url":"${pinData.pin}"}`
            }
          ]
        })
      })
    }
    
    const botMsg = generateWAMessageFromContent(m.chat, {
      viewOnceMessage: {
        message: {
          messageContextInfo: {
            deviceListMetadata: {},
            deviceListMetadataVersion: 2
          },
          interactiveMessage: proto.Message.InteractiveMessage.fromObject({
            body: proto.Message.InteractiveMessage.Body.create({
              text: '*P I N T E R E S T*', 
            }),
            footer: proto.Message.InteractiveMessage.Footer.create({
              text: '*Hasil Dari:* ' + text,
            }),
            header: proto.Message.InteractiveMessage.Header.create({
              hasMediaAttachment: false
            }),
            carouselMessage: proto.Message.InteractiveMessage.CarouselMessage.fromObject({
              cards: [...push]
            })
          })
        }
      }
    }, {quoted: m})

    await lenwy.relayMessage(m.chat, botMsg.message, {
      messageId: botMsg.key.id
    })

  } catch (e) {
    console.log(e) 
    m.reply('Yah error di bagian: ' + e.message) 
  }
}
break

//--------------------------------------------------------------------[ ISLAMI MENU ]--------------------------------------------------------------------//

case 'asmaul husna': {
const t3xt = require(`./storage/teks/${command}.json`)
const r4andT3xt = t3xt[Math.floor(Math.random() * t3xt.length)]
lenwy.sendMessage(from, { text: r4andT3xt }, { quoted: m })
}
break

case 'ayat kursi': {
let result = `🎁 *Ayat Kursi*

✉️ *Arab :*
اللَّهُ لَا إِلَهَ إِلَّا هُوَ الْحَيُّ الْقَيُّومُ لَا تَأْخُذُهُ سِنَةٌ وَلَا نَوْمٌ لَهُ مَا فِي السَّمَاوَاتِ وَمَا فِي الْأَرْضِ مَنْ ذَا الَّذِي يَشْفَعُ عِنْدَهُ إِلَّا بِإِذْنِهِ يَعْلَمُ مَا بَيْنَ أَيْدِيهِمْ وَمَا خَلْفَهُمْ وَلَا يُحِيطُونَ بِشَيْءٍ مِنْ عِلْمِهِ إِلَّا بِمَا شَاءَ وَسِعَ كُرْسِيُّهُ السَّمَاوَاتِ وَالْأَرْضَ وَلَا يَئُودُهُ حِفْظُهُمَا وَهُوَ الْعَلِيُّ الْعَظِيمُ

✉️ *Latin :*
*“Alloohu laa ilaaha illaa huwal hayyul qoyyuum, laa ta’khudzuhuu sinatuw walaa naum. Lahuu maa fissamaawaati wa maa fil ardli man dzal ladzii yasyfa’u ‘indahuu illaa biidznih, ya’lamu maa baina aidiihim wamaa kholfahum wa laa yuhiithuuna bisyai’im min ‘ilmihii illaa bimaa syaa’ wasi’a kursiyyuhus samaawaati wal ardlo walaa ya’uuduhuu hifdhuhumaa wahuwal ‘aliyyul ‘adhiim.”*

✉️ *Artinya:*
Allah, tidak ada Tuhan (yang berhak disembah) melainkan Dia Yang Hidup kekal lagi terus menerus mengurus (makhluk-Nya) tidak mengantuk dan tidak tidur. Kepunyaan-Nya apa yang di langit dan di bumi. Tiada yang dapat memberi syafa'at di sisi Allah tanpa izin-Nya.
Allah mengetahui apa-apa yang di hadapan mereka dan di belakang mereka, dan mereka tidak mengetahui apa-apa dari ilmu Allah melainkan apa yang dikehendaki-Nya. Kursi Allah meliputi langit dan bumi. Dan Allah tidak merasa berat memelihara keduanya, dan Allah Maha Tinggi lagi Maha Besar." 
*(QS. Al Baqarah: 255)*`
lenwy.sendMessage(m.chat, { image: { url: 'https://telegra.ph/file/afb17800d56775ad1791d.png' }, caption: result}, { quoted: m })
}

break

case 'kisahnabi': {
if (!text) return m.reply(`*Tolong Masukkan Nama Nabi*`) 
try{
let ilenwy = await fetchJson(`https://api.zeeoneofc.my.id/api/islam/kisahnabi?apikey=QIO8xicLNkEV43Y&nabi=${text}`)
const namanabi = ilenwy.result.name
const kelahiran = ilenwy.result.birth
const wafat = ilenwy.result.death_age
const asal = ilenwy.result.country_from
const ceritanabi = ilenwy.result.story
var lenwy_result = `*Kisah Nabi*
🎁 *Nama Nabi : ${namanabi}*
🗓️ *Hari Kelahiran : ${kelahiran}*
🕒 *Wafat Pada Umur : ${wafat}*
🌏 *Asal : ${asal}*

📑 *Kisah Dari Nabi ${namanabi} :*
${ceritanabi}`
m.reply(lenwy_result) 
} catch (error) {
    return m.reply(mess.error)
}
}
break

case 'doa': {
if (!text) return m.reply(`*Tolong Masukkan Doa Yang Ingin Dicari*`) 
try{
LenwyLD()
await sleep(200)
let ilenwy = await fetchJson(`https://doa-doa-api-ahmadramadhan.fly.dev/api/doa/${text}`)
const namadoa = ilenwy.doa
const ayat = ilenwy.ayat
const latin = ilenwy.latin
var lenwy_result = `*Pencarian : ${namadoa}*

*${ayat}*

*${latin}*`
m.reply(lenwy_result) 
} catch (error) {
    return m.reply(mess.error)
}
}
break

//--------------------------------------------------------------------[ SEARCH MENU ]--------------------------------------------------------------------//

case 'translate': {
if (!text) return m.reply(`Masukkan Teks Yang Ingin Di Translate`)
let hasil = await (await fetch(`https://api.lolhuman.xyz/api/translate/auto/id?apikey=edce68e031c34dcf71219133&text=${text}`)).json()
let resu = `Mentranslate teks dari Bahasa ${hasil.result.from} ke Bahasa ${hasil.result.to}

Arti dari '${hasil.result.original}' adalah

> ${hasil.result.translated}`
m.reply(resu)
}
break

case 'kodebahasa': {
m.reply(`📦 *Kode Bahasa*

 *⨠ Af: Afrikaans* 
 *⨠ Sq: Albanian*
 *⨠ Ar: Arabic*
 *⨠ Hy: Armenian*
 *⨠ Ca: Catalan* 
 *⨠ Zh: Chinese*
 *⨠ Zh-Cn: Chinese (Mandarin/China)*
 *⨠ Zh-Tw: Chinese (Mandarin/Taiwan)*
 *⨠ Zh-Yue: Chinese (Cantonese)*
 *⨠ Hr: Croatian*
 *⨠ Cs: Czech*
 *⨠ Da: Danish*
 *⨠ Nl: Dutch*
 *⨠ En: English*    
 *⨠ En-Au: English (Australia)*
 *⨠ En-Uk: English (United Kingdom)*
 *⨠ en-Us: English (United States)* 
 *⨠ Eo: Esperanto* 
 *⨠ Fi: Finnish* 
 *⨠ Fr: French*
 *⨠ De: German*
 *⨠ El: Greek* 
 *⨠ Ht: Haitian Creole* 
 *⨠ Hi: Hindi* 
 *⨠ Hu: Hungarian* 
 *⨠ Ss: Icelandic* 
 *⨠ Id: Indonesian* 
 *⨠ It: Italian*
 *⨠ Ja: Japanese*
 *⨠ Ko: Korean*
 *⨠ La: Latin*
 *⨠ Lv: Latvian*
 *⨠ Mk: Macedonian*
 *⨠ No: Norwegian*
 *⨠ Pl: Polish*
 *⨠ Pt: Portuguese*
 *⨠ Pt-Br: Portuguese (Brazil)*
 *⨠ Ro: Romanian*
 *⨠ Ru: Russian*
 *⨠ Sr: Serbian*
 *⨠ Sk: Slovak*
 *⨠ Es: Spanish* 
 *⨠ Es-Es: Spanish (Spain)*
 *⨠ Es-Us: Spanish (United States)*
 *⨠ Sw: Swahili*
 *⨠ Sv: Swedish*
 *⨠ Ta: Tamil*
 *⨠ Th: Thai*
 *⨠ Tr: Turkish*
 *⨠ Vi: Vietnamese* 
 *⨠ Cy: Welsh*

⚠️ *Kalo Ada Error Bisa Chat Owner Ya*
`)
}
break

case 'lirik':
case 'liriklagu': {
  if (!text) return m.reply(`Masukan Judul Lagu`)
  if (text.length > 30) return m.reply(`Maksimal 30 Karakter`)    
  LenwyLD()
  await sleep(200)
  try{
    let anu = await (await fetch(`https://endpoint.web.id/tools/lirik?key=315602&query=${text}`)).json()
    let result = anu.result
    let caption = '📃 Judul : ' + result.title + '\n📣 Artis : ' + result.artist + '\n\n🎁 Lirik :\n' + result.lyrics
    m.reply(caption)
  } catch (error) {
    m.reply(`⚠️ Lirik Lagu Tidak Ditemukan ${error}`)
  }
}
break

case 'cuaca': {
if (!text) return m.reply('*Mana Lokasinya?*')
if (text.length > 20) return m.reply(`*Maksimal 20 Karakter*`)
LenwyLD()
await sleep(200)
try {
let wdata = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${text}&units=metric&appid=060a6bcfa19809c2cd4d97a212b19273&language=id`)
let Lenwy_txt = ""
Lenwy_txt += `*Cuaca Dari : ${text}*\n`
Lenwy_txt += `☁️ *Cuaca :* *${wdata.data.weather[0].main}*\n`
Lenwy_txt += `🧾 *Deskripsi :* *${wdata.data.weather[0].description}*\n`
Lenwy_txt += `🌡️ *Suhu Rata Rata :* *${wdata.data.main.temp}*\n`
Lenwy_txt += `💨 *Tekanan :* *${wdata.data.main.pressure}*\n`
Lenwy_txt += `🧴 *kelembapan :* *${wdata.data.main.humidity}*\n`
Lenwy_txt += `🛳️ *Garis Bujur :* *${wdata.data.coord.lat}*\n`
Lenwy_txt += `🌏 *Negara :* *${wdata.data.sys.country}*\n`
lenwy.sendMessage(m.chat, { text: Lenwy_txt, }, { quoted: m })
} catch (e) {
m.reply(`Pastikan Wilayahnya Adalah Kota`)
}
}
break

case 'gpt4':
case 'gpt':
case 'ai': {
if (!text) return m.reply(`*Mau Nanya Apa Ama AI?*`) 
 LenwyLD()
 if (/image/.test(mime)) {
  try {
    if (quoted && /image/.test(mime)) {
        try {
          let media = await merlynn.downloadAndSaveMediaMessage(quoted)
          let anu = await uploader60Minute(media)
          let data = await (await fetch(`https://${global.api.maelyn.domain}/api/ai/gemini`,
                    {
                      method: "POST",
                      headers: {
                        "x-maelyn-auth": global.api.maelyn.apikey,
                        "Content-Type": "application/json"
                      },
                      body: JSON.stringify({
                        "prompt": text,
                        "model": "gemini-3-flash-preview",
                        "mode": "chat",
                        "images": [
                          anu
                        ]
                      })
                    }
                  )).json();
          console.log(data)
          m.reply(data.result.text)
        } catch (e) {
          console.log(e)
          return m.reply("*maaf, sedang terjadi error saat ini*")
        }
      } else {
        let gpt = await (await fetch(`https://${global.api.maelyn.domain}/api/ai/gemini`,
                    {
                      method: "POST",
                      headers: {
                        "x-maelyn-auth": global.api.maelyn.apikey,
                        "Content-Type": "application/json"
                      },
                      body: JSON.stringify({
                        "prompt": text,
                        "mode": "chat",
                        "model": "gemini-3-flash-preview"
                      })
                    }
                  )).json();
        console.log(gpt)
        m.reply(gpt.result.text)
      }
   } catch (e) {
    console.log(e)
    return m.reply("*Error Kak :(*")
   }
 }
}
break

case 'search':
case 'searchai':
  if (!text) return m.reply(`*Begini Loh*\n\n> *${command} Gempa di jepang*`)
  LenwyLD()
  try {
     let you = await (await fetch(`https://${global.api.maelyn.domain}/api/perplexity?q=${text}`, {
       headers: {
         'x-maelyn-auth': global.api.maelyn.apikey
       }
     })).json()
     console.log(you)
     let result = you.result
     let sourcenya = `> *Source*\n`
     result.source.forEach((url, index) => {
      sourcenya += `(${index + 1}) ${url}\n`
     });
     m.reply(`${result.answer}

${sourcenya}`)
   } catch (e) {
       lenwy.sendMessage (m.chat, { react: { text: `❌`, key: m.key }})
     }
break

case 'imdb':
if (!text) return m.reply(`*Masukan Judul Filmnya*`)
LenwyLD()
await sleep(200)
if (text.length > 20) return m.reply(`*Maksimal 20 Karakter*`)
            let fids = await axios.get(`http://www.omdbapi.com/?apikey=742b2d09&t=${text}&plot=full`)
            let Lenwy_txt = ""
            console.log(fids.data)
Lenwy_txt += "*IMDB Search*\n"
Lenwy_txt += "📖 *Judul :* *" + fids.data.Title + "*\n"
Lenwy_txt += "📅 *Tahun :* *" + fids.data.Year + "*\n"
Lenwy_txt += "📦 *Rilis :* *" + fids.data.Released + "*\n"
Lenwy_txt += "🕒 *Durasi :* *" + fids.data.Runtime + "*\n"
Lenwy_txt += "📰 *Genre :* *" + fids.data.Genre + "*\n"
Lenwy_txt += "📋 *Direktur :* *" + fids.data.Director + "*\n"
Lenwy_txt += "📝 *Penulis :* *" + fids.data.Writer + "*\n"
Lenwy_txt += "👤 *Aktor :* *" + fids.data.Actors + "*\n"     
Lenwy_txt += "💬 *Bahasa :* *" + fids.data.Language + "*\n"
Lenwy_txt += "🌏 *Negara :* *" + fids.data.Country + "*\n"
Lenwy_txt += "🏆 *Penghargaan :* *" + fids.data.Awards + "*\n"
Lenwy_txt += "🪙 *Keuntungan :* *" + fids.data.BoxOffice + "*\n"
Lenwy_txt += "🏷️ *Nilai :* *" + fids.data.imdbRating + "*\n"
Lenwy_txt += "📣 *Pemungutan Suara :* *" + fids.data.imdbVotes + "*\n\n"
Lenwy_txt += "📃 *Plot :*\n" + fids.data.Plot + ""
           lenwy.sendMessage(m.chat, {
                image: {
                    url: fids.data.Poster,
                },
                caption: Lenwy_txt,
            }, {
                quoted: m,})
            .catch(console.error)
            break

case 'chord':
  if (!text) return m.reply('masukkan judul lagunya!')
  try {
    let chord = await (await fetch('https://endpoint.web.id/search/chord?key=315602&query=' + text)).json()
    LenwyLD()
    await sleep(200)
    let result = chord.result;
    
    let message = `${result.title}\n\n`
    message += `Artis: ${result.artist}\n`
    message += `URL: ${result.url}\n`
    message += `URL Artis: ${result.artistUrl}\n\n`
    message += `Chord:\n${result.lyrics}`;
    
    lenwy.sendMessage(m.chat, { text: message }, { quoted: m })
  } catch (e) {
    m.reply('terjadi kesalahan: ' + e)
  }
break

//--------------------------------------------------------------------[ LAINNYA ]--------------------------------------------------------------------//

case 'tutor1': case 'no1': {
m.reply(`𔖳  𓏵 𓈒 🎀﹙𝘁𝘂𝘁𝗼𝗿𝗶𝗮𝗹 𝘀𝗲𝘁𝗽𝗮𝘆𝗺𝗲𝗻𝘁﹚˳᭺◝

  . ݁ ▭ ✿ 𝘀𝘁𝗲𝗽 𝟭
ketik setpayment pay@text payment mu
> contoh : setpayment pay@berikut adalah pembayaran dana Lynn.id

   . ݁ ▭ ✿ 𝘀𝘁𝗲𝗽 𝟮
ketik setbuttoncopy pay@CLICK@nomor
> contoh : setbuttoncopy pay@CLICK@088286533186

   . ݁ ▭ ✿ 𝘁𝘂𝘁𝗼𝗿 𝗱𝗲𝗹𝗽𝗮𝘆𝗺𝗲𝗻𝘁
ketik delpayment key
> contoh : delpayment pay

𝗻𝗼𝘁𝗲 : jika ingin lebih dari 1 payment tinggal ubah key pay menjadi key lain
> contoh : setpayment dana@text payment mu`)
}
break

case 'tutor2': case 'no2': {
m.reply(`𔖳  𓏵 𓈒 🎀﹙𝘁𝘂𝘁𝗼𝗿𝗶𝗮𝗹 𝘀𝗲𝘁𝗹𝗶𝘀𝘁﹚˳᭺◝

    . ݁ ▭ ✿ 𝘀𝘁𝗲𝗽 𝟭
ketik setlist wordingmu
> contoh : setlist hallo #tag berikut adalah list yang tersedia #simbol

    . ݁ ▭ ✿ 𝘀𝘁𝗲𝗽 𝟭
ketik setsimbol
> contoh : setsimbol ✨

ketik catatan untuk melihat setting tag`)
}
break

case 'tutor3': case 'no3': {
m.reply(`𔖳  𓏵 𓈒 🎀﹙𝘁𝘂𝘁𝗼𝗿𝗶𝗮𝗹 𝘀𝗲𝘁𝗼𝗽𝗲𝗻 𝗱𝗮𝗻 𝘀𝗲𝘁𝗰𝗹𝗼𝘀𝗲﹚˳᭺◝

   . ݁ ▭ ✿ 𝗼𝗽𝗲𝗻
ketik ( open waktu ) untuk buka otomatis hanya sekali
> contoh : open 07:00

ketik ( setopenjam waktu ) untuk buka otomatis terjadwal setiap hari
> contoh : setopenjam 07:00

   . ݁ ▭ ✿ 𝗰𝗹𝗼𝘀𝗲
ketik ( close waktu ) untuk buka otomatis hanya sekali
> contoh : close 21:00

ketik ( setclosejam waktu ) untuk buka otomatis terjadwal setiap hari
> contoh : setclosejam 21:00

    . ݁ ▭ ✿ 𝗵𝗮𝗽𝘂𝘀𝗷𝗮𝗱𝘄𝗮𝗹
ketik hapusjadwal open/close untuk menghapus jadwal otomatis
> contoh hapusjadwal open atau hapusjadwal close

    . ݁ ▭ ✿ 𝗰𝗲𝗸𝗷𝗮𝗱𝘄𝗮𝗹
untuk melihat jadwal yang sudah di set`)
}
break

case 'tutor4': case 'no4': {
m.reply(`𔖳  𓏵 𓈒 🎀﹙𝘁𝘂𝘁𝗼𝗿𝗶𝗮𝗹 𝗴𝗮𝗻𝘁𝗶 𝘄𝗼𝗿𝗱𝗶𝗻𝗴﹚˳᭺◝

      . ݁ ▭ ✿ 𝘄𝗱 𝘀𝗲𝘄𝗮
ketik setwdsewa text nya
> contoh :  setwdsewa 1bln : 10k
> 2bln : 20k
ketik resetwdsewa untuk balik ke wd default

       . ݁ ▭ ✿ 𝘄𝗱 𝗽𝗽𝗷
ketik setwdppj text nya
> contoh : setwdppj 1bln : 10k
> 2bln : 20k
ketik resetwdppj untuk balik ke wd default`)
}
break
        
case 'tutor5': case 'no5': {
m.reply(`𔖳  𓏵 𓈒 🎀﹙𝘁𝘂𝘁𝗼𝗿𝗶𝗮𝗹 𝗴𝗮𝗻𝘁𝗶 𝘄𝗱 𝗽𝗮𝘆﹚˳᭺◝

      . ݁ ▭ ✿ 𝘄𝗱 𝗽𝗮𝘆𝗺𝗲𝗻𝘁
ketik setwdpay@text nya
> contoh : setwdpay@no dana Lynn.id = 08×××
jika ingin ubah wd payment lain ketik sesuai key
> contoh : setwdgopay@no gopay Lynn.id = 08×××

         . ݁ ▭ ✿ 𝗱𝗲𝗹𝗯𝘂𝘁𝘁𝗼𝗻
ketik delbutton key
> contoh : delbutton pay`)
}
break        
               
case 'bot': {
if (text) return
m.reply(`status bot online ${pushname} ✅`)
}
break

case 'bokep': {
m.reply(`*Haduhh Otak Mesum*`)
}
break

case 'panel': {
if (text) return
m.reply(`Panel? Kalo minat chat no berikut: wa.me/62882-8653-3186`)
}
break

//--------------------------------------------------------------------[ DEFAULT ]--------------------------------------------------------------------//

default:
  if (budy.startsWith("=>")) {
    if (!isCreator) return m.reply('Only owner can use this command.');
    try {
      const res = util.format(await eval(`(async () => { return ${budy.slice(3)} })()`));
      await sleep(2000)
      await m.reply(res);
    } catch (e) {
      await m.reply(String(e));
    }
  }

  if (budy.startsWith(">")) {
    if (!isCreator) return m.reply('Only owner can use this command.');
    let kode = budy.trim().split(/ +/)[0];
    const inner = (kode == ">>") ? q : q;
    try {
      const teks = util.format(await eval(`(async () => { ${kode == ">>" ? "return " : ""} ${inner}})()`));
      await sleep(2000)
      await m.reply(teks);
    } catch (e) {
      await m.reply(String(e));
    }
  }

  if (isCmd && budy) {
    if (m.isBaileys || from.endsWith('broadcast')) return;

    const text = budy.toLowerCase();
    const msgs = global.db?.data?.database || {};

    if (text in msgs) {
      try {
        await lenwy.copyNForward(from, msgs[text], true);
      } catch (err) {
        console.error('copyNForward error:', err);
      }
    }
  }

}
} catch (err) {
  const e = String(err);
  console.log('[ERROR]', e);

  if (e.includes('rate-overlimit')) {
    console.warn('[WARNING] Kena rate limit WhatsApp. Tunggu sebelum coba lagi.');
    return;
  }

  console.error('[UNHANDLED ERROR]', err);
}
}

let file = require.resolve(__filename);
if (process.env.NODE_ENV !== "production") {
  fs.watchFile(file, () => {
    fs.unwatchFile(file);
    console.log(chalk.green(`📑 Update: ${__filename}`));
    delete require.cache[file];
    try {
      require(file);
    } catch (e) {
      console.error('Hot-reload error:', e);
    }
  });
}