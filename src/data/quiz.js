const travelQuestions = [
  {
    id: 1,
    category: "Travel",
    question: "Which US city did Ciaran visit as part of his 30th birthday trip?",
    options: ["Boston", "Chicago", "Philadelphia", "Washington, DC"],
    answer: "Chicago",
    answerQuote: "This time, going to Chicago, Cincinnati and New York.",
  },
  {
    id: 2,
    category: "Travel",
    question: "What unusual event happened during Ciaran's first trip to Florida?",
    options: ["An earthquake", "A hurricane", "A tornado", "A wildfire"],
    answer: "A hurricane",
    answerQuote: "We stayed outside the park and were there during a hurricane, which was an experience.",
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
    answerQuote: "I watched my NFL team, the Bengals, play at home and loved tailgating.",
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
    answerQuote: "Instead, we drove to Philadelphia so we could spend some time in the Amish community, explored Washington, DC, drove up to Boston to see Harvard and Salem, then back to New York.",
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
    answerQuote: "New York is just as fun as I imagined it would be, and I was so lucky to get tickets to watch the Knicks play at MSG.",
  },
  {
    id: 6,
    category: "Travel",
    question: "What cheap food helped Ciaran get through New York on his 30th birthday trip?",
    options: ["$2 tacos", "$2 hot dogs", "$2 burgers", "$2 pizzas"],
    answer: "$2 pizzas",
    answerQuote: "As NY was my last stop, though, I was doing it as cheaply as I could, and those $2 pizzas kept me going.",
  },
  {
    id: 7,
    category: "Travel",
    question: "Which Canadian city has Ciaran visited?",
    options: ["Vancouver", "Montreal", "Toronto", "Calgary"],
    answer: "Toronto",
    answerQuote: "Both times I've been to Canada, it's been to Toronto and tied into a trip to America.",
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
    answerQuote: "It's funny because both trips merge into one because both times I saw Niagara Falls, the Maple Leafs and went to the greatest ever sports bar (that I know of), \"Real Sports\".",
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
    answerQuote: "I went to Brazil with my 2 friends, Adam and Tom.",
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
    answerQuote: "It was the first time I'd travelled so far away without real adults, and on top of that, I had no return ticket.",
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
    answerQuote: "When I left my friends as they made their way to Argentina, I headed back to Rio to work in the hostel. It was the only way to prolong my trip.",
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
    answerQuote: "We arrived during the 2016 Olympics and stayed at Books Hostel in Lapa.",
  },
  {
    id: 13,
    category: "Travel",
    question: "Which Brazilian beach does Ciaran specifically mention?",
    options: ["Copacabana", "Ipanema", "Leblon", "Flamengo"],
    answer: "Ipanema",
    answerQuote: "If I had died on Ipanema Beach, I would have died happy.",
  },
  {
    id: 14,
    category: "Travel",
    question: "In which country was Ciaran born?",
    options: ["Ireland", "Scotland", "England", "Wales"],
    answer: "England",
    answerQuote: "Including England might be cheating, because it's where I was born!",
  },
  {
    id: 15,
    category: "Travel",
    question: "Which Irish city has Ciaran still never visited?",
    options: ["Cork", "Galway", "Waterford", "Dublin"],
    answer: "Dublin",
    answerQuote: "I have still never been to Dublin.",
  },
  {
    id: 16,
    category: "Travel",
    question: "What was Ciaran's first holiday abroad?",
    options: ["Bulgaria", "Cyprus", "Portugal", "France"],
    answer: "Cyprus",
    answerQuote: "Cyprus was my first holiday abroad and also my first holiday after my father passed away.",
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
    answerQuote: "I fell going down a slope, bounced on my head and a stranger saw me the next day, shocked to see I was still alive.",
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
    answerQuote: "I remember having an argument with some kids my age and settling it on the football pitch, which of course we won.",
  },
  {
    id: 19,
    category: "Travel",
    question: "Which French region did Ciaran visit with his school?",
    options: ["Normandy", "Brittany", "Dordogne", "Champagne"],
    answer: "Dordogne",
    answerQuote: "Then again at 13 with school to Dordogne.",
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
    answerQuote: "I've been on the bus to Paris a few times and drove there for the Olympics to watch water polo, then again a week later for blind football.",
  },
  {
    id: 21,
    category: "Travel",
    question: "What animal did Ciaran specifically visit at a Scottish zoo?",
    options: ["Polar bears", "Penguins", "Pandas", "Tigers"],
    answer: "Pandas",
    answerQuote: "The second time I actually remember because we went to the zoo to see pandas, and it's where I first got a taste for whiskey.",
  },
  {
    id: 22,
    category: "Travel",
    question: "What did Ciaran first get a taste for in Scotland?",
    options: ["Whisky", "Guinness", "Wine", "Cider"],
    answer: "Whisky",
    answerQuote: "The second time I actually remember because we went to the zoo to see pandas, and it's where I first got a taste for whiskey.",
  },
  {
    id: 23,
    category: "Travel",
    question: "What did Ciaran rent in Santorini?",
    options: ["A scooter", "A car", "A quad bike", "A boat"],
    answer: "A quad bike",
    answerQuote: "We rented a quad bike to ride around the island and chase the sun.",
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
    answerQuote: "I also once went to Swansea as my sister went to uni there and her graduation party was some night.",
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
    answerQuote: "Well, I live here now. And I lived here before. Both in Barcelona.",
  },
  {
    id: 26,
    category: "Travel",
    question: "Which Spanish city did Ciaran live in both times?",
    options: ["Madrid", "Valencia", "Seville", "Barcelona"],
    answer: "Barcelona",
    answerQuote: "Well, I live here now. And I lived here before. Both in Barcelona.",
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
    answerQuote: "It was cheaper to fly there and drive to Madrid than stay in Madrid, although that's a long drive.",
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
    answerQuote: "I did it so I could see Real Madrid draw with Real Betis.",
  },
  {
    id: 29,
    category: "Travel",
    question: "Which German city was particularly easy for Ciaran to reach from the Netherlands?",
    options: ["Berlin", "Munich", "Aachen", "Hamburg"],
    answer: "Aachen",
    answerQuote: "It was just a short bus ride to Aachen, or a bus and a train to Köln.",
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
    answerQuote: "Lanaken has, in my eyes, the best arcade I've been to, \"Free Play Lanaken\", just over the border.",
  },
  {
    id: 31,
    category: "Travel",
    question: "What country did Ciaran live in for nine years?",
    options: ["Belgium", "Germany", "Netherlands", "Luxembourg"],
    answer: "Netherlands",
    answerQuote: "I lived here for 9 years.",
  },
  {
    id: 32,
    category: "Travel",
    question: "Which Dutch city does Ciaran recommend as 'like Amsterdam without the sex and drugs'?",
    options: ["Rotterdam", "Utrecht", "Eindhoven", "Maastricht"],
    answer: "Utrecht",
    answerQuote: "I'll always recommend Utrecht as like Amsterdam without the sex and drugs.",
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
    answerQuote: "But also, as a romantic gift for Christmas, my partner got us tickets to go to Katowice and then on to Auschwitz camp.",
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
    answerQuote: "On the way home from one of the Christmas trips, I remembered they had the largest Jesus statue in the world, so managed to make a detour to go see it!",
  },
  {
    id: 35,
    category: "Travel",
    question: "Which country did Ciaran visit specifically to watch the Eternal Derby?",
    options: ["Croatia", "Serbia", "Bosnia and Herzegovina", "Montenegro"],
    answer: "Serbia",
    answerQuote: "We didn't stay long beyond that as we headed back to the capital to watch the Eternal Derby; Red Star Belgrade vs Partizan Belgrade.",
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
    answerQuote: "We didn't stay long beyond that as we headed back to the capital to watch the Eternal Derby; Red Star Belgrade vs Partizan Belgrade.",
  },
  {
    id: 37,
    category: "Travel",
    question: "Which country did Ciaran visit to see the Komodo Dragons?",
    options: ["Taiwan", "Indonesia", "Malaysia", "Thailand"],
    answer: "Indonesia",
    answerQuote: "My favourite animal, the Komodo Dragon, is native to an island in Indonesia and I was blessed with a chance to go.",
  },
  {
    id: 38,
    category: "Travel",
    question: "Which country did Ciaran love despite his partner considering it her least favourite stop?",
    options: ["Albania", "Kosovo", "Montenegro", "North Macedonia"],
    answer: "Albania",
    answerQuote: "If you asked my partner at the time, this was her least favourite stop on this trip. She might still think that, there wasn't too much to do and the cable car we wanted was closed and the walk back was dodgy and dirty, but I loved my time here.",
  },
  {
    id: 39,
    category: "Travel",
    question: "Which country did Ciaran say he 'LOVED'?",
    options: ["Albania", "Kosovo", "Serbia", "Slovenia"],
    answer: "Kosovo",
    answerQuote: "I LOVED Kosovo.",
  },
  {
    id: 40,
    category: "Travel",
    question: "Which Kosovo city did Ciaran describe as having a beautiful river lined with bars and cafes?",
    options: ["Pristina", "Peja", "Prizren", "Gjakova"],
    answer: "Prizren",
    answerQuote: "Pristina has the cathedral, statue of Bill Clinton and a giant flag, while Prizren had a beautiful river lined with bars and cafes.",
  },
  {
    id: 41,
    category: "Travel",
    question: "What did Ciaran's dog Soba steal in Czechia?",
    options: ["A sausage", "A football", "A chimney cake", "A sandwich"],
    answer: "A chimney cake",
    answerQuote: "My dog Soba once stole someone's chimney cake because she's cheeky as anything.",
  },
  {
    id: 42,
    category: "Travel",
    question: "Which country did Ciaran visit where he accidentally met the mayor on a walking tour?",
    options: ["Slovenia", "Slovakia", "Croatia", "Austria"],
    answer: "Slovenia",
    answerQuote: "Ljubljana was really cool. Loads of bridges and statues and, on a walking tour, actually bumped into the mayor!",
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
    answerQuote: "I watched Dinamo Zagreb win the league there and really enjoyed the city.",
  },
  {
    id: 44,
    category: "Travel",
    question: "Which country did Ciaran visit where his marathon allowed him to see more of the city?",
    options: ["Finland", "Estonia", "Latvia", "Lithuania"],
    answer: "Estonia",
    answerQuote: "Thanks to my marathon I was able to see more of here than others on the same kind of trip, but it's such a beautiful place.",
  },
  {
    id: 45,
    category: "Travel",
    question: "Which country did Ciaran describe as the home of the Moomin?",
    options: ["Sweden", "Norway", "Finland", "Denmark"],
    answer: "Finland",
    answerQuote: "Second stop on the trip, the home of the Moomin.",
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
    answerQuote: "Planned to watch the highlights on my phone and catch up, but as soon as I was in the hotel, saw the result on a newspaper.",
  },
  {
    id: 47,
    category: "Travel",
    question: "What was Ciaran's highlight of his trip to Iceland?",
    options: ["Whales", "Frozen waterfalls", "Northern lights", "Tomato soup"],
    answer: "Tomato soup",
    answerQuote: "The highlight though, you'd never guess, Tomato Soup.",
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
    answerQuote: "We went to Iceland in December with 2 goals in mind. See whales and see the northern lights.",
  },
  {
    id: 49,
    category: "Travel",
    question: "In which Moroccan city did Ciaran's taxi driver pick up his uncle?",
    options: ["Marrakesh", "Merzouga", "Fez", "Casablanca"],
    answer: "Fez",
    answerQuote: "We went to Fez, Marrakesh and Merzouga. Fez was so fun, really old town. I was meant to sort out transport from the airport, but didn't. Because of that, we got a taxi. The driver picked up his uncle, and he took us around the city.",
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
    answerQuote: "Merzouga meant that we could spend a night in the desert. Taking camels to a campsite in the desert was an experience.",
  },
];

