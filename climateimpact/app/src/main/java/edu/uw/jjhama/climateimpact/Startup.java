package edu.uw.jjhama.climateimpact;

import android.content.Intent;
import android.graphics.drawable.Drawable;
import android.os.Bundle;
import android.os.Parcelable;
import android.support.v7.app.AppCompatActivity;
import android.util.Log;
import android.view.View;
import android.widget.Button;
import android.widget.ImageView;

/**
 * Created by iguest on 4/20/16.
 */
public class Startup extends AppCompatActivity {
    private static final String TAG = "Startup";

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.startup);

//        //assign the logo to the page
//        ImageView img=(ImageView)findViewById(R.id.imageViewLogo);
//        Drawable myDrawable = getResources().getDrawable(R.drawable.ic_nav_logo);
//        img.setImageDrawable(myDrawable);

        //get the buttons
        Button signup = (Button) findViewById(R.id.signup);
        Button signin = (Button) findViewById(R.id.signin);

        signup.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                Intent intent = new Intent(Startup.this, edu.uw.jjhama.climateimpact.MainActivity.class);
                startActivity(intent);
            }
        });

        signin.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                Intent intent = new Intent(Startup.this, edu.uw.jjhama.climateimpact.Signin.class);
                startActivity(intent);
            }
        });
    }
}
