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

export default {
  shortenWord,
  currencyFormat,
};