const meQuestions = [
  {
    id: "me1",
    category: "Me",
    question: "What kind of boy was I when I was little?",
    options: ["A proper mummy's boy", "A little troublemaker", "A quiet loner", "A typical class clown"],
    answer: "A proper mummy's boy",
    answerQuote: "As a child, I was a proper mummy's boy."
  },
  {
    id: "me2",
    category: "Me",
    question: "Who did I always want to be close to as a child?",
    options: ["My dad", "My mum", "My older sister", "My grandparents"],
    answer: "My mum",
    answerQuote: "I would always be by her side."
  },
  {
    id: "me3",
    category: "Me",
    question: "Which of these activities did I love as a child?",
    options: ["Building model planes", "Fishing in rivers", "Getting muddy and climbing trees", "Collecting stamps"],
    answer: "Getting muddy and climbing trees",
    answerQuote: "I was a typical kid who loved getting dirty in the mud, climbing trees and playing sports."
  },
  {
    id: "me4",
    category: "Me",
    question: "What did my family think I might grow up to become?",
    options: ["A footballer", "A teacher", "A police officer", "A priest"],
    answer: "A priest",
    answerQuote: "For some reason, my family thought I might end up a priest"
  },
  {
    id: "me5",
    category: "Me",
    question: "Why did my family think I might become a priest?",
    options: ["I sang in a church choir", "I went to Catholic school and was a good boy", "I wanted to study theology", "My dad was a priest"],
    answer: "I went to Catholic school and was a good boy",
    answerQuote: "I think that's just because I went to a Catholic school and was a good boy."
  },
  {
    id: "me6",
    category: "Me",
    question: "What sport did I try to play every chance I got as a child?",
    options: ["Rugby", "Tennis", "Football", "Cricket"],
    answer: "Football",
    answerQuote: "I would play football every second I could during the day, before going to sleep, waking up and doing it all over again."
  },
  {
    id: "me7",
    category: "Me",
    question: "What were my favourite school subjects?",
    options: ["History and geography", "Lunchtime and home time", "PE and science", "Art and music"],
    answer: "Lunchtime and home time",
    answerQuote: "The classic: my favourite subjects were lunchtime and home time."
  },
  {
    id: "me8",
    category: "Me",
    question: "How did I generally feel about school?",
    options: ["I absolutely loved it", "I wanted to become a teacher", "I was indifferent to it", "I hated it"],
    answer: "I hated it",
    answerQuote: "My best friends were all my schoolmates, even though I hated school."
  },
  {
    id: "me9",
    category: "Me",
    question: "How old was I when my father passed away?",
    options: ["9", "11", "13", "15"],
    answer: "11",
    answerQuote: "My father passed away when I was 11."
  },
  {
    id: "me10",
    category: "Me",
    question: "What did I discover about school during my teenage years?",
    options: ["I could coast through it and still do well enough", "I needed to study every night to pass", "I was much better at science than anything else", "I wanted to leave education entirely"],
    answer: "I could coast through it and still do well enough",
    answerQuote: "I went to secondary school, where I discovered I could coast through school and still do well enough."
  },
  {
    id: "me11",
    category: "Me",
    question: "What were my school grades like?",
    options: ["Straight As", "Mostly failing", "Decent enough", "I never took any exams"],
    answer: "Decent enough",
    answerQuote: "I got decent enough grades and had my first crush (Lettie Batty. Hope she's okay!)."
  },
  {
    id: "me12",
    category: "Me",
    question: "Who was my first crush?",
    options: ["Lettie Batty", "A girl called Sophie", "A girl called Hannah", "I never had a crush at school"],
    answer: "Lettie Batty",
    answerQuote: "I got decent enough grades and had my first crush (Lettie Batty. Hope she's okay!)."
  },
  {
    id: "me13",
    category: "Me",
    question: "Which town was my secondary school in?",
    options: ["Newark", "Nottingham", "Mansfield", "Derby"],
    answer: "Mansfield",
    answerQuote: "I moved away from the school as soon as I could because 1) it was in Mansfield"
  },
  {
    id: "me14",
    category: "Me",
    question: "What was one reason I wanted to leave my secondary school?",
    options: ["The school had no sports teams", "It was in Mansfield", "It was too far from home", "It had no sixth form"],
    answer: "It was in Mansfield",
    answerQuote: "I moved away from the school as soon as I could because 1) it was in Mansfield, 2) I had a reputation thanks to my mouth and my older sister, and 3) it was in Mansfield."
  },
  {
    id: "me15",
    category: "Me",
    question: "What else contributed to my reputation at school?",
    options: ["My love of practical jokes", "My older brother", "My footballing ability", "My mouth and my older sister"],
    answer: "My mouth and my older sister",
    answerQuote: "I had a reputation thanks to my mouth and my older sister"
  },
  {
    id: "me16",
    category: "Me",
    question: "Where did I go to college?",
    options: ["Leicester", "Sheffield", "Nottingham", "Lincoln"],
    answer: "Nottingham",
    answerQuote: "I went to college in Nottingham"
  },
  {
    id: "me17",
    category: "Me",
    question: "What did college help me learn to do?",
    options: ["Step outside my comfort zone", "Avoid meeting new people", "Become a professional musician", "Manage a football club"],
    answer: "Step outside my comfort zone",
    answerQuote: "I went to college in Nottingham, where I learnt to step outside my comfort zone and made a tonne of new friends."
  },
  {
    id: "me18",
    category: "Me",
    question: "Which artist did I see live when I was 16?",
    options: ["Jay-Z", "Kanye West", "Eminem", "Dr. Dre"],
    answer: "Kanye West",
    answerQuote: "I discovered a love of live music after seeing Kanye West when I was 16"
  },
  {
    id: "me19",
    category: "Me",
    question: "What did I develop a love for after going to gigs?",
    options: ["Stand-up comedy", "Classical music", "Live music", "Musical theatre"],
    answer: "Live music",
    answerQuote: "I discovered a love of live music after seeing Kanye West when I was 16, and then seeing anyone and everyone I could once I started earning money."
  },
  {
    id: "me20",
    category: "Me",
    question: "Which of these was one of my early jobs?",
    options: ["Paper round", "Cinema manager", "Hotel receptionist", "Taxi driver"],
    answer: "Paper round",
    answerQuote: "I got my first, second, third and fourth jobs, from doing a paper round to refereeing."
  },
  {
    id: "me21",
    category: "Me",
    question: "Which other job did I have during my teenage years?",
    options: ["Lifeguarding", "Refereeing", "Barbering", "Teaching swimming"],
    answer: "Refereeing",
    answerQuote: "I got my first, second, third and fourth jobs, from doing a paper round to refereeing."
  },
  {
    id: "me22",
    category: "Me",
    question: "Where did I go on my first trip abroad without family?",
    options: ["Spain", "France", "Portugal", "Italy"],
    answer: "Portugal",
    answerQuote: "I had my first trip abroad without family, spending a week in Portugal"
  },
  {
    id: "me23",
    category: "Me",
    question: "How long was my first trip abroad without family?",
    options: ["A long weekend", "A week", "Two weeks", "A month"],
    answer: "A week",
    answerQuote: "I had my first trip abroad without family, spending a week in Portugal"
  },
  {
    id: "me24",
    category: "Me",
    question: "What did I do after my first trip abroad without family?",
    options: ["Joined the army", "Moved straight to Brazil", "Started a band", "Went to university"],
    answer: "Went to university",
    answerQuote: "I had my first trip abroad without family, spending a week in Portugal, and then went to uni."
  },
  {
    id: "me25",
    category: "Me",
    question: "What problem did I finish university with?",
    options: ["A knee that had been repaired", "A broken wrist", "A shoulder injury", "A serious ankle injury"],
    answer: "A knee that had been repaired",
    answerQuote: "I finished uni with a knee that had been repaired, only for it to need repairing again a few years later (two ACL/MCL surgeries, and it's okay for now)."
  },
  {
    id: "me26",
    category: "Me",
    question: "How many ACL/MCL surgeries have I had?",
    options: ["One", "Two", "Three", "Four"],
    answer: "Two",
    answerQuote: "I finished uni with a knee that had been repaired, only for it to need repairing again a few years later (two ACL/MCL surgeries, and it's okay for now)."
  },
  {
    id: "me27",
    category: "Me",
    question: "What happened to my knee a few years after its first repair?",
    options: ["It was completely fine forever", "I needed a replacement knee", "It needed repairing again", "I had to stop walking"],
    answer: "It needed repairing again",
    answerQuote: "I finished uni with a knee that had been repaired, only for it to need repairing again a few years later"
  },
  {
    id: "me28",
    category: "Me",
    question: "What was my first proper office job in?",
    options: ["Software engineering", "Tourism management and business travel", "Banking", "Sports journalism"],
    answer: "Tourism management and business travel",
    answerQuote: "I got my first real office job in tourism management, dealing with business travel."
  },
  {
    id: "me29",
    category: "Me",
    question: "What was the focus of my first proper office job?",
    options: ["Business travel", "Football scouting", "Restaurant bookings", "Software testing"],
    answer: "Business travel",
    answerQuote: "I got my first real office job in tourism management, dealing with business travel."
  },
  {
    id: "me30",
    category: "Me",
    question: "Which country did I visit on my first BIG trip?",
    options: ["Japan", "Australia", "Brazil", "Canada"],
    answer: "Brazil",
    answerQuote: "I moved out of the country for the first time and went on my first BIG trip to Brazil."
  },
  {
    id: "me31",
    category: "Me",
    question: "What was significant about moving abroad in my twenties?",
    options: ["It was the first time I moved out of my home country", "I moved to become a professional footballer", "I bought my first house abroad", "I moved to study medicine"],
    answer: "It was the first time I moved out of my home country",
    answerQuote: "I moved out of the country for the first time and went on my first BIG trip to Brazil."
  },
  {
    id: "me32",
    category: "Me",
    question: "What happened in my romantic life during my twenties?",
    options: ["I never had a relationship", "I got married twice", "I only dated while travelling", "I had a girlfriend or two before meeting my current girlfriend"],
    answer: "I had a girlfriend or two before meeting my current girlfriend",
    answerQuote: "I broke up with a girlfriend or two and met my current girlfriend, who took up most of the decade, and many more years beyond it."
  },
  {
    id: "me33",
    category: "Me",
    question: "Who took up much of my twenties and beyond?",
    options: ["My university housemate", "My current girlfriend", "My first boss", "My childhood best friend"],
    answer: "My current girlfriend",
    answerQuote: "I broke up with a girlfriend or two and met my current girlfriend, who took up most of the decade, and many more years beyond it."
  },
  {
    id: "me34",
    category: "Me",
    question: "How would I describe the number of countries I visited in my twenties?",
    options: ["Exactly five", "Fewer than five", "More than I can count", "Only countries in Europe"],
    answer: "More than I can count",
    answerQuote: "I travelled to more countries than I can count and developed into the human I am today, with the help of the people around me."
  },
  {
    id: "me35",
    category: "Me",
    question: "What did I feel helped me become the person I am today?",
    options: ["The people around me", "School exams alone", "Living in one place", "Avoiding new experiences"],
    answer: "The people around me",
    answerQuote: "I travelled to more countries than I can count and developed into the human I am today, with the help of the people around me."
  },
  {
    id: "me36",
    category: "Me",
    question: "Who else did I lose during my twenties?",
    options: ["My university tutor", "My first manager", "My childhood football coach", "More family members, including my mother"],
    answer: "More family members, including my mother",
    answerQuote: "I also suffered the loss of more family members, including my mother, during the world-altering event of the COVID-19 pandemic."
  },
  {
    id: "me37",
    category: "Me",
    question: "During which major global event did my mother pass away?",
    options: ["The 2008 financial crisis", "The COVID-19 pandemic", "The 2012 Olympics", "The 2022 World Cup"],
    answer: "The COVID-19 pandemic",
    answerQuote: "I also suffered the loss of more family members, including my mother, during the world-altering event of the COVID-19 pandemic."
  },
  {
    id: "me38",
    category: "Me",
    question: "How did I describe my twenties overall?",
    options: ["Quiet and predictable", "A complete waste of time", "A dramatic decade", "The easiest decade of my life"],
    answer: "A dramatic decade",
    answerQuote: "It was a dramatic decade for me."
  },
  {
    id: "me39",
    category: "Me",
    question: "In which city am I happily living in my thirties?",
    options: ["Barcelona", "Maastricht", "Nottingham", "Lisbon"],
    answer: "Barcelona",
    answerQuote: "I'm happily living in Barcelona, trying to change my career into something I've wanted to do for a long, long time."
  },
  {
    id: "me40",
    category: "Me",
    question: "What major change am I trying to make in my thirties?",
    options: ["Become a full-time musician", "Open a restaurant", "Move into professional sport", "Change my career"],
    answer: "Change my career",
    answerQuote: "I'm happily living in Barcelona, trying to change my career into something I've wanted to do for a long, long time."
  },
  {
    id: "me41",
    category: "Me",
    question: "How long have I wanted to make this career change?",
    options: ["A few weeks", "A long, long time", "Since moving to Barcelona", "Only since turning 30"],
    answer: "A long, long time",
    answerQuote: "I'm happily living in Barcelona, trying to change my career into something I've wanted to do for a long, long time."
  },
  {
    id: "me42",
    category: "Me",
    question: "How do I feel about what lies ahead in my thirties?",
    options: ["Mostly worried", "Ready to retire", "Excited about what's ahead", "Unsure whether to travel again"],
    answer: "Excited about what's ahead",
    answerQuote: "I've got nothing but excitement ahead of me, and I look forward to what this decade has in store for me."
  },
  {
    id: "me43",
    category: "Me",
    question: "Which age range did I describe as the defining years of my life?",
    options: ["0–10", "10–20", "20–30", "30–40"],
    answer: "10–20",
    answerQuote: "These years hit me like a tonne of bricks and were definitely the defining years of my life."
  },
  {
    id: "me44",
    category: "Me",
    question: "Which age range did I describe as the time I discovered who I really was?",
    options: ["0–10", "10–20", "20–30", "30–40"],
    answer: "20–30",
    answerQuote: "This is where I discovered who I really was."
  },
  {
    id: "me45",
    category: "Me",
    question: "Which age range did I describe as already bringing dreams I could barely imagine a decade earlier?",
    options: ["0–10", "10–20", "20–30", "30–40"],
    answer: "30–40",
    answerQuote: "Almost four years into this decade of my life, I've already ticked off things I could only have dreamed of a decade ago."
  },
  {
    id: "me46",
    category: "Me",
    question: "What did I do as a teenager once I started earning money?",
    options: ["Went to see as much live music as I could", "Stopped going out altogether", "Saved everything for a car", "Started travelling around Asia"],
    answer: "Went to see as much live music as I could",
    answerQuote: "I discovered a love of live music after seeing Kanye West when I was 16, and then seeing anyone and everyone I could once I started earning money."
  },
  {
    id: "me47",
    category: "Me",
    question: "What combination best describes my childhood interests?",
    options: ["Reading, chess and gardening", "Cooking, fishing and cycling", "Mud, trees and sport", "Computers, astronomy and swimming"],
    answer: "Mud, trees and sport",
    answerQuote: "I was a typical kid who loved getting dirty in the mud, climbing trees and playing sports."
  },
  {
    id: "me48",
    category: "Me",
    question: "What did I say about my knee at the time of writing?",
    options: ["It was worse than ever", "It was okay for now", "It had never caused any problems", "It had been replaced"],
    answer: "It was okay for now",
    answerQuote: "I finished uni with a knee that had been repaired, only for it to need repairing again a few years later (two ACL/MCL surgeries, and it's okay for now)."
  },
  {
    id: "me49",
    category: "Me",
    question: "What was one big milestone during my twenties besides work and relationships?",
    options: ["Buying a vineyard", "Becoming a parent", "Winning a national sports title", "Travelling to many more countries"],
    answer: "Travelling to many more countries",
    answerQuote: "I travelled to more countries than I can count and developed into the human I am today, with the help of the people around me."
  },
  {
    id: "me50",
    category: "Me",
    question: "What do I hope to find in the decade ahead?",
    options: ["A quiet life with no changes", "A return to school in Mansfield", "More exciting experiences and a new career direction", "A chance to give up travelling forever"],
    answer: "More exciting experiences and a new career direction",
    answerQuote: "I've got nothing but excitement ahead of me, and I look forward to what this decade has in store for me."
  }
];

