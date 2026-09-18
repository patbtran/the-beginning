import './App.css'
import { Routes, Route } from 'react-router-dom';
import BlogPostsPage from './pages/BlogPostsPage';
import IndividualPostPage from './pages/IndividualPostPage';
import ContactPage from './pages/ContactPage';
import Login from './Components/login/Login';
import Header from './Components/Common/Header';
import Footer from './Components/Common/Footer';
import HomePage from './pages/HomePage';
import ProjectsPage from './pages/ProjectsPage';
import { AuthProvider } from './Components/authWrapper/AuthProvider';
import PageTransition from './Components/Common/PageTransition';
import { useState } from 'react';

function App() {
  const [contactOpen, setContactOpen] = useState(false);


  return (
    <div>
      <AuthProvider>
        <Header setContactOpen={setContactOpen} />
      <main className="pt-20 bg-[#1a1616] min-h-screen">
        <PageTransition>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/blog" element={<BlogPostsPage />} />
          
          <Route path="/login" element={<Login />} />
          <Route path="/post/:id" element={<IndividualPostPage />} />
          <Route path ="/projects" element={<ProjectsPage />} />
        </Routes>
        </PageTransition>
        {contactOpen && (
        <div className="fixed top-0 right-0 w-1/3 h-screen z-50">
      <ContactPage />
        </div>
)}
      </main>
      </AuthProvider>
      <Footer />
    </div>
  );
}

export default App;
