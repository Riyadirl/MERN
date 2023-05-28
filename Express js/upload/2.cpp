#include <bits/stdc++.h>
using namespace std;

void make_set(int p[], int x)
{
    p[x] = x;
    cout << "making a one-element set of " << x << endl;
}

int find_set(int p[], int x)
{
    if (x != p[x])
        return find_set(p, p[x]);
    return p[x];
}

void _union(int p[], int x, int y)
{
    int a = find_set(p, x);
    int b = find_set(p, y);
    p[a] = b;
    cout << "union " << a << " and " << b << endl;
}

struct Edge
{
    int u, v;
};

void connected_components(int p[], int V, vector<Edge> edges)
{
    bool *visited = new bool[V];
    for (int v = 0; v < V; v++)
        visited[v] = false;

    for (int v = 0; v < V; v++)
    {
        if (visited[v] == false)
        {

            DFSUtil(v, visited);

            cout << "\n";
        }
    }
}

bool same_component(int p[], int u, int v)
{
    int rootu = find_set(p, u);
    int rootv = find_set(p, v);
    return rootu == rootv;
}

int main()
{
    /// This code is for an undirected graph

    int V, E;
    cin >> V >> E;

    /// take the E edges as input from the user
    vector<Edge>
        edges;
    for (int i = 0; i < E; i++)
    {
        int u, v;
        cin >> u >> v;
        edges.push_back({u, v});
    }

    /// create the parent array for a disjoint set of V elements
    int p[V];

    /// call the function connected_components
    connected_components(p, V, edges);

    while (1)
    {
        /// take an integer "option" as input.
        int option;

        /// if "option" is 1, take another integer x as input,
        /// check if x is an element of the disjoint set or not, and
        /// if it is then print the root/representative-element of x
        if (option == 1)
        {
            if (option == 1)
            {

                int x;
                cin >> x;
                if (x >= 0 && x < V)
                {

                    cout << "root of " << x << find_set(p, x) << endl;
                }
                else
                {
                    cout << x << " is not a right vertex" << endl;
                }
            }
        }

        /// if "option" is 2, take integers x and y as input,
        /// check if x and y are elements of the disjoint set or not, and
        /// if they are, print whether they belong to the
        /// same connected component or not
        else if (option == 2)
        {
            int x, y;
            cin >> x >> y;
            if (x >= 0 && x < V && y >= 0 && y < V)
            {

                if (same_component(p, x, y))
                {
                    cout << x << " and " << y << " are  same connected component" << endl;
                }
                else
                {
                    cout << x << " and " << y << " are different components" << endl;
                }
            }
            else
            {
                cout << "not valid" << endl;
            }
        }
    }

    /// if "option" is 3, take integers x and y as input,
    /// check if x and y are elements of the disjoint set or not, and
    /// if they are, print if there is a path from x to y or not.
    else if (option == 3)
    {
        int x, y;
        cin >> x >> y;
        if (x >= 0 && x < V && y >= 0 && y < V)
        {

            if (same_component(p, x, y))
            {
                cout << "There is a path from " << x << " to " << y << endl;
            }
            else
            {
                cout << "There is no path from " << x << " to " << y << endl;
            }
        }
        else
        {
            cout << "not valid" << endl;
        }
    }
}

/// if "option" is 4, print all the roots of this disjoint set
else if (option == 4)
{
    for (int i = 0; i < V; i++)
    {

        cout << find_set(p, i) << " ";
    }
    cout << endl;
}

/// if "option" is 5, print the vertices of each connected components
/// in each line
else if (option == 5)
{
    for (int i =
             0;
         i < V; i++)
    {

        int root = find_set(p, i);
        components[root].push_back(i);
    }

    for (auto it = components.begin(); it != components.end(); it++)
    {
        for (int i =
                 0;
             i < it->second.size(); i++)
        {

            cout << it->second[i] << " ";
        }
        cout << endl;
    }
}
else
{
    return 0;
}
