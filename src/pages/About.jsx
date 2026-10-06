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

        {/* =================================================
            TRAVEL
            ================================================= */}

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

                {/* Africa */}
                <polygon
                  points="529,158 547,286 611,313 634,391 773,381 812,320 797,242 734,217 702,173"
                  className="about-hotspot africa"
                  onClick={(event) =>
                    handleSubSectionClick(event, "Africa")
                  }
                />

                {/* Europe */}
                <polygon
                  points="1177,26 732,13 559,29 493,72 543,155 666,160 751,160"
                  className="about-hotspot europe"
                  onClick={(event) =>
                    handleSubSectionClick(event, "Europe")
                  }
                />

                {/* Asia */}
                <polygon
                  points="719,163 822,285 974,328 1132,292 1192,68"
                  className="about-hotspot asia"
                  onClick={(event) =>
                    handleSubSectionClick(event, "Asia")
                  }
                />

                {/* Oceania */}
                <polygon
                  points="947,345 1098,468 1194,458 1191,354 1094,307 944,349"
                  className="about-hotspot oceania"
                  onClick={(event) =>
                    handleSubSectionClick(event, "Oceania")
                  }
                />
              </svg>
            )}
          </div>

          <h2>Travel</h2>
        </div>

        {/* =================================================
            SPORTS
            ================================================= */}

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
                {/* =================================================
                    PLAYING
                    ================================================= */}

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

                {/* =================================================
                    WATCHING
                    ================================================= */}

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

