Greedy Algorithm - an algorithm that follows problem solving heuristic of making optimal choices at each stage. Hopefully finds the global optimum. An example would be Kruskal's algorithm.

Divide and Conquer - works by recursively breaking down a problem into two or more sub problems until the problems become simple enough to be solved directly. An example would be mergesort.

Recursive Algorithms - solve a problem by solving smaller internal instances of a problem -- work towards a base case.

Dynamic Programming - Break down a problem into smaller and smaller subproblems. At their lowest levels, the subproblems are solved and their answers stored in memory. These saved answers are used again with other larger (sub)problems which may call for a recomputation of the same information for their own answer. Reusing the stored answers allows for optimization by combining the answers of previously solved subproblems.

Selection Sort - Non-stable, in place sort. Has an N-squared order of growth, needs only one spot of extra space. Works by searching the entire array for the smallest item, then exchanging it with the first item in the array. Repeats this process down the entire array until it is sorted.

Insertion Sort - Stable, in place sort with an order of growth which is between N and N-squared, needs only one spot of extra space and is dependent on the order of the items. Works by scanning over the list, then inserting the current item to the front of the list where it would fit sequentially. All the items to the left of the list will be sorted, but may not be in their final place as the larger items are continuously pushed back to make room for smaller items if necessary.

ShellSort - Non-stable, in place sort with an order of growth which is undetermined, though usually given at being N-to-the 6/5. Needs only one spot of extra space. Works as an extension of insertion sort. It gains speed by allowing exchanges of entries which are far apart, producing partially sorted arrays which are eventually sorted quickly at the end with an insertion sort. The idea is to rearrange the array so that every h-th entry yields a sorted sequence. The array is h-sorted.

Quick Sort - Non-stable, in place sort with an order of growth of NlogN. Needs lgN of extra space. It has a probabilistic guarantee. Works by making use of a divide and conquer method. The array is divided into two parts, and then the parts are sorted independently. An arbitrary value is chosen as the partition. Afterwards, all items which are larger than this value go to the right of it, and all items which are less than this value go to the left of it. 

We arbitrarily choose a[lo] as a partitioning item. Then we scan from the left end of the array one by one until we find an entry that is greater than a[lo]. At the same time, we are scanning from a[lo] to the right to find an entry that is less than or equal to a[lo]. Once we find these two values, we swap them.

3-Way Quick Sort - Non-stable, in place sort with an order of growth between N and NlogN. Needs lgN of extra space. Is probabilistic and dependent on the distribution of input keys.

Mergesort - Stable sort which is not in place. It has an order of growth of NlogN and requires N amount of extra space. Works by dividing an array in half continuously into smaller and smaller arrays. At the lowest level, these arrays are sorted and then merged together after sorting in the reverse order they were divided apart in.

Heap Sort - Non-stable, in place sort which has an order of growth of NlogN. Requires only one spot of extra space. Works like an improved version of selection sort. It divides its input into a sorted and unsorted region, and iteratively shrinks the unsorted region by extracting the smallest element and moving it into the sorted region. It will make use of a heap structure instead of a linear time search to find the minimum.

Lower Bound on the complexity of pairwise comparisons - No compare based sorting algorithm can have fewer than ~NlogN compares

Counting Sort (Key Indexed sort) - An integer sorting algorithm which counts the number of objects that have a distinct key value, and then used arithmetic on those countes to determine the positions of each key value in the output array. 
It cannot handle large keys efficiently, and is often used as a subroutine for other sorting algorithms such as radix sort.

 Has a time complexity of N.

LSD Radix Sort - Stable sort which sorts fixed length strings. Uses an axillary array, and therefore is not in place. Goes through to the last character of a string (its least significant digit), and takes its value. All strings given are then organized based on the value of their least significant digit. 
Following this, the algorithm proceeds to the next least significant digit, repeating the process until it has gone through the length of the strings.
Best used for sorting things with fixed string lengths, like Social Security numbers or License Plates.

Has a time complexity of O(n*k) where n is the number of keys and k is the average length of those keys.

MSD Radix Sort - Used to sort an array of strings based on their first character. Is done recursively and can sort strings which are of different lengths. This algorithm will be slower than its counterpart if used for sets of strings which all have the same length. 
Has a time complexity of 2W(N+R).

Unordered Linked List - Data structure with non-efficently supported operations. Is unordered. Has a worst case cost of search and insertion at N, an average case cost of insertion at N, and an average case cost of searching at N/2.

Binary Search - An ordered array of data which has efficiently supported operations. The worst and average case of a search using this structure is lgN. The Worst case of an insertion is N, and the average case of an insertion is N/2.

Binary Search Tree - Will have a best case high of lgN. This is also its expected height. In the worst case, it will have a height of N, and thus become similar to a linked list.
Works by inserting nodes of lesser values to the left of a node, and inserting greater values to the right of the node, traversing down the tree until we reach a blank spot to insert.
Has a worst case cost of N to search and insert node. The average case of searching will be 1.39lgN compares

2-3 Tree - Balanced tree data structure with logN complexities on searching, inserting, and deleting in both the worst and average cases. In this data structure, every node with children has either two children and one data element, or three children and two data elements. Leaf nodes will contain only one or two data elements.

Red Black Tree - Worst case height of 2log(n+1). The nodes are either red or black. The root is black. If a node is red, its children MUST BE BLACK. Every path from a node to a leaf must contain the same number of black nodes. New insertions will always be red and always left leaning. Insertions must satisfy the conditions that red nodes have black children and that they have the same number of black nodes in all paths. Time complexity on its operations are O(logN).

Tries - A collection of nodes, each of which can hold a key and a value- often the values will be null. The nodes will have a value attached to the last character of the string upon insertion, which apparently makes searching very easy.
Very useful for searching keys.

B-Trees - Items are stored in leaves. The root is either a leaf, or it will have between two and M children. All non-leaf nodes will have between M/2 and M children. All leaves will be at the same depth and store between L/2 and L data values where we are free to choose L. Useful for data storage, searching a database/sorted files.
Time complexity of logN.

Undirected Graph - Given any path connecting vertices A and B, you can travel from A to B or B to A

Directed Graph - Given a path connecting vertices A and B you can only travel in 1 direction

Path - The edge, or link between two vertices

Weighted Graph - A graph which places "costs" on the edges for traveling their path

Cycles - When there are at least two unique paths which connect vertices A and B, forming a loop or loops

DAG (Directed Acyclic Graph) - A graph which is directed and contains no cycles

Depth First Search - A method which is used to traverse through a graph. Works by creating a stack of nodes to visit, which consist of all the nodes around your current position. You move to the next location and add the nodes surrounding it to the stack, making sure not to add any nodes you may have already visited. You repeat this pattern until you either reach the destination, or a dead end. At a dead end, you would backtrack to the last node which still has unvisited neighbors.
Time complexity of |V|+|E|

Topological Sort - Linear ordering of the vertices of a directed graph such that for every directed edge "uv" which connects "u" to "v" (u points to v), u comes before v. This ordering is only possible if and only if there are no directed cycles in the graph, therefore, it must be a DAG.

Minimum Weight Spanning Trees (MST) - A spanning tree whose weight is no larger than the weight of any other spanning tree which could be made with the graph. The properties of this thing include that the graph is connected, the edge weights may not necessarily be distances, the edge weights may be zero or negative, and the edge weights are all different. 
Can be constructed using a greedy algorithm such as Prim's or Kruskal's.
Generally used in network design.

