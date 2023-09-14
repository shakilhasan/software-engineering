#include <iostream>
using namespace std;
#include<bits/stdc++.h>
int main()
{

//22.462851, 91.970675
    double x = 22.461524;
    double y = 91.970731;


    for ( int i=0; i<10; i++ )
    {
        x =x+0.000001;
        for ( int j=0; j<10; j++ )
        {
                y =y+0.000001;

            cout << fixed << setprecision(6) << x<<","<<y<<endl;
        }
    }
}
