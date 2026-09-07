import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../Components/authWrapper/AuthContext';
import explorebutton from '../assets/explorebutton.jpg';

const HomePage = () => {
  const { isLoggedIn, login, logout } = useAuth();
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '100vh',
      padding: '20px',
      backgroundColor: '#1a1616',
      fontFamily: 'Arial, sans-serif',
      textAlign: 'center'
    }}>
      <h1 style={{
        fontSize: '2.5rem',
        marginBottom: '20px',
        color: '#333'
      }}>
        Welcome 
      </h1>
      <p style={{
        fontSize: '1.2rem',
        marginBottom: '40px',
        maxWidth: '600px',
        color: '#666'
      }}>
        Curious about me? Start here.
      </p>
      <div style={{
        display: 'flex',
        gap: '20px',
        flexWrap: 'wrap',
        justifyContent: 'center'
      }}>

        <Link to="/blog">
          <img 
            src={explorebutton}
            alt="Explore Button"
           style={{
            width: '200px',
            cursor: 'pointer',
            transitions: 'all 0.3s ease'
          }}
          onMouseOver={(e) => {
            e.currentTarget.style.backgroundColor = '#e2eb38';
            e.currentTarget.style.boxShadow = '0 0 20px rgba(225, 255, 76, 0.8)';
            e.currentTarget.style.transform = 'scale(1.08)';
          }}

          onMouseOut={(e) => {
            e.currentTarget.style.backgroundColor = '#ae9cde';
            e.currentTarget.style.boxShadow = 'none';
            e.currentTarget.style.transform = 'scale(1)';
          }}
          />
            
        </Link>
      </div>
    </div>
  );
};


export default HomePage;