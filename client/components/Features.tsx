export default function Features() {
  return (
    <section className="w-full bg-neutral-100 px-4 sm:px-8 py-12 sm:py-16">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-start">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            <h2 className="font-times text-4xl sm:text-5xl lg:text-6xl font-bold italic text-black mb-4 sm:mb-6">
              Features
            </h2>
            <p className="font-roboto text-base sm:text-lg font-light text-black leading-relaxed max-w-lg mx-auto lg:mx-0">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>

          {/* Right Feature Cards */}
          <div className="flex flex-col sm:flex-row lg:flex-row gap-4 sm:gap-6">
            {/* Feature Card 1 */}
            <div className="relative flex-1">
              {/* Large Background Number */}
              <div className="absolute top-0 left-0 font-times text-6xl font-bold italic text-neutral-100 z-0">
                1
              </div>
              <div className="absolute top-0 left-8 font-times text-6xl font-bold italic text-neutral-100 z-0">
                Feature
              </div>
              
              {/* Card Content */}
              <div className="relative z-10 bg-white rounded-2xl p-6 mt-16">
                <div className="w-32 h-28 bg-neutral-100 rounded-full mx-auto mb-6"></div>
                <h3 className="font-outfit text-xl font-bold text-black mb-3">First Feature</h3>
                <p className="font-roboto text-xs font-light text-black leading-relaxed">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
              </div>
            </div>

            {/* Feature Card 2 */}
            <div className="relative flex-1">
              {/* Large Background Number */}
              <div className="absolute top-0 left-0 font-times text-6xl font-bold italic text-neutral-100 z-0">
                2
              </div>
              <div className="absolute top-0 left-8 font-times text-6xl font-bold italic text-neutral-100 z-0">
                Feature
              </div>
              
              {/* Card Content */}
              <div className="relative z-10 bg-white rounded-2xl p-6 mt-16">
                <div className="w-32 h-28 bg-neutral-100 rounded-full mx-auto mb-6"></div>
                <h3 className="font-outfit text-xl font-bold text-black mb-3">Second Feature</h3>
                <p className="font-roboto text-xs font-light text-black leading-relaxed">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
              </div>

              {/* Arrow Icon */}
              <div className="absolute top-6 right-6 w-12 h-12 bg-neutral-100 flex items-center justify-center">
                <svg width="43" height="37" viewBox="0 0 43 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M26.8417 7.97809L36.9239 16.5211C37.4246 16.9458 37.7058 17.5215 37.7058 18.1218C37.7058 18.7221 37.4246 19.2979 36.9239 19.7226L26.8435 28.2671C26.342 28.692 25.6617 28.9308 24.9525 28.9308C24.2432 28.9308 23.563 28.692 23.0615 28.2671C22.56 27.8421 22.2782 27.2658 22.2782 26.6648C22.2782 26.0638 22.56 25.4875 23.0615 25.0625L28.5794 20.3871H8.02104C7.31202 20.3871 6.63203 20.1484 6.13067 19.7236C5.62932 19.2988 5.34766 18.7226 5.34766 18.1218C5.34766 17.5211 5.62932 16.9449 6.13067 16.5201C6.63203 16.0952 7.31202 15.8566 8.02104 15.8566H28.5794L23.0633 11.1811C22.562 10.7562 22.2805 10.1799 22.2807 9.57908C22.2808 8.97825 22.5627 8.40208 23.0642 7.97733C23.5657 7.55258 24.2458 7.31404 24.9549 7.31418C25.664 7.31432 26.344 7.55313 26.8453 7.97809H26.8417Z" fill="#9747FF"/>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
