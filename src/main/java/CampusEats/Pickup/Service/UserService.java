package CampusEats.Pickup.Service;

import java.util.List;
import java.util.NoSuchElementException;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import CampusEats.Pickup.Entity.UserEntity;
import CampusEats.Pickup.Methods.LoginRequest;
import CampusEats.Pickup.Methods.LoginResponse;
import CampusEats.Pickup.Repository.UserRepository;

@Service
public class UserService {

		@Autowired
		UserRepository urepo;
		

		
		//C - Create or insert account record in tblaccount
		public UserEntity insertAccount(UserEntity account) {
			return urepo.save(account);
		}
		
		//R - read all records in tblaccount
		public List<UserEntity> getAllAccounts(){
			return urepo.findAll();
		}
		 
		//U - update a account
		@SuppressWarnings("finally")
		public UserEntity updateAccount(String email, UserEntity newUserDetails) {
			UserEntity account = new UserEntity();
			try {
				//1.)search the id number of account that will be updated
				account = urepo.findByEmail(email);
				
			    //2.) update the record
				account.setPassword(newUserDetails.getPassword());
				
			}catch(NoSuchElementException ex) {
				throw new NoSuchElementException("Recipient "+ email + " does not exist!");
			}finally {
				return urepo.save(account);
			}
		}
		
		//D - delete a account
		@Transactional
		public String deleteAccount(String email) {
			String msg = "";
			
			if(urepo.findByEmail(email) != null) {
				urepo.deleteByEmail(email);
				msg = "Account " + email + " is successfully deleted!";
			}
			else
				msg = "Account " + email + " does not exist";
			return msg;
			
		}
		
		public ResponseEntity<LoginResponse> login(LoginRequest loginRequest) {
	        String email = loginRequest.getEmail();
	        String password = loginRequest.getPassword();

	        UserEntity user = urepo.findByEmail(email);

	        LoginResponse response = new LoginResponse();

	        if (user != null && user.getPassword().equals(password)) {
	            response.setStatus("success");
	            response.setMessage("Login successful");
	            response.setUserDetails(user); // Be cautious about sensitive information
	            return ResponseEntity.ok(response);
	        } else {
	            response.setStatus("fail");
	            response.setMessage("Invalid email or password");
	            return ResponseEntity.badRequest().body(response);
	        }
	    }
	   
}