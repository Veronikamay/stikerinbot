let fetch = require("node-fetch")
let arr = []
fetch('https://raw.githubusercontent.com/AlvioAdjiJanuar/citacita/main/citacita.txt')
  .then(res => res.text())
  .then(txt => arr = txt.split('\n'))
let handler = async (m, { conn, participants }) => {
  let users = participants.map((u) => u.jid);
  let cita = arr[Math.floor(Math.random() * arr.length)]
  if (!cita) throw false
  await conn.sendFile(m.chat, cita, cita, null, m, 1, { mimetype: 'audio/mp4', { contexinfo: { mentionedjid: users}, })
}
handler.help = ['cita cita']

handler.tags = ['cita']

handler.command = /^cita$/i

module.exports = handler