const sportsPlayingQuestions = [
  {
    id: "sportsPlaying1",
    category: "Sports - Playing",
    question: "Which football club did I play for for more than ten years?",
    options: ["Newark Town FC", "VV Scharn", "RKHSV Heer", "MVV Maastricht"],
    answer: "Newark Town FC",
    answerQuote: "Newark Town is where I spent over 10 years playing, and at one point I played with future England international Patrick Bamford."
  },
  {
    id: "sportsPlaying2",
    category: "Sports - Playing",
    question: "Which future England international did I play alongside?",
    options: ["Harry Kane", "Patrick Bamford", "Jack Grealish", "Marcus Rashford"],
    answer: "Patrick Bamford",
    answerQuote: "Newark Town is where I spent over 10 years playing, and at one point I played with future England international Patrick Bamford."
  },
  {
    id: "sportsPlaying3",
    category: "Sports - Playing",
    question: "Which position did I play most often in football?",
    options: ["Striker", "Left winger", "Goalkeeper", "Left-back"],
    answer: "Goalkeeper",
    answerQuote: "I've played in almost every position, but mainly GK, CB, RB and CM."
  },
  {
    id: "sportsPlaying4",
    category: "Sports - Playing",
    question: "Which of these positions have I played?",
    options: ["Only striker and winger", "Only goalkeeper", "Only centre-back and striker", "Goalkeeper, centre-back, right-back and central midfield"],
    answer: "Goalkeeper, centre-back, right-back and central midfield",
    answerQuote: "I've played in almost every position, but mainly GK, CB, RB and CM. I like to be as far from the other team's goal as possible at all times."
  },
  {
    id: "sportsPlaying5",
    category: "Sports - Playing",
    question: "What was my team's usual rival when I was playing youth football?",
    options: ["Farndon", "Mansfield Town", "Nottingham Forest", "Lincoln City"],
    answer: "Farndon",
    answerQuote: "Farndon won the league every year, but we pushed them close"
  },
  {
    id: "sportsPlaying6",
    category: "Sports - Playing",
    question: "What achievement did my youth team have against Farndon?",
    options: ["We beat them in a cup final", "We finished second in the league and pushed them close", "We won the league unbeaten", "We knocked them out of two tournaments"],
    answer: "We finished second in the league and pushed them close",
    answerQuote: "For Newark Town, I'd say the highlights were coming second in the league at Under-11s (Farndon won the league every year, but we pushed them close)"
  },
  {
    id: "sportsPlaying7",
    category: "Sports - Playing",
    question: "In which country did I play in two international football tournaments?",
    options: ["Belgium", "Portugal", "France", "Germany"],
    answer: "France",
    answerQuote: "For Newark Town, I'd say the highlights were coming second in the league at Under-11s (Farndon won the league every year, but we pushed them close), playing in two international tournaments in France, and playing a game to commemorate the end of the First World War in Flanders Fields."
  },
  {
    id: "sportsPlaying8",
    category: "Sports - Playing",
    question: "What historic event did one of my football matches commemorate?",
    options: ["The end of the Second World War", "The founding of my hometown", "The first World Cup", "The end of the First World War"],
    answer: "The end of the First World War",
    answerQuote: "For Newark Town, I'd say the highlights were coming second in the league at Under-11s (Farndon won the league every year, but we pushed them close), playing in two international tournaments in France, and playing a game to commemorate the end of the First World War in Flanders Fields."
  },
  {
    id: "sportsPlaying9",
    category: "Sports - Playing",
    question: "Where was the match commemorating the end of the First World War played?",
    options: ["Flanders Fields", "Wembley", "The Stade de France", "Old Trafford"],
    answer: "Flanders Fields",
    answerQuote: "For Newark Town, I'd say the highlights were coming second in the league at Under-11s (Farndon won the league every year, but we pushed them close), playing in two international tournaments in France, and playing a game to commemorate the end of the First World War in Flanders Fields."
  },
  {
    id: "sportsPlaying10",
    category: "Sports - Playing",
    question: "Which club did I join after leaving VV Scharn?",
    options: ["Newark Town FC", "RKHSV Heer", "MVV Maastricht", "A local Barcelona club"],
    answer: "RKHSV Heer",
    answerQuote: "I quit to have an operation on my knee and controversially transferred to their arch-rivals Heer."
  },
  {
    id: "sportsPlaying11",
    category: "Sports - Playing",
    question: "Why did I leave VV Scharn?",
    options: ["I was offered a professional contract", "I moved to England", "I needed a knee operation", "I stopped enjoying football"],
    answer: "I needed a knee operation",
    answerQuote: "I quit to have an operation on my knee and controversially transferred to their arch-rivals Heer."
  },
  {
    id: "sportsPlaying12",
    category: "Sports - Playing",
    question: "What made my move from Scharn to Heer controversial?",
    options: ["Heer played in a different country", "I had never played football before", "I moved to a club in a higher division", "Heer were Scharn's arch-rivals"],
    answer: "Heer were Scharn's arch-rivals",
    answerQuote: "I quit to have an operation on my knee and controversially transferred to their arch-rivals Heer."
  },
  {
    id: "sportsPlaying13",
    category: "Sports - Playing",
    question: "What happened after I moved to Heer?",
    options: ["I won the league again", "I immediately retired", "I became a referee", "I switched to ice hockey"],
    answer: "I won the league again",
    answerQuote: "With Heer, we started in the league I had won a few years earlier and went through and won it again!"
  },
  {
    id: "sportsPlaying14",
    category: "Sports - Playing",
    question: "Which team have I described as the most fun football team I've ever played for?",
    options: ["Newark Town FC", "RKHSV Heer", "VV Scharn", "My university team"],
    answer: "RKHSV Heer",
    answerQuote: "I had so much fun playing with this team. It already had some friends on it, but this is by far the most fun I've ever had playing football in my life."
  },
  {
    id: "sportsPlaying15",
    category: "Sports - Playing",
    question: "What is my current status as a footballer?",
    options: ["Playing professionally", "Coaching a youth team", "An unsigned free agent", "Retired permanently"],
    answer: "An unsigned free agent",
    answerQuote: "I'm currently an unsigned free agent, however, I don't think Man Utd are looking at me anytime soon."
  },
  {
    id: "sportsPlaying16",
    category: "Sports - Playing",
    question: "Which sport have I never actually played, despite loving the idea of playing it?",
    options: ["Field hockey", "Tennis", "Football", "Ice hockey"],
    answer: "Ice hockey",
    answerQuote: "Okay, so I've never actually PLAYED ice hockey, but it's my missed love."
  },
  {
    id: "sportsPlaying17",
    category: "Sports - Playing",
    question: "What has been one barrier to getting into playing ice hockey?",
    options: ["The cost of getting started", "Not liking team sports", "Being unable to skate at all", "A lack of interest in the sport"],
    answer: "The cost of getting started",
    answerQuote: "I always wanted to, but it is an expensive sport to start."
  },
  {
    id: "sportsPlaying18",
    category: "Sports - Playing",
    question: "What do I sometimes do to keep improving my skating?",
    options: ["Play ice hockey in a local league", "Take ice-skating lessons or skate freely", "Train with a professional hockey team", "Practise skiing indoors"],
    answer: "Take ice-skating lessons or skate freely",
    answerQuote: "I occasionally take ice skating lessons or just free skate and rollerblade to try and get my ability up in case the chance ever shows itself!"
  },
  {
    id: "sportsPlaying19",
    category: "Sports - Playing",
    question: "Who introduced me to playing tennis?",
    options: ["My dad", "My university housemate Clayton", "My friend JJ", "My friend Oliver"],
    answer: "My friend JJ",
    answerQuote: "In 2015, my friend JJ and I took up tennis."
  },
  {
    id: "sportsPlaying20",
    category: "Sports - Playing",
    question: "In which year did I start playing tennis?",
    options: ["2008", "2012", "2015", "2019"],
    answer: "2015",
    answerQuote: "In 2015, my friend JJ and I took up tennis."
  },
  {
    id: "sportsPlaying21",
    category: "Sports - Playing",
    question: "How did my tennis serve develop over time?",
    options: ["I went from struggling to get a serve in to occasionally hitting aces", "I stopped serving and played only volleys", "I started with aces but gradually lost my serve", "I switched to underarm serves exclusively"],
    answer: "I went from struggling to get a serve in to occasionally hitting aces",
    answerQuote: "I went from having unlimited serves until I could get it in, to getting the occasional ace and winning more than I lost!"
  },
  {
    id: "sportsPlaying22",
    category: "Sports - Playing",
    question: "What is the aim of the table-tennis game I enjoyed called 'round the table'?",
    options: ["Score ten points without moving", "Keep the ball bouncing on your bat", "Win three consecutive games against one opponent", "Run to the other side after your shot and avoid being knocked out"],
    answer: "Run to the other side after your shot and avoid being knocked out",
    answerQuote: "The best game was round the table, where you'd take your shot and run to the other side of the table and join the queue until it was your shot. You miss and you're out. Last person standing wins."
  },
  {
    id: "sportsPlaying23",
    category: "Sports - Playing",
    question: "Who ran a school table-tennis club that I attended?",
    options: ["My dad", "My friend Oliver's grandad", "My football coach", "My college teacher"],
    answer: "My friend Oliver's grandad",
    answerQuote: "When I was younger, my best friend Oliver's grandad ran a table tennis club at my school, and I went every week."
  },
  {
    id: "sportsPlaying24",
    category: "Sports - Playing",
    question: "Which sport did I play for a year at university after my friend Owain asked me to join?",
    options: ["Rugby", "Lacrosse", "Field hockey", "Cricket"],
    answer: "Field hockey",
    answerQuote: "I did, however, play field hockey! For a year at uni, my friend Owain asked me to play for his team."
  },
  {
    id: "sportsPlaying25",
    category: "Sports - Playing",
    question: "What did I achieve while playing field hockey for the university's second team?",
    options: ["I won the league and played once for the first team", "I became the first team's captain", "I won a national university championship", "I scored a hat-trick in a cup final"],
    answer: "I won the league and played once for the first team",
    answerQuote: "I managed to play once for the first team while also winning the league with the seconds."
  }
];

