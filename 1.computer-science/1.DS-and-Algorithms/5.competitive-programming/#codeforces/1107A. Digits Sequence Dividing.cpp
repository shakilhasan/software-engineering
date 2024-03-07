//https://codeforces.com/contest/1107/problem/A
#include<iostream>
using namespace std;
main()
{
    string s;
    int p,i,j,k;
    cin>>p;
    for(i=0; i<p; i++)
    {
        cin>>k;
        cin>>s;
        if(k>2)
        {
            cout<<"\nYES\n2\n"<<s[0]<<" ";
            for(j=1; j<k; j++)
            {
                cout<<s[j];
            }
            cout<<endl;

        }

        else
        {
            if(s[0]>=s[1])
                cout<<"NO\n";
            else
                cout<<"YES\n2\n"<<s[0]<<" "<<s[1]<<"\n";

        }

    }


}
