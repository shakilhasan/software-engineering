//https://codeforces.com/contest/719/problem/A
#include<bits/stdc++.h>
#include<iostream>
using namespace std;
main()
{
    int n,i,a[1000];
    cin>>n;
    for(i=0; i<n; i++)
    {
        cin>>a[i];
    }
    if(a[n-1]==0)
        cout<<"UP";
    else if(a[n-1]==15)
        cout<<"DOWN";
    else if(n==1)
        cout<<"-1";
    else if(a[n-1]<a[n-2])
    {
        cout<<"DOWN";
    }
    else if(a[n-1]>a[n-2])
        cout<<"UP";


}
