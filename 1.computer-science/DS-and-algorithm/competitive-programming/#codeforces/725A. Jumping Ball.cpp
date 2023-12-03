//https://codeforces.com/contest/725/problem/A
#include<bits/stdc++.h>
#include<iostream>
#include<string.h>
using namespace std;
main()
{
    int i=0,p=0,q=0,c=0,n;
    string s;
    cin>>n>>s;
    while(1)
    {
        if(s[i]=='<'&&p==0)
            c++;
        else
            p=1;
        if(s[n-i-1]=='>'&&q==0)
            c++;
        else
            q=1;
        if(p==1&&q==1)
            break;
        i++;
    }
    cout<<c;
}
