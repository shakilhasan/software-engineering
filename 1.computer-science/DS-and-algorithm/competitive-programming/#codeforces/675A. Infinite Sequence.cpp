//https://codeforces.com/contest/675/problem/A
#include<iostream>
using namespace std;
main()
{
    int a,b,c;
    cin>>a>>b>>c;
    if(a==b&&c==0)
        cout<<"YES";
    else if(a!=b&&c==0)
    {
        cout<<"NO";
    }
    else if((b-a)%c==0&&b>=a&&c>0)
        cout<<"YES";
    else if((b-a)%c==0&&a>=b&&c<0)
        cout<<"YES";
    else
        cout<<"NO";
}
