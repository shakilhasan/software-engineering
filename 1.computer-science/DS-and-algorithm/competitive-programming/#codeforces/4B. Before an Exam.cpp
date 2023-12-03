//https://codeforces.com/contest/4/problem/B
#include<iostream>
using namespace std;
main()
{
    int d,t,s,a[1000],b[1000],i,min,max,k=0,q=0;
    cin>>d>>s;
    t=s;
    for(i=0; i<d; i++)
    {
        cin>>min>>max;

        if(s>=min)
        {
            a[i]=min;
            s=s-min;
        }
        else{

            q=1;
        }
        b[i]=max-min;
        k=k+max;
    }
    if(k<t||q==1)
    {
        cout<<"NO";
        return 0;
    }

    cout<<"YES"<<endl;
    for(i=0; i<d; i++)
    {


        if(s>=b[i])
        {
            cout<<a[i]+b[i]<<" ";
            s=s-b[i];
        }
        else
        {
            cout<<a[i]+s<<" ";
            s=0;
        }

    }

}
