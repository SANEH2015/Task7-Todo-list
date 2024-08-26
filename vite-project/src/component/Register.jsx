import React from 'react'

export default function Register() {
  return (
    <div className="containers">
      <header className="header" style={{backgroundColor:"#fff",padding:"20px",boxShadow:"0 2px 4px rgba(0,0,0.1)",display:"flex"}}>
        <div className="logo"style={{fontWeight:"bold",fontSize:"1.5rem",textDecoration:"none", color:"black"}}>
          <img src={Image} alt="Plane Logo" />
        </div>
        <nav className="nav" style={{display:"flex",alignItems:"center",justifyContent:"space-between"}}>
          <ul>
            <li>
              <a href="#">HOME</a>
            </li>
            <li>
              <a href="#">REGISTER</a>
            </li>
            <li>
              <a href="#">Resources</a>
            </li>
          </ul>
        </nav>
        <div className="buttons" >
          <button className="btn btn-primary" style={{backgroundColor:"#007bff",color:"#fff",padding:"10px 20px",border:"none",borderRadius:"4px",cursor:"pointer",height:"50px",margin:"10px"}}>Login</button>
          <button className="btn btn-secondary"style={{backgroundColor:"black",color:"#fff",padding:"10px 20px",border:"none",borderRadius:"4px",cursor:"pointer",height:"50px",margin:"10px"}}>Register</button>
        </div>
      </header>
      <main className="main">
      <div className="container">
      <div className="login-form">
        <div className="form-header">
          {/* Add your logo or branding here */}
        </div>
        <div className="form-body">
          <div className="input-field">
            <i className="fas fa-user"></i>
            <input type="text" placeholder="User name / Email" />
          </div>
          <div className="input-field">
            <i className="fas fa-lock"></i>
            <input type="password" placeholder="Password" />
          </div>
          <button className="login-button">Register Now</button>
        </div>
        <div className="form-footer">
          <p>Log in </p>
          <div className="social-links">
            <a href="#" className="social-link">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#" className="social-link">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="#" className="social-link">
              <i className="fab fa-twitter"></i>
            </a>
          </div>
        </div>
      </div>
    </div> 
      </main>
      <footer className="footer">
        <p>With your consent, we use cookies to optimize performance and enable functions on this site.</p>
        <p>created by:Sanele mkhize(Mlab codetribe)</p>
        
        <div className="footer-links">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
        </div>
      </footer>
    </div>
  )
}
