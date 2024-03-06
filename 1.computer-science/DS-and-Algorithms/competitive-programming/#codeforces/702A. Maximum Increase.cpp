//https://codeforces.com/contest/702/problem/A
#include<iostream>
#include<bits/stdc++.h>
#include<string.h>
using namespace std;
main()
{
    long long int i,a,n,t=0,m=0,b=0;
    cin>>n;
    for(i=0; i<n; i++)
    {
        cin>>a;
        if(a>b)
        {

            t++;
            if(t>=m)
                m=t;
        }
        else
        {
            t=0;
            t++;
        }
        b=a;
    }
    cout<<m;
}
