//https://codeforces.com/contest/579/problem/A
#include<iostream>
using namespace std;
main()
{
    long long int k=1,n,t=0;
    cin>>n;
    if(n%2==1)
    {
        t=1; n=n-1;
    }
    while(n>0)
    {k=k*2;
        if(k>n)
        {
            n=n-(k/2);
            t++;
            k=1;
        }


    }

    cout<<t;
}
