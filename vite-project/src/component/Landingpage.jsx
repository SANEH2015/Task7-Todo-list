import React from 'react'
import Image from '../assets/list.jpg'
// import { Link } from "react-router-dom";
// import logo from "../assets/planelogo-removebg-preview.png"
export default function Landingpage() {
  return (
    <div style={{  padding: '20px' }}>
      <nav style={{  padding: '10px', marginBottom: '20px', backgroundColor:"rgb(239, 225, 224)" }}>
        <ul style={{ listStyle: 'none', margin: 0, padding: 0 }}>
          <li style={{ display: 'inline-block', marginRight: '20px' }}>
            <a href="#" style={{ textDecoration: 'none', color: '#333' }}>Login</a>
          </li>
          <li style={{ display: 'inline-block', marginRight: '20px' }}>
            <a href="#" style={{ textDecoration: 'none', color: '#333' }}>Register</a>
          </li>
        
        </ul>
      </nav>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <div style={{ width: '40%', padding: '20px' }}>
          <img
            src={Image}
            alt="Beverly and 3rd Candle Co."
            style={{ maxWidth: '100%', height: 'auto' }}
          />
        </div>
        <div style={{ width: '50%', padding: '20px', }}>
          <h1 style={{ fontSize: '40px', marginBottom: '10px' }}>Welcome</h1>
          <h2 style={{ fontSize: '2em', marginBottom: '20px' }}>We're so glad you're here!</h2>
          <p style={{ fontSize: '30px' }}>
            We help you organize your time<br></br>To-Do App is simple and<br></br> awesome App to organise<br></br>your task with very easy
          </p>
        </div>
      </div>
      <footer style={{ backgroundColor: 'rgb(239, 225, 224)', color: '#fff', padding: '20px', marginTop: '20px', textAlign: 'center' }}>
        <p>&copy; 2024 Todo List.</p>
      </footer>
    </div>
  );
}
