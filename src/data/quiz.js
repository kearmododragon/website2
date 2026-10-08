const travelQuestions = [
  {
    id: 1,
    category: "Travel",
    question: "Which US city did Ciaran visit as part of his 30th birthday trip?",
    options: ["Boston", "Chicago", "Philadelphia", "Washington, DC"],
    answer: "Chicago",
  },
  {
    id: 2,
    category: "Travel",
    question: "What unusual event happened during Ciaran's first trip to Florida?",
    options: ["An earthquake", "A hurricane", "A tornado", "A wildfire"],
    answer: "A hurricane",
  },
  {
    id: 3,
    category: "Travel",
    question: "Which NFL team did Ciaran watch play at home during his 30th birthday trip?",
    options: [
      "New York Giants",
      "Chicago Bears",
      "Cincinnati Bengals",
      "Miami Dolphins",
    ],
    answer: "Cincinnati Bengals",
  },
  {
    id: 4,
    category: "Travel",
    question: "What did Ciaran do in Philadelphia on his most recent US trip?",
    options: [
      "Watched an NBA game",
      "Visited the Amish community",
      "Visited Disney World",
      "Went whale watching",
    ],
    answer: "Visited the Amish community",
  },
  {
    id: 5,
    category: "Travel",
    question: "Which NBA team did Ciaran watch at Madison Square Garden?",
    options: [
      "Brooklyn Nets",
      "Boston Celtics",
      "New York Knicks",
      "Chicago Bulls",
    ],
    answer: "New York Knicks",
  },
  {
    id: 6,
    category: "Travel",
    question: "What cheap food helped Ciaran get through New York on his 30th birthday trip?",
    options: ["$2 tacos", "$2 hot dogs", "$2 burgers", "$2 pizzas"],
    answer: "$2 pizzas",
  },
  {
    id: 7,
    category: "Travel",
    question: "Which Canadian city has Ciaran visited?",
    options: ["Vancouver", "Montreal", "Toronto", "Calgary"],
    answer: "Toronto",
  },
  {
    id: 8,
    category: "Travel",
    question: "Which two things did Ciaran see on both trips to Toronto?",
    options: [
      "CN Tower and Raptors",
      "Niagara Falls and Maple Leafs",
      "Blue Jays and CN Tower",
      "Raptors and Blue Jays",
    ],
    answer: "Niagara Falls and Maple Leafs",
  },
  {
    id: 9,
    category: "Travel",
    question: "Who did Ciaran travel to Brazil with?",
    options: [
      "Carl and Adam",
      "Adam and Tom",
      "Tom and Carl",
      "Adam and his partner",
    ],
    answer: "Adam and Tom",
  },
  {
    id: 10,
    category: "Travel",
    question: "What was unusual about Ciaran's original travel plan after arriving in Brazil?",
    options: [
      "He had no accommodation",
      "He had no passport",
      "He had no return ticket",
      "He had no money",
    ],
    answer: "He had no return ticket",
  },
  {
    id: 11,
    category: "Travel",
    question: "Why did Ciaran eventually work in a hostel in Rio?",
    options: [
      "He wanted to become a tour guide",
      "He needed to prolong his trip",
      "He was studying there",
      "His friends recommended it",
    ],
    answer: "He needed to prolong his trip",
  },
  {
    id: 12,
    category: "Travel",
    question: "During which major event did Ciaran arrive in Brazil?",
    options: [
      "2014 World Cup",
      "2016 Olympics",
      "2018 World Cup",
      "2020 Olympics",
    ],
    answer: "2016 Olympics",
  },
  {
    id: 13,
    category: "Travel",
    question: "Which Brazilian beach does Ciaran specifically mention?",
    options: ["Copacabana", "Ipanema", "Leblon", "Flamengo"],
    answer: "Ipanema",
  },
  {
    id: 14,
    category: "Travel",
    question: "In which country was Ciaran born?",
    options: ["Ireland", "Scotland", "England", "Wales"],
    answer: "England",
  },
  {
    id: 15,
    category: "Travel",
    question: "Which Irish city has Ciaran still never visited?",
    options: ["Cork", "Galway", "Waterford", "Dublin"],
    answer: "Dublin",
  },
  {
    id: 16,
    category: "Travel",
    question: "What was Ciaran's first holiday abroad?",
    options: ["Bulgaria", "Cyprus", "Portugal", "France"],
    answer: "Cyprus",
  },
  {
    id: 17,
    category: "Travel",
    question: "What happened to Ciaran while skiing in Bulgaria?",
    options: [
      "He broke his arm",
      "He got lost",
      "He bounced on his head after falling",
      "He lost his skis",
    ],
    answer: "He bounced on his head after falling",
  },
  {
    id: 18,
    category: "Travel",
    question: "What did Ciaran and his friends use to settle an argument in Portugal?",
    options: [
      "A tennis match",
      "A football match",
      "A race",
      "A swimming competition",
    ],
    answer: "A football match",
  },
  {
    id: 19,
    category: "Travel",
    question: "Which French region did Ciaran visit with his school?",
    options: ["Normandy", "Brittany", "Dordogne", "Champagne"],
    answer: "Dordogne",
  },
  {
    id: 20,
    category: "Travel",
    question: "Why did Ciaran visit France during the Olympics?",
    options: [
      "To watch football",
      "To watch water polo",
      "To compete in running",
      "To watch tennis",
    ],
    answer: "To watch water polo",
  },
  {
    id: 21,
    category: "Travel",
    question: "What animal did Ciaran specifically visit at a Scottish zoo?",
    options: ["Polar bears", "Penguins", "Pandas", "Tigers"],
    answer: "Pandas",
  },
  {
    id: 22,
    category: "Travel",
    question: "What did Ciaran first get a taste for in Scotland?",
    options: ["Whisky", "Guinness", "Wine", "Cider"],
    answer: "Whisky",
  },
  {
    id: 23,
    category: "Travel",
    question: "What did Ciaran rent in Santorini?",
    options: ["A scooter", "A car", "A quad bike", "A boat"],
    answer: "A quad bike",
  },
  {
    id: 24,
    category: "Travel",
    question: "Why did Ciaran visit Swansea?",
    options: [
      "To watch football",
      "His sister went to university there",
      "He worked there",
      "He had a wedding there",
    ],
    answer: "His sister went to university there",
  },
  {
    id: 25,
    category: "Travel",
    question: "What does Ciaran say about Spain?",
    options: [
      "He has only visited once",
      "He has never lived there",
      "He currently lives there and lived there before",
      "He only visits for football",
    ],
    answer: "He currently lives there and lived there before",
  },
  {
    id: 26,
    category: "Travel",
    question: "Which Spanish city did Ciaran live in both times?",
    options: ["Madrid", "Valencia", "Seville", "Barcelona"],
    answer: "Barcelona",
  },
  {
    id: 27,
    category: "Travel",
    question: "Why did Ciaran travel to Valencia after passing his driving test?",
    options: [
      "To visit a friend",
      "To drive to Madrid",
      "To watch Valencia play",
      "To go to the beach",
    ],
    answer: "To drive to Madrid",
  },
  {
    id: 28,
    category: "Travel",
    question: "Which Spanish football match did Ciaran travel to see?",
    options: [
      "Barcelona vs Real Madrid",
      "Real Madrid vs Real Betis",
      "Valencia vs Real Madrid",
      "Real Betis vs Barcelona",
    ],
    answer: "Real Madrid vs Real Betis",
  },
  {
    id: 29,
    category: "Travel",
    question: "Which German city was particularly easy for Ciaran to reach from the Netherlands?",
    options: ["Berlin", "Munich", "Aachen", "Hamburg"],
    answer: "Aachen",
  },
  {
    id: 30,
    category: "Travel",
    question: "Which Belgian arcade does Ciaran describe as the best arcade he's been to?",
    options: [
      "Free Play Lanaken",
      "Real Sports",
      "Lanaken Games",
      "Brussels Arcade",
    ],
    answer: "Free Play Lanaken",
  },
  {
    id: 31,
    category: "Travel",
    question: "What country did Ciaran live in for nine years?",
    options: ["Belgium", "Germany", "Netherlands", "Luxembourg"],
    answer: "Netherlands",
  },
  {
    id: 32,
    category: "Travel",
    question: "Which Dutch city does Ciaran recommend as 'like Amsterdam without the sex and drugs'?",
    options: ["Rotterdam", "Utrecht", "Eindhoven", "Maastricht"],
    answer: "Utrecht",
  },
  {
    id: 33,
    category: "Travel",
    question: "Why did Ciaran visit Auschwitz?",
    options: [
      "For a football match",
      "As part of a romantic Christmas gift",
      "For a school trip",
      "While visiting family",
    ],
    answer: "As part of a romantic Christmas gift",
  },
  {
    id: 34,
    category: "Travel",
    question: "What unusual detour did Ciaran make during one Christmas trip through Poland?",
    options: [
      "To see a castle",
      "To visit a football stadium",
      "To see the world's largest Jesus statue",
      "To see a Christmas market",
    ],
    answer: "To see the world's largest Jesus statue",
  },
  {
    id: 35,
    category: "Travel",
    question: "Which country did Ciaran visit specifically to watch the Eternal Derby?",
    options: ["Croatia", "Serbia", "Bosnia and Herzegovina", "Montenegro"],
    answer: "Serbia",
  },
  {
    id: 36,
    category: "Travel",
    question: "Which two teams play the Eternal Derby mentioned by Ciaran?",
    options: [
      "Red Star Belgrade and Partizan Belgrade",
      "Dinamo Zagreb and Red Star Belgrade",
      "Partizan Belgrade and Sarajevo",
      "Red Star Belgrade and Dinamo Zagreb",
    ],
    answer: "Red Star Belgrade and Partizan Belgrade",
  },
  {
    id: 37,
    category: "Travel",
    question: "Which country did Ciaran visit to see the Komodo Dragons?",
    options: ["Taiwan", "Indonesia", "Malaysia", "Thailand"],
    answer: "Indonesia",
  },
  {
    id: 38,
    category: "Travel",
    question: "Which country did Ciaran love despite his partner considering it her least favourite stop?",
    options: ["Albania", "Kosovo", "Montenegro", "North Macedonia"],
    answer: "Albania",
  },
  {
    id: 39,
    category: "Travel",
    question: "Which country did Ciaran say he 'LOVED'?",
    options: ["Albania", "Kosovo", "Serbia", "Slovenia"],
    answer: "Kosovo",
  },
  {
    id: 40,
    category: "Travel",
    question: "Which Kosovo city did Ciaran describe as having a beautiful river lined with bars and cafes?",
    options: ["Pristina", "Peja", "Prizren", "Gjakova"],
    answer: "Prizren",
  },
  {
    id: 41,
    category: "Travel",
    question: "What did Ciaran's dog Soba steal in Czechia?",
    options: ["A sausage", "A football", "A chimney cake", "A sandwich"],
    answer: "A chimney cake",
  },
  {
    id: 42,
    category: "Travel",
    question: "Which country did Ciaran visit where he accidentally met the mayor on a walking tour?",
    options: ["Slovenia", "Slovakia", "Croatia", "Austria"],
    answer: "Slovenia",
  },
  {
    id: 43,
    category: "Travel",
    question: "What did Ciaran watch Dinamo Zagreb win?",
    options: [
      "The Champions League",
      "The Croatian Cup",
      "The league",
      "The Europa League",
    ],
    answer: "The league",
  },
  {
    id: 44,
    category: "Travel",
    question: "Which country did Ciaran visit where his marathon allowed him to see more of the city?",
    options: ["Finland", "Estonia", "Latvia", "Lithuania"],
    answer: "Estonia",
  },
  {
    id: 45,
    category: "Travel",
    question: "Which country did Ciaran describe as the home of the Moomin?",
    options: ["Sweden", "Norway", "Finland", "Denmark"],
    answer: "Finland",
  },
  {
    id: 46,
    category: "Travel",
    question: "What happened when Ciaran was in Sweden?",
    options: [
      "He missed his flight",
      "He accidentally saw a newspaper revealing a football result",
      "He lost his passport",
      "He won a competition",
    ],
    answer: "He accidentally saw a newspaper revealing a football result",
  },
  {
    id: 47,
    category: "Travel",
    question: "What was Ciaran's highlight of his trip to Iceland?",
    options: ["Whales", "Frozen waterfalls", "Northern lights", "Tomato soup"],
    answer: "Tomato soup",
  },
  {
    id: 48,
    category: "Travel",
    question: "What two things were Ciaran hoping to see in Iceland?",
    options: [
      "Volcanoes and glaciers",
      "Whales and northern lights",
      "Puffins and whales",
      "Glaciers and northern lights",
    ],
    answer: "Whales and northern lights",
  },
  {
    id: 49,
    category: "Travel",
    question: "In which Moroccan city did Ciaran's taxi driver pick up his uncle?",
    options: ["Marrakesh", "Merzouga", "Fez", "Casablanca"],
    answer: "Fez",
  },
  {
    id: 50,
    category: "Travel",
    question: "What did Ciaran do in Merzouga?",
    options: [
      "Climbed a volcano",
      "Watched football",
      "Spent a night in the desert",
      "Went whale watching",
    ],
    answer: "Spent a night in the desert",
  },
];
const meQuestions = [
  {
    id: "me1",
    category: "Me",
    question: "What kind of boy was I when I was little?",
    options: ["A proper mummy's boy", "A little troublemaker", "A quiet loner", "A typical class clown"],
    answer: "A proper mummy's boy"
  },
  {
    id: "me2",
    category: "Me",
    question: "Who did I always want to be close to as a child?",
    options: ["My dad", "My mum", "My older sister", "My grandparents"],
    answer: "My mum"
  },
  {
    id: "me3",
    category: "Me",
    question: "Which of these activities did I love as a child?",
    options: ["Building model planes", "Fishing in rivers", "Getting muddy and climbing trees", "Collecting stamps"],
    answer: "Getting muddy and climbing trees"
  },
  {
    id: "me4",
    category: "Me",
    question: "What did my family think I might grow up to become?",
    options: ["A footballer", "A teacher", "A police officer", "A priest"],
    answer: "A priest"
  },
  {
    id: "me5",
    category: "Me",
    question: "Why did my family think I might become a priest?",
    options: ["I sang in a church choir", "I went to Catholic school and was a good boy", "I wanted to study theology", "My dad was a priest"],
    answer: "I went to Catholic school and was a good boy"
  },
  {
    id: "me6",
    category: "Me",
    question: "What sport did I try to play every chance I got as a child?",
    options: ["Rugby", "Tennis", "Football", "Cricket"],
    answer: "Football"
  },
  {
    id: "me7",
    category: "Me",
    question: "What were my favourite school subjects?",
    options: ["History and geography", "Lunchtime and home time", "PE and science", "Art and music"],
    answer: "Lunchtime and home time"
  },
  {
    id: "me8",
    category: "Me",
    question: "How did I generally feel about school?",
    options: ["I absolutely loved it", "I wanted to become a teacher", "I was indifferent to it", "I hated it"],
    answer: "I hated it"
  },
  {
    id: "me9",
    category: "Me",
    question: "How old was I when my father passed away?",
    options: ["9", "11", "13", "15"],
    answer: "11"
  },
  {
    id: "me10",
    category: "Me",
    question: "What did I discover about school during my teenage years?",
    options: ["I could coast through it and still do well enough", "I needed to study every night to pass", "I was much better at science than anything else", "I wanted to leave education entirely"],
    answer: "I could coast through it and still do well enough"
  },
  {
    id: "me11",
    category: "Me",
    question: "What were my school grades like?",
    options: ["Straight As", "Mostly failing", "Decent enough", "I never took any exams"],
    answer: "Decent enough"
  },
  {
    id: "me12",
    category: "Me",
    question: "Who was my first crush?",
    options: ["Lettie Batty", "A girl called Sophie", "A girl called Hannah", "I never had a crush at school"],
    answer: "Lettie Batty"
  },
  {
    id: "me13",
    category: "Me",
    question: "Which town was my secondary school in?",
    options: ["Newark", "Nottingham", "Mansfield", "Derby"],
    answer: "Mansfield"
  },
  {
    id: "me14",
    category: "Me",
    question: "What was one reason I wanted to leave my secondary school?",
    options: ["The school had no sports teams", "It was in Mansfield", "It was too far from home", "It had no sixth form"],
    answer: "It was in Mansfield"
  },
  {
    id: "me15",
    category: "Me",
    question: "What else contributed to my reputation at school?",
    options: ["My love of practical jokes", "My older brother", "My footballing ability", "My mouth and my older sister"],
    answer: "My mouth and my older sister"
  },
  {
    id: "me16",
    category: "Me",
    question: "Where did I go to college?",
    options: ["Leicester", "Sheffield", "Nottingham", "Lincoln"],
    answer: "Nottingham"
  },
  {
    id: "me17",
    category: "Me",
    question: "What did college help me learn to do?",
    options: ["Step outside my comfort zone", "Avoid meeting new people", "Become a professional musician", "Manage a football club"],
    answer: "Step outside my comfort zone"
  },
  {
    id: "me18",
    category: "Me",
    question: "Which artist did I see live when I was 16?",
    options: ["Jay-Z", "Kanye West", "Eminem", "Dr. Dre"],
    answer: "Kanye West"
  },
  {
    id: "me19",
    category: "Me",
    question: "What did I develop a love for after going to gigs?",
    options: ["Stand-up comedy", "Classical music", "Live music", "Musical theatre"],
    answer: "Live music"
  },
  {
    id: "me20",
    category: "Me",
    question: "Which of these was one of my early jobs?",
    options: ["Paper round", "Cinema manager", "Hotel receptionist", "Taxi driver"],
    answer: "Paper round"
  },
  {
    id: "me21",
    category: "Me",
    question: "Which other job did I have during my teenage years?",
    options: ["Lifeguarding", "Refereeing", "Barbering", "Teaching swimming"],
    answer: "Refereeing"
  },
  {
    id: "me22",
    category: "Me",
    question: "Where did I go on my first trip abroad without family?",
    options: ["Spain", "France", "Portugal", "Italy"],
    answer: "Portugal"
  },
  {
    id: "me23",
    category: "Me",
    question: "How long was my first trip abroad without family?",
    options: ["A long weekend", "A week", "Two weeks", "A month"],
    answer: "A week"
  },
  {
    id: "me24",
    category: "Me",
    question: "What did I do after my first trip abroad without family?",
    options: ["Joined the army", "Moved straight to Brazil", "Started a band", "Went to university"],
    answer: "Went to university"
  },
  {
    id: "me25",
    category: "Me",
    question: "What problem did I finish university with?",
    options: ["A knee that had been repaired", "A broken wrist", "A shoulder injury", "A serious ankle injury"],
    answer: "A knee that had been repaired"
  },
  {
    id: "me26",
    category: "Me",
    question: "How many ACL/MCL surgeries have I had?",
    options: ["One", "Two", "Three", "Four"],
    answer: "Two"
  },
  {
    id: "me27",
    category: "Me",
    question: "What happened to my knee a few years after its first repair?",
    options: ["It was completely fine forever", "I needed a replacement knee", "It needed repairing again", "I had to stop walking"],
    answer: "It needed repairing again"
  },
  {
    id: "me28",
    category: "Me",
    question: "What was my first proper office job in?",
    options: ["Software engineering", "Tourism management and business travel", "Banking", "Sports journalism"],
    answer: "Tourism management and business travel"
  },
  {
    id: "me29",
    category: "Me",
    question: "What was the focus of my first proper office job?",
    options: ["Business travel", "Football scouting", "Restaurant bookings", "Software testing"],
    answer: "Business travel"
  },
  {
    id: "me30",
    category: "Me",
    question: "Which country did I visit on my first BIG trip?",
    options: ["Japan", "Australia", "Brazil", "Canada"],
    answer: "Brazil"
  },
  {
    id: "me31",
    category: "Me",
    question: "What was significant about moving abroad in my twenties?",
    options: ["It was the first time I moved out of my home country", "I moved to become a professional footballer", "I bought my first house abroad", "I moved to study medicine"],
    answer: "It was the first time I moved out of my home country"
  },
  {
    id: "me32",
    category: "Me",
    question: "What happened in my romantic life during my twenties?",
    options: ["I never had a relationship", "I got married twice", "I only dated while travelling", "I had a girlfriend or two before meeting my current girlfriend"],
    answer: "I had a girlfriend or two before meeting my current girlfriend"
  },
  {
    id: "me33",
    category: "Me",
    question: "Who took up much of my twenties and beyond?",
    options: ["My university housemate", "My current girlfriend", "My first boss", "My childhood best friend"],
    answer: "My current girlfriend"
  },
  {
    id: "me34",
    category: "Me",
    question: "How would I describe the number of countries I visited in my twenties?",
    options: ["Exactly five", "Fewer than five", "More than I can count", "Only countries in Europe"],
    answer: "More than I can count"
  },
  {
    id: "me35",
    category: "Me",
    question: "What did I feel helped me become the person I am today?",
    options: ["The people around me", "School exams alone", "Living in one place", "Avoiding new experiences"],
    answer: "The people around me"
  },
  {
    id: "me36",
    category: "Me",
    question: "Who else did I lose during my twenties?",
    options: ["My university tutor", "My first manager", "My childhood football coach", "More family members, including my mother"],
    answer: "More family members, including my mother"
  },
  {
    id: "me37",
    category: "Me",
    question: "During which major global event did my mother pass away?",
    options: ["The 2008 financial crisis", "The COVID-19 pandemic", "The 2012 Olympics", "The 2022 World Cup"],
    answer: "The COVID-19 pandemic"
  },
  {
    id: "me38",
    category: "Me",
    question: "How did I describe my twenties overall?",
    options: ["Quiet and predictable", "A complete waste of time", "A dramatic decade", "The easiest decade of my life"],
    answer: "A dramatic decade"
  },
  {
    id: "me39",
    category: "Me",
    question: "In which city am I happily living in my thirties?",
    options: ["Barcelona", "Maastricht", "Nottingham", "Lisbon"],
    answer: "Barcelona"
  },
  {
    id: "me40",
    category: "Me",
    question: "What major change am I trying to make in my thirties?",
    options: ["Become a full-time musician", "Open a restaurant", "Move into professional sport", "Change my career"],
    answer: "Change my career"
  },
  {
    id: "me41",
    category: "Me",
    question: "How long have I wanted to make this career change?",
    options: ["A few weeks", "A long, long time", "Since moving to Barcelona", "Only since turning 30"],
    answer: "A long, long time"
  },
  {
    id: "me42",
    category: "Me",
    question: "How do I feel about what lies ahead in my thirties?",
    options: ["Mostly worried", "Ready to retire", "Excited about what's ahead", "Unsure whether to travel again"],
    answer: "Excited about what's ahead"
  },
  {
    id: "me43",
    category: "Me",
    question: "Which age range did I describe as the defining years of my life?",
    options: ["0–10", "10–20", "20–30", "30–40"],
    answer: "10–20"
  },
  {
    id: "me44",
    category: "Me",
    question: "Which age range did I describe as the time I discovered who I really was?",
    options: ["0–10", "10–20", "20–30", "30–40"],
    answer: "20–30"
  },
  {
    id: "me45",
    category: "Me",
    question: "Which age range did I describe as already bringing dreams I could barely imagine a decade earlier?",
    options: ["0–10", "10–20", "20–30", "30–40"],
    answer: "30–40"
  },
  {
    id: "me46",
    category: "Me",
    question: "What did I do as a teenager once I started earning money?",
    options: ["Went to see as much live music as I could", "Stopped going out altogether", "Saved everything for a car", "Started travelling around Asia"],
    answer: "Went to see as much live music as I could"
  },
  {
    id: "me47",
    category: "Me",
    question: "What combination best describes my childhood interests?",
    options: ["Reading, chess and gardening", "Cooking, fishing and cycling", "Mud, trees and sport", "Computers, astronomy and swimming"],
    answer: "Mud, trees and sport"
  },
  {
    id: "me48",
    category: "Me",
    question: "What did I say about my knee at the time of writing?",
    options: ["It was worse than ever", "It was okay for now", "It had never caused any problems", "It had been replaced"],
    answer: "It was okay for now"
  },
  {
    id: "me49",
    category: "Me",
    question: "What was one big milestone during my twenties besides work and relationships?",
    options: ["Buying a vineyard", "Becoming a parent", "Winning a national sports title", "Travelling to many more countries"],
    answer: "Travelling to many more countries"
  },
  {
    id: "me50",
    category: "Me",
    question: "What do I hope to find in the decade ahead?",
    options: ["A quiet life with no changes", "A return to school in Mansfield", "More exciting experiences and a new career direction", "A chance to give up travelling forever"],
    answer: "More exciting experiences and a new career direction"
  }
];
const sportsPlayingQuestions = [
  {
    id: "sportsPlaying1",
    category: "Sports - Playing",
    question: "Which football club did I play for for more than ten years?",
    options: ["Newark Town FC", "VV Scharn", "RKHSV Heer", "MVV Maastricht"],
    answer: "Newark Town FC"
  },
  {
    id: "sportsPlaying2",
    category: "Sports - Playing",
    question: "Which future England international did I play alongside?",
    options: ["Harry Kane", "Patrick Bamford", "Jack Grealish", "Marcus Rashford"],
    answer: "Patrick Bamford"
  },
  {
    id: "sportsPlaying3",
    category: "Sports - Playing",
    question: "Which position did I play most often in football?",
    options: ["Striker", "Left winger", "Goalkeeper", "Left-back"],
    answer: "Goalkeeper"
  },
  {
    id: "sportsPlaying4",
    category: "Sports - Playing",
    question: "Which of these positions have I played?",
    options: ["Only striker and winger", "Only goalkeeper", "Only centre-back and striker", "Goalkeeper, centre-back, right-back and central midfield"],
    answer: "Goalkeeper, centre-back, right-back and central midfield"
  },
  {
    id: "sportsPlaying5",
    category: "Sports - Playing",
    question: "What was my team's usual rival when I was playing youth football?",
    options: ["Farndon", "Mansfield Town", "Nottingham Forest", "Lincoln City"],
    answer: "Farndon"
  },
  {
    id: "sportsPlaying6",
    category: "Sports - Playing",
    question: "What achievement did my youth team have against Farndon?",
    options: ["We beat them in a cup final", "We finished second in the league and pushed them close", "We won the league unbeaten", "We knocked them out of two tournaments"],
    answer: "We finished second in the league and pushed them close"
  },
  {
    id: "sportsPlaying7",
    category: "Sports - Playing",
    question: "In which country did I play in two international football tournaments?",
    options: ["Belgium", "Portugal", "France", "Germany"],
    answer: "France"
  },
  {
    id: "sportsPlaying8",
    category: "Sports - Playing",
    question: "What historic event did one of my football matches commemorate?",
    options: ["The end of the Second World War", "The founding of my hometown", "The first World Cup", "The end of the First World War"],
    answer: "The end of the First World War"
  },
  {
    id: "sportsPlaying9",
    category: "Sports - Playing",
    question: "Where was the match commemorating the end of the First World War played?",
    options: ["Flanders Fields", "Wembley", "The Stade de France", "Old Trafford"],
    answer: "Flanders Fields"
  },
  {
    id: "sportsPlaying10",
    category: "Sports - Playing",
    question: "Which club did I join after leaving VV Scharn?",
    options: ["Newark Town FC", "RKHSV Heer", "MVV Maastricht", "A local Barcelona club"],
    answer: "RKHSV Heer"
  },
  {
    id: "sportsPlaying11",
    category: "Sports - Playing",
    question: "Why did I leave VV Scharn?",
    options: ["I was offered a professional contract", "I moved to England", "I needed a knee operation", "I stopped enjoying football"],
    answer: "I needed a knee operation"
  },
  {
    id: "sportsPlaying12",
    category: "Sports - Playing",
    question: "What made my move from Scharn to Heer controversial?",
    options: ["Heer played in a different country", "I had never played football before", "I moved to a club in a higher division", "Heer were Scharn's arch-rivals"],
    answer: "Heer were Scharn's arch-rivals"
  },
  {
    id: "sportsPlaying13",
    category: "Sports - Playing",
    question: "What happened after I moved to Heer?",
    options: ["I won the league again", "I immediately retired", "I became a referee", "I switched to ice hockey"],
    answer: "I won the league again"
  },
  {
    id: "sportsPlaying14",
    category: "Sports - Playing",
    question: "Which team have I described as the most fun football team I've ever played for?",
    options: ["Newark Town FC", "RKHSV Heer", "VV Scharn", "My university team"],
    answer: "RKHSV Heer"
  },
  {
    id: "sportsPlaying15",
    category: "Sports - Playing",
    question: "What is my current status as a footballer?",
    options: ["Playing professionally", "Coaching a youth team", "An unsigned free agent", "Retired permanently"],
    answer: "An unsigned free agent"
  },
  {
    id: "sportsPlaying16",
    category: "Sports - Playing",
    question: "Which sport have I never actually played, despite loving the idea of playing it?",
    options: ["Field hockey", "Tennis", "Football", "Ice hockey"],
    answer: "Ice hockey"
  },
  {
    id: "sportsPlaying17",
    category: "Sports - Playing",
    question: "What has been one barrier to getting into playing ice hockey?",
    options: ["The cost of getting started", "Not liking team sports", "Being unable to skate at all", "A lack of interest in the sport"],
    answer: "The cost of getting started"
  },
  {
    id: "sportsPlaying18",
    category: "Sports - Playing",
    question: "What do I sometimes do to keep improving my skating?",
    options: ["Play ice hockey in a local league", "Take ice-skating lessons or skate freely", "Train with a professional hockey team", "Practise skiing indoors"],
    answer: "Take ice-skating lessons or skate freely"
  },
  {
    id: "sportsPlaying19",
    category: "Sports - Playing",
    question: "Who introduced me to playing tennis?",
    options: ["My dad", "My university housemate Clayton", "My friend JJ", "My friend Oliver"],
    answer: "My friend JJ"
  },
  {
    id: "sportsPlaying20",
    category: "Sports - Playing",
    question: "In which year did I start playing tennis?",
    options: ["2008", "2012", "2015", "2019"],
    answer: "2015"
  },
  {
    id: "sportsPlaying21",
    category: "Sports - Playing",
    question: "How did my tennis serve develop over time?",
    options: ["I went from struggling to get a serve in to occasionally hitting aces", "I stopped serving and played only volleys", "I started with aces but gradually lost my serve", "I switched to underarm serves exclusively"],
    answer: "I went from struggling to get a serve in to occasionally hitting aces"
  },
  {
    id: "sportsPlaying22",
    category: "Sports - Playing",
    question: "What is the aim of the table-tennis game I enjoyed called 'round the table'?",
    options: ["Score ten points without moving", "Keep the ball bouncing on your bat", "Win three consecutive games against one opponent", "Run to the other side after your shot and avoid being knocked out"],
    answer: "Run to the other side after your shot and avoid being knocked out"
  },
  {
    id: "sportsPlaying23",
    category: "Sports - Playing",
    question: "Who ran a school table-tennis club that I attended?",
    options: ["My dad", "My friend Oliver's grandad", "My football coach", "My college teacher"],
    answer: "My friend Oliver's grandad"
  },
  {
    id: "sportsPlaying24",
    category: "Sports - Playing",
    question: "Which sport did I play for a year at university after my friend Owain asked me to join?",
    options: ["Rugby", "Lacrosse", "Field hockey", "Cricket"],
    answer: "Field hockey"
  },
  {
    id: "sportsPlaying25",
    category: "Sports - Playing",
    question: "What did I achieve while playing field hockey for the university's second team?",
    options: ["I won the league and played once for the first team", "I became the first team's captain", "I won a national university championship", "I scored a hat-trick in a cup final"],
    answer: "I won the league and played once for the first team"
  }
];
const sportsWatchingQuestions = [
  {
    id: "sportsWatching1",
    category: "Sports - Watching",
    question: "Which three football clubs have I had season tickets for?",
    options: ["Manchester United, MVV Maastricht and RCD Espanyol", "Manchester City, Ajax and FC Barcelona", "Liverpool, Feyenoord and Real Madrid", "Nottingham Forest, PSV and Atlético Madrid"],
    answer: "Manchester United, MVV Maastricht and RCD Espanyol"
  },
  {
    id: "sportsWatching2",
    category: "Sports - Watching",
    question: "Which World Cup match is one of my earliest football memories?",
    options: ["Brazil vs Germany in 2002", "England vs Argentina in 1998", "France vs Italy in 2006", "England vs Germany in 1990"],
    answer: "England vs Argentina in 1998"
  },
  {
    id: "sportsWatching3",
    category: "Sports - Watching",
    question: "Where was I watching England vs Argentina in the 1998 World Cup?",
    options: ["At Wembley", "At school", "In the pub with my dad", "At a friend's house"],
    answer: "In the pub with my dad"
  },
  {
    id: "sportsWatching4",
    category: "Sports - Watching",
    question: "Which team did Manchester United beat on the way to winning the Champions League in 2008?",
    options: ["AC Milan", "Barcelona", "Real Madrid", "Inter Milan"],
    answer: "Barcelona"
  },
  {
    id: "sportsWatching5",
    category: "Sports - Watching",
    question: "Which dramatic Manchester United derby win do I remember?",
    options: ["A 3–0 win with a 90th-minute penalty", "A 2–1 win after extra time", "A 5–0 win at half-time", "A 4–3 win with a 96th-minute winner"],
    answer: "A 4–3 win with a 96th-minute winner"
  },
  {
    id: "sportsWatching6",
    category: "Sports - Watching",
    question: "Which Manchester United player performed the famous 'seal dribble' against Arsenal?",
    options: ["Cristiano Ronaldo", "Wayne Rooney", "Nani", "Ryan Giggs"],
    answer: "Nani"
  },
  {
    id: "sportsWatching7",
    category: "Sports - Watching",
    question: "Which team beat Manchester United 6–1 on my birthday?",
    options: ["Chelsea", "Manchester City", "Liverpool", "Arsenal"],
    answer: "Manchester City"
  },
  {
    id: "sportsWatching8",
    category: "Sports - Watching",
    question: "Approximately how many countries have I watched football in?",
    options: ["Around four", "Around eight", "Around twelve", "More than thirty"],
    answer: "Around twelve"
  },
  {
    id: "sportsWatching9",
    category: "Sports - Watching",
    question: "Which NFL team do I support?",
    options: ["Cincinnati Bengals", "Cleveland Browns", "Pittsburgh Steelers", "Baltimore Ravens"],
    answer: "Cincinnati Bengals"
  },
  {
    id: "sportsWatching10",
    category: "Sports - Watching",
    question: "Which team did the Bengals play when I watched them in London?",
    options: ["The New York Giants", "The Atlanta Falcons", "The Los Angeles Rams", "The Dallas Cowboys"],
    answer: "The Los Angeles Rams"
  },
  {
    id: "sportsWatching11",
    category: "Sports - Watching",
    question: "Where have I watched the Bengals play the Falcons?",
    options: ["London and Madrid", "Cincinnati and Madrid", "New York and London", "Cincinnati and New York"],
    answer: "Cincinnati and Madrid"
  },
  {
    id: "sportsWatching12",
    category: "Sports - Watching",
    question: "Which team did I watch the Bengals play in New York?",
    options: ["The Jets", "The Giants", "The Bills", "The Patriots"],
    answer: "The Giants"
  },
  {
    id: "sportsWatching13",
    category: "Sports - Watching",
    question: "Which now-defunct German American football team have I watched?",
    options: ["Berlin Thunder", "Hamburg Sea Devils", "Cologne Centurions", "Frankfurt Galaxy"],
    answer: "Cologne Centurions"
  },
  {
    id: "sportsWatching14",
    category: "Sports - Watching",
    question: "Why did going to university basketball games become especially fun for me?",
    options: ["My housemate Clayton played for the team and helped us get to know the players", "I had a season ticket from childhood", "The games were always free for everyone", "I was studying to become a basketball coach"],
    answer: "My housemate Clayton played for the team and helped us get to know the players"
  },
  {
    id: "sportsWatching15",
    category: "Sports - Watching",
    question: "Which NBA team did I watch in New York?",
    options: ["Brooklyn Nets", "Boston Celtics", "Chicago Bulls", "New York Knicks"],
    answer: "New York Knicks"
  },
  {
    id: "sportsWatching16",
    category: "Sports - Watching",
    question: "What happened during the Knicks game I attended?",
    options: ["The game was abandoned", "The Knicks won in overtime", "The Knicks lost by one point", "The game ended in a tie"],
    answer: "The Knicks won in overtime"
  },
  {
    id: "sportsWatching17",
    category: "Sports - Watching",
    question: "Where did I experience my favourite basketball atmosphere?",
    options: ["New York", "Barcelona", "London", "Kaunas"],
    answer: "Kaunas"
  },
  {
    id: "sportsWatching18",
    category: "Sports - Watching",
    question: "Which basketball team did I watch in Kaunas?",
    options: ["Žalgiris", "Rytas", "Real Madrid", "Fenerbahçe"],
    answer: "Žalgiris"
  },
  {
    id: "sportsWatching19",
    category: "Sports - Watching",
    question: "In which four countries have I watched ice hockey?",
    options: ["Canada, England, Belgium and Germany", "Canada, France, Sweden and Finland", "England, Spain, Italy and Germany", "Belgium, Netherlands, Austria and Czechia"],
    answer: "Canada, England, Belgium and Germany"
  },
  {
    id: "sportsWatching20",
    category: "Sports - Watching",
    question: "Which country did I say had the best quality of ice hockey?",
    options: ["Germany", "England", "Canada", "Belgium"],
    answer: "Canada"
  },
  {
    id: "sportsWatching21",
    category: "Sports - Watching",
    question: "Which ice-hockey team did I watch in Belgium?",
    options: ["Liège Bulldogs", "Cologne Centurions", "Brussels Bears", "Antwerp Giants"],
    answer: "Liège Bulldogs"
  },
  {
    id: "sportsWatching22",
    category: "Sports - Watching",
    question: "What was the score when the Bulldogs came back in the playoff final I remember?",
    options: ["They came back from 3–0 down to win 4–3", "They came back from 4–1 down to win 5–4 in overtime", "They came back from 5–2 down to win 6–5", "They came back from 2–0 down to win 3–2"],
    answer: "They came back from 4–1 down to win 5–4 in overtime"
  },
  {
    id: "sportsWatching23",
    category: "Sports - Watching",
    question: "Why did Bulldogs player Darques recognise me after that playoff game?",
    options: ["I had played against him years earlier", "I had interviewed him on television", "He knew my football coach", "He had seen a video I made that had been shared around the team"],
    answer: "He had seen a video I made that had been shared around the team"
  },
  {
    id: "sportsWatching24",
    category: "Sports - Watching",
    question: "Which sport did I watch at the Olympics?",
    options: ["Water polo", "Fencing", "Handball", "Beach volleyball"],
    answer: "Water polo"
  },
  {
    id: "sportsWatching25",
    category: "Sports - Watching",
    question: "Which sport did I watch at the Paralympics?",
    options: ["Wheelchair basketball", "Blind football", "Sitting volleyball", "Para ice hockey"],
    answer: "Blind football"
  }
];
const gamingRetroQuestions = [
  {
    id: "gamingRetro1",
    category: "Gaming - Retro",
    question: "What was the first console I ever owned?",
    options: ["NES", "Game Boy", "PlayStation", "Nintendo 64"],
    answer: "NES"
  },
  {
    id: "gamingRetro2",
    category: "Gaming - Retro",
    question: "Which terrible football game did I own for the NES?",
    options: ["Goal!", "International Superstar Soccer", "Sensible Soccer", "FIFA 96"],
    answer: "Goal!"
  },
  {
    id: "gamingRetro3",
    category: "Gaming - Retro",
    question: "Which Kirby game did I own on the NES?",
    options: ["Kirby's Dream Land", "Kirby's Adventure in Dream Land", "Kirby Super Star", "Kirby 64"],
    answer: "Kirby's Adventure in Dream Land"
  },
  {
    id: "gamingRetro4",
    category: "Gaming - Retro",
    question: "Which Kirby character did I struggle to beat at the end?",
    options: ["King Dedede", "Meta Knight", "Waddle Dee", "Nightmare"],
    answer: "King Dedede"
  },
  {
    id: "gamingRetro5",
    category: "Gaming - Retro",
    question: "How long did it take me to reach 100% in Kirby as an adult?",
    options: ["About 20 minutes", "A little over an hour", "Four hours", "A full weekend"],
    answer: "A little over an hour"
  },
  {
    id: "gamingRetro6",
    category: "Gaming - Retro",
    question: "Which game did I pick up for the NES that involved shooting ducks?",
    options: ["Duck Hunt", "Hogan's Alley", "Wild Gunman", "Time Crisis"],
    answer: "Duck Hunt"
  },
  {
    id: "gamingRetro7",
    category: "Gaming - Retro",
    question: "What colour was my Game Boy Colour?",
    options: ["Purple", "Atomic purple", "Green", "Yellow"],
    answer: "Purple"
  },
  {
    id: "gamingRetro8",
    category: "Gaming - Retro",
    question: "Which Game Boy model did I eventually own with tribal markings?",
    options: ["Game Boy Micro", "Game Boy Advance SP", "Game Boy Pocket", "Game Boy Light"],
    answer: "Game Boy Advance SP"
  },
  {
    id: "gamingRetro9",
    category: "Gaming - Retro",
    question: "Which Pokémon game was I particularly obsessed with?",
    options: ["Pokémon Yellow", "Pokémon Crystal", "Pokémon Emerald", "Pokémon Gold"],
    answer: "Pokémon Crystal"
  },
  {
    id: "gamingRetro10",
    category: "Gaming - Retro",
    question: "Who is my favourite Pokémon?",
    options: ["Pikachu", "Bulbasaur", "Charizard", "Squirtle"],
    answer: "Bulbasaur"
  },
  {
    id: "gamingRetro11",
    category: "Gaming - Retro",
    question: "Why couldn't I catch my favourite Pokémon in Pokémon Crystal?",
    options: ["It was locked behind a badge", "It was a version exclusive", "I had nobody to trade with", "It only appeared after midnight"],
    answer: "I had nobody to trade with"
  },
  {
    id: "gamingRetro12",
    category: "Gaming - Retro",
    question: "Which Nintendo 64 character am I pretty sure I'm undefeated with in Mario Kart 64?",
    options: ["Yoshi", "Bowser", "Toad", "Donkey Kong"],
    answer: "Bowser"
  },
  {
    id: "gamingRetro13",
    category: "Gaming - Retro",
    question: "Which game made me cry when I rented it because I couldn't work out how to play?",
    options: ["GoldenEye 007", "Super Smash Bros.", "Mario Party", "Diddy Kong Racing"],
    answer: "Super Smash Bros."
  },
  {
    id: "gamingRetro14",
    category: "Gaming - Retro",
    question: "Which video rental shop did I rent Super Smash Bros. from?",
    options: ["Blockbuster", "Choices", "Ritz Video", "Hollywood Video"],
    answer: "Blockbuster"
  },
  {
    id: "gamingRetro15",
    category: "Gaming - Retro",
    question: "Which game did we play regularly at university alongside Mario Kart?",
    options: ["Pokémon Stadium", "Perfect Dark", "F-Zero X", "Banjo-Tooie"],
    answer: "Pokémon Stadium"
  },
  {
    id: "gamingRetro16",
    category: "Gaming - Retro",
    question: "In which city did I spend my three university years playing Nintendo 64 games?",
    options: ["Nottingham", "Stoke", "Newcastle", "Sheffield"],
    answer: "Stoke"
  },
  {
    id: "gamingRetro17",
    category: "Gaming - Retro",
    question: "Which Nintendo console was the first one I got while it was still new?",
    options: ["Nintendo 64", "GameCube", "Wii", "NES"],
    answer: "GameCube"
  },
  {
    id: "gamingRetro18",
    category: "Gaming - Retro",
    question: "Which shop did I go to to buy my GameCube?",
    options: ["Currys", "Argos", "Comet", "Dixons"],
    answer: "Currys"
  },
  {
    id: "gamingRetro19",
    category: "Gaming - Retro",
    question: "Which GameCube game did I love and can still quote?",
    options: ["Super Mario Sunshine", "Star Fox", "Luigi's Mansion", "Metroid Prime"],
    answer: "Star Fox"
  },
  {
    id: "gamingRetro20",
    category: "Gaming - Retro",
    question: "Which GameCube game did I want to dig out and play again?",
    options: ["007: Rogue Agent", "TimeSplitters 2", "Pikmin", "Eternal Darkness"],
    answer: "007: Rogue Agent"
  },
  {
    id: "gamingRetro21",
    category: "Gaming - Retro",
    question: "Which console did I never actually own, despite playing it through my sister?",
    options: ["PlayStation", "PlayStation 2", "Sega Saturn", "Dreamcast"],
    answer: "PlayStation"
  },
  {
    id: "gamingRetro22",
    category: "Gaming - Retro",
    question: "Which two games did I play on the original PlayStation without ever completing them?",
    options: ["Tomb Raider 1 and 2", "Crash Bandicoot 1 and 2", "Resident Evil 1 and 2", "Spyro 1 and 2"],
    answer: "Tomb Raider 1 and 2"
  },
  {
    id: "gamingRetro23",
    category: "Gaming - Retro",
    question: "Where did I sometimes buy random off-brand PlayStation games?",
    options: ["Supermarkets", "Petrol stations", "Airport shops", "School fairs"],
    answer: "Petrol stations"
  },
  {
    id: "gamingRetro24",
    category: "Gaming - Retro",
    question: "Where did I get demo discs that helped develop my love of gaming?",
    options: ["Newspapers", "Magazines", "School libraries", "Video rental shops"],
    answer: "Magazines"
  },
  {
    id: "gamingRetro25",
    category: "Gaming - Retro",
    question: "Which Grand Theft Auto game did I mention playing on the PS2?",
    options: ["GTA III", "GTA: Vice City", "GTA: San Andreas", "GTA: Liberty City Stories"],
    answer: "GTA: San Andreas"
  },
  {
    id: "gamingRetro26",
    category: "Gaming - Retro",
    question: "Which PS2 accessory did I describe as leading the way for modern VR tech?",
    options: ["EyeToy", "SingStar microphone", "Buzz! buzzers", "Guitar Hero controller"],
    answer: "EyeToy"
  },
  {
    id: "gamingRetro27",
    category: "Gaming - Retro",
    question: "Which wrestling game series did I play with friends on the PS2?",
    options: ["WWE", "Fire Pro Wrestling", "Def Jam", "Day of Reckoning"],
    answer: "WWE"
  },
  {
    id: "gamingRetro28",
    category: "Gaming - Retro",
    question: "Which skateboarding series did I play with friends on the PS2?",
    options: ["Skate", "Tony Hawk's", "SSX", "Dave Mirra Freestyle BMX"],
    answer: "Tony Hawk's"
  },
  {
    id: "gamingRetro29",
    category: "Gaming - Retro",
    question: "Which portable console did I use to play games on the bus to secondary school?",
    options: ["PSP", "Nintendo DS", "Game Boy Micro", "Game Gear"],
    answer: "PSP"
  },
  {
    id: "gamingRetro30",
    category: "Gaming - Retro",
    question: "Which football game did I play with friends on the bus to school?",
    options: ["Pro Evolution Soccer", "Football Manager", "Sensible Soccer", "Actua Soccer"],
    answer: "Pro Evolution Soccer"
  },
  {
    id: "gamingRetro31",
    category: "Gaming - Retro",
    question: "What was one of the PSP's big advantages beyond gaming?",
    options: ["It could play movies and music videos", "It could make phone calls", "It could run Windows", "It could record TV broadcasts"],
    answer: "It could play movies and music videos"
  },
  {
    id: "gamingRetro32",
    category: "Gaming - Retro",
    question: "What did I mention as one reason the PSP appealed to people like me?",
    options: ["It was easy to jailbreak", "It had interchangeable cartridges with the DS", "It had a built-in projector", "It played original PlayStation discs"],
    answer: "It was easy to jailbreak"
  },
  {
    id: "gamingRetro33",
    category: "Gaming - Retro",
    question: "Which Wii game did I call the greatest free game ever released?",
    options: ["Wii Sports", "Wii Play", "Wii Fit", "Mario Kart Wii"],
    answer: "Wii Sports"
  },
  {
    id: "gamingRetro34",
    category: "Gaming - Retro",
    question: "Why did I buy Red Steel?",
    options: ["It had a realistic football mode", "You could hold your gun sideways using the Nunchuk", "It included a free Wii Wheel", "It was the first online Wii game"],
    answer: "You could hold your gun sideways using the Nunchuk"
  },
  {
    id: "gamingRetro35",
    category: "Gaming - Retro",
    question: "Which console did I describe as the most innovative and fun?",
    options: ["Wii", "Xbox 360", "GameCube", "PlayStation 3"],
    answer: "Wii"
  },
  {
    id: "gamingRetro36",
    category: "Gaming - Retro",
    question: "What was I often doing while playing the Wii, despite the console's active image?",
    options: ["Standing on a balance board", "Lying down covered in Doritos", "Running on a treadmill", "Playing outside"],
    answer: "Lying down covered in Doritos"
  },
  {
    id: "gamingRetro37",
    category: "Gaming - Retro",
    question: "Which console took up so much of my young adulthood?",
    options: ["Xbox 360", "PlayStation 3", "Wii", "PlayStation 4"],
    answer: "Xbox 360"
  },
  {
    id: "gamingRetro38",
    category: "Gaming - Retro",
    question: "What Xbox feature let me play and chat with friends late into the night?",
    options: ["Xbox Live parties", "Kinect Adventures", "Xbox Music", "SmartGlass"],
    answer: "Xbox Live parties"
  },
  {
    id: "gamingRetro39",
    category: "Gaming - Retro",
    question: "Which friend did I rent a NASCAR game with?",
    options: ["Ryan", "JJ", "Oliver", "Owain"],
    answer: "Ryan"
  },
  {
    id: "gamingRetro40",
    category: "Gaming - Retro",
    question: "What nickname did we give the NASCAR game?",
    options: ["Turn-left simulator", "The pit-stop challenge", "American motorway simulator", "The oval of doom"],
    answer: "Turn-left simulator"
  },
  {
    id: "gamingRetro41",
    category: "Gaming - Retro",
    question: "How many laps were in the NASCAR race we completed to earn an achievement?",
    options: ["100", "250", "500", "1,000"],
    answer: "500"
  },
  {
    id: "gamingRetro42",
    category: "Gaming - Retro",
    question: "Which special-edition Xbox 360 did I always want?",
    options: ["Star Wars edition", "Halo 3 edition", "Gears of War edition", "Call of Duty edition"],
    answer: "Star Wars edition"
  },
  {
    id: "gamingRetro43",
    category: "Gaming - Retro",
    question: "Which Guitar Hero equipment do I still have alongside my Xbox 360?",
    options: ["Guitar Hero controllers and accessories", "A drum kit only", "A DJ turntable", "A dance mat"],
    answer: "Guitar Hero controllers and accessories"
  },
  {
    id: "gamingRetro44",
    category: "Gaming - Retro",
    question: "Which company originally released the NES?",
    options: ["Nintendo", "Sega", "Sony", "Atari"],
    answer: "Nintendo"
  },
  {
    id: "gamingRetro45",
    category: "Gaming - Retro",
    question: "Which Nintendo 64 game features the character GoldenEye's famous multiplayer mode?",
    options: ["GoldenEye 007", "Perfect Dark", "Turok 2", "TimeSplitters"],
    answer: "GoldenEye 007"
  },
  {
    id: "gamingRetro46",
    category: "Gaming - Retro",
    question: "Which console introduced the Nunchuk controller accessory?",
    options: ["Wii", "GameCube", "Nintendo 64", "Switch"],
    answer: "Wii"
  },
  {
    id: "gamingRetro47",
    category: "Gaming - Retro",
    question: "Which handheld used Universal Media Discs (UMDs) for games and films?",
    options: ["PSP", "Nintendo DS", "Game Boy Advance SP", "PlayStation Vita"],
    answer: "PSP"
  },
  {
    id: "gamingRetro48",
    category: "Gaming - Retro",
    question: "Which console popularised Xbox Live parties for me and my friends?",
    options: ["Xbox 360", "Original Xbox", "Xbox One", "Xbox Series X"],
    answer: "Xbox 360"
  },
  {
    id: "gamingRetro49",
    category: "Gaming - Retro",
    question: "Which Nintendo console was known for its motion-controlled tennis and bowling?",
    options: ["Wii", "GameCube", "Nintendo 64", "Wii U"],
    answer: "Wii"
  },
  {
    id: "gamingRetro50",
    category: "Gaming - Retro",
    question: "Which console did I buy and sell, break, and still keep coming back to?",
    options: ["Nintendo 64", "NES", "Game Boy Advance SP", "GameCube"],
    answer: "Nintendo 64"
  }
];
const gamingModernQuestions = [
  {
    id: "gamingModern1",
    category: "Gaming - Modern",
    question: "Which console did I own for a long time before moving to the next generation?",
    options: ["PS4", "PS3", "Xbox One", "Wii U"],
    answer: "PS4"
  },
  {
    id: "gamingModern2",
    category: "Gaming - Modern",
    question: "What did I have to sell before going travelling?",
    options: ["My PS4 retro controller", "My VR headset", "My gaming PC", "My Nintendo Switch"],
    answer: "My PS4 retro controller"
  },
  {
    id: "gamingModern3",
    category: "Gaming - Modern",
    question: "Which superhero's games did I love on the PS4?",
    options: ["Batman", "Spider-Man", "Iron Man", "Superman"],
    answer: "Spider-Man"
  },
  {
    id: "gamingModern4",
    category: "Gaming - Modern",
    question: "Which VR game did I love for its time-stopping mechanic?",
    options: ["Beat Saber", "Superhot", "Astro Bot Rescue Mission", "Resident Evil 7"],
    answer: "Superhot"
  },
  {
    id: "gamingModern5",
    category: "Gaming - Modern",
    question: "What did I find so much fun about playing Superhot in VR?",
    options: ["Slowing down time by resisting movement", "Building a city", "Flying through space", "Playing multiplayer football"],
    answer: "Slowing down time by resisting movement"
  },
  {
    id: "gamingModern6",
    category: "Gaming - Modern",
    question: "Which console was the first I ever pre-ordered?",
    options: ["PS4", "PS5", "Xbox Series X", "Nintendo Switch"],
    answer: "PS5"
  },
  {
    id: "gamingModern7",
    category: "Gaming - Modern",
    question: "How long did I end up waiting for my pre-ordered console?",
    options: ["One week", "One month", "About six months", "A full year"],
    answer: "About six months"
  },
  {
    id: "gamingModern8",
    category: "Gaming - Modern",
    question: "What was the first game I played on my PS5?",
    options: ["Spider-Man: Miles Morales", "Maneater", "Demon's Souls", "Ratchet & Clank: Rift Apart"],
    answer: "Maneater"
  },
  {
    id: "gamingModern9",
    category: "Gaming - Modern",
    question: "What kind of creature do you play as in Maneater?",
    options: ["A crocodile", "A shark", "A giant squid", "An orca"],
    answer: "A shark"
  },
  {
    id: "gamingModern10",
    category: "Gaming - Modern",
    question: "What bad habit do I have with my modern games?",
    options: ["I only play multiplayer", "I buy games and never finish or even download them", "I refuse to play new releases", "I constantly delete my save files"],
    answer: "I buy games and never finish or even download them"
  },
  {
    id: "gamingModern11",
    category: "Gaming - Modern",
    question: "Which console did I describe as a weird one?",
    options: ["Wii U", "PS Vita", "Xbox One", "Nintendo 3DS"],
    answer: "Wii U"
  },
  {
    id: "gamingModern12",
    category: "Gaming - Modern",
    question: "Why did I find the Wii U disappointing compared with the Switch?",
    options: ["It had no controller", "It lacked the game catalogue and support", "It couldn't connect to a TV", "It only played downloaded games"],
    answer: "It lacked the game catalogue and support"
  },
  {
    id: "gamingModern13",
    category: "Gaming - Modern",
    question: "What did the Wii U help me through?",
    options: ["A long-haul flight", "An overnight stay after surgery", "A week without electricity", "A university exam period"],
    answer: "An overnight stay after surgery"
  },
  {
    id: "gamingModern14",
    category: "Gaming - Modern",
    question: "Who bought me my Nintendo Switch?",
    options: ["My parents", "My girlfriend", "My sister", "My friends"],
    answer: "My girlfriend"
  },
  {
    id: "gamingModern15",
    category: "Gaming - Modern",
    question: "Which game do I suspect my girlfriend really wanted to play on the Switch?",
    options: ["Mario Kart 8 Deluxe", "Animal Crossing", "The Legend of Zelda: Breath of the Wild", "Super Smash Bros. Ultimate"],
    answer: "Animal Crossing"
  },
  {
    id: "gamingModern16",
    category: "Gaming - Modern",
    question: "What do I often end up playing instead of all my newer games?",
    options: ["Retro games I already own", "Only mobile games", "Brand-new releases", "Nothing at all"],
    answer: "Retro games I already own"
  },
  {
    id: "gamingModern17",
    category: "Gaming - Modern",
    question: "Which mobile game did I say changed the world in 2016?",
    options: ["Clash Royale", "Pokémon GO", "Candy Crush Saga", "Pokémon Shuffle"],
    answer: "Pokémon GO"
  },
  {
    id: "gamingModern18",
    category: "Gaming - Modern",
    question: "What changed my Pokémon GO routine and meant I no longer needed an excuse to get outside?",
    options: ["Getting a dog", "Moving abroad", "Buying a bicycle", "Starting university"],
    answer: "Getting a dog"
  },
  {
    id: "gamingModern19",
    category: "Gaming - Modern",
    question: "Which mobile game am I trying to break the score barrier in?",
    options: ["Balatro", "Pokémon GO", "Vampire Survivors", "Marvel Snap"],
    answer: "Balatro"
  },
  {
    id: "gamingModern20",
    category: "Gaming - Modern",
    question: "What was the main reason I built my PC?",
    options: ["Software development", "Gaming", "Video editing", "Streaming"],
    answer: "Gaming"
  },
  {
    id: "gamingModern21",
    category: "Gaming - Modern",
    question: "Which game series got me back into gaming with friends during COVID?",
    options: ["Battlefield", "Call of Duty", "Halo", "Gears of War"],
    answer: "Call of Duty"
  },
  {
    id: "gamingModern22",
    category: "Gaming - Modern",
    question: "Which Call of Duty game did I play with friends during COVID?",
    options: ["Black Ops Cold War", "Warzone", "Modern Warfare 3", "Call of Duty: Mobile"],
    answer: "Warzone"
  },
  {
    id: "gamingModern23",
    category: "Gaming - Modern",
    question: "Which cooperative game did my group move to after Warzone?",
    options: ["Helldivers", "Destiny 2", "Sea of Thieves", "Deep Rock Galactic"],
    answer: "Helldivers"
  },
  {
    id: "gamingModern24",
    category: "Gaming - Modern",
    question: "Which cooking game did my friends and I play together?",
    options: ["Cook, Serve, Delicious!", "Overcooked", "PlateUp!", "Cooking Simulator"],
    answer: "Overcooked"
  },
  {
    id: "gamingModern25",
    category: "Gaming - Modern",
    question: "Which game have my friends and I moved to most recently, according to my About page?",
    options: ["Wardogs", "Warzone", "Helldivers", "Overcooked"],
    answer: "Wardogs"
  },
  {
    id: "gamingModern26",
    category: "Gaming - Modern",
    question: "Which upcoming or new game did I mention owning based on the James Bond franchise?",
    options: ["007: First Light", "GoldenEye 007 Reloaded", "Blood Stone 2", "Quantum of Solace"],
    answer: "007: First Light"
  },
  {
    id: "gamingModern27",
    category: "Gaming - Modern",
    question: "What is one of my favourite genres to play on PC?",
    options: ["Roguelike deck-builders", "Racing simulators", "MMORPGs", "Real-time strategy games"],
    answer: "Roguelike deck-builders"
  },
  {
    id: "gamingModern28",
    category: "Gaming - Modern",
    question: "Which roguelike deck-builder did I mention playing?",
    options: ["Slay the Spire", "Hades", "Dead Cells", "Enter the Gungeon"],
    answer: "Slay the Spire"
  },
  {
    id: "gamingModern29",
    category: "Gaming - Modern",
    question: "Which other game did I mention alongside Slay the Spire?",
    options: ["Inscryption", "Balatro", "Darkest Dungeon", "Monster Train"],
    answer: "Inscryption"
  },
  {
    id: "gamingModern30",
    category: "Gaming - Modern",
    question: "Which game has consumed the most of my gaming time?",
    options: ["Football Manager", "Call of Duty", "GTA V", "Civilization VI"],
    answer: "Football Manager"
  },
  {
    id: "gamingModern31",
    category: "Gaming - Modern",
    question: "Where do I check my recorded playtime when estimating how much Football Manager I've played?",
    options: ["Steam", "PlayStation Network", "Xbox Live", "Nintendo eShop"],
    answer: "Steam"
  },
  {
    id: "gamingModern32",
    category: "Gaming - Modern",
    question: "Despite all my Football Manager hours, how do I describe my expertise?",
    options: ["I'm a world-class expert", "I'm far from an expert", "I'm a professional scout", "I'm better than the developers"],
    answer: "I'm far from an expert"
  },
  {
    id: "gamingModern33",
    category: "Gaming - Modern",
    question: "Which PlayStation generation introduced the PS VR headset I enjoyed?",
    options: ["PS2", "PS3", "PS4", "PS5"],
    answer: "PS4"
  },
  {
    id: "gamingModern34",
    category: "Gaming - Modern",
    question: "Which of these games is a first-person shooter built around the idea that time moves when you move?",
    options: ["Superhot", "Doom", "Titanfall 2", "Far Cry 3"],
    answer: "Superhot"
  },
  {
    id: "gamingModern35",
    category: "Gaming - Modern",
    question: "Which Nintendo console followed the Wii U?",
    options: ["Nintendo Switch", "Nintendo 3DS", "Wii", "Nintendo 64"],
    answer: "Nintendo Switch"
  },
  {
    id: "gamingModern36",
    category: "Gaming - Modern",
    question: "Which Nintendo Switch game lets players build a home and live on an island with animal neighbours?",
    options: ["Animal Crossing: New Horizons", "Stardew Valley", "The Sims 4", "Story of Seasons"],
    answer: "Animal Crossing: New Horizons"
  },
  {
    id: "gamingModern37",
    category: "Gaming - Modern",
    question: "Which studio developed the PS4 Spider-Man game released in 2018?",
    options: ["Insomniac Games", "Naughty Dog", "Guerrilla Games", "Santa Monica Studio"],
    answer: "Insomniac Games"
  },
  {
    id: "gamingModern38",
    category: "Gaming - Modern",
    question: "Which of these games is primarily a shark action RPG?",
    options: ["Maneater", "Subnautica", "Abzû", "Stranded Deep"],
    answer: "Maneater"
  },
  {
    id: "gamingModern39",
    category: "Gaming - Modern",
    question: "Which console generation was the PS4 part of?",
    options: ["Seventh", "Eighth", "Ninth", "Tenth"],
    answer: "Eighth"
  },
  {
    id: "gamingModern40",
    category: "Gaming - Modern",
    question: "Which console generation does the PS5 belong to?",
    options: ["Seventh", "Eighth", "Ninth", "Tenth"],
    answer: "Ninth"
  },
  {
    id: "gamingModern41",
    category: "Gaming - Modern",
    question: "Which game series features the battle royale mode Warzone?",
    options: ["Call of Duty", "Battlefield", "Apex Legends", "Counter-Strike"],
    answer: "Call of Duty"
  },
  {
    id: "gamingModern42",
    category: "Gaming - Modern",
    question: "What is the main objective in Overcooked?",
    options: ["Run a restaurant kitchen together", "Manage a football team", "Explore a haunted mansion", "Build a theme park"],
    answer: "Run a restaurant kitchen together"
  },
  {
    id: "gamingModern43",
    category: "Gaming - Modern",
    question: "Which game series is famous for managing football clubs, transfers and tactics?",
    options: ["Football Manager", "FIFA Street", "Rocket League", "Mario Strikers"],
    answer: "Football Manager"
  },
  {
    id: "gamingModern44",
    category: "Gaming - Modern",
    question: "Which game is known for combining poker-inspired hands with roguelike deck-building?",
    options: ["Balatro", "Inscryption", "Slay the Spire", "Hearthstone"],
    answer: "Balatro"
  },
  {
    id: "gamingModern45",
    category: "Gaming - Modern",
    question: "Which game series lets players battle aliens as part of a cooperative military force?",
    options: ["Helldivers", "The Sims", "Forza Horizon", "Cities: Skylines"],
    answer: "Helldivers"
  },
  {
    id: "gamingModern46",
    category: "Gaming - Modern",
    question: "What does 'roguelike deck-builder' broadly describe?",
    options: ["A game combining deck-building with run-based progression", "A game about building a PC", "A football management simulator", "A racing game with collectible cars"],
    answer: "A game combining deck-building with run-based progression"
  },
  {
    id: "gamingModern47",
    category: "Gaming - Modern",
    question: "Which platform is associated with my PC gaming playtime statistics?",
    options: ["Steam", "Epic Games Store only", "GOG Galaxy only", "Battle.net only"],
    answer: "Steam"
  },
  {
    id: "gamingModern48",
    category: "Gaming - Modern",
    question: "What did I say about the specification of my gaming PC?",
    options: ["It's much higher-spec than I deserve", "It's barely able to run old games", "I built it for work, not gaming", "I plan to replace it every year"],
    answer: "It's much higher-spec than I deserve"
  },
  {
    id: "gamingModern49",
    category: "Gaming - Modern",
    question: "Which mobile game franchise features creatures that players catch and collect in the real world?",
    options: ["Pokémon GO", "Monster Hunter Now", "Pikmin Bloom", "Ingress"],
    answer: "Pokémon GO"
  },
  {
    id: "gamingModern50",
    category: "Gaming - Modern",
    question: "What is the contradiction I describe in my gaming habits?",
    options: ["I own loads of games but keep returning to old favourites", "I only play games on my phone", "I dislike all modern consoles", "I never play games with friends"],
    answer: "I own loads of games but keep returning to old favourites"
  }
];