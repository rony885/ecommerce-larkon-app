// import React from "react";
// import styled from "styled-components";
// import Footer from "../../components/Footer";
// import { Link } from "react-router-dom";

// const Clock = () => {
//   return (
//     <Wrapper>
//       <div className="page-content">
//         <div className="container-xxl">
//           <div className="row">
//             <div className="col-xl-12">
//               <div className="card">
//                 <div className="card-header d-flex justify-content-between align-items-center gap-1 mb-3">
//                   <h4 className="card-title flex-grow-1 fs-4">
//                     <Link to="/" data-discover="true">
//                       Dashboard
//                     </Link>{" "}
//                     | CLock
//                   </h4>
//                   {/* <Link to="/product-add" className="btn btn-sm btn-primary fs-4">
//                   Product Add
//                 </Link> */}
//                 </div>

//                 <h1>CLock</h1>
//               </div>

//               {/* ========= Delete Modal ========= */}
//             </div>
//           </div>
//         </div>

//         <Footer />
//       </div>
//     </Wrapper>
//   );
// };

// const Wrapper = styled.section``;

// export default Clock;

import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Footer from "../../components/Footer";
import { Link } from "react-router-dom";

const Clock = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const day = time.toLocaleDateString("en-US", {
    weekday: "long",
  });

  const date = time.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const secondDeg = time.getSeconds() * 6;
  const minuteDeg = time.getMinutes() * 6 + time.getSeconds() * 0.1;
  const hourDeg = (time.getHours() % 12) * 30 + time.getMinutes() * 0.5;

  const formattedTime = time.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: true,
  });

  return (
    <Wrapper>
      <div className="page-content">
        <div className="container-xxl">
          <div className="row">
            <div className="col-xl-12">
              <div className="card">
                <div className="card-header d-flex justify-content-between align-items-center gap-1 mb-3">
                  <h4 className="card-title flex-grow-1 fs-4">
                    <Link to="/">Dashboard</Link> | Clock
                  </h4>
                </div>

                <div className="clock-container">
                  {/* Digital Clock */}
                  <div className="digital-clock">
                    {/* <h1>{time.toLocaleTimeString()}</h1> */}
                    <h1>{formattedTime}</h1>
                    <h4>{day}</h4>
                    <p>{date}</p>
                  </div>

                  {/* Analog Clock */}
                  <div className="analog-clock">
                    {[...Array(12)].map((_, i) => {
                      const num = i + 1;
                      const angle = (num * 30 * Math.PI) / 180;

                      return (
                        <span
                          key={num}
                          className="number"
                          style={{
                            left: `calc(50% + ${
                              110 * Math.sin(angle)
                            }px - 10px)`,
                            top: `calc(50% - ${
                              110 * Math.cos(angle)
                            }px - 10px)`,
                          }}
                        >
                          {num}
                        </span>
                      );
                    })}

                    <div
                      className="hand hour"
                      style={{
                        transform: `translateX(-50%) rotate(${hourDeg}deg)`,
                      }}
                    />

                    <div
                      className="hand minute"
                      style={{
                        transform: `translateX(-50%) rotate(${minuteDeg}deg)`,
                      }}
                    />

                    <div
                      className="hand second"
                      style={{
                        transform: `translateX(-50%) rotate(${secondDeg}deg)`,
                      }}
                    />

                    <div className="center-dot"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .clock-container {
    padding: 40px 20px;
    text-align: center;
  }

  .digital-clock h1 {
    font-size: 4rem;
    font-weight: 700;
    color: #3b82f6;
    margin-bottom: 10px;
  }

  .digital-clock h4 {
    color: #6c757d;
    margin-bottom: 5px;
  }

  .digital-clock p {
    font-size: 18px;
    margin-bottom: 40px;
  }

  .analog-clock {
    width: 320px;
    height: 320px;
    border: 12px solid #3b82f6;
    border-radius: 50%;
    position: relative;
    margin: auto;
    background: #fff;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
  }

  .number {
    position: absolute;
    font-size: 20px;
    font-weight: 700;
    color: #222;
  }

  .hand {
    position: absolute;
    left: 50%;
    bottom: 50%;
    transform-origin: bottom;
    border-radius: 20px;
  }

  .hour {
    width: 8px;
    height: 80px;
    background: #222;
  }

  .minute {
    width: 5px;
    height: 110px;
    background: #555;
  }

  .second {
    width: 2px;
    height: 130px;
    background: #ef4444;
  }

  .center-dot {
    width: 16px;
    height: 16px;
    background: #222;
    border-radius: 50%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  @media (max-width: 576px) {
    .digital-clock h1 {
      font-size: 2.5rem;
    }

    .analog-clock {
      width: 260px;
      height: 260px;
    }
  }
`;

export default Clock;
