





// 함수의 인자로 들어오는 함수처리
function arrayProcess( data, f ) {  // 여기 f에 sum이 들어와서 (data, sum)이 되면 sum함수(16행)를 부르는 거고, squere이 들어오면 (data, squere) 
									// squere함수(22행)가 불려진다.
	for( key=0; key < data.length; key++ ){
	//for(var key in data ){
		f(  data[key].value );
	}
} 

// 각각의 데이터를 더하는 함수
var sumResult = 0;
function sum(  data ){	
	sumResult += parseInt(data);
}

// 각각의 데이터의 곱을 구하는 함수
var squareResult = new Array();
function square(  data ){			
	squareResult.push( data * data );
}
