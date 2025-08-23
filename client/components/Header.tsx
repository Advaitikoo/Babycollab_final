import { Link } from "react-router-dom";

export default function Header() {
  const navItems = [
    { name: 'Dashboard', path: '/dashboard' },
    { name: 'Friends', path: '#' },
    { name: 'Features', path: '#' },
    { name: 'About Us', path: '#' },
    { name: 'Contact', path: '#' }
  ];

  return (
    <header className="w-full px-4 sm:px-8 py-6 flex items-center justify-between">
      {/* Logo Section */}
      <Link to="/" className="flex flex-col items-center">
        <div className="w-12 sm:w-16 h-12 sm:h-16 bg-neutral-100 rounded-full flex items-center justify-center mb-1 sm:mb-2">
          <span className="font-times text-xs sm:text-sm font-bold text-black">logo</span>
        </div>
        <span className="font-times text-xs sm:text-sm font-bold text-black">BabyCollab</span>
      </Link>

      {/* Navigation Links */}
      <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8">
        {navItems.map((item, index) => (
          item.path === '/dashboard' ? (
            <Link
              key={index}
              to={item.path}
              className="font-inter text-lg xl:text-xl font-normal text-black hover:text-gray-600 transition-colors"
            >
              {item.name}
            </Link>
          ) : (
            <a
              key={index}
              href={item.path}
              className="font-inter text-lg xl:text-xl font-normal text-black hover:text-gray-600 transition-colors"
            >
              {item.name}
            </a>
          )
        ))}
      </nav>

      {/* Sign In/Out - Hidden on mobile */}
      <div className="hidden md:flex items-center">
        <a
          href="#"
          className="font-inter text-sm lg:text-xl font-normal text-black hover:text-gray-600 transition-colors"
        >
          Get Started
        </a>
      </div>

      {/* Mobile Menu Button */}
      <button className="lg:hidden flex flex-col space-y-1">
        <span className="w-6 h-0.5 bg-black"></span>
        <span className="w-6 h-0.5 bg-black"></span>
        <span className="w-6 h-0.5 bg-black"></span>
      </button>
    </header>
  );
}