const sportsWatchingQuestions = [
  {
    id: "sportsWatching1",
    category: "Sports - Watching",
    question: "Which three football clubs have I had season tickets for?",
    options: ["Manchester United, MVV Maastricht and RCD Espanyol", "Manchester City, Ajax and FC Barcelona", "Liverpool, Feyenoord and Real Madrid", "Nottingham Forest, PSV and Atlético Madrid"],
    answer: "Manchester United, MVV Maastricht and RCD Espanyol",
    answerQuote: "I've been blessed to have had season tickets at three clubs in three countries: Manchester United, MVV Maastricht and RCD Espanyol."
  },
  {
    id: "sportsWatching2",
    category: "Sports - Watching",
    question: "Which World Cup match is one of my earliest football memories?",
    options: ["Brazil vs Germany in 2002", "England vs Argentina in 1998", "France vs Italy in 2006", "England vs Germany in 1990"],
    answer: "England vs Argentina in 1998",
    answerQuote: "Some of my earliest memories include watching England vs Argentina in the '98 World Cup."
  },
  {
    id: "sportsWatching3",
    category: "Sports - Watching",
    question: "Where was I watching England vs Argentina in the 1998 World Cup?",
    options: ["At Wembley", "At school", "In the pub with my dad", "At a friend's house"],
    answer: "In the pub with my dad",
    answerQuote: "My dad was actually able to take me out of school to watch it with him in the pub, pint in hand."
  },
  {
    id: "sportsWatching4",
    category: "Sports - Watching",
    question: "Which team did Manchester United beat on the way to winning the Champions League in 2008?",
    options: ["AC Milan", "Barcelona", "Real Madrid", "Inter Milan"],
    answer: "Barcelona",
    answerQuote: "Countless matches, including winning the title against Spurs in '99, beating Barcelona on the way to winning the Champions League in '08, beating the noisy neighbours 4–3 with a 96th-minute winner, and seeing Nani's \"seal dribble\" against Arsenal as we beat them 4–0."
  },
  {
    id: "sportsWatching5",
    category: "Sports - Watching",
    question: "Which dramatic Manchester United derby win do I remember?",
    options: ["A 3–0 win with a 90th-minute penalty", "A 2–1 win after extra time", "A 5–0 win at half-time", "A 4–3 win with a 96th-minute winner"],
    answer: "A 4–3 win with a 96th-minute winner",
    answerQuote: "Countless matches, including winning the title against Spurs in '99, beating Barcelona on the way to winning the Champions League in '08, beating the noisy neighbours 4–3 with a 96th-minute winner, and seeing Nani's \"seal dribble\" against Arsenal as we beat them 4–0."
  },
  {
    id: "sportsWatching6",
    category: "Sports - Watching",
    question: "Which Manchester United player performed the famous 'seal dribble' against Arsenal?",
    options: ["Cristiano Ronaldo", "Wayne Rooney", "Nani", "Ryan Giggs"],
    answer: "Nani",
    answerQuote: "Countless matches, including winning the title against Spurs in '99, beating Barcelona on the way to winning the Champions League in '08, beating the noisy neighbours 4–3 with a 96th-minute winner, and seeing Nani's \"seal dribble\" against Arsenal as we beat them 4–0."
  },
  {
    id: "sportsWatching7",
    category: "Sports - Watching",
    question: "Which team beat Manchester United 6–1 on my birthday?",
    options: ["Chelsea", "Manchester City", "Liverpool", "Arsenal"],
    answer: "Manchester City",
    answerQuote: "As is the case with football, though, I've also seen some terrible games, like the cheats beating us 6–1 on my birthday, no less."
  },
  {
    id: "sportsWatching8",
    category: "Sports - Watching",
    question: "Approximately how many countries have I watched football in?",
    options: ["Around four", "Around eight", "Around twelve", "More than thirty"],
    answer: "Around twelve",
    answerQuote: "Part of the reason I travel is to watch football around the world, and I've seen football live in, I think, 12 countries."
  },
  {
    id: "sportsWatching9",
    category: "Sports - Watching",
    question: "Which NFL team do I support?",
    options: ["Cincinnati Bengals", "Cleveland Browns", "Pittsburgh Steelers", "Baltimore Ravens"],
    answer: "Cincinnati Bengals",
    answerQuote: "My team are the Bengals, and I've seen them in London against the Rams, in Cincinnati against the Falcons, and in New York against the Giants."
  },
  {
    id: "sportsWatching10",
    category: "Sports - Watching",
    question: "Which team did the Bengals play when I watched them in London?",
    options: ["The New York Giants", "The Atlanta Falcons", "The Los Angeles Rams", "The Dallas Cowboys"],
    answer: "The Los Angeles Rams",
    answerQuote: "My team are the Bengals, and I've seen them in London against the Rams, in Cincinnati against the Falcons, and in New York against the Giants."
  },
  {
    id: "sportsWatching11",
    category: "Sports - Watching",
    question: "Where have I watched the Bengals play the Falcons?",
    options: ["London and Madrid", "Cincinnati and Madrid", "New York and London", "Cincinnati and New York"],
    answer: "Cincinnati and Madrid",
    answerQuote: "My team are the Bengals, and I've seen them in London against the Rams, in Cincinnati against the Falcons, and in New York against the Giants. I'll also be going to Madrid in November to watch them play the Falcons (again)."
  },
  {
    id: "sportsWatching12",
    category: "Sports - Watching",
    question: "Which team did I watch the Bengals play in New York?",
    options: ["The Jets", "The Giants", "The Bills", "The Patriots"],
    answer: "The Giants",
    answerQuote: "My team are the Bengals, and I've seen them in London against the Rams, in Cincinnati against the Falcons, and in New York against the Giants."
  },
  {
    id: "sportsWatching13",
    category: "Sports - Watching",
    question: "Which now-defunct German American football team have I watched?",
    options: ["Berlin Thunder", "Hamburg Sea Devils", "Cologne Centurions", "Frankfurt Galaxy"],
    answer: "Cologne Centurions",
    answerQuote: "I've also watched some German American football, but sadly, the Cologne Centurions are now defunct."
  },
  {
    id: "sportsWatching14",
    category: "Sports - Watching",
    question: "Why did going to university basketball games become especially fun for me?",
    options: ["My housemate Clayton played for the team and helped us get to know the players", "I had a season ticket from childhood", "The games were always free for everyone", "I was studying to become a basketball coach"],
    answer: "My housemate Clayton played for the team and helped us get to know the players",
    answerQuote: "My first taste of live basketball was at uni, where my housemate Clayton was a member of the team. Through him, we managed to make friends with the whole team, which made going to games, home and away, a lot of fun."
  },
  {
    id: "sportsWatching15",
    category: "Sports - Watching",
    question: "Which NBA team did I watch in New York?",
    options: ["Brooklyn Nets", "Boston Celtics", "Chicago Bulls", "New York Knicks"],
    answer: "New York Knicks",
    answerQuote: "I also went to see the Knicks in New York, where they won in overtime, so at least I got my money's worth!"
  },
  {
    id: "sportsWatching16",
    category: "Sports - Watching",
    question: "What happened during the Knicks game I attended?",
    options: ["The game was abandoned", "The Knicks won in overtime", "The Knicks lost by one point", "The game ended in a tie"],
    answer: "The Knicks won in overtime",
    answerQuote: "I also went to see the Knicks in New York, where they won in overtime, so at least I got my money's worth!"
  },
  {
    id: "sportsWatching17",
    category: "Sports - Watching",
    question: "Where did I experience my favourite basketball atmosphere?",
    options: ["New York", "Barcelona", "London", "Kaunas"],
    answer: "Kaunas",
    answerQuote: "The best basketball atmosphere I've experienced, though, was in Kaunas watching Žalgiris. Being in an arena with the whole crowd bouncing... there's nothing like it!"
  },
  {
    id: "sportsWatching18",
    category: "Sports - Watching",
    question: "Which basketball team did I watch in Kaunas?",
    options: ["Žalgiris", "Rytas", "Real Madrid", "Fenerbahçe"],
    answer: "Žalgiris",
    answerQuote: "The best basketball atmosphere I've experienced, though, was in Kaunas watching Žalgiris. Being in an arena with the whole crowd bouncing... there's nothing like it!"
  },
  {
    id: "sportsWatching19",
    category: "Sports - Watching",
    question: "In which four countries have I watched ice hockey?",
    options: ["Canada, England, Belgium and Germany", "Canada, France, Sweden and Finland", "England, Spain, Italy and Germany", "Belgium, Netherlands, Austria and Czechia"],
    answer: "Canada, England, Belgium and Germany",
    answerQuote: "I've seen ice hockey played in four countries so far: Canada, England, Belgium and Germany."
  },
  {
    id: "sportsWatching20",
    category: "Sports - Watching",
    question: "Which country did I say had the best quality of ice hockey?",
    options: ["Germany", "England", "Canada", "Belgium"],
    answer: "Canada",
    answerQuote: "In Germany, they have the best atmosphere; in Canada, they have the best quality; in England, they have the best overall experience. But Belgium was something else."
  },
  {
    id: "sportsWatching21",
    category: "Sports - Watching",
    question: "Which ice-hockey team did I watch in Belgium?",
    options: ["Liège Bulldogs", "Cologne Centurions", "Brussels Bears", "Antwerp Giants"],
    answer: "Liège Bulldogs",
    answerQuote: ""
  },
  {
    id: "sportsWatching22",
    category: "Sports - Watching",
    question: "What was the score when the Bulldogs came back in the playoff final I remember?",
    options: ["They came back from 3–0 down to win 4–3", "They came back from 4–1 down to win 5–4 in overtime", "They came back from 5–2 down to win 6–5", "They came back from 2–0 down to win 3–2"],
    answer: "They came back from 4–1 down to win 5–4 in overtime",
    answerQuote: "I have no clue how many games I went to with the Bulldogs, but one day stands out above all others. The team was in the final game of the playoffs and came back from 4–1 down to win 5–4 in overtime."
  },
  {
    id: "sportsWatching23",
    category: "Sports - Watching",
    question: "Why did Bulldogs player Darques recognise me after that playoff game?",
    options: ["I had played against him years earlier", "I had interviewed him on television", "He knew my football coach", "He had seen a video I made that had been shared around the team"],
    answer: "He had seen a video I made that had been shared around the team",
    answerQuote: "One of the players, Darques, recognised me from a video I'd made days before and said it had been passed around the team."
  },
  {
    id: "sportsWatching24",
    category: "Sports - Watching",
    question: "Which sport did I watch at the Olympics?",
    options: ["Water polo", "Fencing", "Handball", "Beach volleyball"],
    answer: "Water polo",
    answerQuote: "I've been to the Olympics to watch water polo and the Paralympics for blind football."
  },
  {
    id: "sportsWatching25",
    category: "Sports - Watching",
    question: "Which sport did I watch at the Paralympics?",
    options: ["Wheelchair basketball", "Blind football", "Sitting volleyball", "Para ice hockey"],
    answer: "Blind football",
    answerQuote: "I've been to the Olympics to watch water polo and the Paralympics for blind football."
  }
];

