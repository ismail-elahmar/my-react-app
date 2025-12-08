import React from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import "./Statics.css";

export default function Statistics() {
  const stats = [
    { label: "Members", value: 300 },
    { label: "Staff", value: 8 },
    { label: "Events", value: 2 },
    { label: "Projects", value: 20 },
  ];

  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.5 });

  return (
    <section className="stats-section" ref={ref}>
    
      <div className='testo'>
          <h2 >Our <span>Achievements</span></h2>
      <hr/>
      <p>Discover the numbers that define our journey and community impact.</p>
      </div>
      <div className="stats-container">
        {stats.map((item, i) => (
          <div className="stat-box" key={i}>
            {inView && (
              <h3 className="stat-number">
                <CountUp
                  start={0}
                  end={item.value}
                  duration={2}
                  delay={i * 0.5}
                  formattingFn={(n) =>
                    String(Math.floor(n)).padStart(3, "") 
                  }
                />
              </h3>
            )}
            {!inView && <h3 className="stat-number"></h3>}
            <p className="stat-label">{item.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
