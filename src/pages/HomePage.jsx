import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../Components/authWrapper/AuthContext';


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
          <button style={{
            padding: '10px 20px',
            fontSize: '1rem',
            backgroundColor: '#ae9cde',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
            transition: 'background-color 0.3s'
          }}
          onMouseOver={(e) => e.target.style.backgroundColor = '#9a71c6'}
          onMouseOut={(e) => e.target.style.backgroundColor = '#ae9cde'}
          >
            Explore Blog
          </button>
        </Link>
      </div>
    </div>
  );
};


export default HomePage;