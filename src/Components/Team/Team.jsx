import { useEffect, useState } from "react";
import "./Team.css";
import pictures from "../../source/pic.jpeg";
import "@fortawesome/fontawesome-free/css/all.min.css";
import {Link}  from 'react-scroll';

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

export default function Team() {
  const Profiles = [
    { image: pictures, nom: "Ismail", post: "vice président", desc: "Student at FSA, ADIA." },
    { image: pictures, nom: "ahmed", post: "Président", desc: "Student at FSA, ADIA." },
    { image: pictures, nom: "ali", post: "Human Ressource", desc: "Student at FSA, ADIA." },
    { image: pictures, nom: "Anass", post: "Responsable Data cellule", desc: "Student at FSA, ADIA." },
    { image: pictures, nom: "sara ", post: "Test5", desc: "Student at FSA, ADIA." },
  ];

  const [visible, setVisible] = useState(false);
  useEffect(() => setVisible(true), []);

  return (
    <section className="team-section container">
      <div className="testo">
        <h2>
          Meet <span>Our Team</span>
        </h2>
        <hr />
        <p>Explore our talented team members and their skills.</p>
      </div>

      {/* === Navigation Buttons Outside the Slider === */}
      <div className="team-slider-container">
        <button className="nav-btn prev-btn">
          <i className="fas fa-chevron-left"></i>
        </button>

        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          loop={true}
          grabCursor={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={{
            nextEl: ".next-btn",
            prevEl: ".prev-btn",
          }}
          breakpoints={{
            0: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          {Profiles.map((profile, index) => (
            <SwiperSlide key={index}>
              <div
                className={`profile-card ${visible ? "show" : ""}`}
                style={{ transitionDelay: `${index * 0.15}s` }}
              >
                <div className="profile-image">
                  <img src={profile.image} alt={profile.nom} />
                </div>
                <div className="profile-content">
                  <h2>{profile.nom}</h2>
                  <h3>{profile.post}</h3>
                  <p>{profile.desc}</p>
                  <div className="social-icons">
                    <i className="fa-brands fa-github "></i>
                    <i className="fa-brands fa-linkedin"></i>
                    <i className="fa-brands fa-instagram"></i>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <button className="nav-btn next-btn">
          <i className="fas fa-chevron-right"></i>
        </button>
      </div>

      <div className="contacte-section">
        <p>Want to be part of our leadership team?</p>
        <br />
            <Link  to="Contacte-content" smooth={true}  offset={-350}  duration={1500} spy={true} >
              <button className="cta">
                <span>Contact Us &nbsp;</span>
                <svg viewBox="0 0 13 10" height="10px" width="15px">
                <path d="M1,5 L11,5"></path>
                <polyline points="8 1 12 5 8 9"></polyline>
                </svg>
              </button>
            </Link>
        
       
      </div>
    </section>
  );
}
