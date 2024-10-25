
$(function(){
	
	let topDiv = $('.tabSet');  // topDiv=tabSet
	
	let anchors = topDiv.find('ul.tabs  a'); // tabSet에서 찾아라 ul태그안에 있는 tabs 클래스 안에 있는 a
		// 앵커스 , 14~17행 첫번째 두번째 버튼들
	
	let panelDivs = topDiv.find('div.panels > .panel');	// tabSet에서 div태그 안에 panels라는 클래스의 자식 중 panel이라는 클래스를 찾아라!
	
	anchors.show();
	panelDivs.hide();
	
	let lastAnchor = anchors.filter('.on');	// jquery_test.html 파일에서 14행
	let lastPanel  = $(lastAnchor.attr('href')); // jquery_test.html 파일 14행의 #panel1-1
	
	//<a>에 클릭이벤트
	anchors.click(function(){
		let currentAnchor = $(this); // 누른 버튼을 currentAnchor
		let currentPanel = $(currentAnchor.attr('href')); // 눌린 버튼의 href가 currentPanel
		
		lastAnchor.removeClass('on'); // 첫번째라는 버튼의 on 클래스를 지우고
		currentAnchor.addClass('on'); // 누른 버튼에 on 클래스를 붙인다.
						
		lastPanel.hide(); // 기존에 첫번째 버튼에 있떤 panel1-1의 내용을 숨긴다
		currentPanel.show();	// 누른 버튼의 href의 내용을 보여준다. ex) 두번째 버튼을 누르면 그 버튼의 href와 연결된 paneln-n의 내용을 보여줌
		
		lastAnchor = currentAnchor; // 마지막 버튼은 누른 버튼
		lastPanel  = currentPanel; // 마지막 패널은 누른 버튼의 href
		
	});
})