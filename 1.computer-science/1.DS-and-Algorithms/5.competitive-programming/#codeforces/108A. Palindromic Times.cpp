//https://codeforces.com/contest/108/problem/A
#include<iostream>
#include<bits/stdc++.h>
using namespace std;
main()
{
    char ch;
    int h,hi,m,n=25,f,s,mi;
    cin>>h>>ch>>m;
    hi=h;
    while(n--)
    {
        if(h>23)
            h=0;
        f=h/10;
        s=h%10;
        mi=s*10+f;
        if(mi<60 && ( h<hi ||h>hi || (h==hi && mi>m))  )
        {
            break;
        }
        h++;
    }

    if(mi<10 && h<10)
        cout<<0<<h<<":0"<<mi;
    else if(mi<10 && h>=10)
        cout<<h<<":0"<<mi;
    else if(mi>=10 && h<10)
        cout<<0<<h<<":"<<mi;
    else
        cout<<h<<":"<<mi;

}
