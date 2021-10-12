let fetch = require('node-fetch')
let handler = async (m, { conn }) => await conn.sendButtonLoc(m.chat, await (await fetch("https://telegra.ph/file/cb4ea582a4951570ac6b6.jpg")).buffer(), `
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
`.trim(), 'silahkan isi format', 'Format', '.format', m)
handler.help = ['topupff']
handler.tags = ['topupgame']
handler.command = /^topupml$/i

module.exports = handler
