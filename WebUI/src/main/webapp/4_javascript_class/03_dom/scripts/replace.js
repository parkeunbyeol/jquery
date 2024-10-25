
// window.onload = function(){	
		
  var list = document.getElementById('list');
  var pic = document.getElementById('pic');
  var del = document.getElementById('del');

  // 리스트에서 선택(클릭했을 때)
	list.onclick = function(event){
		// 이벤트 발생에 대한 정보는 event가 받음
//		console.log(event.target);
			// 이벤트가 발생한 타겟(표적)
			// 단순히 event만 쓰면 list 전체가 한덩어리로 이벤트가 발생한다. 왜냐면 list는 html에 자식들인li에 묶음이기때문에
			// 이 상황에서 행 하나하나씩(li a 하나씩) 따로 분리하고 싶으면 event.target을 사용해주면 이벤트가 분리되어 행마다 따로 발생한다.
		var isbn = event.target.getAttribute('data-isbn');
//		 	alert(isbn);

		if(isbn){
			// <img src = '경로' width='1000' height='150'>
			var img = document.createElement('img'); // img 태그를 만든것
			img.width = 100;
			img.height = 150;
			img.src = 'images/' + isbn + '.jpg';
				// console.log(img);
				
					/* 23행 img.src는 상대경로를 만든거다.
					 'images/'는 images라는 폴더에 isbn을 붙이고 뒤에 문자열 .jpg를 붙인거다.
					 여기서 isbn은 4_replace.html에 속성값으로 나와있긴 하지만 예를들면,
					  img.src = images/asp.jpg 가 되는 것 isbn은 여기선 그냥 사진이름이다.
					*/
					
				// pic.appendChild(img);
			
			if( pic.getElementsByTagName('img').length > 0 ){
				// 이미 있는 경우
				pic.replaceChild(img, pic.lastChild); // img에 있던 것을 pic.lastChild로 바꿔주는거고
				
			}else{
				// pic 아래 <img> 태그가 없는 경우는
				pic.appendChild(img); // <dv>공간(pic은 dv의 id임)에 img를 붙인다.
				del.disabled = false; // 삭제 버튼을 활성화 시킴.
			}
		}

	}

  
  // 삭제 버튼 누르면 pic 아래 자식(img 태그)를 지운다
		del.onclick = function (){
//			alert('삭제');
			pic.removeChild(pic.lastChild);
			del.disabled = true; 
		}  
  
//}; // end of window.onload
