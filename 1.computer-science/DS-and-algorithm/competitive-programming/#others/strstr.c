#include<stdio.h>
#include<string.h>
main()
{
char *mainstring,*substring,*pos;
//int n;
printf("m=");

scanf("%s",mainstring );//gets(mainstring);
printf("s=");
scanf("%s",substring);//gets(substring);
pos=strstr(mainstring,substring);

if(pos)
    printf("%d",pos);
else
    printf("ffffffffffff");


}
