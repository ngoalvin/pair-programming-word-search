const convertVertical = letters => {
  let vertical = [];      
    for (const row in letters[0]) { 
      let string = '';
      for (const col in letters) { 
        string +=(letters[col][row])
      }
      vertical.push(string);
    }    
    return vertical;
  }
const reverseWords = arr => {
  let output = arr.map(str => {
      return str.split('').reverse().join('');
  });
  return output
}    

const wordSearch = (letters, word) => { 
 
  if (!word) return false;

  const horizontalJoin = letters.map(ls => ls.join(''))    
  const verticalJoin = convertVertical(letters);
  const horReverse = reverseWords(horizontalJoin);
  const verReverse = reverseWords(verticalJoin);

  const totalWords = [...horizontalJoin,...verticalJoin,...horReverse,...verReverse];

  for (let str of totalWords) {
      if (str.includes(word)) return true;
  }
  return false; 
}

module.exports = wordSearch