Prim's Algorithm - MST builder/Greedy Algorithm which works by taking a starting vertex and then successively adding the neighbor vertices which have the lowest cost of addition and don't create cycles upon their addition.
Time complexity ElogE

Kruskal's Algorithm - MST Builder/Greedy Algorithm which works by taking edges in order of their weight values, continuously adding edges to the tree if their addition doesn't create a cycle. 
Is generally slower than the other prominent Greedy Algorithm due to its need to check whether or not an edge is part of a cycle at each phase.
Time complexity ElogE

Union Find - Data structure used to make sure a cycle is not created in a MST.

Dijksta's Algorithm - Finds the shortest path with no negative weights given a source vertex. Tries to find the distance to all other vertices in the graph. It produces a shortest paths tree by initializing the distance of all other nodes to infinity, and then relaxes these distances step by step by iteratively adding vertexes that dont already exist in the tree and have the lowest cost of distance to travel to them.

Time complexity O(|E|+|V|log|V|)

Memoization - What happens when a sub problem's solution is found during the process of Dynamic Programming. The solution is stored for future use, so that it may be reused for larger problems which contain this same subproblem. This helps to decrease run time.

Bellman-Ford Algorithm - Algorithm which computes shortest paths from a single vertex to all other vertices in a weighted digraph. Is slower than its counterpart, but is able to handle edge weights with negative values. Works by initially setting the distance to all nodes to infinity, and then iteratively relaxing the edges in an order which would maintain a shortest path from the starting edge to any other edge.
Has a time complexity of O(EV)

Selection sort - Find smallest, put at beginning
Best: O(n^2)
Avg: O(n^2)
Worst: O(n^2)

Insertion sort - Side-by-side comparison
Best: O(n)
Avg: O(n^2)
Worst: O(n^2)

Shellsort - Insertion sort over a gap
Best: O(n log n)
Avg: depends on gap sequence
Worst: O(n^2)

Mergesort - split into sub-arrays
Best: O(n log n)
Avg: O(n log n)
Worst: O(n log n)

Quicksort - partitioning
Best: O(n log n) (or O(n) three-way)
Avg: O(n log n)
Worst: O(n^2)

Binary Search Tree - Avg height: O(log n)
Worst height: O(n)

Red-black Tree - Worst height: 2 log n

LSD - String/character sort from right to left

MSD - String/character sort from left to right, must keep appending from previous letters to keep order

Trie - Search tree but with a child position for each character in the library
Think spelling

B-tree - That tree where you have like 5 keys in a node and 6 offshoots

Breadth-first search - Use a queue to search tree

Depth-first search - Use a stack or recursion to search tree

Topographical sort - Some things have to come before others
Ex: getting dressed, course prereqs
Not necessarily unique

MST - Minimum spanning tree
Least weight that connects all nodes
No cycles

Prim's Algorithm - Start with one vertex, grow tree on min weight edge from all vertices
So out of all reachable edges that don't cause cycles, take the smallest

Kruskal's algorithm - Keep adding smallest edges

Dijkstra's algorithm - Marking nodes as they are added to tree, update reachable unmarked nodes with weight from beginning. Take smallest total weight. Repeat.

Self-loop - A self-loop is an edge that connects a vertex to itself.

Parallel - Two edges are parallel if they connect the same pair of vertices.

degree - The degree of a vertex is the number of edges incident on it.

subgraph - A subgraph is a subset of a graph's edges (and associated vertices) that constitutes a graph.

Path - A path in a graph is a sequence of vertices connected by edges. A simple path is one with no repeated vertices.

Cycle - A cycle is a path (with at least one edge) whose first and last vertices are the same. A simple cycle is a cycle with no repeated edges or vertices (except the requisite repetition of the first and last vertices).

Length - The length of a path or a cycle is its number of edges.

connected graph - A graph is connected if there is a path from every vertex to every other vertex.

connected vertices - We say that one vertex is connected to another if there exists a path that contains both of them.

connected components - A graph that is not connected consists of a set of connected components, which are maximal connected subgraphs.

acyclic - An acyclic graph is a graph with no cycles.

tree - A tree is an acyclic connected graph.

forest - A forest is a disjoint set of trees.

spanning tree - A spanning tree of a connected graph is a subgraph that contains all of that graph's vertices and is a single tree.

spanning forest - A spanning forest of a graph is the union of the spanning trees of its connected components.

bipartite graph - A bipartite graph is a graph whose vertices we can divide into two sets such that all edges connect a vertex in one set with a vertex in the other set.

outdegree and indegree - The outdegree of a vertex is the number of edges pointing from it. The indegree of a vertex is the number of edges pointing to it.

directed path - A directed path in a digraph is a sequence of vertices in which there is a (directed) edge pointing from each vertex in the sequence to its successor in the sequence.

simple path - A directed path with no repeated vertices

directed cycle - A directed cycle is a directed path (with at least one edge) whose first and last vertices are the same.

simple cycle - A simple cycle is a cycle with no repeated edges or vertices (except the requisite repetition of the first and last vertices).

reachable - We say that a vertex w is reachable from a vertex v if there exists a directed path from v to w.

strongly connected vertices - We say that two vertices v and w are strongly connected if they are mutually reachable: there is a directed path from v to w and a directed path from w to v.

strongly connected digraph - A digraph is strongly connected if there is a directed path from every vertex to every other vertex.

directed acyclic graph - A directed acyclic graph (or DAG) is a digraph with no directed cycles.

Isolate the lowest bit that is 1 in x - x & ~(x - 1)

Replace the lowest bit that is 1 with 0 - x & (x - 1)

Right propagate the rightmost set bit in x - x | (x & ~(x - 1) - 1)

Compute x modulo a power of 2 (y) - x & (y - 1)

Compute XOR of every bit in an integer - Similar to addition, XOR is associative and communicative, so, we need to XOR every bit together. First, XOR the top half with the bottom half. Then, XOR the top quarter of the bottom half with the bottom quarter of the bottom half...

x ^= x >> 32
x ^= x >> 16
x ^= x >> 8
x ^= x >> 4
x ^= x >> 2
x ^= x >> 1
x = x & 1

Standard data structure for solving complex bit manipulation - Lookup table

Concrete Examples - Analysis pattern. Manually solve concrete instances of the problem and then build a general solution

Case Analysis - Analysis pattern. Split the input/execution into a number of cases and solve each case in isolation

Iterative Refinement - Analysis pattern. Most problems can be solved using s brute-force approach. Find such a solution and improve upon it.

Reduction - Analysis pattern. Use a well-known solution to some other problem as a subroutine.

Graph Modeling - Analysis pattern. Describe the problem using a graph and solve it using an existing algorithm.

Sorting - Algorithm design patterns. Uncover some structure by sorting the input.

Recursion - Algorithm design patterns. If the structure of the input is defined in a recursive manner, design a recursive algorithm that follows the input definition.

Divide-and-conquer - Algorithm design patterns. Divide the problem into two or more smaller independent subproblems and solve the original problem using solutions to the subproblems.

Greedy Algorithms - Algorithm design patterns. Compute a solution in stages, making choices that are local optimum at step; these choices are never undone.

Invariants - Algorithm design patterns. Identify an invariant and use it to rule out potential solutions that are suboptimal/dominated by other solutions.

