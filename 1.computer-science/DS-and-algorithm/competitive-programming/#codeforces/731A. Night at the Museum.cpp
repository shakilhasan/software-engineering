//https://codeforces.com/contest/731/problem/A
#include<iostream>
#include<bits/stdc++.h>
using namespace std;
main()
{
    string a[100],str;
    char ch,b='a';
    int i=0,p=0;
    while((ch = getchar()) != '\n' && ch != EOF )
    {
        p=p+min(abs(b-ch),(26-abs(b-ch)));
        //cout<<" "<<p<<" ";
        b=ch;
    }
    cout<<p;
}
