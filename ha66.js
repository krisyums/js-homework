// Dies ist ein beispielhaftes Personen-Array, welches den Aufbau verdeutlicht
// Es enthält weitere Arrays mit [name, birthYear, status, gender].
const persons = [
    ['Max', 1967, 2, 'm'],
    ['Maria', 1990, 1, 'f'],
    ['Meik', 1982, 2, 'm'],
    ['Mareike', 1985, 3, 'f'],
    ['Mervin', 1971, 1, 'm'],
    ['Magdalena', 1979, 1, 'f'],
];

// Diese Funktion filtert das übergebene Array nach dem Geschlecht ('m' | 'f')
// Zum Beispiel: filterGender(persons, 'f')
// Bsp-Rückgabe:
// [ [ 'Maria', 1990, 1, 'f' ],
// [ 'Mareike', 1995, 3, 'f' ],
// [ 'Magdalena', 1979, 1, 'f' ] ]
function filterGender(personsArray, gender) {
    var res = []; 
    for(let i=0 ;i < personsArray.length; i++) {
        if(personsArray[i][3] == gender) {
            res.push(personsArray[i]);
        }
    }
    return res;
}

// Diese Funktion berechnet das Alter jeder Person
// Zum Beispiel: getAge(persons)
// Bsp-Rückgabe:
// [ [ 'Max', 50 ],
// [ 'Maria', 27 ],
// [ 'Meik', 35 ],
// [ 'Mareike', 22 ],
// [ 'Mervin', 46 ],
// [ 'Magdalena', 38 ] ]
function getAge(personsArray) {
    var res = [];
    for(let i=0 ;i < personsArray.length; i++) {
        var age = [];
        age = personsArray[i].slice(0,2);
        age[1] = 2017 - age[1];
        res.push(age);
    }
    return res;
}

// Diese Funktion berechnet den Status (Alter * Statuszahl) jeder Person
// und sortiert das Array (höchster Status zuerst, bei
// gleichem Status: nach Namen alphabetisch)
// für String-Vergleiche in der Mozilla Referenz nachschauen
// Zum Beispiel: getSortedStatus(persons)
// Bsp-Rückgabe:
// [ [ 'Max', 100 ],
// [ 'Mareike', 96 ],
// [ 'Meik', 70 ],
// [ 'Mervin', 46 ],
// [ 'Magdalena', 38 ],
// [ 'Maria', 27 ] ]
function getSortedStatus(personsArray) {
    var res = [];
    
    for(let i=0; i < personsArray.length; i++) {
        var temp = [];
        var arr = [];
        temp = personsArray[i].slice(0,3);
        temp[1] = 2017 - temp[1];
        temp[2] = temp[2] * temp[1];
        arr = temp.slice(0,1).concat(temp.slice(2,3));
        res.push(arr);
    }
    
    res.sort((a,b) => a[0].localeCompare(b[0]));

    for(let i=1; i < personsArray.length; i++) {
        var j = i;
        while(j > 0 && (res[j-1][1] > res[j][1])) {
            temp = res[j-1];
            res[j-1] = res[j];
            res[j] = temp;
            j--;
        }
    }
    return res;
}

// Diese Funktion gibt ein Array mit den Namen aller Personen zurück
// Zum Beispiel: getNames(persons)
// Bsp-Rückgabe:
// [ 'Max', 'Maria', 'Meik', 'Mareike', 'Mervin', 'Magdalena' ]
function getNames(personsArray) {
    var res = [];
    for(let i=0; i < personsArray.length; i++) {
        res.push(personsArray[i][0]);
    }
    return res;
}

// Diese Funktion gibt das addierte Alter aller Personen zurück
// Zum Beispiel: getAggregatedAge(persons)
// Bsp-Rückgabe:
// 228
function getAggregatedAge(personsArray) {
    var res = getAge(personsArray).map(A => A[1]).reduce((acc, cur) => acc + cur, 0);
    return res;
}

// Diese Funktion gibt ein Objekt zurück, welches zwei Eigenschaften hat: 'Woman' und 'Men'
// Der Wert entspricht der Anzahl der Frauen und Männer im übergebenen Array
// Zum Beispiel: getAmount(persons)
// Bsp-Rückgabe:
// { Woman: 3, Men: 3 }
function getAmount(personsArray) {
    filterGender(personsArray, 'm').length;
    filterGender(personsArray, 'f').length;
    
    var res = {"Women": filterGender(personsArray, 'm').length,
                "Men" : filterGender(personsArray, 'f').length};
    return res;
}

/*console.log(getAmount(persons));
console.log("------------");
console.log(getAggregatedAge(persons));
console.log("------------");
console.log(getNames(persons));
console.log("------------");
console.log(getAge(persons));
console.log("------------");
console.log(filterGender(persons, 'm'));
console.log("------------");
console.log(filterGender(persons, 'f'));
console.log("------------");*/
console.log(getSortedStatus(persons));