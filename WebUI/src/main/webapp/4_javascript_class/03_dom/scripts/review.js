

window.onload = function(){
	
	var img = document.querySelector('#profile > img')
	// 여기서 var img 는 화면에 뜨는 프로필 사진 아이콘을 가르킴
	
	var desc_user = document.querySelectorAll('.user');
	// querySelector은 하나만 가져옴. 때문에 클래스가 여러개면 querySelectorAll을 사용해야 한다.
	var h3 = document.getElementById('btn');
	h3.onclick=function(){
		// id가 btn인 걸 찾아서 h3에 넣고, 넣은 h3에 클릭이벤트를 걸어서 저장된 11행의 이미지를 띄운다.
		img.src = 'images/she.png';
		desc_user[0].innerHTML = '이름 : 홍길동';
		// 클래스 이름이 user인 것들을 찾아 desc_user에 넣어준 뒤 여기서의 0번째의 innerHTML(태그와 태그) 사이에
		// '이름: 홍길동'으로 변경해준다.
		desc_user[1].innerHTML = '주소 : 런던';
		desc_user[2].innerHTML = '연락처 : 핸드폰 없음';
	};
}
