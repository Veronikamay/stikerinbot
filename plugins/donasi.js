let fetch = require('node-fetch')
let handler = async (m, { conn }) => await conn.sendButtonLoc(m.chat, await (await fetch("https://telegra.ph/file/871e8fc56ef9fef7c1643.jpg")).buffer(), `
┌〔 Donasi • Emoney 〕
├ Ovo, Dana, Gopay
├ *085155333010*
└────
`.trim(), 'yang baik dikasih pap tt ama dino', 'Donasi', '.donasi', m)
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
