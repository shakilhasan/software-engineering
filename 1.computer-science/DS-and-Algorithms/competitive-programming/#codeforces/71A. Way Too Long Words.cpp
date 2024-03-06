//https://codeforces.com/contest/71/problem/A
#include<iostream>
#include<bits/stdc++.h>
using namespace std;
int main()
{
    char ch,st[1000];
    int n,i=0;
    //cin>>n;
    n=4;
    scanf("%d", &n);
    n++;
    while(n--)
    {  i=0;
        while((ch = getchar()) != '\n' && ch != EOF )
        {
            st[i]=ch;
            i++;
        }
        st[i]='\0';

        if(i>10)
            cout<<"\n"<<st[0]<<i-2<<st[i-1]<<"";
        else
            cout<<"\n"<<st<<"";

    }
    return 0;
}
