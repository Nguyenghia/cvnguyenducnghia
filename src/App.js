import './App.css';

function App() {
  return (
    <div className="App">
      <header>
        <div className="personal-info">
          <img 
            src={`${process.env.PUBLIC_URL}/images/avt.jpg`} 
            alt="nghia" 
          />
          <div>
            <h1>Nguyễn Đức Nghĩa</h1>
            <p>Web Developer</p>
            <p>Date of birth: 30/04/2004</p>
            <p>Sex: Male</p>
            <p>Address: District 7, Ho Chi Minh City</p>
          </div>
        </div>
      </header>

      <div className="section">
        <div className="left-section">
          <div className="title">Objective</div>
          <p className="content">
            A highly motivated web developer with a passion for creating innovative and user-friendly websites. Seeking to contribute my skills and knowledge to a dynamic team.
          </p>

          <div className="title">Experience</div>
          <p className="content">
            Company ABC - Web Developer (2026-2030)<br />
            Developed and maintained responsive websites using HTML, CSS, and JavaScript. Collaborated with cross-functional teams to achieve project goals.
          </p>
        </div>

        <div className="right-section">
          <div className="title">Skills</div>
          <p className="content">
            HTML, CSS, JavaScript<br />
            React, Node.js<br />
            Responsive Design<br />
            Version Control (Git)<br />
            Problem Solving
          </p>

          <div className="title">Education</div>
          <p className="content">
            Bachelor of Science in Computer Science<br />
            University of Information Technology (Vietnam National University), Graduated in 2026
          </p>
        </div>
      </div>

      <footer>
        <p>Contact Information</p>
        <p>Phone: 0903057741</p>
        <p>Email: <a href="mailto:22560036@gm.uit.edu.vn">22560036@gm.uit.edu.vn</a></p>
        <p>Facebook: <a href="https://www.facebook.com/hachilami.nguyen/" target="_blank" rel="noopener noreferrer">Nguyễn Nghĩa</a></p>
        <p>Website: <a href="https://cvnguyenducnghia.vercel.app/" target="_blank" rel="noopener noreferrer">https://cvnguyenducnghia.vercel.app/</a></p>
      </footer>
    </div>
  );
}

export default App;
