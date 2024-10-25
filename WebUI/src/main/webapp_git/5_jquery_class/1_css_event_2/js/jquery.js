
$(function(){
	
	$('.rollover img').hover(function(){	// 클래스가 rollover의 자식이img
		// 마우스 올라갔을 때
//		var src = $(this).attr('src'); // 마우스가 올라간(this)의 속성인 'src'를  src라는 변수에 넣음
//		alert(src);
		// imgs/menu01_off.png -> imgs/menu01_on.png
		var src_result = $(this).attr('src').replace('_off', '_on'); // 이미지 이름의 off부분을 on으로 바꿔 그에 맞는 이미지로 바꾼다. 이미지는 원래 off랑 on두 개가 파일에 있는데 마우스가 올라갔을 때 사진을 on으로변경해주기 위해 이름만 리플레이스
//		alert(src);

		$(this).attr('src', src_result);
		
	}, function(){
		// 마우스 나갔을 때
//		var src1 = $(this).attr('src');
//		alert(src1);

//		var src1_result = $(this).attr('src').replace('_on', '_off');	
		 
		 $(this).attr('src', $(this).attr('src').replace('_on', '_off'));	// attr('')은 ''이라는 속성값을 뜻하고 attr('', ____)는 속성값 ''를 ____로 바꾼다는것
	});	

})