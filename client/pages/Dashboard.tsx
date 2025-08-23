import { useUser, useClerk } from "@clerk/clerk-react";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const { user } = useUser();
  const { signOut } = useClerk();
  const navigate = useNavigate();

  const handleSignOut = async () => {
    await signOut();
    navigate("/");
  };
  return (
    <div className="min-h-screen bg-[#F79533] rounded-[60px] overflow-hidden relative">
      {/* Main Container */}
      <div className="h-screen">
        {/* Left Sidebar - Exact Figma Match */}
        <div className="absolute left-6 top-6 flex flex-col">
          {/* Logo Section */}
          <div className="flex flex-col items-center mb-16">
            <div className="w-[85px] h-[85px] bg-neutral-100 rounded-full flex items-center justify-center mb-3">
              <span className="font-outfit text-xs font-bold text-black">Logo</span>
            </div>
            <span className="font-outfit text-xs font-bold text-black">BabyCollab</span>
          </div>

          {/* Main Navigation Section with all icons */}
          <div className="w-[85px] h-[293px] bg-neutral-100 rounded-[60px] flex flex-col items-center justify-center py-4 mb-6">
            <div className="flex flex-col items-center space-y-8">
              {/* Home Icon */}
              <svg className="w-[54px] h-[46px]" viewBox="0 0 55 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6.5 43.0101V17.0216C6.5 16.2562 6.672 15.5317 7.016 14.848C7.36 14.1643 7.834 13.6012 8.438 13.1587L24.593 0.965747C25.439 0.321917 26.405 0 27.491 0C28.577 0 29.549 0.321917 30.407 0.965747L46.562 13.1557C47.168 13.5982 47.642 14.1623 47.984 14.848C48.328 15.5317 48.5 16.2562 48.5 17.0216V43.0101C48.5 43.8114 48.201 44.51 47.603 45.106C47.005 45.702 46.304 46 45.5 46H35.348C34.66 46 34.084 45.7688 33.62 45.3063C33.156 44.8419 32.924 44.2678 32.924 43.5841V29.3252C32.924 28.6415 32.692 28.0684 32.228 27.606C31.762 27.1415 31.186 26.9093 30.5 26.9093H24.5C23.814 26.9093 23.239 27.1415 22.775 27.606C22.309 28.0684 22.076 28.6415 22.076 29.3252V43.5871C22.076 44.2708 21.844 44.8439 21.38 45.3063C20.916 45.7688 20.341 46 19.655 46H9.5C8.696 46 7.995 45.702 7.397 45.106C6.799 44.51 6.5 43.8114 6.5 43.0101Z" fill="#9747FF"/>
              </svg>

              {/* People Icon */}
              <div className="flex flex-col items-center space-y-4">
                <svg className="w-[16.7px] h-[19px]" viewBox="0 0 33 39" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="16.7" cy="9.5" r="9.5" fill="#9747FF"/>
                  <path d="M23.18 25.214H22.4797C20.7247 26.062 18.7756 26.571 16.7 26.571C14.6244 26.571 12.6838 26.062 10.9203 25.214H10.22C4.85375 25.214 0.5 29.591 0.5 34.986V37.429C0.5 39.676 2.31406 41.5 4.55 41.5H28.85C31.0859 41.5 32.9 39.676 32.9 37.429V34.986C32.9 29.591 28.5462 25.214 23.18 25.214Z" fill="#9747FF"/>
                  <circle cx="41" cy="22.5" r="8.1" fill="#9747FF"/>
                  <path d="M45.05 25.214H44.7294C43.5566 25.621 42.3162 25.893 41 25.893C39.6838 25.893 38.4434 25.621 37.2706 25.214H36.95C35.2288 25.214 33.6425 25.715 32.2503 26.521C34.3091 28.751 35.6 31.712 35.6 34.986V38.243C35.6 38.429 35.5578 38.608 35.5494 38.786H50.45C52.6859 38.786 54.5 36.962 54.5 34.714C54.5 29.464 50.2728 25.214 45.05 25.214Z" fill="#9747FF"/>
                </svg>
              </div>

              {/* Calendar Icon */}
              <svg className="w-[42px] h-[42px]" viewBox="0 0 55 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6.5 38.7C6.5 42.27 9.23 45 12.8 45H42.2C45.77 45 48.5 42.27 48.5 38.7V21.9H6.5V38.7ZM42.2 7.2H38V5.1C38 3.84 37.16 3 35.9 3C34.64 3 33.8 3.84 33.8 5.1V7.2H21.2V5.1C21.2 3.84 20.36 3 19.1 3C17.84 3 17 3.84 17 5.1V7.2H12.8C9.23 7.2 6.5 9.93 6.5 13.5V17.7H48.5V13.5C48.5 9.93 45.77 7.2 42.2 7.2Z" fill="#9747FF"/>
              </svg>
            </div>
          </div>

          {/* Notification Icon Section */}
          <div className="w-[85px] h-[133px] bg-neutral-100 rounded-[60px] flex items-center justify-center mb-6">
            <svg className="w-[28px] h-[34px]" viewBox="0 0 28 34" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" clipRule="evenodd" d="M14 2.74826e-08C13.5541 -5.90475e-05 13.1133 0.0951206 12.7077 0.279089C12.302 0.463057 11.9409 0.731514 11.6488 1.06627C11.3567 1.40102 11.1405 1.79424 11.0147 2.21929C10.889 2.64434 10.8567 3.09128 10.92 3.52982C8.66503 4.19049 6.68584 5.5585 5.2783 7.42934C3.87077 9.30019 3.11048 11.5734 3.11111 13.9091V26.2727H1.55556C1.143 26.2727 0.747335 26.4355 0.455612 26.7254C0.163888 27.0152 0 27.4083 0 27.8182C0 28.2281 0.163888 28.6212 0.455612 28.911C0.747335 29.2008 1.143 29.3636 1.55556 29.3636H26.4444C26.857 29.3636 27.2527 29.2008 27.5444 28.911C27.8361 28.6212 28 28.2281 28 27.8182C28 27.4083 27.8361 27.0152 27.5444 26.7254C27.2527 26.4355 26.857 26.2727 26.4444 26.2727H24.8889V13.9091C24.8895 11.5734 24.1292 9.30019 22.7217 7.42934C21.3142 5.5585 19.335 4.19049 17.08 3.52982C17.1007 3.38558 17.1111 3.23927 17.1111 3.09091C17.1111 2.27115 16.7833 1.48496 16.1999 0.905306C15.6164 0.325648 14.8251 2.74826e-08 14 2.74826e-08ZM17.1111 32.4545C17.1111 32.8644 16.9472 33.2575 16.6555 33.5473C16.3638 33.8372 15.9681 34 15.5556 34H12.4444C12.0319 34 11.6362 33.8372 11.3445 33.5473C11.0528 33.2575 10.8889 32.8644 10.8889 32.4545C10.8889 32.0447 11.0528 31.6516 11.3445 31.3617C11.6362 31.0719 12.0319 30.9091 12.4444 30.9091H15.5556C15.9681 30.9091 16.3638 31.0719 16.6555 31.3617C16.9472 31.6516 17.1111 32.0447 17.1111 32.4545Z" fill="#9747FF"/>
            </svg>
          </div>

          {/* Hexagon Icon Section */}
          <div className="w-[85px] h-[159px] bg-neutral-100 rounded-[60px] flex items-center justify-center mb-6">
            <svg className="w-[33px] h-[38px]" viewBox="0 0 33 38" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M16.5 0L33 9.5V28.5L16.5 38L0 28.5V9.5L16.5 0ZM16.5 24.1818C17.8819 24.1818 19.2072 23.6359 20.1844 22.6641C21.1616 21.6923 21.7105 20.3743 21.7105 19C21.7105 17.6257 21.1616 16.3077 20.1844 15.3359C19.2072 14.3641 17.8819 13.8182 16.5 13.8182C15.1181 13.8182 13.7928 14.3641 12.8156 15.3359C11.8384 16.3077 11.2895 17.6257 11.2895 19C11.2895 20.3743 11.8384 21.6923 12.8156 22.6641C13.7928 23.6359 15.1181 24.1818 16.5 24.1818Z" fill="#9747FF"/>
            </svg>
          </div>

          {/* User Profile Section */}
          <div className="w-[71px] h-[71px] bg-[#FAD12A] rounded-full flex items-center justify-center mb-6 ml-2">
            <svg className="w-[39px] h-[39px]" viewBox="0 0 39 39" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M19.5 16.25C23.0899 16.25 26 13.3399 26 9.75C26 6.16015 23.0899 3.25 19.5 3.25C15.9101 3.25 13 6.16015 13 9.75C13 13.3399 15.9101 16.25 19.5 16.25Z" fill="#9747FF"/>
              <path d="M32.5 28.4375C32.5 32.4756 32.5 35.75 19.5 35.75C6.5 35.75 6.5 32.4756 6.5 28.4375C6.5 24.3994 12.3207 21.125 19.5 21.125C26.6793 21.125 32.5 24.3994 32.5 28.4375Z" fill="#9747FF"/>
            </svg>
          </div>

          {/* Settings Icon Section */}
          <div className="w-[85px] h-[159px] bg-neutral-100 rounded-[60px] flex items-center justify-center">
            <svg className="w-[34px] h-[35px]" viewBox="0 0 34 35" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M3.86364 35C2.80114 35 1.89189 34.6195 1.13591 33.8586C0.379924 33.0977 0.00128788 32.1818 0 31.1111L0 3.88889C0 2.81944 0.378636 1.90426 1.13591 1.14333C1.89318 0.382407 2.80242 0.0012963 3.86364 0L15.4545 0C16.0019 0 16.461 0.186667 16.8319 0.56C17.2028 0.933333 17.3877 1.39481 17.3864 1.94444C17.3851 2.49407 17.1996 2.9562 16.83 3.33083C16.4604 3.70546 16.0019 3.89148 15.4545 3.88889H3.86364V31.1111H15.4545C16.0019 31.1111 16.461 31.2978 16.8319 31.6711C17.2028 32.0444 17.3877 32.5059 17.3864 33.0555C17.3851 33.6052 17.1996 34.0673 16.83 34.4419C16.4604 34.8165 16.0019 35.0026 15.4545 35H3.86364ZM27.3835 19.4444H13.5227C12.9754 19.4444 12.5169 19.2578 12.1473 18.8844C11.7777 18.5111 11.5922 18.0496 11.5909 17.5C11.5896 16.9504 11.7751 16.4889 12.1473 16.1155C12.5195 15.7422 12.978 15.5555 13.5227 15.5555H27.3835L23.7614 11.9097C23.4072 11.5532 23.2301 11.1157 23.2301 10.5972C23.2301 10.0787 23.4072 9.62499 23.7614 9.2361C24.1155 8.84722 24.5663 8.64435 25.1136 8.62749C25.661 8.61064 26.1278 8.79731 26.5142 9.18749L33.4205 16.1389C33.8068 16.5278 34 16.9815 34 17.5C34 18.0185 33.8068 18.4722 33.4205 18.8611L26.5142 25.8125C26.1278 26.2014 25.6694 26.388 25.1388 26.3725C24.6081 26.3569 24.149 26.1541 23.7614 25.7639C23.4072 25.375 23.2385 24.9135 23.2552 24.3794C23.272 23.8454 23.4568 23.3994 23.8097 23.0417L27.3835 19.4444Z" fill="#9747FF"/>
            </svg>
          </div>
        </div>

        {/* Main Content Area */}
        <div className="absolute left-[140px] right-6 top-6 bottom-6 flex flex-col overflow-hidden">
          {/* Header */}
          <div className="flex items-center justify-between p-6 pb-4">
            {/* Welcome Text */}
            <div>
              <h1 className="font-outfit text-3xl lg:text-5xl font-bold text-black mb-2 drop-shadow-sm">
                Hi, {user?.firstName || user?.fullName || 'User'}!
              </h1>
              <p className="font-inter text-lg lg:text-xl font-normal text-black/80">
                Let's take a look at what you have been up to
              </p>
            </div>

            {/* Search Bar and Logout */}
            <div className="flex items-center space-x-4">
              {/* Search Bar */}
              <div className="w-80 lg:w-96 h-16 lg:h-20 bg-white rounded-[60px] flex items-center px-6 shadow-lg">
                <svg className="w-8 h-6 lg:w-10 lg:h-7 mr-4 flex-shrink-0" viewBox="0 0 41 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M29.3025 17.6101H27.4505L26.7942 17.1778C29.1711 15.2952 30.4774 12.8917 30.4746 10.4059C30.4746 8.34785 29.5809 6.33597 27.9066 4.62472C26.2323 2.91347 23.8526 1.57971 21.0683 0.79211C18.2841 0.00450873 15.2204 -0.201564 12.2646 0.199952C9.3089 0.601468 6.59387 1.59254 4.4629 3.04783C2.33193 4.50313 0.880721 6.35729 0.292787 8.37585C-0.295147 10.3944 0.00660208 12.4867 1.15988 14.3881C2.31315 16.2896 4.26615 17.9148 6.77191 19.0582C9.27766 20.2016 12.2236 20.8119 15.2373 20.8119C19.0114 20.8119 22.4808 19.8674 25.1532 18.2985L25.7862 18.7467V20.0114L37.5071 28L41 25.6146L29.3025 17.6101ZM15.2373 17.6101C9.40023 17.6101 4.6884 14.3922 4.6884 10.4059C4.6884 6.41967 9.40023 3.20183 15.2373 3.20183C21.0743 3.20183 25.7862 6.41967 25.7862 10.4059C25.7862 14.3922 21.0743 17.6101 15.2373 17.6101Z" fill="#9747FF"/>
                </svg>
                <input 
                  type="text" 
                  placeholder="What are you looking for?"
                  className="flex-1 font-outfit text-lg font-normal text-black placeholder-gray-500 bg-transparent border-none outline-none"
                />
              </div>
              
              {/* Logout Button */}
              <button
                onClick={handleSignOut}
                className="bg-red-500 hover:bg-red-600 transition-all duration-300 px-6 py-3 rounded-full font-inter text-lg font-semibold text-white shadow-lg hover:shadow-xl transform hover:scale-105 flex items-center space-x-2"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                </svg>
                <span>Logout</span>
              </button>
            </div>
          </div>

          {/* Content Grid */}
          <div className="flex-1 p-6 pt-2">
            <div className="grid grid-cols-12 gap-6 h-full max-h-[calc(100vh-200px)]">
              {/* Large Widget 1 */}
              <div className="col-span-12 md:col-span-5 row-span-2 bg-white rounded-[40px] lg:rounded-[60px] relative overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 group">
                <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-gray-100"></div>
                <svg 
                  className="absolute inset-0 w-full h-full opacity-20 group-hover:opacity-30 transition-opacity duration-300" 
                  viewBox="0 0 721 458" 
                  fill="none" 
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M2 2.5L697 414M2 414L685 2.5" stroke="black" strokeWidth="3"/>
                </svg>
                <div className="relative z-10 p-6 h-full flex items-center justify-center">
                  <div className="text-center">
                    <h3 className="font-outfit text-xl lg:text-2xl font-bold text-gray-800 mb-2">Project Overview</h3>
                    <p className="font-inter text-sm lg:text-base text-gray-600">Track your project progress</p>
                  </div>
                </div>
              </div>

              {/* Large Widget 2 */}
              <div className="col-span-12 md:col-span-7 row-span-2 bg-white rounded-[40px] lg:rounded-[60px] relative overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 group">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-100"></div>
                <svg 
                  className="absolute inset-0 w-full h-full opacity-20 group-hover:opacity-30 transition-opacity duration-300" 
                  viewBox="0 0 455 458" 
                  fill="none" 
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M763 2.5L1180 425.5M1180 2.5L763 414" stroke="black" strokeWidth="3"/>
                </svg>
                <div className="relative z-10 p-6 h-full flex items-center justify-center">
                  <div className="text-center">
                    <h3 className="font-outfit text-xl lg:text-2xl font-bold text-gray-800 mb-2">Analytics Dashboard</h3>
                    <p className="font-inter text-sm lg:text-base text-gray-600">View your performance metrics</p>
                  </div>
                </div>
              </div>

              {/* Small Widget 1 */}
              <div className="col-span-6 md:col-span-5 row-span-1 bg-white rounded-[40px] lg:rounded-[60px] relative overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 group">
                <div className="absolute inset-0 bg-gradient-to-br from-green-50 to-emerald-100"></div>
                <svg 
                  className="absolute inset-0 w-full h-full opacity-20 group-hover:opacity-30 transition-opacity duration-300" 
                  viewBox="0 0 409 151" 
                  fill="none" 
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M2 478L374.5 596.5M374.5 478L2 596.5" stroke="black" strokeWidth="3"/>
                </svg>
                <div className="relative z-10 p-4 h-full flex items-center justify-center">
                  <div className="text-center">
                    <h3 className="font-outfit text-lg font-bold text-gray-800 mb-1">Quick Tasks</h3>
                    <p className="font-inter text-xs text-gray-600">Manage daily activities</p>
                  </div>
                </div>
              </div>

              {/* Large Widget 3 */}
              <div className="col-span-6 md:col-span-7 row-span-1 bg-white rounded-[40px] lg:rounded-[60px] relative overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 group">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-50 to-violet-100"></div>
                <svg 
                  className="absolute inset-0 w-full h-full opacity-20 group-hover:opacity-30 transition-opacity duration-300" 
                  viewBox="0 0 769 337" 
                  fill="none" 
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M444.5 478L1180 784.5M1180 478L444.5 784.5" stroke="black" strokeWidth="3"/>
                </svg>
                <div className="relative z-10 p-4 h-full flex items-center justify-center">
                  <div className="text-center">
                    <h3 className="font-outfit text-lg font-bold text-gray-800 mb-1">Team Collaboration</h3>
                    <p className="font-inter text-xs text-gray-600">Connect with your team</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
