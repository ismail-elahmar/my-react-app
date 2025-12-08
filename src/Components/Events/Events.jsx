

import { useState } from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./Events.css";
import image1 from "../../source/slide2.JPG";
import cer from '../../source/Ceremony.png';
import wor1 from '../../source/wor1.png';
import wor2 from '../../source/wor2.png';
import wor3 from '../../source/wor3.jpg';
export default function Events() {
   const allCards = [
    {
      title: "Build Your First AI Agent",
      desc: "A hands-on session introducing IT Club members to AI concepts and creating their first intelligent agent.",
      date: "27 Avr 2025",
      type: "Learning Session",
      image: image1,
      text:`Join Abdeljalil Elmajjodi in an enlightening session where members discover the world of artificial intelligence. 🌟
            During this session, participants learned the basics of AI, including how intelligent agents work, 
            the principles behind AI decision-making, and the potential applications in real-world scenarios. 
            The focus was on understanding concepts, gaining knowledge, and exploring AI possibilities rather 
            than creating an actual AI program.This session provided members with the foundation to further explore 
            AI in future workshops and projects. It was a great opportunity to ask questions, expand curiosity, and gain 
            insights from an expert in the field.A big thank you to Abdeljalil Elmajjodi for sharing knowledge and inspiring IT Club
            members to explore the exciting world of AI! 🚀`,
      info: "https://www.instagram.com/p/DI03EU-ITyF/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
    },
    {
      title: "Team Bonding & Fun Day with IT Club 🌞⚽",
      desc: "A day of laughter, games, and real connections beyond sessions.",
      date: "23 Avr 2025",
      type: "Training",
      image: wor3,
      text:`A sunny day, good people, and the sound of waves in the background.
            We talked, we laughed, we played football and Mafia… we shared breakfast and silly stories.
            We got to know each other better, connecting in a real way beyond sessions and messages.
            It was all about enjoying the moment, having fun, and spending real time together nothing fancy,
            just good vibes and great company.This day reminded us that IT Club FSA is not only about learning 
            and projects but also about building friendships, teamwork, and a supportive community.`,
      info: "https://www.instagram.com/reel/DIyEVQTIc8R/?utm_source=ig_web_copy_link",
      },
    {
      title: "Introduction to Robotics with IT Club 🤖",
      desc: "Hands-on robotics workshop for IT Club members to explore circuits, coding, and the world of hardware.",
      date: "13 Avr 2025",
      type: "Workshop",
      image: wor2,
      text:`Our robotics session was an inspiring and interactive experience where IT Club 
            members took their first steps into the fascinating world of robotics.
            In collaboration with Code212, we hosted an engaging introductory workshop that
            allowed participants to experience robotics firsthand. Members explored fundamental 
            concepts of electronics, designed simple circuits like blinking LEDs, and discovered how
            hardware and programming work together to bring machines to life.The session emphasized 
            hands on learning and teamwork, giving members the chance to experiment, ask questions, 
            and solve real problems. It was not just about building circuits—it was about sparking curiosity,
            developing problem-solving skills, and fostering a love for technology.A heartfelt thank you goes
            to Code212 for sharing their expertise and guiding our members throughout the workshop. 
            This session was a perfect example of how collaboration, innovation, and creativity come together at IT Club FSA.
            We look forward to more robotics sessions, exciting projects, and opportunities to learn, build, and grow together.`,
      info: "https://www.instagram.com/reel/DIZ1mlfoagk/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
    },
    {
      title: "Diving into Python with the IT Club! 💻",
      desc: "Hands-on Python session for IT Club members to explore coding and problem-solving.",
      date: "25 Nov 2024",
      type: "Workshop",
      image: wor1,
      text:`Club IT at FSA is more than just a student organization it’s a hub for innovation, creativity, 
           and collaboration in the world of technology. During the Opening Ceremony and Integration Day of the 2024/2025
           academic year, we celebrated the spirit of teamwork and welcomed our new members into the IT Club family.
           From inspiring speeches by our experienced members to interactive workshops and engaging activities, the day 
           showcased the vibrant culture of Club IT. Our goal is to empower students with the skills, knowledge, 
           and experience needed to explore the latest trends in technology, software development, AI, cybersecurity, and more.
           By joining Club IT, members have the opportunity to work on exciting projects, participate in competitions, 
           and collaborate with like-minded peers — all while building a strong professional network and enhancing their 
           technical skills. Together, we aim to create an environment where creativity meets technology, and learning becomes an adventure.`,
      info: "https://www.instagram.com/p/DCzqAizIre8/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
    },
    {
      title: "Welcome to Club IT FSA – 2024/2025 Academic Year 🌟",
      desc: "Empowering students with technology, creativity, and collaboration.",
      date: "17 Nov 2024",
      type: "Ceremony",
      image: cer,
      text:`Club IT at FSA is more than just a student organization it’s a hub for innovation, 
      creativity, and collaboration in the world of technology. During the Opening Ceremony and 
      Integration Day of the 2024/2025 academic year, we celebrated the spirit of teamwork and welcomed our
       new members into the IT Club family. 🌟From inspiring speeches by our experienced members to interactive 
       workshops and engaging activities, the day showcased the vibrant culture of Club IT. Our goal is to empower 
       students with the skills, knowledge, and experience needed to explore the latest trends in technology, software development,
        AI, cybersecurity, and more.By joining Club IT, members have the opportunity to work on exciting projects, participate in competitions,
         and collaborate with like-minded peers all while building a strong professional network and enhancing their technical skills.
          Together, we aim to create an environment where creativity meets technology, and learning becomes an adventure.`,
      info: "https://www.instagram.com/p/DCeLIZroRem/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
    },
  ];

  const [visible, setVisible] = useState(3);
  const [selectedCard, setSelectedCard] = useState(null);

  // const showMore = () => {
  //   setVisible((prev) => Math.min(prev + 1, allCards.length));
  // };
  const showMore = () => { setVisible(visible.length); // ajoute 1 carte de plus 
  }; 

  const openModal = (card) => {
    setSelectedCard(card);
  };

  const closeModal = () => {
    setSelectedCard(null);
  };

  return (
    <>
      <div className="cards-content container">
        <div className="testo">
          <h2>
            Activities <span>&</span> Events
          </h2>
          <hr />
          <p>
            Discover our upcoming events, workshops, and competitions designed
            to help you enhance your technical skills.
          </p>
        </div>

        <div className="cards">
          {allCards.slice(0, visible).map((card, index) => (
            <div className="card" key={index}>
              <div className="card-image">
                <img src={card.image} alt={card.title} />
              </div>
              <div className="card-content">
                <div className="date-card">
                  <span>{card.type}</span>
                  <div className="date">
                    <i className="fa-solid fa-calendar-days"></i> {card.date}
                  </div>
                </div>
                <div className="text-card">
                  <h2>{card.title}</h2>
                  <p>{card.desc}</p>
                </div>
                <div className="link">
                  <button
                    onClick={() => openModal(card)}
                    className="btn-more"
                  >
                    More <i className="fa-solid fa-link"></i>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ✅ Keep your “Show More” button */}
      {visible < allCards.length && (
        <div style={{ textAlign: "center", margin: "20px" }}>
          <button onClick={showMore} className="btn-add">
            <span className="learn-more">
              <span className="circle" aria-hidden="true">
                <span className="icon arrow"></span>
              </span>
              <span className="button-text">Show More</span>
            </span>
          </button>
        </div>
      )}

      {/* ✅ Scrollable Modal */}
      {selectedCard && (
        <div className="modal-overlay" onClick={closeModal}>
          <div
            className="modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            <button className="close-btn" onClick={closeModal}>
                <span className="X"></span>
                <span className="Y"></span>
                <div className="close-label">Close</div>
            </button>
            <img
              src={selectedCard.image}
              alt={selectedCard.title}
              className="modal-img"
            />
            <h2>{selectedCard.title}</h2>
            <p><b>Date:</b> {selectedCard.date}</p>
            <p><b>Type:</b> {selectedCard.type}</p>
            <p style={{ whiteSpace: "pre-line" }}>{selectedCard.details}</p>

            {/* Example extra content */}
            <h3 className="desc">{selectedCard.desc}</h3>
            <p className="text">{selectedCard.text}</p>
             
             <h4>For More Informations</h4>
           <a 
            href={selectedCard.info}   
            target="_blank"           
            rel="noopener noreferrer"  >
           <i class="fa-solid fa-arrow-up-right-from-square instagra"></i></a>
          </div>
        </div>
      )}
    </>
  );
}

