let handler = m => m

const isValidURL = (url) => {
  return /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%.\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%\+.~#?&//=]*)/g.test(url);
}

handler.before = async function (m, { isAdmin, isBotAdmin, command }) {
  if (m.isBaileys && m.fromMe) return true
  let chat = global.db.data.chats[m.chat];
  let ValidLink = isValidURL(m.text) == true && (prefix).test(m.text) == false;
  if (chat.antiLink && ValidLink && !isAdmin && !m.isBaileys && m.isGroup && !command) {
    let thisGroup = isBotAdmin ? `https://chat.whatsapp.com/${await conn.groupInviteCode(m.chat)}` : 0
    if (m.text.includes(thisGroup) && thisGroup != 0) throw false // jika link grup itu sendiri gak dikick
    await this.reply(global.owner[0] + '@s.whatsapp.net', `

Pelaku pengirim troli @${m.sender.split`@`[0]}

ID: ${m.isGroup ? m.chat : m.sender}

Nama: ${m.isGroup ? this.getName(m.chat) : this.getName(m.sender)}

`.trim(), null, { contextInfo: { mentionedJid: [m.sender] } })
await this.sendButton(m.chat, `*Link Grup Terdeteksi!*${isBotAdmin ? '' : '\n\nbukan admin jadi gabisa kick t_t'}\n\nKetik *.off antilink* untuk mematikan fitur ini${opts['restrict'] ? '' : '\nketik *#on restrict* supaya bisa kick'}`, '© stikerin', 'Matikan Antilink', ',0 antilink', m)
    if (global.opts['restrict']) {
      if (isBotAdmin) this.groupRemove(m.chat, [m.sender])
    }
  }
  return true
}

module.exports = handler
