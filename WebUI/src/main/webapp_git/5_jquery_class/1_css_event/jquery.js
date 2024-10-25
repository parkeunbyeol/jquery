/**
 * 
 */
// 문서가 준비되면 띄운다
$(document).ready(function(){
	
	// 테이블 tr 요소에 css 지정
	$('.data > tbody > tr:odd').css({	// 컴퓨터는 0부터 세므로 우리가 봤을 때 짝수 줄은 odd로 해야함
		'background' : 'pink'
		,'color' : 'white'	
	})	// css는 ;를 사용해야 적용되는데 쿼리에선 사이에 , 를 찍어줘야함
	
	// even 찾기
	$('#celebs tbody tr:even').addClass('table_striping');	// css파일에 있는 것을 클래스로 붙임
	// 자식은 >, 자손은 띄어쓰기 / 여기선 자손
	
	// tr 요소에 마우스가 올라가면 해당클래스 (td_mouseover) 추가하고
		// 마우스가 내려가면 해당클래스 제거하기
		// - mouseenter / mouseleave
		// - mouseover / mouseout
		// - hover
	
		$('tr').mouseenter(function(){
			$(this).addClass('td_mouseover');
		});
		
		$('tr').mouseleave(function(){
			$(this).removeClass('td_mouseover');
		});

	// 감추기 버튼을 눌렀을 때 -> 사진 없애기
	$('#hideButton').click(function(){
//		alert('ok');
//		$('#intro > img').hide();
//		$('#intro > img').fadeOut(1000);
		$('#intro > img').slideUp(1000);
	});
	
	// 보이기 버튼을 눌렀을 때 - > 사진 보이게 하기
	$('#showButton').click(function(){
	//		alert('ok');
//		$('#intro > img').show();
//		$('#intro > img').fadeIn(1000);
		$('#intro > img').slideDown(1000);

	});
	
	// 감추기 보이기 버튼이 눌렸을 때
	$('#toggleButton').click(function(){
		
		if( $('#intro > img').is(':visible') ){
//			alert('보임')
			$(this).val('보이기');
		}else{
//			alert('안보임')
			$(this).val('감추기');
		}
					
//		$('#intro > img').toggle();	// toggle() 토글 함수는 누르면 보이게 하고 또 누르면 없애준다. 스위치 생각하면 됨	
//		$('#intro > img').fadeToggle(2000);
		$('#intro > img').slideToggle(2000);
		

	})
	
	
	
})
