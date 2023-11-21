package CampusEats.Pickup.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import CampusEats.Pickup.Entity.FoodEntity;

@Repository
public interface FoodRepository extends JpaRepository<FoodEntity, Integer> {
  
    
}
