//https://codeforces.com/contest/337/problem/A
#include<iostream>
using namespace std;
main()
{ int m,n,i,j,a[50],t=0,k,r,c,b[50];
    cin>>n>>m;
    for(i=0;i<m;i++)
    { cin>>a[i]; }
    for(i=0;i<m;i++)
    {   k=a[i];
        for(j=i;j<m;j++)
        {
            if(k>=a[j])
            { k=a[j]; r=j; }
        }
        c=a[i];  a[i]=k;  a[r]=c; //cout<<a[i]<<" ";
        if(i>=n-1)
        { b[t]=a[i]-a[i-n+1];  t++; }
    }
    k=b[0];
    for(i=0;i<t;i++)
    { //cout<<t<<" ";
        if(k>=b[i])
            k=b[i];
    }
    cout<<k;
}
