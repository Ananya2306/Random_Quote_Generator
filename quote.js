// Each category contains an array of quote objects with 'text' and 'author' properties
const quotes = {

    inspirational: [
        // Inspirational quotes to motivate users
        { text: "The best way to get started is to quit talking and begin doing.", author: "Walt Disney" },
        { text: "Don’t let yesterday take up too much of today.", author: "Will Rogers" },
        { text: "Success is not final, failure is not fatal: it is the courage to continue that counts.", author: "Winston Churchill" },
        { text: "Hardships often prepare ordinary people for an extraordinary destiny.", author: "C.S. Lewis" },
        { text: "Believe you can and you're halfway there.", author: "Theodore Roosevelt" },
        { text: "What you get by achieving your goals is not as important as what you become by achieving your goals.", author: "Zig Ziglar" },
        { text: "Dream big and dare to fail.", author: "Norman Vaughan" },
        { text: "Don't watch the clock; do what it does. Keep going.", author: "Sam Levenson" },
        { text: "Keep your eyes on the stars, and your feet on the ground.", author: "Theodore Roosevelt" },
        { text: "The only way to do great work is to love what you do.", author: "Steve Jobs" },
        { text: "If you want to lift yourself up, lift up someone else.", author: "Booker T. Washington" },
        { text: "You miss 100% of the shots you don’t take.", author: "Wayne Gretzky" },
        { text: "Strive not to be a success, but rather to be of value.", author: "Albert Einstein" },
        { text: "The harder the conflict, the more glorious the triumph.", author: "Thomas Paine" },
        { text: "The future belongs to those who believe in the beauty of their dreams.", author: "Eleanor Roosevelt" }
    ],
    life: [
        // Life quotes to reflect on the nature of existence
        { text: "Life is what happens when you’re busy making other plans.", author: "John Lennon" },
        { text: "Get busy living or get busy dying.", author: "Stephen King" },
        { text: "You only live once, but if you do it right, once is enough.", author: "Mae West" },
        { text: "In three words I can sum up everything I've learned about life: it goes on.", author: "Robert Frost" },
        { text: "Life is really simple, but we insist on making it complicated.", author: "Confucius" },
        { text: "To live is the rarest thing in the world. Most people exist, that is all.", author: "Oscar Wilde" },
        { text: "Life isn’t about finding yourself. Life is about creating yourself.", author: "George Bernard Shaw" },
        { text: "Good friends, good books, and a sleepy conscience: this is the ideal life.", author: "Mark Twain" },
        { text: "The purpose of our lives is to be happy.", author: "Dalai Lama" },
        { text: "Life is short, and it is up to you to make it sweet.", author: "Sarah Louise Delany" },
        { text: "Do not take life too seriously. You will never get out of it alive.", author: "Elbert Hubbard" },
        { text: "Life is a succession of lessons which must be lived to be understood.", author: "Helen Keller" },
        { text: "Life is either a daring adventure or nothing at all.", author: "Helen Keller" },
        { text: "Turn your wounds into wisdom.", author: "Oprah Winfrey" },
        { text: "The good life is one inspired by love and guided by knowledge.", author: "Bertrand Russell" }
    ],
    humor: [
        // Humorous quotes to lighten the mood
        { text: "I'm not arguing, I'm just explaining why I'm right.", author: "Unknown" },
        { text: "I used to think I was indecisive, but now I'm not too sure.", author: "Unknown" },
        { text: "Life is short. Smile while you still have teeth.", author: "Unknown" },
        { text: "If at first you don’t succeed, then skydiving definitely isn’t for you.", author: "Steven Wright" },
        { text: "I am so clever that sometimes I don’t understand a single word of what I am saying.", author: "Oscar Wilde" },
        { text: "Behind every great man is a woman rolling her eyes.", author: "Jim Carrey" },
        { text: "I’m on a seafood diet. I see food and I eat it.", author: "Unknown" },
        { text: "Age is of no importance unless you’re a cheese.", author: "Billie Burke" },
        { text: "The elevator to success is out of order. You’ll have to use the stairs… one step at a time.", author: "Joe Girard" },
        { text: "If you think nobody cares if you’re alive, try missing a couple of payments.", author: "Earl Wilson" },
        { text: "A day without laughter is a day wasted.", author: "Charlie Chaplin" },
        { text: "I find television very educating. Every time somebody turns on the set, I go into the other room and read a book.", author: "Groucho Marx" },
        { text: "If you want your children to listen, try talking softly to someone else.", author: "Ann Landers" },
        { text: "My fake plants died because I did not pretend to water them.", author: "Mitch Hedberg" },
        { text: "Light travels faster than sound. This is why some people appear bright until they speak.", author: "Alan Dundes" }
    ],
    love: [
        // Love quotes to express affection and romance
        { text: "Love all, trust a few, do wrong to none.", author: "William Shakespeare" },
        { text: "We accept the love we think we deserve.", author: "Stephen Chbosky" },
        { text: "Love is composed of a single soul inhabiting two bodies.", author: "Aristotle" },
        { text: "To love and be loved is to feel the sun from both sides.", author: "David Viscott" },
        { text: "Love doesn’t make the world go ’round. Love is what makes the ride worthwhile.", author: "Franklin P. Jones" },
        { text: "Being deeply loved by someone gives you strength, while loving someone deeply gives you courage.", author: "Lao Tzu" },
        { text: "Love is when the other person's happiness is more important than your own.", author: "H. Jackson Brown, Jr." },
        { text: "The best thing to hold onto in life is each other.", author: "Audrey Hepburn" },
        { text: "True love stories never have endings.", author: "Richard Bach" },
        { text: "You know you’re in love when you can’t fall asleep because reality is finally better than your dreams.", author: "Dr. Seuss" },
        { text: "Love recognizes no barriers.", author: "Maya Angelou" },
        { text: "Where there is love there is life.", author: "Mahatma Gandhi" },
        { text: "Love is a friendship set to music.", author: "Joseph Campbell" },
        { text: "Love is the only force capable of transforming an enemy into a friend.", author: "Martin Luther King Jr." },
        { text: "At the touch of love everyone becomes a poet.", author: "Plato" }
    ]
};

