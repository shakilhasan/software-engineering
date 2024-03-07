//https://codeforces.com/contest/144/problem/A
#include<iostream>
using namespace std;
main()
{
    int n,a[100],i,x=1,y=1,k;
    cin>>n;
    for(i=0; i<n; i++)
    {
        cin>>a[i];
    }
    k=a[0];
    for(i=0; i<n; i++)
    {
        if(k<a[i])
        {
            k=a[i];
            x=i+1;
        }
    }
    k=a[0];

    for(i=0; i<n; i++)
    {
        if(k>=a[i])
        {
            k=a[i];
            y=i+1;
        }
    }

    if(x==1&&y==n)
    {
        cout<<0;
    }
    else if(x<y)
    {
        cout<<(x-1)+(n-y);
    }
    else
    {
        cout<<(x-1)+(n-y-1);

    }


}
