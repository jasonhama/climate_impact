package edu.uw.jjhama.climateimpact;

import android.os.Bundle;
import android.support.v4.widget.DrawerLayout;
import android.support.v7.app.AppCompatActivity;
import android.widget.ListView;

/**
 * Created by iguest on 4/17/16.
 */
public class Profile extends AppCompatActivity{
    private static final String TAG = "Profile";
    private String[] mNavigationDrawerItemTitles;
    private DrawerLayout mDrawerLayout;
    private ListView mDrawerList;
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.test);
        mNavigationDrawerItemTitles = getResources().getStringArray(R.array.navigation_drawer_items_array);
        mDrawerLayout = (DrawerLayout) findViewById(R.id.drawer_layout);
        mDrawerList = (ListView) findViewById(R.id.left_drawer);

        ObjectDrawerItem[] drawerItem = new ObjectDrawerItem[3];

        //https://www.codeofaninja.com/2014/02/android-navigation-drawer-example.html
        //drawerItem[0] = new ObjectDrawerItem("Create");
        drawerItem[0] = new ObjectDrawerItem(R.drawable.ic_nav_profile, "Profile");
        //drawerItem[2] = new ObjectDrawerItem(R.drawable.ic_action_share, "Help");
    }
}
