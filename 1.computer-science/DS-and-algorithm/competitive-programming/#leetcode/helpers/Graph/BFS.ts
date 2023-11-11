// This is a basic representation of a graph
class BFSGraph
{
    constructor(public adj: Array<number>[]=[], public size: number=0) {
    }
}
class BFS
{
    public bfs(G: BFSGraph, startVert: number)
    {
        const visited: boolean[] = Array<boolean>();
        // Pre-populate array:
        for(let i = 0; i < G.size; i++)
        {
            visited.push(false);
        }

        // Use an array as our queue representation:
        const q: number[] = new Array<number>();

        visited[startVert] = true;

        q.push(startVert);

        while(q.length > 0)
        {
            const v = q.shift();
            for(const adjV of G.adj[v])
            {
                if(!visited[adjV])
                {
                    visited[adjV] = true;
                    q.push(adjV);
                }
            }
        }
    }
}
