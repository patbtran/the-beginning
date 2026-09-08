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


function App() {


  return (
    <div>
      <AuthProvider>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/blog" element={<BlogPostsPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/post/:id" element={<IndividualPostPage />} />
          <Route path ="/projects" element={<ProjectsPage />} />
        </Routes>
      </AuthProvider>
      <Footer />
    </div>
  );
}

export default App;
