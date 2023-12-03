//https://codeforces.com/contest/459/problem/A
#include<stdio.h>
main()
{
    int x1,x2,x3,x4,y1,y2,y3,y4;
    scanf("%d %d %d %d",&x1,&y1,&x2,&y2);

    if(y1==y2)
    {  x3=x1; y3=(x2-x1)+y1;  x4=x2; y4=y3;  printf("%d %d %d %d",x3,y3,x4,y4);  }

    else if(x1==x2)
    {  x3=(y2-y1)+x1;  y3=y1;  x4=x3;  y4=y2;    printf("%d %d %d %d",x3,y3,x4,y4);  }

    else if(y1!=y2 && x1!=x2 && x2-x1==y2-y1 || x2-x1==y1-y2 )

    {  x3=x1;  y3=y2;  x4=x2;  y4=y1;   printf("%d %d %d %d",x3,y3,x4,y4);  }


    else
    {   printf("-1");    }



}
