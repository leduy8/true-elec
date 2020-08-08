const shortenWord = (word, limit = 40) => {
  const newWord = [];
  if (word.length > limit) {
    word.split(" ").reduce((acc, cur) => {
      if (acc + cur.length <= limit) {
        newWord.push(cur);
      }
      return acc + cur.length;
    }, 0);
    return `${newWord.join(" ")} ...`;
  }
  return word;
};

const currencyFormat = (price) => {
  return new Intl.NumberFormat({
    style: "currency",
    currency: "VND",
  }).format(price);
};

const reformatString = (string) => {
  let newString = string.split("_").join(" ");
  return newString.charAt(0).toUpperCase() + newString.slice(1);
};

const removePlural = (string) => {
  return string.slice(0, -1);
};

const formatType = (string) => {
  if (string.length <= 2) return string;

  let newString = string.toLowerCase();
  return newString.charAt(0).toUpperCase() + newString.slice(1);
};

export default {
  shortenWord,
  currencyFormat,
  reformatString,
  formatType,
  removePlural,
};
