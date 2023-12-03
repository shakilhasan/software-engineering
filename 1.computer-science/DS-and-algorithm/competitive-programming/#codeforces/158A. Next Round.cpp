//https://codeforces.com/contest/158/problem/A
#include<iostream>
using namespace std;
main()
{
    int n,k,i,c=0,a[1000],d;
    cin>>n>>k;
    for(i=0;i<n;i++)
    {
        cin>>a[i];
    }
    d=a[k-1];

    for(i=0;i<n;i++)
    {
        if(a[i]>=d&&a[i]>0)
            c++;
    }
    cout<<c;
}
