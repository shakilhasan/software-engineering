//https://codeforces.com/contest/1/problem/A
#include<iostream>

using namespace std;

int main()
{
    int n,m,a;
    long long row,col;


    cin>>n>>m>>a;

    row=n/a;
    col=m/a;

    if(n%a)
        row++;
    if(m%a)
        col++;

    cout<<row*col;

    return 0;
}
