//https://codeforces.com/contest/659/problem/C
#include<iostream>
#include<bits/stdc++.h>
using namespace std;
main()
{
    long long int n,m,s=0,t=0,j=0,a[100009]={0},c[100009],i;
    cin>>n>>m;
    for(i=0;i<n;i++)
    {
        cin>>a[i];
    }
    sort(a,a+n);
    i=0;
    while(s<=m)
    {i++;
        if(i!=a[t])
        {
            s=s+i;
            if(s<=m)
            { c[j]=i; j++; }
        }
        else if(i==a[t])
            t++;
    }

    cout<<j<<endl;
    for(i=0;i<j;i++)
        cout<<c[i]<<" ";
}
