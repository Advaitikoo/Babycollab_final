export default function CTAAndFooter() {
  return (
    <>
      {/* Final CTA Section */}
      <section className="w-full bg-neutral-100 px-4 sm:px-8 py-12 sm:py-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
            {/* Left Content */}
            <div className="text-center lg:text-left">
              <h2 className="font-outfit text-3xl sm:text-5xl lg:text-7xl font-bold text-black leading-tight mb-4 sm:mb-6 capitalize">
                Where Talent Meets Precision.
              </h2>
              <p className="font-roboto text-lg sm:text-xl font-light text-black leading-relaxed mb-6 sm:mb-8 max-w-2xl mx-auto lg:mx-0">
                Project collaboration reimagined for modern teams. Bring your people, processes, and progress together in one unified workspace where great ideas transform into exceptional results. From kickoff to completion, we make teamwork feel effortless.
              </p>

              {/* CTA Bar */}
              <div className="bg-white rounded-[20px] sm:rounded-[40px] px-4 sm:px-8 py-4 sm:py-6 flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-6 lg:gap-8">
                <h3 className="font-outfit text-xl sm:text-2xl lg:text-3xl font-semibold text-black tracking-wider">
                  Are you Ready?
                </h3>
                <button className="bg-neutral-100 hover:bg-gray-300 transition-colors px-6 sm:px-12 py-3 sm:py-4 rounded-full font-outfit text-xl sm:text-3xl lg:text-4xl font-semibold text-black tracking-wider">
                  Get started
                </button>
              </div>
            </div>

            {/* Right Features List */}
            <div className="flex justify-center lg:justify-end">
              <div className="text-center lg:text-right">
                <div className="font-outfit text-lg sm:text-xl font-normal text-black leading-tight space-y-1">
                  <div>Project Collaboration</div>
                  <div>Roadmap</div>
                  <div>Skill Sharing</div>
                  <div>ATS Scorer</div>
                  <div>Hackathon</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full bg-neutral-600 px-4 sm:px-8 py-8 sm:py-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-6 sm:mb-8">
            {/* About Section */}
            <div className="text-center sm:text-left">
              <h4 className="font-anonymous text-lg font-normal text-white mb-3 sm:mb-4">About</h4>
              <p className="font-roboto text-sm sm:text-lg font-light text-black leading-relaxed">
                At BabyCollab, we believe in turning project collaboration into a shared journey. Our platform connects collaborators to exchange ideas, support, and resources that make the construction of projects seamless, efficient and simple. With a touch of creativity and community spirit, BabyCollab is here to help you grow, learn, and celebrate every milestone—together.
              </p>
            </div>

            {/* Features Section */}
            <div className="text-center sm:text-left">
              <h4 className="font-anonymous text-lg font-normal text-white mb-3 sm:mb-4">Features</h4>
              <div className="font-roboto text-sm sm:text-lg font-light text-black leading-relaxed space-y-1">
                <div>Project Collaboration</div>
                <div>Project Workspaces</div>
                <div>Interactive Chatrooms</div>
                <div>Career Roadmaps</div>
                <div>Resume Optimization</div>
                <div>Resume ATS Scorer</div>
              </div>
            </div>

            {/* Address Section */}
            <div className="text-center sm:text-left">
              <h4 className="font-anonymous text-lg font-normal text-white mb-3 sm:mb-4">Address</h4>
              <div className="font-roboto text-sm sm:text-base font-light text-black leading-normal">
                <div>Ramaiah University</div>
                <div>Peenya, Bangalore</div>
                <div>560006</div>
              </div>
            </div>

            {/* Contact Section */}
            <div className="text-center sm:text-left">
              <h4 className="font-anonymous text-lg font-normal text-white mb-3 sm:mb-4">Contact</h4>
              <div className="font-roboto text-sm sm:text-base font-light text-black leading-normal">
                <div>+91 1234567890</div>
                <div>info@outlook.com</div>
              </div>
            </div>
          </div>

          {/* Separator Line */}
          <div className="w-full h-1 bg-black mb-6 sm:mb-8"></div>

          {/* Bottom Section with Logo */}
          <div className="flex flex-col lg:flex-row items-center justify-between">
            <div className="bg-neutral-100 w-full lg:w-80 h-20 sm:h-24 flex items-center justify-center">
              <span className="font-roboto text-base sm:text-lg font-light text-black">Logo placeholder</span>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