const gamingRetroQuestions = [
  {
    id: "gamingRetro1",
    category: "Gaming - Retro",
    question: "What was the first console I ever owned?",
    options: ["NES", "Game Boy", "PlayStation", "Nintendo 64"],
    answer: "NES",
    answerQuote: "The first console I ever owned was an NES."
  },
  {
    id: "gamingRetro2",
    category: "Gaming - Retro",
    question: "Which terrible football game did I own for the NES?",
    options: ["Goal!", "International Superstar Soccer", "Sensible Soccer", "FIFA 96"],
    answer: "Goal!",
    answerQuote: "I only had two games at the time: \"Goal\", which was a terrible football game, and \"Kirby's Adventure in Dream Land\"."
  },
  {
    id: "gamingRetro3",
    category: "Gaming - Retro",
    question: "Which Kirby game did I own on the NES?",
    options: ["Kirby's Dream Land", "Kirby's Adventure in Dream Land", "Kirby Super Star", "Kirby 64"],
    answer: "Kirby's Adventure in Dream Land",
    answerQuote: "I only had two games at the time: \"Goal\", which was a terrible football game, and \"Kirby's Adventure in Dream Land\"."
  },
  {
    id: "gamingRetro4",
    category: "Gaming - Retro",
    question: "Which Kirby character did I struggle to beat at the end?",
    options: ["King Dedede", "Meta Knight", "Waddle Dee", "Nightmare"],
    answer: "King Dedede",
    answerQuote: "I remember Kirby being impossible to complete at the time, especially beating Dedede at the end."
  },
  {
    id: "gamingRetro5",
    category: "Gaming - Retro",
    question: "How long did it take me to reach 100% in Kirby as an adult?",
    options: ["About 20 minutes", "A little over an hour", "Four hours", "A full weekend"],
    answer: "A little over an hour",
    answerQuote: "I picked it back up as an adult, and it took me a little over an hour to reach 100%."
  },
  {
    id: "gamingRetro6",
    category: "Gaming - Retro",
    question: "Which game did I pick up for the NES that involved shooting ducks?",
    options: ["Duck Hunt", "Hogan's Alley", "Wild Gunman", "Time Crisis"],
    answer: "Duck Hunt",
    answerQuote: "I picked up Duck Hunt one day, but I swear my TV made me hit no matter what."
  },
  {
    id: "gamingRetro7",
    category: "Gaming - Retro",
    question: "What colour was my Game Boy Colour?",
    options: ["Purple", "Atomic purple", "Green", "Yellow"],
    answer: "Purple",
    answerQuote: "I had the Colour in purple and eventually an Advance SP with tribal markings."
  },
  {
    id: "gamingRetro8",
    category: "Gaming - Retro",
    question: "Which Game Boy model did I eventually own with tribal markings?",
    options: ["Game Boy Micro", "Game Boy Advance SP", "Game Boy Pocket", "Game Boy Light"],
    answer: "Game Boy Advance SP",
    answerQuote: "I had the Colour in purple and eventually an Advance SP with tribal markings. I was a cool kid."
  },
  {
    id: "gamingRetro9",
    category: "Gaming - Retro",
    question: "Which Pokémon game was I particularly obsessed with?",
    options: ["Pokémon Yellow", "Pokémon Crystal", "Pokémon Emerald", "Pokémon Gold"],
    answer: "Pokémon Crystal",
    answerQuote: "Pokémon Crystal unofficially must have the most hours I've ever put into a game because I was obsessed with it."
  },
  {
    id: "gamingRetro10",
    category: "Gaming - Retro",
    question: "Who is my favourite Pokémon?",
    options: ["Pikachu", "Bulbasaur", "Charizard", "Squirtle"],
    answer: "Bulbasaur",
    answerQuote: "My favourite Pokémon is Bulbasaur, and even though he wasn't catchable for me in the game (nobody to trade with), I would complete the game and repeat it so often."
  },
  {
    id: "gamingRetro11",
    category: "Gaming - Retro",
    question: "Why couldn't I catch my favourite Pokémon in Pokémon Crystal?",
    options: ["It was locked behind a badge", "It was a version exclusive", "I had nobody to trade with", "It only appeared after midnight"],
    answer: "I had nobody to trade with",
    answerQuote: "My favourite Pokémon is Bulbasaur, and even though he wasn't catchable for me in the game (nobody to trade with), I would complete the game and repeat it so often."
  },
  {
    id: "gamingRetro12",
    category: "Gaming - Retro",
    question: "Which Nintendo 64 character am I pretty sure I'm undefeated with in Mario Kart 64?",
    options: ["Yoshi", "Bowser", "Toad", "Donkey Kong"],
    answer: "Bowser",
    answerQuote: "I'm pretty sure I'm undefeated in Mario Kart 64 as Bowser."
  },
  {
    id: "gamingRetro13",
    category: "Gaming - Retro",
    question: "Which game made me cry when I rented it because I couldn't work out how to play?",
    options: ["GoldenEye 007", "Super Smash Bros.", "Mario Party", "Diddy Kong Racing"],
    answer: "Super Smash Bros.",
    answerQuote: "I cried when I rented Super Smash Bros. from Blockbuster because I didn't understand how to play it."
  },
  {
    id: "gamingRetro14",
    category: "Gaming - Retro",
    question: "Which video rental shop did I rent Super Smash Bros. from?",
    options: ["Blockbuster", "Choices", "Ritz Video", "Hollywood Video"],
    answer: "Blockbuster",
    answerQuote: "I cried when I rented Super Smash Bros. from Blockbuster because I didn't understand how to play it."
  },
  {
    id: "gamingRetro15",
    category: "Gaming - Retro",
    question: "Which game did we play regularly at university alongside Mario Kart?",
    options: ["Pokémon Stadium", "Perfect Dark", "F-Zero X", "Banjo-Tooie"],
    answer: "Pokémon Stadium",
    answerQuote: "At uni, it was a staple of the house, with us playing Mario Kart, GoldenEye or Pokémon Stadium weekly, if not daily, over the three years I was in Stoke."
  },
  {
    id: "gamingRetro16",
    category: "Gaming - Retro",
    question: "In which city did I spend my three university years playing Nintendo 64 games?",
    options: ["Nottingham", "Stoke", "Newcastle", "Sheffield"],
    answer: "Stoke",
    answerQuote: "At uni, it was a staple of the house, with us playing Mario Kart, GoldenEye or Pokémon Stadium weekly, if not daily, over the three years I was in Stoke."
  },
  {
    id: "gamingRetro17",
    category: "Gaming - Retro",
    question: "Which Nintendo console was the first one I got while it was still new?",
    options: ["Nintendo 64", "GameCube", "Wii", "NES"],
    answer: "GameCube",
    answerQuote: "I loved my GameCube, and it was the first time I ever got a console while it was still new."
  },
  {
    id: "gamingRetro18",
    category: "Gaming - Retro",
    question: "Which shop did I go to to buy my GameCube?",
    options: ["Currys", "Argos", "Comet", "Dixons"],
    answer: "Currys",
    answerQuote: "I remember going to Currys and getting one."
  },
  {
    id: "gamingRetro19",
    category: "Gaming - Retro",
    question: "Which GameCube game did I love and can still quote?",
    options: ["Super Mario Sunshine", "Star Fox", "Luigi's Mansion", "Metroid Prime"],
    answer: "Star Fox",
    answerQuote: "I played all kinds of games on this, but I loved Star Fox! I can still quote that game even now!"
  },
  {
    id: "gamingRetro20",
    category: "Gaming - Retro",
    question: "Which GameCube game did I want to dig out and play again?",
    options: ["007: Rogue Agent", "TimeSplitters 2", "Pikmin", "Eternal Darkness"],
    answer: "007: Rogue Agent",
    answerQuote: "I need to get this back out and throw on some 007: Rogue Agent."
  },
  {
    id: "gamingRetro21",
    category: "Gaming - Retro",
    question: "Which console did I never actually own, despite playing it through my sister?",
    options: ["PlayStation", "PlayStation 2", "Sega Saturn", "Dreamcast"],
    answer: "PlayStation",
    answerQuote: "I never actually owned a PS1, but my sister did, so in my eyes, it was as good as mine."
  },
  {
    id: "gamingRetro22",
    category: "Gaming - Retro",
    question: "Which two games did I play on the original PlayStation without ever completing them?",
    options: ["Tomb Raider 1 and 2", "Crash Bandicoot 1 and 2", "Resident Evil 1 and 2", "Spyro 1 and 2"],
    answer: "Tomb Raider 1 and 2",
    answerQuote: "Playing through Tomb Raider 1 and 2 but never completing them."
  },
  {
    id: "gamingRetro23",
    category: "Gaming - Retro",
    question: "Where did I sometimes buy random off-brand PlayStation games?",
    options: ["Supermarkets", "Petrol stations", "Airport shops", "School fairs"],
    answer: "Petrol stations",
    answerQuote: "Grabbing random off-brand games at petrol stations."
  },
  {
    id: "gamingRetro24",
    category: "Gaming - Retro",
    question: "Where did I get demo discs that helped develop my love of gaming?",
    options: ["Newspapers", "Magazines", "School libraries", "Video rental shops"],
    answer: "Magazines",
    answerQuote: "Getting demos out of magazines. This is where my true love of gaming really developed."
  },
  {
    id: "gamingRetro25",
    category: "Gaming - Retro",
    question: "Which Grand Theft Auto game did I mention playing on the PS2?",
    options: ["GTA III", "GTA: Vice City", "GTA: San Andreas", "GTA: Liberty City Stories"],
    answer: "GTA: San Andreas",
    answerQuote: "Who didn't have a PS2, though? GTA: San Andreas. FIFA coming into its own."
  },
  {
    id: "gamingRetro26",
    category: "Gaming - Retro",
    question: "Which PS2 accessory did I describe as leading the way for modern VR tech?",
    options: ["EyeToy", "SingStar microphone", "Buzz! buzzers", "Guitar Hero controller"],
    answer: "EyeToy",
    answerQuote: "The EyeToy leading the way for VR tech now."
  },
  {
    id: "gamingRetro27",
    category: "Gaming - Retro",
    question: "Which wrestling game series did I play with friends on the PS2?",
    options: ["WWE", "Fire Pro Wrestling", "Def Jam", "Day of Reckoning"],
    answer: "WWE",
    answerQuote: "Getting your friends round to play WWE or Tony Hawk's."
  },
  {
    id: "gamingRetro28",
    category: "Gaming - Retro",
    question: "Which skateboarding series did I play with friends on the PS2?",
    options: ["Skate", "Tony Hawk's", "SSX", "Dave Mirra Freestyle BMX"],
    answer: "Tony Hawk's",
    answerQuote: "Getting your friends round to play WWE or Tony Hawk's."
  },
  {
    id: "gamingRetro29",
    category: "Gaming - Retro",
    question: "Which portable console did I use to play games on the bus to secondary school?",
    options: ["PSP", "Nintendo DS", "Game Boy Micro", "Game Gear"],
    answer: "PSP",
    answerQuote: "If no homework was due, the hour-long bus journey to and from secondary school would be spent playing GTA or Pro Evo with friends."
  },
  {
    id: "gamingRetro30",
    category: "Gaming - Retro",
    question: "Which football game did I play with friends on the bus to school?",
    options: ["Pro Evolution Soccer", "Football Manager", "Sensible Soccer", "Actua Soccer"],
    answer: "Pro Evolution Soccer",
    answerQuote: "If no homework was due, the hour-long bus journey to and from secondary school would be spent playing GTA or Pro Evo with friends."
  },
  {
    id: "gamingRetro31",
    category: "Gaming - Retro",
    question: "What was one of the PSP's big advantages beyond gaming?",
    options: ["It could play movies and music videos", "It could make phone calls", "It could run Windows", "It could record TV broadcasts"],
    answer: "It could play movies and music videos",
    answerQuote: "Fully portable, expandable memory, and able to play movies and music videos."
  },
  {
    id: "gamingRetro32",
    category: "Gaming - Retro",
    question: "What did I mention as one reason the PSP appealed to people like me?",
    options: ["It was easy to jailbreak", "It had interchangeable cartridges with the DS", "It had a built-in projector", "It played original PlayStation discs"],
    answer: "It was easy to jailbreak",
    answerQuote: "A huge game catalogue and, most importantly for some people like me, it was easy to jailbreak. Apparently."
  },
  {
    id: "gamingRetro33",
    category: "Gaming - Retro",
    question: "Which Wii game did I call the greatest free game ever released?",
    options: ["Wii Sports", "Wii Play", "Wii Fit", "Mario Kart Wii"],
    answer: "Wii Sports",
    answerQuote: "Wii Sports is the greatest free game ever released."
  },
  {
    id: "gamingRetro34",
    category: "Gaming - Retro",
    question: "Why did I buy Red Steel?",
    options: ["It had a realistic football mode", "You could hold your gun sideways using the Nunchuk", "It included a free Wii Wheel", "It was the first online Wii game"],
    answer: "You could hold your gun sideways using the Nunchuk",
    answerQuote: "I bought Red Steel simply because you could use the Nunchuk to hold your gun sideways."
  },
  {
    id: "gamingRetro35",
    category: "Gaming - Retro",
    question: "Which console did I describe as the most innovative and fun?",
    options: ["Wii", "Xbox 360", "GameCube", "PlayStation 3"],
    answer: "Wii",
    answerQuote: "The Wii must be the most innovative and fun console."
  },
  {
    id: "gamingRetro36",
    category: "Gaming - Retro",
    question: "What was I often doing while playing the Wii, despite the console's active image?",
    options: ["Standing on a balance board", "Lying down covered in Doritos", "Running on a treadmill", "Playing outside"],
    answer: "Lying down covered in Doritos",
    answerQuote: "Even if you were lying down, covered in Doritos, wiggling the controller around."
  },
  {
    id: "gamingRetro37",
    category: "Gaming - Retro",
    question: "Which console took up so much of my young adulthood?",
    options: ["Xbox 360", "PlayStation 3", "Wii", "PlayStation 4"],
    answer: "Xbox 360",
    answerQuote: "The 360 took up so much of my young adulthood."
  },
  {
    id: "gamingRetro38",
    category: "Gaming - Retro",
    question: "What Xbox feature let me play and chat with friends late into the night?",
    options: ["Xbox Live parties", "Kinect Adventures", "Xbox Music", "SmartGlass"],
    answer: "Xbox Live parties",
    answerQuote: "Xbox Live parties revolutionised online gaming, and I'd play until well into the early morning. Just. One. More. Game..."
  },
  {
    id: "gamingRetro39",
    category: "Gaming - Retro",
    question: "Which friend did I rent a NASCAR game with?",
    options: ["Ryan", "JJ", "Oliver", "Owain"],
    answer: "Ryan",
    answerQuote: "A burning memory of this was renting a NASCAR game with my friend Ryan."
  },
  {
    id: "gamingRetro40",
    category: "Gaming - Retro",
    question: "What nickname did we give the NASCAR game?",
    options: ["Turn-left simulator", "The pit-stop challenge", "American motorway simulator", "The oval of doom"],
    answer: "Turn-left simulator",
    answerQuote: "AKA, turn-left simulator."
  },
  {
    id: "gamingRetro41",
    category: "Gaming - Retro",
    question: "How many laps were in the NASCAR race we completed to earn an achievement?",
    options: ["100", "250", "500", "1,000"],
    answer: "500",
    answerQuote: "We got an achievement for completing an entire 500-lap race. I'm still not sure why."
  },
  {
    id: "gamingRetro42",
    category: "Gaming - Retro",
    question: "Which special-edition Xbox 360 did I always want?",
    options: ["Star Wars edition", "Halo 3 edition", "Gears of War edition", "Call of Duty edition"],
    answer: "Star Wars edition",
    answerQuote: "I always wanted the Star Wars edition, though. The best special-edition console in my eyes. I don't even like Star Wars!"
  },
  {
    id: "gamingRetro43",
    category: "Gaming - Retro",
    question: "Which Guitar Hero equipment do I still have alongside my Xbox 360?",
    options: ["Guitar Hero controllers and accessories", "A drum kit only", "A DJ turntable", "A dance mat"],
    answer: "Guitar Hero controllers and accessories",
    answerQuote: "I still have one now, along with all the Guitar Hero bits, which is a blast."
  },
  {
    id: "gamingRetro44",
    category: "Gaming - Retro",
    question: "Which company originally released the NES?",
    options: ["Nintendo", "Sega", "Sony", "Atari"],
    answer: "Nintendo",
    answerQuote: ""
  },
  {
    id: "gamingRetro45",
    category: "Gaming - Retro",
    question: "Which Nintendo 64 game features the character GoldenEye's famous multiplayer mode?",
    options: ["GoldenEye 007", "Perfect Dark", "Turok 2", "TimeSplitters"],
    answer: "GoldenEye 007",
    answerQuote: "At uni, it was a staple of the house, with us playing Mario Kart, GoldenEye or Pokémon Stadium weekly, if not daily, over the three years I was in Stoke."
  },
  {
    id: "gamingRetro46",
    category: "Gaming - Retro",
    question: "Which console introduced the Nunchuk controller accessory?",
    options: ["Wii", "GameCube", "Nintendo 64", "Switch"],
    answer: "Wii",
    answerQuote: "I bought Red Steel simply because you could use the Nunchuk to hold your gun sideways."
  },
  {
    id: "gamingRetro47",
    category: "Gaming - Retro",
    question: "Which handheld used Universal Media Discs (UMDs) for games and films?",
    options: ["PSP", "Nintendo DS", "Game Boy Advance SP", "PlayStation Vita"],
    answer: "PSP",
    answerQuote: "Fully portable, expandable memory, and able to play movies and music videos."
  },
  {
    id: "gamingRetro48",
    category: "Gaming - Retro",
    question: "Which console popularised Xbox Live parties for me and my friends?",
    options: ["Xbox 360", "Original Xbox", "Xbox One", "Xbox Series X"],
    answer: "Xbox 360",
    answerQuote: "Xbox Live parties revolutionised online gaming, and I'd play until well into the early morning."
  },
  {
    id: "gamingRetro49",
    category: "Gaming - Retro",
    question: "Which Nintendo console was known for its motion-controlled tennis and bowling?",
    options: ["Wii", "GameCube", "Nintendo 64", "Wii U"],
    answer: "Wii",
    answerQuote: "Wii Sports is the greatest free game ever released."
  },
  {
    id: "gamingRetro50",
    category: "Gaming - Retro",
    question: "Which console did I buy and sell, break, and still keep coming back to?",
    options: ["Nintendo 64", "NES", "Game Boy Advance SP", "GameCube"],
    answer: "Nintendo 64",
    answerQuote: "I've bought, sold and broken this console more than any other, and I still have it."
  }
];

