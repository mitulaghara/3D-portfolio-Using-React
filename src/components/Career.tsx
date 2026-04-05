import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My education <span>&</span>
          <br /> studies
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>CS Student</h4>
                <h5>Computer Science & Engineering</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Currently pursuing my degree with a strong focus on software engineering, 
              data structures, algorithms, and full-stack web technologies.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>MERN Stack Developer</h4>
                <h5>Self-Taught & Projects</h5>
              </div>
              <h3>2023–26</h3>
            </div>
            <p>
              Mastering MongoDB, Express.js, React, and Node.js. Developed several 
              production-ready applications, including e-commerce platforms, hotel 
              booking systems, and social media clones.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Web Fundamentals</h4>
                <h5>HTML, CSS, JS</h5>
              </div>
              <h3>2022</h3>
            </div>
            <p>
              Built a strong foundation in modern web development, styling 
              frameworks, and responsive design principles.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
