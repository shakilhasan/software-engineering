#include<iostream>
using namespace std;
class cube{ public: int a; int cu(){ cout<<"a:";cin>>a; return(a*a*a); };
};
class sqr:public cube{ public: int sq(){ cout<<"a:"; cin>>a; return(a*a*a);  }
};
class tri{ public: int w,h; int tr(){  cout<<"w,h:"; cin>>w>>h; return(.5*w*h);  };
};
class rect:public tri{ public:  int re(){ cout<<"w,h:"; cin>>w>>h; return(w*h);  } ;
};
class cir{ public: int r;  int ci(){  cout<<"r"; cin>>r;  return(3.1416*r*r); };
};
void fi(int a[]){   for(int i=0;i<6;i++){ a[i]=0; }
}
void fs(int a[]){ int s=0;  for(int i=0;i<6;i++){ s=s+a[i]; }
cout<<"\nsum of these volume is :"<<s<<"\n";
}
int main(){ int n=1,a[100];  fi(a);
cout<<"which u want to calculate \n 1 for cube \n 2 for sqr \n 3 for tri \n 4 for rect \n 5 for cir\n 0 for exit the proggram\n 6 TO SUM ALL VOLUME \n";
while(n>0){ cout<<"............................\nplease enter case NO:";  cin>>n;
switch(n){case 1: {cube x; a[1]=x.cu(); cout<<a[1]<<"\n"; } break;
          case 2: {sqr x1; a[2]=x1.sq(); cout<<a[2]<<"\n";  } break;
          case 3: {tri x2; a[3]=x2.tr();cout<<a[3]<<"\n"; } break;
          case 4: {rect x3; a[4]=x3.re(); cout<<a[4]<<"\n"; } break;
          case 5:  {cir x4; a[5]=x4.ci(); cout<<a[5]<<"\n";  }  break;
          case 6:  { fs(a); }
          default: break;
        } }  }
