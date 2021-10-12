let fetch = require('node-fetch')
let handler = async (m, { conn }) => await conn.sendButtonLoc(m.chat, await (await fetch("https://telegra.ph/file/de13b189f84ed5166fdc9.jpg")).buffer(), `
LIST RESELLER TOP UP FF
꧁FREE FIRE  VIA ID꧂
╔════♕
║➢8∙💎∙ 900
║➢20∙💎∙ 2.900
║➢50∙💎∙ 8.000
║➢70∙💎∙ 9700
║➢100∙💎∙ 1.5000
║➢140∙💎∙ 19.500
║➢210∙💎∙ 39.500
║➢280∙💎∙ 48.000
║➢355∙💎∙ 55.500
║➢425💎∙ 64.500
║➢495∙💎∙ 92.500
║➢500∙💎∙93.500
║➢720∙💎∙120.00
║➢860∙💎∙132.00
║➢1000∙💎∙ 145.000
║➢1075∙💎∙154.000
║➢2000∙💎∙ 287.000
║➢7290∙💎∙ 929.500
╠════♕
║MEMBER MINGGUAN  28.410
║MEMBER BULANAN  112.750.
╚════♕
`.trim(), 'Beli syukur. ga beli gausah komen', 'Cara Bayar', '.bayar', m)
handler.help = ['topupff']
handler.tags = ['topupgame']
handler.command = /^topupff$/i

module.exports = handler
