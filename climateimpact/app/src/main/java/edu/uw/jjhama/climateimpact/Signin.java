package edu.uw.jjhama.climateimpact;

import android.content.Intent;
import android.os.Bundle;
import android.support.v7.app.AppCompatActivity;
import android.util.Log;
import android.view.View;
import android.widget.Button;

/**
 * Created by iguest on 4/15/16.
 */
public class Signin extends AppCompatActivity {
    private static final String TAG = "Signin";

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.signin);

        Button submit = (Button) findViewById(R.id.submit);
        submit.setOnClickListener(new View.OnClickListener(){

            @Override
            public void onClick(View v){
                Log.v(TAG, "Hello! ==========================================================");

                //send the user to the signin page
                Intent intent = new Intent(Signin.this, edu.uw.jjhama.climateimpact.Profile.class);
                startActivity(intent);
            }
        });

        Button signin = (Button) findViewById(R.id.signup);
        signin.setOnClickListener(new View.OnClickListener(){

            @Override
            public void onClick(View v){
                Log.v(TAG, "Helasdfasdfasdfasdflo! ==========================================================");

                //send the user to the signin page
                Intent intent = new Intent(Signin.this, edu.uw.jjhama.climateimpact.MainActivity.class);
                startActivity(intent);
            }
        });
    }
}
