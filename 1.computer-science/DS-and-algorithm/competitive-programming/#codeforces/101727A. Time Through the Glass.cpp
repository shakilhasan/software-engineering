//https://codeforces.com/gym/101727/problem/A
#include<iostream>
#include<bits/stdc++.h>
using namespace std;
main()
{
    int h,m;
    cin>>h>>m;
    if(m==0)
        m=60;
    if(h==0)
        h=12;

    cout<<12-h<<" "<<60-m;
}
