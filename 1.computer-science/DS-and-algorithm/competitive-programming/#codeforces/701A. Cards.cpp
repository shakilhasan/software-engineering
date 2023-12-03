//https://codeforces.com/contest/701/problem/A
#include<iostream>
using namespace std;
main()
{
    int n,a[100],b[100],c[100],x[100],i,j,k,t=0;
    cin>>n;
    for(i=0; i<n; i++)
    {cin>>a[i];  x[i]=a[i];}

    for(i=0; i<n/2; i++)
    {
        k=a[0];
        for(j=0; j<n;j++)
        {
            if(k<=a[j])
            {
                k=a[j];
                t=j;
            }
        }
        b[i]=t+1;
        a[t]=0;

    }
    for(i=0; i<n/2; i++)
    {
        k=x[n-1];
        for(j=n-1; j>=0;j--)
        {
            if(k>=x[j])
            {
                k=x[j];
                t=j;
            }
        }
        c[i]=t+1;
        x[t]=101;

    }

    for(i=0;i<n/2;i++)
        cout<<c[i]<<" "<<b[i]<<endl;

}
