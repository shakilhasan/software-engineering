//https://codeforces.com/contest/515/problem/C
#include<iostream>
#include<stdio.h>
#include<string.h>
#include<bits/stdc++.h>
using namespace std;
main()
{
    int a[200],i=0,n,k;
    char ch[200];
    cin>>n>>ch;
    k=n;
    for(i=0; i<n; i++)
    {
        a[i]=ch[i]-48;
        if(a[i]==4)
        {
            a[i]=3;
            a[k++]=2;
            a[k++]=2;
        }
        else if(a[i]==6)
        {
            a[i]=5;
            a[k++]=3;
        }
        else if(a[i]==8)
        {
            a[i]=7;
            a[k++]=2;
            a[k++]=2;
            a[k++]=2;
        }
        else if(a[i]==9)
        {
            a[i]=7;
            a[k++]=3;
            a[k++]=3;
            a[k++]=2;
        }


    }
    sort(a,a+k);
    for(i=k-1; i>=0; i--)
    {
        if(a[i]>1)
            cout<<a[i];
    }
}
