import * as rxjs from 'rxjs';

import * as jQuery from 'jquery';


const getJSONAsObservable = rxjs.Observable.bindCallback(jQuery.getJSON);
getJSONAsObservable('./package.json').subscribe((data)=>{
	console.log(data[0].license)
})