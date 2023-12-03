//https://codeforces.com/contest/702/problem/D
#include<iostream>
using namespace std;
main()
{
    unsigned long long int d,k,a,b,t,st=0,x,y,r;
    cin>>d>>k>>a>>b>>t;
    x=t+k*a;
    y=k*b;
    if(d>k)
    {
        d=d-k;
        if(a*k<=b*k)
            st=a*k;
        else
            st=b*k;
        r=d/k;
        if(x<=y)
        {
            d=d-r*k;
            st=st+r*x;
        }
        else
        {
            d=d-r*k;
            st=st+r*y;
        }
        if(d*b<=(t+d*a))
            st=st+d*b;
        else if(d*b>(t+d*a))
            st=st+t+d*a;
    }
    else
    {
        if(d*b<=d*a)
            st=d*b;
        else
            st=d*a;
    }

    cout<<st;
}
