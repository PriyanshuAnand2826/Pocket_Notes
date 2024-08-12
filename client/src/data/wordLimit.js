function limitWords(textarea, wordLimit) {
  const words = textarea.trim().split(" ").filter(Boolean); // Split by whitespace and filter out empty strings
  if (words.length > wordLimit) {
      words.splice(wordLimit); // Limit the number of words
      textarea = words.join(' '); // Join the words back into a string
  }
  return textarea;
}

export default limitWords;
