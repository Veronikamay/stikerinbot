let handler = m => m

let linkRegex = /chat.whatsapp.com\/(?:invite\/)?([0-9A-Za-z]{20,24})/i
handler.before = async function (m, { isAdmin, isBotAdmin, command }) {
  if (m.isBaileys && m.fromMe) return true
  let chat = global.db.data.chats[m.chat];
  let ValidLink = (m.text.includes('https://') || m.text.includes('http://'))
  if (chat.antiLink && ValidLink && !isAdmin && !m.isBaileys && m.isGroup && !command) {
    let thisGroup = isBotAdmin ? `https://chat.whatsapp.com/${await conn.groupInviteCode(m.chat)}` : 0
    if (m.text.includes(thisGroup) && thisGroup != 0) throw false // jika link grup itu sendiri gak dikick
    await this.sendButton(m.chat, `*Link Terdeteksi!*${isBotAdmin ? '' : '\n\nbukan admin jadi gabisa kick t_t'}${opts['restrict'] ? '' : ''}`, '© bot', 'Matikan Antilink', ',0 report bang ada yang ngirim link', m)
    if (global.opts['restrict']) {
      if (isBotAdmin) this.groupRemove(m.chat, [m.sender])
    }
  }
  return true
}

module.exports = handler