Heuristics - Any approach to problem solving, learning, or discovery that employs a practical method not guaranteed to be optimal or perfect, but sufficient for the immediate goals. Where finding an optimal solution is impossible or impractical, heuristic methods can be used to speed up the process of finding a satisfactory solution. Heuristics can be mental shortcuts that ease the cognitive load of making a decision. Examples of this method include using a rule of thumb, an educated guess, an intuitive judgment, stereotyping, profiling, or common sense

memoization - An optimization technique used primarily to speed up computer programs by storing the results of expensive function calls and returning the cached result when the same inputs occur again.

Typical runtime of a recursive function with multiple branches - O( branches^depth )

Arithmetic progressions - For p < -1, this sum always converges to a constant.

Geometric series - .

Dominance pecking order - 

Big Oh Notation - 

Stable Sorting Algorithm - Items with the same key are sorted based on their relative position in the original permutation

Trie - In computer science, a trie, also called digital tree and sometimes radix tree or prefix tree (as they can be searched by prefixes), is an ordered tree data structure that is used to store a dynamic set or associative array where the keys are usually strings. Unlike a binary search tree, no node in the tree stores the key associated with that node; instead, its position in the tree defines the key with which it is associated. All the descendants of a node have a common prefix of the string associated with that node, and the root is associated with the empty string. Values are not necessarily associated with every node. Rather, values tend only to be associated with leaves, and with some inner nodes that correspond to keys of interest. For the space-optimized presentation of prefix tree, see compact prefix tree.

Hamming Weight - The Hamming weight of a string is the number of symbols that are different from the zero-symbol of the alphabet used (also called the population count, popcount or sideways sum).

Algorithm:
- Count the number of pairs, then quads, then octs, etc, adding and shifting.

v = v - ((v>>1) & 0x55555555);
v = (v & 0x33333333) + ((v>>2) & 0x33333333);
int count = ((v + (v>>4) & 0xF0F0F0F) * 0x1010101) >> 24;

Bit Array - A bit array is a mapping from some domain (almost always a range of integers) to values in the set {0, 1}. The values can be interpreted as dark/light, absent/present, locked/unlocked, valid/invalid, et cetera. The point is that there are only two possible values, so they can be stored in one bit. As with other arrays, the access to a single bit can be managed by applying an index to the array. Assuming its size (or length) to be n bits, the array can be used to specify a subset of the domain (e.g. {0, 1, 2, ..., n−1}), where a 1-bit indicates the presence and a 0-bit the absence of a number in the set. This set data structure uses about n/w words of space, where w is the number of bits in each machine word. Whether the least significant bit (of the word) or the most significant bit indicates the smallest-index number is largely irrelevant, but the former tends to be preferred (on little-endian machines).

One-Sided Binary Search - In the absence of an upper bound, we can repeatedly test larger intervals (A[1], A[2], A[4], A[8], A[16], etc) until we find an upper bound, the transition point, p, in at most 2[log p] comparisons. One sided binary search is most useful whenever we are looking for a key that lies close to our current position.

Recurrence Relation - An equation that is defined in terms of itself. Any polynomial or exponential can be represented by a recurrence.

Divide-and-Conquer Recurrances - T(n) = aT(n/b) + f(n)

Solving Divide-and-Conquer Recurrances - Case 1: Too many leaves.
Case 2: Equal work per level.
Case 3: Too expensive a root

Heapify (bubble down) - Swap a node with one of its children, calling bubble_down on the node again until it dominates its children. Each time, place a node that dominates the others as the parent node.

Permutations - A permutation is an ordered combination.

Repetition is Allowed: such as the lock above. It could be "333".

No Repetition: for example the first three people in a running race. You can't be first and second.


https://www.mathsisfun.com/combinatorics/combinations-permutations.html

Combinations - Repetition is Allowed: such as coins in your pocket (5,5,5,10,10)

No Repetition: such as lottery numbers (2,14,15,27,30,33)


https://www.mathsisfun.com/combinatorics/combinations-permutations.html

Internal Sorting - An internal sort is any data sorting process that takes place entirely within the main memory of a computer. This is possible whenever the data to be sorted is small enough to all be held in the main memory. For sorting larger datasets, it may be necessary to hold only a chunk of data in memory at a time, since it won't all fit. The rest of the data is normally held on some larger, but slower medium, like a hard-disk. Any reading or writing of data to and from this slower media can slow the sortation process considerably.

External Sorting - External sorting is a term for a class of sorting algorithms that can handle massive amounts of data. External sorting is required when the data being sorted do not fit into the main memory of a computing device (usually RAM) and instead they must reside in the slower external memory (usually a hard drive). External sorting typically uses a hybrid sort-merge strategy. In the sorting phase, chunks of data small enough to fit in main memory are read, sorted, and written out to a temporary file. In the merge phase, the sorted subfiles are combined into a single larger file.

Mergesort is typically preferred.

Counting Sort - An algorithm for sorting a collection of objects according to keys that are small integers; that is, it is an integer sorting algorithm. It operates by counting the number of objects that have each distinct key value, and using arithmetic on those counts to determine the positions of each key value in the output sequence. Its running time is linear in the number of items and the difference between the maximum and minimum key values, so it is only suitable for direct use in situations where the variation in keys is not significantly greater than the number of items. However, it is often used as a subroutine in another sorting algorithm, radix sort, that can handle larger keys more efficiently.[1][2][3]

Because counting sort uses key values as indexes into an array, it is not a comparison sort, and the Ω(n log n) lower bound for comparison sorting does not apply to it.

Selection Sort - An in-place comparison sort algorithm, O(n^2). The algorithm divides the input list into two parts: the sublist of items already sorted, which is built up from left to right at the front (left) of the list, and the sublist of items remaining to be sorted that occupy the rest of the list. Initially, the sorted sublist is empty and the unsorted sublist is the entire input list. The algorithm proceeds by finding the smallest (or largest, depending on sorting order) element in the unsorted sublist, exchanging (swapping) it with the leftmost unsorted element (putting it in sorted order), and moving the sublist boundaries one element to the right

Advantages/Disadvantages of Common Sorting Algorithms - 

Adjacency Matrix vs Adjacency List - 

Connected Component - In an undirected graph, a connected component is a maximal set of vertices such that there is a path between every pair of vertices (the example shows 3 connected components).

Vertex-coloring - Seeks to assign a label (or color) to each vertex of a graph such that no edge links any two vertices of the same color.

Bipartite Graph - Graph can be colored without conflicts while using only two colors.

In-Order Traversal - 1. Process left child.
2. Process self.
3. Process right child.

Pre-Order Traversal - 1. Process self.
2. Process left child.
3. Process right child.

Post-Order Traversal - 1. Process left child.
2. Process right child.
3. Process self.

Breadth-First Search - Explores the oldest unexplored vertices first. 

Places discovered vertices in a queue.

In an undirected graph:
Assigns a direction to each edge, from the discoverer to the discovered, and the discoverer is denoted to be the parent.

Depth-First Search - Explore newest unexplored vertices first.

Placed discovered vertices in a stack (or used recursion).

Partitions edges into two classes: tree edges and back edges. Tree edges discover new vertices; back edges are ancestors.

Articulation Vertex - The weakest point in a graph

Topological Sort - A linear ordering of its vertices such that for every directed edge uv from vertex u to vertex v, u comes before v in the ordering.

Strongly Connected Graphs - There lies a path between any two vertices on a directed graph.

Chromatic Number - The smallest number of colors needed for an edge coloring of a graph

