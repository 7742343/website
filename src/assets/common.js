/*  
 * @description: 公用JS 
 * @author: yy  
 * @update: 2019-04-01
 */

var pro = {};
/***************************************************************/
/**
 * axios
 * 
 */
import Vue from 'vue'
import router from '../router/index'
import axios from 'axios'
import qs from 'qs'
import store from '@/vuex/store.js'
import md5 from 'js-md5'
import {
	Toast,
	Dialog
} from 'vant'
// axios 配置
axios.defaults.timeout = 20000;
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';
axios.defaults.baseURL = store.getters.PATH;
const storea = store;
//POST传参序列化(添加请求拦截器，与Content-Type配合使用，如Content-Type=application/json,则无需序列化)
axios.interceptors.request.use((config) => {
	if (config.method === 'post') {
		config.data = qs.stringify(config.data);
	}
	return config;
}, (error) => {
	return Promise.reject(error);
});
//返回状态判断
axios.interceptors.response.use((res) => {
	// if (res.data.result != 1 && res.data.result != 1401 && res.data.result != 1402 && res.data.result != 0 && res.data.result != 1301 && res.data.result != 1002 && res.data.result != 1001 && res.data.result != 1206) {
	// 	return Promise.reject(res);
	// };
	if (res.data.result == 1002) {
		Dialog.confirm({
			message: res.data.message,
			showCancelButton: false
		}).then(() => {
			localStorage.setItem(store.state.localStorageLogin, false);
			localStorage.setItem(store.state.localStorageUid, null);
			store.commit('setLoginStatus', false);
			router.push('./login');
		})
	}
	if (res.status == 200) {
		return Promise.resolve(res);
	}
}, (error) => {
	Promise.reject(error)
	let res = {
		data: {
			result: 0,
			msg: '',
			message: ''
		}
	}
	res.data.result = -1;
	res.data.msg = '请求超时,请稍后重试';
	res.data.message = '请求超时,请稍后重试';
	return Promise.resolve(res);
})

