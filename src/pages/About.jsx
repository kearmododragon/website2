import { useRef, useState } from "react";

import {
  travelQuestions,
  meQuestions,
  sportsPlayingQuestions,
  sportsWatchingQuestions,
  gamingRetroQuestions,
  gamingModernQuestions,
} from "../data/quiz";

import mapImage from "../assets/about/map.avif";
import sportsImage from "../assets/about/sports.webp";
import meImage from "../assets/about/me.jpeg";
import gamingImage from "../assets/about/gaming.avif";
import lifeImage from "../assets/about/life.jpg";
import usa1Image from "../assets/about/n.america-usa/usa1.jpg";

function About() {
  const [selectedSection, setSelectedSection] = useState(null);
  const [selectedSubSection, setSelectedSubSection] = useState(null);
  const [selectedImagePosition, setSelectedImagePosition] = useState({
    x: 0,
    y: 0,
  });
  const [quizOpen, setQuizOpen] = useState(false);
  const [quizQuestions, setQuizQuestions] = useState([]);
  const [quizAnswers, setQuizAnswers] = useState([]);
  const [quizFinished, setQuizFinished] = useState(false);
  const imageRefs = useRef({});
  const startQuiz = () => {
    const pickRandom = (questions) =>
      questions[Math.floor(Math.random() * questions.length)];

    const travelQuestion = pickRandom(travelQuestions);
    const meQuestion = pickRandom(meQuestions);

    const sportsQuestion = pickRandom([
      ...sportsPlayingQuestions,
      ...sportsWatchingQuestions,
    ]);

    const gamingQuestion = pickRandom([
      ...gamingRetroQuestions,
      ...gamingModernQuestions,
    ]);

    const selectedQuestions = [
      travelQuestion,
      sportsQuestion,
      meQuestion,
      gamingQuestion,
    ];

    const selectedIds = new Set(
      selectedQuestions.map(
        (question) => `${question.category}-${question.id}`
      )
    );

    const allQuestions = [
      ...travelQuestions,
      ...meQuestions,
      ...sportsPlayingQuestions,
      ...sportsWatchingQuestions,
      ...gamingRetroQuestions,
      ...gamingModernQuestions,
    ];

    const availableWildCards = allQuestions.filter(
      (question) =>
        !selectedIds.has(`${question.category}-${question.id}`)
    );

    const wildCardQuestion = pickRandom(availableWildCards);

    setQuizQuestions([
      ...selectedQuestions,
      wildCardQuestion,
    ]);

    setQuizAnswers([]);
    setQuizFinished(false);
    setQuizOpen(true);
  };
  const handleQuizAnswer = (questionIndex, selectedAnswer) => {
    setQuizAnswers((previousAnswers) => {
      const updatedAnswers = [...previousAnswers];
      updatedAnswers[questionIndex] = selectedAnswer;
      return updatedAnswers;
    });
  };
  const finishQuiz = () => {
    setQuizFinished(true);
  };
  const handleImageClick = (section) => {
    if (selectedSection === section) {
      setSelectedSection(null);
      setSelectedSubSection(null);
      setSelectedImagePosition({
        x: 0,
        y: 0,
      });
      return;
    }

    const image = imageRefs.current[section];

    if (!image) return;

    const rect = image.getBoundingClientRect();

    const imageCenterX = rect.left + rect.width / 2;
    const imageCenterY = rect.top + rect.height / 2;

    const screenCenterX = window.innerWidth / 2;
    const screenCenterY = window.innerHeight / 2;

    setSelectedImagePosition({
      x: screenCenterX - imageCenterX,
      y: screenCenterY - imageCenterY,
    });

    setSelectedSubSection(null);
    setSelectedSection(section);
  };
  const handleSubSectionClick = (event, subSection) => {
    event.stopPropagation();
    setSelectedSubSection(subSection);
  };
  return (
    <div>
      <h1 className="page-title">About Me</h1>

      <div className="about-images">

        {/* TRAVEL */}

        <div
          ref={(element) => {
            imageRefs.current.travel = element;
          }}
          className={`about-image ${selectedSection === "travel" ? "selected" : ""
            }`}
          style={
            selectedSection === "travel"
              ? {
                transform: `translate(${selectedImagePosition.x}px, ${selectedImagePosition.y}px) scale(1.35)`,
              }
              : undefined
          }
          onClick={() => handleImageClick("travel")}
        >
          <div className="about-interactive-image">
            <img src={mapImage} alt="World map" />

            {selectedSection === "travel" && (
              <svg
                className="about-interactive-overlay"
                viewBox="0 0 1202 580"
                preserveAspectRatio="none"
              >
                {/* North America */}
                <rect
                  x="39"
                  y="36"
                  width="406"
                  height="191"
                  className="about-hotspot north-america"
                  onClick={(event) =>
                    handleSubSectionClick(event, "North America")
                  }

                />
                <text
                  x="242"
                  y="132"
                  textAnchor="middle"
                  dominantBaseline="middle"
                  className="about-hotspot-label about-travel-label"
                >
                  North America
                </text>

                {/* South America */}
                <rect
                  x="312"
                  y="239"
                  width="189"
                  height="233"
                  className="about-hotspot south-america"
                  onClick={(event) =>
                    handleSubSectionClick(event, "South America")
                  }

                />
                <text
                  x="407"
                  y="356"
                  textAnchor="middle"
                  dominantBaseline="middle"
                  className="about-hotspot-label about-travel-label"
                >
                  South America
                </text>
                {/* Africa */}
                <polygon
                  points="529,158 547,286 611,313 634,391 773,381 812,320 797,242 734,217 702,173"
                  className="about-hotspot africa"
                  onClick={(event) =>
                    handleSubSectionClick(event, "Africa")
                  }
                />
                <text
                  x="670"
                  y="285"
                  textAnchor="middle"
                  dominantBaseline="middle"
                  className="about-hotspot-label about-travel-label"
                >
                  Africa
                </text>
                {/* Europe */}
                <polygon
                  points="1177,26 732,13 559,29 493,72 543,155 666,160 751,160"
                  className="about-hotspot europe"
                  onClick={(event) =>
                    handleSubSectionClick(event, "Europe")
                  }
                />
                <text
                  x="780"
                  y="90"
                  textAnchor="middle"
                  dominantBaseline="middle"
                  className="about-hotspot-label about-travel-label"
                >
                  Europe
                </text>
                {/* Asia */}
                <polygon
                  points="719,163 822,285 974,328 1132,292 1192,68"
                  className="about-hotspot asia"
                  onClick={(event) =>
                    handleSubSectionClick(event, "Asia")
                  }
                />
                <text
                  x="970"
                  y="220"
                  textAnchor="middle"
                  dominantBaseline="middle"
                  className="about-hotspot-label about-travel-label"
                >
                  Asia
                </text>
                {/* Oceania */}
                <polygon
                  points="947,345 1098,468 1194,458 1191,354 1094,307 944,349"
                  className="about-hotspot oceania"
                  onClick={(event) =>
                    handleSubSectionClick(event, "Oceania")
                  }

                />
                <text
                  x="1080"
                  y="385"
                  textAnchor="middle"
                  dominantBaseline="middle"
                  className="about-hotspot-label about-travel-label"
                >
                  Oceania
                </text>
              </svg>
            )}
          </div>

          <h2>Travel</h2>
        </div>

        {/* SPORTS */}

        <div
          ref={(element) => {
            imageRefs.current.sports = element;
          }}
          className={`about-image ${selectedSection === "sports" ? "selected" : ""
            }`}
          style={
            selectedSection === "sports"
              ? {
                transform: `translate(${selectedImagePosition.x}px, ${selectedImagePosition.y}px) scale(1.35)`,
              }
              : undefined
          }
          onClick={() => handleImageClick("sports")}
        >
          <div className="about-interactive-image">
            <img src={sportsImage} alt="Sports" />

            {selectedSection === "sports" && (
              <svg
                className="about-interactive-overlay"
                viewBox="0 0 3300 3300"
                preserveAspectRatio="none"
              >
                {/* PLAYING */}

                <rect
                  x="227"
                  y="265"
                  width="1403"
                  height="2668"
                  className="about-hotspot sports-playing"
                  onClick={(event) =>
                    handleSubSectionClick(event, "Playing")
                  }
                />

                <rect
                  x="550"
                  y="1400"
                  width="760"
                  height="400"
                  fill="var(--background)"
                  opacity="0.9"
                  pointerEvents="none"
                />

                <text
                  x="930"
                  y="1600"
                  textAnchor="middle"
                  dominantBaseline="middle"
                  className="about-hotspot-label"
                  pointerEvents="none"
                >
                  PLAYING
                </text>

                {/* WATCHING */}

                <rect
                  x="1740"
                  y="266"
                  width="1403"
                  height="2668"
                  className="about-hotspot sports-watching"
                  onClick={(event) =>
                    handleSubSectionClick(event, "Watching")
                  }
                />

                <rect
                  x="2060"
                  y="1400"
                  width="760"
                  height="400"
                  fill="var(--background)"
                  opacity="0.9"
                  pointerEvents="none"
                />

                <text
                  x="2440"
                  y="1600"
                  textAnchor="middle"
                  dominantBaseline="middle"
                  className="about-hotspot-label"
                  pointerEvents="none"
                >
                  WATCHING
                </text>
              </svg>
            )}
          </div>

          <h2>Sports</h2>
        </div>

        {/* Me */}

        <div
          ref={(element) => {
            imageRefs.current.me = element;
          }}
          className={`about-image about-image-center ${selectedSection === "me" ? "selected" : ""
            }`}
          style={
            selectedSection === "me"
              ? {
                transform: `translate(${selectedImagePosition.x}px, ${selectedImagePosition.y}px) scale(1.35)`,
              }
              : undefined
          }
          onClick={() => handleImageClick("me")}
        >
          <div className="about-interactive-image about-me-image">
            <img src={meImage} alt="Ciaran" />

            {selectedSection === "me" && (
              <svg
                className="about-interactive-overlay"
                viewBox="0 0 1204 1600"
                preserveAspectRatio="xMidYMid slice"              >
                <polygon
                  points="588,766 561,775 562,797 567,820 556,836 532,843 522,868 517,916 518,953 526,986 526,1010 523,1037 527,1085 526,1109 522,1149 522,1175 512,1203 526,1219 542,1218 551,1205 589,1049 607,1201 622,1213 653,1211 634,1088 650,1040 636,970 634,896 680,916 694,909 684,880 625,821 611,829 614,802 608,774"
                  className="about-hotspot"
                  onClick={(event) =>
                    handleSubSectionClick(event, "My Story")
                  }
                />
              </svg>
            )}
          </div>

          <h2>Me</h2>
        </div>

        {/* GAMING */}

        <div
          ref={(element) => {
            imageRefs.current.gaming = element;
          }}
          className={`about-image ${selectedSection === "gaming" ? "selected" : ""
            }`}
          style={
            selectedSection === "gaming"
              ? {
                transform: `translate(${selectedImagePosition.x}px, ${selectedImagePosition.y}px) scale(1.35)`,
              }
              : undefined
          }
          onClick={() => handleImageClick("gaming")}
        >
          <div className="about-interactive-image">
            <img src={gamingImage} alt="Video games" />

            {selectedSection === "gaming" && (
              <svg
                className="about-interactive-overlay"
                viewBox="0 0 944 554"
                preserveAspectRatio="xMidYMid slice"
              >
                <rect
                  x="34"
                  y="17"
                  width="371"
                  height="537"
                  className="about-hotspot"
                  onClick={(event) =>
                    handleSubSectionClick(event, "Retro")
                  }
                />
                <text
                  x="219"
                  y="285"
                  textAnchor="middle"
                  dominantBaseline="middle"
                  className="about-hotspot-label"
                >
                  Retro
                </text>

                <rect
                  x="572"
                  y="17"
                  width="372"
                  height="537"
                  className="about-hotspot"
                  onClick={(event) =>
                    handleSubSectionClick(event, "Modern")
                  }
                />
                <text
                  x="758"
                  y="285"
                  textAnchor="middle"
                  dominantBaseline="middle"
                  className="about-hotspot-label"
                >
                  Modern
                </text>
              </svg>
            )}
          </div>

          <h2>Gaming</h2>
        </div>

        {/* LIFE QUIZ*/}

        <div
          ref={(element) => {
            imageRefs.current.life = element;
          }}
          className={`about-image ${selectedSection === "life" ? "selected" : ""
            }`}
          style={
            selectedSection === "life"
              ? {
                transform: `translate(${selectedImagePosition.x}px, ${selectedImagePosition.y}px) scale(1.35)`,
              }
              : undefined
          }
          onClick={startQuiz}
        >
          <img src={lifeImage} alt="My life" />
          <h2>Life Quiz</h2>
        </div>
      </div>

      {quizOpen && (
        <div className="about-window">
          <div className="about-window-titlebar">
            <span>Life Quiz</span>

            <div className="about-window-buttons">
              <button
                disabled
                aria-label="Minimize"
              >
                _
              </button>
              <button
                disabled
                aria-label="Maximize"
              >
                □
              </button>
              <button
                onClick={() => setQuizOpen(false)}
                aria-label="Close quiz"
              >
                ×
              </button>
            </div>
          </div>

          <div className="about-window-content">
            {!quizFinished ? (
              <>
                <h2>How well do you know Ciaran?</h2>
                <p>
                  Answer all five questions to see your score.
                </p>

                {quizQuestions.map((question, questionIndex) => (
                  <div key={`${question.category}-${question.id}`}>
                    <h3>
                      Question {questionIndex + 1} of {quizQuestions.length}
                    </h3>

                    <p>{question.question}</p>

                    <div>
                      {question.options.map((option) => (
                        <button
                          key={option}
                          type="button"
                          onClick={() =>
                            handleQuizAnswer(questionIndex, option)
                          }
                          disabled={quizFinished}
                          aria-pressed={quizAnswers[questionIndex] === option}
                          style={{
                            display: "block",
                            width: "100%",
                            marginBottom: "6px",
                            textAlign: "left",
                            backgroundColor:
                              quizAnswers[questionIndex] === option
                                ? "#000080"
                                : "#c0c0c0",
                            color:
                              quizAnswers[questionIndex] === option
                                ? "#fff"
                                : "#000",
                          }}
                        >
                          {option}
                        </button>
                      ))}
                    </div>
                  </div>
                ))}

                <button
                  type="button"
                  onClick={finishQuiz}
                  disabled={quizAnswers.filter(
                    (answer) => answer !== undefined
                  ).length !== quizQuestions.length}
                >
                  Finish Quiz
                </button>
              </>
            ) : (
              <>
                <h2>Quiz complete!</h2>

                <p>
                  Your score:{" "}
                  {quizQuestions.filter(
                    (question, index) =>
                      quizAnswers[index] === question.answer
                  ).length}{" "}
                  out of {quizQuestions.length}
                </p>

                {quizQuestions.map((question, index) => (
                  <div key={`${question.category}-${question.id}`}>
                    <p>
                      <strong>Question {index + 1}:</strong>{" "}
                      {question.question}
                    </p>
                    <p>
                      Your answer: {quizAnswers[index]}
                    </p>
                    <p>
                      Correct answer: {question.answer}
                    </p>
                    {question.answerQuote && (
                      <p>{question.answerQuote}</p>
                    )}
                  </div>
                ))}

                <button
                  type="button"
                  onClick={startQuiz}
                >
                  Play Again
                </button>
              </>
            )}
          </div>

          <div className="about-window-statusbar">
            {quizFinished ? "Quiz complete" : "Ready"}
          </div>
        </div>
      )}
      {selectedSubSection && (
        <div className="about-window">

          <div className="about-window-titlebar">
            <span>{selectedSubSection} </span>

            <div className="about-window-buttons">
              <button disabled>_</button>

              <button disabled>□</button>

              <button
                onClick={() => {
                  setSelectedSubSection(null);
                }}
              >
                ×
              </button>
            </div>
          </div>

          <div className="about-window-content">

            {/* NORTH AMERICA */}

            {selectedSection === "travel" && selectedSubSection === "North America" && (
              <>
                <h3>United States</h3>
                <p>I have been to the United States the most out of any country I haven't lived in, which is news to me as I'm writing this. I originally was meant to go to Disney in Florida when I was a child, but due to family circumstances, that had to be cancelled. Luckily, I was able to go at a later date. We stayed outside the park and were there during a hurricane, which was an experience. I remember there being a crocodile (alligator? I didn't stop to ask) in my hotel, being the last people off the crazy golf course and the last person out of the pool. It was a scary time but, weirdly, exciting.</p>

                <p>I went again with my mother and sister for Christmas one year, due to the takeover of Man Utd and selling the remainder of our shares. We stayed at their Caribbean lodge, and it was incredible. I'm not a Disney fan, but the parks are (or at least were) something insanely magical.</p>

                <p>Jump forward around 20 years and I'm back. As a present to myself for my 30th birthday, I went back to the States. This time, going to Chicago, Cincinnati and New York. I watched my NFL team, the Bengals, play at home and loved tailgating. Chicago was a great time too, but I loved seeing Casey on the drive to Cinci. New York is just as fun as I imagined it would be, and I was so lucky to get tickets to watch the Knicks play at MSG. As NY was my last stop, though, I was doing it as cheaply as I could, and those $2 pizzas kept me going.</p>

                <p>The most recent time I went to NY was with my partner. We flew into New York, but as we've both been before, we didn't spend too much time there. Instead, we drove to Philadelphia so we could spend some time in the Amish community, explored Washington, DC, drove up to Boston to see Harvard and Salem, then back to New York. It was an incredible trip, and I'm sure I'll be back.</p>

                <h3>Canada</h3>
                <p>Both times I've been to Canada, it's been to Toronto and tied into a trip to America. The first time was solo and the second time was with my partner. It's funny because both trips merge into one because both times I saw Niagara Falls, the Maple Leafs and went to the greatest ever sports bar (that I know of), "Real Sports". I love that city and I want to go back, but I'll have to see more of the country if I do.</p>

              </>
            )}

            {/* SOUTH AMERICA */}

            {selectedSection === "travel" && selectedSubSection === "South America" && (
              <>
                <h2>South America</h2>

                <h3>Brazil</h3>
                <p>I went to Brazil with my 2 friends, Adam and Tom. This was a genuinely life-changing experience. It was the first time I'd travelled so far away without real adults, and on top of that, I had no return ticket. The plan was to circumvent South America and return once we'd been everywhere. I was fully aware that my money wouldn't last that long. I'm happy I was able to see all that I did: Rio de Janeiro, Ilha Grande, Florianopolis, Paraty, Sao Paulo and more. We arrived during the 2016 Olympics and stayed at Books Hostel in Lapa. When I left my friends as they made their way to Argentina, I headed back to Rio to work in the hostel. It was the only way to prolong my trip. If I had died on Ipanema Beach, I would have died happy. If you read this before going, make sure you go to Dois Irmãos mountain. Take a ride to the favela and a taxi bike up it. It's safe, fun, and incredible.</p>

              </>
            )}

            {/* EUROPE */}

            {selectedSection === "travel" && selectedSubSection === "Europe" && (
              <>
                <h2>Europe</h2>

                <h3>England</h3>
                <p>Including England might be cheating, because it's where I was born! But saying that, I've travelled around the country too! Devon, Manchester, Newcastle, London, Stoke and obviously many more places. From going to Doncaster Train Museum with my grandmother as a child to visiting my sister in London on the way to watch Tyler, the Creator, it's a great place to see.</p>

                <h3>Ireland</h3>
                <p>I have been to Ireland so many times. As a child, we had a family reunion in Waterford where our family tree was traced back many generations and I got to meet my American cousins. Later on in life, I played a couple of exhibition matches in Cork. As an adult, by virtue of my girlfriend growing up there, I have visited Galway many times, including spending Christmas and New Year there. I have still never been to Dublin.</p>

                <h3>Cyprus</h3>
                <p>Cyprus was my first holiday abroad and also my first holiday after my father passed away. We went to Limassol in southern Cyprus in around 2002. My memories are scarce of that trip due to the time that has passed, however I remember trying to find a shop selling a football shirt and my dad, wearing an England polo shirt, someone walked right into a stadium on game day and right into the stands without anyone saying anything!</p>

                <h3>Bulgaria</h3>
                <p>Another country I've been to more than I expect. First, I went skiing with my mother, sister and my cousin. I fell going down a slope, bounced on my head and a stranger saw me the next day, shocked to see I was still alive. That same cousin had an apartment out there on Sunny Beach, so I went there for a week to enjoy a summer holiday the same year! Later in life, on a trip to the Balkans, my girlfriend and I went to Sofia. I don't have much to say about Sofia, which in itself speaks volumes.</p>

                <h3>Portugal</h3>
                <p>Family holiday vs lads holiday. First with the family, the one and only time I went abroad with my grandparents. I remember having an argument with some kids my age and settling it on the football pitch, which of course we won. Then, many years later, as an 18-year-old, my friend invited me out to his timeshare. We had such a good time we went back the year after.</p>

                <h3>France</h3>
                <p>When you can drive somewhere, it doesn't feel like going abroad. I went twice while young for football (no clue where), but the 2 tournaments were amazing. Then again at 13 with school to Dordogne. Never planned on going back, but I've been on the bus to Paris a few times and drove there for the Olympics to watch water polo, then again a week later for blind football. I also went with my partner and our friend + dogs for a road trip to the Champagne region, Annecy and Vienne.</p>

                <h3>Scotland</h3>
                <p>Only been twice. Once with my sister's godparents as a youngster and once on a weekend away with my at-the-time partner. The second time I actually remember because we went to the zoo to see pandas, and it's where I first got a taste for whiskey. It rained so damn much though.</p>

                <h3>Greece</h3>
                <p>I went to Greece, to Athens and then to Santorini. This was a great trip because Athens has so much history you can't avoid it. Then Santorini disappointed me because I expected MORE blue roofs, but it was an amazing time. We rented a quad bike to ride around the island and chase the sun.</p>

                <h3>Wales</h3>
                <p>One of my best friends lives in Wales. So I've been a few times to his farm. Chasing sheep (or being chased by them), saving cows and petting lambs. It's always a great time. I also once went to Swansea as my sister went to uni there and her graduation party was some night. My mum got so drunk we had to spend another night in a hotel as she couldn't drive the next day...</p>

                <h3>Spain</h3>
                <p>Well, I live here now. And I lived here before. Both in Barcelona. First time was my final year of uni, which I had to cut short due to needing knee surgery, and now hopefully a lot more permanently. I also visited Barcelona on a trip to Berlin and Andorra, but also came to Valencia when I'd passed my driving licence. It was cheaper to fly there and drive to Madrid than stay in Madrid, although that's a long drive. I did it so I could see Real Madrid draw with Real Betis.</p>

                <h3>Germany</h3>
                <p>Because of it being so close to where I lived in the Netherlands, I've been there a lot. It was just a short bus ride to Aachen, or a bus and a train to Köln. I'd go there for football and ice hockey or just for something to do many weekends. I've also had the pleasure of visiting Berlin a couple times, but while driving to Lithuania for Christmas we'd always stop off to check out the markets. Nuremberg and Dresden being the most memorable.</p>

                <h3>Belgium</h3>
                <p>Another place super easy to get to, in fact I would often run there while training. Lanaken has, in my eyes, the best arcade I've been to, "Free Play Lanaken", just over the border. I would also get down to Liège Bulldogs ice hockey as often as I could and my favourite sporting moment as a fan was right there. Beyond those close-by spots, Brussels and Bruges were fun. I was also honoured to go to Ypres and Flanders Fields as part of a football trip to commemorate the end of the 1st World War.</p>

                <h3>Netherlands</h3>
                <p>I lived here for 9 years. Maastricht, Eindhoven, Amsterdam, The Hague, Utrecht, Arnhem and Rotterdam I've been to of note. I'll always recommend Utrecht as like Amsterdam without the sex and drugs.</p>

                <h3>Poland</h3>
                <p>Again, another place I've been to a lot. It's on the way to Lithuania, so I've stopped off a few times in places like Warsaw, Wroclaw and Zakopane. But also, as a romantic gift for Christmas, my partner got us tickets to go to Katowice and then on to Auschwitz camp. It was winter, snowy and so heavy. An amazing trip and eye-opening to the horrors that were there before. On the way home from one of the Christmas trips, I remembered they had the largest Jesus statue in the world, so managed to make a detour to go see it!</p>

                <h3>Luxembourg</h3>
                <p>Went on my anniversary with my partner. Stopped the sightseeing to watch the FA Cup final (which my team lost), then cut the journey a few hours short because the team I played for at the time won the league and I wanted to head back for the celebrations. Years later we're still together.</p>

                <h3>Italy</h3>
                <p>I've had 2 reasons to go to Italy. Visit Rome and see the history, and watch football. Thankfully I've been to Rome twice, Florence and Milan once. I want to go to Turin and Naples.</p>

                <h3>Vatican City</h3>
                <p>Can't go to Rome and not see the Vatican. Smallest country on the planet. More popes per capita than anywhere else in the world. I didn't see him but went on a tour. It's so impressive.</p>

                <h3>Denmark</h3>
                <p>First step on a trip to Scandinavia. Only hit the capitals, did it over 4 days, it was great fun. World Cup was on but I missed the England game vs Sweden as I was on a bus from Denmark to Sweden. Almost missed the bus because we forgot to go see the mermaid statue and had to RUN.</p>

                <h3>Sweden</h3>
                <p>Arrived in Sweden having been able to avoid the score. Planned to watch the highlights on my phone and catch up, but as soon as I was in the hotel, saw the result on a newspaper. I don't actually remember much about Stockholm thinking about it now, but I hit a personal low point when I realised my account was empty on this trip.</p>

                <h3>Norway</h3>
                <p>Final leg of the Scandi trip. The food was great, arriving here the sun didn't set and Oslo was really pretty considering it's a port.</p>

                <h3>Lithuania</h3>
                <p>My partner is from Lithuania. I've spent many Christmases and New Years here. Watched Žalgiris play at the Kauno Arena a few times (they never won when I was there), visited other spots like Vilnius, Nida and Užupis, the self-proclaimed independent state.</p>

                <h3>Ukraine</h3>
                <p>In 2019, myself and 3 others went to Kyiv. It was incredible, one of the best places I've ever been. The food was incredible, I ate cow's brain at one point (I'm now vegetarian). The city was beautiful and the people amazing. We also made a trip to Chernobyl power plant, which was amazing to see and learn about the disaster and how that affected and still affects Pripyat. It's terrible what is happening there right now and it breaks my heart every day.</p>

                <h3>Czechia</h3>
                <p>I've been here a couple times. Prague for Christmas and once on a weekend away, and also to the mountain region on the way to Lithuania. My dog Soba once stole someone's chimney cake because she's cheeky as anything. The mountains were stunning and blinding, as they always are.</p>

                <h3>Bosnia and Herzegovina</h3>
                <p>Bosnia was the start of a trip to the Balkans. Sarajevo and Mostar. It was crazy hearing the stories from locals about the destruction during the war so recently, the shrapnel marks in the ground and the bullet holes in the walls. Beyond that, Mostar itself is stunning. Gaining in popularity now as the legend of the bridge jump is getting a lot of traction on social media and I believe Red Bull got involved.</p>

                <h3>Serbia</h3>
                <p>Went to a couple places in Serbia, Belgrade and Nis. Nis I went to simply because they had an interesting concentration camp and a tower of human skulls (unrelated). We didn't stay long beyond that as we headed back to the capital to watch the Eternal Derby; Red Star Belgrade vs Partizan Belgrade. There is also a zoo specialising in albino animals.</p>

                <h3>Montenegro</h3>
                <p>Another 2-city stop. Podgorica and Kotor. Kotor was stunning. A giant bay with a church set in the middle and a mountain securing the area. Podgorica, however, I couldn't tell you anything about without doing further research of what we saw. I only remember a bridge.</p>

                <h3>North Macedonia</h3>
                <p>In North Macedonia we only were able to see Skopje. But wow, what a city. It's covered in statues and has an incredible old town. I was shocked that the place was so beautiful with its huge Alexander the Great statue at its centre. We were robbed by the taxi driver when we entered, but the hotel gave us essentially a free night as we arrived so much earlier than expected.</p>

                <h3>Albania</h3>
                <p>If you asked my partner at the time, this was her least favourite stop on this trip. She might still think that, there wasn't too much to do and the cable car we wanted was closed and the walk back was dodgy and dirty, but I loved my time here. The old town was short, winding roads like a maze, they have a pyramid that reminded me of the Rio cathedral. Okay, maybe she had a point, but hey, I'm glad I went!</p>

                <h3>Kosovo</h3>
                <p>I LOVED Kosovo. My friend at the time was obsessed with it as a concept, so I was happy to go. One of the newest recognised countries in the world, still with a dotted line on Google Maps. Pristina has the cathedral, statue of Bill Clinton and a giant flag, while Prizren had a beautiful river lined with bars and cafes.</p>

                <h3>Austria</h3>
                <p>I've been to Austria twice. The first time with friends, tied in with a trip to Slovakia. The resounding memory there was a lot of things like the theme park being closed and we got robbed by a ticket inspector for having the wrong ticket. The second time was at Christmas with the dogs and that was magical.</p>

                <h3>Slovakia</h3>
                <p>Took the bus there from Vienna the first time. The castle on top of the hill gives a great view over the city. They have a big river, lots of old buildings and an old/new town. It's the stereotypical European city.</p>

                <h3>Malta</h3>
                <p>First holiday post-Covid. My partner and I were desperate to get away (and get warm), so we went to Malta. Never hit 0 degrees there. We stayed across the river from Valletta and it's a great place. I wouldn't go back, I wouldn't live there, but I'm so happy we went. A week of low expectations and nothing but good food and drinks. We were able to let loose and relax, exactly what we needed.</p>

                <h3>Northern Ireland</h3>
                <p>I came here to have a final holiday with my mum while she was sick. I got there early and was able to hang out in Belfast for a day, which was cool. Did a walking tour where I learnt about the Troubles (which I'm ashamed I don't understand more of), the Titanic, the flag and more. It's a really fun place. Then off to Coleraine to stay by the beach. It was far too cold for the beach, but I made it work.</p>

                <h3>Andorra</h3>
                <p>As part of the trip to Barcelona and Berlin, we headed to Andorra. The main, residing memory is waking up with a plan. Scale the mountain and be back in time to hit the spa. Little did we know that we actually had Covid at the time (fully vaccinated), and so the trip up and down was way, way more difficult than it should have been. It was the summer, so we were playing around, drinking from the stream and having a nice time regardless. The spa though... I get why the footballers all stay here. It was incredible.</p>

                <h3>Latvia</h3>
                <p>At the start of a 3-country trip, we started in Riga. It's such a cute old town. We played pool, drank nice drinks and ate nice food. We shot arrows and went up the tallest building. Near our apartment, there was a medieval-themed restaurant. It started as a joke, but when we couldn't find vegetarian food we ended up there one night and it was so good. One year, we crossed the border into Latvia with a chalet to spend New Year's Eve with 3 dogs and 6 people. It was so much wholesome fun and I can't wait to do that again. There were no other people anywhere to be seen, right on the coast and deep snow. Couldn't have wished for a better New Year's.</p>

                <h3>Finland</h3>
                <p>Second stop on the trip, the home of the Moomin. I found this spot fairly boring if I'm honest. Very hygge and Soviet. Oh, and very expensive. I'd go back, I'd recommend others go, but I didn't get the best feeling from there like I have other places I've been.</p>

                <h3>Estonia</h3>
                <p>Quick ferry from Helsinki and I'm in Tallinn. Just in time for my marathon. Tallinn is beautiful. Like it's been designed to look like a fairytale kingdom. Thanks to my marathon I was able to see more of here than others on the same kind of trip, but it's such a beautiful place. I can imagine it gets overcrowded, so if I went back I'd try and go out of season.</p>

                <h3>Croatia</h3>
                <p>Another spot I've been twice. First time to Zagreb as part of a 3-country trip. I watched Dinamo Zagreb win the league there and really enjoyed the city. Met a girl there who was on her first solo trip and it was fun to talk to her and see she really got the bug. Second trip was with my partner to Zadar. It's a beautiful place. Not often we travel just for beach and relax, but that's exactly what we got. As I had just got a lot of arm tattoos though, I spent most of the time under umbrellas.</p>

                <h3>Slovenia</h3>
                <p>In Slovenia, I went to Ljubljana and Lake Bled. Ljubljana was really cool. Loads of bridges and statues and, on a walking tour, actually bumped into the mayor! Lake Bled reminded me of Kotor with the mountains, the lake and the church in the middle. I climbed the mountain as I'd seen a really cool ride down it, but to my disappointment it was closed. It's a stunning lake to spend time walking around.</p>

                <h3>Hungary</h3>
                <p>The final place on my trip. While I was there they still had Orbán as their leader, but there was a real feel with the locals that there was change afoot. Really fun for a weekend away. The Danube, being the location of another human tragedy during the Second World War, it's also an important spot. The tour guide I had told us that Michael Jackson loved Budapest and I did too.</p>

                <h3>Switzerland</h3>
                <p>Went to Geneva with the dogs and our friend. It's SO pretty. Lake Geneva is huge and again it was so good to just walk. We were blessed with good weather and good people and good dogs, so nothing to complain about. There's so much more to see and do here that I can see me coming back, but I'd probably need a reason. Like maybe to ice climb the Alps.</p>

                <h3>Romania</h3>
                <p>Any excuse to go to a new place. Football. Romania vs Bosnia. Huge stadium which took me by surprise. Went to a football museum (very good) in Bucharest and saw Tottenham and Romania centre-back Drăgușin which was cool! I thought it had a really ugly charm to the city, but I walked a lot of places, including to the stadium, so in hindsight that's unfair. It's a cool place to go visit! I also went to Dracula's castle, which was tiny and genuinely disappointing, but again I'm glad I went. I got to enjoy the drive over there too.</p>

                <h3>Iceland</h3>
                <p>We went to Iceland in December with 2 goals in mind. See whales and see the northern lights. We hadn't even got the bus away from the airport and there they were, green lights dancing in the sky. They followed us the entire trip. FYI, they do look a lot better on camera than in real life, but seeing them in real life was amazing. Yes, we also saw whales on a boat tour and that was magical too. The highlight though, you'd never guess, Tomato Soup. I found a place that is essentially greenhouses and all they do is tomato soup and bread. It was incredible! We topped that day off with a trip to a natural spa until it closed. It was so cold outside the water but so much fun. Very glad we rented a car and saw so many frozen waterfalls. The kind of place you should come to 4 times at least, once per season. We accidentally ended up on that volcano that shut the world down in the 00s, which was funny.</p>

              </>
            )}

            {/* AFRICA */}

            {selectedSection === "travel" && selectedSubSection === "Africa" && (
              <>
                <h2>Africa</h2>

                <h3>Morocco</h3>
                <p>My first trip with my current girlfriend. We went to Fez, Marrakesh and Merzouga. Fez was so fun, really old town. I was meant to sort out transport from the airport, but didn't. Because of that, we got a taxi. The driver picked up his uncle, and he took us around the city. Then, before we could even offer to pay for the amazing personal tour he gave us, the guy just walked away! People couldn't have been nicer here. Merzouga meant that we could spend a night in the desert. Taking camels to a campsite in the desert was an experience. We ate Berber pizza and had a great time. Marrakesh was fine, but the experiences outside of that were out of this world.</p>

              </>
            )}

            {/* ASIA */}

            {selectedSection === "travel" && selectedSubSection === "Asia" && (
              <>
                <h2>Asia</h2>

                <h3>Taiwan</h3>
                <p>My first ever taste of Asia. I loved being in Taiwan. It felt like a mix between Japanese, Chinese and American culture, which, knowing a bit about their history, is apt. The food there was incredible, as were all the places we went. It was an amazing idea to extend our layover from 5 hours to 5 days and get to experience what we could of this place. Personal highlight was winning a black Pikachu from a claw machine, which my dogs now have!</p>

                <h3>Indonesia</h3>
                <p>Indonesia was the main target for the first trip, so once we'd finished our layover, that's where we went next. The funny thing about it is, even though we went to a place known for beaches, we spent hardly any time at any! My best day, and possibly the best day of my life, was here though. My favourite animal, the Komodo Dragon, is native to an island in Indonesia and I was blessed with a chance to go. On this day, we took a boat out, climbed a mountain, relaxed on a pink beach, went to Komodo Island and saw wild dragons, back to the boat and swimming with wild manta rays, off to a tiny little mini island in the sea (like 100m long), then off to another island for a drink and a walk where we saw a baby shark. Incredible day.</p>

                <h3>Kazakhstan</h3>
                <p>First stop of a 4-country trip to "The Stans". On the first day of arrival, we dropped our stuff off at a hotel and left Almaty for a couple of days, heading towards the mountains for an adventure, and stayed instead in a yurt. Almaty was great and we had some amazing food for the days we were there, but the main thing I wanted, the ice rink up a mountain, was sadly closed. We only saw Almaty in this HUGE country, so I'd definitely head back one day.</p>

                <h3>Uzbekistan</h3>
                <p>Next stop, Uzbekistan. it was really interesting. We went to Bukhara and Samarkhand. Stunning places and really clean. Amazing markets where the colours and the smells blew you away. Really enjoyed the slower, more chilled vibes out here and would recommend both places for sure.</p>

                <h3>Kyrgyzstan</h3>
                <p>My favourite stop of this trip. The capital, Bishkek, was a very pretty place with the tallest (at the time) flagpole in the world. I love their flag, so this was cool. Then we rented a car and drove around Issyk-Kul. Found some petroglyphs that were thousands of years old, raced some horses in our cars and eventually got to our destination, Karakol. Here, the main thing was to climb a mountain. After a bus, a long climb and hitching a lift, we were eventually at the bottom of the ski resort. Which was closed. We still climbed it and thankfully met some Swedes halfway up who supplied us with beer and snowboard lessons. The trip down was almost as rough as the trip up. After all this, we headed back with a stop in Bokenbayevo to see how they hunt with golden eagles. Their golden eagle crashed into my knee in the test, but he was okay.</p>



                <h3>Tajikistan</h3>
                <p>Final stop on the trip. We started with a stop in the border town of Panjakent. Not much there and almost impossible to get veggie food. Even when we asked for no animals, no meat, etc., we were offered chicken. We took a day trip to the 7 Lakes with a German man and that was a lot of fun. Far from main society and through the mountains that were mined for gold. The lakes were perfect and loved every minute of the tour. Then we got a driver to take us to the capital, [DUSHANBE?]. The drive was stunning as over 90% of the country is mountains! The capital was so beautiful too. A hard push for electric vehicles meant that the air was clean and the city was busy but quiet. We "splashed out" on a hotel that was more than reasonable, but up on the top floor of a huge building. Beautiful end to an amazing trip.</p>

                <h3>Japan</h3>
                <p>One of my best friends, Carl, lives out in Japan and I will be going there to see him get married to his fiancée in October 2026. I'll update this when I'm back.</p>

              </>
            )}

            {/* OCEANIA */}

            {selectedSection === "travel" && selectedSubSection === "Oceania" && (
              <>
                <h2>Oceania</h2>

                <p>Well, you got me. I've never actually been here. I will go though at the very least to New Zealand to go on a lord of the rings trail, and to Australia to see my friend Adam.</p>
              </>
            )}

            {/* PLAYING */}

            {selectedSection === "sports" && selectedSubSection === "Playing" && (
              <>
                <h2>Playing</h2>

                <h3>Football</h3>
                <p>Ever since I could walk, I've played football. Football has always been in my life, from kicking a ball with my dad in the garden to playing 5-a-side in Barcelona. I've played for 3 official teams: Newark Town FC, VV Scharn and RKHSV Heer. Newark Town is where I spent over 10 years playing, and at one point I played with future England international Patrick Bamford. I've played in almost every position, but mainly GK, CB, RB and CM. I like to be as far from the other team's goal as possible at all times.</p>

                <p>For Newark Town, I'd say the highlights were coming second in the league at Under-11s (Farndon won the league every year, but we pushed them close), playing in two international tournaments in France, and playing a game to commemorate the end of the First World War in Flanders Fields. I'm still looking for the video footage from ITV News, but I found some photos. It was an unforgettable experience.</p>

                <p>For Scharn, we won the league and I was playing with a mix of locals and work friends. I quit to have an operation on my knee and controversially transferred to their arch-rivals Heer. With Heer, we started in the league I had won a few years earlier and went through and won it again! I had so much fun playing with this team. It already had some friends on it, but this is by far the most fun I've ever had playing football in my life.</p>

                <p>I'm currently an unsigned free agent, however, I don't think Man Utd are looking at me anytime soon.</p>

                <h3>Ice hockey</h3>
                <p>Okay, so I've never actually <strong>PLAYED</strong> ice hockey, but it's my missed love. I always wanted to, but it is an expensive sport to start. I missed the opportunity when in Nottingham to pick it up, and in the Netherlands it never felt feasible, whereas now in Barcelona it's just not possible. I occasionally take ice skating lessons or just free skate and rollerblade to try and get my ability up in case the chance ever shows itself! One day...</p>

                <h3>Field hockey</h3>
                <p>I did, however, play field hockey! For a year at uni, my friend Owain asked me to play for his team. I'd never played hockey before, so I was happy to help out in goal, as their second team needed anyone they could get.</p>

                <p>It was so much painful fun! The social side was great, of course. I managed to play once for the first team while also winning the league with the seconds. I only stopped because I spent a year working at uni; otherwise, I might still be playing now.</p>

                <h3>Table tennis</h3>
                <p>When I was younger, my best friend Oliver's grandad ran a table tennis club at my school, and I went every week. I really enjoyed it, and it's a great game to be decent at. Now in Barcelona, there are table tennis tables all over the city, so it's fun to go and play in the evening while it's still warm.</p>

                <p>The best game was round the table, where you'd take your shot and run to the other side of the table and join the queue until it was your shot. You miss and you're out. Last person standing wins.</p>

                <h3>Tennis</h3>
                <p>In 2015, my friend JJ and I took up tennis. I went from having unlimited serves until I could get it in, to getting the occasional ace and winning more than I lost! I loved playing with JJ, and I hope when I'm fully set up over here I'm able to get back into playing. With my girlfriend or friends. Or both!</p>

                <h3>Running</h3>
                <p>I used to run with my friend Ryan while he did his paper round before school. I love running, but I sometimes take a lot of motivating to actually get out there. I ran a marathon in Tallinn a few years back, and I'll do another in Barcelona in 2027. Hoping to better my time there.</p>

                <p>My favourite thing about running is just going. Maastricht was great for this, as there were a lot of routes where you wouldn't get interrupted by foot traffic or crossing roads, whereas here in Barcelona I've not found my favourite routes yet. Although running around the Nou Camp hasn't worn off just yet.</p>

              </>
            )}

            {/* WATCHING */}

            {selectedSection === "sports" && selectedSubSection === "Watching" && (
              <>
                <h2>Watching</h2>

                <h3>Football</h3>
                <p>Just like playing, I've watched football for my entire life. Some of my earliest memories include watching England vs Argentina in the '98 World Cup. My dad was actually able to take me out of school to watch it with him in the pub, pint in hand. Come to think of it, I'm not sure why he wasn't at work either!</p>

                <p>I've been blessed to have had season tickets at three clubs in three countries: Manchester United, MVV Maastricht and RCD Espanyol.</p>

                <p>At Manchester United, I've been honoured to witness some amazing moments. Countless matches, including winning the title against Spurs in '99, beating Barcelona on the way to winning the Champions League in '08, beating the noisy neighbours 4–3 with a 96th-minute winner, and seeing Nani's "seal dribble" against Arsenal as we beat them 4–0.</p>

                <p>As is the case with football, though, I've also seen some terrible games, like the cheats beating us 6–1 on my birthday, no less.</p>

                <p>Part of the reason I travel is to watch football around the world, and I've seen football live in, I think, 12 countries. Please don't ask me how many of those matches ended in draws, though...</p>

                <h3>American football</h3>
                <p>I LOVE watching American football. I feel it's a sport that's better on TV than live, but I'm addicted to watching sports being played in real life.</p>

                <p>My team are the Bengals, and I've seen them in London against the Rams, in Cincinnati against the Falcons, and in New York against the Giants. I'll also be going to Madrid in November to watch them play the Falcons (again).</p>

                <p>I've also watched some German American football, but sadly, the Cologne Centurions are now defunct.</p>

                <h3>Basketball</h3>
                <p>I've never been a huge fan of basketball, but it's fun to watch occasionally. My first taste of live basketball was at uni, where my housemate Clayton was a member of the team. Through him, we managed to make friends with the whole team, which made going to games, home and away, a lot of fun.</p>

                <p>It was the biggest event for us at varsity, and even though we lost the whole event, it was so good to win the basketball!</p>

                <p>I also went to see the Knicks in New York, where they won in overtime, so at least I got my money's worth!</p>

                <p>The best basketball atmosphere I've experienced, though, was in Kaunas watching Žalgiris. Being in an arena with the whole crowd bouncing... there's nothing like it!</p>

                <h3>Ice hockey</h3>
                <p>I've seen ice hockey played in four countries so far: Canada, England, Belgium and Germany.</p>

                <p>In Germany, they have the best atmosphere; in Canada, they have the best quality; in England, they have the best overall experience. But Belgium was something else.</p>

                <p>I have no clue how many games I went to with the Bulldogs, but one day stands out above all others. The team was in the final game of the playoffs and came back from 4–1 down to win 5–4 in overtime.</p>

                <p>One of the players, Darques, recognised me from a video I'd made days before and said it had been passed around the team. After the game, I was able to go onto the ice with all the fans who were left and get photos with the players and the cup.</p>

                <h3>Other</h3>
                <p>I can't list every sport I've ever seen. I've been to the Olympics to watch water polo and the Paralympics for blind football. I've also seen cycling, rowing, hurling, boxing, athletics... literally any sport where people are competing, I'll be there watching.</p>

              </>
            )}

            {/* MY STORY */}

            {selectedSection === "me" && selectedSubSection === "My Story" && (
              <>
                <h2>0-10</h2>

                <p>As a child, I was a proper mummy's boy. I would always be by her side. I was a typical kid who loved getting dirty in the mud, climbing trees and playing sports. For some reason, my family thought I might end up a priest, but I think that's just because I went to a Catholic school and was a good boy. I would play football every second I could during the day, before going to sleep, waking up and doing it all over again. My best friends were all my schoolmates, even though I hated school. The classic: my favourite subjects were lunchtime and home time.</p>

                <h2>10-20</h2>

                <p>These years hit me like a tonne of bricks and were definitely the defining years of my life. My father passed away when I was 11. I went to secondary school, where I discovered I could coast through school and still do well enough. I got decent enough grades and had my first crush (Lettie Batty. Hope she's okay!). I moved away from the school as soon as I could because 1) it was in Mansfield, 2) I had a reputation thanks to my mouth and my older sister, and 3) it was in Mansfield.</p>

                <p>I went to college in Nottingham, where I learnt to step outside my comfort zone and made a tonne of new friends. I discovered a love of live music after seeing Kanye West when I was 16, and then seeing anyone and everyone I could once I started earning money. I got my first, second, third and fourth jobs, from doing a paper round to refereeing. I had my first trip abroad without family, spending a week in Portugal, and then went to uni. These were the years that moulded my life.</p>

                <h2>20-30</h2>

                <p>This is where I discovered who I really was. I finished uni with a knee that had been repaired, only for it to need repairing again a few years later (two ACL/MCL surgeries, and it's okay for now). I got my first real office job in tourism management, dealing with business travel. I moved out of the country for the first time and went on my first BIG trip to Brazil. I broke up with a girlfriend or two and met my current girlfriend, who took up most of the decade, and many more years beyond it.</p>

                <p>This was also the decade I started getting tattoos! It certainly isn't the decade I stopped. I have them up both arms and one each on my legs. It started with a Kanye West bear tattoo, even though I don't listen to his music anymore. </p>

                <p>I travelled to more countries than I can count and developed into the human I am today, with the help of the people around me. I also suffered the loss of more family members, including my mother, during the world-altering event of the COVID-19 pandemic. It was a dramatic decade for me.</p>


                <h2>30-40</h2>

                <p>Almost four years into this decade of my life, I've already ticked off things I could only have dreamed of a decade ago. I'm happily living in Barcelona, trying to change my career into something I've wanted to do for a long, long time. I've got nothing but excitement ahead of me, and I look forward to what this decade has in store for me.</p>
              </>
            )}

            {/* GAMING */}

            {selectedSection === "gaming" && selectedSubSection === "Retro" && (
              <>
                <h2>Retro</h2>

                <p>The first console I ever owned was an NES. I only had two games at the time: "Goal", which was a terrible football game, and "Kirby's Adventure in Dream Land". I remember Kirby being impossible to complete at the time, especially beating Dedede at the end. I picked it back up as an adult, and it took me a little over an hour to reach 100%. Great games. I picked up Duck Hunt one day, but I swear my TV made me hit no matter what.</p>

                <p>The peak of '90s kid gaming had to be the Game Boy. I had the Colour in purple and eventually an Advance SP with tribal markings. I was a cool kid. I'm sure I must have had more than two games, but I only ever remember playing Pokémon Red and Pokémon Crystal. Pokémon Crystal unofficially must have the most hours I've ever put into a game because I was obsessed with it. My favourite Pokémon is Bulbasaur, and even though he wasn't catchable for me in the game (nobody to trade with), I would complete the game and repeat it so often.</p>

                <p>Now, the N64 was my entire childhood. I'm pretty sure I'm undefeated in Mario Kart 64 as Bowser. I cried when I rented Super Smash Bros. from Blockbuster because I didn't understand how to play it. I've bought, sold and broken this console more than any other, and I still have it. At uni, it was a staple of the house, with us playing Mario Kart, GoldenEye or Pokémon Stadium weekly, if not daily, over the three years I was in Stoke. I still have one now, and I adore this piece of kit.</p>

                <p>I loved my GameCube, and it was the first time I ever got a console while it was still new. I remember going to Currys and getting one. But I needed a new TV, so I was spoilt for my birthday and Christmas that year. I played all kinds of games on this, but I loved Star Fox! I can still quote that game even now! I need to get this back out and throw on some 007: Rogue Agent.</p>

                <p>I never actually owned a PS1, but my sister did, so in my eyes, it was as good as mine. Playing through Tomb Raider 1 and 2 but never completing them. Grabbing random off-brand games at petrol stations. Getting demos out of magazines. This is where my true love of gaming really developed.</p>

                <p>Who didn't have a PS2, though? GTA: San Andreas. FIFA coming into its own. Getting your friends round to play WWE or Tony Hawk's. The EyeToy leading the way for VR tech now. Kids these days just don't understand.</p>

                <p>I'd argue the PSP was the best piece of portable gaming hardware. Fully portable, expandable memory, and able to play movies and music videos. A huge game catalogue and, most importantly for some people like me, it was easy to jailbreak. Apparently. If no homework was due, the hour-long bus journey to and from secondary school would be spent playing GTA or Pro Evo with friends.</p>

                <p>The Wii must be the most innovative and fun console. So much of what we take for granted now came from here. Wii Sports is the greatest free game ever released. I bought Red Steel simply because you could use the Nunchuk to hold your gun sideways. NFL was a lot of fun on this too, and you really felt active while playing. Even if you were lying down, covered in Doritos, wiggling the controller around.</p>

                <p>The 360 took up so much of my young adulthood. Playing online with friends is probably why I only ended up at Staffordshire Uni. Xbox Live parties revolutionised online gaming, and I'd play until well into the early morning. Just. One. More. Game... A burning memory of this was renting a NASCAR game with my friend Ryan. AKA, turn-left simulator. We got an achievement for completing an entire 500-lap race. I'm still not sure why. I still have one now, along with all the Guitar Hero bits, which is a blast. I always wanted the Star Wars edition, though. The best special-edition console in my eyes. I don't even like Star Wars!</p>
              </>
            )}

            {selectedSection === "gaming" && selectedSubSection === "Modern" && (
              <>
                <h2>Modern</h2>
                <p>The PS4 was such a good console for such a long time. It shocked me just how long it was around when they started talking about a new generation towards the end of its lifetime. I had the retro controller for it, which I adored, but had to sell it before going travelling. The Spider-Man games released for it are incredible, and I'll still play them. The PS4 VR headset was so much fun, too! Superhot in VR was amazing. Trying to resist moving to stop time. Genius.</p>

                <p>The first console I've ever pre-ordered. I was so excited to be in a position where I could afford to, and I got in there early. Or so I thought. I waited until there was a confirmed price for the console, went and pre-ordered it, only to get it about six months later due to a backlog! My first game on it was Maneater, an RPG where you play as a shark. So much fun! It's a great piece of kit, but I find myself falling into the trap of having so many games I haven't completed, played or even downloaded, yet I stick the classic sports games on instead.</p>

                <p>The Wii U was a weird one. On paper, it's basically the same as the Switch, right? There just wasn't the game catalogue or support for it, though, I guess. I'm also the only person I know who ever had one! It did help me through my overnight stay after surgery, though, and it was a lot of fun... for a short while. I didn't feel bad when I sold that one on.</p>

                <p>I got the Switch as a Christmas present from my girlfriend, and I'm sure it's just because she wanted to play Animal Crossing! It's such a good console, though. So many good games, and yet I find myself going through the retro games on the consoles I already own, playing games I already own!</p>

                <p>Mobile gaming is a strange one. I always play it down, but Pokémon GO changed the world in 2016. I kept playing it right through until I got a dog and didn't need an excuse to get outside! I also play Balatro on there, and one day I will break the score barrier. I can't imagine anyone out there *doesn't* play some kind of game on their phone now.</p>

                <p>I built my PC specifically for gaming and, for some reason, only played older games for a long, long time. During COVID, I got back into Call of Duty and played Warzone with friends. I still play with those friends, but we've moved from Warzone to Helldivers, to Overcooked, back to Warzone, and now we're playing Wardogs. I also have the new James Bond game. My favourite games to stick on, though, are roguelike deck-builders, like Slay the Spire and Inscryption. My PC is much higher-spec than I deserve, but I won't need to upgrade it for a long, long time. My biggest time sink, though, is without doubt Football Manager. Adding up only the hours counted on Steam, let's just say I should be an expert by now. I'm far, far from an expert.</p>
              </>
            )}
          </div>

          <div className="about-window-statusbar">
            Ready
          </div>
        </div>
      )}
    </div>
  );
}

export default About;