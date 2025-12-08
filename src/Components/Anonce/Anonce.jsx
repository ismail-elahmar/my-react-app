import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Autoplay, Pagination, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

import annonce1 from "../../source/black.jpg";
import annonce2 from "../../source/classroom.jpg";
import annonce3 from "../../source/hxh.jpg";
import "./Annonce.css";

export default function Annonce() {
  const images = [annonce1, annonce2,annonce3];

  return (
    <div className="Annoncement">
      <div className='testo'>
          <h2 className="Annoc">ANNONCEMENT</h2>
       <hr/>
      <p>Check out the latest news, updates, and announcements from our IT Club. Don’t miss what’s new!</p>
      </div>
      
      <Swiper
        modules={[EffectFade, Autoplay, Pagination, Navigation]}
        effect="fade"
        fadeEffect={{ crossFade: true }}
        autoplay={{ delay: 3000, disableOnInteraction: false, pauseOnMouseEnter: true }}
        pagination={{ clickable: true }}
        navigation
        loop
        className="slideshow"
      >
        {images.map((img, i) => (
          <SwiperSlide key={i}>
            <img src={img} alt={`Annonce ${i + 1}`} className="slide" loading="lazy" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
