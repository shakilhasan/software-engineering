//https://codeforces.com/contest/379/problem/A
#include<iostream>
using namespace std;
main()
{
    int m,n,i,c;
    cin>>n>>m;
    c=m;
    for(i=n;i<10000;i++)
    {
        if(c>i)
            break;
        c=c+m;

    }

    cout<<i;


}
