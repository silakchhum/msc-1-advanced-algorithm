/**
 * Binary Search Tree Node
 */
class TreeNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

/**
 * Binary Search Tree Implementation
 */
class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    /**
     * Insert a value into the BST
     */
    insert(value) {
        const newNode = new TreeNode(value);
        
        if (this.root === null) {
            this.root = newNode;
            return true;
        }
        
        return this._insertRecursive(this.root, value);
    }

    _insertRecursive(node, value) {
        if (value === node.value) {
            return false; // Duplicate value
        }
        
        if (value < node.value) {
            if (node.left === null) {
                node.left = new TreeNode(value);
                return true;
            }
            return this._insertRecursive(node.left, value);
        } else {
            if (node.right === null) {
                node.right = new TreeNode(value);
                return true;
            }
            return this._insertRecursive(node.right, value);
        }
    }

    /**
     * Delete a value from the BST
     */
    delete(value) {
        this.root = this._deleteRecursive(this.root, value);
    }

    _deleteRecursive(node, value) {
        if (node === null) {
            return null;
        }

        if (value < node.value) {
            node.left = this._deleteRecursive(node.left, value);
        } else if (value > node.value) {
            node.right = this._deleteRecursive(node.right, value);
        } else {
            // Node to be deleted found
            
            // Case 1: Node with no children
            if (node.left === null && node.right === null) {
                return null;
            }
            
            // Case 2: Node with one child
            if (node.left === null) {
                return node.right;
            }
            if (node.right === null) {
                return node.left;
            }
            
            // Case 3: Node with two children
            // Get inorder successor (minimum in right subtree)
            const minNode = this._findMin(node.right);
            node.value = minNode.value;
            node.right = this._deleteRecursive(node.right, minNode.value);
        }
        
        return node;
    }

    _findMin(node) {
        while (node.left !== null) {
            node = node.left;
        }
        return node;
    }

    /**
     * Search for a value in the BST
     */
    search(value) {
        return this._searchRecursive(this.root, value);
    }

    _searchRecursive(node, value) {
        if (node === null) {
            return false;
        }
        
        if (value === node.value) {
            return true;
        }
        
        if (value < node.value) {
            return this._searchRecursive(node.left, value);
        }
        
        return this._searchRecursive(node.right, value);
    }

    /**
     * Inorder traversal (Left, Root, Right)
     * Returns sorted array of values
     */
    inorderTraversal() {
        const result = [];
        this._inorderRecursive(this.root, result);
        return result;
    }

    _inorderRecursive(node, result) {
        if (node !== null) {
            this._inorderRecursive(node.left, result);
            result.push(node.value);
            this._inorderRecursive(node.right, result);
        }
    }

    /**
     * Get the height of the tree
     */
    getHeight(node = this.root) {
        if (node === null) {
            return 0;
        }
        
        const leftHeight = this.getHeight(node.left);
        const rightHeight = this.getHeight(node.right);
        
        return 1 + Math.max(leftHeight, rightHeight);
    }

    /**
     * Count total nodes in the tree
     */
    countNodes(node = this.root) {
        if (node === null) {
            return 0;
        }
        
        return 1 + this.countNodes(node.left) + this.countNodes(node.right);
    }

    /**
     * Clear all nodes from the tree
     */
    clear() {
        this.root = null;
    }

    /**
     * Check if tree is empty
     */
    isEmpty() {
        return this.root === null;
    }
}
