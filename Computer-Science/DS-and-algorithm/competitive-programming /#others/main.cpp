#include <iostream>
using namespace std;
class shape
{
public:
    void getheight(int h)
    {
        height = h;
    }
    void getwidth(int w)
    {
        width = w;
    }
protected:
    int height;
    int width;
};
class rectangle:public shape
{
public:
    int getArea()
    {
        return (width*height);
    }

};
int main()
{
    rectangle rect;
    rect.getheight(40);
    rect.getwidth(30);
    cout<<"Area = "<<rect.getArea()<<endl;
    return 0;
}
