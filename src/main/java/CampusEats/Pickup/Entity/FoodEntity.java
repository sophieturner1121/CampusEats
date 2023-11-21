package CampusEats.Pickup.Entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Lob;
import javax.persistence.Table;

@Entity
@Table(name="tblfood")
public class FoodEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "food_id")
    private int id;
    
    @Column(name = "food_name", nullable = false)
    private String foodName;

    @Column(nullable = false)
    private double price;

    @Column(length = 500)
    private String description;

    @Lob
    @Column(name = "image", columnDefinition = "BLOB")
    private byte[] image;

    public FoodEntity() {
        super();
    }

    public FoodEntity(int id, String foodName, double price, String description, byte[] image) {
        super();
        this.id = id;
        this.foodName = foodName;
        this.price = price;
        this.description = description;
        this.image = image;
    }

    // Getters and setters for all fields
    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getFoodName() {
        return foodName;
    }

    public void setFoodName(String foodName) {
        this.foodName = foodName;
    }

    public double getPrice() {
        return price;
    }

    public void setPrice(double price) {
        this.price = price;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public byte[] getImage() {
        return image;
    }

    public void setImage(byte[] image) {
        this.image = image;
    }
}

