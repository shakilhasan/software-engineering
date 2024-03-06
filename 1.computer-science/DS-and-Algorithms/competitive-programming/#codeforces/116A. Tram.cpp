//https://codeforces.com/contest/116/problem/A
#include<iostream>
using namespace std;
main()
{
    int n,a,b,c=0,d=0,i;
    cin>>n;
    for(i=0;i<n;i++)
    {
        cin>>a>>b;
        c=c+b-a;
        if(c>d)
            d=c;
    }
    cout<<d;
}
