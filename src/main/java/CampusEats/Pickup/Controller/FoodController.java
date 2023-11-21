package CampusEats.Pickup.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import CampusEats.Pickup.Entity.FoodEntity;
import CampusEats.Pickup.Service.FoodService;

import java.io.IOException;
import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/api/foods")
public class FoodController {

    private final FoodService foodService;

    @Autowired
    public FoodController(FoodService foodService) {
        this.foodService = foodService;
    }

    // Endpoint to retrieve all food items
    @GetMapping
    public ResponseEntity<List<FoodEntity>> getAllFoods() {
        List<FoodEntity> foods = foodService.getAllFoods();
        return new ResponseEntity<>(foods, HttpStatus.OK);
    }

    // Endpoint to retrieve a specific food item by ID
    @GetMapping("/{id}")
    public ResponseEntity<FoodEntity> getFoodById(@PathVariable int id) {
        Optional<FoodEntity> food = foodService.getFoodById(id);
        if (food.isPresent()) {
            return new ResponseEntity<>(food.get(), HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    // Endpoint to create a new food item with image upload
    @PostMapping(consumes = {"multipart/form-data"})
    public ResponseEntity<FoodEntity> createFood(
            @RequestParam("foodName") String foodName,
            @RequestParam("price") double price,
            @RequestParam("description") String description,
            @RequestParam("image") MultipartFile imageFile) {
        try {
            FoodEntity foodEntity = new FoodEntity();
            foodEntity.setFoodName(foodName);
            foodEntity.setPrice(price);
            foodEntity.setDescription(description);
            if (!imageFile.isEmpty()) {
                foodEntity.setImage(imageFile.getBytes());
            }

            FoodEntity createdFood = foodService.createFood(foodEntity);
            return new ResponseEntity<>(createdFood, HttpStatus.CREATED);
        } catch (IOException e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    // Endpoint to update an existing food item by ID with image upload
    @PutMapping(path = "/{id}", consumes = {"multipart/form-data"})
    public ResponseEntity<FoodEntity> updateFood(
            @PathVariable int id,
            @RequestParam("foodName") String foodName,
            @RequestParam("price") double price,
            @RequestParam("description") String description,
            @RequestParam("image") MultipartFile imageFile) {
        try {
            Optional<FoodEntity> foodOptional = foodService.getFoodById(id);
            if (!foodOptional.isPresent()) {
                return new ResponseEntity<>(HttpStatus.NOT_FOUND);
            }
            
            FoodEntity foodEntity = foodOptional.get();
            foodEntity.setFoodName(foodName);
            foodEntity.setPrice(price);
            foodEntity.setDescription(description);
            if (!imageFile.isEmpty()) {
                foodEntity.setImage(imageFile.getBytes());
            }

            FoodEntity updatedFoodEntity = foodService.updateFood(id, foodEntity);
            if (updatedFoodEntity == null) {
                return new ResponseEntity<>(HttpStatus.NOT_FOUND);
            }
            
            return new ResponseEntity<>(updatedFoodEntity, HttpStatus.OK);
        } catch (IOException e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    // Endpoint to delete a food item by ID
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteFood(@PathVariable int id) {
        boolean deleted = foodService.deleteFood(id);
        if (deleted) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }
}