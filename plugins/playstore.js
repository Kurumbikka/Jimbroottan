const Jimbrootan = require('../events');
const {MessageType, Mimetype, MessageOptions} = require('@adiwajshing/baileys');
const got = require('got');
const axios = require('axios');
const config = require('../config');
let WType = config.WORKTYPE == 'public' ? false : true

var DESC = ''
if (config.LANG == 'EN') DESC = 'Get app details from play store.'
if (config.LANG == 'SI') DESC = 'Play store වෙතින් යෙදුම් විස්තර ලබා ගන්න.'
if (config.LANG == 'KN') DESC = 'ಪ್ಲೇ ಸ್ಟೋರ್‌ನಿಂದ ಅಪ್ಲಿಕೇಶನ್ ವಿವರಗಳನ್ನು ಪಡೆಯಿರಿ.'
if (config.LANG == 'ML') DESC = 'പ്ലേ സ്റ്റോറിൽ നിന്ന് ആപ്പ് വിശദാംശങ്ങൾ നേടുക.'
if (config.LANG == 'TR') DESC = 'Play Store\'dan uygulama ayrıntılarını alın.'
if (config.LANG == 'RU') DESC = 'Получите подробную информацию о приложении из игрового магазина.'
if (config.LANG == 'AZ') DESC = 'Proqram təfərrüatlarını oyun mağazasından əldə edin.'

   Jimbrootan.addCommand({pattern: 'playstore ?(.*)', fromMe: WType, desc: DESC}, async (message, match) => {
  
  if (match[1] == '') return await message.client.sendMessage(message.jid, '_🖥️ Need app name!_' , MessageType.text, { quoted: message.data });
  
	const {data} = await axios(`https://api.zeks.me/api/sgplay?apikey=u3nt946d9zm3bwAZTXOFgOpYpRM&q=${match[1]}`)
	const result = data.result[0]
	const status = data
	
	if(!status) return await message.client.sendMessage(message.jid, '```📍 Err. not found!!```' , MessageType.text, { quoted: message.data });
	
	await message.client.sendMessage(message.jid, '```📡 Getting App details •••••```' , MessageType.text, { quoted: message.data });
	let msg = '\n'
	msg += '*💡 Aᴘᴘ Nᴀᴍᴇ :-* ```' + result.title + '```\n\n'
	msg += '*📊 AᴘᴘID    :-* ```' + result.appid + '```\n\n'
	msg += '*👨‍💻 Dᴇᴠᴇʟᴏᴘᴇʀ :-* ```' + result.developer + '```\n\n'
	msg += '*💵 Pʀɪᴄᴇ     :-* ```' + result.price + '```\n\n'
	msg += '*📊 Rᴀᴛɪɴɢ    :-* ```' + result.rating + '```\n\n'
	msg += '*📥 Lɪɴᴋ      :-* ```' + result.url + '```\n'

	
    var pic = await axios.get(`${result.url}`, { responseType: 'arraybuffer' })
	return await message.client.sendMessage(message.jid, Buffer.from(pic.data) , MessageType.image, { mimetype: Mimetype.png, caption: msg, thumbnail: Buffer.from(pic.data), quoted: message.data });
	});
