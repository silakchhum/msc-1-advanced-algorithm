# Binary Search Tree GUI Visualizer

A beautiful web-based graphical user interface for visualizing and interacting with a Binary Search Tree (BST). Built with HTML, **Tailwind CSS**, and JavaScript.

## Features

- **Insertion**: Add values to the BST
- **Deletion**: Remove values from the BST
- **Traversal**: Display inorder traversal of the tree
- **Search**: Find if a value exists in the tree (with highlight animation)
- **Visualization**: Interactive tree visualization with SVG graphics
- **Statistics**: Real-time display of node count and tree height
- **Responsive Design**: Works on desktop and mobile devices

## Requirements

- A modern web browser (Chrome, Firefox, Safari, Edge)
- No installation required!

## How to Run

Simply open the `index.html` file in your web browser:

### Option 1: Double-click
- Double-click on `index.html` in your file explorer

### Option 2: Using a local server (recommended)
```bash
# Using Python 3
python3 -m http.server 8000

# Using Python 2
python -m SimpleHTTPServer 8000

# Using Node.js (if you have npx)
npx http-server
```

Then open your browser and navigate to `http://localhost:8000`

## Usage

### Inserting Values
1. Enter an integer value in the "Value" field
2. Click the "Insert" button or press Enter
3. The tree will be updated and displayed visually

### Deleting Values
1. Enter the value you want to delete
2. Click the "Delete" button
3. The tree will be updated automatically

### Searching Values
1. Enter the value you want to search for
2. Click the "Search" button
3. If found, the node will be highlighted in yellow for 2 seconds

### Inorder Traversal
- The inorder traversal is displayed automatically below the control buttons
- Updates automatically after each insertion or deletion
- Shows values in ascending order (left → root → right)

### Clear Tree
- Click "Clear All" to remove all nodes from the tree
- Requires confirmation before clearing

## Example Usage

Try inserting these values in order: 50, 30, 70, 20, 40, 60, 80

The tree structure will be:
```
       50
      /  \
    30    70
   / \    / \
  20 40  60 80
```

Inorder traversal will show: 20 → 30 → 40 → 50 → 60 → 70 → 80

## Features Explained

### Binary Search Tree Properties
- Left subtree contains values less than the parent node
- Right subtree contains values greater than the parent node
- No duplicate values allowed
- Inorder traversal produces sorted output

### Visual Representation
- Green circles represent nodes
- Gray lines connect parent and child nodes
- Node spacing adjusts based on tree height
- Smooth animations and hover effects
- Yellow highlight for search results

## Technologies Used

- **HTML5**: Structure and SVG graphics
- **Tailwind CSS**: Utility-first CSS framework for styling
- **JavaScript (ES6+)**: BST logic and DOM manipulation
- **SVG**: Dynamic tree visualization

## Browser Compatibility

Works on all modern browsers:
- Chrome/Edge (recommended)
- Firefox
- Safari
- Opera

## File Structure

```
mini-project/
├── index.html      # Main HTML structure
├── styles.css      # Styling and animations
├── bst.js          # Binary Search Tree implementation
├── app.js          # Application logic and UI handlers
└── README.md       # This file
```

## Implementation Details

### JavaScript Classes
- `TreeNode`: Represents a single node in the BST
- `BinarySearchTree`: Implements BST operations (insert, delete, search, traversal)

### BST Operations
- **Insert**: O(h) time complexity, where h is height
- **Delete**: O(h) time complexity
- **Search**: O(h) time complexity
- **Inorder Traversal**: O(n) time complexity

## Troubleshooting

### Tree doesn't display
- Make sure JavaScript is enabled in your browser
- Try refreshing the page
- Check browser console for errors (F12)

### Visualization looks odd
- Resize the browser window
- Clear the tree and start fresh
- Try with fewer nodes initially

## Features to Try

1. **Build a balanced tree**: Insert values in this order: 50, 25, 75, 12, 37, 62, 87
2. **Create a skewed tree**: Insert values in ascending order: 1, 2, 3, 4, 5
3. **Test deletion**: Build a tree and delete the root node
4. **Search animation**: Insert several values and search for one to see the highlight effect

## Author

Advanced Algorithms Mini-Project - Binary Search Tree Visualizer
