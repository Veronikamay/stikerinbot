let fetch = require('node-fetch')
let handler = async (m, { conn }) => await conn.sendButtonLoc(m.chat, await (await fetch("https://telegra.ph/file/de13b189f84ed5166fdc9.jpg")).buffer(), `
LIST RESELLER TOP UP FF
꧁FREE FIRE  VIA ID꧂
╔════♕
║➢8💎x Rp.900
║➢20💎x Rp.2.900
║➢50💎x Rp.8.000
║➢70💎x Rp.9700
║➢100💎x Rp.15.000
║➢140💎x Rp.19.500
║➢210💎x Rp.39.500
║➢280💎x Rp.48.000
║➢355💎x Rp.55.500
║➢425💎x Rp.64.500
║➢495💎x Rp.92.500
║➢500💎x Rp.93.500
║➢720💎x Rp.120.00
║➢860💎x Rp.132.00
║➢1000💎x Rp.145.000
║➢1075💎x Rp.154.000
║➢2000💎x Rp.287.000
║➢7290💎x Rp.929.500
╠════♕
║MEMBER MINGGUAN  Rp.28.410.00
║MEMBER BULANAN  Rp.112.750.00
╚════♕
`.trim(), 'beli syukur ga beli gausah komen.\nsilahkan klik tombol bayar dibawah atau ketik #bayar bila tombol tak muncul', 'Cara Bayar', '.bayar', m)
handler.help = ['topupff']
handler.tags = ['topupgame']
handler.command = /^topupff$/i

module.exports = handler
