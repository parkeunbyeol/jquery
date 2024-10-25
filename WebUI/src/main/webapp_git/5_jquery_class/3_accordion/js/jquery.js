/**
 * 
 */



$(function(){
	
	$('.accordion').each(function(){ // accordion은 총 2개있는데 그 두개에 각각 함수 걸어줌

		var allDt = $(this).find('dt');  // (this) = accordion
		var allDd = $(this).find('dd');	// (this) = accordion

		allDd.hide();
		allDd.first().show(); // 첫번째꺼만 보여줘^_________^
		
		allDd.css({'cursor':'pointer'});
		
		allDt.click(function(){	// 모든 dt에 클릭 이벤트를 건다
			allDd.hide();		// 일단 보든 dd를 닫고
			$(this).next().show();	// 눌린 dt에서 다음을 보여준다. 여기선 dt뒤에 dd임
					
		});
	});

});