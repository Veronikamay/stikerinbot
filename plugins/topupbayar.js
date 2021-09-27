let handler = async m => m.reply(`
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
untuk format pembayaran silahkan tulis #format
`.trim()) // Tambah sendiri kalo mau
handler.help = ['bayar']
handler.tags = ['topupgame']
handler.command = /^bayar$/i

module.exports = handler
