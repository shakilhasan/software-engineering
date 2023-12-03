//https://codeforces.com/contest/701/problem/B
#include<iostream>
using namespace std;
main()
{
    long long int k,n,m,i,x,y,s=0;
    long int a[100002]={0},b[100002]={0},p=0,q=0,r=0;
    cin>>n>>m;
    k=(2*n)-1;
    for(i=0; i<m; i++)
    {
        cin>>x>>y;
        if(a[x]>0 && b[y]>0)
        {
        }
        else if(a[x]>0)
        {
            s=s+k-n+r+p+1;
            k--;
            if(x==27)
                a[x]++;
            p++;
            b[y]=1;
        }
        else if(b[y]>0)
        {
            s=s+k-n+r+q+1;
            k--;
            b[y]++;
            a[x]=1;
            q++;
        }
        else
        {
            a[x]=1;
            b[y]=1;
            s=s+k;
            k=k-2;
            r++;
        }
        cout<<n*n-s<<" ";
    }
}
 
