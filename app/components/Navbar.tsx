import React from 'react'

function Navbar() {
  return (
    <nav className="flex justify-between p-6 border-b border-gray-200 items-center bg-gradient-to-r from-blue-100/75 to-blue-400/50">
      <div className="flex items-center text-2xl text-bold text-[iconBlue]">CashFlow</div>
      <div className="flex items-center gap-2">
        <div>Features</div>
        <div>How it works</div>
        <div>Testimonials</div>
        <div>Pricing</div>

        <button className="flex items-center border border-borderGrey px-2 py-1 rounded-md">Login</button>
      </div>


    </nav>
  )
}

export default Navbar