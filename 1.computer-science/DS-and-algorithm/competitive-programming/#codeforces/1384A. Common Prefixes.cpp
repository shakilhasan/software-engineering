//https://codeforces.com/contest/1384/problem/A
#include<iostream>
#include<bits/stdc++.h>
using namespace std;
main()
{
    int t,n,a,b;
    char st[100]="abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz";
    cin>>t;
    while(t--)
    {
        cin>>n;
        cout<<""<<st<<endl;
        while(n--)
        {
            cin>>a;
            if (st[a]<'m')
                st[a]=st[a]+7;
            else
                st[a]=st[a]-7;
            cout<<st<<endl;
        }

    }
}
