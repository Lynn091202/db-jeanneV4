const fs = require('fs')
const path = require('path')

const DB_PATH = path.join(__dirname, '..', 'storage', 'databaseGroup.json')

function loadGroupDB() {
  try {
    if (!fs.existsSync(DB_PATH)) return {}
    const raw = fs.readFileSync(DB_PATH, 'utf8')
    if (!raw.trim()) return {}
    const parsed = JSON.parse(raw)
    return (typeof parsed === 'object' && parsed !== null) ? parsed : {}
  } catch (err) {
    console.error('❌ Gagal load databaseGroup.json:', err.message)
    return {}
  }
}

function saveGroupDB(data) {
  try {
    fs.mkdirSync(path.dirname(DB_PATH), { recursive: true })
    fs.writeFileSync(DB_PATH, JSON.stringify(data, null, 2), 'utf8')
    return true
  } catch (err) {
    console.error('❌ Gagal save databaseGroup.json:', err.message)
    return false
  }
}

function ensureGlobalDatagc() {
  if (!global.datagc) global.datagc = loadGroupDB()
  return global.datagc
}

function getDefaultTextOpen({ time = '', groupName = '' } = {}) {
  return `‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎‎  ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎⣠⣶⣶⣶⣦  
‎ ‎‎ ⣠⣤⣤⣄⣀⣾⣿⠟⠛⠻⢿⣷ 
⡇⣿⡿⠛⠙⠻⣿⣿⠁‎ ‎ ‎‎ ⣶⢿⡇
⢿⣿⣇‎ ‎ ‎⠁ ⠏‎ ‎  𝅄 ׄ‎ ‎ ‎*𝗅𝗈𝗏𝖾'𝗌 𝗅𝖾𝗍𝗍𝖾𝗋* ( ✉️ ) 사랑   ֹ  ׅ  ꒱꒱
‎ ‎ ‎ ‎ ‎ 〔 ${time} 〕𝗍𝗂𝗆𝖾 𝖿𝗈𝗋 .. ⓘ ׄ 𝅄 *𝗈𝗉𝖾𝗇*
‎ ‎ ‎‎  ‎ ‎ ‎ ‎ ‎ ┈─┈──┈─┈ ‎ ׅ ‎ 🎀 ‎ ׅ ‎┈─┈──┈─┈
 ‎ 
‎ ‎ ‎ ‎ ‎ *${groupName}*  ° 𝗂𝗇𝖿𝗂𝗇𝗂𝗍𝗒‎ 𝖿𝗈𝗋 𝗌𝗁𝗈𝗉𝗉𝗂𝗇𝗀
‎ ‎‎ ‎ ‎  ‎ ‎ ⊂⊃ ‎‎ 판매  ׄ 𝅄 𝗅𝖾𝗍'𝗌 𝗁𝖺𝗏𝖾 𝖺 𝗍𝗋𝖺𝗇𝗌𝖺𝖼𝗍𝗂𝗈𝗇`
}

