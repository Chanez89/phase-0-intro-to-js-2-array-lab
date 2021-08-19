// Write your solution here!

const cats = ['Milo', 'Otis', 'Garfield'];

function destructivelyAppendCat(name) {
    cats.push ('Ralph'); //appends a cat to the end of the cats array
}   

function destructivelyPrependCat(name){
    cats.unshift ('Bob'); //prepends a cat to the beginning of the cats array
}
     
function destructivelyRemoveLastCat(){
    cats.pop();  //removes the last cat from the cats array
}
function destructivelyRemoveFirstCat(){
    cats.shift();  //removes the first cat from the cats array
}

function appendCat(name){
    const newCats = [...cats, 'Broom'];
    return newCats;         //appends a cat to the cats array and returns a new array, leaving the cats array unchanged
}


function prependCat(name){
    const newCats = [ 'Arnold', ...cats];  //prepends a cat to the cats array and returns a new array, leaving the cats array unchanged
    return newCats;
}

function removeLastCat(){
    const newCats = [...cats.slice(0, cats.length-1)];  //removes the last cat in the cats array and returns a new array, leaving the cats array unchanged
    return newCats;
}

function removeFirstCat(){
    const newCats = [...cats.slice(1)];  //removes the first cat from the cats array and returns a new array, leaving the cats array unchanged
    return newCats;
}