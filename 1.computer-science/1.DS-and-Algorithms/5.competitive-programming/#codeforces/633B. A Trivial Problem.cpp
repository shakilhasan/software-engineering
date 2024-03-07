//https://codeforces.com/contest/633/problem/B
#include<iostream>
using namespace std;
int cf(int a)
{
    int p=25,t=0;
    for(int i=0;i>=0;)
    {
        if(a/p==0 || a%p!=0)
        {break; }
        t=t+1;
        p=p*5;

    }
    return t;
}

main()
{
    int m,i,k=0,b;
    cin>>m;
    for(i=5;i>0;)
    {
        k++;
        if(i%25==0)
            k=k+cf(i);
        if(m==k)
        {
            cout<<5<<endl<<i<<" "<<i+1<<" "<<i+2<<" "<<i+3<<" "<<i+4;
            break;
        }
        else if(k>m)
        { cout<<0;  break; }
        i=i+5;

    }



}
