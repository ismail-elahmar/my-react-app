import fsa from "../../source/fsa.png";
import cent from "../../source/tam.jpg";
import code from "../../source/code212.png";
import "./Partner.css";

export default function Partner() {
  // Repeat logos enough times for infinite scroll
  const images = [fsa, cent, code, fsa, cent, code, fsa, cent, code, fsa, cent, code];

  return (
    <section className="partner-section">
      <div className='testo'>
          <h2 >Our <span>Partners</span></h2>
      <hr/>
      <p>Discover Our Partners.</p>
      </div>
      <div className="partner-slider">
        <div className="partner-track">
          {images.map((img, i) => (
            <div className="partner-logo" key={i}>
              <img src={img} alt={`Partner ${i + 1}`} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
