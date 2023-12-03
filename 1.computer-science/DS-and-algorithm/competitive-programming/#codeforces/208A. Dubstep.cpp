//https://codeforces.com/contest/208/problem/A
#include<iostream>
#include<stdio.h>
#include<string.h>
using namespace std;
main()
{  int i,t=0,l;
    char a[1000],b[1000];
    cin>>a;
    l=strlen(a);
    for(i=0;i<l;i++)
    {
        if(a[i]=='W')
        {
            if(a[i+1]=='U')
            {
                if(a[i+2]=='B')
                {  i=i+2;   b[t]=' ';  t++;  }
                else
                {  b[t]='W';  b[t+1]='U'; t=t+2;  i++; }
            }
            else
            {  b[t]='W';   t++;  }
        }
        else
        { b[t]=a[i]; t++; }
    }
    b[t]='\0';

    cout<<b;
}
