# Digantara API

This project provides a set of APIs for performing various algorithms, including Binary Search, Quick Sort, and Breadth-First Search (BFS). The backend is built using Node.js and Express.

## Table of Contents

- [Installation](#installation)
- [Running the Backend](#running-the-backend)
- [API Endpoints](#api-endpoints)
  - [Binary Search](#binary-search)
  - [Quick Sort](#quick-sort)
  - [Breadth-First Search (BFS)](#breadth-first-search-bfs)
- [Accessing Logs](#accessing-logs)
- [Examples](#examples)
- [Using Postman](#using-postman)

## Installation

1. Clone the repository:
    ```sh
    git clone <repository-url>
    cd Digantara
    ```

2. Install dependencies for the backend:
    ```sh
    cd backend
    npm install
    ```

## Running the Backend

1. Navigate to the backend directory:
    ```sh
    cd c:\Users\jyoth\Digantara\backend
    ```

2. Start the backend server:
    ```sh
    node server.js
    ```

The backend server will start on port 3000 (or the port specified in the `PORT` environment variable).

## API Endpoints

### Binary Search

- **Endpoint:** `/binary_search`
- **Method:** `POST`
- **Description:** Performs a binary search on a sorted array to find the index of a target element.
- **Request Body:**
    ```json
    {
        "array": [1, 2, 3, 4, 5],
        "target": 3
    }
    ```
- **Response:**
    ```json
    {
        "index": 2
    }
    ```

### Quick Sort

- **Endpoint:** `/quick-sort`
- **Method:** `POST`
- **Description:** Sorts an array using the Quick Sort algorithm.
- **Request Body:**
    ```json
    {
        "array": [5, 3, 8, 4, 2]
    }
    ```
- **Response:**
    ```json
    {
        "sortedArray": [2, 3, 4, 5, 8]
    }
    ```

### Breadth-First Search (BFS)

- **Endpoint:** `/bfs`
- **Method:** `POST`
- **Description:** Performs a breadth-first search on a graph starting from a specified node.
- **Request Body:**
    ```json
    {
        "graph": {
            "A": ["B", "C"],
            "B": ["D", "E"],
            "C": ["F"],
            "D": [],
            "E": ["F"],
            "F": []
        },
        "start": "A"
    }
    ```
- **Response:**
    ```json
    {
        "bfsTraversal": ["A", "B", "C", "D", "E", "F"]
    }
    ```

## Accessing Logs

API calls are logged to a `logs.json` file in the backend directory. Each log entry includes the algorithm used, the input provided, the output produced, and the timestamp of the API call.

## Examples

### Binary Search Example

1. Start the backend server:
    ```sh
    cd c:\Users\jyoth\Digantara\backend
    node server.js
    ```

2. Open Postman and create a new request.
3. Set the request type to `POST`.
4. Set the URL to `http://localhost:3000/binary_search`.
5. Go to the `Body` tab and select `raw` and `JSON` from the dropdown.
6. Enter the following JSON in the body:
    ```json
    {
        "array": [1, 2, 3, 4, 5],
        "target": 3
    }
    ```
7. Click `Send`.
8. You should receive a response with the index of the target element:
    ```json
    {
        "index": 2
    }
    ```

### Quick Sort Example

1. Start the backend server:
    ```sh
    cd c:\Users\jyoth\Digantara\backend
    node server.js
    ```

2. Open Postman and create a new request.
3. Set the request type to `POST`.
4. Set the URL to `http://localhost:3000/quick-sort`.
5. Go to the `Body` tab and select `raw` and `JSON` from the dropdown.
6. Enter the following JSON in the body:
    ```json
    {
        "array": [5, 3, 8, 4, 2]
    }
    ```
7. Click `Send`.
8. You should receive a response with the sorted array:
    ```json
    {
        "sortedArray": [2, 3, 4, 5, 8]
    }
    ```

### Breadth-First Search (BFS) Example

1. Start the backend server:
    ```sh
    cd c:\Users\jyoth\Digantara\backend
    node server.js
    ```

2. Open Postman and create a new request.
3. Set the request type to `POST`.
4. Set the URL to `http://localhost:3000/bfs`.
5. Go to the `Body` tab and select `raw` and `JSON` from the dropdown.
6. Enter the following JSON in the body:
    ```json
    {
        "graph": {
            "A": ["B", "C"],
            "B": ["D", "E"],
            "C": ["F"],
            "D": [],
            "E": ["F"],
            "F": []
        },
        "start": "A"
    }
    ```
7. Click `Send`.
8. You should receive a response with the BFS traversal:
    ```json
    {
        "bfsTraversal": ["A", "B", "C", "D", "E", "F"]
    }
    ```

## Notes

- Ensure that the backend server is running before sending requests to the API endpoints.
- Logs of API calls can be found in the `logs.json` file in the backend directory.

This `README.md` file provides detailed instructions on how to build, run, and use your API, including examples and information on accessing the logs.
