//https://codeforces.com/contest/659/problem/A
#include <iostream>
using namespace std;
main()
{
    int a,b,n,r;
    cin>>n>>a>>b;
    r=(a+b)%n;
    if(r<0)
        cout<<n+r;
    else if(r>0)
        cout<<r;
    else
        cout<<n;
}
