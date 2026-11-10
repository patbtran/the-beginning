import { Link } from 'react-router-dom';
import explorebutton from '../assets/explorebutton.jpg';
import aboutmebox1 from '../assets/aboutme1.png';
import aboutmebox4 from '../assets/aboutme2.png';
import aboutmebox3 from '../assets/aboutme3.jpeg';
import aboutmebox2 from '../assets/aboutme4.jpg';

function HomePage() {

  return (
    <div className="bg-[#1a1616] min-h-screen text-white p-8">

      {/* Name / Title */}
      <h1 className="text-5xl font-bold text-center">
        cheesa
      </h1>

      <p className="text-xl text-center mt-2">
        curious about me? start here
      </p>


      {/* Explore Blog Button */}
      <div className="flex justify-center mt-8">
        <Link to="/blog">
          <img
            src={explorebutton}
            alt="Explore Blog"
            className="w-[200px] transition duration-300 hover:scale-110 hover:drop-shadow-[0_0_15px_#ae9cde]"
          />
        </Link>
      </div>


      {/* ============================= */}
      {/* ABOUT ME SECTION */}
      {/* ============================= */}

      <section className="mt-75 px-13">

        {/* About Me Title */}
        <h2 className="text-5xl font-bold italic mb-12">
          README
        </h2>


        {/* BOX #1 - LEFT */}
        <div className="w-[700px] min-h-[350px] bg-[#211d1e] rounded-2xl p-8 flex items-center gap-8 transition duration-300 hover:scale-105">
          <img
            src={aboutmebox1}
            alt="Box1"
            className="w-[300px] h-[300px] object-contain rounded-2xl "
          />

          <div>
            <h3 className="text-2xl font-bold italic mb-3">
              Hi, I'm Patricia!
            </h3>

            <p className="text-lg">
              I'm a Computer Science student interested in
              cybersecurity, technology, and learning new things. Currently, I have a year of IT under my belt and I've passed my COMPTIA Security+ first try!
            </p>
          </div>

        </div>


        {/* BOX #2 - RIGHT */}
      <div className="w-[700px] min-h-[350px] bg-[#211d1e] rounded-2xl p-8 flex items-center gap-8 ml-auto mt-16 transition duration-300 hover:scale-105">
          <div>
            <h3 className="text-2xl font-bold italic mb-3">
              Goals & Inspirations
            </h3>

            <p className="text-lg">
              Getting comfortable with being uncomfortable. I like to believe that being uncomfortable with doing something is just a sign of something you have to learn.
              I take a lot from my family, through them they have shown me, you can always figure a way. 
              
            </p>
          </div>

          <img
            src={aboutmebox2}
            alt="Box2"
            className="w-[300px] h-[300px] object-contain rounded-2xl"
          />

        </div>


        {/* BOX #3 - LEFT */}
        <div className="w-[700px] min-h-[350px] bg-[#211d1e] rounded-2xl p-8 flex items-center gap-8 mt-16 transition duration-300 hover:scale-105">

          <img
            src={aboutmebox3}
            alt="Box3"
            className="w-[300px] h-[300px] object-contain rounded-2xl"
          />

          <div>
            <h3 className="text-2xl font-bold italic mb-3">
               Hobbies
            </h3>

            <p className="text-lg">
              As of recently, I enjoy learning about modding. The world of PCB's and working on physical hardware have been so entertaining! 
              I have found that not only is it fun, but it has allowed to me to offer more convenient methods for my friends and family!
              
            </p>
          </div>

        </div>


        {/* BOX #4 - RIGHT */}
        <div className="w-[700px] min-h-[350px] bg-[#211d1e] rounded-2xl p-8 flex items-center gap-8 ml-auto mt-16 transition duration-300 hover:scale-105">

          <div>
            <h3 className="text-2xl font-bold italic mb-3">
              Outside of Tech
            </h3>

            <p className="text-lg">
              Outside of coding, learning new technologies, and
              exploring cybersecurity, I love being with family, friends, and connecting with the outdoors. Beach trips are my favorite meeting point for all of these!
            </p>
          </div>

          <img
            src={aboutmebox4}
            alt="Box4"
            className="w-[300px] h-[300px] object-contain rounded-2xl"
          />

        </div>

      </section>

    </div>
  );
}

export default HomePage;