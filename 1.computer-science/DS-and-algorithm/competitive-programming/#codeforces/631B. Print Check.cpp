//https://codeforces.com/contest/631/problem/B
#include<iostream>
using namespace std;
main()
{
    int n,m,k,v1,v2,a[5000],b[5000],c[100000]={0},i,j,p;

    cin>>n>>m>>k;
    for(i=0;i<k;i++)
    {
        cin>>p;
        if(p==1)
        {
            cin>>v1>>v2;
            a[v1-1]=i+1; c[i]=v2;
        }
        else
        {
            cin>>v1>>v2;
            b[v1-1]=i+1;  c[i]=v2;
        }
    }




    for(i=0; i<n; i++)
    {
        for(j=0; j<m; j++)
        {
            if(a[i]>b[j])
                cout<<c[a[i]-1]<<" ";
            else
                cout<<c[b[j]-1]<<" ";

        }
        cout<<endl;
    }

}
