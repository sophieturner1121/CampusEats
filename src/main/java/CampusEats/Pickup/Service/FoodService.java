package CampusEats.Pickup.Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import CampusEats.Pickup.Entity.FoodEntity;
import CampusEats.Pickup.Repository.FoodRepository;

import java.util.List;
import java.util.Optional;

@Service
public class FoodService {

    private final FoodRepository foodRepository;

    @Autowired
    public FoodService(FoodRepository foodRepository) {
        this.foodRepository = foodRepository;
    }

    public List<FoodEntity> getAllFoods() {
        return foodRepository.findAll();
    }

    public Optional<FoodEntity> getFoodById(int id) {
        return foodRepository.findById(id);
    }

    public FoodEntity createFood(FoodEntity food) {
        return foodRepository.save(food);
    }

    public FoodEntity updateFood(int id, FoodEntity updatedFood) {
        if (foodRepository.existsById(id)) {
            updatedFood.setId(id);
            return foodRepository.save(updatedFood);
        }
        return null; // Handle not found error
    }

    public boolean deleteFood(int id) {
        if (foodRepository.existsById(id)) {
            foodRepository.deleteById(id);
            return true;
        }
        return false; // Handle not found error
    }
}
