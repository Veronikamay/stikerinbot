let fetch = require('node-fetch')
let handler = async (m, { conn }) => await conn.sendButtonLoc(m.chat, await (await fetch("https://telegra.ph/file/36a23608fc700652e1974.jpg")).buffer(), `
💎MOBILE LEGEND VIA ID💎
╔════♕
║➢86💎 20.200
║➢172💎 40.000
║➢257💎 57.100
║➢344💎 80.500
║➢429💎 110.350
║➢600💎 140.470
║➢706💎 165.500
║➢878💎 210.250
║➢963💎 225.500
║➢1050💎 245.200
║➢1412💎 325.900
║➢3688💎 796.300
║➢5532💎 1.190.800
║➢9288💎 1.999.900
╠════♕
║Starlight⭐️ 135.410
║Starlight⭐️+ 298.750
╚════♕
`.trim(), 'Beli syukur. ga beli gausah komen', 'Cara Bayar', '.bayar', m)
handler.help = ['topupff']
handler.tags = ['topupgame']
handler.command = /^topupml$/i

module.exports = handler
