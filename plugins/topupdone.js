let fetch = require('node-fetch')
let handler = async (m, { conn }) => await conn.sendButtonLoc(m.chat, await (await fetch("https://telegra.ph/file/22a4bfab48d72117ffa51.jpg")).buffer(), `
`.trim(), 'Terimakasih sudah menjadi bagian dari kami, Semoga hari ini menjadi hari yang indah bagi kita Semua. :)', 'Menu', '.menu', m)
handler.help = ['done']
handler.tags = ['topupgame']
handler.command = /^done$/i
handler.owner = true

module.exports = handler
