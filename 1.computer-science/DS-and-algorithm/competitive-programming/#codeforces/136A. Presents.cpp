//https://codeforces.com/contest/136/problem/A
#include<iostream>
using namespace std;
main()
{
    int n,a[100];
    cin>>n;
    for(int i=1;i<=n;i++)
    { int p;
        cin>>p;
        a[p]=i;
    }
    for(int i=1;i<=n;i++)
    {
        cout<<a[i]<<" "<<endl;
    }

}
