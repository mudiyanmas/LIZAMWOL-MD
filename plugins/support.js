/*
Project Name : 𝙻ιzα мωσℓ
Creator      : 𝙻ιzα мωσℓ
Repo         : https://github.com/mudiyanmas/LIZAMWOL-MD
Support      : wa.me/918137829228
*/

const config = require('../settings');
const { liza, commands } = require('../liza');
const os = require("os");
const { runtime } = require('../lib/functions');
const axios = require('axios');
const more = String.fromCharCode(8206);
const readMore = more.repeat(4001);

liza({
    pattern: "support",
    alias: "follow",
    desc: "base",
    category: "support",
    react: "📡",
    filename: __filename
}, async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {

        // Get the current time for dynamic greeting
        const currentTime = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
        
        let dec = `
╭────────────≫
┋ 🌟 *ᴅᴇᴠᴇʟᴏᴘᴇʀ* : *𝐌ᴜᴅͥɪͣʏͫᴀ𝐍🦋✭ (🇿🇼)* 🌍
┋ 🚀 *ᴍᴏᴅᴇ* : *${config.MODE}*
┋ ⚡ *ᴘʀᴇғɪx* : *${config.PREFIX}*
┋ 🧩 *ᴠᴇʀsɪᴏɴ* : ${config.version}
┋ ⏳ *ᴜᴘᴛɪᴍᴇ* : _${runtime(process.uptime())}_
┋ 🕰️ *ᴄᴜʀʀᴇɴᴛ ᴛɪᴍᴇ* : _${currentTime}_
╰────────────≫

   💬 *𝙻ιzα мωσℓ sᴜᴘᴘᴏʀᴛ ʟɪɴᴋs* ↷

${readMore}
\`🔔 ᴄʜᴀɴɴᴇʟ🩵\`
🔗 https://whatsapp.com/channel/0029VbAtIuR8vd1H5FSip426

\`👥 ɢʀᴏᴜᴘ💙\`
🔗 https://chat.whatsapp.com/IDik0Yl1FnVGE6kiXsKUAG

\`🎥 ʏᴛ ᴄʜᴀɴɴᴇʟ🚀\`
🔗 https://www.youtube.com/@user-xt4kl4om5s

\`💻 𝚖𝚞𝚍𝚒𝚢𝚊𝚗\` *Developer🧑‍💻*
🔗 wa.me/918137829228?text=Support!

> 🚀 *ᴊᴏɪɴ 𝙻ιzα мωσℓ ᴄʜᴀɴɴᴇʟ* 🚀
`;

        await conn.sendMessage(
            from,
            {
                image: { url: `https://files.catbox.moe/zu92j8.jpg` },
                caption: dec,
                contextInfo: {
                    mentionedJid: [m.sender],
                    forwardingScore: 999,
                    isForwarded: true,
                    forwardedNewsletterMessageInfo: {
                        newsletterJid: '120363401718648491@newsletter',
                        newsletterName: '🪀『 𝙻𝙸𝚉𝙰𝙼𝚆𝙾𝙻-𝙼𝙳 』🪀',
                        serverMessageId: 143
                    }
                }
            },
            { quoted: mek }
        );

        // Send audio message with a fun personalized touch
        await conn.sendMessage(from, {
            audio: { url: 'https://github.com/XdKing2/MALVIN-DATA/raw/refs/heads/main/autovoice/menu2.mp3' },
            mimetype: 'audio/mp3',
            ptt: true
        }, { quoted: mek });

    } catch (e) {
        console.error(e);
        reply(`*⚠️ Oops! Something went wrong:* ${e.message}`);
    }
});

//  LIZAMWOL-MD
