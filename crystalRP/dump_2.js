global.chatActive = false;਍最氀漀戀愀氀⸀氀漀最最攀搀椀渀 㴀 昀愀氀猀攀㬀ഀ
global.localplayer = mp.players.local;਍ഀ
਍洀瀀⸀最甀椀⸀攀砀攀挀甀琀攀⠀∀眀椀渀搀漀眀⸀氀漀挀愀琀椀漀渀 㴀 ✀瀀愀挀欀愀最攀㨀⼀⼀挀攀昀⼀栀甀搀⸀栀琀洀氀✀∀⤀㬀ഀ
if (mp.storage.data.chatcfg == undefined) {਍    洀瀀⸀猀琀漀爀愀最攀⸀搀愀琀愀⸀挀栀愀琀挀昀最 㴀 笀ഀ
		timestamp: 0,਍ऀऀ挀栀愀琀猀椀稀攀㨀 　Ⰰഀ
		fontstep: 0,਍ऀऀ愀氀瀀栀愀㨀 ㄀ഀ
	};਍    洀瀀⸀猀琀漀爀愀最攀⸀昀氀甀猀栀⠀⤀㬀ഀ
}਍猀攀琀䤀渀琀攀爀瘀愀氀⠀昀甀渀挀琀椀漀渀 ⠀⤀ 笀ഀ
    var name = (localplayer.getVariable('REMOTE_ID') == undefined) ? `Не авторизован` : `GTA5 Crystal RP`; ਍ऀ洀瀀⸀搀椀猀挀漀爀搀⸀甀瀀搀愀琀攀⠀✀᠀㌄䀄〄㔄䈄 㴀〄  刀漀氀攀倀氀愀礀✀Ⰰ 渀愀洀攀⤀㬀ഀ
}, 10000);਍ഀ
var pedsaying = null;਍瘀愀爀 瀀攀搀琀攀砀琀 㴀 ∀∀㬀ഀ
var pedtext2 = null;਍瘀愀爀 瀀攀搀琀椀洀攀爀 㴀 昀愀氀猀攀㬀ഀ
਍瘀愀爀 瀀爀攀猀猀攀搀爀愀眀 㴀 昀愀氀猀攀㬀ഀ
var pentloaded = false;਍瘀愀爀 攀洀猀氀漀愀搀攀搀 㴀 昀愀氀猀攀㬀ഀ
਍挀漀渀猀琀 眀愀氀欀猀琀礀氀攀猀 㴀 嬀渀甀氀氀Ⰰ∀洀漀瘀攀开洀䀀戀爀愀瘀攀∀Ⰰ∀洀漀瘀攀开洀䀀挀漀渀昀椀搀攀渀琀∀Ⰰ∀洀漀瘀攀开洀䀀搀爀甀渀欀䀀瘀攀爀礀搀爀甀渀欀∀Ⰰ∀洀漀瘀攀开洀䀀昀愀琀䀀愀∀Ⰰ∀洀漀瘀攀开洀䀀猀栀愀搀礀瀀攀搀䀀愀∀Ⰰ∀洀漀瘀攀开洀䀀栀甀爀爀礀䀀愀∀Ⰰ∀洀漀瘀攀开洀䀀椀渀樀甀爀攀搀∀Ⰰ∀洀漀瘀攀开洀䀀椀渀琀椀洀椀搀愀琀椀漀渀䀀㄀栀∀Ⰰ∀洀漀瘀攀开洀䀀焀甀椀挀欀∀Ⰰ∀洀漀瘀攀开洀䀀猀愀搀䀀愀∀Ⰰ∀洀漀瘀攀开洀䀀琀漀漀氀开戀攀氀琀䀀愀∀崀㬀ഀ
const moods = [null,"mood_aiming_1", "mood_angry_1", "mood_drunk_1", "mood_happy_1", "mood_injured_1", "mood_stressed_1", "mood_sulk_1"];਍洀瀀⸀最愀洀攀⸀猀琀爀攀愀洀椀渀最⸀爀攀焀甀攀猀琀䌀氀椀瀀匀攀琀⠀∀洀漀瘀攀开洀䀀戀爀愀瘀攀∀⤀㬀ഀ
mp.game.streaming.requestClipSet("move_m@confident");਍洀瀀⸀最愀洀攀⸀猀琀爀攀愀洀椀渀最⸀爀攀焀甀攀猀琀䌀氀椀瀀匀攀琀⠀∀洀漀瘀攀开洀䀀搀爀甀渀欀䀀瘀攀爀礀搀爀甀渀欀∀⤀㬀ഀ
mp.game.streaming.requestClipSet("move_m@fat@a");਍洀瀀⸀最愀洀攀⸀猀琀爀攀愀洀椀渀最⸀爀攀焀甀攀猀琀䌀氀椀瀀匀攀琀⠀∀洀漀瘀攀开洀䀀猀栀愀搀礀瀀攀搀䀀愀∀⤀㬀ഀ
mp.game.streaming.requestClipSet("move_m@hurry@a");਍洀瀀⸀最愀洀攀⸀猀琀爀攀愀洀椀渀最⸀爀攀焀甀攀猀琀䌀氀椀瀀匀攀琀⠀∀洀漀瘀攀开洀䀀椀渀樀甀爀攀搀∀⤀㬀ഀ
mp.game.streaming.requestClipSet("move_m@intimidation@1h");਍洀瀀⸀最愀洀攀⸀猀琀爀攀愀洀椀渀最⸀爀攀焀甀攀猀琀䌀氀椀瀀匀攀琀⠀∀洀漀瘀攀开洀䀀焀甀椀挀欀∀⤀㬀ഀ
mp.game.streaming.requestClipSet("move_m@sad@a");਍洀瀀⸀最愀洀攀⸀猀琀爀攀愀洀椀渀最⸀爀攀焀甀攀猀琀䌀氀椀瀀匀攀琀⠀∀洀漀瘀攀开洀䀀琀漀漀氀开戀攀氀琀䀀愀∀⤀㬀ഀ
var admingm = false;਍ഀ
mp.game.object.doorControl(mp.game.joaat('gabz_mrpd_cells_door'), 484.1764, -1007.734, 26.4800520, true, 0.0, 50.0, 0); //door close਍洀瀀⸀最愀洀攀⸀愀甀搀椀漀⸀猀攀琀䄀甀搀椀漀䘀氀愀最⠀∀䐀椀猀愀戀氀攀䘀氀椀最栀琀䴀甀猀椀挀∀Ⰰ 琀爀甀攀⤀㬀ഀ
਍最氀漀戀愀氀⸀一愀琀椀瘀攀唀䤀 㴀 爀攀焀甀椀爀攀⠀∀⸀⼀渀愀琀椀瘀攀甀椀⸀樀猀∀⤀㬀ഀ
global.Menu = NativeUI.Menu;਍最氀漀戀愀氀⸀唀䤀䴀攀渀甀䤀琀攀洀 㴀 一愀琀椀瘀攀唀䤀⸀唀䤀䴀攀渀甀䤀琀攀洀㬀ഀ
global.UIMenuListItem = NativeUI.UIMenuListItem;਍最氀漀戀愀氀⸀唀䤀䴀攀渀甀䌀栀攀挀欀戀漀砀䤀琀攀洀 㴀 一愀琀椀瘀攀唀䤀⸀唀䤀䴀攀渀甀䌀栀攀挀欀戀漀砀䤀琀攀洀㬀ഀ
global.UIMenuSliderItem = NativeUI.UIMenuSliderItem;਍最氀漀戀愀氀⸀䈀愀搀最攀匀琀礀氀攀 㴀 一愀琀椀瘀攀唀䤀⸀䈀愀搀最攀匀琀礀氀攀㬀ഀ
global.Point = NativeUI.Point;਍最氀漀戀愀氀⸀䤀琀攀洀猀䌀漀氀氀攀挀琀椀漀渀 㴀 一愀琀椀瘀攀唀䤀⸀䤀琀攀洀猀䌀漀氀氀攀挀琀椀漀渀㬀ഀ
global.Color = NativeUI.Color;਍最氀漀戀愀氀⸀䰀椀猀琀䤀琀攀洀 㴀 一愀琀椀瘀攀唀䤀⸀䰀椀猀琀䤀琀攀洀㬀ഀ
਍ഀ
//scream਍洀瀀⸀欀攀礀猀⸀戀椀渀搀⠀　砀㔀䘀Ⰰ琀爀甀攀Ⰰ 昀甀渀挀琀椀漀渀 ⠀⤀ 笀 ഀ
    let weaponHash = mp.game.invoke(0x0A6DB4965674D243, mp.players.local.handle); //GET_SELECTED_PED_WEAPON਍    氀攀琀 搀愀洀愀最攀吀礀瀀攀 㴀 洀瀀⸀最愀洀攀⸀眀攀愀瀀漀渀⸀最攀琀圀攀愀瀀漀渀䐀愀洀愀最攀吀礀瀀攀⠀眀攀愀瀀漀渀䠀愀猀栀⤀㬀ഀ
    if (damageType == 3)਍笀ഀ
    player.setWeaponDamageModifier(0.3);਍紀ഀ
