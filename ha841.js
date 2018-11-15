var MOUNTAINS = [
  {name: "Kilimanjaro", height: 5895, country: "Tanzania"},
  {name: "Everest", height: 8848, country: "Nepal"},
  {name: "Mount Fuji", height: 3776, country: "Japan"},
  {name: "Mont Blanc", height: 4808, country: "Italy/France"},
  {name: "Vaalserberg", height: 323, country: "Netherlands"},
  {name: "Denali", height: 6168, country: "United States"},
  {name: "Popocatepetl", height: 5465, country: "Mexico"}
];

function buildTable( data ) {
    // create a table 
    var table = document.createElement("table");
    // create headers
    var hrow = document.createElement("tr");
    var titles = Object.keys( data[0] );
    
    for ( var i in titles ) {
        var hcol = document.createElement("th");
        hcol.textContent = titles[i];
        hrow.appendChild( hcol );
    }
    table.appendChild( hrow );
    
    // create rows and columns with content
    for( var k=0 ; k < data.length ; k++ ) {
        var row = document.createElement("tr");
        
        for ( var j in titles ) {
            var col = document.createElement("td");
            
            col.textContent = data[k][titles[j]];
            if( typeof( data[k][titles[j]] == "number" )) {
                col.style.textAlign = "right";
            }
            row.appendChild( col );
        }
        table.appendChild( row );
    }
    
    return table;
}
document.body.appendChild( buildTable( MOUNTAINS ) );