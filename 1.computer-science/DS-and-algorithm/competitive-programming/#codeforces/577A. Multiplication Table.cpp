//https://codeforces.com/contest/577/problem/A
#include<iostream>
using namespace std;
main()
{
    unsigned long long int n,x,i,m,c=0;
    cin>>n>>x;
    for(i=1; i<=n; i++)
    {
        m=n*i;
        if(x%i==0 && x<=m  )
            c++;
    }
    cout<<c;
}
