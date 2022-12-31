const dfs = (node) => {
    if (!node) return;
    [node.left, node.right] = [node.right, node.left]
    dfs(node.left);
    dfs(node.right);
}
const invertTree = function(root) {
    if (!root) return root;
    dfs(root);
    return root;
};
