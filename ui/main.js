//Counter code
function modify_qty(val) {
    var qty = document.getElementById('qty').value;
    var new_qty = parseInt(qty,10) + val;
    
    if (new_qty < 0) {
        new_qty = 0;
    }
    
    document.getElementById('qty').value = new_qty;
    return new_qty;
}
   
    // Make the request
    request.open('GET', 'http://http://shivanginldhs.imad.hasura-app.io/', true);
    request.send(null);

};