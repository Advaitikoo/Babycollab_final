import { SignInButton } from "@clerk/clerk-react";

export default function Hero() {
  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* Full-screen Video Background covering everything including header */}
      <video
        className="absolute inset-0 w-full h-full object-cover z-0"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src="/A_vibrant_and_202508231327.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Header overlay - positioned above video */}
      <div className="absolute top-0 left-0 right-0 z-20 px-4 sm:px-8 py-6 flex items-center justify-between">
        {/* Logo Section */}
        <div className="flex flex-col items-center">
          <div className="w-12 sm:w-16 h-12 sm:h-16 bg-white bg-opacity-90 rounded-full flex items-center justify-center mb-1 sm:mb-2">
            <span className="font-times text-xs sm:text-sm font-bold text-black">logo</span>
          </div>
          <span className="font-times text-xs sm:text-sm font-bold text-white drop-shadow-lg">BabyCollab</span>
        </div>

        {/* Navigation Links */}
        <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8">
          <a href="/dashboard" className="font-inter text-lg xl:text-xl font-normal text-white hover:text-gray-200 transition-colors drop-shadow-lg">
            Home
          </a>
          <a href="#" className="font-inter text-lg xl:text-xl font-normal text-white hover:text-gray-200 transition-colors drop-shadow-lg">
            Friends
          </a>
          <a href="#" className="font-inter text-lg xl:text-xl font-normal text-white hover:text-gray-200 transition-colors drop-shadow-lg">
            Features
          </a>
          <a href="#" className="font-inter text-lg xl:text-xl font-normal text-white hover:text-gray-200 transition-colors drop-shadow-lg">
            About Us
          </a>
          <a href="#" className="font-inter text-lg xl:text-xl font-normal text-white hover:text-gray-200 transition-colors drop-shadow-lg">
            Contact
          </a>
        </nav>

        {/* Sign In/Out */}
        <div className="hidden md:flex items-center">
          <SignInButton mode="modal" forceRedirectUrl="/dashboard">
            <button className="bg-white bg-opacity-90 hover:bg-opacity-100 transition-all duration-300 px-4 py-2 rounded-full font-inter text-sm lg:text-base font-semibold text-black shadow-lg hover:shadow-xl">
              Start Now
            </button>
          </SignInButton>
        </div>

        {/* Mobile Menu Button */}
        <button className="lg:hidden flex flex-col space-y-1">
          <span className="w-6 h-0.5 bg-white drop-shadow-lg"></span>
          <span className="w-6 h-0.5 bg-white drop-shadow-lg"></span>
          <span className="w-6 h-0.5 bg-white drop-shadow-lg"></span>
        </button>
      </div>

      {/* Main Content Overlay */}
      <div className="absolute inset-0 flex flex-col items-center justify-center z-10 bg-black bg-opacity-20">
        <div className="text-center px-4 sm:px-8 max-w-4xl">
          <h1 className="font-times text-3xl sm:text-5xl lg:text-7xl font-bold text-white leading-tight mb-4 sm:mb-6 drop-shadow-2xl">
            One Platform. Infinite Possibilities.
          </h1>

          <p className="font-outfit text-lg sm:text-xl lg:text-2xl font-normal text-white leading-relaxed mb-6 sm:mb-8 max-w-3xl mx-auto drop-shadow-lg">
            Your career journey, projects, and ideas — all in one collaborative space. Powered by AI. Built for dreamers and doers.
          </p>

          <SignInButton mode="modal" forceRedirectUrl="/dashboard">
            <button className="bg-white bg-opacity-90 hover:bg-opacity-100 transition-all duration-300 px-6 sm:px-8 py-3 sm:py-4 rounded-full font-inter text-lg sm:text-xl font-semibold text-black shadow-lg hover:shadow-xl transform hover:scale-105">
              Get started
            </button>
          </SignInButton>
        </div>
      </div>
    </section>
  );
}
