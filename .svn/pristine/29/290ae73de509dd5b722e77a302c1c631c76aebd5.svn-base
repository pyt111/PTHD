/*
 * 作者: yantao.peng 
 * 
 * 说明：自定义公共方法(非vue全局方法)
 * 
 * 最后修改时间: Wednesday, 28th March 2018 3:21:44 pm
 */

let CryptoJS = require("crypto-js");


export const RNtrim = (str) => {//去除换行符
	return str.replace(/[\r\n]/g, "");
}

export const stringToByte = (str) => {//string转byte
	var bytes = new Array();
	var len, c;
	len = str.length;
	for (var i = 0; i < len; i++) {
		c = str.charCodeAt(i);
		if (c >= 0x010000 && c <= 0x10FFFF) {
			bytes.push(((c >> 18) & 0x07) | 0xF0);
			bytes.push(((c >> 12) & 0x3F) | 0x80);
			bytes.push(((c >> 6) & 0x3F) | 0x80);
			bytes.push((c & 0x3F) | 0x80);
		} else if (c >= 0x000800 && c <= 0x00FFFF) {
			bytes.push(((c >> 12) & 0x0F) | 0xE0);
			bytes.push(((c >> 6) & 0x3F) | 0x80);
			bytes.push((c & 0x3F) | 0x80);
		} else if (c >= 0x000080 && c <= 0x0007FF) {
			bytes.push(((c >> 6) & 0x1F) | 0xC0);
			bytes.push((c & 0x3F) | 0x80);
		} else {
			bytes.push(c & 0xFF);
		}
	}
	return bytes;


}
export const byteToString = (arr) => {//byte转string
	if (typeof arr === 'string') {
		return arr;
	}
	var str = '',
		_arr = arr;
	for (var i = 0; i < _arr.length; i++) {
		var one = _arr[i].toString(2),
			v = one.match(/^1+?(?=0)/);
		if (v && one.length == 8) {
			var bytesLength = v[0].length;
			var store = _arr[i].toString(2).slice(7 - bytesLength);
			for (var st = 1; st < bytesLength; st++) {
				store += _arr[st + i].toString(2).slice(2);
			}
			str += String.fromCharCode(parseInt(store, 2));
			i += bytesLength - 1;
		} else {
			str += String.fromCharCode(_arr[i]);
		}
	}
	return str;
}

export const decrypt = (str) => {
	let key = "0123456789lbsoft";
	key = CryptoJS.enc.Utf8.parse(key);
	let decryptedData = CryptoJS.AES.decrypt(RNtrim(str), key, {//aes解密
		mode: CryptoJS.mode.ECB,
		padding: CryptoJS.pad.Pkcs7
	});
	let decryptedStr = decryptedData.toString(CryptoJS.enc.Utf8);
	// console.log(decryptedStr);
	// console.log(JSON.parse(decryptedStr));
	let data = JSON.parse(decryptedStr)
	console.log(data);
	return data;
}