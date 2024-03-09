const deckOfLetters = ["Д", "З", "О", "М", "Н", "Л", "В", "К", "С", "П", "Р", "Т", "Много букв"];
const blueTaskCards = [
    { cardNumber: 5, words: ["мусоропровод", "фата", "половник", "усы", "троллейбус", "кондитерская", "бардачок", "трясина", "морковь", "врач"] },
    { cardNumber: 1, words: ["бадминтон", "паркет", "букет", "ветер", "капитан", "погоны", "кружка", "погремушка", "фаза", "штраф"] },
    { cardNumber: 7, words: ["грабли", "берег", "трубочист", "занавески", "кепка", "воротник", "стекло", "фигуристка", "должник", "очередь"] }
];

function getRandomElement(array) {
    return array[Math.floor(Math.random() * array.length)];
}

function updateGame() {
    const selectedCard = getRandomElement(blueTaskCards);
    const word = getRandomElement(selectedCard.words);
    const letter = getRandomElement(deckOfLetters);

    document.getElementById('letterDisplay').textContent = `Буква: ${letter}`;
    document.getElementById('wordDisplay').textContent = `Слово: ${word}`;
}

document.getElementById('nextWordButton').addEventListener('click', updateGame);

// Инициализируем первый раунд
updateGame();
