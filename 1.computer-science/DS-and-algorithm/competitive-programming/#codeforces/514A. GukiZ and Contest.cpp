//https://codeforces.com/contest/551/problem/A
#include<iostream>
#include<algorithm>
using namespace std;
main()
{
    int n,m,a[3000],b[3000],i,j;
    cin>>n;
    for(i=0;i<n;i++)
    {
        cin>>a[i];
        b[i]=a[i];
    }
    sort(a,a+n,std::greater<int>());
    for(i=0;i<n;i++)
    {  //cout<<a[i];
        for(j=0;j<n;j++)
        {

            if(b[i]==a[j])
            {
                cout<<j+1<<" ";
                break;
            }
        }
    }


}
