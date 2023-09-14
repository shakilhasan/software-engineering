#include<iostream>
using namespace std;
main()
{
char a[50],c;
int i=0;
int peek();
while(!cin.eof())
 { cin.peek();
     while(((c=cin.get())!='\n')&&(c!=17))
      {
        a[i++]=c;
      }
     if(c=17)
        break;
     a[i++]='\n';
 }
a[i]=NULL;
cout<<a;
}

