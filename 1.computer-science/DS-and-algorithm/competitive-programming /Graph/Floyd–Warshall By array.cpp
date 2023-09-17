#include<bits/stdc++.h>
using namespace std;
main()
{
    int n,m,a[1000][1000],u,v,w,i,j,k;
    cin>>n>>m;
    for(i=0; i<=n; i++)
        for(j=0; j<=n; j++)
            if(i!=j)
                a[i][j]=999999999;
    for(i=0; i<m; i++)
    {
        cin>>u>>v>>w;
        a[u][v]=w;
    }
    for(k=1; k<=n; k++)
        for(i=1; i<=n; i++)
            for(j=1; j<=n; j++)
                if(a[i][j]>a[i][k]+a[k][j])
                    a[i][j]=a[i][k]+a[k][j];
    cout<<endl<<endl;
    for(i=1; i<=n; i++)
    {
        for(j=1; j<=n; j++)
            if(a[i][j]>99999999)
                cout<<"i ";
            else
                cout<<a[i][j]<<" ";
        cout<<endl;
    }
}


/*input


4 6
1 2 3
2 1 2
2 3 2
3 2 5
4 1 20
4 3 8


  */
