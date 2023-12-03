//https://codeforces.com/contest/710/problem/B
#include<bits/stdc++.h>
using namespace std;
main()
{
    long int n,x[300000],i;
    cin>>n;
    for(i=0; i<n; i++)
        cin>>x[i];
    sort(x,x+n);
    cout<<x[((n+1)/2)-1];
}
