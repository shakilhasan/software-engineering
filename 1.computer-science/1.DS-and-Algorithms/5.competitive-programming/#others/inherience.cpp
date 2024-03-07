#include<iostream>
using namespace std;
class go
{
public:
    int a;
};
class goes :public go
{
public:
    int b;
};

main()
{
    goes y1,y2;
    go *x1,x2;
    x1 = &y1;
    cout<<y1.a;
}