function getDefaultTextClose({ time = '', groupName = '' } = {}) {
  return `‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎‎  ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎⣠⣶⣶⣶⣦  
‎ ‎‎ ⣠⣤⣤⣄⣀⣾⣿⠟⠛⠻⢿⣷ 
⡇⣿⡿⠛⠙⠻⣿⣿⠁‎ ‎ ‎‎ ⣶⢿⡇
⢿⣿⣇‎ ‎ ‎⠁ ⠏‎ ‎  𝅄 ׄ‎ ‎ ‎*𝖼𝗅𝗈𝗌𝖾𝖽 𝗅𝖾𝗍𝗍𝖾𝗋* ( 🔒 ) 마감   ֹ  ׅ  ꒱꒱
‎ ‎ ‎ ‎ ‎ 〔 ${time} 〕𝗍𝗂𝗆𝖾 𝖿𝗈𝗋 .. ⓘ ׄ 𝅄 *𝖼𝗅𝗈𝗌𝖾*
‎ ‎ ‎‎  ‎ ‎ ‎ ‎ ‎ ┈─┈──┈─┈ ‎ ׅ ‎ 🎀 ‎ ׅ ‎┈─┈──┈─┈
 ‎ 
‎ ‎ ‎ ‎ ‎ *${groupName}*  ° 𝗌𝖾𝖾 𝗒𝗈𝗎‎ 𝗌𝗈𝗈𝗇
‎ ‎‎ ‎ ‎  ‎ ‎ ⊂⊃ ‎‎ 종료  ׄ 𝅄 𝗍𝗁𝖺𝗇𝗄'𝗌 𝖿𝗈𝗋 𝗌𝗁𝗈𝗉𝗉𝗂𝗇𝗀 𝗍𝗈𝖽𝖺𝗒`
}
function applyTags(text, vars = {}) {
  if (!text) return text
  const {
    groupName = '', usertag = '', quotedUsertag = '',
    jam = '', menit = '', detik = '', hari = '',
    tanggal = '', bulan = '', tahun = '', namabulan = '',
    catatan = '', simbol = '✦ ✧ ✦ ✧'
  } = vars

  const timeFull = `${jam}:${menit}${detik ? ':' + detik : ''} WIB`.trim()
  const dateFull = `${hari}, ${tanggal} ${namabulan} ${tahun}`.trim()

  let result = text

  if (result.includes('@groupname')) result = result.replaceAll('@groupname', groupName)
  if (result.includes('@tagdiri')) result = result.replaceAll('@tagdiri', usertag)
  if (result.includes('@tagreply')) result = result.replaceAll('@tagreply', quotedUsertag)
  if (result.includes('@jam')) result = result.replaceAll('@jam', jam)
  if (result.includes('@menit')) result = result.replaceAll('@menit', menit)
  if (result.includes('@detik')) result = result.replaceAll('@detik', detik)
  if (result.includes('@hari')) result = result.replaceAll('@hari', hari)
  if (result.includes('@tanggal')) result = result.replaceAll('@tanggal', tanggal)
  if (result.includes('@bulan')) result = result.replaceAll('@bulan', bulan)
  if (result.includes('@tahun')) result = result.replaceAll('@tahun', tahun)
  if (result.includes('@namabulan')) result = result.replaceAll('@namabulan', namabulan)

  // --- Gaya # (konsisten dengan fitur welcome/left) ---
  if (result.includes('#group')) result = result.replaceAll('#group', groupName)
  if (result.includes('#tag')) result = result.replaceAll('#tag', usertag)
  if (result.includes('#time')) result = result.replaceAll('#time', timeFull)
  if (result.includes('#date')) result = result.replaceAll('#date', dateFull)
  if (result.includes('#catatan')) result = result.replaceAll('#catatan', catatan)
  if (result.includes('#simbol')) result = result.replaceAll('#simbol', simbol)

  return result
}

function getTagHelpText() {
  return `╭ ────╮🌸 catatan setting bot' ! 
╰ ── ❥ ───────╯

⸼ ꤥ‌ ּ ꞌꞋ #date : format tanggal
⸼ ꤥ‌ ּ ꞌꞋ #time : format jam
⸼ ꤥ‌ ּ ꞌꞋ #group : tag group
⸼ ꤥ‌ ּ ꞌꞋ #tag : tag member
⸼ ꤥ‌ ּ ꞌꞋ #catatan : pesan done/proses
⸼ ꤥ‌ ּ ꞌꞋ #simbol : menampilkan list

        jeanne' 𝖻! › 𖹭 beauty
             flowers ╯🌸 ╰ 𝖼𝗁𝖾α𝗉`
}

function getGroupTextOpen(chat, vars = {}) {
  ensureGlobalDatagc()
  const custom = global.datagc[chat]?.text_open
  const raw = custom || getDefaultTextOpen(vars)
  return applyTags(raw, vars)
}

function getGroupTextClose(chat, vars = {}) {
  ensureGlobalDatagc()
  const custom = global.datagc[chat]?.text_close
  const raw = custom || getDefaultTextClose(vars)
  return applyTags(raw, vars)
}

async function updateTextOpen(m, teks) {
  ensureGlobalDatagc()
  if (!global.datagc[m.chat]) global.datagc[m.chat] = {}

  if (teks && teks.trim()) {
    global.datagc[m.chat].text_open = teks
  } else {
    delete global.datagc[m.chat].text_open
  }

  saveGroupDB(global.datagc)
}

async function updateTextClose(m, teks) {
  ensureGlobalDatagc()
  if (!global.datagc[m.chat]) global.datagc[m.chat] = {}

  if (teks && teks.trim()) {
    global.datagc[m.chat].text_close = teks
  } else {
    delete global.datagc[m.chat].text_close
  }

  saveGroupDB(global.datagc)
}

module.exports = {
  loadGroupDB,
  saveGroupDB,
  ensureGlobalDatagc,
  getDefaultTextOpen,
  getDefaultTextClose,
  applyTags,
  getTagHelpText,
  getGroupTextOpen,
  getGroupTextClose,
  updateTextOpen,
  updateTextClose
}