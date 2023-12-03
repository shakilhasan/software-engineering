//https://codeforces.com/contest/545/problem/D
#include<iostream>
#include<bits/stdc++.h>
using namespace std;
main()
{
    long long int a[100009],n,c=0,i,k=0;
    cin>>n;
    for(i=0; i<n; i++)
        cin>>a[i];
    sort(a,a+n);
    c=a[0];
    for(i=0; i<n-1; i++)
        if(a[i+1]<c)
            k++;
        else
            c=c+a[i+1];
    cout<<n-k;
}
