//https://codeforces.com/contest/119/problem/A
#include<iostream>
using namespace std;
int gcd(int m,int n)
{ int i;
    for(i=m;i>0;i--)
    {
        if(m%i==0&&n%i==0)
        {  return i;  break;     }

    }

}

main()
{
    int a,b,n;
    cin>>a>>b>>n;
    while(n>=0)
    {  if(n==0)
        {  cout<<1;  break;  }
        n=n-gcd(n,a);
        if(n==0)
        {  cout<<0;;  break;  }
        n=n-gcd(n,b);
    }



}
