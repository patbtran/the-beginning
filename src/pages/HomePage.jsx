import { Link } from 'react-router-dom';
import { useAuth } from '../Components/authWrapper/AuthContext';
import explorebutton from '../assets/explorebutton.jpg';
import aboutmebox1 from '../assets/aboutme1.png';
import aboutmebox2 from '../assets/aboutme2.png';

function HomePage() {
  const { isLoggedIn } = useAuth();

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

      <section className="mt-75">

        {/* About Me Title */}
        <h2 className="text-5xl font-bold italic mb-12">
          README
        </h2>


        {/* BOX #1 - LEFT */}
        <div className="w-[500px] min-h-[250px] bg-[#211d1e] rounded-2xl p-6 flex items-center gap-6">

          <img
            src={aboutmebox1}
            alt="Box1"
            className="w-[150px] h-[150px] object-cover rounded-2xl"
          />

          <div>
            <h3 className="text-2xl font-bold italic mb-3">
              Hi, I'm Patricia!
            </h3>

            <p className="text-lg">
              I'm a Computer Science student interested in
              cybersecurity, technology, and learning new things. Currently, I have a couple years of IT under my belt and I've passed my COMPTIA Security+ first try!
            </p>
          </div>

        </div>


        {/* BOX #2 - RIGHT */}
        <div className="w-[500px] min-h-[250px] bg-[#211d1e] rounded-2xl p-6 flex items-center gap-6 ml-auto mt-10">

          <div>
            <h3 className="text-2xl font-bold italic mb-3">
              What I Love
            </h3>

            <p className="text-lg">
              Outisde of coding, learning new technologies, and
              exploring cybersecurity, I love family, friends, and connecting with the outdoors. Beach trips are my favorite meeting point for all of these!
            </p>
          </div>

          <img
            src={aboutmebox2}
            alt="Box2"
            className="w-[150px] h-[150px] object-cover rounded-2xl"
          />

        </div>


        {/* BOX #3 - LEFT */}
        <div className="w-[500px] min-h-[250px] bg-[#211d1e] rounded-2xl p-6 flex items-center gap-6 mt-10">

          <img
            src="/images/about3.jpg"
            alt="My goals"
            className="w-[150px] h-[150px] object-cover rounded-2xl"
          />

          <div>
            <h3 className="text-2xl font-bold italic mb-3">
              My Goals
            </h3>

            <p className="text-lg">
              I hope I never lose the drive to continue learning. I want to understand cybesrcurity to a level where I can teach others. 
            </p>
          </div>

        </div>


        {/* BOX #4 - RIGHT */}
        <div className="w-[500px] min-h-[250px] bg-[#211d1e] rounded-2xl p-6 flex items-center gap-6 ml-auto mt-10">

          <div>
            <h3 className="text-2xl font-bold italic mb-3">
              What Inspires me?
            </h3>

            <p className="text-lg">
              Stories belonging to the ones that have surrounded me since the childhood.
            </p>
          </div>

          <img
            src="/images/about4.jpg"
            alt="Outside of tech"
            className="w-[150px] h-[150px] object-cover rounded-2xl"
          />

        </div>

      </section>

    </div>
  );
}

export default HomePage;