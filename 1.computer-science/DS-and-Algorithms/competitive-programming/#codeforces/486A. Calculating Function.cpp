//https://codeforces.com/contest/486/problem/A
#include<iostream>
using namespace std;
main()
{
    long long int n;
    cin>>n;
    if(n%2==0)
        cout<<n/2;
    else
        cout<<-n/2-1;
}
