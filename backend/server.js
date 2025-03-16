const express = require('express'); 
const app = express(); 
const fs = require('fs');
const PORT = process.env.PORT || 3000; 

app.use(express.json()); // Middleware to parse JSON bodies

// Function to log API calls to a file
const logApiCall = (algorithm, input, output) => {
    const log = {
        algorithm, 
        input,
        output, 
        timestamp: new Date() 
    };
    // Read the existing logs from the logs.json file
    fs.readFile("logs.json", (err, data) => {
        let logs = [];
        if (!err && data.length > 0) {
            logs = JSON.parse(data); // Parse the existing logs
        }
        logs.push(log); // Add the new log entry
        // Write the updated logs back to the logs.json file
        fs.writeFile("logs.json", JSON.stringify(logs, null, 2), (err) => {
            if (err) console.error("Error writing log file:", err);
        });
    });
}

// Root endpoint
app.get("/", (req, res) => {
    res.send("Welcome to the Digantara API"); // Send a welcome message
});

// Function to check if an array is sorted
const isSorted = (array) => {
    for (let i = 1; i < array.length; i++) {
        if (array[i] < array[i - 1]) {
            return false; // Return false if the array is not sorted
        }
    }
    return true; // Return true if the array is sorted
};

// Binary Search endpoint
app.post("/binary_search", (req, res) => {
    const { array, target } = req.body; // Extract array and target from the request body
    if (!Array.isArray(array) || typeof target !== "number") {
        res.status(400).send("Invalid input"); // Send an error response if the input is invalid
        return;
    }
    if (!isSorted(array)) {
        res.status(400).send("Array must be sorted for binary search"); // Send an error response if the array is not sorted
        return;
    }
    let low = 0, high = array.length - 1;
    while (low <= high) {
        const mid = Math.floor((low + high) / 2); // Calculate the middle index
        if (array[mid] === target) {
            logApiCall("Binary Search", req.body, mid); // Log the API call
            return res.json({ index: mid }); // Send the index of the target element
        } else if (array[mid] < target) {
            low = mid + 1; // Adjust the lower bound
        } else {
            high = mid - 1; // Adjust the upper bound
        }
    }
    logApiCall("Binary Search", req.body, -1); // Log the API call with -1 if the element is not found
    res.json({ index: -1, message: "Element not found" }); // Send a response indicating the element was not found
});

// Quick Sort endpoint
app.post("/quick-sort", (req, res) => {
    const { array } = req.body; // Extract array from the request body
    if (!Array.isArray(array)) {
        return res.status(400).json({ error: "Invalid input" }); // Send an error response if the input is invalid
    }

    // Quick Sort function
    const quickSort = (arr) => {
        if (arr.length <= 1) return arr; // Base case: return the array if it has 1 or 0 elements
        const pivot = arr[arr.length - 1]; // Choose the last element as the pivot
        const left = arr.filter((num) => num < pivot); // Elements less than the pivot
        const right = arr.filter((num) => num > pivot); // Elements greater than the pivot
        return [...quickSort(left), pivot, ...quickSort(right)]; // Recursively sort the left and right subarrays and concatenate them with the pivot
    };

    const sortedArray = quickSort(array); // Sort the array using Quick Sort
    logApiCall("Quick Sort", array, sortedArray); // Log the API call
    return res.json({ sortedArray }); // Send the sorted array as the response
});

// BFS (Breadth First Search) endpoint
app.post("/bfs", (req, res) => {
    const { graph, start } = req.body; // Extract graph and start node from the request body
    if (typeof graph !== "object" || !graph[start]) {
        return res.status(400).json({ error: "Invalid graph input" }); // Send an error response if the input is invalid
    }

    // BFS function
    const bfs = (graph, start) => {
        let visited = [], queue = [start];
        while (queue.length) {
            const node = queue.shift(); // Dequeue a node
            if (!visited.includes(node)) {
                visited.push(node); // Mark the node as visited
                queue.push(...(graph[node] || [])); // Enqueue all adjacent nodes
            }
        }
        return visited; // Return the list of visited nodes
    };

    const result = bfs(graph, start); // Perform BFS on the graph
    logApiCall("BFS", req.body, result); // Log the API call
    return res.json({ bfsTraversal: result }); // Send the BFS traversal as the response
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`); // Log a message indicating the server is running
});