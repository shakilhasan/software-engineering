//https://codeforces.com/contest/703/problem/B
#include<iostream>
using namespace std;
main()
{
    long long int n,k,c[100009],s=0,t=0,i,j,p,r=0,d=-2,z=0;
    cin>>n>>k;
    for(i=0; i<n; i++)
    {
        cin>>c[i];
        s=s+(t*c[i]);
        t=c[i];
        r=r+t;
    }
    s=s+c[0]*c[n-1];
    for(i=0; i<k; i++)
    {
        cin>>p;
        r=r-c[p-1];
        if(p>1&&p<n)
        {
            if(p!=d+1)
                s=s-c[p-1]*c[p-2];
            s=s+c[p-1]*(r-c[p]);
        }
        else if(p==1)
        {  z=1;
            s=s+c[p-1]*(r-c[p]-c[n-1]);
        }
        else if(p==n)
        {  if(z==0)
                s=s-c[p-1]*c[0];
            if(p!=d+1)
                s=s-c[p-1]*c[p-2];
            s=s+c[p-1]*r;
        }
        d=p;
    }
    cout<<s;
}
