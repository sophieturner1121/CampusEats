<<<<<<< HEAD
package CampusEats.Pickup.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import CampusEats.Pickup.Entity.UserEntity;

@Repository
public interface UserRepository extends JpaRepository<UserEntity, Integer> {
	UserEntity findByEmail(String email);
	void deleteByEmail(String email);
}
=======
package CampusEats.Pickup.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import CampusEats.Pickup.Entity.UserEntity;

@Repository
public interface UserRepository extends JpaRepository<UserEntity, Integer> {
	UserEntity findByEmail(String email);
	void deleteByEmail(String email);
}
>>>>>>> 450addd2e4acb31018f6b3e8d96ff05726ee2be5
	