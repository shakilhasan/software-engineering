//https://codeforces.com/contest/699/problem/C
#include<iostream>
#include<bits/stdc++.h>
using namespace std;
main()
{
    int n,i,a=0,c=0,x;
    cin>>n;
    for(i=0; i<n; i++)
    {
        cin>>x;
        if(x==3&&a!=0)
        {
            if(a==1)
                a=2;
            else
                a=1;
        }
        else if((x==1&&a==1)||(x==2&&a==2)||x==0)
        { c++; a=0; }
        else if(x==3&&a==0)
        {   }
        else
            a=x;
    }
    cout<<c;
}
