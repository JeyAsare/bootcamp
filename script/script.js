let bootcampQuiz = {
    difficultyLevels: [
        {
            difficultyName: "Novice",
            allowed: true,
            numOfQuestions: 10,
            introMessage: "Okay, let’s put you through your paces! These questions I will be asking you will be relatively easy. That means I’m expecting a flawless run; just like I did when I was in your position. We at BOOTCAMP have high expectations soo get too many questions wrong and you fail. Good Luck!",
            passMessage: "Well done, I had my doubts but you’ve done great. Anyways, let's not sit and dwell. There are even harder challenges that await. Shall we?",
            failMessage: "Disappointment is an understatement. Ahh well… at least you tried. We at BOOTCAMP hate failure but we do admire a tryer.",
            questions: [
                {
                    text: "Who wrote “Romeo and Juliet”?",
                    answers: [
                        {
                            text: "Christopher Marlowe",
                            correct: false,
                        },
                        {
                            text: "William Shakespeare",
                            correct: true,
                        },
                        {
                            text: "John Donne",
                            correct: false,
                        },
                        {
                            text: "Thomas Kyd",
                            correct: false,
                        },
                    ],
                },
                {
                    text: "What is the largest mammal in the world?",
                    answers: [
                        {
                            text: "Giraffe",
                            correct: false,
                        },
                        {
                            text: "Hippopotamus",
                            correct: false,
                        },
                        {
                            text: "African Elephant",
                            correct: false,
                        },
                        {
                            text: "Blue Whale",
                            correct: true,
                        },
                    ],
                },
                {
                    text: "What is the main ingredient in guacamole?",
                    answers: [
                        {
                            text: "onions",
                            correct: false,
                        },
                        {
                            text: "avocado",
                            correct: true,
                        },
                        {
                            text: "peppers",
                            correct: false,
                        },
                        {
                            text: "apples",
                            correct: false,
                        },
                    ],
                },
                {
                    text: "In what year did World War I end ?",
                    answers: [
                        {
                            text: "1916",
                            correct: false,
                        },
                        {
                            text: "1917",
                            correct: false,
                        },
                        {
                            text: "1918",
                            correct: true,
                        },
                        {
                            text: "1919",
                            correct: false,
                        },
                    ],
                },
                {
                    text: "How many continents are there in the world?",
                    answers: [
                        {
                            text: "5",
                            correct: false,
                        },
                        {
                            text: "6",
                            correct: false,
                        },
                        {
                            text: "7",
                            correct: true,
                        },
                        {
                            text: "8",
                            correct: false,
                        },
                    ],
                },
                {
                    text: "Who wrote “The Big Friendly Giant”?",
                    answers: [
                        {
                            text: "Roald Dahl",
                            correct: true,
                        },
                        {
                            text: "J K Rowling",
                            correct: false,
                        },
                        {
                            text: "Harper Lee",
                            correct: false,
                        },
                        {
                            text: "Anthony Horowitz",
                            correct: false,
                        },
                    ],
                },
                {
                    text: "Who was the first President of the United States?",
                    answers: [
                        {
                            text: "George Washington",
                            correct: true,
                        },
                        {
                            text: "Abraham Lincoln",
                            correct: false,
                        },
                        {
                            text: "Franklin Roosevelt",
                            correct: false,
                        },
                        {
                            text: "John F Kennedy",
                            correct: false,
                        },
                    ],
                },
                {
                    text: "What is the chemical symbol for gold?",
                    answers: [
                        {
                            text: "Ae",
                            correct: false,
                        },
                        {
                            text: "Gu",
                            correct: false,
                        },
                        {
                            text: "Ca",
                            correct: false,
                        },
                        {
                            text: "Au",
                            correct: true,
                        },
                    ],
                },
                {
                    text: "What is the primary gas that makes up Earth’s atmosphere?",
                    answers: [
                        {
                            text: "Hydrogen",
                            correct: false,
                        },
                        {
                            text: "Nitrogen",
                            correct: true,
                        },
                        {
                            text: "Oxygen",
                            correct: false,
                        },
                        {
                            text: "Carbon dioxide",
                            correct: false,
                        },
                    ],
                },
                {
                    text: "What colour combination gives you the colour brown?",
                    answers: [
                        {
                            text: "blue orange black",
                            correct: false,
                        },
                        {
                            text: "blue green red",
                            correct: false,
                        },
                        {
                            text: "red blue yellow",
                            correct: true,
                        },
                        {
                            text: "red orange yellow",
                            correct: false,
                        },
                    ],
                },
                {
                    text: "What was the name of King Henry VIII's first wife?",
                    answers: [
                        {
                            text: "Anne Boleyn",
                            correct: false,
                        },
                        {
                            text: "Catherine of Aragon",
                            correct: true,
                        },
                        {
                            text: "Catherine Howard",
                            correct: false,
                        },
                        {
                            text: "Jane Seymour",
                            correct: false,
                        },
                    ],
                },
                {
                    text: "How many hours are there in a week?",
                    answers: [
                        {
                            text: "126",
                            correct: false,
                        },
                        {
                            text: "144",
                            correct: false,
                        },
                        {
                            text: "168",
                            correct: true,
                        },
                        {
                            text: "180",
                            correct: false,
                        },
                    ],
                },
                {
                    text: "What is the largest organ in the human body?",
                    answers: [
                        {
                            text: "Skin",
                            correct: true,
                        },
                        {
                            text: "Large Intestine",
                            correct: false,
                        },
                        {
                            text: "Kidney",
                            correct: false,
                        },
                        {
                            text: "Stomach",
                            correct: false,
                        },
                    ],
                },
                {
                    text: "What do cows drink?",
                    answers: [
                        {
                            text: "Cider",
                            correct: false,
                        },
                        {
                            text: "Water",
                            correct: true,
                        },
                        {
                            text: "Milk",
                            correct: false,
                        },
                        {
                            text: "Coca Cola",
                            correct: false,
                        },
                    ],
                },
                {
                    text: "Which one of these shows are not shown on the BBC",
                    answers: [
                        {
                            text: "Eastenders",
                            correct: false,
                        },
                        {
                            text: "The Traitors",
                            correct: false,
                        },
                        {
                            text: "The Apprentice",
                            correct: false,
                        },
                        {
                            text: "The Cube",
                            correct: true,
                        },
                    ],
                },
                {
                    text: "Who became the first female prime minister of the United Kingdom in 2019?",
                    answers: [
                        {
                            text: "Diane Dodds",
                            correct: false,
                        },
                        {
                            text: "Theresa May",
                            correct: true,
                        },
                        {
                            text: "Catherine Bearder",
                            correct: false,
                        },
                        {
                            text: "Mary Honeyball",
                            correct: false,
                        },
                    ],
                },
                {
                    text: "Which streaming platform premiered the series 'Stranger Things' in 2016?",
                    answers: [
                        {
                            text: "Amazon Prime",
                            correct: false,
                        },
                        {
                            text: "Disney",
                            correct: false,
                        },
                        {
                            text: "Netflix",
                            correct: true,
                        },
                        {
                            text: "Youtube",
                            correct: false,
                        },
                    ],
                },
                {
                    text: "What is the square root of 144?",
                    answers: [
                        {
                            text: "72",
                            correct: false,
                        },
                        {
                            text: "22",
                            correct: false,
                        },
                        {
                            text: "14",
                            correct: false,
                        },
                        {
                            text: "12",
                            correct: true,
                        },
                    ],
                },
                {
                    text: "Which Disney features a young lion named Simba?",
                    answers: [
                        {
                            text: "Jungle Book",
                            correct: false,
                        },
                        {
                            text: "Aladdin",
                            correct: false,
                        },
                        {
                            text: "Tarzan",
                            correct: false,
                        },
                        {
                            text: "The Lion King",
                            correct: true,
                        },
                    ],
                },
                {
                    text: "In the game of chess, which piece can move in an L-shape?",
                    answers: [
                        {
                            text: "Bishop",
                            correct: false,
                        },
                        {
                            text: "Castle",
                            correct: false,
                        },
                        {
                            text: "Knight",
                            correct: true,
                        },
                        {
                            text: "Pawn",
                            correct: false,
                        },
                    ],
                },
            ],
            attemptedQuestions: []
        },
        {
            difficultyName: "Advanced",
            allowed: false,
            numOfQuestions: 10,
            introMessage: "So you’re no longer a novice. Pat yourself on the back. Now let’s see if you’ve got bottle! Many have got to this position and failed! In my years, I’ve seen many come with so much expectation yet, we sent them packing. I don’t know what it is but I see something in you. Let’s go Spark",
            passMessage: "You did superb! Amazing effort! You showed that you’ve got what it takes to complete BOOTCAMP. Let’s keep it up. We are nearly at the finish line. Almost there!",
            failMessage: "So close but yet so far. What a shame. I thought I saw something in… ahh it doesn’t matter. Are you going to quit like the rest ? Decision is yours.",
            questions: [
                {
                    text: "In which country would you find the pyramids of Giza?",
                    answers: [
                        {
                            text: "Morocco",
                            correct: false,
                        },
                        {
                            text: "Sudan",
                            correct: false,
                        },
                        {
                            text: "Egypt",
                            correct: true,
                        },
                        {
                            text: "Kenya",
                            correct: false,
                        },
                    ],
                },
                {
                    text: "What is the capital of Canada?",
                    answers: [
                        {
                            text: "Victoria",
                            correct: false,
                        },
                        {
                            text: "Montreal",
                            correct: false,
                        },
                        {
                            text: "Vancouver",
                            correct: false,
                        },
                        {
                            text: "Ottawa",
                            correct: true,
                        },
                    ],
                },
                {
                    text: "What is the only planet in the solar system to rotate clockwise?",
                    answers: [
                        {
                            text: "Mercury",
                            correct: false,
                        },
                        {
                            text: "Venus",
                            correct: true,
                        },
                        {
                            text: "Uranus",
                            correct: false,
                        },
                        {
                            text: "Jupiter",
                            correct: false,
                        },
                    ],
                },
                {
                    text: "What tennis player has the most grand slam titles?",
                    answers: [
                        {
                            text: "Novak Djokovic",
                            correct: true,
                        },
                        {
                            text: "Roger Federer",
                            correct: false,
                        },
                        {
                            text: "Rafael Nadal",
                            correct: false,
                        },
                        {
                            text: "Andy Murray",
                            correct: false,
                        },
                    ],
                },
                {
                    text: "Which famous music group made 'Here Comes The Sun'?",
                    answers: [
                        {
                            text: "Queen",
                            correct: false,
                        },
                        {
                            text: "The Beatles",
                            correct: true,
                        },
                        {
                            text: "The Rolling Stones",
                            correct: false,
                        },
                        {
                            text: "U2",
                            correct: false,
                        },
                    ],
                },
                {
                    text: "In what year did World War II end?",
                    answers: [
                        {
                            text: "1942",
                            correct: false,
                        },
                        {
                            text: "1943",
                            correct: false,
                        },
                        {
                            text: "1944",
                            correct: false,
                        },
                        {
                            text: "1945",
                            correct: true,
                        },
                    ],
                },
                {
                    text: "What is the largest bone in the human body?",
                    answers: [
                        {
                            text: "Tibia",
                            correct: false,
                        },
                        {
                            text: "Femur",
                            correct: true,
                        },
                        {
                            text: "Scapula",
                            correct: false,
                        },
                        {
                            text: "Humerus",
                            correct: false,
                        },
                    ],
                },
                {
                    text: "How old was Queen Elizabeth when she died in 2022?",
                    answers: [
                        {
                            text: "94",
                            correct: false,
                        },
                        {
                            text: "95",
                            correct: false,
                        },
                        {
                            text: "96",
                            correct: true,
                        },
                        {
                            text: "97",
                            correct: false,
                        },
                    ],
                },
                {
                    text: "What animal has the most teeth?",
                    answers: [
                        {
                            text: "Croccodile",
                            correct: false,
                        },
                        {
                            text: "Shark",
                            correct: false,
                        },
                        {
                            text: "Snail",
                            correct: true,
                        },
                        {
                            text: "Snake",
                            correct: false,
                        },
                    ],
                },
                {
                    text: "What is the name of the fourth Harry Potter book?",
                    answers: [
                        {
                            text: "Harry Potter and the Chamber of Secrets",
                            correct: false,
                        },
                        {
                            text: "Harry Potter and the Goblet of Fire",
                            correct: true,
                        },
                        {
                            text: "Harry Potter and the Cursed Child",
                            correct: false,
                        },
                        {
                            text: "Harry Potter and the Prisoner of Azkaban",
                            correct: false,
                        },
                    ],
                },
                {
                    text: "In the TV series 'Peaky Blinders,' what is the family name of the main characters?",
                    answers: [
                        {
                            text: "Smith",
                            correct: false,
                        },
                        {
                            text: "Brown",
                            correct: false,
                        },
                        {
                            text: "Shelby",
                            correct: true,
                        },
                        {
                            text: "Davis",
                            correct: false,
                        },
                    ],
                },
                {
                    text: "What is the national dish of England?",
                    answers: [
                        {
                            text: "Bangers and Mash",
                            correct: false,
                        },
                        {
                            text: "Fish and Chips",
                            correct: true,
                        },
                        {
                            text: "Chicken Tikka Masala",
                            correct: false,
                        },
                        {
                            text: "Jacket Potatoes",
                            correct: false,
                        },
                    ],
                },
                {
                    text: "What year did London host the Summer Olympics?",
                    answers: [
                        {
                            text: "2008",
                            correct: false,
                        },
                        {
                            text: "2010",
                            correct: false,
                        },
                        {
                            text: "2012",
                            correct: true,
                        },
                        {
                            text: "2014",
                            correct: false,
                        },
                    ],
                },
                {
                    text: "Which car brand, known for its luxury vehicles, originated from the United Kingdom?",
                    answers: [
                        {
                            text: "Mini Cooper",
                            correct: false,
                        },
                        {
                            text: "Rolls Royce",
                            correct: true,
                        },
                        {
                            text: "Vauxhall",
                            correct: false,
                        },
                        {
                            text: "McClaren",
                            correct: false,
                        },
                    ],
                },
                {
                    text: "What is the Italian Dessert made with coffee-soaked ladyfingers and layers of mascarpone cheese?",
                    answers: [
                        {
                            text: "Panettone",
                            correct: false,
                        },
                        {
                            text: "Florentines",
                            correct: false,
                        },
                        {
                            text: "Panforte",
                            correct: false,
                        },
                        {
                            text: "Tiramisu",
                            correct: true,
                        },
                    ],
                },
                {
                    text: "What is the official language of Argentina?",
                    answers: [
                        {
                            text: "Portuguese",
                            correct: false,
                        },
                        {
                            text: "Latin",
                            correct: false,
                        },
                        {
                            text: "Spanish",
                            correct: true,
                        },
                        {
                            text: "English",
                            correct: false,
                        },
                    ],
                },
                {
                    text: "How many millions in a Billion?",
                    answers: [
                        {
                            text: "100",
                            correct: false,
                        },
                        {
                            text: "1000",
                            correct: true,
                        },
                        {
                            text: "10,000",
                            correct: false,
                        },
                        {
                            text: "1000,000",
                            correct: false,
                        },
                    ],
                },
                {
                    text: "Which movie hasn't Leonardo Di-Caprio starred in?",
                    answers: [
                        {
                            text: "The Revenant",
                            correct: false,
                        },
                        {
                            text: "The Great Gatsby",
                            correct: false,
                        },
                        {
                            text: "Marvin's Room",
                            correct: false,
                        },
                        {
                            text: "Leave the World Behind",
                            correct: true,
                        },
                    ],
                },
                {
                    text: "What year was twitter created?",
                    answers: [
                        {
                            text: "2005",
                            correct: false,
                        },
                        {
                            text: "2006",
                            correct: true,
                        },
                        {
                            text: "2007",
                            correct: false,
                        },
                        {
                            text: "2008",
                            correct: false,
                        },
                    ],
                },
                {
                    text: "Who created the famous Reggae Reggae Sauce?",
                    answers: [
                        {
                            text: "Michael Ward",
                            correct: false,
                        },
                        {
                            text: "Terry Crews",
                            correct: false,
                        },
                        {
                            text: "Levi Roots",
                            correct: true,
                        },
                        {
                            text: "Chris Rock",
                            correct: false,
                        },
                    ],
                },
            ],
            attemptedQuestions: []
        },
                
        {
            difficultyName: "Expert",
            allowed: false,
            numOfQuestions: 10,
            introMessage: "You are everything I thought you would be. Determined, Proficient, Talented. But now this is where all of your credentials will be tested. To now be a seasoned expert and graduate from BOOTCAMP you have to get past this last hurdle. You’ve got this. C’mon champ",
            passMessage: "Congratulations. I feel like a proud father. You have shown yourself to be an elite soldier and have now graduated through BOOTCAMP. Drinks are on me tonight. Woo Hoo!",
            failMessage: "Ohh noo… you almost had it! Valiant effort but still not enough. You lacked the cutting edge. You looked nervous. Scared! Too scared to give it one more go?",
            questions: [
                {
                    text: "Who is currently the richest man in the world?",
                    answers: [
                        {
                            text: "Elon Musk",
                            correct: true,
                        },
                        {
                            text: "Bill Gates",
                            correct: false,
                        },
                        {
                            text: "Jeff Bezos",
                            correct: false,
                        },
                        {
                            text: "Warren Buffet",
                            correct: false,
                        },
                    ],
                },
                {
                    text: "What is the largest Desert in the world?",
                    answers: [
                        {
                            text: "Antarctica",
                            correct: true,
                        },
                        {
                            text: "Sahara",
                            correct: false,
                        },
                        {
                            text: "Gobi",
                            correct: false,
                        },
                        {
                            text: "Arabian",
                            correct: false,
                        },
                    ],
                },
                {
                    text: "What is the largest Ocean in the world?",
                    answers: [
                        {
                            text: "Mediterranean",
                            correct: false,
                        },
                        {
                            text: "Pacific",
                            correct: true,
                        },
                        {
                            text: "Atlantic",
                            correct: false,
                        },
                        {
                            text: "Antarctic",
                            correct: false,
                        },
                    ],
                },
                {
                    text: "Who developed the theory of relativity?",
                    answers: [
                        {
                            text: "Steven Hawking",
                            correct: false,
                        },
                        {
                            text: "Charles Darwin",
                            correct: false,
                        },
                        {
                            text: "Albert Einstein",
                            correct: true,
                        },
                        {
                            text: "Isaac Newton",
                            correct: false,
                        },
                    ],
                },
                {
                    text: "What is the capital of Australia?",
                    answers: [
                        {
                            text: "Canberra",
                            correct: true,
                        },
                        {
                            text: "Sydney",
                            correct: false,
                        },
                        {
                            text: "Brisbane",
                            correct: false,
                        },
                        {
                            text: "Perth",
                            correct: false,
                        },
                    ],
                },
                {
                    text: "What is the currency of Bulgaria?",
                    answers: [
                        {
                            text: "Kuna",
                            correct: false,
                        },
                        {
                            text: "Euro",
                            correct: false,
                        },
                        {
                            text: "Lev",
                            correct: true,
                        },
                        {
                            text: "Bulga",
                            correct: false,
                        },
                    ],
                },
                {
                    text: "Which of these words are spelt incorrectly?",
                    answers: [
                        {
                            text: "Conscientious",
                            correct: false,
                        },
                        {
                            text: "Bouillabaisse",
                            correct: false,
                        },
                        {
                            text: "Buraeucracy",
                            correct: true,
                        },
                        {
                            text: "Manoeuvre",
                            correct: false,
                        },
                    ],
                },
                {
                    text: "What is the only animal to fly backwards?",
                    answers: [
                        {
                            text: "Eagle",
                            correct: false,
                        },
                        {
                            text: "Blue Macaw",
                            correct: false,
                        },
                        {
                            text: "Hummingbird",
                            correct: true,
                        },
                        {
                            text: "Parrot",
                            correct: false,
                        },
                    ],
                },
                {
                    text: "The Statue of Liberty was a gift to The United States from which country?",
                    answers: [
                        {
                            text: "England",
                            correct: false,
                        },
                        {
                            text: "France",
                            correct: true,
                        },
                        {
                            text: "Belgium",
                            correct: false,
                        },
                        {
                            text: "Spain",
                            correct: false,
                        },
                    ],
                },
                {
                    text: "Which country won the 2022 World Cup?",
                    answers: [
                        {
                            text: "Argentina",
                            correct: true,
                        },
                        {
                            text: "Brazil",
                            correct: false,
                        },
                        {
                            text: "England",
                            correct: false,
                        },
                        {
                            text: "France",
                            correct: false,
                        },
                    ],
                },
                {
                    text: "What century was the great fire of London?",
                    answers: [
                        {
                            text: "14th",
                            correct: false,
                        },
                        {
                            text: "15th",
                            correct: false,
                        },
                        {
                            text: "16th",
                            correct: false,
                        },
                        {
                            text: "17th",
                            correct: true,
                        },
                    ],
                },
                {
                    text: "Bruce Banner is the name for which superhero?",
                    answers: [
                        {
                            text: "Spiderman",
                            correct: false,
                        },
                        {
                            text: "Incredible Hulk",
                            correct: true,
                        },
                        {
                            text: "Thor",
                            correct: false,
                        },
                        {
                            text: "Iron Man",
                            correct: false,
                        },
                    ],
                },
                {
                    text: "Who developed the theory of relativity?",
                    answers: [
                        {
                            text: "Steven Hawking",
                            correct: false,
                        },
                        {
                            text: "Charles Darwin",
                            correct: false,
                        },
                        {
                            text: "Albert Einstein",
                            correct: true,
                        },
                        {
                            text: "Isaac Newton",
                            correct: false,
                        },
                    ],
                },
                {
                    text: "Who wrote 'Pride and Prejudice'?",
                    answers: [
                        {
                            text: "Danielle Steel",
                            correct: false,
                        },
                        {
                            text: "Nora Roberts",
                            correct: false,
                        },
                        {
                            text: "Jane Austen",
                            correct: true,
                        },
                        {
                            text: "Julia Quinn",
                            correct: false,
                        },
                    ],
                },
                {
                    text: "What is the currency for Brazil?",
                    answers: [
                        {
                            text: "Real",
                            correct: true,
                        },
                        {
                            text: "Dollar",
                            correct: false,
                        },
                        {
                            text: "Peso",
                            correct: false,
                        },
                        {
                            text: "Sol",
                            correct: false,
                        },
                    ],
                },
                {
                    text: "What is the most listened to podcast on Spotify?",
                    answers: [
                        {
                            text: "The Diary of a CEO",
                            correct: false,
                        },
                        {
                            text: "The Joe Rogan Experience",
                            correct: true,
                        },
                        {
                            text: "The Jordan B. Peterson Podcast",
                            correct: false,
                        },
                        {
                            text: "Huberman Lab",
                            correct: false,
                        },
                    ],
                },
                {
                    text: "What is the name of the mysterious substance that makes up about 27% of the universe.?",
                    answers: [
                        {
                            text: "Meteorite",
                            correct: false,
                        },
                        {
                            text: "Star Dust",
                            correct: false,
                        },
                        {
                            text: "Dark Matter",
                            correct: true,
                        },
                        {
                            text: "Dark Energy",
                            correct: false,
                        },
                    ],
                },
                {
                    text: "What is the term for the process which a caterpillar dissolves into a liquid inside a chrysalis before transforming into a butterfly?",
                    answers: [
                        {
                            text: "Histolysis",
                            correct: true,
                        },
                        {
                            text: "Metamorphosis",
                            correct: false,
                        },
                        {
                            text: "Transification",
                            correct: false,
                        },
                        {
                            text: "Blossification",
                            correct: false,
                        },
                    ],
                },
                {
                    text: "What is London's largest borough?",
                    answers: [
                        {
                            text: "Hackney",
                            correct: false,
                        },
                        {
                            text: "Bromley",
                            correct: true,
                        },
                        {
                            text: "Brent",
                            correct: false,
                        },
                        {
                            text: "Southwark",
                            correct: false,
                        },
                    ],
                },
                {
                    text: "What is the oldest bridge in London ",
                    answers: [
                        {
                            text: "London Bridge",
                            correct: false,
                        },
                        {
                            text: "Tower Bridge",
                            correct: false,
                        },
                        {
                            text: "Clattern Bridge",
                            correct: true,
                        },
                        {
                            text: "Richmond Bridge",
                            correct: false,
                        },
                    ],
                },
            ],
            attemptedQuestions: []
        }
    ]
}

