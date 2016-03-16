var source;
function init(argument){
	source = new EventSource('http://localhost/javascript/sse/data.php');
	source.onopen = function(){
		console.log('连接已建立',this.readyState);//0未开始  1 已连接  2已完成
	}
	source.onmessage = function(event){  //evevt 回调数据
		console.log('从服务器时时获取的数据',event.data);
	}
	source.onerror = function(){ //监听错误
		console.log('fail');
	}
}

init();