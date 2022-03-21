let cats = ['Milo', 'Otis', 'Garfield']

function destructivelyAppendCat (name) {
    cats.push(name);
}


function destructivelyPrependCat (name) {
    cats.unshift(name);
  }
  
  function destructivelyRemoveLastCat () {
    cats.pop();
  }
  
  function destructivelyRemoveFirstCat () {
    cats.shift();
  }
  
  function appendCat (name) {
    return [...cats, name];
  }
  
  function prependCat (name) {
    return [name, ...cats];
  }
  
  function removeFirstCat () {
    return cats.slice(1);
  }
  
  function removeLastCat () {
    return cats.slice(0, cats.length - 1);
  }




// describe('destructivelyAppendCat(name)', function () {
//     it('appends a cat to the end of the cats array', function () {
//       destructivelyAppendCat('Ralph');

//       expect(cats).to.have.ordered.members(["Milo", "Otis", "Garfield", "Ralph"]);
//     });
//   });