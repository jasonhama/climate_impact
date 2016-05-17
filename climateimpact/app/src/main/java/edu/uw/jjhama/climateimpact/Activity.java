package edu.uw.jjhama.climateimpact;

import android.app.Dialog;
import android.app.DialogFragment;
import android.content.DialogInterface;
import android.content.Intent;
import android.os.Bundle;
import android.support.v4.app.FragmentActivity;
import android.support.v4.app.FragmentManager;
import android.support.v7.app.AlertDialog;
import android.support.v7.app.AppCompatActivity;
import android.util.Log;
import android.view.View;
import android.widget.Button;

/**
 * Created by iguest on 4/18/16.
 */
public class Activity extends AppCompatActivity{
    private static final String TAG = "Activity";
    private AccountDetails accountDetails;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity);

        Button info = (Button) findViewById(R.id.info);
        info.setOnClickListener(new View.OnClickListener() {



            @Override
            public void onClick(View v) {
//                ActivityDetail frag = new ActivityDetail();
//                frag.show(getApp().getSupportFragmentManager(), "banana");
//
//
//                getActivity().getSupportFragmentManager()
//                        .beginTransaction()
//                        .replace(R.id.container1, new MasterListFragment())
//                        .addToBackStack(null)
//                        .commit();
                Log.v(TAG, "here");
                FragmentManager manager = getSupportFragmentManager(); // or getFragmentManager, depends on which api lvl you are working on but supportFragmentManager will make you dialog work also on devices lower than api lvl 11(3.0 - > Honeycomb)
                DialogFragment Dialog = ActivityDetail.newInstance();
                //Dialog.show(manager, null);
            }
        });
        ActivityDetail alert = new ActivityDetail();


    }



    /*
    @Override
    public Dialog onCreateDialog(Bundle savedInstanceState) {
        // Use the Builder class for convenient dialog construction
        AlertDialog.Builder builder = new AlertDialog.Builder(getActivity());
        builder.setMessage("test")
                .setPositiveButton("yes", new DialogInterface.OnClickListener() {
                    public void onClick(DialogInterface dialog, int id) {
                        // FIRE ZE MISSILES!
                    }
                })
                .setNegativeButton("cancel", new DialogInterface.OnClickListener() {
                    public void onClick(DialogInterface dialog, int id) {
                        // User cancelled the dialog
                    }
                });
        // Create the AlertDialog object and return it
        return builder.create();
    }
    */
}
