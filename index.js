import * as RXJS from 'rxjs';


/*通过工具集创建可观察者*/

const $stream1=RXJS.Observable.of(2,10,11,12)
	console.log('-------------------------$stream1---------------------')

	$stream1.subscribe((data)=>{

		console.log(data)
	})


//把数组转换成可观察者
const $stream2=RXJS.Observable.from([1,2,3,4,5,6,7])
	
	console.log('-------------------------$stream2---------------------')
	$stream2.subscribe((data)=>{

		console.log(data)
	})

//把promise转换成可观察者
const $stream3=RXJS.Observable.fromPromise((()=>{
		return new Promise((resolve,reject)=>{
			resolve('promise resolve done')
		})
})())

console.log('-------------------------$stream3---------------------')

$stream3.subscribe((data)=>{
		console.log(data)
})



//把事件转换成可观察者
const $stream4=RXJS.Observable.fromEvent(document.querySelector('#clickBtn'),'click')
$stream4.subscribe((data)=>{
	console.log('-------------------------$stream4---------------------')
	console.log(data)
})

//自定义观察者
const $stream5=RXJS.Observable.create((observer)=>{
	observer.next('this is my create1')
	observer.next('this is my create2')
	observer.next('this is my create3')
	observer.next('this is my create4')
	observer.next('this is my create5')
	observer.complete('this is end')
})

$stream5.subscribe((data)=>{

	console.log(data)

},(error)=>{

	console.log(error)

},()=>{
	console.log('done')
})//.unsubscribe()


//console.log($stream5.unsubscribe());

//console.log(RXJS.Observable)