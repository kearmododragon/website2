import { useRef, useState } from "react";

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

  const imageRefs = useRef({});

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
                    handleSubSectionClick(event, "watching")
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

        {/* LIFE */}

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
          onClick={() => handleImageClick("life")}
        >
          <img src={lifeImage} alt="My life" />
          <h2>Life</h2>
        </div>
      </div>

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
                <p>PLACEHOLDER TEXT FOR "Taiwan"</p>

                <h3>Indonesia</h3>
                <p>PLACEHOLDER TEXT FOR "Indonesia"</p>

                <h3>Kazakhstan</h3>
                <p>PLACEHOLDER TEXT FOR "Kazakhstan"</p>

                <h3>Uzbekistan</h3>
                <p>PLACEHOLDER TEXT FOR "Uzbekistan"</p>

                <h3>Kyrgyzstan</h3>
                <p>PLACEHOLDER TEXT FOR "Kyrgyzstan"</p>

                <h3>Tajikistan</h3>
                <p>PLACEHOLDER TEXT FOR "Tajikistan"</p>

                <h3>Japan</h3>
                <p>PLACEHOLDER TEXT FOR "Japan"</p>
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
                <p>PLACEHOLDER TEXT FOR "Football"</p>

                <h3>Ice hockey</h3>
                <p>PLACEHOLDER TEXT FOR "Ice hockey"</p>

                <h3>Table tennis</h3>
                <p>PLACEHOLDER TEXT FOR "Table tennis"</p>

                <h3>Tennis</h3>
                <p>PLACEHOLDER TEXT FOR "Tennis"</p>

                <h3>Running</h3>
                <p>PLACEHOLDER TEXT FOR "Running"</p>
              </>
            )}

            {/* WATCHING */}

            {selectedSection === "sports" && selectedSubSection === "Watching" && (
              <>
                <h2>Watching</h2>

                <h3>Football</h3>
                <p>PLACEHOLDER TEXT FOR "Football"</p>

                <h3>American football</h3>
                <p>PLACEHOLDER TEXT FOR "American football"</p>

                <h3>Basketball</h3>
                <p>PLACEHOLDER TEXT FOR "Basketball"</p>

                <h3>Ice hockey</h3>
                <p>PLACEHOLDER TEXT FOR "Ice hockey"</p>

                <h3>Other</h3>
                <p>PLACEHOLDER TEXT FOR "Other"</p>
              </>
            )}

            {/* MY STORY */}

            {selectedSection === "me" && selectedSubSection === "My Story" && (
              <>
                <h2>My Story</h2>

                <p>PLACEHOLDER TEXT FOR "My Story"</p>
              </>
            )}

            {/* GAMING */}

            {selectedSection === "gaming" && selectedSubSection === "Retro" && (
              <>
                <h2>Retro</h2>
                <p>PLACEHOLDER TEXT FOR "NES"</p>
                <p>PLACEHOLDER TEXT FOR "Game Boy Colour"</p>
                <p>PLACEHOLDER TEXT FOR "N64"</p>
                <p>PLACEHOLDER TEXT FOR "GameCube"</p>
                <p>PLACEHOLDER TEXT FOR "PS1"</p>
                <p>PLACEHOLDER TEXT FOR "PS2"</p>
                <p>PLACEHOLDER TEXT FOR "PSP"</p>
                <p>PLACEHOLDER TEXT FOR "Wii"</p>
                <p>PLACEHOLDER TEXT FOR "Xbox 360"</p>
              </>
            )}

            {selectedSection === "gaming" && selectedSubSection === "Modern" && (
              <>
                <h2>Modern</h2>
                <p>PLACEHOLDER TEXT FOR "PS4"</p>
                <p>PLACEHOLDER TEXT FOR "PS5"</p>
                <p>PLACEHOLDER TEXT FOR "Wii U"</p>
                <p>PLACEHOLDER TEXT FOR "Switch"</p>
                <p>PLACEHOLDER TEXT FOR "Mobile"</p>
                <p>PLACEHOLDER TEXT FOR "PC"</p>
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