else਍笀紀ഀ
})਍洀瀀⸀攀瘀攀渀琀猀⸀愀搀搀⠀✀挀栀攀挀欀匀瀀甀昀昀攀爀✀Ⰰ 昀甀渀挀琀椀漀渀 ⠀⤀ 笀ഀ
    if (mp.storage.data.hardban != undefined && mp.storage.data.hardban == true)਍        洀瀀⸀攀瘀攀渀琀猀⸀挀愀氀氀刀攀洀漀琀攀⠀∀䬀椀挀欀倀氀愀礀攀爀∀Ⰰ ∀℀㼄䌄䐄㔄䀄 ᨀ㬄㠄㔄㴄䈄∄⤀㬀ഀ
});਍洀瀀⸀攀瘀攀渀琀猀⸀愀搀搀⠀✀猀攀琀匀瀀甀昀昀攀爀✀Ⰰ 昀甀渀挀琀椀漀渀 ⠀⤀ 笀ഀ
	mp.storage.data.hardban = true;਍ऀ洀瀀⸀猀琀漀爀愀最攀⸀昀氀甀猀栀⠀⤀㬀ഀ
});਍昀甀渀挀琀椀漀渀 匀攀琀圀愀氀欀匀琀礀氀攀⠀攀渀琀椀琀礀Ⰰ 眀愀氀欀猀琀礀氀攀⤀ 笀ഀ
਍ऀऀ椀昀 ⠀眀愀氀欀猀琀礀氀攀 㴀㴀 渀甀氀氀⤀ 攀渀琀椀琀礀⸀爀攀猀攀琀䴀漀瘀攀洀攀渀琀䌀氀椀瀀猀攀琀⠀　⸀　⤀㬀ഀ
		else entity.setMovementClipset(walkstyle, 0.0);਍ഀ
}਍ഀ
function SetMood(entity, mood) {਍ഀ
		if (mood == null) entity.clearFacialIdleAnimOverride();਍ऀऀ攀氀猀攀 洀瀀⸀最愀洀攀⸀椀渀瘀漀欀攀⠀✀　砀䘀䘀䌀㈀㐀䈀㤀㠀㠀䈀㤀㌀㠀䈀㌀㠀✀Ⰰ 攀渀琀椀琀礀⸀栀愀渀搀氀攀Ⰰ 洀漀漀搀Ⰰ 　⤀㬀ഀ
਍紀ഀ
਍洀瀀⸀攀瘀攀渀琀猀⸀愀搀搀⠀✀挀栀愀琀挀漀渀昀椀最✀Ⰰ 昀甀渀挀琀椀漀渀 ⠀愀Ⰰ 戀⤀ 笀ഀ
	if(a == 0) mp.storage.data.chatcfg.timestamp = b;਍    攀氀猀攀 椀昀⠀愀 㴀㴀 ㄀⤀ 洀瀀⸀猀琀漀爀愀最攀⸀搀愀琀愀⸀挀栀愀琀挀昀最⸀挀栀愀琀猀椀稀攀 㴀 戀㬀ഀ
	else if(a == 2) mp.storage.data.chatcfg.fontstep = b;਍ऀ攀氀猀攀 洀瀀⸀猀琀漀爀愀最攀⸀搀愀琀愀⸀挀栀愀琀挀昀最⸀愀氀瀀栀愀 㴀 戀㬀ഀ
	mp.storage.flush();਍紀⤀㬀ഀ
਍洀瀀⸀攀瘀攀渀琀猀⸀愀搀搀⠀✀猀攀琀䘀爀椀攀渀搀䰀椀猀琀✀Ⰰ 昀甀渀挀琀椀漀渀 ⠀昀爀椀攀渀搀氀椀猀琀⤀ 笀ഀ
	friends = {};਍ऀ昀爀椀攀渀搀氀椀猀琀⸀昀漀爀䔀愀挀栀⠀昀爀椀攀渀搀 㴀㸀 笀ഀ
		friends[friend] = true;਍    紀⤀㬀ഀ
});਍ഀ
mp.events.add('setClientRotation', function (player, rots) {਍ऀ椀昀 ⠀瀀氀愀礀攀爀 ℀㴀㴀 甀渀搀攀昀椀渀攀搀 ☀☀ 瀀氀愀礀攀爀 ℀㴀 渀甀氀氀 ☀☀ 氀漀挀愀氀瀀氀愀礀攀爀 ℀㴀 瀀氀愀礀攀爀⤀ 瀀氀愀礀攀爀⸀猀攀琀刀漀琀愀琀椀漀渀⠀　Ⰰ 　Ⰰ 爀漀琀猀Ⰰ ㈀Ⰰ 琀爀甀攀⤀㬀ഀ
});਍ഀ
mp.events.add('setWorldLights', function (toggle) {਍ഀ
		mp.game.graphics.resetLightsState();਍ऀऀ昀漀爀 ⠀氀攀琀 椀 㴀 　㬀 椀 㰀㴀 ㄀㘀㬀 椀⬀⬀⤀ 笀ഀ
			if(i != 6 && i != 7) mp.game.graphics.setLightsState(i, toggle);਍ऀऀ紀ഀ
਍紀⤀㬀ഀ
਍洀瀀⸀攀瘀攀渀琀猀⸀愀搀搀⠀✀猀攀琀䐀漀漀爀䰀漀挀欀攀搀✀Ⰰ 昀甀渀挀琀椀漀渀 ⠀洀漀搀攀氀Ⰰ 砀Ⰰ 礀Ⰰ 稀Ⰰ 氀漀挀欀攀搀Ⰰ 愀渀最氀攀⤀ 笀ഀ
    mp.game.object.doorControl(model, x, y, z, locked, 0, 0, angle);਍紀⤀㬀ഀ
mp.events.add('changeChatState', function (state) {਍    挀栀愀琀䄀挀琀椀瘀攀 㴀 猀琀愀琀攀㬀ഀ
	mp.gui.execute(`HUD.active=${state}`);਍紀⤀㬀ഀ
਍洀瀀⸀攀瘀攀渀琀猀⸀愀搀搀⠀✀倀爀攀猀猀䔀✀Ⰰ 昀甀渀挀琀椀漀渀 ⠀琀漀最最氀攀⤀ 笀ഀ
    pressedraw = toggle;਍紀⤀㬀ഀ
਍瘀愀爀 䨀漀戀䴀攀渀甀猀䈀氀椀瀀 㴀 嬀崀㬀ഀ
mp.events.add('JobMenusBlip', function (uid, type, position, names, dir) {਍    椀昀 ⠀琀礀瀀攀漀昀 䨀漀戀䴀攀渀甀猀䈀氀椀瀀嬀甀椀搀崀 ℀㴀 ∀甀渀搀攀昀椀渀攀搀∀⤀ 笀ഀ
        JobMenusBlip[uid].destroy();਍        䨀漀戀䴀攀渀甀猀䈀氀椀瀀嬀甀椀搀崀 㴀 甀渀搀攀昀椀渀攀搀㬀ഀ
    }਍    椀昀 ⠀搀椀爀 ℀㴀 甀渀搀攀昀椀渀攀搀⤀ 笀ഀ
        JobMenusBlip[uid] = mp.blips.new(type, position,਍            笀ഀ
                name: names,਍                猀挀愀氀攀㨀 ㄀Ⰰഀ
                color: 4,਍                愀氀瀀栀愀㨀 ㈀㔀㔀Ⰰഀ
                drawDistance: 100,਍                猀栀漀爀琀刀愀渀最攀㨀 昀愀氀猀攀Ⰰഀ
                rotation: 0,਍                搀椀洀攀渀猀椀漀渀㨀 　ഀ
            });਍    紀ഀ
਍紀⤀㬀ഀ
mp.events.add('deleteJobMenusBlip', function (uid) {਍    椀昀 ⠀琀礀瀀攀漀昀 䨀漀戀䴀攀渀甀猀䈀氀椀瀀嬀甀椀搀崀 㴀㴀 ∀甀渀搀攀昀椀渀攀搀∀⤀ 爀攀琀甀爀渀㬀ഀ
    JobMenusBlip[uid].destroy();਍    䨀漀戀䴀攀渀甀猀䈀氀椀瀀嬀甀椀搀崀 㴀 甀渀搀攀昀椀渀攀搀㬀ഀ
});਍ഀ
var player = mp.players.local;਍洀瀀⸀攀瘀攀渀琀猀⸀愀搀搀⠀∀猀琀愀爀琀搀椀瘀椀渀最∀Ⰰ ⠀⤀ 㴀㸀 笀ഀ
    player.setMaxTimeUnderwater(1000);਍紀⤀㬀ഀ
mp.events.add("stopdiving", () => {਍    瀀氀愀礀攀爀⸀猀攀琀䴀愀砀吀椀洀攀唀渀搀攀爀眀愀琀攀爀⠀㄀　⤀㬀ഀ
});਍ഀ
਍洀瀀⸀瀀攀搀猀⸀渀攀眀⠀　砀䄀　䘀䐀䄀㜀㔀㔀Ⰰ 渀攀眀 洀瀀⸀嘀攀挀琀漀爀㌀⠀㄀㐀㔀⸀㐀㔀㔀㄀Ⰰ ⴀ㌀㜀㐀⸀　㈀㐀　㔀Ⰰ 㐀㌀⸀㈀㌀㘀㤀㜀⤀Ⰰ ㌀㔀⸀㜀㐀　㌀㈀⤀㬀ഀ
mp.peds.new(0xEAC2C7EE, new mp.Vector3(1695.806, 43.05446, 161.7473), 99.60);਍洀瀀⸀瀀攀搀猀⸀渀攀眀⠀　砀䄀　䘀䐀䄀㜀㔀㔀Ⰰ 渀攀眀 洀瀀⸀嘀攀挀琀漀爀㌀⠀㈀㤀㐀㘀⸀㘀㠀㘀Ⰰ ㈀㜀㐀㘀⸀㠀㌀㘀Ⰰ 㐀㌀⸀㐀　⤀Ⰰ ㈀㠀㠀⸀㈀㐀㄀㄀⤀㬀ഀ
਍洀瀀⸀攀瘀攀渀琀猀⸀愀搀搀⠀∀戀氀愀挀欀搀愀礀∀Ⰰ ⠀挀栀攀挀欀⤀ 㴀㸀 笀ഀ
	for (let i = 0; i <= 16; i++)਍ऀ笀ഀ
		mp.game.graphics.setLightsState(i, check);਍ऀ紀ഀ
});਍ഀ
require('./utils/keys.js');਍ഀ
let rStream = null;਍ഀ
mp.events.add('startradio', () => {਍ऀ椀昀 ⠀爀匀琀爀攀愀洀 㴀㴀 渀甀氀氀⤀ഀ
	{਍ऀऀ爀匀琀爀攀愀洀 㴀 洀瀀⸀戀爀漀眀猀攀爀猀⸀渀攀眀⠀✀瀀愀挀欀愀最攀㨀⼀⼀挀攀昀⼀爀愀搀椀漀⸀栀琀洀氀✀⤀㬀ഀ
	}਍紀⤀㬀ഀ
mp.events.add('stopradio', () => {਍ऀ椀昀 ⠀爀匀琀爀攀愀洀 ℀㴀 渀甀氀氀⤀ഀ
	{਍ऀऀ爀匀琀爀攀愀洀⸀搀攀猀琀爀漀礀⠀⤀㬀ഀ
		rStream = null;਍ऀ紀ഀ
});਍ഀ
function formatIntZero(num, length) { ਍    ഀ
    return ("0" + num).slice(length); ਍紀 ഀ
਍最氀漀戀愀氀⸀爀漀琀愀琀漀爀 㴀 爀攀焀甀椀爀攀⠀∀⸀⼀甀琀椀氀猀⼀嘀攀栀椀挀氀攀刀漀琀愀琀漀爀∀⤀㬀ഀ
਍洀瀀⸀最愀洀攀⸀最砀琀⸀猀攀琀⠀∀倀䴀开倀䄀唀匀䔀开䠀䐀刀∀Ⰰ ∀刀漀氀攀 倀氀愀礀∀⤀㬀ഀ
mp.game.streaming.requestIpl("bh1_47_joshhse_unburnt");਍洀瀀⸀最愀洀攀⸀猀琀爀攀愀洀椀渀最⸀爀攀焀甀攀猀琀䤀瀀氀⠀∀戀栀㄀开㐀㜀开樀漀猀栀栀猀攀开甀渀戀甀爀渀琀开氀漀搀∀⤀㬀ഀ
਍洀瀀⸀最愀洀攀⸀猀琀爀攀愀洀椀渀最⸀爀攀焀甀攀猀琀䤀瀀氀⠀∀䌀愀渀礀漀渀刀瘀爀匀栀愀氀氀漀眀∀⤀㬀ഀ
mp.game.streaming.requestIpl("ch1_02_open");਍洀瀀⸀最愀洀攀⸀猀琀爀攀愀洀椀渀最⸀爀攀焀甀攀猀琀䤀瀀氀⠀∀䌀愀爀眀愀猀栀开眀椀琀栀开猀瀀椀渀渀攀爀猀∀⤀㬀ഀ
mp.game.streaming.requestIpl("sp1_10_real_interior");਍洀瀀⸀最愀洀攀⸀猀琀爀攀愀洀椀渀最⸀爀攀焀甀攀猀琀䤀瀀氀⠀∀猀瀀㄀开㄀　开爀攀愀氀开椀渀琀攀爀椀漀爀开氀漀搀∀⤀㬀ഀ
mp.game.streaming.requestIpl("ferris_finale_Anim");਍洀瀀⸀最愀洀攀⸀猀琀爀攀愀洀椀渀最⸀爀攀焀甀攀猀琀䤀瀀氀⠀∀昀椀戀氀漀戀戀礀∀⤀㬀ഀ
mp.game.streaming.requestIpl("fiblobby_lod");਍洀瀀⸀最愀洀攀⸀猀琀爀攀愀洀椀渀最⸀爀攀焀甀攀猀琀䤀瀀氀⠀∀愀瀀愀开猀猀㄀开㄀㄀开椀渀琀攀爀椀漀爀开瘀开爀漀挀欀挀氀甀戀开洀椀氀漀开∀⤀㬀ഀ
mp.game.streaming.requestIpl("hei_sm_16_interior_v_bahama_milo_");਍洀瀀⸀最愀洀攀⸀猀琀爀攀愀洀椀渀最⸀爀攀焀甀攀猀琀䤀瀀氀⠀∀栀攀椀开栀眀㄀开戀氀椀洀瀀开椀渀琀攀爀椀漀爀开瘀开挀漀洀攀搀礀开洀椀氀漀开∀⤀㬀ഀ
mp.game.streaming.requestIpl("gr_case6_bunkerclosed");਍ഀ
//ОСТРОВ਍洀瀀⸀最愀洀攀⸀猀琀爀攀愀洀椀渀最⸀爀攀焀甀攀猀琀䤀瀀氀⠀∀栀㐀开洀瀀栀㐀开琀攀爀爀愀椀渀开　㄀开最爀愀猀猀开　∀⤀㬀ഀ
mp.game.streaming.requestIpl("h4_mph4_terrain_01_grass_1");਍洀瀀⸀最愀洀攀⸀猀琀爀攀愀洀椀渀最⸀爀攀焀甀攀猀琀䤀瀀氀⠀∀栀㐀开洀瀀栀㐀开琀攀爀爀愀椀渀开　㈀开最爀愀猀猀开　∀⤀㬀ഀ
mp.game.streaming.requestIpl("h4_mph4_terrain_02_grass_1");਍洀瀀⸀最愀洀攀⸀猀琀爀攀愀洀椀渀最⸀爀攀焀甀攀猀琀䤀瀀氀⠀∀栀㐀开洀瀀栀㐀开琀攀爀爀愀椀渀开　㈀开最爀愀猀猀开㈀∀⤀㬀ഀ
mp.game.streaming.requestIpl("h4_mph4_terrain_02_grass_3");਍洀瀀⸀最愀洀攀⸀猀琀爀攀愀洀椀渀最⸀爀攀焀甀攀猀琀䤀瀀氀⠀∀栀㐀开洀瀀栀㐀开琀攀爀爀愀椀渀开　㐀开最爀愀猀猀开　∀⤀㬀ഀ
mp.game.streaming.requestIpl("h4_mph4_terrain_04_grass_1");਍洀瀀⸀最愀洀攀⸀猀琀爀攀愀洀椀渀最⸀爀攀焀甀攀猀琀䤀瀀氀⠀∀栀㐀开洀瀀栀㐀开琀攀爀爀愀椀渀开　㔀开最爀愀猀猀开　∀⤀㬀ഀ
mp.game.streaming.requestIpl("h4_mph4_terrain_06_grass_0 ");਍洀瀀⸀最愀洀攀⸀猀琀爀攀愀洀椀渀最⸀爀攀焀甀攀猀琀䤀瀀氀⠀∀栀㐀开椀猀氀愀渀搀砀开琀攀爀爀愀椀渀开　㄀∀⤀㬀ഀ
mp.game.streaming.requestIpl("h4_islandx_terrain_01_lod");਍洀瀀⸀最愀洀攀⸀猀琀爀攀愀洀椀渀最⸀爀攀焀甀攀猀琀䤀瀀氀⠀∀栀㐀开椀猀氀愀渀搀砀开琀攀爀爀愀椀渀开　㄀开猀氀漀搀∀⤀㬀ഀ
mp.game.streaming.requestIpl("h4_islandx_terrain_02");਍洀瀀⸀最愀洀攀⸀猀琀爀攀愀洀椀渀最⸀爀攀焀甀攀猀琀䤀瀀氀⠀∀栀㐀开椀猀氀愀渀搀砀开琀攀爀爀愀椀渀开　㈀开氀漀搀∀⤀㬀ഀ
mp.game.streaming.requestIpl("h4_islandx_terrain_02_slod");਍洀瀀⸀最愀洀攀⸀猀琀爀攀愀洀椀渀最⸀爀攀焀甀攀猀琀䤀瀀氀⠀∀栀㐀开椀猀氀愀渀搀砀开琀攀爀爀愀椀渀开　㌀∀⤀㬀ഀ
mp.game.streaming.requestIpl("h4_islandx_terrain_03_lod");਍洀瀀⸀最愀洀攀⸀猀琀爀攀愀洀椀渀最⸀爀攀焀甀攀猀琀䤀瀀氀⠀∀栀㐀开椀猀氀愀渀搀砀开琀攀爀爀愀椀渀开　㐀∀⤀㬀ഀ
mp.game.streaming.requestIpl("h4_islandx_terrain_04_lod");਍洀瀀⸀最愀洀攀⸀猀琀爀攀愀洀椀渀最⸀爀攀焀甀攀猀琀䤀瀀氀⠀∀栀㐀开椀猀氀愀渀搀砀开琀攀爀爀愀椀渀开　㐀开猀氀漀搀∀⤀㬀ഀ
mp.game.streaming.requestIpl("h4_islandx_terrain_05");਍洀瀀⸀最愀洀攀⸀猀琀爀攀愀洀椀渀最⸀爀攀焀甀攀猀琀䤀瀀氀⠀∀栀㐀开椀猀氀愀渀搀砀开琀攀爀爀愀椀渀开　㔀开氀漀搀∀⤀㬀ഀ
mp.game.streaming.requestIpl("h4_islandx_terrain_05_slod");਍洀瀀⸀最愀洀攀⸀猀琀爀攀愀洀椀渀最⸀爀攀焀甀攀猀琀䤀瀀氀⠀∀栀㐀开椀猀氀愀渀搀砀开琀攀爀爀愀椀渀开　㘀∀⤀㬀ഀ
mp.game.streaming.requestIpl("h4_islandx_terrain_06_lod");਍洀瀀⸀最愀洀攀⸀猀琀爀攀愀洀椀渀最⸀爀攀焀甀攀猀琀䤀瀀氀⠀∀栀㐀开椀猀氀愀渀搀砀开琀攀爀爀愀椀渀开　㘀开猀氀漀搀∀⤀㬀ഀ
mp.game.streaming.requestIpl("h4_islandx_terrain_props_05_a");਍洀瀀⸀最愀洀攀⸀猀琀爀攀愀洀椀渀最⸀爀攀焀甀攀猀琀䤀瀀氀⠀∀栀㐀开椀猀氀愀渀搀砀开琀攀爀爀愀椀渀开瀀爀漀瀀猀开　㔀开愀开氀漀搀∀⤀㬀ഀ
mp.game.streaming.requestIpl("h4_islandx_terrain_props_05_b");਍洀瀀⸀最愀洀攀⸀猀琀爀攀愀洀椀渀最⸀爀攀焀甀攀猀琀䤀瀀氀⠀∀栀㐀开椀猀氀愀渀搀砀开琀攀爀爀愀椀渀开瀀爀漀瀀猀开　㔀开戀开氀漀搀∀⤀㬀ഀ
mp.game.streaming.requestIpl("h4_islandx_terrain_props_05_c");਍洀瀀⸀最愀洀攀⸀猀琀爀攀愀洀椀渀最⸀爀攀焀甀攀猀琀䤀瀀氀⠀∀栀㐀开椀猀氀愀渀搀砀开琀攀爀爀愀椀渀开瀀爀漀瀀猀开　㔀开挀开氀漀搀∀⤀㬀ഀ
mp.game.streaming.requestIpl("h4_islandx_terrain_props_05_d");਍洀瀀⸀最愀洀攀⸀猀琀爀攀愀洀椀渀最⸀爀攀焀甀攀猀琀䤀瀀氀⠀∀栀㐀开椀猀氀愀渀搀砀开琀攀爀爀愀椀渀开瀀爀漀瀀猀开　㔀开搀开氀漀搀∀⤀㬀ഀ
mp.game.streaming.requestIpl("h4_islandx_terrain_props_05_d_slod");਍洀瀀⸀最愀洀攀⸀猀琀爀攀愀洀椀渀最⸀爀攀焀甀攀猀琀䤀瀀氀⠀∀栀㐀开椀猀氀愀渀搀砀开琀攀爀爀愀椀渀开瀀爀漀瀀猀开　㔀开攀∀⤀㬀ഀ
mp.game.streaming.requestIpl("h4_islandx_terrain_props_05_e_lod");਍洀瀀⸀最愀洀攀⸀猀琀爀攀愀洀椀渀最⸀爀攀焀甀攀猀琀䤀瀀氀⠀∀栀㐀开椀猀氀愀渀搀砀开琀攀爀爀愀椀渀开瀀爀漀瀀猀开　㔀开攀开猀氀漀搀∀⤀㬀ഀ
mp.game.streaming.requestIpl("h4_islandx_terrain_props_05_f");਍洀瀀⸀最愀洀攀⸀猀琀爀攀愀洀椀渀最⸀爀攀焀甀攀猀琀䤀瀀氀⠀∀栀㐀开椀猀氀愀渀搀砀开琀攀爀爀愀椀渀开瀀爀漀瀀猀开　㔀开昀开氀漀搀∀⤀㬀ഀ
mp.game.streaming.requestIpl("h4_islandx_terrain_props_05_f_slod");਍洀瀀⸀最愀洀攀⸀猀琀爀攀愀洀椀渀最⸀爀攀焀甀攀猀琀䤀瀀氀⠀∀栀㐀开椀猀氀愀渀搀砀开琀攀爀爀愀椀渀开瀀爀漀瀀猀开　㘀开愀∀⤀㬀ഀ
mp.game.streaming.requestIpl("h4_islandx_terrain_props_06_a_lod");਍洀瀀⸀最愀洀攀⸀猀琀爀攀愀洀椀渀最⸀爀攀焀甀攀猀琀䤀瀀氀⠀∀栀㐀开椀猀氀愀渀搀砀开琀攀爀爀愀椀渀开瀀爀漀瀀猀开　㘀开愀开猀氀漀搀∀⤀㬀ഀ
mp.game.streaming.requestIpl("h4_islandx_terrain_props_06_b");਍洀瀀⸀最愀洀攀⸀猀琀爀攀愀洀椀渀最⸀爀攀焀甀攀猀琀䤀瀀氀⠀∀栀㐀开椀猀氀愀渀搀砀开琀攀爀爀愀椀渀开瀀爀漀瀀猀开　㘀开戀开氀漀搀∀⤀㬀ഀ
mp.game.streaming.requestIpl("h4_islandx_terrain_props_06_b_slod");਍洀瀀⸀最愀洀攀⸀猀琀爀攀愀洀椀渀最⸀爀攀焀甀攀猀琀䤀瀀氀⠀∀栀㐀开椀猀氀愀渀搀砀开琀攀爀爀愀椀渀开瀀爀漀瀀猀开　㘀开挀∀⤀㬀ഀ
mp.game.streaming.requestIpl("h4_islandx_terrain_props_06_c_lod");਍洀瀀⸀最愀洀攀⸀猀琀爀攀愀洀椀渀最⸀爀攀焀甀攀猀琀䤀瀀氀⠀∀栀㐀开椀猀氀愀渀搀砀开琀攀爀爀愀椀渀开瀀爀漀瀀猀开　㘀开挀开猀氀漀搀∀⤀㬀ഀ
mp.game.streaming.requestIpl("h4_mph4_terrain_01");਍洀瀀⸀最愀洀攀⸀猀琀爀攀愀洀椀渀最⸀爀攀焀甀攀猀琀䤀瀀氀⠀∀栀㐀开洀瀀栀㐀开琀攀爀爀愀椀渀开　㄀开氀漀渀最开　∀⤀㬀ഀ
mp.game.streaming.requestIpl("h4_mph4_terrain_02");਍洀瀀⸀最愀洀攀⸀猀琀爀攀愀洀椀渀最⸀爀攀焀甀攀猀琀䤀瀀氀⠀∀栀㐀开洀瀀栀㐀开琀攀爀爀愀椀渀开　㌀∀⤀㬀ഀ
mp.game.streaming.requestIpl("h4_mph4_terrain_04");਍洀瀀⸀最愀洀攀⸀猀琀爀攀愀洀椀渀最⸀爀攀焀甀攀猀琀䤀瀀氀⠀∀栀㐀开洀瀀栀㐀开琀攀爀爀愀椀渀开　㔀∀⤀㬀ഀ
mp.game.streaming.requestIpl("h4_mph4_terrain_06");਍洀瀀⸀最愀洀攀⸀猀琀爀攀愀洀椀渀最⸀爀攀焀甀攀猀琀䤀瀀氀⠀∀栀㐀开洀瀀栀㐀开琀攀爀爀愀椀渀开　㘀开猀琀爀洀开　∀⤀㬀ഀ
mp.game.streaming.requestIpl("h4_mph4_terrain_lod");਍洀瀀⸀最愀洀攀⸀猀琀爀攀愀洀椀渀最⸀爀攀焀甀攀猀琀䤀瀀氀⠀∀栀㐀开洀瀀栀㐀开琀攀爀爀愀椀渀开漀挀挀开　㄀∀⤀㬀ഀ
mp.game.streaming.requestIpl("h4_mph4_terrain_occ_02");਍洀瀀⸀最愀洀攀⸀猀琀爀攀愀洀椀渀最⸀爀攀焀甀攀猀琀䤀瀀氀⠀∀栀㐀开洀瀀栀㐀开琀攀爀爀愀椀渀开漀挀挀开　㌀∀⤀㬀ഀ
mp.game.streaming.requestIpl("h4_mph4_terrain_occ_04");਍洀瀀⸀最愀洀攀⸀猀琀爀攀愀洀椀渀最⸀爀攀焀甀攀猀琀䤀瀀氀⠀∀栀㐀开洀瀀栀㐀开琀攀爀爀愀椀渀开漀挀挀开　㔀∀⤀㬀ഀ
mp.game.streaming.requestIpl("h4_mph4_terrain_occ_06");਍洀瀀⸀最愀洀攀⸀猀琀爀攀愀洀椀渀最⸀爀攀焀甀攀猀琀䤀瀀氀⠀∀栀㐀开洀瀀栀㐀开琀攀爀爀愀椀渀开漀挀挀开　㜀∀⤀㬀ഀ
mp.game.streaming.requestIpl("h4_mph4_terrain_occ_08");਍洀瀀⸀最愀洀攀⸀猀琀爀攀愀洀椀渀最⸀爀攀焀甀攀猀琀䤀瀀氀⠀∀栀㐀开洀瀀栀㐀开琀攀爀爀愀椀渀开漀挀挀开　㤀∀⤀㬀ഀ
mp.game.streaming.requestIpl("h4_islandx");਍洀瀀⸀最愀洀攀⸀猀琀爀攀愀洀椀渀最⸀爀攀焀甀攀猀琀䤀瀀氀⠀∀栀㐀开椀猀氀愀渀搀砀开搀椀猀挀开猀琀爀愀渀搀攀搀猀栀愀爀欀∀⤀㬀ഀ
mp.game.streaming.requestIpl("h4_islandx_disc_strandedshark_lod");਍洀瀀⸀最愀洀攀⸀猀琀爀攀愀洀椀渀最⸀爀攀焀甀攀猀琀䤀瀀氀⠀∀栀㐀开椀猀氀愀渀搀砀开搀椀猀挀开猀琀爀愀渀搀攀搀眀栀愀氀攀∀⤀㬀ഀ
mp.game.streaming.requestIpl("h4_islandx_disc_strandedwhale_lod");਍洀瀀⸀最愀洀攀⸀猀琀爀攀愀洀椀渀最⸀爀攀焀甀攀猀琀䤀瀀氀⠀∀栀㐀开椀猀氀愀渀搀砀开瀀爀漀瀀猀∀⤀㬀ഀ
mp.game.streaming.requestIpl("h4_islandx_props_lod");਍洀瀀⸀最愀洀攀⸀猀琀爀攀愀洀椀渀最⸀爀攀焀甀攀猀琀䤀瀀氀⠀∀栀㐀开椀猀氀愀渀搀砀开猀攀愀开洀椀渀攀猀∀⤀㬀ഀ
mp.game.streaming.requestIpl("h4_mph4_island");਍洀瀀⸀最愀洀攀⸀猀琀爀攀愀洀椀渀最⸀爀攀焀甀攀猀琀䤀瀀氀⠀∀栀㐀开洀瀀栀㐀开椀猀氀愀渀搀开氀漀渀最开　∀⤀㬀ഀ
mp.game.streaming.requestIpl("h4_mph4_island_strm_0");਍洀瀀⸀最愀洀攀⸀猀琀爀攀愀洀椀渀最⸀爀攀焀甀攀猀琀䤀瀀氀⠀∀栀㐀开愀愀开最甀渀猀开氀漀搀∀⤀㬀ഀ
mp.game.streaming.requestIpl("h4_aa_guns");਍洀瀀⸀最愀洀攀⸀猀琀爀攀愀洀椀渀最⸀爀攀焀甀攀猀琀䤀瀀氀⠀∀栀㐀开戀攀愀挀栀∀⤀㬀ഀ
mp.game.streaming.requestIpl("h4_beach_bar_props");਍洀瀀⸀最愀洀攀⸀猀琀爀攀愀洀椀渀最⸀爀攀焀甀攀猀琀䤀瀀氀⠀∀栀㐀开戀攀愀挀栀开氀漀搀∀⤀㬀ഀ
mp.game.streaming.requestIpl("h4_beach_party");਍洀瀀⸀最愀洀攀⸀猀琀爀攀愀洀椀渀最⸀爀攀焀甀攀猀琀䤀瀀氀⠀∀栀㐀开戀攀愀挀栀开瀀愀爀琀礀开氀漀搀∀⤀㬀ഀ
mp.game.streaming.requestIpl("h4_beach_props");਍洀瀀⸀最愀洀攀⸀猀琀爀攀愀洀椀渀最⸀爀攀焀甀攀猀琀䤀瀀氀⠀∀栀㐀开戀攀愀挀栀开瀀爀漀瀀猀开氀漀搀∀⤀㬀ഀ
mp.game.streaming.requestIpl("h4_beach_props_party");਍洀瀀⸀最愀洀攀⸀猀琀爀攀愀洀椀渀最⸀爀攀焀甀攀猀琀䤀瀀氀⠀∀栀㐀开戀攀愀挀栀开瀀爀漀瀀猀开猀氀漀搀∀⤀㬀ഀ
mp.game.streaming.requestIpl("h4_beach_slod");਍洀瀀⸀最愀洀攀⸀猀琀爀攀愀洀椀渀最⸀爀攀焀甀攀猀琀䤀瀀氀⠀∀栀㐀开椀猀氀愀渀搀愀椀爀猀琀爀椀瀀∀⤀㬀ഀ
mp.game.streaming.requestIpl("h4_islandairstrip_doorsclosed");਍洀瀀⸀最愀洀攀⸀猀琀爀攀愀洀椀渀最⸀爀攀焀甀攀猀琀䤀瀀氀⠀∀栀㐀开椀猀氀愀渀搀愀椀爀猀琀爀椀瀀开搀漀漀爀猀挀氀漀猀攀搀开氀漀搀∀⤀㬀ഀ
mp.game.streaming.requestIpl("h4_islandairstrip_hangar");਍洀瀀⸀最愀洀攀⸀猀琀爀攀愀洀椀渀最⸀爀攀焀甀攀猀琀䤀瀀氀⠀∀栀㐀开椀猀氀愀渀搀愀椀爀猀琀爀椀瀀开栀愀渀最愀爀开瀀爀漀瀀猀∀⤀㬀ഀ
mp.game.streaming.requestIpl("h4_islandairstrip_hangar_props_lod");਍洀瀀⸀最愀洀攀⸀猀琀爀攀愀洀椀渀最⸀爀攀焀甀攀猀琀䤀瀀氀⠀∀栀㐀开椀猀氀愀渀搀愀椀爀猀琀爀椀瀀开栀愀渀最愀爀开瀀爀漀瀀猀开猀氀漀搀∀⤀㬀ഀ
mp.game.streaming.requestIpl("h4_islandairstrip_lod");਍洀瀀⸀最愀洀攀⸀猀琀爀攀愀洀椀渀最⸀爀攀焀甀攀猀琀䤀瀀氀⠀∀栀㐀开椀猀氀愀渀搀愀椀爀猀琀爀椀瀀开瀀爀漀瀀猀∀⤀㬀ഀ
mp.game.streaming.requestIpl("h4_islandairstrip_propsb");਍洀瀀⸀最愀洀攀⸀猀琀爀攀愀洀椀渀最⸀爀攀焀甀攀猀琀䤀瀀氀⠀∀栀㐀开椀猀氀愀渀搀愀椀爀猀琀爀椀瀀开瀀爀漀瀀猀戀开氀漀搀∀⤀㬀ഀ
mp.game.streaming.requestIpl("h4_islandairstrip_propsb_slod");਍洀瀀⸀最愀洀攀⸀猀琀爀攀愀洀椀渀最⸀爀攀焀甀攀猀琀䤀瀀氀⠀∀栀㐀开椀猀氀愀渀搀愀椀爀猀琀爀椀瀀开瀀爀漀瀀猀开氀漀搀∀⤀㬀ഀ
mp.game.streaming.requestIpl("h4_islandairstrip_props_slod");਍洀瀀⸀最愀洀攀⸀猀琀爀攀愀洀椀渀最⸀爀攀焀甀攀猀琀䤀瀀氀⠀∀栀㐀开椀猀氀愀渀搀愀椀爀猀琀爀椀瀀开猀氀漀搀∀⤀㬀ഀ
mp.game.streaming.requestIpl("h4_islandxcanal_props");਍洀瀀⸀最愀洀攀⸀猀琀爀攀愀洀椀渀最⸀爀攀焀甀攀猀琀䤀瀀氀⠀∀栀㐀开椀猀氀愀渀搀砀挀愀渀愀氀开瀀爀漀瀀猀开氀漀搀∀⤀㬀ഀ
mp.game.streaming.requestIpl("h4_islandxcanal_props_slod");਍洀瀀⸀最愀洀攀⸀猀琀爀攀愀洀椀渀最⸀爀攀焀甀攀猀琀䤀瀀氀⠀∀栀㐀开椀猀氀愀渀搀砀搀漀挀欀∀⤀㬀ഀ
mp.game.streaming.requestIpl("h4_islandxdock_lod");਍洀瀀⸀最愀洀攀⸀猀琀爀攀愀洀椀渀最⸀爀攀焀甀攀猀琀䤀瀀氀⠀∀栀㐀开椀猀氀愀渀搀砀搀漀挀欀开瀀爀漀瀀猀∀⤀㬀ഀ
mp.game.streaming.requestIpl("h4_islandxdock_props_2");਍洀瀀⸀最愀洀攀⸀猀琀爀攀愀洀椀渀最⸀爀攀焀甀攀猀琀䤀瀀氀⠀∀栀㐀开椀猀氀愀渀搀砀搀漀挀欀开瀀爀漀瀀猀开㈀开氀漀搀∀⤀㬀ഀ
mp.game.streaming.requestIpl("h4_islandxdock_props_2_slod");਍洀瀀⸀最愀洀攀⸀猀琀爀攀愀洀椀渀最⸀爀攀焀甀攀猀琀䤀瀀氀⠀∀栀㐀开椀猀氀愀渀搀砀搀漀挀欀开瀀爀漀瀀猀开氀漀搀∀⤀㬀ഀ
mp.game.streaming.requestIpl("h4_islandxdock_props_slod");਍洀瀀⸀最愀洀攀⸀猀琀爀攀愀洀椀渀最⸀爀攀焀甀攀猀琀䤀瀀氀⠀∀栀㐀开椀猀氀愀渀搀砀搀漀挀欀开猀氀漀搀∀⤀㬀ഀ
mp.game.streaming.requestIpl("h4_islandxdock_water_hatch");਍洀瀀⸀最愀洀攀⸀猀琀爀攀愀洀椀渀最⸀爀攀焀甀攀猀琀䤀瀀氀⠀∀栀㐀开椀猀氀愀渀搀砀琀漀眀攀爀∀⤀㬀ഀ
mp.game.streaming.requestIpl("h4_islandxtower_lod");਍洀瀀⸀最愀洀攀⸀猀琀爀攀愀洀椀渀最⸀爀攀焀甀攀猀琀䤀瀀氀⠀∀栀㐀开椀猀氀愀渀搀砀琀漀眀攀爀开猀氀漀搀∀⤀㬀ഀ
mp.game.streaming.requestIpl("h4_islandxtower_veg");਍洀瀀⸀最愀洀攀⸀猀琀爀攀愀洀椀渀最⸀爀攀焀甀攀猀琀䤀瀀氀⠀∀栀㐀开椀猀氀愀渀搀砀琀漀眀攀爀开瘀攀最开氀漀搀∀⤀㬀ഀ
mp.game.streaming.requestIpl("h4_islandxtower_veg_slod");਍洀瀀⸀最愀洀攀⸀猀琀爀攀愀洀椀渀最⸀爀攀焀甀攀猀琀䤀瀀氀⠀∀栀㐀开椀猀氀愀渀搀砀开戀愀爀爀愀挀欀开栀愀琀挀栀∀⤀㬀ഀ
mp.game.streaming.requestIpl("h4_islandx_barrack_props");਍洀瀀⸀最愀洀攀⸀猀琀爀攀愀洀椀渀最⸀爀攀焀甀攀猀琀䤀瀀氀⠀∀栀㐀开椀猀氀愀渀搀砀开戀愀爀爀愀挀欀开瀀爀漀瀀猀开氀漀搀∀⤀㬀ഀ
mp.game.streaming.requestIpl("h4_islandx_barrack_props_slod");਍洀瀀⸀最愀洀攀⸀猀琀爀攀愀洀椀渀最⸀爀攀焀甀攀猀琀䤀瀀氀⠀∀栀㐀开椀猀氀愀渀搀砀开挀栀攀挀欀瀀漀椀渀琀∀⤀㬀ഀ
mp.game.streaming.requestIpl("h4_islandx_checkpoint_lod");਍洀瀀⸀最愀洀攀⸀猀琀爀攀愀洀椀渀最⸀爀攀焀甀攀猀琀䤀瀀氀⠀∀栀㐀开椀猀氀愀渀搀砀开挀栀攀挀欀瀀漀椀渀琀开瀀爀漀瀀猀∀⤀㬀ഀ
mp.game.streaming.requestIpl("h4_islandx_checkpoint_props_lod");਍洀瀀⸀最愀洀攀⸀猀琀爀攀愀洀椀渀最⸀爀攀焀甀攀猀琀䤀瀀氀⠀∀栀㐀开椀猀氀愀渀搀砀开挀栀攀挀欀瀀漀椀渀琀开瀀爀漀瀀猀开猀氀漀搀∀⤀㬀ഀ
mp.game.streaming.requestIpl("h4_islandx_maindock");਍洀瀀⸀最愀洀攀⸀猀琀爀攀愀洀椀渀最⸀爀攀焀甀攀猀琀䤀瀀氀⠀∀栀㐀开椀猀氀愀渀搀砀开洀愀椀渀搀漀挀欀开氀漀搀∀⤀㬀ഀ
mp.game.streaming.requestIpl("h4_islandx_maindock_props");਍洀瀀⸀最愀洀攀⸀猀琀爀攀愀洀椀渀最⸀爀攀焀甀攀猀琀䤀瀀氀⠀∀栀㐀开椀猀氀愀渀搀砀开洀愀椀渀搀漀挀欀开瀀爀漀瀀猀开㈀∀⤀㬀ഀ
mp.game.streaming.requestIpl("h4_islandx_maindock_props_2_lod");਍洀瀀⸀最愀洀攀⸀猀琀爀攀愀洀椀渀最⸀爀攀焀甀攀猀琀䤀瀀氀⠀∀栀㐀开椀猀氀愀渀搀砀开洀愀椀渀搀漀挀欀开瀀爀漀瀀猀开㈀开猀氀漀搀∀⤀㬀ഀ
mp.game.streaming.requestIpl("h4_islandx_maindock_props_lod");਍洀瀀⸀最愀洀攀⸀猀琀爀攀愀洀椀渀最⸀爀攀焀甀攀猀琀䤀瀀氀⠀∀栀㐀开椀猀氀愀渀搀砀开洀愀椀渀搀漀挀欀开瀀爀漀瀀猀开猀氀漀搀∀⤀㬀ഀ
mp.game.streaming.requestIpl("h4_islandx_maindock_slod");਍洀瀀⸀最愀洀攀⸀猀琀爀攀愀洀椀渀最⸀爀攀焀甀攀猀琀䤀瀀氀⠀∀栀㐀开椀猀氀愀渀搀砀开洀愀渀猀椀漀渀∀⤀㬀ഀ
mp.game.streaming.requestIpl("h4_islandx_mansion_b");਍洀瀀⸀最愀洀攀⸀猀琀爀攀愀洀椀渀最⸀爀攀焀甀攀猀琀䤀瀀氀⠀∀栀㐀开椀猀氀愀渀搀砀开洀愀渀猀椀漀渀开戀开氀漀搀∀⤀㬀ഀ
mp.game.streaming.requestIpl("h4_islandx_mansion_b_side_fence");਍洀瀀⸀最愀洀攀⸀猀琀爀攀愀洀椀渀最⸀爀攀焀甀攀猀琀䤀瀀氀⠀∀栀㐀开椀猀氀愀渀搀砀开洀愀渀猀椀漀渀开戀开猀氀漀搀∀⤀㬀ഀ
mp.game.streaming.requestIpl("h4_islandx_mansion_entrance_fence");਍洀瀀⸀最愀洀攀⸀猀琀爀攀愀洀椀渀最⸀爀攀焀甀攀猀琀䤀瀀氀⠀∀栀㐀开椀猀氀愀渀搀砀开洀愀渀猀椀漀渀开最甀愀爀搀昀攀渀挀攀∀⤀㬀ഀ
mp.game.streaming.requestIpl("h4_islandx_mansion_lights");਍洀瀀⸀最愀洀攀⸀猀琀爀攀愀洀椀渀最⸀爀攀焀甀攀猀琀䤀瀀氀⠀∀栀㐀开椀猀氀愀渀搀砀开洀愀渀猀椀漀渀开氀漀挀欀甀瀀开　㄀∀⤀㬀ഀ
mp.game.streaming.requestIpl("h4_islandx_mansion_lockup_01_lod");਍洀瀀⸀最愀洀攀⸀猀琀爀攀愀洀椀渀最⸀爀攀焀甀攀猀琀䤀瀀氀⠀∀栀㐀开椀猀氀愀渀搀砀开洀愀渀猀椀漀渀开氀漀挀欀甀瀀开　㈀∀⤀㬀ഀ
mp.game.streaming.requestIpl("h4_islandx_mansion_lockup_02_lod");਍洀瀀⸀最愀洀攀⸀猀琀爀攀愀洀椀渀最⸀爀攀焀甀攀猀琀䤀瀀氀⠀∀栀㐀开椀猀氀愀渀搀砀开洀愀渀猀椀漀渀开氀漀挀欀甀瀀开　㌀∀⤀㬀ഀ
mp.game.streaming.requestIpl("h4_islandx_mansion_lockup_03_lod");਍洀瀀⸀最愀洀攀⸀猀琀爀攀愀洀椀渀最⸀爀攀焀甀攀猀琀䤀瀀氀⠀∀栀㐀开椀猀氀愀渀搀砀开洀愀渀猀椀漀渀开氀漀搀∀⤀㬀ഀ
mp.game.streaming.requestIpl("h4_islandx_mansion_office");਍洀瀀⸀最愀洀攀⸀猀琀爀攀愀洀椀渀最⸀爀攀焀甀攀猀琀䤀瀀氀⠀∀栀㐀开椀猀氀愀渀搀砀开洀愀渀猀椀漀渀开漀昀昀椀挀攀开氀漀搀∀⤀㬀ഀ
mp.game.streaming.requestIpl("h4_islandx_mansion_props");਍洀瀀⸀最愀洀攀⸀猀琀爀攀愀洀椀渀最⸀爀攀焀甀攀猀琀䤀瀀氀⠀∀栀㐀开椀猀氀愀渀搀砀开洀愀渀猀椀漀渀开瀀爀漀瀀猀开氀漀搀∀⤀㬀ഀ
mp.game.streaming.requestIpl("h4_islandx_mansion_props_slod");਍洀瀀⸀最愀洀攀⸀猀琀爀攀愀洀椀渀最⸀爀攀焀甀攀猀琀䤀瀀氀⠀∀栀㐀开椀猀氀愀渀搀砀开洀愀渀猀椀漀渀开猀氀漀搀∀⤀㬀ഀ
mp.game.streaming.requestIpl("h4_islandx_mansion_vault");਍洀瀀⸀最愀洀攀⸀猀琀爀攀愀洀椀渀最⸀爀攀焀甀攀猀琀䤀瀀氀⠀∀栀㐀开椀猀氀愀渀搀砀开洀愀渀猀椀漀渀开瘀愀甀氀琀开氀漀搀∀⤀㬀ഀ
mp.game.streaming.requestIpl("h4_island_padlock_props");਍洀瀀⸀最愀洀攀⸀猀琀爀攀愀洀椀渀最⸀爀攀焀甀攀猀琀䤀瀀氀⠀∀栀㐀开愀椀爀猀琀爀椀瀀开栀愀渀最攀爀∀⤀㬀ഀ
mp.game.streaming.requestIpl("h4_mansion_remains_cage");਍洀瀀⸀最愀洀攀⸀猀琀爀攀愀洀椀渀最⸀爀攀焀甀攀猀琀䤀瀀氀⠀∀栀㐀开洀瀀栀㐀开愀椀爀猀琀爀椀瀀∀⤀㬀ഀ
mp.game.streaming.requestIpl("h4_mph4_airstrip_interior_0_airstrip_hanger");਍洀瀀⸀最愀洀攀⸀猀琀爀攀愀洀椀渀最⸀爀攀焀甀攀猀琀䤀瀀氀⠀∀栀㐀开洀瀀栀㐀开戀攀愀挀栀∀⤀㬀ഀ
mp.game.streaming.requestIpl("h4_mph4_dock");਍洀瀀⸀最愀洀攀⸀猀琀爀攀愀洀椀渀最⸀爀攀焀甀攀猀琀䤀瀀氀⠀∀栀㐀开洀瀀栀㐀开椀猀氀愀渀搀开氀漀搀∀⤀㬀ഀ
mp.game.streaming.requestIpl("h4_mph4_island_ne_placement");਍洀瀀⸀最愀洀攀⸀猀琀爀攀愀洀椀渀最⸀爀攀焀甀攀猀琀䤀瀀氀⠀∀栀㐀开洀瀀栀㐀开椀猀氀愀渀搀开渀眀开瀀氀愀挀攀洀攀渀琀∀⤀㬀ഀ
mp.game.streaming.requestIpl("h4_mph4_island_se_placement");਍洀瀀⸀最愀洀攀⸀猀琀爀攀愀洀椀渀最⸀爀攀焀甀攀猀琀䤀瀀氀⠀∀栀㐀开洀瀀栀㐀开椀猀氀愀渀搀开猀眀开瀀氀愀挀攀洀攀渀琀∀⤀㬀ഀ
mp.game.streaming.requestIpl("h4_mph4_mansion");਍洀瀀⸀最愀洀攀⸀猀琀爀攀愀洀椀渀最⸀爀攀焀甀攀猀琀䤀瀀氀⠀∀栀㐀开洀瀀栀㐀开洀愀渀猀椀漀渀开戀∀⤀㬀ഀ
mp.game.streaming.requestIpl("h4_mph4_mansion_b_strm_0");਍洀瀀⸀最愀洀攀⸀猀琀爀攀愀洀椀渀最⸀爀攀焀甀攀猀琀䤀瀀氀⠀∀栀㐀开洀瀀栀㐀开洀愀渀猀椀漀渀开猀琀爀洀开　∀⤀㬀ഀ
mp.game.streaming.requestIpl("h4_mph4_wtowers");਍洀瀀⸀最愀洀攀⸀猀琀爀攀愀洀椀渀最⸀爀攀焀甀攀猀琀䤀瀀氀⠀∀栀㐀开渀攀开椀瀀氀开　　∀⤀㬀ഀ
mp.game.streaming.requestIpl("h4_ne_ipl_00_lod");਍洀瀀⸀最愀洀攀⸀猀琀爀攀愀洀椀渀最⸀爀攀焀甀攀猀琀䤀瀀氀⠀∀栀㐀开渀攀开椀瀀氀开　　开猀氀漀搀∀⤀㬀ഀ
mp.game.streaming.requestIpl("h4_ne_ipl_01");਍洀瀀⸀最愀洀攀⸀猀琀爀攀愀洀椀渀最⸀爀攀焀甀攀猀琀䤀瀀氀⠀∀栀㐀开渀攀开椀瀀氀开　㄀开氀漀搀∀⤀㬀ഀ
mp.game.streaming.requestIpl("h4_ne_ipl_01_slod");਍洀瀀⸀最愀洀攀⸀猀琀爀攀愀洀椀渀最⸀爀攀焀甀攀猀琀䤀瀀氀⠀∀栀㐀开渀攀开椀瀀氀开　㈀∀⤀㬀ഀ
mp.game.streaming.requestIpl("h4_ne_ipl_02_lod");਍洀瀀⸀最愀洀攀⸀猀琀爀攀愀洀椀渀最⸀爀攀焀甀攀猀琀䤀瀀氀⠀∀栀㐀开渀攀开椀瀀氀开　㈀开猀氀漀搀∀⤀㬀ഀ
mp.game.streaming.requestIpl("h4_ne_ipl_03");਍洀瀀⸀最愀洀攀⸀猀琀爀攀愀洀椀渀最⸀爀攀焀甀攀猀琀䤀瀀氀⠀∀栀㐀开渀攀开椀瀀氀开　㌀开氀漀搀∀⤀㬀ഀ
mp.game.streaming.requestIpl("h4_ne_ipl_03_slod");਍洀瀀⸀最愀洀攀⸀猀琀爀攀愀洀椀渀最⸀爀攀焀甀攀猀琀䤀瀀氀⠀∀栀㐀开渀攀开椀瀀氀开　㐀∀⤀㬀ഀ
mp.game.streaming.requestIpl("h4_ne_ipl_04_lod");਍洀瀀⸀最愀洀攀⸀猀琀爀攀愀洀椀渀最⸀爀攀焀甀攀猀琀䤀瀀氀⠀∀栀㐀开渀攀开椀瀀氀开　㐀开猀氀漀搀∀⤀㬀ഀ
mp.game.streaming.requestIpl("h4_ne_ipl_05");਍洀瀀⸀最愀洀攀⸀猀琀爀攀愀洀椀渀最⸀爀攀焀甀攀猀琀䤀瀀氀⠀∀栀㐀开渀攀开椀瀀氀开　㔀开氀漀搀∀⤀㬀ഀ
mp.game.streaming.requestIpl("h4_ne_ipl_05_slod");਍洀瀀⸀最愀洀攀⸀猀琀爀攀愀洀椀渀最⸀爀攀焀甀攀猀琀䤀瀀氀⠀∀栀㐀开渀攀开椀瀀氀开　㘀∀⤀㬀ഀ
mp.game.streaming.requestIpl("h4_ne_ipl_06_lod");਍洀瀀⸀最愀洀攀⸀猀琀爀攀愀洀椀渀最⸀爀攀焀甀攀猀琀䤀瀀氀⠀∀栀㐀开渀攀开椀瀀氀开　㘀开猀氀漀搀∀⤀㬀ഀ
mp.game.streaming.requestIpl("h4_ne_ipl_07");਍洀瀀⸀最愀洀攀⸀猀琀爀攀愀洀椀渀最⸀爀攀焀甀攀猀琀䤀瀀氀⠀∀栀㐀开渀攀开椀瀀氀开　㜀开氀漀搀∀⤀㬀ഀ
mp.game.streaming.requestIpl("h4_ne_ipl_07_slod");਍洀瀀⸀最愀洀攀⸀猀琀爀攀愀洀椀渀最⸀爀攀焀甀攀猀琀䤀瀀氀⠀∀栀㐀开渀攀开椀瀀氀开　㠀∀⤀㬀ഀ
mp.game.streaming.requestIpl("h4_ne_ipl_08_lod");਍洀瀀⸀最愀洀攀⸀猀琀爀攀愀洀椀渀最⸀爀攀焀甀攀猀琀䤀瀀氀⠀∀栀㐀开渀攀开椀瀀氀开　㠀开猀氀漀搀∀⤀㬀ഀ
mp.game.streaming.requestIpl("h4_ne_ipl_09");਍洀瀀⸀最愀洀攀⸀猀琀爀攀愀洀椀渀最⸀爀攀焀甀攀猀琀䤀瀀氀⠀∀栀㐀开渀攀开椀瀀氀开　㤀开氀漀搀∀⤀㬀ഀ
mp.game.streaming.requestIpl("h4_ne_ipl_09_slod");਍洀瀀⸀最愀洀攀⸀猀琀爀攀愀洀椀渀最⸀爀攀焀甀攀猀琀䤀瀀氀⠀∀栀㐀开渀眀开椀瀀氀开　　∀⤀㬀ഀ
mp.game.streaming.requestIpl("h4_nw_ipl_00_lod");਍洀瀀⸀最愀洀攀⸀猀琀爀攀愀洀椀渀最⸀爀攀焀甀攀猀琀䤀瀀氀⠀∀栀㐀开渀眀开椀瀀氀开　　开猀氀漀搀∀⤀㬀ഀ
mp.game.streaming.requestIpl("h4_nw_ipl_01");਍洀瀀⸀最愀洀攀⸀猀琀爀攀愀洀椀渀最⸀爀攀焀甀攀猀琀䤀瀀氀⠀∀栀㐀开渀眀开椀瀀氀开　㄀开氀漀搀∀⤀㬀ഀ
mp.game.streaming.requestIpl("h4_nw_ipl_01_slod");਍洀瀀⸀最愀洀攀⸀猀琀爀攀愀洀椀渀最⸀爀攀焀甀攀猀琀䤀瀀氀⠀∀栀㐀开渀眀开椀瀀氀开　㈀∀⤀㬀ഀ
mp.game.streaming.requestIpl("h4_nw_ipl_02_lod");਍洀瀀⸀最愀洀攀⸀猀琀爀攀愀洀椀渀最⸀爀攀焀甀攀猀琀䤀瀀氀⠀∀栀㐀开渀眀开椀瀀氀开　㈀开猀氀漀搀∀⤀㬀ഀ
mp.game.streaming.requestIpl("h4_nw_ipl_03");਍洀瀀⸀最愀洀攀⸀猀琀爀攀愀洀椀渀最⸀爀攀焀甀攀猀琀䤀瀀氀⠀∀栀㐀开渀眀开椀瀀氀开　㌀开氀漀搀∀⤀㬀ഀ
mp.game.streaming.requestIpl("h4_nw_ipl_03_slod");਍洀瀀⸀最愀洀攀⸀猀琀爀攀愀洀椀渀最⸀爀攀焀甀攀猀琀䤀瀀氀⠀∀栀㐀开渀眀开椀瀀氀开　㐀∀⤀㬀ഀ
mp.game.streaming.requestIpl("h4_nw_ipl_04_lod");਍洀瀀⸀最愀洀攀⸀猀琀爀攀愀洀椀渀最⸀爀攀焀甀攀猀琀䤀瀀氀⠀∀栀㐀开渀眀开椀瀀氀开　㐀开猀氀漀搀∀⤀㬀ഀ
mp.game.streaming.requestIpl("h4_nw_ipl_05");਍洀瀀⸀最愀洀攀⸀猀琀爀攀愀洀椀渀最⸀爀攀焀甀攀猀琀䤀瀀氀⠀∀栀㐀开渀眀开椀瀀氀开　㔀开氀漀搀∀⤀㬀ഀ
mp.game.streaming.requestIpl("h4_nw_ipl_05_slod");਍洀瀀⸀最愀洀攀⸀猀琀爀攀愀洀椀渀最⸀爀攀焀甀攀猀琀䤀瀀氀⠀∀栀㐀开渀眀开椀瀀氀开　㘀∀⤀㬀ഀ
mp.game.streaming.requestIpl("h4_nw_ipl_06_lod");਍洀瀀⸀最愀洀攀⸀猀琀爀攀愀洀椀渀最⸀爀攀焀甀攀猀琀䤀瀀氀⠀∀栀㐀开渀眀开椀瀀氀开　㘀开猀氀漀搀∀⤀㬀ഀ
mp.game.streaming.requestIpl("h4_nw_ipl_07");਍洀瀀⸀最愀洀攀⸀猀琀爀攀愀洀椀渀最⸀爀攀焀甀攀猀琀䤀瀀氀⠀∀栀㐀开渀眀开椀瀀氀开　㜀开氀漀搀∀⤀㬀ഀ
mp.game.streaming.requestIpl("h4_nw_ipl_07_slod");਍洀瀀⸀最愀洀攀⸀猀琀爀攀愀洀椀渀最⸀爀攀焀甀攀猀琀䤀瀀氀⠀∀栀㐀开渀眀开椀瀀氀开　㠀∀⤀㬀ഀ
mp.game.streaming.requestIpl("h4_nw_ipl_08_lod");਍洀瀀⸀最愀洀攀⸀猀琀爀攀愀洀椀渀最⸀爀攀焀甀攀猀琀䤀瀀氀⠀∀栀㐀开渀眀开椀瀀氀开　㠀开猀氀漀搀∀⤀㬀ഀ
mp.game.streaming.requestIpl("h4_nw_ipl_09");਍洀瀀⸀最愀洀攀⸀猀琀爀攀愀洀椀渀最⸀爀攀焀甀攀猀琀䤀瀀氀⠀∀栀㐀开渀眀开椀瀀氀开　㤀开氀漀搀∀⤀㬀ഀ
mp.game.streaming.requestIpl("h4_nw_ipl_09_slod");਍洀瀀⸀最愀洀攀⸀猀琀爀攀愀洀椀渀最⸀爀攀焀甀攀猀琀䤀瀀氀⠀∀栀㐀开猀攀开椀瀀氀开　　∀⤀㬀ഀ
mp.game.streaming.requestIpl("h4_se_ipl_00_lod");਍洀瀀⸀最愀洀攀⸀猀琀爀攀愀洀椀渀最⸀爀攀焀甀攀猀琀䤀瀀氀⠀∀栀㐀开猀攀开椀瀀氀开　　开猀氀漀搀∀⤀㬀ഀ
mp.game.streaming.requestIpl("h4_se_ipl_01");਍洀瀀⸀最愀洀攀⸀猀琀爀攀愀洀椀渀最⸀爀攀焀甀攀猀琀䤀瀀氀⠀∀栀㐀开猀攀开椀瀀氀开　㄀开氀漀搀∀⤀㬀ഀ
mp.game.streaming.requestIpl("h4_se_ipl_01_slod");਍洀瀀⸀最愀洀攀⸀猀琀爀攀愀洀椀渀最⸀爀攀焀甀攀猀琀䤀瀀氀⠀∀栀㐀开猀攀开椀瀀氀开　㈀∀⤀㬀ഀ
mp.game.streaming.requestIpl("h4_se_ipl_02_lod");਍洀瀀⸀最愀洀攀⸀猀琀爀攀愀洀椀渀最⸀爀攀焀甀攀猀琀䤀瀀氀⠀∀栀㐀开猀攀开椀瀀氀开　㈀开猀氀漀搀∀⤀㬀ഀ
mp.game.streaming.requestIpl("h4_se_ipl_03");਍洀瀀⸀最愀洀攀⸀猀琀爀攀愀洀椀渀最⸀爀攀焀甀攀猀琀䤀瀀氀⠀∀栀㐀开猀攀开椀瀀氀开　㌀开氀漀搀∀⤀㬀ഀ
mp.game.streaming.requestIpl("h4_se_ipl_03_slod");਍洀瀀⸀最愀洀攀⸀猀琀爀攀愀洀椀渀最⸀爀攀焀甀攀猀琀䤀瀀氀⠀∀栀㐀开猀攀开椀瀀氀开　㐀∀⤀㬀ഀ
mp.game.streaming.requestIpl("h4_se_ipl_04_lod");਍洀瀀⸀最愀洀攀⸀猀琀爀攀愀洀椀渀最⸀爀攀焀甀攀猀琀䤀瀀氀⠀∀栀㐀开猀攀开椀瀀氀开　㐀开猀氀漀搀∀⤀㬀ഀ
mp.game.streaming.requestIpl("h4_se_ipl_05");਍洀瀀⸀最愀洀攀⸀猀琀爀攀愀洀椀渀最⸀爀攀焀甀攀猀琀䤀瀀氀⠀∀栀㐀开猀攀开椀瀀氀开　㔀开氀漀搀∀⤀㬀ഀ
mp.game.streaming.requestIpl("h4_se_ipl_05_slod");਍洀瀀⸀最愀洀攀⸀猀琀爀攀愀洀椀渀最⸀爀攀焀甀攀猀琀䤀瀀氀⠀∀栀㐀开猀攀开椀瀀氀开　㘀∀⤀㬀ഀ
mp.game.streaming.requestIpl("h4_se_ipl_06_lod");਍洀瀀⸀最愀洀攀⸀猀琀爀攀愀洀椀渀最⸀爀攀焀甀攀猀琀䤀瀀氀⠀∀栀㐀开猀攀开椀瀀氀开　㘀开猀氀漀搀∀⤀㬀ഀ
mp.game.streaming.requestIpl("h4_se_ipl_07");਍洀瀀⸀最愀洀攀⸀猀琀爀攀愀洀椀渀最⸀爀攀焀甀攀猀琀䤀瀀氀⠀∀栀㐀开猀攀开椀瀀氀开　㜀开氀漀搀∀⤀㬀ഀ
mp.game.streaming.requestIpl("h4_se_ipl_07_slod");਍洀瀀⸀最愀洀攀⸀猀琀爀攀愀洀椀渀最⸀爀攀焀甀攀猀琀䤀瀀氀⠀∀栀㐀开猀攀开椀瀀氀开　㠀∀⤀㬀ഀ
m