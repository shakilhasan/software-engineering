#include<iostream>
using namespace std;
int cuet(int m,int n)
{
  cout<<"1"<<m<<n<<endl;
  return m+n;
}

float cuet(int m,float n)
{
  cout<<"2"<<m<<n<<endl;
  return m+n;
}
float cuet(double m,int n)
{
  cout<<"3"<<m<<n<<endl;
  return m+n;
}
main()
{

cout<<cuet(1,9)<<endl;
cout<<cuet(1,9.099)<<endl;
cout<<cuet(1.55555555,9.88888888)<<endl;
}
