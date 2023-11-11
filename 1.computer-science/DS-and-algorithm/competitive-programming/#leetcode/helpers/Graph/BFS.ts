class BFS {
    constructor(public adj: Array<number>[] = [], public size: number = 0) {
    }

    public bfs(startVert: number) {
        const visited: boolean[] = Array<boolean>(), level: number[] = Array<number>(),
            queue: number[] = new Array<number>()
        for (let i = 0; i < this.size; i++) {
            visited.push(false);
        }
        visited[startVert] = true;
        level[startVert] = 0;
        queue.push(startVert);
        while (queue.length > 0) {
            const v = queue.shift() ?? 0;
            for (const adjV of this.adj[v]) {
                if (!visited[adjV]) {
                    visited[adjV] = true;
                    queue.push(adjV);
                    level[adjV] = level[v] + 1;
                }
            }
        }
        return level;
    }
}

const adj: Array<number>[] = new Array<Array<number>>;
adj.push([1, 2, 3]);
adj.push([0, 2, 3]);
adj.push([0, 1,]);
adj.push([0, 1,]);

const bfs = new BFS(adj, 4);
console.log(bfs.bfs(0));

