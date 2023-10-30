import React from 'react'

export const Footer = () => {
  return (
    <div className=" footer bg-dark text-light py-2" style={{ position: "absolute", bottom: "0", width: "100%", zIndex: "100" }}>
      <p className="text-center" style={{ fontSize: "1rem", margin: '0' }}>
        Copyright &copy; floodSafeGIS.com
      </p>

    </div>
  )
}
