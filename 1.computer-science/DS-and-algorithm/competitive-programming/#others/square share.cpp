#include<iostream>
using namespace std;
main()
{
int r,i,j,t=10,m=18;

for(i=0;i<5;i++)
{   for(j=0;j<m;j++)
    cout<<".";
    cout<<"*\n";cout<<m<<" "<<t;
m=m-t; t=t/2;

} m=0; t=1;
for(i=0;i<5;i++)
{   for(j=0;j<m;j++)
    cout<<".";
    cout<<"*\n";cout<<m<<" "<<t;
m=m+t; t=t*2;

}
}
