/**
 * 207. Course Schedule [MEDIUM: Graphs]
 * Time: O(V + E) | BFS ensures we visit each vertex and edge exactly once
 * Space: O(V + E) | Extra space needed for the adjacency list and queue
 *
 * This problem is equivalent to finding if a cycle exists in a directed graph.
 * If a cycle exists, no topological ordering exists, and therefore it will be
 * impossible to take all courses.
 *
 * KAHN's Algorithm for Topological Sorting is a method used to order the vertices of a directed graph in a
 * linear order such that for every directed edge from vertex A to vertex B, A comes before B in the order.
 *
 * @param {number} numCourses - Total number of courses (nodes in the graph)
 * @param {number[][]} prerequisites - List of prerequisite pairs [a, b] meaning "b" must be taken before "a"
 * @return {boolean} - Returns true if all courses can be completed, otherwise false
 */
export const canFinish = (numCourses, prerequisites) => {
  // Initialize adjacency list to represent the graph and an array to track in-degrees (prerequisites count)
  const courseAdjList = new Map();
  const inDegree = new Array(numCourses).fill(0);

  // Build the graph: Populate adjacency list and in-degree array based on prerequisites
  prerequisites.forEach(([course, preq]) => {
    if (!courseAdjList.has(preq)) courseAdjList.set(preq, []); // Ensure all courses accounted for, even if they don't have prerequisites
    courseAdjList.get(preq).push(course);
    inDegree[course]++; // Increment in-degree for each course with a prerequisite
  });

  // Start queue with no prerequisites courses (in-degree of 0)
  const queue = [];
  for (let i = 0; i < numCourses; i++) {
    if (!inDegree[i]) {
      queue.push(i);
    }
  }

  // Process courses in topological order using BFS
  let coursesTaken = 0; // Counter to track the number of courses that can be completed
  while (queue.length) {
    const course = queue.shift();
    coursesTaken++; // Count this course as completed

    // Reduce the in-degree of each dependent course (courses that require this one)
    if (courseAdjList.has(course)) {
      for (const nextCourse of courseAdjList.get(course)) {
        inDegree[nextCourse]--; // Decrement in-degree as the prerequisite is completed
        // If in-degree of next course is 0, it can now be taken, so add to queue
        if (inDegree[nextCourse] === 0) {
          queue.push(nextCourse);
        }
      }
    }
  }

  // If all courses can be taken (no cycle), return true; otherwise, return false
  return coursesTaken === numCourses;
};
