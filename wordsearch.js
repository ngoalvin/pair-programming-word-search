const convertVertical = letters => {

    let vertical = [];
      
      for (const row in letters[0]) { //0,1
        let string = '';
        for (const col in letters) { //0,1,2
          string +=(letters[col][row])
        }
        vertical.push(string)
      } 
    
      return vertical
    }

const wordSearch = (letters, word) => { 
    if (!word) return false;
    const horizontalJoin = letters.map(ls => ls.join(''))
    const horizontalReverse = letters.map(ls => ls.reverse().join(''))
    for (let l of horizontalJoin) {
        if (l.includes(word)) return true
    };

    for (let l of horizontalReverse) {
        if (l.includes(word)) return true
    }

    const verticalJoin = convertVertical(letters);
    for (let l of verticalJoin) {
        if (l.includes(word)|| l.split('').reverse().join('').includes(word)) return true
    };
    return false
}

module.exports = wordSearch

