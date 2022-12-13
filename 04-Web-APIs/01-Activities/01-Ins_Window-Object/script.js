// Logs window object using this
console.log("this: ");
console.log(this);

// Logs the document object
console.log("window.document: ");
console.log(window.document);

// Logs body of document
console.log("document.body: ");
console.log( document.body);




function z() {
    let x = parseInt(prompt("number?"));
    let y = parseInt(prompt("another number?"));
    if (x > y) { console.log(x + "is the greater value") 
} else {console.log(y + " is the greater value") 
}
}

z();
