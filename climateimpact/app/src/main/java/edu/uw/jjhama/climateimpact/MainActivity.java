package edu.uw.jjhama.climateimpact;

import android.accounts.Account;
import android.content.Intent;
import android.os.Parcelable;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.util.Log;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;

import java.io.Serializable;

//this class handles signing in
public class MainActivity extends AppCompatActivity {

    private static final String TAG = "MainActivity/Signup";
    private AccountDetails accountDetails;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setTitle("Sign Up");

        setContentView(R.layout.activity_main);

        Button submit = (Button) findViewById(R.id.submit);
        submit.setOnClickListener(new View.OnClickListener(){

            @Override
            public void onClick(View v){
                Log.v(TAG, "Hello! ==========================================================");

                //gets the users information
                EditText nameET = (EditText) findViewById(R.id.name);
                EditText emailET = (EditText) findViewById(R.id.email);
                EditText passwordET = (EditText) findViewById(R.id.password);
                EditText confirmPasswordET = (EditText) findViewById(R.id.confirmPassword);
                String name = nameET.getText().toString();
                String email = emailET.getText().toString();
                String password = passwordET.getText().toString();
                String confirmPassword = confirmPasswordET.getText().toString();


                if(name != null && email != null) {
                    if(password.length() > 0) {
                        if (password.equals(confirmPassword)) {
                            //send the user to the signin page

                            AccountDetails accountDetails = new AccountDetails(name, "last name", email, password);
                            Intent intent = new Intent(MainActivity.this, edu.uw.jjhama.climateimpact.Profile.class);
                            intent.putExtra("account", (Parcelable) accountDetails);
                            Log.v(TAG, accountDetails.toString());
                            startActivity(intent);
                        } else {
                            Log.v(TAG, "password and confirm were not the same");
                        }
                    } else {
                        Log.v(TAG, "password was empty");
                    }
                } else {
                    Log.v(TAG, "name or email was null");
                }
            }
        });

        Button signin = (Button) findViewById(R.id.signin);
        signin.setOnClickListener(new View.OnClickListener(){

            @Override
            public void onClick(View v){
                Log.v(TAG, "Helasdfasdfasdfasdflo! ==========================================================");

                //send the user to the signin page
                Intent intent = new Intent(MainActivity.this, edu.uw.jjhama.climateimpact.Signin.class);
                startActivity(intent);
            }
        });
    }
}