let currentQuestionIndex = 0;
let currentDifficultyLevel = null;
let score = 0;

/* changePage function allows user to go through each page of game */
function changePage(pageId) {
    let page = document.getElementById(pageId);
    let pages = document.getElementsByClassName("gameplay");
    for (let i = 0; i < pages.length; i++) {
        let currentPage = pages[i];
        currentPage.classList.remove("active");
    }
    page.classList.add("active");
}


/* setDifficultyLevel shows each level of difficulty user has to go through */
function setDifficultyLevel() {
    let difView = "";

    for (let i = 0; i < bootcampQuiz.difficultyLevels.length; i++) {
        let difficultyLevel = bootcampQuiz.difficultyLevels[i];

        if (difficultyLevel.allowed === true) {
            difView = difView + `<button onclick = "showQuestion(0, '${difficultyLevel.difficultyName}')" class = "difficulty-lvl-Btn">${difficultyLevel.difficultyName}</button>`;
            document.getElementById("intro-lvl-mesg").innerHTML = difficultyLevel.introMessage;
        } else {
            difView = difView + `<button class = "difficulty-lvl-Btn" disabled>${difficultyLevel.difficultyName}</button>`;
        }
    }
    document.getElementById("difficulty-lvls").innerHTML = difView;
}

function getRandomQuestion(questions, attemptedQuestions) {
    const randomIndex = Math.floor(Math.random() * (questions.length - 1));

    const question = questions[randomIndex];

    attemptedQuestions.push(questions[randomIndex]);
    console.log(attemptedQuestions.length);
    questions.splice(randomIndex, 1);

    return question;
}

