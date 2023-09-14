#include<iostream>
#include<stdio.h>
using namespace std;
int i,j,lx=5,ly=5,e=0;
class aim{
public: static int p,t; void right(int r); void dow(int r); void bac(int r); void point();
};  int aim::p=0; int aim::t=0;
main()
{ aim f; int r,l=0;  char a[4];  cout<<"LEVEL 1\n----------\n";
while(1){ cin>>a;
r=(a[1]-48);
if(a[0]=='r')  f.right(r);
if(a[0]=='d')  f.dow(r);
if(a[0]=='b')  f.bac(r);
printf("(%d,%d)(%d,%d)",f.p+1,f.t,lx,ly);
if(lx==f.p+1&&ly==f.t)
  f.point();}
  }
void aim::right(int r){ for(j=0;j<p;j++){cout<<" ";}   for(i=0;i<r;i++){cout<<"*";} t++; p=p+r-1;}
void aim::bac(int r){  for(j=0;j<p-r+1;j++) {cout<<" ";}  for(i=0;i<r;i++) {cout<<"*"; } t++; p=p-r+1; }
void aim::dow(int r){  for(i=0;i<r;i++)
                       { for(j=0;j<p;j++) {cout<<" ";}  if(i<r-1) {t++;cout<<"*\n";}  else {cout<<"*"; t++;}  }}
void aim::point(){ e++;  printf("\a\a               hi you earn point:%d",e);  lx=p+t;ly=2*t;  }
