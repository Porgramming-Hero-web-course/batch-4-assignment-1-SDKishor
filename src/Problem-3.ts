{
  // Write a TypeScript function countWordOccurrences that takes a sentence (string) and a word (string). It should return the number of times the word appears in the sentence, case-insensitively.

  function countWordOccurrences(sentence: string, word: string) : number {
    let count = 0;
    const lowerCaseSentence = sentence.toLowerCase();
    const lowerCaseWord = word.toLowerCase();
    const words = lowerCaseSentence.split(' ');
    for (let i = 0; i < words.length; i++) {
      if (words[i] === lowerCaseWord) {
        count++;
      }
    }
    return count;
  }

  console.log(countWordOccurrences("cat speaks meow meow ", "meow"));
}