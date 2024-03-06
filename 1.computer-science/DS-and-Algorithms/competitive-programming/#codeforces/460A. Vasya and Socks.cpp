//https://codeforces.com/contest/460/problem/A
#include<iostream>
using namespace std;
main()
{
    int n,m,i,t=0,c,p;
    cin>>n>>m;
    p=n;
    while(1)
    {

        c=n/m;
        n=c+(n%m);
        t=t+c;
        if(c==0)
            break;
    }
    cout<<p+t;

}
