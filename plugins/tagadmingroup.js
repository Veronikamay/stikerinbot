let handler = async (m, { conn, participants, groupMetadata, text }) => {

    const getGroupAdmins = (participants) => {
        admins = []
        for (let i of participants) {
            i.isAdmin ? admins.push(i.jid) : ''
        }
        return admins
    }

    let pp = './src/admin_group.jpg'
    try {
        pp = './src/admin_group.jpg'
    } catch (e) {
    } finally {
        let { isBanned, welcome, detect, sWelcome, sBye, sPromote, sDemote, antiLink, expired, descUpdate, stiker } = global.db.data.chats[m.chat]
        const groupAdmins = getGroupAdmins(participants)
        let listAdmin = groupAdmins.map((v, i) => `${i + 1}. @${v.split`@`[0]}`).join('\n')

        if (text) return m.reply(msToDate(expired - new Date() * 1))

        let caption = `*TAG ADMIN*\n
*Pembuat Grup:* 
@${m.chat.split`-`[0]}
*Admin Grup:*
${listAdmin}


`.trim()
        let mentionedJid = groupAdmins.concat([`${m.chat.split`-`[0]}@s.whatsapp.net`])
        conn.sendFile(m.key.remoteJid, pp, 'pp.jpg', caption, null, 0, { contextInfo: { mentionedJid } })
    }
}
handler.help = ['admin']
handler.tags = ['group']
handler.command = /^admin$/i

handler.group = true

module.exports = handler
