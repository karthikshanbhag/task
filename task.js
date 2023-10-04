function findLongestWord(sentence) {
    const regex = /[a-zA-Z]+/g;
    const words = sentence.match(regex);
    if (!words || words.length === 0) {
      return ""; 
    }
  
    let longestWord = "";
    let maxWordLength = 0;
    let maxVowelCount = 0;
  
    for (const word of words) {
      const wordLength = word.length;
  
      if (wordLength > maxWordLength) {
        longestWord = word;
        maxWordLength = wordLength;
        maxVowelCount = countVowels(word);
      } else if (wordLength === maxWordLength) {
        const vowelCount = countVowels(word);
        if (vowelCount > maxVowelCount) {
          longestWord = word;
          maxVowelCount = vowelCount;
        }
      }
    }
  
    return longestWord;
  }
  
  function countVowels(word) {
    return (word.match(/[aeiouAEIOU]/g) || []).length;
  }
  
  const sentence = prompt('give the input sentence');
  const longestWord = findLongestWord(sentence);
  console.log(longestWord);
  