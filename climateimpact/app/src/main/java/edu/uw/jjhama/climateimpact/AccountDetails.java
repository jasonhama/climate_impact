package edu.uw.jjhama.climateimpact;

/**
 * Created by iguest on 4/17/16.
 */
public class AccountDetails {

    private String fName;
    private String lName;
    private String email;
    private String password;
    private int water;
    private int carbon;


    // Constructor.
    public AccountDetails() {
        this.fName = "";
        this.lName = "";
        this.email = "";
        this.password = "";
        this.water = 0;
        this.carbon = 0;
    }

    public AccountDetails(String fName, String lName, String email, String password){
        this.fName = fName;
        this.lName = lName;
        this.email = email;
        this.password = password;
        this.water = 0;
        this.carbon = 0;
    }

    //

    //getters and setters
    public String getfName(){
        return fName;
    }

    public void setfName(String name){
        this.fName = name;
    }

    public String getlName(){
        return lName;
    }

    public void setlName(String name){
        this.lName = name;
    }

    public String getEmail(){
        return email;
    }

    public void setEmail(String email){
        this.email = email;
    }

    public int getWater(){
        return this.water;
    }

    public void setWater(int water){
        this.water = water;
    }

    public void addWater(int water){
        this.water = this.water + water;
    }

    public int getCarbon(){
        return this.carbon;
    }

    public void setCarbon(int carbon){
        this.carbon = carbon;
    }

    public void addCarbon(int carbon){
        this.carbon = this.carbon + carbon;
    }

}
