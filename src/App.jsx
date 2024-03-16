import teamwork from './assets/teamwork.svg';
import signup from './assets/signup-background.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelopeOpen, faLock } from '@fortawesome/free-solid-svg-icons';
import './App.css';

function App() {
  return (
    <main className="bg-gradient-to-r from-[#F28383] from-10% to-[#481EDC] to-90% flex items-center justify-center h-screen">
      <div className="max-w-[960px] bg-black-dark grid gap-20 grid-cols-2 items-center p-5 rounded-2xl">
        <div className="relative">
          <img src={signup} alt="signup with loop design" />
          <img className="absolute top-36" src={teamwork} alt="teamwork which has team members helping each other" />
        </div>
        <div className="max-w-80 grid gap-5">
          <h1 className="text-5xl font-bold text-white">Sign in</h1>
          <p className="text-dull-white">Access to 300+ hours of courses, tutorials and livestreams</p>
          <form action="" className="space-y-6 text-white">
            <div className="relative">
              <div className="absolute top-1 left-1 bg-white-medium rounded-full p-2 flex text-blue-300">
                <FontAwesomeIcon icon={faEnvelopeOpen} />
              </div>
              <input
                type="email"
                placeholder="Email address"
                className="w-80 bg-white-light py-2 px-12 rounded-full focus:bg-black-dark focus:outline-none focus:ring-1 focus:ring-neon-blue focus:drop-shadow"
              />
            </div>
            <div className="relative">
              <div className="absolute top-1 left-1 bg-white-medium rounded-full p-2 flex text-blue-300">
                <FontAwesomeIcon icon={faLock} />
              </div>
              <input
                type="password"
                placeholder="Password"
                className="w-80 bg-white-light py-2 px-12 rounded-full focus:bg-black-dark focus:outline-none focus:ring-1 focus:ring-neon-blue focus:drop-shadow"
              />
            </div>
            <button type="submit" className="w-80 bg-gradient-to-r from-blue-400 to-cyan-200 py-2 rounded-full">
              Sign in
            </button>
          </form>
          <div className="text-dull-white border-t border-white-light space-y-3 pt-4 text-sm">
            <p>
              Don&#39;t have an account?{' '}
              <a href="/signup" className="text-neon-blue font-semibold cursor-pointer">
                Sign up
              </a>
            </p>
            <p>
              Forgot password?{' '}
              <a href="/reset" className="text-neon-blue font-semibold cursor-pointer">
                Reset password
              </a>
            </p>
            <p>
              Don&#39;t have a password yet?{' '}
              <a href="/set" className="text-neon-blue font-semibold cursor-pointer">
                Set password
              </a>
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}

export default App;
