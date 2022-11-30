//let array = [8, 7, 4, 5, 2, 6, 9, 3, 11, 1]        
let array = [8, 10, 27, 12, 47, 49, 53, 46, 75, 80, 26]         
let arrayCopy = [...array]
let r = [];

function Gparent(j) {
  while(j & 1 === r[Math.floor(j/2)]) {
    j = Math.floor(j/2)
  }
  while(!(j & 1) && j > 1) {
    j = Math.floor(j/2)
  }
  return Math.floor(j/2) 
}
  
function Merge(i, j) {
  if(arrayCopy[j] < arrayCopy[i])
    {
    	[arrayCopy[i], arrayCopy[j]] = [arrayCopy[j], arrayCopy[i]]
      r[j] = 1-r[j]
      return false
    }
  return true
 }

//main app
for(let i = 0; i < array.length; i ++) {
	r[i] = 0
}

for(let i = 1; array.length - i > 0; i++) {
  Merge(Gparent(array.length - i), array.length - i)
}  
//end main
console.table(arrayCopy)
console.log(r)