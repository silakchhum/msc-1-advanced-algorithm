/**
 * BST Visualizer Application
 */

// Initialize BST
const bst = new BinarySearchTree();

// DOM Elements
const valueInput = document.getElementById('valueInput');
const insertBtn = document.getElementById('insertBtn');
const deleteBtn = document.getElementById('deleteBtn');
const searchBtn = document.getElementById('searchBtn');
const clearBtn = document.getElementById('clearBtn');
const traversalResult = document.getElementById('traversalResult');
const infoMessage = document.getElementById('infoMessage');
const treeSvg = document.getElementById('treeSvg');
const nodeCount = document.getElementById('nodeCount');
const treeHeight = document.getElementById('treeHeight');

// Event Listeners
insertBtn.addEventListener('click', handleInsert);
deleteBtn.addEventListener('click', handleDelete);
searchBtn.addEventListener('click', handleSearch);
clearBtn.addEventListener('click', handleClear);
valueInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        handleInsert();
    }
});

/**
 * Handle Insert Operation
 */
function handleInsert() {
    const value = parseInt(valueInput.value);
    
    if (isNaN(value)) {
        showMessage('Please enter a valid integer!', 'error');
        return;
    }
    
    if (bst.search(value)) {
        showMessage(`Value ${value} already exists in the tree!`, 'warning');
        return;
    }
    
    bst.insert(value);
    valueInput.value = '';
    updateDisplay();
    showMessage(`Inserted: ${value}`, 'success');
}

/**
 * Handle Delete Operation
 */
function handleDelete() {
    const value = parseInt(valueInput.value);
    
    if (isNaN(value)) {
        showMessage('Please enter a valid integer!', 'error');
        return;
    }
    
    if (!bst.search(value)) {
        showMessage(`Value ${value} not found in the tree!`, 'warning');
        return;
    }
    
    bst.delete(value);
    valueInput.value = '';
    updateDisplay();
    showMessage(`Deleted: ${value}`, 'error');
}

/**
 * Handle Search Operation
 */
function handleSearch() {
    const value = parseInt(valueInput.value);
    
    if (isNaN(value)) {
        showMessage('Please enter a valid integer!', 'error');
        return;
    }
    
    const found = bst.search(value);
    
    if (found) {
        showMessage(`Found: ${value}`, 'success');
        highlightNode(value);
    } else {
        showMessage(`Not found: ${value}`, 'warning');
    }
}

/**
 * Handle Clear Operation
 */
function handleClear() {
    if (bst.isEmpty()) {
        showMessage('Tree is already empty!', 'warning');
        return;
    }
    
    if (confirm('Are you sure you want to clear the entire tree?')) {
        bst.clear();
        updateDisplay();
        showMessage('Tree cleared', 'success');
    }
}

/**
 * Update all display elements
 */
function updateDisplay() {
    updateTraversal();
    updateVisualization();
    updateStats();
}

/**
 * Update inorder traversal display
 */
function updateTraversal() {
    const inorder = bst.inorderTraversal();
    
    if (inorder.length === 0) {
        traversalResult.textContent = 'Empty';
    } else {
        traversalResult.textContent = inorder.join(' → ');
    }
}

/**
 * Update tree statistics
 */
function updateStats() {
    nodeCount.textContent = bst.countNodes();
    treeHeight.textContent = bst.getHeight();
}

/**
 * Show message to user
 */
function showMessage(message, type = 'info') {
    infoMessage.textContent = message;
    infoMessage.className = 'px-4 py-3 rounded-lg text-center font-medium';
    
    if (type === 'success') {
        infoMessage.className += ' bg-green-50 text-green-700';
    } else if (type === 'error') {
        infoMessage.className += ' bg-red-50 text-red-700';
    } else if (type === 'warning') {
        infoMessage.className += ' bg-orange-50 text-orange-700';
    } else {
        infoMessage.className += ' bg-blue-50 text-blue-700';
    }
}

/**
 * Update tree visualization
 */
function updateVisualization() {
    // Clear existing SVG content
    treeSvg.innerHTML = '';
    
    if (bst.isEmpty()) {
        const text = document.createElementNS('http://www.w3.org/2000/svg', 'text');
        text.setAttribute('x', '50%');
        text.setAttribute('y', '50%');
        text.setAttribute('text-anchor', 'middle');
        text.setAttribute('fill', '#999');
        text.setAttribute('font-size', '20');
        text.textContent = 'Tree is empty';
        treeSvg.appendChild(text);
        return;
    }
    
    const svgWidth = treeSvg.clientWidth;
    const svgHeight = 500;
    
    const height = bst.getHeight();
    const horizontalSpacing = 300;
    const verticalSpacing = 300;
    
    drawTree(bst.root, svgWidth / 2, 40, horizontalSpacing, verticalSpacing, 0);
}

/**
 * Recursively draw tree nodes and edges
 */
function drawTree(node, x, y, hSpacing, vSpacing, level) {
    if (node === null) {
        return;
    }
    
    const radius = 25;
    
    // Draw left subtree
    if (node.left) {
        const xLeft = x - hSpacing / Math.pow(2, level + 1);
        const yLeft = y + vSpacing;
        
        // Draw line to left child
        const line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
        line.setAttribute('x1', x);
        line.setAttribute('y1', y + radius);
        line.setAttribute('x2', xLeft);
        line.setAttribute('y2', yLeft - radius);
        line.setAttribute('class', 'tree-line');
        treeSvg.appendChild(line);
        
        drawTree(node.left, xLeft, yLeft, hSpacing, vSpacing, level + 1);
    }
    
    // Draw right subtree
    if (node.right) {
        const xRight = x + hSpacing / Math.pow(2, level + 1);
        const yRight = y + vSpacing;
        
        // Draw line to right child
        const line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
        line.setAttribute('x1', x);
        line.setAttribute('y1', y + radius);
        line.setAttribute('x2', xRight);
        line.setAttribute('y2', yRight - radius);
        line.setAttribute('class', 'tree-line');
        treeSvg.appendChild(line);
        
        drawTree(node.right, xRight, yRight, hSpacing, vSpacing, level + 1);
    }
    
    // Draw node circle
    const circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
    circle.setAttribute('cx', x);
    circle.setAttribute('cy', y);
    circle.setAttribute('r', radius);
    circle.setAttribute('class', 'node-circle');
    circle.setAttribute('data-value', node.value);
    treeSvg.appendChild(circle);
    
    // Draw node text
    const text = document.createElementNS('http://www.w3.org/2000/svg', 'text');
    text.setAttribute('x', x);
    text.setAttribute('y', y);
    text.setAttribute('class', 'node-text');
    text.textContent = node.value;
    treeSvg.appendChild(text);
}

/**
 * Highlight a specific node temporarily
 */
function highlightNode(value) {
    const circles = treeSvg.querySelectorAll('.node-circle');
    
    circles.forEach(circle => {
        if (parseInt(circle.getAttribute('data-value')) === value) {
            circle.classList.add('highlight');
            
            setTimeout(() => {
                circle.classList.remove('highlight');
            }, 2000);
        }
    });
}

// Initial display update
updateDisplay();
