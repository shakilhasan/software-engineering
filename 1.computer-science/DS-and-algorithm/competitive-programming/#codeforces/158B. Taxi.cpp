//https://codeforces.com/contest/158/problem/B
#include<iostream>
using namespace std;
main()
{
    unsigned long int num,n,a=0,b=0,c=0,d=0,r=0,k,p,i;
    bool x;
    cin>>n;
    for(i=0; i<n; i++)
    {
        cin>>num;
        if(num==1)
            a++;
        else if(num==2)
            b++;
        else if(num==3)
            c++;
        else
            d++;
    }
    d=d+b/2;

    b=b%2;  //cout<<b<<" ";
    if(a>c)
    {  x=(2*b+a-c)%4; //cout<<x<<d<<a-c<<b;
        cout<<d+c+((2*b)+a-c)/4+x;
    }
    else
    {
        cout<<b+c+d;
    }
}
