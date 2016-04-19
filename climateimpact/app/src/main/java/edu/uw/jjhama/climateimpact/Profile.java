package edu.uw.jjhama.climateimpact;

import android.app.FragmentManager;
import android.content.Context;
import android.content.Intent;
import android.os.Bundle;
import android.support.v4.app.Fragment;
import android.support.v4.widget.DrawerLayout;
import android.support.v7.app.ActionBarDrawerToggle;
import android.support.v7.app.AppCompatActivity;
import android.util.Log;
import android.view.Menu;
import android.view.MenuInflater;
import android.view.MenuItem;
import android.view.View;
import android.view.inputmethod.InputMethodManager;
import android.widget.AdapterView;
import android.widget.ArrayAdapter;
import android.widget.Button;
import android.widget.ListView;
import android.widget.TextView;

/**
 * Created by iguest on 4/17/16.
 */
public class Profile extends Activity{
    private static final String TAG = "Profile";
    private String[] mNavigationDrawerItemTitles;

    private AccountDetails accountDetails;
    private DrawerLayout mDrawer;
    //private NavigationView nvDrawer;

    private String[] mPlanetTitles;
    private DrawerLayout mDrawerLayout;
    private ListView mDrawerList;
    private ActionBarDrawerToggle mDrawerToggle;
    private CharSequence mDrawerTitle;
    private CharSequence mTitle;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.profile);
        mNavigationDrawerItemTitles = getResources().getStringArray(R.array.navigation_drawer_items_array);
        mDrawerLayout = (DrawerLayout) findViewById(R.id.drawer_layout);
        mDrawerList = (ListView) findViewById(R.id.left_drawer);
        // Find our drawer view
        mDrawer = (DrawerLayout) findViewById(R.id.drawer_layout);
        //accountDetails = (AccountDetails) getApplicationContext().getInstance();

        /*
        String[] planets_array = new String[]{"A", "B", "C"};
        mPlanetTitles = planets_array;
        mDrawerLayout = (DrawerLayout) findViewById(R.id.drawer_layout);
        mDrawerList = (ListView) findViewById(R.id.left_drawer);

        // Set the adapter for the list view
        mDrawerList.setAdapter(new ArrayAdapter<String>(this,
                R.layout.drawer_list_item, mPlanetTitles));
        // Set the list's click listener
        mDrawerList.setOnItemClickListener(new DrawerItemClickListener());
        */




        Intent intent = getIntent();
        accountDetails = (AccountDetails) intent.getParcelableExtra("account");
        Log.v(TAG, "-=-=-=-=-=-=-=-=-=-=-=-=-=-=-= " + accountDetails.getEmail() + " -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=");

        // Find our drawer view
        //nvDrawer = (NavigationView) findViewById(R.id.nvView);

        ObjectDrawerItem[] drawerItem = new ObjectDrawerItem[2];

        //https://www.codeofaninja.com/2014/02/android-navigation-drawer-example.html
        //drawerItem[0] = new ObjectDrawerItem("Create");
        drawerItem[0] = new ObjectDrawerItem(R.drawable.ic_nav_profile, "Profile");
        drawerItem[1] = new ObjectDrawerItem(R.drawable.ic_start_game, "Activity");
        //drawerItem[2] = new ObjectDrawerItem(R.drawable.ic_action_share, "Help");

        //get the different textviews I want to manipulate
        TextView fName = (TextView) findViewById(R.id.fName);
        TextView lName = (TextView) findViewById(R.id.lName);
        TextView carbon = (TextView) findViewById(R.id.carbon);
        TextView water = (TextView) findViewById(R.id.water);

        //set the values to users account details
        fName.setText(accountDetails.getfName());
        lName.setText(accountDetails.getlName());
        carbon.setText(accountDetails.getCarbon()+ "");
        water.setText(accountDetails.getWater() + "");

        //go get to activities
        Button button = (Button) findViewById(R.id.activity);
        button.setOnClickListener(new View.OnClickListener() {

            @Override
            public void onClick(View v) {
                Intent intent = new Intent(Profile.this, edu.uw.jjhama.climateimpact.Activity.class);
                startActivity(intent);
            }
        });
    }

    /*
    private class DrawerItemClickListener implements ListView.OnItemClickListener {
        @Override
        public void onItemClick(AdapterView parent, View view, int position, long id) {
            selectItem(position);
        }
    }

    // Swaps fragments in the main content view
    private void selectItem(int position) {
        // Create a new fragment and specify the planet to show based on position
        Fragment fragment = new PlanetFragment();
        Bundle args = new Bundle();
        args.putInt(PlanetFragment.ARG_PLANET_NUMBER, position);
        fragment.setArguments(args);

        // Insert the fragment by replacing any existing fragment
        FragmentManager fragmentManager = getFragmentManager();
        fragmentManager.beginTransaction()
                .replace(R.id.content_frame, fragment)
                .commit();

        // Highlight the selected item, update the title, and close the drawer
        mDrawerList.setItemChecked(position, true);
        setTitle(mPlanetTitles[position]);
        mDrawerLayout.closeDrawer(mDrawerList);
    }

    @Override
    public void setTitle(CharSequence title) {
        mTitle = title;
        getActionBar().setTitle(mTitle);
    }
    */
}
