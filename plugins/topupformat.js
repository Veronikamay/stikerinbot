let handler = async m => m.reply(`
*SILAHKAN UNTUK DIISI*
*DAN KIRIMKAN KEPADA ADMIN*
*BESERTA BUKTI PEMBAYARANNYA*
*AGAR LANGSUNG DIPROSES*
*OLEH ADMIN*

╠ FORMAT ORDER FF ╣  
➣Nick :  
➣ID  :  
➣Jumlah DM :  
➣Sisa DM 

╠ FORMAT ORDER ML ╣
➣Nick :  
➣ID ( SERVER ) :  
➣Jumlah DM :    
➣Sisa DM :
untuk info pembayaran silahkan tulis #bayar
`.trim()) // Tambah sendiri kalo mau
handler.help = ['format']
handler.tags = ['topupgame']
handler.command = /^fotmat$/i

module.exports = handler