Degree of a Vertex - The number of edges incident of the vertex, with loops counted twice

Quick Select - A selection algorithm to find the kth smallest element in an unordered list. Quickselect uses the same overall approach as quicksort, choosing one element as a pivot and partitioning the data in two based on the pivot, accordingly as less than or greater than the pivot. However, instead of recursing into both sides, as in quicksort, quickselect only recurses into one side - the side with the element it is searching for. This reduces the average complexity from O(n log n) to O(n).

Partition algorithm:

Balanced Binary Tree - For each node in the tree, the difference in the height of its left and right subtrees is at most one.

Perfect Binary Tree - A perfect binary tree is a binary tree in which all interior nodes have two children and all leaves have the same depth or same level.

Rooted Binary Tree - A rooted binary tree has a root node and every node has at most two children.

Full Binary Tree - A full binary tree (sometimes referred to as a proper or plane binary tree) is a tree in which every node in the tree has either 0 or 2 children.

Complete Binary Tree - In a complete binary tree every level, except possibly the last, is completely filled, and all nodes in the last level are as far left as possible.

Degenerate Binary Tree - A degenerate (or pathological) tree is where each parent node has only one associated child node.This means that performance-wise, the tree will behave like a linked list data structure.

Combinations of binary tree traversal sequences that uniquely identify a tree - 1. Inorder and preorder.
2. Inorder and postorder.
3. inorder and level-order.

Combinations of binary tree traversal sequences that do not uniquely identify a tree - 1. Postorder and preorder.
2. Preorder and level-order.
3. Postorder and level-order.

Constructing a heap in linear time - 1. Place the data into the heap's data set blindly. It will have the correct shape, but the dominance order will be incorrect.
2. Starting from the last (nth) position, walk backwards through the array until we encounter an internal node with children.
3. Perform bubble down n times.

