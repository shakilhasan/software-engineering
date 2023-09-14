#include<bits/stdc++.h>
using namespace std;
main()
{
    int n,m,a[1000][1000],u,v,w,i,j,k,next[1000][1000],p[1000],t=0,flag=0;
    cin>>n>>m;
    for(i=0; i<=n; i++)
        for(j=0; j<=n; j++)
            if(i!=j)
                a[i][j]=999999999;
            else
                next[i][i]=i;
    for(i=0; i<m; i++)
    {
        cin>>u>>v>>w;
        a[u][v]=w;
        next[u][v]=v;
    }
    for(k=1; k<=n; k++)
        for(i=1; i<=n; i++)
            for(j=1; j<=n; j++)
                if(a[i][j]>a[i][k]+a[k][j])
                {
                    a[i][j]=a[i][k]+a[k][j];
                    next[i][j]=next[i][k];
                }
    for(i=1; i<=n; i++)
    {
        for(j=1; j<=n; j++)
            if(a[i][j]>=999999999)
                cout<<"i ";
            else
                cout<<a[i][j]<<" ";
        cout<<endl;
    }
    cout<<endl;
    i=1,j=n;
    p[t++]=1;
    while(i!=j)
    {
        i=next[i][j];
        p[t++]=i;
        if(i==0)
        {
            flag=1;
            cout<<-1<<endl;
            break;
        }
    }
    if(flag==0)
        for(i=0; i<t; i++)
            cout<<p[i]<<" ";
}

/*input

5 6
1 2 2
2 5 5
2 3 4
1 4 1
4 3 3
3 5 1
...............

4 6
1 2 3
2 1 2
2 3 2
3 2 5
4 1 20
4 3 8


  */
