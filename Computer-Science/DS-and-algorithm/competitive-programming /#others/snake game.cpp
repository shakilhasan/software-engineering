#include<iostream>
#include<stdio.h>
using namespace std;
main()
{int i,r,k=0,j,p=0,t=0,lx,ly,e=0,l=0;
char a[4]; lx=9; ly=5;
cout<<"LEVEL 1\n----------\n";
while(1){
cin>>a;
r=(a[1]-48);
  if(a[0]=='r')
   { p=p+r-1;for(j=0;j<k;j++){cout<<" ";}
             for(i=0;i<r;i++){cout<<"*";} t++;
   }
   if(a[0]=='d')
    {for(i=0;i<r;i++)
       { for(j=0;j<k;j++) {cout<<" ";}
         if(i<r-1) {t++;cout<<"*\n";}
         else {cout<<"*"; t++;}
       }
    }
  if(a[0]=='b')
    {
    p=p-r+1;for(j=0;j<k-r+1;j++) {cout<<" ";}
    for(i=0;i<r;i++) {cout<<"*"; } t++;
    }
    k=p;printf("(%d,%d)(%d,%d)",k+1,t,lx,ly);

if(lx==k+1&&ly==t)
 { e++;
  printf("\a\ahi your point:%d",e);
 lx=2*k+t;ly=k+2*t;
 }
if(e==2)
{ char n[20]; cout<<"Please ENTER your NAME:"; cin>>n; l++;
  printf("\a\a\a\acongratulation md.%s U cross level %d\n----------------\nLEVEL %d\n-------------",n,l,l+1);
e=0;
}
 }
}
