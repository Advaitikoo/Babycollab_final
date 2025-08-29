export default function Team() {
  return (
    <section className="w-full bg-neutral-100 px-4 sm:px-8 py-12 sm:py-16">
      <div className="max-w-7xl mx-auto">
        <h2 className="font-times text-4xl sm:text-5xl lg:text-6xl font-bold italic text-black mb-8 sm:mb-12 text-center lg:text-left">
          Our Team
        </h2>
        <div className="flex flex-col lg:flex-row items-center justify-center gap-4 lg:gap-3 xl:gap-4">
          {/* Far Left Team Member */}
          <div className="flex flex-col items-center opacity-30">
            <div className="bg-neutral-400 rounded-[20px] sm:rounded-[40px] p-6 sm:p-8 flex flex-col items-center justify-center h-56 w-56 sm:h-72 sm:w-72">
              <div className="w-14 h-14 sm:w-20 sm:h-20 bg-neutral-100 rounded-full mb-3 sm:mb-4"></div>
              <h3 className="font-inter text-base sm:text-lg font-medium text-white mb-2">Giridhar Gera</h3>
              <div className="text-center">
                <p className="font-roboto text-xs sm:text-base font-light text-white">
                  Lorem ipsum dolor sit amet.
                </p>
              </div>
            </div>
          </div>
          
          {/* Left Team Member */}
          <div className="flex flex-col items-center opacity-45">
            <div className="bg-neutral-500 rounded-[20px] sm:rounded-[40px] p-6 sm:p-8 flex flex-col items-center justify-center h-64 w-64 sm:h-80 sm:w-80">
              <div className="w-16 h-16 sm:w-22 sm:h-22 bg-neutral-100 rounded-full mb-3 sm:mb-4"></div>
              <h3 className="font-inter text-lg sm:text-xl font-medium text-white mb-2">Soumya Jha</h3>
              <div className="text-center">
                <p className="font-roboto text-sm sm:text-lg font-light text-white">
                  Lorem ipsum dolor sit amet.
                </p>
              </div>
            </div>
          </div>
          
          {/* Center Team Member - Highlighted */}
          <div className="flex flex-col items-center z-10 transform lg:scale-110">
            <div className="bg-neutral-700 rounded-[20px] sm:rounded-[40px] p-6 sm:p-8 flex flex-col items-center justify-center h-80 w-64 sm:h-96 sm:w-80">
              <div className="w-24 h-24 sm:w-32 sm:h-32 bg-neutral-100 rounded-full mb-4 sm:mb-6"></div>
              <h3 className="font-inter text-lg sm:text-xl font-medium text-white mb-2">Pranav Vatsa</h3>
              <p className="font-roboto text-sm sm:text-lg font-light text-white text-center">
                Lorem ipsum dolor sit amet.
              </p>
            </div>
          </div>
          
          {/* Right Team Member */}
          <div className="flex flex-col items-center opacity-45">
            <div className="bg-neutral-500 rounded-[20px] sm:rounded-[40px] p-6 sm:p-8 flex flex-col items-center justify-center h-64 w-64 sm:h-80 sm:w-80">
              <div className="w-16 h-16 sm:w-22 sm:h-22 bg-neutral-100 rounded-full mb-3 sm:mb-4"></div>
              <h3 className="font-inter text-lg sm:text-xl font-medium text-white mb-2">Nirvan P</h3>
              <div className="text-center">
                <p className="font-roboto text-sm sm:text-lg font-light text-white">
                  Lorem ipsum dolor sit amet.
                </p>
              </div>
            </div>
          </div>
          
          {/* Far Right Team Member */}
          <div className="flex flex-col items-center opacity-30">
            <div className="bg-neutral-400 rounded-[20px] sm:rounded-[40px] p-6 sm:p-8 flex flex-col items-center justify-center h-56 w-56 sm:h-72 sm:w-72">
              <div className="w-14 h-14 sm:w-20 sm:h-20 bg-neutral-100 rounded-full mb-3 sm:mb-4"></div>
              <h3 className="font-inter text-base sm:text-lg font-medium text-white mb-2">Advait Tikoo</h3>
              <div className="text-center">
                <p className="font-roboto text-xs sm:text-base font-light text-white">
                  Lorem ipsum dolor sit amet.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
