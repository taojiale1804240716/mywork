package model.dao;

import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

import tools.JdbcUtil;
import vo.User;

public class UserDao {
       
	
	public  User getUser(String userName) throws SQLException{
		 User user = null;
		
		JdbcUtil jdbcutil=new JdbcUtil();
	
		String sql="select * from t_user where userName='"+userName+"'";
		

	    ResultSet rs=jdbcutil.query(sql);
		
		if(rs.next()){			
			  user =new User(rs.getString("userName"),rs.getString("password"),rs.getString("charName"),rs.getString("role"));
		}
	    
		jdbcutil.close();
		return user;		
	}
	public List<User> getUserList() throws SQLException{
   	  //准备一个搜索所有user的sql语句
		String sql="select * from t_user";
		JdbcUtil jdbcutil=new JdbcUtil();
		ResultSet rs=jdbcutil.query(sql);
		//实例化user的列表
		ArrayList<User> list=new ArrayList<User>();
		User user=null;
		while(rs.next()){
			user=new User(rs.getString("userName"),rs.getString("password"),rs.getString("charName"),rs.getString("role"));
			list.add(user);
		}
		return list;
   }
}
