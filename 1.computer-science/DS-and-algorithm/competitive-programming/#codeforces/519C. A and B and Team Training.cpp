//https://codeforces.com/contest/519/problem/C
#include<iostream>
#include<bits/stdc++.h>
using namespace std;
main()
{
    int n,m,i=0;
    cin>>n>>m;
    while(1)
    {
        if(m==0||n==0||(m<2&&n<2))
            break;
        i++;
        if(n>=m)
        {
            n=n-2;
            m--;

        }
        else
        {
            m=m-2;
            n--;
        }


    }
    cout<<i;
}
