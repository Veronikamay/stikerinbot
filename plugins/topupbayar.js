let fetch = require('node-fetch')
let handler = async (m, { conn }) => await conn.sendButtonLoc(m.chat, await (await fetch("https://telegra.ph/file/de1a1ed40ad2e546eb7d1.jpg")).buffer(), `
╔♕ PEMBAYARAN ♕
║ Silahkan bayar melalui 
║ Gopay/OVO/Dana ke no :
║ [085155333010]
╠════♕
║ Bila Melalui Alfamart Bisa
║ Hubungi Admin untuk minta
║ Kode pembayaran. 
║ (kena biaya pelayanan
║ 2.500 dari pihak alfa)
╠════♕
║ Bila sudah melakukan 
║ Pembayaran, jangan lupa
║ Kirimkan bukti pembayaran
║ Ke wa.me/6283102050562
╚════♕
PROSES TRANSAKSI
1. LAKUKAN PEMBAYARAN
2. KIRIMKAN BUKTI PEMBAYARAN
3. ISI FORMAT ORDER DAN KIRIMKAN
4. KAMI PROSES
5. SELESAI
➣DIBAWAH 10K WAJIB VIA DANA.
➣KURANG GAKAN DIPROSES
SEBELUM MELUNASI KURANGNYA.
╔════════╗
terimakasih sudah percaya
dan menggunakan jasa kami
╚════════╝
`.trim(), 'silahkan isi format, klik tomblo isi format dibawah atau ketik #format bila tombol tidak muncul/format tidak muncul', 'FORMAT', '.format', m)
handler.help = ['bayar']
handler.tags = ['topupgame']
handler.command = /^bayar$/i
handler.owner = false

module.exports = handler
