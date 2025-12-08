import { useEffect } from "react";

import about from '../../source/about.png'
import './About.css';

export default function About(){
    useEffect(() => {
    const elements = document.querySelectorAll(".About-left, .textes");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
          }
        });
      },
      { threshold: 0.2 }
    );

    elements.forEach((el) => observer.observe(el));
  }, []);
    return (
        <div className='container-About container'>
            <div className='testo'>
                <h2>About <span>IT CLUB FSA</span></h2>
                <hr/>
                <p>A community for tech enthusiasts to learn, share knowledge, and collaborate
                     on exciting projects in programming, networking, AI, and more.
                </p>
            </div>
            <div className='About'>
                <div className='About-left'>
                    <img src={about} alt="im"/>
                </div>
                <div className='textes'>
                    <h2>Club <span>Overview</span></h2>
                    <p>Our IT Club is a dynamic community of technology enthusiasts passionate about innovation,
                        coding, and problem-solving.Founded in 2022 at the Faculty of Science Agadir,
                        we aim to create an environment where students can learn, share knowledge, 
                        and collaborate on exciting tech projects. We organize hands-on workshops, 
                        seminars, hackathons, and coding sessions to help members improve their technical skills
                        and stay updated with the latest trends in IT.Our mission is to bridge the gap between theory 
                        and real-world applications while encouraging teamwork and creativity.
                    </p>

                    <h2>Our <span>Mission</span></h2>
                    <p>To empower students with practical IT skills, foster innovation, and create opportunities for 
                        collaboration through workshops, projects, and events that connect theory to real-world applications.
                    </p>

                    <h2>Our<span>Vision</span></h2>
                    <p>To become a leading student-driven technology hub in Faculty of Science Agadir, inspiring future IT 
                        professionals and innovators while building a strong tech community.
                    </p>
                </div>
            </div>
        </div>
    );
}


