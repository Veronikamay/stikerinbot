let fetch = require('node-fetch')
let handler = async (m, { conn }) => await conn.sendButtonLoc(m.chat, await (await fetch("https://telegra.ph/file/4f85eeac87afdc8c0878d.jpg")).buffer(), `
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
`.trim(), 'silahkan buat format seperti ini\nlalu isi formatnya trus kirimdeh\nke admin.\nklik tombol dibawah atau\nketik #admin bila tombol tak muncul', 'Admin', '.owner', m)
handler.help = ['format']
handler.tags = ['topupgame']
handler.command = /^format$/i

module.exports = handler

