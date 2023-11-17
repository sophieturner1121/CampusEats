package CampusEats.Pickup.Entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="tbluseracc")
public class UserEntity {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "account_id")
	private int id;
	
	@Column(unique = true)
	private String email;
	
	private String password;
	private int userType;
	
	public UserEntity() {
		super();
	}

	public UserEntity(int id, String email, String password, int userType) {
		super();
		this.id = id;
		this.password = password;
		this.email = email;
		this.userType = userType;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public int getUserType() {
		return userType;
	}
	

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public void setUserType(int userType) {
		this.userType = userType;
	}
	

}
