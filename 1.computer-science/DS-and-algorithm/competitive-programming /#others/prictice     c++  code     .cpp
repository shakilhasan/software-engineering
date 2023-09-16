#include<iostream>
using namespace std;
main()
{
char a[100];
int i=0;
char k;
for(i=0;i<100;i++)
{  cin>>k;
a[i]=k;
   if(k=='0')
     { a[i]='\0';  break;  }
}
cout<<a;

}
