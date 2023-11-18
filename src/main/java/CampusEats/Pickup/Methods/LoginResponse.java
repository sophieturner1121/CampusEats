package CampusEats.Pickup.Methods;

import CampusEats.Pickup.Entity.UserEntity;

public class LoginResponse {
	private String status;
	private String message;
	private UserEntity userDetails;
	
	public LoginResponse() {
		
	}
	
	public LoginResponse(String status, String message, UserEntity userDetails) {
		super();
		this.status = status;
		this.message = message;
		this.userDetails = userDetails;
	}

	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}

	public String getMessage() {
		return message;
	}

	public void setMessage(String message) {
		this.message = message;
	}

	public UserEntity getUserDetails() {
		return userDetails;
	}

	public void setUserDetails(UserEntity userDetails) {
		this.userDetails = userDetails;
	}
	
	
	 
	
}
