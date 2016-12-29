import * as rxjs from 'rxjs';

import * as jQuery from 'jquery';


const getJSONAsObservable = rxjs.Observable.bindCallback(jQuery.getJSON);
getJSONAsObservable('./package.json')

.filter((data)=>{

	return data[0].author=='johnny.zheng'

})
.subscribe((data)=>{
	console.log(data[0].license)
})