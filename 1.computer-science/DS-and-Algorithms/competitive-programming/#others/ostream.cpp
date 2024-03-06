#include<iostream>
using namespace std;
class A{
public:
int a;
friend void operator << (ostream &k,A x);

};
void operator << (ostream &k,A x)
{
 k<<"hi shakil hasan"<<x.a;

}

main()
{
A x;
x.a=89;
cout<<x;
}
