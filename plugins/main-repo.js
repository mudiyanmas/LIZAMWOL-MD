

const fetch = require('node-fetch');
const config = require('../settings');    
const { liza } = require('../liza');

liza({
    pattern: "repo",
    alias: ["sc", "script"],
    desc: "Fetch information about a GitHub repository.",
    react: "🧬",
    category: "info",
    filename: __filename,
},
async (conn, mek, m, { from, reply }) => {
    const githubRepoURL = 'https://github.com/mudiyanmas/LIZAMWOL-MD';

    try {
        // Extract username and repo name from the URL
        const [, username, repoName] = githubRepoURL.match(/github\.com\/([^/]+)\/([^/]+)/);

        // Fetch repository details using GitHub API
        const response = await fetch(`https://api.github.com/repos/${username}/${repoName}`);
        
        if (!response.ok) {
            throw new Error(`GitHub API request failed with status ${response.status}`);
        }

        const repoData = await response.json();

        // Format the repository information
        const formattedInfo = `
    🚀 𝙻ιzα мωσℓ ʀᴇᴘᴏ ɪɴғᴏ 🚀

╭──────────────━⊷
┇🤖 *ɴᴀᴍᴇ:* ${repoData.name}
┇⭐ *ᴛᴏᴛᴀʟ sᴛᴀʀs:* ${repoData.stargazers_count}
┇👥️ *ғᴏʀᴋs:* ${repoData.forks_count}
┇👀 *ᴡᴀᴛᴄʜᴇʀs:* ${repoData.watchers_count}
┇👤 *ᴏᴡɴᴇʀ:* 𝐌ᴜᴅͥɪͣʏͫᴀ𝐍🦋✭
┇🪀 *ᴅᴇsᴄʀɪᴘᴛɪᴏɴ:* ${repoData.description || 'No description available'}
╰──────────────━⊷
> 🌟 Star & 🍴 Fork the repo for more updates!

┋ ʀᴇᴘᴏ ʟɪɴᴋ: ${repoData.html_url}
╰──────────────━⊷
`;

        // Send an image with the formatted info as a caption and context info
        await conn.sendMessage(from, {
            image: { url: `https://files.catbox.moe/zu92j8.jpg` },
            caption: formattedInfo,
            contextInfo: { 
                mentionedJid: [m.sender],
                forwardingScore: 999,
                isForwarded: true,
                forwardedNewsletterMessageInfo: {
                    newsletterJid: '120363401718648491@newsletter',
                    newsletterName: '𝙻ιzα мωσℓ ʀᴇᴘᴏ',
                    serverMessageId: 143
                }
            }
        }, { quoted: mek });

    } catch (error) {
        console.error("❌ Error in repo command:", error);
        reply("⚠️ Sorry, something went wrong while fetching the repository information. Please try again later.");
    }
});
