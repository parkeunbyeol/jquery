
<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%> 
 <!-- import 할 때 골뱅이 빼먹지 않기 -->
 <%@ page import="java.sql.*" %> 
    
<%/* parameter()안 대소문자 구별해야함  */

	String empno = request.getParameter("empno");
	System.out.println("사번:" + empno );
	 
	String ename = request.getParameter("ename");
	System.out.println("이름:" + ename );
	
	String job = request.getParameter("job");
	System.out.println("업무:" + job );
	
	String sal = request.getParameter("sal");
	System.out.println("월급:" + sal );
	
	String deptno = request.getParameter("deptno");
	System.out.println("부서번호:" + deptno );

	
	// 0. 필요한 변수 선언 여기선 main이 아니라 static 안붙인다
	String driver	= "oracle.jdbc.driver.OracleDriver";
	String url		= "jdbc:oracle:thin:@127.0.0.1:1521:xe";
	String user		= "scott";
	String pass		= "tiger";
	
	// [1] 드라이버를 메모리 로딩
	Class.forName(driver);
	
	// [2] SQL 문장 (*****)			
	String sql = " INSERT INTO emp(empno, ename, job, sal, deptno)  "
			+ " VALUES(?,?,?,?,?) ";
	
	// [3] 연결객체 얻어오기
	Connection con = DriverManager.getConnection(url, user, pass);
	
	// [4] 전송객체 얻어오기		
	PreparedStatement ps = con.prepareStatement(sql);
		// *****************
		// 미완성부분을 채우기
		ps.setInt(1, Integer.parseInt(empno));
		ps.setString(2, ename);
		ps.setString(3, job );
		ps.setInt(4, Integer.parseInt(sal));
		ps.setInt(5, Integer.parseInt(deptno));
		
	// [5] 전송			
		int result = ps.executeUpdate();
		
	// [6] 닫기
		ps.close();
		con.close();
	
%>    
    
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
</head>
<body>
 	실제로 저장되었습니다.
</body>
</html>