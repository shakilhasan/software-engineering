//https://codeforces.com/contest/330/problem/B
#include<iostream>
using namespace std;
main()
{
    int a[1000]={0},i,n,m,s,p,q;
    cin>>n>>m;
    for(i=0;i<m;i++)
    {
        cin>>p>>q;
        a[p]=1;
        a[q]=1;
    }
    for(i=1;i<=n;i++)
    {
        if(a[i]==0)
        {
            s=i;
            break;
        }
    }
    cout<<n-1<<endl;
    for(i=1;i<=n;i++)
    {
        if(i!=s)
            cout<<s<<" "<<i<<endl;
    }


}
