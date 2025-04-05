import React from "react";
import Navbar from "./Navbar";

function Landing() {
  return (
    <>
    <Navbar/>
    <div className="relative overflow-hidden py-12 sm:py-16 lg:py-20 bg-gradient-to-r from-blue-100/75 to-blue-100/50">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-y-0 right-0 w-full xl:w-1/2 opacity-20">
          <svg 
            className="absolute right-0 h-full w-full" 
            width="100%" 
            height="100%" 
            viewBox="0 0 800 800" 
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="400" cy="400" r="200" fill="url(#paint0_radial)" />
            <path d="M500 150C500 232.843 432.843 300 350 300C267.157 300 200 232.843 200 150C200 67.1573 267.157 0 350 0C432.843 0 500 67.1573 500 150Z" 
                  fill="url(#paint1_linear)" />
            <circle cx="650" cy="600" r="150" fill="url(#paint2_linear)" />
            <defs>
              <radialGradient id="paint0_radial" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" 
                              gradientTransform="translate(400 400) rotate(90) scale(200)">
                <stop stopColor="#2563EB" stopOpacity="0.2" />
                <stop offset="1" stopColor="#2563EB" stopOpacity="0" />
              </radialGradient>
              <linearGradient id="paint1_linear" x1="350" y1="0" x2="350" y2="300" gradientUnits="userSpaceOnUse">
                <stop stopColor="#0EA5E9" stopOpacity="0.2" />
                <stop offset="1" stopColor="#0EA5E9" stopOpacity="0" />
              </linearGradient>
              <linearGradient id="paint2_linear" x1="650" y1="450" x2="650" y2="750" gradientUnits="userSpaceOnUse">
                <stop stopColor="#10B981" stopOpacity="0.2" />
                <stop offset="1" stopColor="#10B981" stopOpacity="0" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-heading text-gray-900 leading-tight">
              See your financial future with 
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-blue"> crystal clarity</span>
            </h1>
            <p className="mt-6 text-xl text-gray-600 leading-relaxed">
              Our AI-powered predictive engine forecasts your cash flow, helps identify savings opportunities, and guides you to financial freedom.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <button className="bg-primary hover:bg-primary/90 text-white text-lg px-8 py-6">
                Start for free
              </button>
              <button className="text-lg px-8 py-6">
                See how it works
              </button>
            </div>
            
            <div className="mt-12 grid sm:grid-cols-3 gap-6">
              <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                <div className="flex items-center mb-2">
                  <span className="font-medium text-gray-500">Average savings</span>
                </div>
                <p className="text-2xl font-bold text-gray-900">$7,300<span className="text-sm font-normal text-gray-500">/year</span></p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                <div className="flex items-center mb-2">
                  <span className="font-medium text-gray-500">Users reached goal</span>
                </div>
                <p className="text-2xl font-bold text-gray-900">93<span className="text-sm font-normal text-gray-500">%</span></p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                <div className="flex items-center mb-2">
                  <span className="font-medium text-gray-500">Debt reduction</span>
                </div>
                <p className="text-2xl font-bold text-gray-900">42<span className="text-sm font-normal text-gray-500">%</span></p>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-6 animate-float">
              <h3 className="text-lg font-semibold mb-4">Your Cash Flow Forecast</h3>
              <div className="h-80">
              </div>
              <div className="mt-4 flex justify-between text-sm text-gray-500">
                <span>Today</span>
                <span>30 days</span>
                <span>60 days</span>
                <span>90 days</span>
              </div>
            </div>
 
            <div className="absolute -bottom-6 -left-12 bg-white rounded-lg shadow-lg p-3 animate-pulse-slow">
              <div className="flex items-center gap-2">
                <div className="h-8 w-8 rounded-full bg-green-100 flex items-center justify-center">
                </div>
                <div>
                  <p className="text-xs font-medium text-gray-500">Expected savings</p>
                  <p className="font-bold text-gray-900">+$1,240</p>
                </div>
              </div>
            </div>
            
            <div className="absolute -top-10 -right-8 bg-white rounded-lg shadow-lg p-3 animate-pulse-slow delay-300">
              <div className="flex items-center gap-2">
                <div className="h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center">
                </div>
                <div>
                  <p className="text-xs font-medium text-gray-500">Goal progress</p>
                  <p className="font-bold text-gray-900">68%</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

export default Landing;
