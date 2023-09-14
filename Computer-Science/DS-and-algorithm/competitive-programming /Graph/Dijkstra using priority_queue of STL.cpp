#include<bits/stdc++.h>
#include<vector>
using namespace std;
#define INF 0x3f3f3f3f
typedef pair<int,int>ipair;
void addEdge(vector<pair<int,int> >data[],int u,int v,int w)
{
    data[u].push_back(make_pair(v,w));
    data[v].push_back(make_pair(u,w));
}
void dijkstra(vector<pair<int,int> >data[],int v,int s)
{
    priority_queue<ipair,vector<ipair>,greater<ipair> >pq;
    vector<int>dist(v,INF);
    pq.push(make_pair(0,s));
    dist[s]=0;
    while(!pq.empty())
    {
        int u=pq.top().second;
        pq.pop();
        for(int i=0; i<data[u].size(); i++)
        {

            int v=data[u][i].first;
            int w=data[u][i].second;
            cout<<v<<',';
            if(dist[v]>dist[u]+w)
            {
                dist[v]=dist[u]+w;
                pq.push(make_pair(dist[v],v));
            }
        }

    }
    cout<<endl<<endl;
    for(int i=0; i<9; i++)
    {
        cout<<i<<"::"<<dist[i]<<endl;
    }



}
main()
{
    vector<ipair>adj[9];
    addEdge(adj, 0, 1, 4);
    addEdge(adj, 0, 7, 8);
    addEdge(adj, 1, 2, 8);
    addEdge(adj, 1, 7, 11);
    addEdge(adj, 2, 3, 7);
    addEdge(adj, 2, 8, 2);
    addEdge(adj, 2, 5, 4);
    addEdge(adj, 3, 4, 9);
    addEdge(adj, 3, 5, 14);
    addEdge(adj, 4, 5, 10);
    addEdge(adj, 5, 6, 2);
    addEdge(adj, 6, 7, 1);
    addEdge(adj, 6, 8, 6);
    addEdge(adj, 7, 8, 7);
    dijkstra(adj,9,0);
}
