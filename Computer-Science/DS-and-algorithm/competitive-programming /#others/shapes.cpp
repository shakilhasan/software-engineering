#include<iostream>
#define MAX 5
using namespace std;
class shape
{
public:
    virtual double getarea(void);
    virtual double getvolume(void);
};
double shape::getarea(void)
{
    return 0;
}


class triangle : public shape
{
    int b,h;
public:
    double getarea(void);
    friend istream& operator>>(istream& in,triangle &a);
};

double triangle :: getarea(void)
{
    return 0.5*b*h;
}



double shape::getvolume(void)
{
    return 0;
}

istream& operator>>(istream& in,triangle &a)
{
    cout << "Triangle"<< endl;
    cout << "base:";
    in >> a.b;

    cout << "height:";
    in >> a.h;

    return in;

}


class cube: public shape
{
    int h,w,d;
public:
    double getarea(void);
    double getvolume(void);
    friend istream& operator>>(istream& in,cube &a);
};


double cube ::getarea(void)
{
    return (h*w+w*d+d*h)*2.0;
}

double cube::getvolume(void)
{
    return h*w*d*1.0;
}

istream& operator>>(istream& in,cube &a)
{
    cout << "cube"<< endl;

    cout << "hight:";
    in >> a.h;

    cout << "width:";
    in >> a.w;

    cout << "depth:";
    in >> a.d;

    return in;

}

main()
{
    int n,i,choice;
    double area,volume;

    shape * allShape[MAX];
    triangle *p;
    cube *c;

    cout << "How many shape?";
    cin >>n;
    for(i=0; i<n; i++)
    {
        cout << endl;
        cout << "Shape "<< (i+1) << ":"<< endl;
        cout <<"Shape type (1. Triangle 2. Cube) :";
        cin >> choice;

        switch(choice)
        {
        case 1:
            p = new triangle;
            cin >> p;
            allShape[i] =p;
            break;
        case 2:
            c = new cube;
            cin >> c;
            allShape[i] = c;
            break;
        default:
            cout <<"Invalid choice "<< endl;
            i--;
            break;
        }
    }

    cout << endl << endl;
    cout << "Results" << endl;
    cout << "==========" << endl;

    area = 0;
    for(i=0; i<n; i++)
        area += allShape[i]->getarea();

    cout <<"Area of all the shape :" << area << endl;

    volume= 0;
    for(i=0; i<n; i++)
        volume += allShape[i]->getvolume();

    cout <<"Volume of all the 3D shape :" << volume << endl;

    cout << endl;
    return 0;
}


