//https://codeforces.com/contest/339/problem/B
#include<iostream>
using namespace std;
main()
{
    unsigned long long int n,m,k=1,a=1,b,s=0;
    //unsigned long int s=0;
    cin>>n>>m;
    while(k<=m)
    {
        cin>>b;
        if(a<b)
            s=s+b-a;
        else if(a>b)
            s=s+n-(a-b);
        else
            s=s+0;
        a=b;
        k++;
    }
    cout<<s;
}
