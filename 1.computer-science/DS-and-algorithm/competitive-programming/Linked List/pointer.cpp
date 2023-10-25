#include<iostream>
using namespace std;
class cls
{
 int data;
 //class *p;
};

main()
{

    cls *ob=new cls();


cout<<"........................................\n";
    int *a,b;
    a=&b;
    b=10;
    cout<<"*a: "<<*a<<"\n&a: "<<&a<<"\na: "<<a;
    cout<<"\n\n&b: "<<&b<<"\nb: "<<b;

    int **p,*q,*r,v;
    p=&q;
    q=&v;
    r=q;
    v=20;
    cout<<"\n\n\n\n**p: "<<**p<<"\n*p: "<<*p<<"\n&p: "<<&p<<"\np: "<<p;
    cout<<"\n\n*q: "<<*q<<"\n&q: "<<&q<<"\nq: "<<q;
    cout<<"\n\n*r: "<<*r<<"\n&r: "<<&r<<"\nq: "<<r;
    cout<<"\n\n&v: "<<&v<<"\nv: "<<v;


}