let ls = localStorage;
var network = true;
var websock = null;
var userInfoKey = store.state.localStorageUid;
// console.log(JSON.stringify(localStorage.userInfoKey));
pro = {
	//ajax请求
	post: function (cmd, msg) {
		// console.log(cmd);
		var url = store.state.apiUrl + '/appapi/app/get';
		var UserInfo = JSON.parse(localStorage.getItem(store.state.localStorageUid));
		var installKey = store.state.localStorageInstall;
		var installInfo = JSON.parse(localStorage.getItem(installKey));
		var uid = 0;
		if (cmd != 'login' && cmd != 'app_register' && cmd != 'get_sms_code') {
			uid = UserInfo != null ? Number(UserInfo.userId) : '';
		}
		var timestamp = new Date().getTime();
		var token = UserInfo != null ? UserInfo.token : '';
		var privateKey = UserInfo != null ? UserInfo.privateKey : '';
		var ver = store.state.version;
		// alert(ver);
		// console.log(installInfo);
		var imei = installInfo == null ? '' : installInfo.imei;
		var uuid = installInfo == null ? '' : installInfo.uuid;
		var appPlatform = installInfo == null ? '' : installInfo.appPlatform;
		var sign = md5("cmd=" + cmd + "&msg=" + msg + "&timestamp=" + timestamp + "&key=" + privateKey);
		var postInfo = {
			cmd: cmd,
			msg: msg,
			uid: uid.toString(),
			timestamp: timestamp,
			sign: sign,
			ver: ver,
			privateKey: privateKey,
			IMEI: imei,
			UUID: uuid,
			appPlatform: appPlatform,
			token: token
		};
		// console.log(JSON.stringify(postInfo));
		// 		var headers = {
		// 			token: header.token ? header.token : '',
		// 			secret: header.secret ? header.secret : '',
		// 			version: header.version ? header.version : ''
		// 		};
		// 
		return new Promise((resolve, reject) => {
			axios.post(url, postInfo).then(response => {
				resolve(response.data)
			}, err => {
				reject(err)
			}).catch((error) => {
				reject(error)

			});
		});
	},
	/**
	 * 时间搓转化成2017-07-07 02:05:00
	 * prams time 时间
	 * prams d 时间格式
	 * 
	 */
	getDate: function (time, d) {
		// alert(time);
		var date = null;
		// console.log(typeof time);
		if (typeof time == 'number') {
			date = new Date(time)
		} else {
			date = new Date(time.replace(/-/g, '/')); //replace(/-/g,'/')兼容ios时间格式不正确
		}
		var year = date.getYear() + 1900;
		var month = date.getMonth() + 1;
		var day = date.getDate();
		var hour = date.getHours();
		var minu = date.getMinutes();
		var sec = date.getSeconds();
		if (day < 10) {
			day = "0" + day;
		}
		if (month < 10) {
			month = "0" + month;
		}
		if (hour < 10) {
			hour = "0" + hour;
		}
		if (minu < 10) {
			minu = "0" + minu;
		}
		if (sec < 10) {
			sec = "0" + sec;
		}
		var d1 = year + "-" + month + "-" + day + " " + hour + ":" + minu + ":" + sec;
		var d2 = year + "-" + month + "-" + day;
		var d3 = hour + ":" + minu + ":" + sec;
		var d4 = hour + ":" + minu;
		var d5 = year + "年" + month + "月" + day + "日";
		var d6 = day
		var d7 = year + "-" + month + "-" + day + " " + "00:00:00";
		var d8 = year + "-" + month + "-" + day + " " + hour + ":" + minu;
		var d9 = month + "-" + day;
		switch (d) {
			case 'y-m-d':
				return d2;
				break;
			case 'y-m-d h:i:s':
				return d1;
				break;
			case 'h:i:s':
				return d3;
				break;
			case 'h:m':
				return d4;
				break;
			case 'yy-mm-dd':
				return d5;
				break;
			case 'd':
				return d6;
				break;
			case 'y-m-d-0':
				return d7;
				break;
			case 'y-m-d h:i':
				return d8;
				break;
			case 'y/m/d h:i':
				return d8.replace(/\-/g, '/');
				break;
			case 'm-d':
				return d9;
				break;
			default:
				break;
		}
	},
	/**
	 * 数组取最大值、最小值
	 * 
	 */
	getMaximin: function (arr, maximin) {
		if (maximin == "max") {
			return Math.max.apply(Math, arr);
		} else if (maximin == "min") {
			return Math.min.apply(Math, arr);
		}
	},
	getClentId: function () {
		mui.plusReady(function () {
			var info = plus.push.getClientInfo();
			var clientid = {
				"id": info.clientid
			};
			localStorage.setItem("clientid", JSON.stringify(clientid));
		})
	},
	/**
	 * 判断是IOS还是安卓
	 * 
	 */
	isSysterm: function () {
		var u = navigator.userAgent;
		var obj = {};
		obj.isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1; //android终端
		obj.isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端
		return obj;
	},
	/**
	 * 判断当前版本是PC还是移动端
	 * 
	 */
	isVersion: function () {
		let userAgentInfo = navigator.userAgent;
		let Agents = ["Android", "iPhone", "SymbianOS", "Windows Phone", "iPad", "iPod"];
		let flag = true;
		for (var v = 0; v < Agents.length; v++) {
			if (userAgentInfo.indexOf(Agents[v]) > 0) {
				flag = false;
				break;
			}
		}
		return flag;
	},
	// isOpenMessage: function(){
	// 	var obj = pro.isSysterm();
	// 	if(obj.isiOS == true){
	// 		if(window.plus){
	// 			var UIApplication = plus.ios.import("UIApplication");
	// 			var app = UIApplication.sharedApplication();
	// 			var enabledTypes  = 0;
	// 			if (app.currentUserNotificationSettings) {
	// 				var settings = app.currentUserNotificationSettings();
	// 				enabledTypes = settings.plusGetAttribute("types");
	// 			} else {
	// 					//针对低版本ios系统
	// 				enabledTypes = app.enabledRemoteNotificationTypes();
	// 			}
	// 			//console.log("enabledTypes:"+enabledTypes);
	// 			if (enabledTypes == 0) {
	// 				mui.alert( "消息推送已关闭，无法接收通知，请在【设置】-【通知中心】-【应用名称】中开启");
	// 			}
	// 			plus.ios.deleteObject(app);
	// 		}
	// 	}
	// },

	// isOpenMessages: function(){
	// 	if(window.plus){
	// 		var pp = plus.navigator.checkPermission('NOTIFITION');
	// 		if(pp != 'authorized'){
	// 			mui.alert( "消息推送已关闭，无法接收通知，请在【设置】-【通知中心】-【应用名称】中开启");
	// 		}
	// 	}
	// },
	// openMessages: function(){
	// 	var obj = pro.isSysterm();
	// 	if(obj.isiOS == true){
	// 		if(window.plus){
	// 			var UIApplication = plus.ios.import("UIApplication");
	// 			var app = UIApplication.sharedApplication();
	// 			var enabledTypes  = 0;
	// 			if (app.currentUserNotificationSettings) {
	// 				var settings = app.currentUserNotificationSettings();
	// 				enabledTypes = settings.plusGetAttribute("types");
	// 			} else {
	// 				//针对低版本ios系统
	// 				enabledTypes = app.enabledRemoteNotificationTypes();
	// 			}
	// 			return enabledTypes;
	// 		}else{
	// 			return false;
	// 		}
	// 	}else{
	// 		return '';
	// 	}
	//},
	/**
	 * 判断网络是否已连接
	 * @param {} 
	 * 
	 */
	netIsconnected: function (fail, success) {

		mui.plusReady(function () {
			document.addEventListener("netchange", function () {
				if (plus.networkinfo.getCurrentType() == plus.networkinfo.CONNECTION_NONE) {
					//				mui.toast("网络异常，请检查网络设置！");
					network = false;
					if (fail) fail();
				} else {
					network = true;
					if (success) success();
				}
			}, false);
		});
		return network;
	},
	/**
	 * 判断一个数组中是否包含某一个值
	 * arr 数组
	 * val 值
	 */
	objIsInArray: function (arr, val) {
		let str = arr.join(',');
		if (str.indexOf(val) == -1) {
			return false;
		} else {
			return true;
		}
	},
	mobileHidden: function (phoneNumber) {
		if (phoneNumber) {
			return phoneNumber.replace(/(\d{3})\d{4}(\d{4})/, '$1****$2');
		} else {
			return phoneNumber
		}
	},
	local: {
		set(key, value) {
			let valueS = typeof value === 'string' ? value : JSON.stringify(value)
			ls.setItem(key, valueS)
		},
		get(key) {
			try {
				return JSON.parse(ls.getItem(key))
			} catch (error) {
				console.log(`${key}不存在`)
				return null
			}
		},
		remove(key) {
			ls.removeItem(key)
		},
		clear() {
			ls.clear()
		},
		keys() {
			return Object.keys(ls)
		}
	},
	toThousands: function (num) {
		let res = num && num.toString().replace(/\d+/, function (n) { // 先提取整数部分
			return n.replace(/(\d)(?=(\d{3})+$)/g, function ($1) {
				return $1 + ",";
			});
		})
		return res
	},
	mixinsToCustomer: {
		data() {
			return {
				actions: [{
					name: '400-843-1089'
				}, {
					name: '工作日08:00-24:00,周末09:00-17:00'
				}, {
					name: '拨打',
					method: this.callPhone
				}],
				sheetVisible: false
			}
		},
		methods: {
			callCustomer() {
				this.sheetVisible = true
			},
			callPhone: function () {
				window.location.href = 'tel://' + 4008431089;
			},
			shareSystem() {
				//console.log(123)
				var test1 = {
					content: '给您分享一款专业的期货行情资讯工具应用，请在苹果应用商店搜索“期货行情大师”，效果好极了',
					//href: 'https://www.baidu.com'
				}
				pro.shareSystem(test1)
			}
		}

	},
	shareSystem(obj) {
		mui.plusReady(function () {
			//outSet('调用系统分享');
			// var msg={content:sharecontent.value};
			// if(pic&&pic.realUrl){
			// 	msg.pictures=[pic.realUrl];
			// }
			if ('iOS' !== plus.os.name) { //iOS平台添加链接地址
				obj.href = '';
			}
			//outLine(JSON.stringify(msg));
			plus.share.sendWithSystem ? plus.share.sendWithSystem(obj, function () {
				//outLine('Success');
				console.log('Success');
			}, function (e) {
				//outLine('Failed: '+JSON.stringify(e));
				console.log('Failed: ' + JSON.stringify(e));
			}) : shareSystemNativeJS();
		})
	},
	axios1() {
		let axios1 = axios.create({
			baseURL: store.getters.futurePath,
			timeout: 5000,
		})
		axios1.interceptors.request.use((config) => {
			if (config.method === 'post') {
				config.data = qs.stringify(config.data);
			}
			return config;
		}, (error) => {
			return Promise.reject(error);
		});
		return axios1;
	},
	//截取英文
	subEn(str, state) {
		var newStr = "";
		var enLen = 0;
		if (/[a-z]/i.test(str)) {
			enLen = str.match(/[a-z]/ig).length;
		}
		if (state == 'EN') {
			newStr = str.substring(0, enLen)
		} else if (state == 'CN') {
			newStr = str.substring(enLen)
		} else {
			console.log('请输入正确的需求');
		}

		return newStr;
	},
	touch() {
		var huitan = (function () {
			var ht = {};
			ht.init = function (d) {
				if (!support_touch_event()) return;
				var startX, startY, endX, endY,
					container = d || document.querySelector(".index");
				container.addEventListener('touchstart', function (e) {
					e.preventDefault(); //阻止触摸时浏览器的缩放、滚动条滚动等
					var touch = e.touches[0]; //获取第一个触点
					var x = touch.pageX; //页面触点X坐标
					var y = touch.pageY; //页面触点Y坐标
					//记录触点初始位置
					startX = x;
					startY = y;


				});
				container.addEventListener('touchmove', function (e) {
					e.preventDefault(); //阻止触摸时浏览器的缩放、滚动条滚动等
					var touch = e.touches[0]; //获取第一个触点
					var x = touch.pageX; //页面触点X坐标
					var y = touch.pageY; //页面触点Y坐标
					endX = x;
					endY = y;


					var abs = Math.abs(y - startY)
					if (abs > 50 && abs < 180) {
						container.style.cssText =
							"transition:1s cubic-bezier(.1, .57, .1, 1); -webkit-transition: 1s cubic-bezier(.1, .57, .1, 1); -webkit-transform: translate(0px, " +
							(y - startY) + "px) translateZ(0px);";
					}
				});
				container.addEventListener('touchend', function (e) {
					e.preventDefault();
					if (Math.abs(endY - startY) > 50) {
						container.style.cssText =
							"transition:300ms cubic-bezier(.1, .57, .1, 1); -webkit-transition: 300ms cubic-bezier(.1, .57, .1, 1);  -webkit-transform: translate(0px,0px) translateZ(0px);";
					}
				});
			}
			/**
			 *@description 检查是否支持touch事件
			 */
			function support_touch_event() {
				return !!(('ontouchstart' in window) || window.DocumentTouch && document instanceof DocumentTouch);
			}
			return ht.init();
		}())
	},
	//初始化行情
	initHangqing: function () {
		return new Promise(function (resolve, reject) {
			var initSocketData = [];
			var msg = null;
			if (store.state.account.loginStatus) {
				var uInfo = JSON.parse(localStorage.getItem(store.state.localStorageUid));
				msg = JSON.stringify({
					userID: uInfo.userId
				})
			} else {
				msg: ''
			}
			pro.post('get_menu', msg).then((res) => {
				console.log('行情初始化开始');
				// console.log(res);
				for (let index in res.msg[0].item) {
					if (res.msg[0].item[index].lasthq != null) {
						initSocketData.push(JSON.parse(res.msg[0].item[index].lasthq))
					}
				}
				// initSocketData.push(JSON.parse(res.msg[0].item[0].lasthq));
				// console.log(initSocketData);
				localStorage.setItem(store.state.localStorageHq, JSON.stringify(res.msg));
				store.commit('setHangqingList', JSON.stringify(res.msg));
				// console.log(initSocketData);
				store.commit('setSocketData', JSON.stringify(initSocketData));
				// store.commit('setRequestSate',true);
				// console.log(res.msg);
				let _list = res.msg;
				let _newList = [];
				for (let key in _list) {
					if (_list[key].name != '自选') {
						for (let val in _list[key].item) {
							_newList.push({
								ExchangeNo: '',
								CommodityType: 'F',
								CommodityNo: pro.subEn(_list[key].item[val].code, 'EN'),
								ContractNo: pro.subEn(_list[key].item[val].code, 'CN')
							})
						}
					}
				}
				store.commit('setSocketSubscribe', JSON.stringify(_newList));
				// if (!store.state.account.quoteStatus) {
				// 	store.dispatch('initQuoteClient');
				// }
				if (store.state.account.quoteStatus > 0) {
					store.dispatch('initConnSignalr');
				}
				resolve(initSocketData)
			}).catch((error) => { })
		})
	},
	//初始化所有汇率、
	initExchange: function () {
		return new Promise(function (resolve, reject) {
			var exchangeList = {};
			pro.post('get_currency_exchange', '').then((res) => {
				// console.log(res);
				for (let key in res.msg) {
					exchangeList[res.msg[key].currencyFlag] = res.msg[key].rate
				}
				store.commit('setExchangeList', JSON.stringify(exchangeList));
				resolve(exchangeList)
			})
		})
	},
	//初始化持仓
	initChicang: function (initSocketData, exchangeList) {
		return new Promise(function (resolve, reject) {
			var chicangList = {
				list: []
			};
			var totalFdyk = 0;
			var uInfo = JSON.parse(localStorage.getItem(store.state.localStorageUid));
			var msg = JSON.stringify({
				userID: uInfo.userId
			})
			pro.post('get_position_list_new', msg).then((res) => {
				console.log('动态权益初始化计算开始');
				var _msg = res.msg;
				// console.log(_msg);
				chicangList.dtqy = _msg.dtqy;
				chicangList.lcyk = _msg.lcyk;
				// var initSocketData = JSON.parse(store.state.market.initSocketData);
				// var exchangeList = JSON.parse(store.state.exchange.exchangeList);
				for (let key in _msg.data) {
					for (let key2 in initSocketData) {
						// console.log(initSocketData[key2]);
						if (_msg.data[key].futures_code == initSocketData[key2].code) {
							_msg.data[key].point = initSocketData[key2].point;
							if (_msg.data[key].updown == 1) {
								_msg.data[key].private_yk = parseFloat(((initSocketData[key2].point - _msg.data[key].futures_price) *
									_msg.data[
										key].cs) / _msg.data[key].currencyRate).toFixed(0) * _msg.data[key].futures_num
							} else {
								_msg.data[key].private_yk = parseFloat(((_msg.data[key].futures_price - initSocketData[key2].point) *
									_msg.data[
										key].cs) / _msg.data[key].currencyRate).toFixed(0) * _msg.data[key].futures_num
							}
							if (_msg.data[key].currencyFlag == 'CNY') {
								_msg.data[key].private_yk_rmb = _msg.data[key].private_yk
							} else {
								_msg.data[key].private_yk_rmb = _msg.data[key].private_yk * exchangeList[_msg.data[key].currencyFlag]
							}
							totalFdyk += parseFloat(_msg.data[key].private_yk_rmb);
						}
					}
					chicangList.list.push(_msg.data[key]);
				}
				chicangList.fdyk = totalFdyk;
				store.commit('setChicangList', JSON.stringify(chicangList));
				resolve(chicangList)
			})
		})
	},
	//随机uuid
	generateUUID: function () {
		var d = new Date().getTime();
		var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
			var r = (d + Math.random() * 16) % 16 | 0;
			d = Math.floor(d / 16);
			return (c == 'x' ? r : (r & 0x3 | 0x8)).toString(16);
		});
		return uuid;
	},
	//压缩
	pakoZip: function (str) {
		var binaryString = Vue.prototype.$pako.gzip(str, {
			to: 'string'
		});
		return btoa(binaryString);
	},
	//解压
	pakoUnzip: function (str) {
		var strData = atob(str);
		var charData = strData.split('').map(function (x) {
			return x.charCodeAt(0);
		});
		var binData = new Uint8Array(charData);
		var data = Vue.prototype.$pako.inflate(binData);
		var array = new Uint16Array(data)
		var res = '';
		var chunk = 8 * 1024;
		var i;
		for (i = 0; i < array.length / chunk; i++) {
			res += String.fromCharCode.apply(null, array.slice(i * chunk, (i + 1) * chunk));
		}
		res += String.fromCharCode.apply(null, array.slice(i * chunk));
		strData = res
		return strData;
	},
	//行情计算保留小数点
	isInteger: function (obj) {
		return obj % 1 === 0
	},
	split: function (obj) {
		return obj.toString().split(".")[1].length
	},
	computedP: function (point, price_unit) {
		if (pro.isInteger(price_unit)) {
			return parseFloat(point).toFixed(0)
		} else {
			return parseFloat(point).toFixed(pro.split(price_unit))
		}
	},
	//webstocket重连及心跳检测
	heartCheck: {
		timeout: 1000 * 5,
		connectTimeout: 1000 * 20,
		timeoutObj: null,
		serverTimeoutObj: null,
		connectOne: null,
		connectTwo: null,
		connectThree: null,
		connectEnd: null,
		reset: function () {
			clearTimeout(this.timeoutObj);
			clearTimeout(this.serverTimeoutObj);
			clearTimeout(this.connectOne);
			clearTimeout(this.connectTwo);
			clearTimeout(this.connectThree);
			this.start();
		},
		start: function () {
			var self = this;
			this.timeoutObj = setTimeout(function () {
				console.log('发送心跳包id:' + store.state.connect.connectId);
				store.state.quoteSocket.send(JSON.stringify({
					cmd: "HeartBeat",
					msg: new Date().getTime().toString(),
					connectId: store.state.connect.connectId
				}))
				self.serverTimeoutObj = setTimeout(function () {
					console.log('断开websocket');
					self.connectOne = setTimeout(function () {
						store.dispatch('connectSocket');
						self.connectTwo = setTimeout(function () {
							store.dispatch('connectSocket');
							self.connectThree = setTimeout(function () {
								store.dispatch('connectSocket');
								self.connectEnd = setTimeout(function () {
									store.state.quoteSocket.close()
									Toast({
										duration: 1000 * 100,
										message: '行情连接失败,请检查网络',
										position: 'bottom'
									})
								}, self.connectTimeout)
							}, self.connectTimeout)
						}, self.connectTimeout)
					}, self.connectTimeout)
				}, self.timeout)
			}, this.timeout)
		}
	}
}
export default pro