{/* =================================================
                    Me
                    ================================================= */}

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
          <div className="about-interactive-image">
            <img src={meImage} alt="Ciaran" />

            {selectedSection === "me" && (
              <svg
                className="about-interactive-overlay"
                viewBox="0 0 1204 1600"
                preserveAspectRatio="xMidYMid meet"
              >
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

        {/* =================================================
            GAMING
            ================================================= */}

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
          <img src={gamingImage} alt="Video games" />
          <h2>Gaming</h2>
        </div>

        {/* =================================================
            LIFE
            ================================================= */}

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

            {/* =================================================
                NORTH AMERICA
                ================================================= */}

            {selectedSection === "travel" && selectedSubSection === "North America" && (
              <>
                <h2>North America</h2>

                <h3>United States</h3>
                <p>PLACEHOLDER TEXT FOR "United States"</p>

                <h3>Canada</h3>
                <p>PLACEHOLDER TEXT FOR "Canada"</p>
              </>
            )}

            {/* =================================================
                SOUTH AMERICA
                ================================================= */}

            {selectedSection === "travel" && selectedSubSection === "South America" && (
              <>
                <h2>South America</h2>

                <h3>Brazil</h3>
                <p>PLACEHOLDER TEXT FOR "Brazil"</p>
              </>
            )}

            {/* =================================================
                EUROPE
                ================================================= */}

            {selectedSection === "travel" && selectedSubSection === "Europe" && (
              <>
                <h2>Europe</h2>

                <h3>England</h3>
                <p>PLACEHOLDER TEXT FOR "England"</p>

                <h3>Ireland</h3>
                <p>PLACEHOLDER TEXT FOR "Ireland"</p>

                <h3>Cyprus</h3>
                <p>PLACEHOLDER TEXT FOR "Cyprus"</p>

                <h3>Bulgaria</h3>
                <p>PLACEHOLDER TEXT FOR "Bulgaria"</p>

                <h3>Portugal</h3>
                <p>PLACEHOLDER TEXT FOR "Portugal"</p>

                <h3>France</h3>
                <p>PLACEHOLDER TEXT FOR "France"</p>

                <h3>Scotland</h3>
                <p>PLACEHOLDER TEXT FOR "Scotland"</p>

                <h3>Greece</h3>
                <p>PLACEHOLDER TEXT FOR "Greece"</p>

                <h3>Wales</h3>
                <p>PLACEHOLDER TEXT FOR "Wales"</p>

                <h3>Spain</h3>
                <p>PLACEHOLDER TEXT FOR "Spain"</p>

                <h3>Germany</h3>
                <p>PLACEHOLDER TEXT FOR "Germany"</p>

                <h3>Belgium</h3>
                <p>PLACEHOLDER TEXT FOR "Belgium"</p>

                <h3>Netherlands</h3>
                <p>PLACEHOLDER TEXT FOR "Netherlands"</p>

                <h3>Poland</h3>
                <p>PLACEHOLDER TEXT FOR "Poland"</p>

                <h3>Luxembourg</h3>
                <p>PLACEHOLDER TEXT FOR "Luxembourg"</p>

                <h3>Italy</h3>
                <p>PLACEHOLDER TEXT FOR "Italy"</p>

                <h3>Vatican City</h3>
                <p>PLACEHOLDER TEXT FOR "Vatican City"</p>

                <h3>Denmark</h3>
                <p>PLACEHOLDER TEXT FOR "Denmark"</p>

                <h3>Sweden</h3>
                <p>PLACEHOLDER TEXT FOR "Sweden"</p>

                <h3>Norway</h3>
                <p>PLACEHOLDER TEXT FOR "Norway"</p>

                <h3>Lithuania</h3>
                <p>PLACEHOLDER TEXT FOR "Lithuania"</p>

                <h3>Ukraine</h3>
                <p>PLACEHOLDER TEXT FOR "Ukraine"</p>

                <h3>Czech Republic</h3>
                <p>PLACEHOLDER TEXT FOR "Czech Republic"</p>

                <h3>Bosnia and Herzegovina</h3>
                <p>PLACEHOLDER TEXT FOR "Bosnia and Herzegovina"</p>

                <h3>Serbia</h3>
                <p>PLACEHOLDER TEXT FOR "Serbia"</p>

                <h3>Montenegro</h3>
                <p>PLACEHOLDER TEXT FOR "Montenegro"</p>

                <h3>North Macedonia</h3>
                <p>PLACEHOLDER TEXT FOR "North Macedonia"</p>

                <h3>Albania</h3>
                <p>PLACEHOLDER TEXT FOR "Albania"</p>

                <h3>Kosovo</h3>
                <p>PLACEHOLDER TEXT FOR "Kosovo"</p>

                <h3>Austria</h3>
                <p>PLACEHOLDER TEXT FOR "Austria"</p>

                <h3>Slovakia</h3>
                <p>PLACEHOLDER TEXT FOR "Slovakia"</p>

                <h3>Malta</h3>
                <p>PLACEHOLDER TEXT FOR "Malta"</p>

                <h3>Northern Ireland</h3>
                <p>PLACEHOLDER TEXT FOR "Northern Ireland"</p>

                <h3>Andorra</h3>
                <p>PLACEHOLDER TEXT FOR "Andorra"</p>

                <h3>Latvia</h3>
                <p>PLACEHOLDER TEXT FOR "Latvia"</p>

                <h3>Finland</h3>
                <p>PLACEHOLDER TEXT FOR "Finland"</p>

                <h3>Estonia</h3>
                <p>PLACEHOLDER TEXT FOR "Estonia"</p>

                <h3>Croatia</h3>
                <p>PLACEHOLDER TEXT FOR "Croatia"</p>

                <h3>Slovenia</h3>
                <p>PLACEHOLDER TEXT FOR "Slovenia"</p>

                <h3>Hungary</h3>
                <p>PLACEHOLDER TEXT FOR "Hungary"</p>

                <h3>Switzerland</h3>
                <p>PLACEHOLDER TEXT FOR "Switzerland"</p>

                <h3>Romania</h3>
                <p>PLACEHOLDER TEXT FOR "Romania"</p>

                <h3>Iceland</h3>
                <p>PLACEHOLDER TEXT FOR "Iceland"</p>
              </>
            )}

            {/* =================================================
                AFRICA
                ================================================= */}

            {selectedSection === "travel" && selectedSubSection === "Africa" && (
              <>
                <h2>Africa</h2>

                <h3>Morocco</h3>
                <p>PLACEHOLDER TEXT FOR "Morocco"</p>
              </>
            )}

            {/* =================================================
                ASIA
                ================================================= */}

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

            {/* =================================================
                OCEANIA
                ================================================= */}

            {selectedSection === "travel" && selectedSubSection === "Oceania" && (
              <>
                <h2>Oceania</h2>

                <p>PLACEHOLDER TEXT FOR "Oceania"</p>
              </>
            )}

            {/* =================================================
                PLAYING
                ================================================= */}

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

            {/* =================================================
                WATCHING
                ================================================= */}

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

            {/* =================================================
    MY STORY
    ================================================= */}

{selectedSection === "me" && selectedSubSection === "My Story" && (
  <>
    <h2>My Story</h2>

    <p>PLACEHOLDER TEXT FOR "My Story"</p>
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