const { liza, commands } = require('../liza');

liza({
    pattern: "owner",
    alias: ["developer", "dev"],
    desc: "Displays the developer info",
    category: "owner",
    react: "👨‍💻",
    filename: __filename
}, async (conn, mek, m, {
    from, reply, pushname
}) => {
    try {
        const name = pushname || "there";

        const text = `
╭─⌈ *LIZAMWOL MD 𝗗𝗘𝗩𝗘𝗟𝗢𝗣𝗘𝗥* ⌋──
│
│ 👋 Hello *${name}*,
│
│ 🤖 I’m *𝙻ιzα мωσℓ own*, a multi-functional
│    WhatsApp Bot built to assist you!
│
│ 👨‍💻 *OWNER DETAILS:*
│ ───────────────
│ 🧠 *Name* : NITHIN
│ 🕯️ *Age* : 26
│ ☎️ *Contact* : wa.me/+918137829228
│ ▶️ *YouTube* : Mudiyan Offical (mudiyan)
│    https://www.youtube.com/@user-xt4kl4om5s
│
│ ⚡ Powered by *Lizamwol*
│
╰───────────────
        `.trim();

        await conn.sendMessage(
            from,
            {
                image: { url: 'https://files.catbox.moe/zu92j8.jpg' },
                caption: text,
                contextInfo: {
                    mentionedJid: [m.sender],
                    forwardingScore: 999,
                    isForwarded: true,
                    forwardedNewsletterMessageInfo: {
                        newsletterJid: '120363401718648491@newsletter',
                        newsletterName: '🪀『 LIZAMWOL-MD 』🪀',
                        serverMessageId: 143
                    },
                    externalAdReply: {
                        title: "Lizamwol-Md Bot",
                        body: "Created with love by mudiyan",
                        thumbnailUrl: 'https://files.catbox.moe/zu92j8.jpg',
                        mediaType: 1,
                        renderLargerThumbnail: true,
                        showAdAttribution: true,
                        mediaUrl: "https://www.youtube.com/@user-xt4kl4om5s",
                        sourceUrl: "https://www.youtube.com/@user-xt4kl4om5s"
                    }
                }
            },
            { quoted: mek }
        );
    } catch (e) {
        console.error("Error in .dev command:", e);
        reply(`❌ Error: ${e.message}`);
    }
});
