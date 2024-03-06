//https://codeforces.com/contest/520/problem/A
#include<iostream>
#include<bits/stdc++.h>
using namespace std;
main()
{
    //cout<<int('a')<<int('A');
    char ch,st[1000];
    int n,i=0,p,l=0,a[1000];
    scanf("%d", &n);
    n=2;
    while(n--)
    {
        i=0;
        while((ch = getchar()) != '\n' && ch != EOF )
        {
            if(ch>90)
                p=ch-97;
            else
                p=ch-65;

            if(a[p]==0)
            {
                a[p]=1;
                l++;
            }
        }

    }
    if(l==26)
        cout<<"YES";
    else
        cout<<"NO";

}
