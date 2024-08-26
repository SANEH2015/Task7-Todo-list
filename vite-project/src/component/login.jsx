import React from 'react';

function Login() {
  return (
    <div style={{  padding: '20px', minHeight: '100vh' }}>
      <div style={{ backgroundColor: '#fff', borderRadius: '10px', padding: '20px', boxShadow: '0px 2px 10px rgba(0, 0, 0, 0.1)',width:"200px" ,justifyContent:"center"}}>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <div style={{ width: '100%', position: 'relative' }}>
            <div style={{ backgroundColor: '#e0e0f4', height: '200px', width: '100%', borderRadius: '10px', position: 'absolute', top: '-10px', zIndex: '-1' }} />
            <div style={{ backgroundColor: '#d9d9f7', height: '200px', width: '100%', borderRadius: '10px', position: 'absolute', top: '-5px', zIndex: '-2' }} />
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%' }}>
            <h2 style={{ fontSize: '24px', marginBottom: '20px' }}>Login</h2>
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
              <span style={{ marginRight: '5px' }}>👤</span>
              <input type="text" placeholder="User name / Email" style={{ border: '1px solid #ccc', padding: '10px', borderRadius: '5px', width: '100%', maxWidth: '300px' }} />
            </div>
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
              <span style={{ marginRight: '5px' }}>🔒</span>
              <input type="password" placeholder="Password" style={{ border: '1px solid #ccc', padding: '10px', borderRadius: '5px', width: '100%', maxWidth: '300px' }} />
            </div>
            <button style={{ backgroundColor: '#007bff', color: '#fff', padding: '10px 20px', borderRadius: '5px', border: 'none', cursor: 'pointer' }}>Log In Now</button>
          </div>

          <p style={{ marginTop: '20px', fontSize: '16px', color: '#555' }}>Log in via</p>
          <div style={{ display: 'flex', justifyContent: 'center', marginTop: '10px' }}>
            <a href="#" style={{ marginRight: '10px', display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
              <i className="fa fa-instagram" aria-hidden="true" style={{ fontSize: '20px', color: '#2196F3' }} />
            </a>
            <a href="#" style={{ marginRight: '10px', display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
              <i className="fa fa-facebook" aria-hidden="true" style={{ fontSize: '20px', color: '#3b5998' }} />
            </a>
            <a href="#" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
              <i className="fa fa-twitter" aria-hidden="true" style={{ fontSize: '20px', color: '#1da1f2' }} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;