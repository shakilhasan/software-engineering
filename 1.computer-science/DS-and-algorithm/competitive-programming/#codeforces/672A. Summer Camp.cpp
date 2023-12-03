//https://codeforces.com/contest/672/problem/A
#include<iostream>
using namespace std;
main()
{
    int n,k,k1;
    cin>>n;
    if(n<10)
    {
        cout<<n;
    }
    else if(n>9&&n<190)
    {
        k=(9+n)/2;
        k1=(9+n)%2;
        if(k1==0)
            cout<<(k%10);
        else
            cout<<(k+1)/10;
    }


    else if(n>189&&n<2890)
    {
        k=(n-189)/3;
        k1=(n-189)%3;
        if(k1==0)
            cout<<(99+k)%10;
        else if(k1==2)
            cout<<((99+k+1)/10)%10;
        else if(k1==1)
            cout<<(99+k+1)/100;
    }
    else if(n>2889)
    {
        if(n==2890)
            cout<<1;
        else
            cout<<0;
    }


}