const gamingModernQuestions = [
  {
    id: "gamingModern1",
    category: "Gaming - Modern",
    question: "Which console did I own for a long time before moving to the next generation?",
    options: ["PS4", "PS3", "Xbox One", "Wii U"],
    answer: "PS4",
    answerQuote: "The PS4 was such a good console for such a long time."
  },
  {
    id: "gamingModern2",
    category: "Gaming - Modern",
    question: "What did I have to sell before going travelling?",
    options: ["My PS4 retro controller", "My VR headset", "My gaming PC", "My Nintendo Switch"],
    answer: "My PS4 retro controller",
    answerQuote: "I had the retro controller for it, which I adored, but had to sell it before going travelling."
  },
  {
    id: "gamingModern3",
    category: "Gaming - Modern",
    question: "Which superhero's games did I love on the PS4?",
    options: ["Batman", "Spider-Man", "Iron Man", "Superman"],
    answer: "Spider-Man",
    answerQuote: "The Spider-Man games released for it are incredible, and I'll still play them."
  },
  {
    id: "gamingModern4",
    category: "Gaming - Modern",
    question: "Which VR game did I love for its time-stopping mechanic?",
    options: ["Beat Saber", "Superhot", "Astro Bot Rescue Mission", "Resident Evil 7"],
    answer: "Superhot",
    answerQuote: "Superhot in VR was amazing. Trying to resist moving to stop time. Genius."
  },
  {
    id: "gamingModern5",
    category: "Gaming - Modern",
    question: "What did I find so much fun about playing Superhot in VR?",
    options: ["Slowing down time by resisting movement", "Building a city", "Flying through space", "Playing multiplayer football"],
    answer: "Slowing down time by resisting movement",
    answerQuote: "Superhot in VR was amazing. Trying to resist moving to stop time. Genius."
  },
  {
    id: "gamingModern6",
    category: "Gaming - Modern",
    question: "Which console was the first I ever pre-ordered?",
    options: ["PS4", "PS5", "Xbox Series X", "Nintendo Switch"],
    answer: "PS5",
    answerQuote: "The first console I've ever pre-ordered."
  },
  {
    id: "gamingModern7",
    category: "Gaming - Modern",
    question: "How long did I end up waiting for my pre-ordered console?",
    options: ["One week", "One month", "About six months", "A full year"],
    answer: "About six months",
    answerQuote: "I waited until there was a confirmed price for the console, went and pre-ordered it, only to get it about six months later due to a backlog!"
  },
  {
    id: "gamingModern8",
    category: "Gaming - Modern",
    question: "What was the first game I played on my PS5?",
    options: ["Spider-Man: Miles Morales", "Maneater", "Demon's Souls", "Ratchet & Clank: Rift Apart"],
    answer: "Maneater",
    answerQuote: "My first game on it was Maneater, an RPG where you play as a shark."
  },
  {
    id: "gamingModern9",
    category: "Gaming - Modern",
    question: "What kind of creature do you play as in Maneater?",
    options: ["A crocodile", "A shark", "A giant squid", "An orca"],
    answer: "A shark",
    answerQuote: "My first game on it was Maneater, an RPG where you play as a shark."
  },
  {
    id: "gamingModern10",
    category: "Gaming - Modern",
    question: "What bad habit do I have with my modern games?",
    options: ["I only play multiplayer", "I buy games and never finish or even download them", "I refuse to play new releases", "I constantly delete my save files"],
    answer: "I buy games and never finish or even download them",
    answerQuote: "It's a great piece of kit, but I find myself falling into the trap of having so many games I haven't completed, played or even downloaded, yet I stick the classic sports games on instead."
  },
  {
    id: "gamingModern11",
    category: "Gaming - Modern",
    question: "Which console did I describe as a weird one?",
    options: ["Wii U", "PS Vita", "Xbox One", "Nintendo 3DS"],
    answer: "Wii U",
    answerQuote: "The Wii U was a weird one."
  },
  {
    id: "gamingModern12",
    category: "Gaming - Modern",
    question: "Why did I find the Wii U disappointing compared with the Switch?",
    options: ["It had no controller", "It lacked the game catalogue and support", "It couldn't connect to a TV", "It only played downloaded games"],
    answer: "It lacked the game catalogue and support",
    answerQuote: "There just wasn't the game catalogue or support for it, though, I guess."
  },
  {
    id: "gamingModern13",
    category: "Gaming - Modern",
    question: "What did the Wii U help me through?",
    options: ["A long-haul flight", "An overnight stay after surgery", "A week without electricity", "A university exam period"],
    answer: "An overnight stay after surgery",
    answerQuote: "It did help me through my overnight stay after surgery, though, and it was a lot of fun... for a short while."
  },
  {
    id: "gamingModern14",
    category: "Gaming - Modern",
    question: "Who bought me my Nintendo Switch?",
    options: ["My parents", "My girlfriend", "My sister", "My friends"],
    answer: "My girlfriend",
    answerQuote: "I got the Switch as a Christmas present from my girlfriend, and I'm sure it's just because she wanted to play Animal Crossing!"
  },
  {
    id: "gamingModern15",
    category: "Gaming - Modern",
    question: "Which game do I suspect my girlfriend really wanted to play on the Switch?",
    options: ["Mario Kart 8 Deluxe", "Animal Crossing", "The Legend of Zelda: Breath of the Wild", "Super Smash Bros. Ultimate"],
    answer: "Animal Crossing",
    answerQuote: "I got the Switch as a Christmas present from my girlfriend, and I'm sure it's just because she wanted to play Animal Crossing!"
  },
  {
    id: "gamingModern16",
    category: "Gaming - Modern",
    question: "What do I often end up playing instead of all my newer games?",
    options: ["Retro games I already own", "Only mobile games", "Brand-new releases", "Nothing at all"],
    answer: "Retro games I already own",
    answerQuote: "So many good games, and yet I find myself going through the retro games on the consoles I already own, playing games I already own!"
  },
  {
    id: "gamingModern17",
    category: "Gaming - Modern",
    question: "Which mobile game did I say changed the world in 2016?",
    options: ["Clash Royale", "Pokémon GO", "Candy Crush Saga", "Pokémon Shuffle"],
    answer: "Pokémon GO",
    answerQuote: "I always play it down, but Pokémon GO changed the world in 2016."
  },
  {
    id: "gamingModern18",
    category: "Gaming - Modern",
    question: "What changed my Pokémon GO routine and meant I no longer needed an excuse to get outside?",
    options: ["Getting a dog", "Moving abroad", "Buying a bicycle", "Starting university"],
    answer: "Getting a dog",
    answerQuote: "I kept playing it right through until I got a dog and didn't need an excuse to get outside!"
  },
  {
    id: "gamingModern19",
    category: "Gaming - Modern",
    question: "Which mobile game am I trying to break the score barrier in?",
    options: ["Balatro", "Pokémon GO", "Vampire Survivors", "Marvel Snap"],
    answer: "Balatro",
    answerQuote: "I also play Balatro on there, and one day I will break the score barrier."
  },
  {
    id: "gamingModern20",
    category: "Gaming - Modern",
    question: "What was the main reason I built my PC?",
    options: ["Software development", "Gaming", "Video editing", "Streaming"],
    answer: "Gaming",
    answerQuote: "I built my PC specifically for gaming and, for some reason, only played older games for a long, long time."
  },
  {
    id: "gamingModern21",
    category: "Gaming - Modern",
    question: "Which game series got me back into gaming with friends during COVID?",
    options: ["Battlefield", "Call of Duty", "Halo", "Gears of War"],
    answer: "Call of Duty",
    answerQuote: "During COVID, I got back into Call of Duty and played Warzone with friends."
  },
  {
    id: "gamingModern22",
    category: "Gaming - Modern",
    question: "Which Call of Duty game did I play with friends during COVID?",
    options: ["Black Ops Cold War", "Warzone", "Modern Warfare 3", "Call of Duty: Mobile"],
    answer: "Warzone",
    answerQuote: "During COVID, I got back into Call of Duty and played Warzone with friends."
  },
  {
    id: "gamingModern23",
    category: "Gaming - Modern",
    question: "Which cooperative game did my group move to after Warzone?",
    options: ["Helldivers", "Destiny 2", "Sea of Thieves", "Deep Rock Galactic"],
    answer: "Helldivers",
    answerQuote: "I still play with those friends, but we've moved from Warzone to Helldivers, to Overcooked, back to Warzone, and now we're playing Wardogs."
  },
  {
    id: "gamingModern24",
    category: "Gaming - Modern",
    question: "Which cooking game did my friends and I play together?",
    options: ["Cook, Serve, Delicious!", "Overcooked", "PlateUp!", "Cooking Simulator"],
    answer: "Overcooked",
    answerQuote: "I still play with those friends, but we've moved from Warzone to Helldivers, to Overcooked, back to Warzone, and now we're playing Wardogs."
  },
  {
    id: "gamingModern25",
    category: "Gaming - Modern",
    question: "Which game have my friends and I moved to most recently, according to my About page?",
    options: ["Wardogs", "Warzone", "Helldivers", "Overcooked"],
    answer: "Wardogs",
    answerQuote: "I still play with those friends, but we've moved from Warzone to Helldivers, to Overcooked, back to Warzone, and now we're playing Wardogs."
  },
  {
    id: "gamingModern26",
    category: "Gaming - Modern",
    question: "Which upcoming or new game did I mention owning based on the James Bond franchise?",
    options: ["007: First Light", "GoldenEye 007 Reloaded", "Blood Stone 2", "Quantum of Solace"],
    answer: "007: First Light",
    answerQuote: "I also have the new James Bond game."
  },
  {
    id: "gamingModern27",
    category: "Gaming - Modern",
    question: "What is one of my favourite genres to play on PC?",
    options: ["Roguelike deck-builders", "Racing simulators", "MMORPGs", "Real-time strategy games"],
    answer: "Roguelike deck-builders",
    answerQuote: "My favourite games to stick on, though, are roguelike deck-builders, like Slay the Spire and Inscryption."
  },
  {
    id: "gamingModern28",
    category: "Gaming - Modern",
    question: "Which roguelike deck-builder did I mention playing?",
    options: ["Slay the Spire", "Hades", "Dead Cells", "Enter the Gungeon"],
    answer: "Slay the Spire",
    answerQuote: "My favourite games to stick on, though, are roguelike deck-builders, like Slay the Spire and Inscryption."
  },
  {
    id: "gamingModern29",
    category: "Gaming - Modern",
    question: "Which other game did I mention alongside Slay the Spire?",
    options: ["Inscryption", "Balatro", "Darkest Dungeon", "Monster Train"],
    answer: "Inscryption",
    answerQuote: "My favourite games to stick on, though, are roguelike deck-builders, like Slay the Spire and Inscryption."
  },
  {
    id: "gamingModern30",
    category: "Gaming - Modern",
    question: "Which game has consumed the most of my gaming time?",
    options: ["Football Manager", "Call of Duty", "GTA V", "Civilization VI"],
    answer: "Football Manager",
    answerQuote: "My biggest time sink, though, is without doubt Football Manager."
  },
  {
    id: "gamingModern31",
    category: "Gaming - Modern",
    question: "Where do I check my recorded playtime when estimating how much Football Manager I've played?",
    options: ["Steam", "PlayStation Network", "Xbox Live", "Nintendo eShop"],
    answer: "Steam",
    answerQuote: "Adding up only the hours counted on Steam, let's just say I should be an expert by now."
  },
  {
    id: "gamingModern32",
    category: "Gaming - Modern",
    question: "Despite all my Football Manager hours, how do I describe my expertise?",
    options: ["I'm a world-class expert", "I'm far from an expert", "I'm a professional scout", "I'm better than the developers"],
    answer: "I'm far from an expert",
    answerQuote: "Adding up only the hours counted on Steam, let's just say I should be an expert by now. I'm far, far from an expert."
  },
  {
    id: "gamingModern33",
    category: "Gaming - Modern",
    question: "Which PlayStation generation introduced the PS VR headset I enjoyed?",
    options: ["PS2", "PS3", "PS4", "PS5"],
    answer: "PS4",
    answerQuote: "The PS4 VR headset was so much fun, too!"
  },
  {
    id: "gamingModern34",
    category: "Gaming - Modern",
    question: "Which of these games is a first-person shooter built around the idea that time moves when you move?",
    options: ["Superhot", "Doom", "Titanfall 2", "Far Cry 3"],
    answer: "Superhot",
    answerQuote: "Superhot in VR was amazing. Trying to resist moving to stop time. Genius."
  },
  {
    id: "gamingModern35",
    category: "Gaming - Modern",
    question: "Which Nintendo console followed the Wii U?",
    options: ["Nintendo Switch", "Nintendo 3DS", "Wii", "Nintendo 64"],
    answer: "Nintendo Switch",
    answerQuote: "On paper, it's basically the same as the Switch, right?"
  },
  {
    id: "gamingModern36",
    category: "Gaming - Modern",
    question: "Which Nintendo Switch game lets players build a home and live on an island with animal neighbours?",
    options: ["Animal Crossing: New Horizons", "Stardew Valley", "The Sims 4", "Story of Seasons"],
    answer: "Animal Crossing: New Horizons",
    answerQuote: "I got the Switch as a Christmas present from my girlfriend, and I'm sure it's just because she wanted to play Animal Crossing!"
  },
  {
    id: "gamingModern37",
    category: "Gaming - Modern",
    question: "Which studio developed the PS4 Spider-Man game released in 2018?",
    options: ["Insomniac Games", "Naughty Dog", "Guerrilla Games", "Santa Monica Studio"],
    answer: "Insomniac Games",
    answerQuote: ""
  },
  {
    id: "gamingModern38",
    category: "Gaming - Modern",
    question: "Which of these games is primarily a shark action RPG?",
    options: ["Maneater", "Subnautica", "Abzû", "Stranded Deep"],
    answer: "Maneater",
    answerQuote: "My first game on it was Maneater, an RPG where you play as a shark."
  },
  {
    id: "gamingModern39",
    category: "Gaming - Modern",
    question: "Which console generation was the PS4 part of?",
    options: ["Seventh", "Eighth", "Ninth", "Tenth"],
    answer: "Eighth",
    answerQuote: ""
  },
  {
    id: "gamingModern40",
    category: "Gaming - Modern",
    question: "Which console generation does the PS5 belong to?",
    options: ["Seventh", "Eighth", "Ninth", "Tenth"],
    answer: "Ninth",
    answerQuote: ""
  },
  {
    id: "gamingModern41",
    category: "Gaming - Modern",
    question: "Which game series features the battle royale mode Warzone?",
    options: ["Call of Duty", "Battlefield", "Apex Legends", "Counter-Strike"],
    answer: "Call of Duty",
    answerQuote: "During COVID, I got back into Call of Duty and played Warzone with friends."
  },
  {
    id: "gamingModern42",
    category: "Gaming - Modern",
    question: "What is the main objective in Overcooked?",
    options: ["Run a restaurant kitchen together", "Manage a football team", "Explore a haunted mansion", "Build a theme park"],
    answer: "Run a restaurant kitchen together",
    answerQuote: ""
  },
  {
    id: "gamingModern43",
    category: "Gaming - Modern",
    question: "Which game series is famous for managing football clubs, transfers and tactics?",
    options: ["Football Manager", "FIFA Street", "Rocket League", "Mario Strikers"],
    answer: "Football Manager",
    answerQuote: "My biggest time sink, though, is without doubt Football Manager."
  },
  {
    id: "gamingModern44",
    category: "Gaming - Modern",
    question: "Which game is known for combining poker-inspired hands with roguelike deck-building?",
    options: ["Balatro", "Inscryption", "Slay the Spire", "Hearthstone"],
    answer: "Balatro",
    answerQuote: "I also play Balatro on there, and one day I will break the score barrier."
  },
  {
    id: "gamingModern45",
    category: "Gaming - Modern",
    question: "Which game series lets players battle aliens as part of a cooperative military force?",
    options: ["Helldivers", "The Sims", "Forza Horizon", "Cities: Skylines"],
    answer: "Helldivers",
    answerQuote: "I still play with those friends, but we've moved from Warzone to Helldivers, to Overcooked, back to Warzone, and now we're playing Wardogs."
  },
  {
    id: "gamingModern46",
    category: "Gaming - Modern",
    question: "What does 'roguelike deck-builder' broadly describe?",
    options: ["A game combining deck-building with run-based progression", "A game about building a PC", "A football management simulator", "A racing game with collectible cars"],
    answer: "A game combining deck-building with run-based progression",
    answerQuote: "My favourite games to stick on, though, are roguelike deck-builders, like Slay the Spire and Inscryption."
  },
  {
    id: "gamingModern47",
    category: "Gaming - Modern",
    question: "Which platform is associated with my PC gaming playtime statistics?",
    options: ["Steam", "Epic Games Store only", "GOG Galaxy only", "Battle.net only"],
    answer: "Steam",
    answerQuote: "Adding up only the hours counted on Steam, let's just say I should be an expert by now."
  },
  {
    id: "gamingModern48",
    category: "Gaming - Modern",
    question: "What did I say about the specification of my gaming PC?",
    options: ["It's much higher-spec than I deserve", "It's barely able to run old games", "I built it for work, not gaming", "I plan to replace it every year"],
    answer: "It's much higher-spec than I deserve",
    answerQuote: "My PC is much higher-spec than I deserve, but I won't need to upgrade it for a long, long time."
  },
  {
    id: "gamingModern49",
    category: "Gaming - Modern",
    question: "Which mobile game franchise features creatures that players catch and collect in the real world?",
    options: ["Pokémon GO", "Monster Hunter Now", "Pikmin Bloom", "Ingress"],
    answer: "Pokémon GO",
    answerQuote: "I always play it down, but Pokémon GO changed the world in 2016."
  },
  {
    id: "gamingModern50",
    category: "Gaming - Modern",
    question: "What is the contradiction I describe in my gaming habits?",
    options: ["I own loads of games but keep returning to old favourites", "I only play games on my phone", "I dislike all modern consoles", "I never play games with friends"],
    answer: "I own loads of games but keep returning to old favourites",
    answerQuote: "It's a great piece of kit, but I find myself falling into the trap of having so many games I haven't completed, played or even downloaded, yet I stick the classic sports games on instead."
  }
];

export {
  travelQuestions,
  meQuestions,
  sportsPlayingQuestions,
  sportsWatchingQuestions,
  gamingRetroQuestions,
  gamingModernQuestions,
};