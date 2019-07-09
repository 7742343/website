import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
import { Toast,Dialog } from 'vant'

//账户信息
const account = {
	state: {
		quoteStatus: 1, //行情初始化状态
		loginStatus: false, //账户是否登录
		exitStatus: false, //账户是否退出
	}
}

//行情信息
const market = {
	state: {
		computedFdyk: false, //是否计算浮动盈亏
		quoteData: [],
		initHangqingList: [], //初始化行情列表
		initChicangList: {}, //初始化持仓列表
		updataChicangList: {}, //实时更新持仓列表 浮动盈亏计算
		initSocketData: {}, //初始化行情最后一条数据
		updataSocketData: null ,//监听持仓，指价列表新增
	}
}

const exchange = {
	state: {
		exchangeList: {} //初始化汇率列表
	}
}

const store = new Vuex.Store({
	modules: {
		account,
		market,
		exchange
	},
	//初始值定义
	state: {
		apiUrl: 'http://47.103.78.230:8082', //axios api
		imUrl: 'ws://47.103.78.230:6300/Quotation.ashx', //webScoket api
		imUrlSignalr: 'http://47.103.78.230:8081', //webSocket signalr地址
		version:'1.2.7', //app版本号
		appName:'掌赢国际', //app名字
		callPhone:'400-900-1466',//客服电话
		skin: 'night', //皮肤设置
		localStorageSkin: 'ycxSkin', //本地缓存皮肤
		localStorageUid: 'ycxUserInfo', //本地用户信息缓存key
		localStorageHq: 'ycxHq', //本地行情缓存key
		klineType: 'ycxKlineType', //本地K线样式缓存key 0实心 1空心
		localStorageLogin: 'ycxUserLoginState', //本地缓存登录状态key
		localStorageInstall:'ycxInstall', //本地缓存版本更新信息key
		quoteSocket: null, //行情Socket
		socketParam: null, //Socket链接传参
		socketSubscribe: [], //Socket发送消息msg
		websockState: 0,
		path:null ,//储存页面当前地址
		requestSate:false ,//接口请求状态
		NetworkSignal:null ,//当前网络状态
		connect:null, //行情链接
		connectSetTime:null,//重连定时器
		heartBeatTime:null, //检测心跳定时器
		heartBeatSendTime:null, //发送心跳包定时器
		connectTime:0 ,//重连次数
		heartBeatTimeNow:0,
		orderId:null ,//订单号
		connSignalr:null
		
		

	},
	//方法定义
	mutations: {
		setSkin(state, skin) {
			state.skin = skin;
		},
		setSocketParam(state, socketParam) {
			state.socketParam = socketParam
		},
		setWebsockState(state, websockState) {
			state.websockState = websockState
		},
		setSocketSubscribe(state, socketSubscribe) {
			// console.log(socketSubscribe);
			state.socketSubscribe = socketSubscribe
		},
		setLoginStatus(state, loginStatus) {
			state.account.loginStatus = loginStatus
		},
		setExitStatus(state, exitStatus) {
			state.account.exitStatus = exitStatus
		},
		setHangqingList(state, setHangqingList) {
			state.market.initHangqingList = setHangqingList
		},
		setSocketData(state, initSocketData) {
			// console.log(quoteData);
			state.market.initSocketData = initSocketData
		},
		setChicangList(state, initChicangList) {
			// console.log(JSON.parse(initChicangList));
			state.market.initChicangList = initChicangList
		},
		setupdataChicangList(state, updataChicangList) {
			state.market.updataChicangList = updataChicangList
		},
		setComputedFdyk(state, computedFdyk) {
			state.market.computedFdyk = computedFdyk
		},
		setExchangeList(state, exchangeList) {
			// console.log(exchangeList);
			state.exchange.exchangeList = exchangeList
		},
		setQuoteStatus(state, quoteStatus) {
			state.account.quoteStatus = quoteStatus
			console.log(state.account.quoteStatus);
		},
		setPath(state, path){
			state.path = path
		},
		setRequestSate(state,requestSate){
			state.requestSate = requestSate
		},
		setNetworkSignal(state,NetworkSignal){
			state.NetworkSignal = NetworkSignal
		},
		setOrderId(state,orderId){
			state.orderId = orderId
		},
		setUpdataSocketData(state,updataSocketData){
			state.market.updataSocketData = updataSocketData
		},
		setQuoteData(state,quoteData){
			state.market.quoteData = quoteData
		},
		setConnSignalr(state,connSignalr){
			state.connSignalr = connSignalr
		}
	},
	// 事件触发后的逻辑操作
	// 参数为事件函数
	actions: {
		initQuoteClient({
			dispatch,
			commit,
			state
		}) {
			// Toast.loading({
			// 	duration: 0,       // 持续展示 toast
			// 	forbidClick: true, // 禁用背景点击
			// 	loadingType: 'spinner',
			// 	message: '行情连接中...'
			// });
			let heartBeatStartTime = 0;
			let heartBeatEndTime = 0;
			if (!state.account.loginStatus) { //判断是否为登录状态
				var uuid = Vue.prototype.$pro.generateUUID();
				state.quoteSocket = new WebSocket(state.imUrl + '?userId=' + uuid + '&token=' + uuid)
			} else {
				console.log('登录状态连接websocket开始');
				state.quoteSocket = new WebSocket(state.imUrl + '?userId=' + state.socketParam.userId + '&token=' + state.socketParam.token);
			}
			
			state.quoteSocket.onopen = function(){
				console.log('连接状态:' + state.quoteSocket.readyState);
				state.account.quoteStatus = true;
			}
			state.quoteSocket.onmessage = function(evt) {
				let msg = evt.data;
				let strData = Vue.prototype.$pro.pakoUnzip(msg);
				let quoteData = JSON.parse(strData);
				switch(quoteData.messageType){
					case 'ConnectResult':
						console.log('收到id:' + JSON.parse(quoteData.data).connectId);
						state.connect = JSON.parse(quoteData.data);
						if(state.connect.result != 'success') return;
						//心跳包
						if(state.account.quoteStatus && state.quoteSocket.readyState == 1){
							Vue.prototype.$pro.heartCheck.start();
						}
						if(!state.account.loginStatus){
							console.log("未登录账户链接WebSocket");
							console.log('未登录id:' + state.connect.connectId);
							state.quoteSocket.send(JSON.stringify({
								cmd: "SubQuotation",
								msg: state.socketSubscribe,
								token: uuid,
								connectId: state.connect.connectId
							}));
						}else{
							console.log("已登录链接WebSocket");
							console.log('登录id:' + state.connect.connectId);
							state.quoteSocket.send(JSON.stringify({
								cmd: "SubQuotation",
								msg: state.socketSubscribe,
								token: state.socketParam.token,
								connectId: state.connect.connectId
							}))
						}
						break;
					case 'SubQuotationResult':
						console.log( '行情订阅' + quoteData.data);
						break;
					case 'quotation':
						Toast.clear();
						Vue.prototype.$pro.heartCheck.reset();
						state.market.quoteData = JSON.parse(quoteData.data);
						if (state.market.computedFdyk && state.account.loginStatus) {
							dispatch('computedFdyk')
						}
						break;
					case 'order-refresh':
						state.market.updataSocketData = quoteData.data +"-"+ new Date().getTime() + Math.random();
						break;
					case 'HeartBeat':
						console.log('收到心跳回复');
						Toast.clear();
						Vue.prototype.$pro.heartCheck.reset();
						// state.connectTime = 0;
						break;
					default:
						console.log('异常数据');
						break;
				}
			}
			state.quoteSocket.onclose = function(evt) {
				console.log('close');
				state.account.quoteStatus = false;
			};
			state.quoteSocket.onerror = function(evt) {
				console.log('error');
				Toast({
					duration:1000*3,
					message:'行情连接失败,请检查网络',
					position:'bottom'
				})
				state.account.quoteStatus = false;
			};
		},
		initConnSignalr({
			dispatch,
			commit,
			state
		}){
			let msg = {}
			if (!state.account.loginStatus) { //判断是否为登录状态
				console.log('未登录状态连接websocket开始');
				let uuid = Vue.prototype.$pro.generateUUID();
				msg = {
					"userId": uuid,
					"token": uuid
				}
			} else {
				console.log('登录状态连接websocket开始');
				msg = {
					"userId": state.socketParam.userId,
					"token": state.socketParam.token
				}
			}
			
			//创建行情连接
			state.connSignalr = null
			state.connSignalr = $.connection(state.imUrlSignalr + "/myconnection", msg)
			//开始行情连接
			state.connSignalr.start()
				.done(() => {
					Toast.clear();
					state.account.quoteStatus = 0;
					console.log('行情连接成功');
				})
				.fail((erro) => {
					console.log(erro);
				})
			//接受到消息
			state.connSignalr.received((message) => {
				// console.log(message);
				let data = JSON.parse(message);
				if (data.messageType == 1) {
					// console.log(data);
					let dataObject = JSON.parse(data.content);
					// console.log(dataObject[0]);
					commit('setQuoteData', dataObject[0]);
					if (state.market.computedFdyk && state.account.loginStatus) {
						dispatch('computedFdyk')
					}
				} else if (data.messageType == 2) {
					let newData = data.content + "-" + new Date().getTime() + Math.random();
					commit('setUpdataSocketData', newData);
				}
			})
			//断开连接
			state.connSignalr.disconnected(() => {
				Toast.clear();
				state.account.quoteStatus++;
				// Toast.loading({
				// 	duration: 0, // 持续展示 toast
				// 	forbidClick: true, // 禁用背景点击
				// 	loadingType: 'spinner',
				// 	message: '行情连接中'
				// })
				// Toast({
				// 	duration: 0,
				// 	message: '行情连接中',
				// 	position: 'bottom'
				// })
				// Dialog.confirm({
				// 	message: '行情连接失败,是否重新连接?',
				// 	showCancelButton:false
				// }).then(() => {
				// 	Toast.loading({
				// 		duration: 0, // 持续展示 toast
				// 		forbidClick: true, // 禁用背景点击
				// 		loadingType: 'spinner',
				// 		message: '行情连接中'
				// 	})
				// 	dispatch('initConnSignalr')
				// })
				console.log('断开连接');
			})
			state.connSignalr.connectionSlow(() => {
				// Toast({
				// 	duration: 1000 * 3,
				// 	message: '行情连接失败,请检查网络',
				// 	position: 'bottom'
				// })
				console.log('网速太差啦');
			})
			state.connSignalr.reconnected(() => {
				// Toast({
				// 	duration: 1000 * 3,
				// 	message: '行情连接失败,请检查网络',
				// 	position: 'bottom'
				// })
				console.log('重新连接啦');
			})
			state.connSignalr.error((error) => {
				// Toast({
				// 	duration: 1000 * 3,
				// 	message: '行情连接失败,请检查网络',
				// 	position: 'bottom'
				// })
				console.log(error);
			})
			state.connSignalr.stateChanged(() => {
				// Toast({
				// 	duration: 1000 * 3,
				// 	message: '行情连接失败,请检查网络',
				// 	position: 'bottom'
				// })
				console.log('连接状态更改啦');
			})
		},
		computedFdyk({
			commit,
			state
		}) {
			// console.log('动态权益计算中');
			var totalFdyk = 0;
			var uInfo = JSON.parse(localStorage.getItem(state.localStorageUid));
			var msg = JSON.stringify({
				userID: uInfo.userId
			})
			var quoteData = state.market.quoteData;
			var _chicangList = {
				list:[]
			}
			if(JSON.stringify(state.market.initChicangList) != '{}'){
				_chicangList = JSON.parse(state.market.initChicangList);
				var exchangeList = JSON.parse(state.exchange.exchangeList);
				for (let key in _chicangList.list) {
					if (_chicangList.list[key].futures_code == quoteData.code) {
						_chicangList.list[key].point = quoteData.point;
						if (_chicangList.list[key].updown == 1) {
							_chicangList.list[key].private_yk = parseFloat(((quoteData.point - _chicangList.list[key].futures_price) * _chicangList.list[key].cs) / _chicangList.list[key].currencyRate).toFixed(0)*_chicangList.list[key].futures_num
						} else {
							_chicangList.list[key].private_yk = parseFloat(((_chicangList.list[key].futures_price - quoteData.point) * _chicangList.list[key].cs) / _chicangList.list[key].currencyRate).toFixed(0)*_chicangList.list[key].futures_num
						}
						if(_chicangList.list[key].currencyFlag == 'CNY'){
							_chicangList.list[key].private_yk_rmb = _chicangList.list[key].private_yk
						}else{
							_chicangList.list[key].private_yk_rmb = _chicangList.list[key].private_yk * exchangeList[_chicangList.list[key].currencyFlag]
						}	
					}
					totalFdyk += parseFloat(_chicangList.list[key].private_yk_rmb);
				}
				_chicangList.fdyk = totalFdyk;
			}
			commit('setChicangList', JSON.stringify(_chicangList));
		},
		connectSocket({state}){
			Vue.prototype.$initExchange(); //初始化汇率
			if (state.account.loginStatus) {
				Vue.prototype.$initHangqing(); //初始化行情列表
				setTimeout(function(){
					Vue.prototype.$initChicang(); //初始化持仓列表
				},500)
			} else {
				Vue.prototype.$initHangqing(); //初始化行情列表
			}
		}
	},
	// 返回改变后的数值
	getters: {
		updataSocketData(state) {
			return state.market.updataSocketData
		},
		path(state){
			return state.path
		},
		kDataSocket(state){
			return state.market.quoteData
		},
		NetworkSignal(state){
			return state.NetworkSignal
		},
		quoteStatusAC(state){
			return state.account.quoteStatus
		},
		quoteDataAC(state){
			return state.market.quoteData
		},
		chicangListAC(state){
			return state.market.initChicangList
		},
		skinAC(state){
			return state.skin
		}
	}
})

export default store