/* showQuestion function gives the user a question and a choice of four answers */
function showQuestion(questionIndex, difficultyLevelName) {
    changePage("page-3");
    document.getElementById("next-btn").classList.remove("active");
    let questions = [];
    let attemptedQuestions = [];

    for (let i = 0; i < bootcampQuiz.difficultyLevels.length; i++) {
        if (
            bootcampQuiz.difficultyLevels[i].difficultyName === difficultyLevelName
        ) {
            questions = bootcampQuiz.difficultyLevels[i].questions;
            attemptedQuestions = bootcampQuiz.difficultyLevels[i].attemptedQuestions
        }
    }

    let question = getRandomQuestion(questions, attemptedQuestions);

    let answerView = ``;
    for (let i = 0; i < question.answers.length; i++) {
        let answer = question.answers[i];
        answerView += `<button onclick="selectAnswer(${questionIndex}, '${difficultyLevelName}', ${i})" class="answer-btns">${answer.text}</button>`;
    }
    let view = `<h2 class="question">${question.text}</h2>
		<div id="answers"> ${answerView} </div>
                </div>`;

    document.getElementById("questions").innerHTML = view;

    currentQuestionIndex = questionIndex;
    currentDifficultyLevel = difficultyLevelName;
}

/* checkAnswer function checks if the user selected the right answer */
function checkAnswer(questionIndex, difficultyLevelName, answerIndex) {
    let attemptedQuestions = [];
    for (let i = 0; i < bootcampQuiz.difficultyLevels.length; i++) {
        if (
            bootcampQuiz.difficultyLevels[i].difficultyName === difficultyLevelName
        ) {
            attemptedQuestions = bootcampQuiz.difficultyLevels[i].attemptedQuestions;
        }
    }

    let question = attemptedQuestions[questionIndex];
    let answerSelected = question.answers[answerIndex];

    return answerSelected.correct;
}

