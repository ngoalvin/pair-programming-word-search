
let counter = 0;
let string = '';
const blah = function(matrix) {
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      string += matrix[i][j];
      let x = i;
      let y = j;
      while (y !== i) {
        x++;
        y--;
        string += matrix[x][y];
      }
      
    } 
  }
}

// ['A', 'W', 'C'],  ***ROW1
// ['S', 'E', 'I'],  ***ROW2
// ['Y', 'F', 'C'],
// ['N', 'H', 'C']



// ], 'FRANK')


//DIAGONAL FROM TOP RIGHT TO BOTTOM LEFT  
//EXPCTED RESULT = ['A','WS','CEY','IF','C']
//...foreach n in matrix[0]
//'A'  ----   'matrix[0][0]',    n = 0
//'WS' ---- matrix[0][1] + matrix[1][0]' 'WS' n = 1
//'CEY' ---- matrix[0][2] + matrix[1][1] + matrix [2][0]'  n = 2 ... 

// matrix[1][2] + matrix[2][1] + matrix[3][0]     'IFN'
// matrix[2][2] + matrix[3][1]                  'CH'
// matrix[3][2]                                 'C'



// if j = 2 , j - 1, i + 1, till j = 0


// let string = '';
// const blah = function(matrix) {
//   for (let i = 0; i < matrix.length; i++) {
//    // matrix[i][j]
//     for (let j = 0; j < matrix[i].length; j++) {
//       if (j === i) {
//         //run if string is === to word 
            // string = ''
//       } else {
//         //  string += matrix[i - 1][ j + 1]
//       }
//     } 
//   }
// }

//loop first array
//loop second array
//if the index of the second array is same as first array
//compare the string to word
//if not then add matrix[i - i][j + 1]