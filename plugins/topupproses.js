let fetch = require('node-fetch')
let handler = async (m, { conn }) => await conn.sendButtonLoc(m.chat, await (await fetch("https://telegra.ph/file/da27f5c948bedbe4763dc.jpg")).buffer(), `
Sedang diproses siahkan ditunggu.

Perlu diketahui:
1. Bila kamu penjual, Jangan pernah berjaji kepada buyer/pembeli bahwa diamond akan masuk seketika, Karena kami butuh prosese dalam pengiriman min 5menit max 30menit (tergantung servers),

2. Ini diamond resmi bukan diamond merah jadi anti band atau anti minus diamond,

3. Toko buka dari 08:00-20:00, Pembayaran/transaksi diatas jam 20:00 maka akan diproses dikemudian hari.

Terimakasih sudah menjadi bagian dari kami, Semoga hari ini menjadi hari yang indah bagi kita Semua. :)
`.trim())
handler.help = ['proses']
handler.tags = ['topupgame']
handler.command = /^proses$/i
handler.owner = true

module.exports = handler