/* selectAnswer function highlights the answer the user chooses */
function selectAnswer(questionIndex, difficultyLevelName, answerIndex) {
    let answerButtons = document.getElementsByClassName("answer-btns");

    for (let i = 0; i < answerButtons.length; i++) {
        let answerButton = answerButtons[i];

        if (i == answerIndex) {
            let isCorrect = checkAnswer(questionIndex, difficultyLevelName, i);

            if (isCorrect !== true) {
                answerButton.classList.add("wrong");
            } else {
                score++;
            }
        }
        answerButton.setAttribute("disabled", true);
    }

    let attemptedQuestions = [];
    for (let i = 0; i < bootcampQuiz.difficultyLevels.length; i++) {
        if (
            bootcampQuiz.difficultyLevels[i].difficultyName === difficultyLevelName
        ) {
            attemptedQuestions = bootcampQuiz.difficultyLevels[i].attemptedQuestions;
        }
    }

    let answers = attemptedQuestions[questionIndex].answers;

    for (let i = 0; i < answers.length; i++) {
        let answer = answers[i];
        if (answer.correct === true) {
            answerButtons[i].classList.add("active");
        }
    }

    document.getElementById("next-btn").classList.add("active");
}

/* nextQuestion function uses a button to move the user onto the next question */
function nextQuestion() {
    let questions = [];
    let numOfQuestions = 0;
    let passMessage = '';
    let failMessage = '';
    for (let i = 0; i < bootcampQuiz.difficultyLevels.length; i++) {

        if (bootcampQuiz.difficultyLevels[i].difficultyName === currentDifficultyLevel) {
            questions = bootcampQuiz.difficultyLevels[i].questions;
            numOfQuestions = bootcampQuiz.difficultyLevels[i].numOfQuestions;
            passMessage = bootcampQuiz.difficultyLevels[i].passMessage;
            failMessage = bootcampQuiz.difficultyLevels[i].failMessage;
        }
    }

    if (currentQuestionIndex + 1 >= numOfQuestions) {
        let view = `You scored ${score} out of ${numOfQuestions}.`;
        document.getElementById('end-score').innerHTML = view;
        changePage('page-4');

        if (((score / numOfQuestions) * 100) >= 80) {
            document.getElementById('end-review').innerHTML = passMessage;
            document.getElementById('playagain-nextlevel').innerHTML = 'NEXT LEVEL';
            unlockNextLevel();
        } else {
            document.getElementById('end-review').innerHTML = failMessage;
            document.getElementById('playagain-nextlevel').innerHTML = 'PLAY AGAIN';

        }
    }
    else {
        showQuestion(currentQuestionIndex + 1, currentDifficultyLevel);
    }

}

/* playAgain function allows the user to play game again from the start */
function playAgain() {
    currentQuestionIndex = 0;
    currentDifficultyLevel = null;
    score = 0;

    changePage('page-2');
    setDifficultyLevel();
}

/* unlockNextLevel function allows the user to unlock a next difficulty after completing the previous */
function unlockNextLevel() {

    for (let i = 0; i < bootcampQuiz.difficultyLevels.length; i++) {
        let level = bootcampQuiz.difficultyLevels[i];
        level.attemptedQuestions = [];

        if (level.difficultyName === currentDifficultyLevel) {
            if (bootcampQuiz.difficultyLevels[i + 1] !== undefined) {
                bootcampQuiz.difficultyLevels[i + 1].allowed = true;
            }
        }
    }

}

changePage("page-1");
setDifficultyLevel();
