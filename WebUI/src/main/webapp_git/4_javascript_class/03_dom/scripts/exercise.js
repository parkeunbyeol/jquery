

window.onload = function(){

	
	var item = document.querySelectorAll('.item');
		// 배열이랑 연결된 for문은 var쓰면 덮여져서 오류날 확률이 많음
		// 때문에 배열이랑 관련된거라면 var보다는 let을 사용하는 게 낫다. 
		for( let i = 0 ; i < 6 ; i++){
			item[i].onclick=function(){
				alert(item[i].getAttribute('data-price'))	
			}
		}
	
		// var가 문제가 많으니 let을 쓰자 -----------선생님 말씀------------
		
	var tds = document.querySelectorAll('.item');
	
	for( var i = 0; i<tds.length ;  i++){
		// var i = 0 에서 var은 전역 변수라 for문 안에 있는 것처럼 보이지만 실상은 17행에 빠져있는 것과 같다.
		// 그래서 for문이 끝나도 var는 살아있다.
		tds[i].onclick = function(){
		// i번째 td에서 클릭이벤트가 발생했을 때 함수를 연결
		// 이벤트 함수는 사용자가 클릭했을 때 실행함. -> 클릭 안 했을 때는 실행하지 않음
		alert('i=' + i);
		// 19~20행의 이유로 24행을 실행하면 '6'이 나온다. -> 때문에 커피, 녹차 등등 다른 셀을 클릭해도 '6'만 나오게 됨.=오류
		}		
	}
	
	
	for( let i = 0 ; i <tds.length ; i++){
		// let i = 0 은 지역변수이기 때문에 for문 블록을 빠져나가면 영향을 끼치지 않는다.
		alert('i=' + i); // -> 32행은 for문 블록 안에 있기 때문에 let i = 0 에 영향을 받을 수 있음
	}
//		alert('i=' + i);  // 31행의 이유 때문에 for문 밖에 있는 34행은 에러가 난다.
}
