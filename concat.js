import * as RXJS from 'rxjs';


const $stream1=RXJS.Observable.of(1,2,3,4,5)
const $stream2=RXJS.Observable.from([6,7,8])


$stream1.concat($stream2)

.filter((va)=>{
	return va%2==0
})
.reduce((x,y)=>{
	console.log(y)
	return x+y
})

.subscribe((data)=>{
	console.log(data)
})





const $stream3=RXJS.Observable.of(1,2,3,4,5)

.flatMap((data)=>{

	return 	RXJS.Observable.from(["aaa"])
})

.subscribe((data)=>{
	console.log('----------------------')
	console.log(data)
})

//5个 

//过滤复制的Observable
RXJS.Observable.from([{name:5,id:5},{id:4,name:4},{id:1,name:1},{id:0,name:0}])
.distinct((item)=>{
	//去掉规则项
	return item.id==1 && item.name==1;
})

.subscribe((v)=>{

	console.log(v)

})



var clicks = RXJS.Observable.fromEvent(document, 'click');
var timer = RXJS.Observable.interval(1000);

var clicksOrTimer = RXJS.Observable.merge(clicks, timer)

.throttleTime(3000)//截流为3秒时间

.take(3)//只触发3次

.subscribe(x => console.log(x));