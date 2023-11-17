package CampusEats.Pickup.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import CampusEats.Pickup.Entity.UserEntity;
import CampusEats.Pickup.Methods.LoginRequest;
import CampusEats.Pickup.Service.UserService;


@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/account")
public class UserController {

	@Autowired
	UserService userv;
	
	
	//C - Create a recipient record
	@PostMapping("/insertAccount")
	public UserEntity insertAccount(@RequestBody UserEntity account) {
		return userv.insertAccount(account);
	}
	
	//R - Read all recipient records in tblrecipient
	@GetMapping("/getAllAccounts")
	public List<UserEntity>getAllAccounts(){
		return userv.getAllAccounts();
	}
	
	//U - Update a recipient record
	@PutMapping("/updateAccount")
	public UserEntity updateAccount(@RequestParam String email,@RequestBody UserEntity newUserDetails){
		return userv.updateAccount(email, newUserDetails);
	}
	
	//D - Delete a recipient record
	@DeleteMapping("/deleteAccount/{email}")
	public String deleteAccount(@PathVariable String email) {
		return userv.deleteAccount(email);
	}
	
	@PostMapping("/login")
	 public int login(@RequestBody LoginRequest loginRequest) {
		return userv.login(loginRequest);
	}
	
	
  
}