Explanation:
heapify() takes time proportional to the height of the heaps it is merging. Most of these heaps are extremely small. In a full binary tree on n nodes, there are n/2 nodes that are leaves, n/4 nodes that are height 1, n/8 nodes that are height 2, and so on. In general, there are at most n/(2^(h+1) nodes of hieght h, so the cost of building the heap is <= 2n (see picture).

Palindrome - String that reads the same forwards as backwards

Anagram - a word, phrase, or name formed by rearranging the letters of another, such as cinema, formed from iceman.

Mnemonic - A device such as a pattern of letters, ideas, or associations that assists in remembering something

Preemption - Preemption is the act of temporarily interrupting a task being carried out by a computer system, without requiring its cooperation, and with the intention of resuming the task at a later time. Such a change is known as a context switch.

Double Checked Locking - Double-checked locking is a software design pattern used to reduce the overhead of acquiring a lock by first testing the locking criterion (the "lock hint") without actually acquiring the lock. Only if the locking criterion check indicates that locking is required does the actual locking logic proceed. (Often used in Singletons, and has issues in C++).

Inverted Index - An index data structure storing a mapping from content, such as words or numbers, to its locations in a database file, or in a document or a set of documents (named in contrast to a Forward Index, which maps from documents to content). The purpose of an inverted index is to allow fast full text searches, at a cost of increased processing when a document is added to the database.

Radix Sort - Non-comparative integer sorting algorithm that sorts data with integer keys by grouping keys by the individual digits which share the same significant position and value. Two classifications of radix sorts are least significant digit (LSD) radix sorts and most significant digit (MSD) radix sorts.

Minimum Spanning Trees - The smallest connected graph in terms of edge weight, minimizing the total length over all possible spanning trees. However, than can be more than one minimum spanning tree in a graph. All spanning trees of an unweighted graph are minimum spanning trees.

Prim's Algorithm - (Minimum Spanning Trees, O(m + nlogn), where m is number of edges and n is the number of vertices) Starting from a vertex, grow the rest of the tree one edge at a time until all vertices are included. Greedily select the best local option from all available choices without regard to the global structure.

Kruskal's Algorithm - (Minimum Spanning Trees, O(mlogm) with a union find, which is fast for sparse graphs) Builds up connected components of vertices, repeatedly considering the lightest remaining edge and tests whether its two endpoints lie within the same connected component. If not, insert the edge and merge the two components into one.

Union-Find - (Disjoint-set data structure) keeps track of a set of elements partitioned into a number of disjoint (nonoverlapping) subsets. It supports two useful operations: find and union.

Find: Determine which subset a particular element is in. Find typically returns an item from this set that serves as its "representative"; by comparing the result of two Find operations, one can determine whether two elements are in the same subset.

Union: Join two subsets into a single subset.

In order to define these operations more precisely, some way of representing the sets is needed. One common approach is to select a fixed element of each set, called its representative, to represent the set as a whole. Then, Find(x) returns the representative of the set that x belongs to, and Union takes two set representatives as its arguments.

Sparse Graph - A graph in which the number of edges is close to the minimal number of edges. Sparse graphs can be a disconnected

Set Partition - A partitioning of elements of some universal set into a collection of disjointed subsets. Thus, each element must be in exactly one subset.

Maximum Spanning Tree - A spanning tree of a weighted graph having maximum weight. It can be computed by negating the edges and running either Prim's or Kruskal's algorithms.

Minimum Product Spanning Tree - The cost of a tree is the product of all the edge weights in the tree, instead of the sum of the weights. Since log(a*b) = log(a) + log(b), the minimum spanning tree on a graph whose edge weights are replaced with their logarithms gives the minimum product spanning tree on the original graph.

Fibonacci Heap - A data structure that is a collection of trees satisfying the minimum-heap property, that is, the key of a child is always greater than or equal to the key of the parent. This implies that the minimum key is always at the root of one of the trees. The trees do not have a prescribed shape and in the extreme case the heap can have every element in a separate tree. This flexibility allows some operations to be executed in a "lazy" manner, postponing the work for later operations. For example, merging heaps is done simply by concatenating the two lists of trees, and operation decrease key sometimes cuts a node from its parent and forms a new tree.

For the Fibonacci heap, the find-minimum operation takes constant (O(1)) amortized time. The insert and decrease key operations also work in constant amortized time. Deleting an element (most often used in the special case of deleting the minimum element) works in O(log n) amortized time, where n is the size of the heap. This means that starting from an empty data structure, any sequence of a insert and decrease key operations and b delete operations would take O(a + b log n) worst case time, where n is the maximum heap size. In a binary or binomial heap such a sequence of operations would take O((a + b) log n) time. A Fibonacci heap is thus better than a binary or binomial heap when b is smaller than a by a non-constant factor. It is also possible to merge two Fibonacci heaps in constant amortized time, improving on the logarithmic merge time of a binomial heap, and improving on binary heaps which cannot handle merges efficiently.

Using Fibonacci heaps for priority queues improves the asymptotic running time of important algorithms, such as Dijkstra's algorithm for computing the shortest path between two nodes in a graph, compared to the same algorithm using other slower priority queue data structures.

Dijkstra's Algorithm - An algorithm for finding the shortest paths between nodes in a weighted graph. For a given source node in the graph, the algorithm finds the shortest path between that node and every other. It can also be used for finding the shortest paths from a single node to a single destination node by stopping the algorithm once the shortest path to the destination node has been determined. Its time complexity is O(E + VlogV), where E is the number of edges and V is the number of vertices.

Floyd-Warshall Algorithm - An algorithm for finding shortest paths in a weighted graph with positive or negative edge weights (but with no negative cycles). A single execution of the algorithm will find the lengths (summed weights) of the shortest paths between all pairs of vertices, though it does not return details of the paths themselves.

Type erasure - Type erasure is any technique in which a single type can be used to represent a wide variety of types that share a common interface. In the C++ lands, the term type-erasure is strongly associated with the particular technique that uses templates in the interface and dynamic polymorphism in the implementation.

1. A union is the simplest form of type erasure.
 - It is bounded, and all participating types have to be mentioned at the point of declaration.

2. A void pointer is a low-level form of type erasure. Functionality is provided by pointers to functions that operate on void* after casting it back to the appropriate type.
 - It is unbounded, but type unsafe.

3. Virtual functions offer a type safe form of type erasure. The underlying void and function pointers are generated by the compiler.
 - It is unbounded, but intrusive.
 - Has reference semantics.

4. A template based form of type erasure provides a natural C++ interface. The implementation is built on top of dynamic polymorphism.
 - It is unbounded and unintrusive.
 - Has value semantics.

Rolling hash function - A rolling hash (also known as a rolling checksum) is a hash function where the input is hashed in a window that moves through the input.

A few hash functions allow a rolling hash to be computed very quickly—the new hash value is rapidly calculated given only the old hash value, the old value removed from the window, and the new value added to the window—similar to the way a moving average function can be computed much more quickly than other low-pass filters.

One of the main applications is the Rabin-Karp string search algorithm, which uses the rolling hash described below.

Euclidean Algorithm GCD - def gcd(a, b):
 while a:
 b, a = a, b%a
 return b

Transitive Closure - Can one get from node a to node d in one or more hops? A binary relation tells you only that node a is connected to node b, and that node b is connected to node c, etc. After the transitive closure is constructed one may determine that node d is reachable from node a. (use Floyd-Warshall Algorithm)

Rabin-Karp - Compute hash codes of each substring whose length is the length of s, such as a function with the property that the hash code of a string is an additive function of each individual character. Get the hash code of a sliding window of characters and compare if the hash matches.

Replica - Replication in computing involves sharing information so as to ensure consistency between redundant resources, such as software or hardware components, to improve reliability, fault-tolerance, or accessibility.

Sharding - Sharding is a type of database partitioning that separates very large databases the into smaller, faster, more easily managed parts called data shards.

What is the goal of Hashing? - Do faster than O(LogN) time complexity for: lookup, insert, and remove operations. To achieve O(1)

What kind of Collection is Hashing? - value-orientated.

How does Hashing work? - 1. you have a key for the item.
2. the item's key gets churned within the hash function to form the Hash index.
3. The hash index can be applied to the data array, and so, the specific data is found.

hash Table: - An array that stores a collection of items.

Table Size(TS) - The Array's Length

Load Factor (LF) - Number of items/Table size. 

For instance, a load factor of 1 = 100% of the items are used.

Key - Information in items that is used to determine where the item goes into the table.

Hash Function - A function that takes in the key to compute a specific Hash Index.

What would the Perfect Hash Function be? - Each Key maps to an unique Hash Index.

How do you delete a value within the hash table? - You just set Table[hash(Key)] = null

How do you look up a value within the hash table? - return Table[Hash(key)];

How do you insert a value within the hash table? - Table[Hash(key)]=data;

What is the worst case time complexity for: Insert, lookup, and delete, for hash functions? - O(1)

If we have UW-Madison student ID's, and we wanted the ideal hash functions, how would we do it, and why would there be a problem - -> We'd simply count each one as an index

-> Hash table would be huge.

Collisions: - When the Hash Function returns the same index for different keys.

Good Hash Function qualities: - 1. Must be deterministic:
-> Key must ALWAYS generate the same Hash Index (excluding rehashing).
2. Must achieve uniformity
-> Keys should be distributed evenly across hash table.
3. FAST/EASY to compute
-> only use parts of the key that DISTINGUISH THE ITEMS FROM EACH OTHER
4. Minimize collisions:

Extraction: - Breaking keys into parts and using the parts that uniquely identify with the item. 
379452 = 394
121267 = 112

Folding: - Combining parts of the key using operations like + and bitwise operations such as exclusive or.

Key: 123456789

 123
 456
 789
 ---
 1368 ( 1 is discarded)

Weighting: - Emphasizing some parts of the key over another.

Compressing: - Ensuring the hash code is a valid index for the table size.

The more items a table can hold, the () likely a collision will happen. - less

Load Factor - Approximately how it's full... 0.7-0.8.

Why do we use prime numbers for table size? - We mod often, and prime numbers give us the most unique numbers. (2*ts+1)

Steps to resizing: - 1. Double table size to nearest prime number
2. Re-hash items from old table into the new table.

Rehashing Complexity: - O(N)-- costly. 

Carefully select initial TS to avoid re-hashing.

Collesion handeling: - How you handle the collisions so each element in the hittable stores only one item.

Idea of probing: - If you have a collision, search somewhere else on the table.

Linear Probing: - Step size is 1. 
Find the index, and keep incrementing by one until you find a free space.

Quadratic Probing: - Probe Sequence is (Hk+1)^2.

Minimizes clustering
better at distinguishing items across table.

Probe Hashing: - -> Hash it, and if it leads to a collision, use a separate equation to determine the step size and use that step size to find a new site.

Collision Hashing using Buckets - -Each element can solre than one item.
-throw collisions into a bucket.
-buckets aren't sorted.

Array Bucket - -- a bucket of arrays. 
-Fixed in size.
-size of about 3 work usually well.

Chained bucket: - +--easy to implement
+-- buckets can't overfill
+-- buckets won't waste time.
+-- buckets are dynamically sized.

Tree Buckets - +--WC = O(logN)
+--no wasting space
+--dynamically sized
-- more complicated than what's needed. 

--> insert with dups= O(1)
--> W/o dups = O(N)

HashCode Method: - -method of OBJECT class
-Returns an int
-default hash code is BAD-- computed from Object's memory address. 
--> must override

HashTable<K,V> & HashMap<K,V> class - java.util

implements map<K,V> interface

K-- type paramater for key and v-- type parameter for associated value

Operations: lookup, insert, delete.

Constructor lets you set init capacity and load factor

handles collisions with chained buckets

hash map only allows null for keys and values

TreeMap underlying Structure: - RBT

Treemap complexity of basic operations: - O(logN)

TreeMap complexity for iterating over associated values: - O(N)

HashMap underlying structure: - HashTable with chained buckets

HashMap complexity of basic operations: - O(1)

Complexity for iterating over associated values: - O(T.S + N) --> worst case.

data structure - a particular scheme organizing related data items.

linked list - A sequence of zero or more nodes containing some data and pointers to other nodes of the list.

list - a collection of data items arranged in a certain linear order

stack - LIFO list in which insertions/deletions are only done at one end.

queue - FIFO list in which elements are added from one end of the structure and deleted from the other end.

priority queue - collection of data items from a totally ordered universe

graph (formal) - G = (V,E). V: finite, nonempty set of vertices. E: set of pairs of V, called edges.

If a graph's edges are unordered [ (u,v) == (v,u)], then the vertices u and v are - adjacent

If a graph's edges are unordered [ (u,v) == (v,u)], then the vertices u and v are connected by - an undirected edge (u,v).

The vertices u and v of the undirected edge(u,v) are the _ of the edge - endpoints

The vertices u and v of the undirected edge(u,v) are _ to the edge - incident

A graph is undirected if - every edge in it is undirected.

If a graph's edges are ordered [ (u,v) != (v,u)], then the edge (u,v) is _ from _ to _ - directed from u to v

digraph - A graph whose every edge is directed

for the directed edge (u,v), u is the _ and v is the _ - u is the tail, v is the head.

complete graph - a graph with every pair of its vertices connected by an edge

dense graph - A graph with very few possible edges missing

sparse graph - A graph with few edges relative to the number of vertices

weighted graph - A graph with numbers assigned to its edges.

weight/cost matrix - Adjacency matrix of a weighted graph.

A path from vertex u to vertex v - a sequence of adjacent vertices that starts with u and ends with v

simple path - A path in which all vertices are distinct

length of a path - The total number of vertices in the vertex sequence defining the path - 1.

directed path - A sequence of vertices (v1,v2,v3,...) such that v1->v2, v2->v3,v3->... for a directed graph.

connected graph - A graph such that for all vertices u and v, there exists a path from u to v.

cycle - A path of positive length that starts and ends at the same vertex and does not traverse the same edge more than once.

acyclic graph - A graph with no cycles.

tree - A connected, acyclic graph

forest - A graph that has no cycles, but not necessarily connected

The number of edges in a tree - One less than the number of vertices

Q: For every vertices u, v in a tree, there exists: - A: Exactly one simple path from u to v.

tree root - top level vertex

Ancestors of a vertex v in a tree - All vertices on the simple path from the root to v

Proper ancestors of a vertex v in a tree - All vertices on the simple path from the root to v, but excluding v itself.

if (u,v) is the last edge of the simple path from the root to vertex v, u is the _ of v - parent

if (u,v) is the last edge of the simple path from the root to vertex v, v is the _ of u - child

siblings - Vertices of a tree that have the same parent.

leaf - A vertex with no children

parental - A vertex with at least one child

descendants of v - All vertices for which v is an ancestor in a tree

subtree of T rooted at v - All descendants of a vertex v

proper descendants - All vertices for which v is an ancestor in a tree, excluding v itself.

depth of a vertex v - The length of the simple path from the root to v

height of a tree - the length of the longest simple path from the root to a leaf

ordered tree - A rooted tree in which all children of each vertex are ordered. (Usually left to right)

binary tree - An ordered tree in which every vertex has no more than two children, with each child designated as a left or right child. Potentially empty.

binary search tree - A binary tree with the property that for all parent nodes, the left subtree contains only values less than the parent, and the right subtree contains only values greater than the parent.

first child-next sibling representation - Representation used for ordered trees with a potentially varying amount of children per parent node.

set - An unordered collection (possibly empty) of distinct items called elements of the set.

Algorithm Analysis - how long it takes a computer to do something

Algorithm - has input, produces output, definite, finite, operates on the data it is given

Big-Oh - T(n) = O(f(n)) if there are positive constants c & n° such that T(n) <= c * f(n) for all n >= n°

Big Omega - T(n) = Ω(f(n)) if ∃ positive constants c & n° such that T(n) >= c * f(n) for all n >= n°

Little-Oh - T(n) = 0(f(n)) if T(n) = O(f(n)) and T(n) != Ω(f(n))

Queues - First in, first out. O(1)

L N R - in-order traversal

N L R - Preorder traversal (Polish)

L R N - Postorder traversal (Reverse Polish)

Insertion Sort - Stable, O(n^2), Ω(n) : Swapping elements one at a time starting at the beginning.

Selection Sort - Unstable, O(n^2), Ω(n^2) : Iterates through every elements to ensure the list is sorted.

Bubble Sort - Stable, O(n^2), Ω(n) : Compares neighboring elements to see if sorted. Stops when there's nothing left to sort.

Heap Sort - Unstable, O(n log n), Ω(n log n): Make a heap, take everything out.

Tree Sort - Stable, O(n log n), Ω(n log n) : Put everything in the tree, traverse in-order.

Merge Sort - Stable, O(n log n), Ω(n log n): Use recursion to split arrays in half repeatedly. An array with size 1 is already sorted.

Quick Sort - Unstable, O(n log n) for a good pivot,O(n^2) for a bad pivot Ω(n log n) : Uses partitioning O(n), Pick a median of 1st, middle, and last element for pivot. Random selection is also good, but expensive. Algorithm can be slow because of many function calls.

Insertion & Quick Sort - Using both algorithms together is more efficient since O(n log n) is only for large arrays.

Indirect Sorting - Involves the use of smart pointers; objects which contains pointers.

Bucket Sort - O(n+m) where m is the # of buckets.

Graphs - "Uber" data structure. Shows connections between objects. Can be displayed as either a matrix or linked list representation.

DAG - directed acyclic graph

Strongly connected - A directed graph in which there exists a path between every pair of vertices.

Weakly connected - A path between every pair of vertices which are undirected.

Depth First Search - Runs in time equal to the size of the graph, can determine if a graph has a cycle.

Topological Sorting - Receives a DAG as input, outputs the ordering of vertices. Selects a node with no incoming edges, reads it's outgoing edges.

Single Source Shortest Path - Input: Graph and starting vertex.
Output: shortest path to all points.
Unweighted: BFS
Weighted: Dijkstra's Method

Dijkstra's Method - Calculates the shortest path to all vertices in a single source shortest path using a priority queue, or a heap. Check's "frontier" based on cost. The distance to any node is known once it has been "visited".

Relaxation - Getting from A->C more cheaply by using B as an intermediary.

Negative Edge Costs - Dijkstra's cannot solve. Requires Bellman-Ford.

Bellman-Ford - Allowed to reconsider costs of reaching vertexes. Can detect negative cost cycles. Able to handle negative graphs by performing relaxation on all edges V-1 times where V is the number of vertices.

All Pairs Shortest Path - Can be solved using Floyd-Warshall.

Floyd-Warshall - Implicitly determines shortest paths taking into account all vertexes.

Minimum Spanning Tree - Acyclic, contain all vertexes. Can be approached with either Prim's or Kruskal's method.

Prim's - Same overall algorithm as Dijkstra's except that it only considers lowest cost of single edge. Continually builds onto a tree with the cheapest cost edges.

Kruskal's - Takes edges in sorted order by cost, creates many trees which join into one large tree.

Disjoint Sets - Never allowed to break apart sets. Also known as Union/Find Algorithm. Each node has a parent pointer which points to a representative for each set

2 Ways to Improve Disjoint Sets - Union By Rank - make smaller tree point to larger tree.
Path Compression - Updating parent pointer directly to root.

Abstract Data Types - Consists of 2 parts:
1. Data it contains
2. Operations that can be performed on it

Parameter Passing - Small, no modification - value
Large, no modification - CONST reference
modified - pointer

Iterators - An object that knows how to "walk" over a collection of things. Encapsulates everything it needs to know about what it's iterating over. Should all have similar interfaces. Can read data, move, know when to stop.

AVL Trees - Adelson-Velskii & Landis: Any pair of sibling nodes have a height difference of at most 1. On insertion, at most one rotation (single or double) is needed to restore balance. On removal, multiple rotations may be necessary.

Single Rotation - Rotation preserves order. Inner children become the child of the node which was replaced.

Double Rotation - Two single rotation at different locations, either right-left or left-right. First rotation is deeper than the second.

Splay Tree - Any valid BST. Amortized O(log n) access. M operations take O(m log n) for m being large #s. Any node getting inserted, removed, or accessed, get's splayed to the root.

Spatial locality - Close by in memory

Temporal locality - Accessing something over a short period of time

Red Black Trees - 1. Every node is Red or Black
2. The root is Black
3. If a node is red, it's children must be black
4. Every path from a node to a NULL pointer must contain the same number of black nodes

B-Trees - Popular in disk storage. Keys are in nodes. Data is in the leaves.

Heap - A type of priority queue. Stores data which is order-able. O(1) access to highest priority item.

Trie - Has only part of a key for comparison at each node.

Hash Table - Constant access time (on average).

Hash function - takes an object and tells you where to put it.

Collision - Entering into a space already in use.

Load Factor - #items(n) / table size

Separate Chaining - Uses a linked list to handle collisions at a specific point.

Open addressing - Uses probes to find an open location to store data.

Linear Probing - Checks each spot in order to find available location, causes primary clustering.

Quadratic Probing - Checks the square of the nth time it has to check, causes secondary clustering. Not guaranteed to find an open table spot unless table is 1/2 empty.

Double Hashing - The process of using two hash functions to determine where to store the data.

Rehashing - Expanding the table: double table size, find closest prime number. Rehash each element for the new table size.

Lazy Deletion - Marking a spot as deleted in a hash table rather than actually deleting it.

Prime number Tables - Reduce the chance of collision.

Bloom Filters - Probabilistic hash table. No means no. Yes means maybe. Multiple (different) hash functions. Can't resize table. Also can't remove elements.

Important Sorting Assumptions - 1.Sorting array of integers
2. Length of array is n
3.Sorting least to greatest
4.Can access array element in constant time
5.Compare ints in array only with '<'
6.Focus on # of comparisons

Average Lower bound for adjacent swaps - n(n-1)/4 Ω(n^2)

Inversions - Min: 0
Max: n(n-1)/2
Swapping removes 1 inversion

4 Rules of Recursion - Base Cases: You must always have some base cases, which can be solved without recursion.

Making Progress: For the cases that are to be solved recursively, the recursive call must make progress to a base case.

Design rule: Assume that all recursive calls work

Compound Interest Rule: Never duplicate word by solving the same instance of a problem in separate recursive calls.

Aggregate Data Types - Any type of data that can be referenced as a single entity, and yet consists of more than one piece of data, like strings, arrays, classes, and other complex structures.

1D Array - A linear collection of data items in a program, all of the same type, such as an array of integers or an array of strings, stored in contiguous memory, and easily accessed using a process called indexing.

Contiguous Memory - Memory that is "side-by-side" in a computer, typical of an array structure.

Data Structure - A way of organizing data in a computer so that it can be used efficiently, such as an array, linked list, stack, queue, or binary tree.

Linear Data Structure - A programming data structure that occupies contiguous memory, such as an array of values.

2D Array - An array of an arrays, characterized by rows and columns, arranged in a grid format, but still stored in contiguous, or side-by-side memory, accessed using two index values.

Peek - A process used in stack and queue processing where a copy of the top or front value is acquired, without removing that item.

Pop - A process used in stack and queue processing where a copy of the top or front value is acquired, and then removed from the stack or queue (Dequeue).

Push - A process used in stack and queue processing where a new value is inserted onto the top of the stack OR into the back of the queue (Enqueue).

Stack - An abstract data type that serves as a collection of elements, with two principal operations: push, which adds an element to the collection, and pop, which removes the last element that was added. LIFO - Last In First Out

Queue - A FIFO (First In First Out) data structure, where the first element added will be the first to be removed, and where a new element is added to the back, much like a waiting line.

Linked List - A linear data structure, much like an array, that consists of nodes, where each node contains data as well as a link to the next node, but that does not use contiguous memory.

Dynamic Memory - Memory that is allocated as needed, and NOT contiguous (side-by-side), specifically during the implementation of a linked list style data structure, which also includes binary trees and graphs.

Node - An object linked to other objects, representing some entity in that data structure.

Non-Linear Data Structure - A data structure that does not occupy contiguous memory, such as a linked list, graph, or tree.

Parent Node - A node, including the root, which has one or more child nodes connected to it.

Binary Tree - A data structure that consists of nodes, with one root node at the base of the tree, and two nodes (left child and right child) extending from the root, and from each child node.

Children - The term used in trees to indicate a node that extends from another node, such as left child and right child in a binary tree.

Complete Tree - A tree in which there are no missing nodes when looking at each level of the tree. The lowest level of tree may not be completely full, but may not have any missing nodes. All other levels are full.

Depth - In tree data structure, expressed as the number of steps from the root of the tree to the farthest outlying node in the tree. Height is also used to mean the same thing.

External Node - A potential node in a tree, where currently either the left or right child pointer of a node is pointing to null, but potentially could reference another node.

Binary Search Tree - A tree in which nodes are inserted systematically in natural order, with the final property of each left child being less than or equal to its parent, and each right child being greater than its parent. (Does not preserve the order in which nodes were added.

Minimum Heap Tree - A tree in which every parent is lesser in value than both its children, which means that the root of the tree is least value in the tree.

Maximum Heap Tree - A tree in which every parent is greater in value than both its children, which means that the root of the tree is greatest value in the tree.

Full Tree - A tree in which every level of the tree is completely full, with no missing nodes.

Binary Tree Traversal - The process of systematically visiting every node in a tree once. The three most common traversals are: pre-order, in-order, and post-order.

Full Tree Traversal - A non-executable, visual approach to help determine the pre-order, in-order, or post-order traversal of a tree.

Pre-Order Traversal - The process of systematically visiting every node in a tree once, starting with the root node, proceeding to the left along the tree and accessing the node when the "left" side of the node is encountered.

In-Order Traversal - The process of systematically visiting every node in a tree once, starting at the root and proceeding left down the tree, accessing the first node encountered at its "center", proceeding likewise along the tree, accessing each node as encountered at the "center".

Post-Order Traversal - The process of systematically visiting every node in a tree once, starting at the root and proceeding left down the tree, accessing the first node encountered at its "right" side, proceeding likewise along the tree, accessing each node as encountered at its "right" side.

Internal Node - An existing node in a tree, either the root or any one of the children in the tree.

Internal Path Length - In tree processing, this is the sum of all the lengths from the root to the external nodes in a tree.

Leaf - A node in a tree data structure that has no children, and is at the end of a branch in a tree.

Tree Topology - A tree is widely used abstract data type (ADT) or data structure implementing this ADT that simulates a hierarchical tree structure, with a root value and subtrees of children with a parent node, represented as a set of linked nodes.

Complete Graph - A simple undirected graph in which every pair of distinct vertices is connected by a unique edge, in other words, every vertex is directly connected to every other vertex in the graph

Connected Graph - A graph where there exists a simple path from any vertex in the graph to any other vertex in the graph, even if it takes several "hops" to get there.

Directed Graph - A graph where an edge has a direction associated with it, for example, a plane flight that takes off in one location and arrives in another. The return flight would be considered a separate edge.

Edge - The connection in a graph between two vertices.

Graph - A data structure in programming which consists of a set of vertices (nodes) and edges (connections).

Undirected Graph - A graph that contains edges between vertices with no specific direction associated with any edge.

Array length - A value that represents the number of elements contained in an array. Often there is a process associated with an array that provides this value, such as list.length, or len(list).

Array Index - A value that indicates the position in the array of a particular value. The last element in a zero-indexed array would be the length of the array, minus 1.

Static Memory - Memory allocated to an array, which cannot grow or shrink once declared.

Row Major - An array where the two index values for any element are the row first, then the column.

Ragged Array - An array where the number of columns in each row may be different.

Head - A typical object variable identifier name used to reference, or point to, the first object in a linked list. The number one rule for processing linked lists is, 'Never let go of the head of the list!", otherwise all of the list is lost in memory. The number two rule when managing linked lists is, 'Always connect before you disconnect!'.

Root - The base level node in a tree; the node that has no parent.

Heapify - A process in Minimum Heap Trees where the new node is switched up until min heap state is achieved.

Vertex - An object in a graph.

Array: access, search, insert, delete - Access: O(1)
Search: O(n)
Insert: O(n)
Delete: O(n)

Array: memory - Memory: O(n)

Array: advantage, disadvantage - Advantage: quick insert, quick access if index is known
Disadvantage: slow search, slow delete, fixed size

Doubly Linked List: access, search, insert, delete - Access: O(n)
Search: O(n)
Insert: O(1)
Delete: O(1)

Doubly Linked List: memory - Memory: O(3n) (LL: O 2n)

Doubly Linked List: advantage, disadvantage - Advantage: quick insert, quick delete
Disadvantage: slow search

Binary Tree: advantage, disadvantage - Advantage: quick search, delete, insert
Disadvantage: complex deletion

# of elements in a binary tree - 2^(# of rows)

Heap: advantage, disadvantage - Advantage: quick insert, quick delete, access to largest item
Disadvantage: slow access to all other items

Heap Binary Tree: access, search, insert, delete, - Access: O(1)
Search: O(n)
Insert: O (lg n)
 Best case: sorted array
Delete: O (lg n)

Heap Binary Tree: max-heapify, build-max-heap, heap-sort - Max-heapify: O(n)
Build-max-heap: O(n)
Heap-sort: O(n lgn)

Heap Binary Tree: memory - Memory: O(n)

Heap Binary Tree: definition - A binary tree with two additional constraints:
Shape - complete tree
Heap property - max/min heap

Heap Binary Tree: advantage, disadvantage - Advantage: fast access, quick insert and delete
Disadvantage: slow search, efficient memory if full

Heap-sort: definition - Array size doesn't change, but heap size does
Take off bottom, reshuffle, repeat
Less efficient than max-heapify because it sorts from the top instead of the bottom

Binary Search Tree: search, insert, delete - Search: O(h) / balanced, O(lg n)
Insert: O(h) / balanced, O(lg n)
Delete: O(h) / balanced, O(lg n)

Binary Search Tree: max, min, successor, predecessor - Max: O(h)
Min: O(h)
Successor: O(h)
Predecessor: O(h)

Binary Search Tree: property - value[left[x]] <= value[x]
value[right[x] >= value[x]

Binary Search Tree: memory - Memory: O(n)

Binary Search Tree: advantage, disadvantage - Advantage: quick search, quick insert and delete
Disadvantage: slower than hash table

Height of binary tree - number of edges on the longest downward path between the root and a leaf

log(n) - complete binary tree

Node height - number of edges on the longest downward path between node and a leaf

Node depth - number of edges on the longest downward path between node and the root

Tries: advantage, disadvantage, memory - Advantage: faster search than a hash table, no collisions, no hash function needed, quick insert and delete
Disadvantage: can take up more space than a hash table
Memory: A LOT - need empty memory for every possibility

Tries: definition - Key-value storage; a kind of tree
Key -not- stored in node, value stored in node

Node variables : Boolean isNode, String value, array Edges

Heap Priority Queue: insert, max, extract max, increase value - Heap-insert: O(lg n)
Heap-maximum: O(1)
Heap-extract-max: O(lg n)
Heap-increase-value: O(lg n)

Priority Queue: advantage, disadvantage - Advantage: cheap way to sort priorities, sometimes you want to do things first
Disadvantage: worse at inserting and searching than BST

BST Priority Queue: insert, max, extract max, increase valye - BST-insert: O(h)
BST-maximum: O(h)
BST-extract-max: O(h)
BST-increase-value: O(h)

Red Black Tree: search, insert, delete - Search: O(lg n)
Insert: O(lg n)
Delete: O(lg n)

Red Black Tree: max, min, successor, predecessory - Max: O(lg n)
Min: O(lg n)
Successor: O(lg n)
Predecessor: O(lg n)

Red Black Tree: memory - Memory: O(n)

Red Black Tree: height - Height: O(lg n)

Red Black Tree: properties - 1. Every node is either red or black
2. The root is black
3. Every leaf (NIL) is black
4. If a node is red, then both its children are black
5. All simple paths from node to child leaves contain the same # of black nodes

Red Black Tree: advantage, disadvantage - Advantage: quick insert, delete, and search
Disadvantage: complex implementation

Black height - # of black nodes, including nil, on the path from given node to a leaf, not inclusive; any node with height h has black-height >= h/2

Dictionary: definition - A data structure that maps keys to values.

Direct-access table: definition - An element key k is stored in slot k.

Direct-access table: memory - Memory: O(n)

Direct-access table: search - Search: O(1)

Direct-access table: advantage, disadvantage - Advantage: quick search, quick insert and delete
Disadvantage: lots of wasted memory, keys must be unique, keys should be dense

Hash tables: memory - An implementation of a dictionary.
Memory: O(n)

Hash tables: search, insert, delete - Search: O(1-n)
Insert: O(1-n)
Delete: O(1-n)

Hash collision - two (or more) keys hash to same slot

Chaining - make each slot is the head of a linked list

ArrayLists: insert - Insert: often O(1), sometimes more

ArrayLists: advantages, disadvantages - Advantage: advantages of an array, plus does not run out of space
Disadvantage: inserting can be slower than an array

Stack: definition - Last in, first out.

Stack: advantage, disadvantage - Advantage: quick access
Disadvantage: inefficient with an array

Graph: definition - Finite set of vertices connected by edges, directed or not.

Graph: advantage, disadvantage - Advantage: best models real-world situations
Disadvantage: can be slow and complex

Adjacency list: memory - Memory: O(|V|+|E|)

Adjacency list: add vertex/edge, delete vertex/edge - Add vertex: O(1)
Add edge: O(1)
Delete vertex: O(|E|)
Delete edge: O(|E|)

Adjacency list: query for adjacency - Query for adjacency: O(|V|)

Adjacency matrix: memory - Memory: O(|V|^2)

Adjacency matrix: add vertex/edge, delete vertex/edge - Add vertex: O(|V|^2)
Add edge: O(1)
Delete vertex: O(|V|^2)
Delete edge: O(1)

Adjacency matrix: query for adjacency - Query for adjacency: O(1)

Breadth-first search - Visits the neighbor vertices before visiting the child vertices
Often used to find the shortest path from one vertex to another.
A queue is usually implemented

Depth-first search - Visits the child vertices before visiting the sibling vertices
A stack is usually implemented

Java stream: definition - a sequence of data

Exception handling - When there's an error, the program makes an error object and passes it off to the runtime system, which looks for a method in the call stack to handle it.

O(1) - O(1) = happens once

O(lg n) - happens for up to the height of a balanced tree

O(n) - happens for each element

Θ-notation - asymptotically tight bound

O-notation - asymptotic upper bound

Ω-notation - asymptotic lower bound
