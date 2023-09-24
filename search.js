const words = [
  "apple",
  "table",
  "book",
  "milk",
  "house",
  "sun",
  "computer",
  "music",
  "car",
  "cat",
  "dog",
  "flower",
  "water",
  "beauty",
  "health",
  "school",
  "university",
  "travel",
  "bicycle",
  "football",
  "sea",
  "forest",
  "friendship",
  "family",
  "happiness",
  "work",
  "rest",
  "sleep",
  "food",
  "air",
  "winter",
  "spring",
  "summer",
  "autumn",
  "city",
  "bridge",
  "park",
  "dream",
  "holiday",
  "bird",
  "running",
];

let array = [];

const wordsContainer = document.querySelector(".main-words-list");
const input = document.querySelector(".main-input");

function createWord(wordTextContent) {
  const li = document.createElement("li");
  li.classList.add("main-words");
  li.textContent = wordTextContent;
  wordsContainer.append(li);
}

function showAllWords() {
  removeAllElements();

  for (let index = 0; index < words.length; index++) {
    if (input.value === "" && array.length === 0) {
      createWord(words[index]);
    } else {
      createWord(array[index]);
    }
  }
}

showAllWords();

function takeSearchResult(elem) {
  createWord(elem);
}

function searchFilter() {
  array = [];

  for (let index = 0; index < words.length; index++) {
    if (words[index].includes(input.value)) {
      array.push(words[index]);
    }
  }
}
function removeAllElements() {
  const everyWord = document.querySelectorAll(".main-words");

  everyWord.forEach((word) => {
    word.remove();
  });
}
input.addEventListener("input", () => {
  searchFilter();
  showAllWords();
});
