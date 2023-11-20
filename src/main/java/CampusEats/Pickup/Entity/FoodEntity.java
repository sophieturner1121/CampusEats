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
}