const config = require('../config');
const { cmd } = require('../command');
const { runtime } = require('../lib/functions');

cmd({
    pattern: "menu",
    alias: ["menu", "fullmenu"],
    use: '.menu',
    desc: "Show all bot commands",
    category: "menu",
    react: "📜",
    filename: __filename
}, 
async (conn, mek, m, { from, sender }) => {
    try {
        let dec = `╭─❒〔  *${config.BOT_NAME}* 〕■□➣
┃➣╭───────────────────■■□□➣
│➣│▸ 👑 Owner : *${config.OWNER_NAME}*
│➣│▸ ⚙️ Prefix : *[${config.PREFIX}]*
│➣│▸ 🌐 Platform : *Wot Panel*
│➣│▸ 📦 Version : *3.0.0*
│➣│▸ ⏱️ Runtime : *${runtime(process.uptime())}*
│➣╰━━━━━━━━━❍━━━━━❍❍➣ 
╰────────❍─────❍❍➣

╭───❒〔 📥 *𝐃𝐎𝐖𝐍𝐋𝐎𝐀𝐃 𝐌𝐄𝐍𝐔* 〕■□➣
┃➣ song, video, apk, insta, play, img, spotify, tiktok, twitter, ytmp3, ytmp4, drama, gdrive, ssweb, tiks, mediafire
╰────────❍─────❍❍➣

╭━━〔 👥 *GROUP MENU* 〕━━┈⊷
┃◈ grouplink, kickall, add, remove, promote, demote, setwelcome, setgoodbye, ginfo, tagall, etc.
╰━━━━━━━━━━━━━━━━━━━┈⊷

╭━━〔 🎭 *REACTIONS MENU* 〕━━┈⊷
┃◈ hug, kiss, pat, slap, yeet, blush, wave, highfive, handhold, etc.
╰━━━━━━━━━━━━━━━━━━━┈⊷

╭━━〔 🎨 *LOGO MAKER* 〕━━┈⊷
┃◈ neonlight, blackpink, dragonball, 3dcomic, naruto, galaxy, hacker, devilwings, luxury, etc.
╰━━━━━━━━━━━━━━━━━━━┈⊷

╭━━〔 👑 *OWNER MENU* 〕━━┈⊷
┃◈ owner, block, unblock, restart, shutdown, setpp, repo, etc.
╰━━━━━━━━━━━━━━━━━━━┈⊷

╭━━〔 🎉 *FUN MENU* 〕━━┈⊷
┃◈ insult, hack, ship, joke, hrt, hpy, shy, poke, pickup, fancy, etc.
╰━━━━━━━━━━━━━━━━━━━┈⊷

╭━━〔 🔄 *CONVERT MENU* 〕━━┈⊷
┃◈ sticker, emojimix, tts, trt, base64, binary, tinyurl, etc.
╰━━━━━━━━━━━━━━━━━━━┈⊷

╭━━〔 🤖 *AI MENU* 〕━━┈⊷
┃◈ ai, gpt, gpt4, meta, copilot, imagine, jawad, blackbox, etc.
╰━━━━━━━━━━━━━━━━━━━┈⊷

╭━━〔 ⚡ *MAIN MENU* 〕━━┈⊷
┃◈ ping, runtime, uptime, repo, owner, menu
╰━━━━━━━━━━━━━━━━━━━┈⊷

╭━━〔 🎎 *ANIME MENU* 〕━━┈⊷
┃◈ waifu, neko, animegirl, anime1~5, animenews, naruto, etc.
╰━━━━━━━━━━━━━━━━━━━┈⊷

╭━━〔 ℹ️ *OTHER MENU* 〕━━┈⊷
┃◈ timenow, date, count, define, movie, weather, wikipedia, githubstalk, etc.
╰━━━━━━━━━━━━━━━━━━━┈⊷
> ${config.DESCRIPTION}`;

        await conn.sendMessage(
            from,
            {
                image: { url: config.MENU_IMAGE_URL || 'https://i.ibb.co/9mdMMZMB/96a836284720.jpg' },
                caption: dec,
                contextInfo: {
                    mentionedJid: [m.sender],
                    forwardingScore: 999,
                    isForwarded: true,
                    forwardedNewsletterMessageInfo: {
                        newsletterJid: '1203633540238@newsletter',
                        newsletterName: config.BOT_NAME,
                        serverMessageId: 143
                    }
                }
            },
            { quoted: mek }
        );
    } catch (e) {
        console.error(e);
        if (axios.isAxiosError(e)) {
            reply(`❌ Axios error: ${e.response?.status} - ${e.response?.statusText || 'Service Unavailable'}`);
        } else {
            reply(`❌ Unexpected error: ${e.message}`);
        }
    }
});
