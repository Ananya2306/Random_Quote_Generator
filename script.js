// Globals
let allQuotesFlat = [];
let usedQuotesIndices = new Set();
let currentCategory = 'all';
let filteredQuotes = [];
const quoteTextEl = document.getElementById('quote-text');
const quoteAuthorEl = document.getElementById('quote-author');
const newQuoteBtn = document.getElementById('new-quote-btn');
const categorySelect = document.getElementById('category-select');
const searchInput = document.getElementById('search-input');
const tweetBtn = document.getElementById('tweet-btn');
const downloadBtn = document.getElementById('download-btn');
const modeToggle = document.getElementById('mode-toggle');
const quoteBox = document.getElementById('quote-box');

// Setup background gradients
const gradients = [
    "linear-gradient(135deg, #89f7fe, #66a6ff)",
    "linear-gradient(135deg, #f7971e, #ffd200)",
    "linear-gradient(135deg, #5ee7df, #b490ca)",
    "linear-gradient(135deg, #c3cfe2, #c3cfe2)",
    "linear-gradient(135deg, #667eea, #764ba2)",
    "linear-gradient(135deg, #ff6a00, #ee0979)"
];
let currentGradientIndex = 0;

// Initialize allQuotesFlat for quick random access
function flattenQuotes() {
    allQuotesFlat = [];
    Object.entries(quotes).forEach(([cat, arr]) => {
        arr.forEach(q => allQuotesFlat.push({ ...q, category: cat }));
    });
}

// Filter quotes by category & search term
function updateFilteredQuotes() {
    let baseQuotes = [];
    if (currentCategory === 'all') {
        baseQuotes = allQuotesFlat;
    } else {
        baseQuotes = quotes[currentCategory] || [];
    }

    const searchTerm = searchInput.value.trim().toLowerCase();
    if (searchTerm === '') {
        filteredQuotes = baseQuotes;
    } else {
        filteredQuotes = baseQuotes.filter(q =>
            q.text.toLowerCase().includes(searchTerm) ||
            (q.author && q.author.toLowerCase().includes(searchTerm))
        );
    }
    // Reset used indices when filters change
    usedQuotesIndices.clear();
}

// Show quote with fade animation
function showQuote(quote) {
    quoteBox.classList.add('out');
    setTimeout(() => {
        quoteTextEl.textContent = `${quote.text}`;
        quoteAuthorEl.textContent = quote.author ? `- ${quote.author}` : "- Unknown";
        quoteBox.classList.remove('out');
    }, 600);
}

// Get random quote from filteredQuotes without repeats until all used
function getRandomQuote() {
    if (filteredQuotes.length === 0) {
        return { text: "No quotes found with current filters.", author: "" };
    }

    // Reset if all used
    if (usedQuotesIndices.size >= filteredQuotes.length) {
        usedQuotesIndices.clear();
    }

    let index;
    do {
        index = Math.floor(Math.random() * filteredQuotes.length);
    } while (usedQuotesIndices.has(index) && usedQuotesIndices.size < filteredQuotes.length);

    usedQuotesIndices.add(index);
    return filteredQuotes[index];
}

// Update background gradient
function updateBackground() {
    currentGradientIndex = (currentGradientIndex + 1) % gradients.length;
    document.body.style.background = gradients[currentGradientIndex];
}

// Tweet quote
function tweetQuote() {
    const text = quoteTextEl.textContent;
    const author = quoteAuthorEl.textContent;
    const tweetText = encodeURIComponent(`${text} ${author}`);
    const url = `https://twitter.com/intent/tweet?text=${tweetText}`;
    window.open(url, '_blank');
}

// Download quote as image using html2canvas
function downloadQuoteImage() {
    html2canvas(quoteBox).then(canvas => {
        const link = document.createElement('a');
        link.download = 'quote.png';
        link.href = canvas.toDataURL();
        link.click();
    });
}

// Toggle Dark Mode
function toggleMode() {
    document.body.classList.toggle('dark');
    modeToggle.textContent = document.body.classList.contains('dark') ? '☀️' : '🌙';
}

// Event Listeners
newQuoteBtn.addEventListener('click', () => {
    updateFilteredQuotes();
    const quote = getRandomQuote();
    showQuote(quote);
    updateBackground();
});

categorySelect.addEventListener('change', () => {
    currentCategory = categorySelect.value;
    updateFilteredQuotes();
    const quote = getRandomQuote();
    showQuote(quote);
    updateBackground();
});

searchInput.addEventListener('input', () => {
    updateFilteredQuotes();
    const quote = getRandomQuote();
    showQuote(quote);
    updateBackground();
});

tweetBtn.addEventListener('click', tweetQuote);

downloadBtn.addEventListener('click', downloadQuoteImage);

modeToggle.addEventListener('click', toggleMode);

// Initialize on load
flattenQuotes();
updateFilteredQuotes();
showQuote({ text: "Click the button to generate a quote.", author: "" });