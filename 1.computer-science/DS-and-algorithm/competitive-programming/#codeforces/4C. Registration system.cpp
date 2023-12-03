//https://codeforces.com/contest/4/problem/C
#include<iostream>
#include<bits/stdc++.h>
#include<string.h>
using namespace std;
class word
{
public:
    word *link[27];
    int t;
    word()
    {
        for(int i=0; i<27; i++)
            link[i]=NULL;
        t=0;
    }
}*a;

void fin(char *ch,int l)
{
    word *p=a;
    for(int i=0; i<l; i++)
    {
        int s=ch[i]-'a';
        if(p->link[s]==NULL)
        {
            p->link[s]=new word;
        }
        p=p->link[s];
    }
    if(p->t==0)
        cout<<"OK\n";
    else
        cout<<ch<<p->t<<"\n";
    p->t++;
}
main()
{
    char ch[33];
    int i,n;
    a=new word;
    cin>>n;
    for(i=0; i<n; i++)
    {
        cin>>ch;
        fin(ch,strlen(ch));
    }
}
