#include<bits/stdc++.h>
using namespace std;
class cls
{
public:
    int data;
    cls *head;
    cls *tail;
};
cls *head=NULL;
cls *tail=NULL;
void push(int data)
{
    cls *node=new cls();
    node->data=data;
    node->head=head;
    if(head!=NULL)
    {
        head->tail=node;
    }
    head=node;
}
void print()
{
    cls* ptr=head;
    while(ptr!=NULL)
    {
        cout<<ptr->data<<endl;
        ptr=ptr->head;
    }
}
main()
{
    for(int i=0; i<5; i++)
    {
        push(i);
    }

    print();


}
