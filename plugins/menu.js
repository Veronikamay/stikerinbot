let levelling = require('../lib/levelling')
let { MessageType } = require('@adiwajshing/baileys')
let fs = require('fs')
let path = require('path')
let fetch = require('node-fetch')
let moment = require('moment-timezone')
const defaultMenu = {
  before: `

*┌────*
*│ ➣ %name*
*│* Tersisa *%limit Limit*
*│ ∞* XP secara Total
*├────*
*│* Hari: %week %weton
*│* Tanggal: %date
*│* *%dateIslamic*
*├────*
*│* 14.000 Pengguna
*│* 1.200 Group Chat
*│* Bot ➢ Online
*│* Online : *%uptime*
*├────*
*│* Info Seputar Bot
*│* https://t.me/whatsappbot1
*└────*
%readmore`.trimStart(),
  header: '*──° %category °──*',
  body: '➣ %cmd %islimit %isPremium',
  footer: '*─────*\n',
  after: `
`,
}
let handler = async (m, { conn, usedPrefix: _p, args, command }) => {
  let tags
  let teks = `${args[0]}`.toLowerCase()
  let arrayMenu = ['all', 'game', 'xp', 'stiker', 'kerangajaib', 'quotes', 'admin', 'grup', 'premium', 'internet', 'anonymous', 'nulis', 'downloader', 'tools', 'fun', 'database', 'quran', 'audio', 'jadibot', 'topupgame', 'info', 'tanpakategori', 'owner']
  if (!arrayMenu.includes(teks)) teks = '404'
  if (teks == 'all') tags = {
    'main': 'Utama',
    'game': 'Game',
    'xp': 'Exp & Limit',
    'sticker': 'Stiker',
    'kerang': 'Kerang Ajaib',
    'quotes': 'Quotes',
    'admin': `Admin ${global.opts['restrict'] ? '' : '(Dinonaktifkan)'}`,
    'group': 'Grup',
    'premium': 'Premium',
    'internet': 'Internet',
    'anonymous': 'Anonymous Chat',
    'nulis': 'MagerNulis & Logo',
    'downloader': 'Downloader',
    'tools': 'Tools',
    'fun': 'Fun',
    'database': 'Database',
    'vote': 'Voting',
    'absen': 'Absen',
    'quran': 'Al Qur\'an',
    'audio': 'Pengubah Suara',
    'jadibot': 'Jadi Bot',
    'topupgame': '🎮ML&FF🎮',
    'info': 'Info',
    '': 'Tanpa Kategori',
  }
  if (teks == 'game') tags = {
    'game': 'Game'
  }
  if (teks == 'xp') tags = {
    'xp': 'Exp & Limit'
  }
  if (teks == 'stiker') tags = {
    'sticker': 'Stiker'
  }
  if (teks == 'kerangajaib') tags = {
    'kerang': 'Kerang Ajaib'
  }
  if (teks == 'quotes') tags = {
    'quotes': 'Quotes'
  }
  if (teks == 'admin') tags = {
    'admin': `Admin ${global.opts['restrict'] ? '' : '(Dinonaktifkan)'}`
  }
  if (teks == 'grup') tags = {
    'group': 'Grup'
  }
  if (teks == 'premium') tags = {
    'premium': 'Premium'
  }
  if (teks == 'internet') tags = {
    'internet': 'Internet'
  }
  if (teks == 'anonymous') tags = {
    'anonymous': 'Anonymous Chat'
  }
  if (teks == 'nulis') tags = {
    'nulis': 'MagerNulis & Logo'
  }
  if (teks == 'downloader') tags = {
    'downloader': 'Downloader'
  }
  if (teks == 'tools') tags = {
    'tools': 'Tools'
  }
  if (teks == 'fun') tags = {
    'fun': 'Fun'
  }
  if (teks == 'database') tags = {
    'database': 'Database'
  }
  if (teks == 'vote') tags = {
    'vote': 'Voting',
    'absen': 'Absen'
  }
  if (teks == 'quran') tags = {
    'quran': 'Al Qur\'an'
  }
  if (teks == 'audio') tags = {
    'audio': 'Pengubah Suara'
  }
  if (teks == 'jadibot') tags = {
    'jadibot': 'Jadi Bot'
  }
  if (teks == 'topupgame') tags = {
    'topupgame': 'TOPUP ML & FF'
  }
  if (teks == 'info') tags = {
    'info': 'Info'
  }
  if (teks == 'tanpakategori') tags = {
    '': 'Tanpa Kategori'
  }
  if (teks == 'owner') tags = {
    'owner': 'Owner',
    'host': 'Host',
    'advanced': 'Advanced'
  }



  try {
    let package = JSON.parse(await fs.promises.readFile(path.join(__dirname, '../package.json')).catch(_ => '{}'))
    let { exp, limit, level, role, registered } = global.db.data.users[m.sender]
    let { min, xp, max } = levelling.xpRange(level, global.multiplier)
    let name = registered ? global.db.data.users[m.sender].name : conn.getName(m.sender)
    let d = new Date(new Date + 3600000)
    let locale = 'id'
    // d.getTimeZoneOffset()
    // Offset -420 is 18.00
    // Offset    0 is  0.00
    // Offset  420 is  7.00
    let weton = ['Pahing', 'Pon', 'Wage', 'Kliwon', 'Legi'][Math.floor(d / 84600000) % 5]
    let week = d.toLocaleDateString(locale, { weekday: 'long' })
    let date = d.toLocaleDateString(locale, {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    })
    let dateIslamic = Intl.DateTimeFormat(locale + '-TN-u-ca-islamic', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    }).format(d)
    let time = d.toLocaleTimeString(locale, {
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric'
    })
    let _uptime = process.uptime() * 1000
    let _muptime
    if (process.send) {
      process.send('uptime')
      _muptime = await new Promise(resolve => {
        process.once('message', resolve)
        setTimeout(resolve, 1000)
      }) * 1000
    }
    let muptime = clockString(_muptime)
    let uptime = clockString(_uptime)
    let totalreg = Object.keys(global.db.data.users).length
    let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length
    let help = Object.values(global.plugins).filter(plugin => !plugin.disabled).map(plugin => {
      return {
        help: Array.isArray(plugin.help) ? plugin.help : [plugin.help],
        tags: Array.isArray(plugin.tags) ? plugin.tags : [plugin.tags],
        prefix: 'customPrefix' in plugin,
        limit: plugin.limit,
        premium: plugin.premium,
        enabled: !plugin.disabled,
      }
    })
    if (teks == '404') {
      return conn.relayWAMessage(conn.prepareMessageFromContent(m.chat, {
        "listMessage": {
          "title": `${ucapan()}, ${name}`.trim(),
          "description": "©botsky",
          "buttonText": "MENU",
          "listType": "SINGLE_SELECT",
          "sections": [
            {
              "rows": [
                {
                  "title": `𝙎𝙚𝙢𝙪𝙖 𝙋𝙚𝙧𝙞𝙣𝙩𝙖𝙝`,
                  "description": "menampilkan semua fitur",
                  "rowId": `${_p}? all`
                }, {
                  "title": "𝙂𝙖𝙢𝙚",
                  "description": "menampilkan fitur game",
                  "rowId": `${_p}? game`

                }, {
                  "title": "𝙓𝙋",
                  "description": "untuk tukar dengan limit",
                  "rowId": `${_p}? xp`

                }, {
                  "title": "𝙎𝙩𝙞𝙠𝙚𝙧",
                  "description": "menampilkan fitur stiker",
                  "rowId": `${_p}? stiker`
                }, {
                  "title": "𝙆𝙚𝙧𝙖𝙣𝙜 𝘼𝙟𝙖𝙞𝙗",
                  "description": "bertanya padanya",
                  "rowId": `${_p}? kerangajaib`
                }, {
                  "title": "𝙌𝙪𝙤𝙩𝙚𝙨",
                  "description": "kumpulan kata kata bijak",
                  "rowId": `${_p}? quotes`
                }, {
                  "title": "𝘼𝙙𝙢𝙞𝙣",
                  "description": "fitur khusus untuk admin group",
                  "rowId": `${_p}? admin`
                }, {
                  "title": "𝙂𝙧𝙪𝙥",
                  "description": "fitur yang hanya bisa digunakan digroup",
                  "rowId": `${_p}? grup`
                }, {
                  "title": "𝙋𝙧𝙚𝙢𝙞𝙪𝙢",
                  "description": "menampilkan list premium",
                  "rowId": `${_p}? premium`
                }, {
                  "title": "𝙄𝙣𝙩𝙚𝙧𝙣𝙚𝙩",
                  "description": "fitur pencarian",
                  "rowId": `${_p}? internet`
                }, {
                  "title": "𝘼𝙣𝙤𝙣𝙮𝙢𝙤𝙪𝙨",
                  "description": "mau chat dengan seseorang?",
                  "rowId": `${_p}? anonymous`
                }, {
                  "title": "𝙉𝙪𝙡𝙞𝙨 & 𝙇𝙤𝙜𝙤",
                  "description": "fitur bagi pemalas",
                  "rowId": `${_p}? nulis`
                }, {
                  "title": "𝘿𝙤𝙬𝙣𝙡𝙤𝙖𝙙𝙚𝙧",
                  "description": "download dari ig,yt,tiktok, dll",
                  "rowId": `${_p}? downloader`
                }, {
                  "title": "𝙏𝙤𝙤𝙡𝙨",
                  "description": "fitur alat serbaguna",
                  "rowId": `${_p}? tools`
                }, {
                  "title": "𝙁𝙪𝙣",
                  "description": "bermainlah bersamaku",
                  "rowId": `${_p}? fun`
                }, {
                  "title": "𝘿𝙖𝙩𝙖𝙗𝙖𝙨𝙚",
                  "description": "menyimpan data",
                  "rowId": `${_p}? database`
                }, {
                  "title": "𝙑𝙤𝙩𝙚 & 𝘼𝙗𝙨𝙚𝙣",
                  "description": "fitur untuk absen",
                  "rowId": `${_p}? vote`
                }, {
                  "title": "𝘼𝙡-𝙌𝙪𝙧\'𝙖𝙣",
                  "description": "jangan lupa ngaji",
                  "rowId": `${_p}? quran`
                }, {
                  "title": "𝙋𝙚𝙣𝙜𝙪𝙗𝙖𝙝 𝙎𝙪𝙖𝙧𝙖",
                  "description": "ubah vnmu menjadi suara aneh dan lucu",
                  "rowId": `${_p}? audio`
                }, {
                  "title": "𝙅𝙖𝙙𝙞 𝘽𝙤𝙩",
                  "description": "pingin punya bot seperti ini?",
                  "rowId": `${_p}? jadibot`
                }, {
                  "title": "𝗗𝗜𝗔𝗠𝗢𝗡𝗗 𝗠𝗟 & 𝗙𝗙",
                  "description": "tertarik beli, gak tertarik gausah komen",
                  "rowId": `${_p}? topupgame`
                }, {
                  "title": "𝙄𝙣𝙛𝙤",
                  "description": "tentang bot",
                  "rowId": `${_p}? info`
                }, {
                  "title": "𝙏𝙖𝙣𝙥𝙖 𝙆𝙖𝙩𝙚𝙜𝙤𝙧𝙞",
                  "description": "",
                  "rowId": `${_p}? tanpakategori`
                }, {
                  "title": "𝗢𝗪𝗡𝗘𝗥",
                  "description": "fitur khusus owner bot",
                  "rowId": `${_p}? owner`
                }
              ]
            }
          ], "contextInfo": {
            "stanzaId": m.key.id,
            "participant": m.sender,
            "quotedMessage": m.message
          }
        }
      }, {}), { waitForAck: true })
    }
    // gunakan ini jika kamu menggunakan whatsapp bisnis
    //   throw `
    // ┌〔 DAFTAR MENU 〕
    // ├ ${_p + command} all
    // ├ ${_p + command} game
    // ├ ${_p + command} xp
    // ├ ${_p + command} stiker
    // ├ ${_p + command} kerang
    // ├ ${_p + command} quotes
    // ├ ${_p + command} admin
    // ├ ${_p + command} group
    // ├ ${_p + command} premium
    // ├ ${_p + command} internet
    // ├ ${_p + command} anonymous
    // ├ ${_p + command} nulis
    // ├ ${_p + command} downloader
    // ├ ${_p + command} tools
    // ├ ${_p + command} fun
    // ├ ${_p + command} database
    // ├ ${_p + command} vote
    // ├ ${_p + command} quran
    // ├ ${_p + command} audio
    // ├ ${_p + command} jadibot
    // ├ ${_p + command} info
    // ├ ${_p + command} tanpa kategori
    // ├ ${_p + command} owner
    // └────  
    //     `.trim()
    let groups = {}
    for (let tag in tags) {
      groups[tag] = []
      for (let plugin of help)
        if (plugin.tags && plugin.tags.includes(tag))
          if (plugin.help) groups[tag].push(plugin)
      // for (let tag of plugin.tags)
      //   if (!(tag in tags)) tags[tag] = tag
    }
    conn.menu = conn.menu ? conn.menu : {}
    let before = conn.menu.before || defaultMenu.before
    let header = conn.menu.header || defaultMenu.header
    let body = conn.menu.body || defaultMenu.body
    let footer = conn.menu.footer || defaultMenu.footer
    let after = conn.menu.after || (conn.user.jid == global.conn.user.jid ? '' : `Dipersembahkan oleh https://wa.me/${global.conn.user.jid.split`@`[0]}`) + defaultMenu.after
    let _text = [
      before,
      ...Object.keys(tags).map(tag => {
        return header.replace(/%category/g, tags[tag]) + '\n' + [
          ...help.filter(menu => menu.tags && menu.tags.includes(tag) && menu.help).map(menu => {
            return menu.help.map(help => {
              return body.replace(/%cmd/g, menu.prefix ? help : '%p' + help)
                .replace(/%islimit/g, menu.limit ? '(Limit)' : '')
                .replace(/%isPremium/g, menu.premium ? '(Premium)' : '')
                .trim()
            }).join('\n')
          }),
          footer
        ].join('\n')
      }),
      after
    ].join('\n')
    text = typeof conn.menu == 'string' ? conn.menu : typeof conn.menu == 'object' ? _text : ''
    let replace = {
      '%': '%',
      p: _p, uptime, muptime,
      me: conn.user.name,
      npmname: package.name,
      npmdesc: package.description,
      version: package.version,
      exp: exp - min,
      maxexp: xp,
      totalexp: exp,
      xp4levelup: max - exp <= 0 ? `Siap untuk *${_p}levelup*` : `${max - exp} XP lagi untuk levelup`,
      github: package.homepage ? package.homepage.url || package.homepage : '[unknown github url]',
      level, limit, name, weton, week, date, dateIslamic, time, totalreg, rtotalreg, role,
      readmore: readMore
    }
    text = text.replace(new RegExp(`%(${Object.keys(replace).sort((a, b) => b.length - a.length).join`|`})`, 'g'), (_, name) => '' + replace[name])
    await conn.send2ButtonLoc(m.chat, await (await fetch("https://telegra.ph/file/88c2a95395e7f6845a59c.jpg")).buffer(), text.trim(), 'beri jeda bot 6 detik', 'Pemilik Bot', `#445`, 'Menu', `${_p} menu`, m)
  } catch (e) {
    conn.reply(m.chat, 'Maaf, menu sedang error', m)
    throw e
  }
}
handler.help = ['menu', 'help', '?']
handler.tags = ['main']
handler.command = /^(menu|help|\?)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.exp = 3

module.exports = handler

const more = String.fromCharCode(1)
const readMore = more.repeat(1)

function clockString(ms) {
  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
  return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')
}
function ucapan() {
  const time = moment.tz('Asia/Jakarta').format('HH')
  res = "Selamat dinihari"
  if (time >= 4) {
    res = "Selamat pagi"
  }
  if (time > 10) {
    res = "Selamat siang"
  }
  if (time >= 15) {
    res = "Selamat sore"
  }
  if (time >= 18) {
    res = "Selamat malam"
  }
  return res
}
