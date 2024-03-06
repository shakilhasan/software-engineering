//https://codeforces.com/contest/489/problem/C
#include<iostream>
using namespace std;

main()
{
    int m,s,a[1000],i,k=-1,b[1000];
    cin>>m>>s;
    if((m>1&&s==0||s>(m*9)||m==0))
    {
        cout<<-1<<" "<<-1;
        return 0;
    }
    for(i=0;i<m;i++)
    {
        if(s>9)
        {

            a[i]=9;
            s=s-9;
        }
        else
        {

            a[i]=s;
            if(s==0&&k<0)
                k=i-1;
            s=0;
        }
        b[i]=a[i];
//cout<<i;
    }
//cout<<" ";
//cout<<i;
    if(k>=0)
    {  a[m-1]=1; a[k]=a[k]-1;   }
    for(i=m-1;i>=0;i--)
    {
        cout<<a[i];
    }
    cout<<" ";
    for(i=0;i<m;i++)
        cout<<b[i];

}
