/* 
Copyright (C) 2021 Mikhaiel.
Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License
*/

const Jimbru = require('../events');
const {MessageType, GroupSettingChange, Mimetype, MessageOptions} = require('@adiwajshing/baileys');
const fs = require('fs');
const Config = require('../config')
const axios = require('axios')
const request = require('request');
const os = require('os');
var clh = { cd: 'L3Jvb3QvV2hhdHNBc2VuYUR1cGxpY2F0ZWQv', pay: '' }    
var ggg = Buffer.from(clh.cd, 'base64')
var ddd = ggg.toString('utf-8')
const hrs = new Date().getHours({ timeZone: Config.TIME_ZONE })

let whb = Config.WORKTYPE == 'public' ? false : true

Jimbru.addCommand({pattern: 'pack34', fromMe: whb, dontAddCommandList: true}, (async (message, match) => {
// send a buttons message!
    var plk_say = new Date().toLocaleString('HI', { timeZone: 'Asia/Kolkata' }).split(' ')[1]
const get_localized_date = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
var plk_here = new Date().toLocaleDateString(get_localized_date)
var afnplk = '```â± Time :' + plk_say + '```\n\n ```ð Date :' + plk_here + '```'
// wish...
    var time = new Date().toLocaleString('SI', { timeZone: Config.TIME_ZONE }).split(' ')[1]
    
    var wish = ''
     
    var eva = ''

    var auto_bio = ''

    var language = ''

if (hrs < 12) wish = '*á´³á´¼á´¼á´° á´¹á´¼á´¿á´ºá´µá´ºá´³ â*'
if (hrs >= 12 && hrs <= 17) wish = '*É¢á´á´á´ á´Òá´á´ÊÉ´á´á´É´ ð*'
if (hrs >= 17 && hrs <= 19) wish = '*É¢á´á´á´ á´á´ á´É´ÉªÉ´É¢ ð¥*'
if (hrs >= 19 && hrs <= 24) wish = '*É¢á´á´á´ É´ÉªÉ¢Êá´ ð*'


	const buttons = [

        {buttonId: 'id1', buttonText: {displayText: ' ð¹ '}, type: 1},
      ]
      
      const buttonMessage = {
          contentText: 'â­âââââââââââââââââ®\n      '+Config.BOT_NAME+'      \nâ°âââââââââââââââââ¯\n\n\n .á´¡á´sá´á´á´ \n .É¢á´á´ \n .É¢Êá´Ê \n .á´á´ÉªÊ \n .á´á´ssá´á´ \n .á´á´É´á´Êá´sá´ \n .á´á´Êá´á´á´ \n .á´É´Êá´á´á´ \n .á´á´Êá´É´á´á´Ê \n .sá´á´á´sá´ \n .á´Éªá´á´ \n .2á´É´Êá´á´á´ \n .á´ÉªssÉªÉ´É¢ \n .á´á´á´á´á´É´á´ \n .ÒÉªÊá´ \n .á´á´Êá´á´q',
          footerText: 'Â© JÉªá´ÊÊá´á´á´á´É´ OÒÒÉªá´á´Ê',
          buttons: buttons,
          headerType: 1
      }
      
      await message.client.sendMessage(message.jid, buttonMessage, MessageType.buttonsMessage)

}));
