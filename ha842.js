function elementsByTagName(node, string) {
    
    var tag = string.toUpperCase();
    var results = [];
    
    function recSearch( node1 ) {
        for ( var c in node1.childNodes ) {
            var child = node1.childNodes[c];
            
            if( child.nodeType == document.ELEMENT_NODE ) {
                if( child.nodeName == tag ) {
                    results.push(child);
                }
            recSearch( child, tag );
            }
        }
    }
    recSearch( node );
    
    return results;
}