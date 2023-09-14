#include<bits/stdc++.h>
using namespace std;
main()
{
    int a[100][100],b[100],c[100],s,n,m,p,q,w,i,j,t=0,f=0;
    cout<<"n,m,s: ";
    cin>>n>>m>>s;
    for(i=0; i<n; i++)
    {
        b[i]=9999;
    }
    for(i=0; i<m; i++)
    {
        cin>>p>>q>>w;
        a[p][q]=w;
        a[q][p]=w;
    }
    c[0]=s;
    b[s]=0;
    for(i=0; i<=t; i++)
    {
        f=c[i];
        for(j=0; j<n; j++)
        {
            if(a[f][j]!=0 && (a[f][j]+b[f])<b[j])
            {
                b[j]=a[f][j]+b[f];
                c[++t]=j;
            }
        }
    }

    for(i=0; i<n; i++)
    {
        cout<<"\nnode("<<i<<"): "<<b[i];
    }
    /*input

    7 8 3
    0 5 3
    0 6 2
    1 4 1
    1 3 1
    2 5 1
    2 3 1
    3 6 2
    4 5 5

    */

}


