//https://codeforces.com/contest/271/problem/A
#include<iostream>
using namespace std;
main()
{
    int n,a,b,c,p,i;
    cin>>n;
    i=n+1;
    while(1)
    {
        p=i;
        a=p%10;  p=p/10;
        b=p%10;  p=p/10;
        c=p%10;  p=p/10;
        if(a!=b&&a!=c&&a!=p&&b!=c&&b!=p&&c!=p)
        { cout<<i;  break;     }
        i++;
    }

}
