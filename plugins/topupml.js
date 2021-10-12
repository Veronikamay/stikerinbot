let fetch = require('node-fetch')
let handler = async (m, { conn }) => await conn.sendButtonLoc(m.chat, await (await fetch("https://telegra.ph/file/36a23608fc700652e1974.jpg")).buffer(), `
💎MOBILE LEGEND VIA ID💎
╔════♕
║➢86💎x Rp.20.200
║➢172💎x Rp.40.000
║➢257💎x Rp.57.100
║➢344💎x Rp.80.500
║➢429💎x Rp.110.350
║➢600💎x Rp.140.470
║➢706💎x Rp.165.500
║➢878💎x Rp.210.250
║➢963💎x Rp.225.500
║➢1050💎x Rp.245.200
║➢1412💎x Rp.325.900
║➢3688💎x Rp.796.300
║➢5532💎x Rp.1.190.800
║➢9288💎x Rp.1.999.900
╠════♕
║Starlight⭐️ Rp.135.410
║Starlight⭐️+ Rp.298.750
╚════♕
`.trim(), 'beli syukur ga beli gausah komen.\nsilahkan klik tombol bayar dibawah atau ketik #bayar bila tombol tak muncul', 'Cara Bayar', '.bayar', m)
handler.help = ['topupml']
handler.tags = ['topupgame']
handler.command = /^topupml$/i

module.exports = handler
