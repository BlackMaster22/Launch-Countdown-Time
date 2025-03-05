import React from 'react'

export const SocialLinks = () => {
  return (
    <div className="h-full w-full flex space-x-6  text-[#5f5c78] justify-center items-center">
      <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" className="hover:text-[#fa5d83]"><i className="fab fa-facebook-square fa-2x"></i></a>
      <a href="https://es.pinterest.com/" target="_blank" rel="noopener noreferrer" className="hover:text-[#fa5d83]"><i className="fab fa-pinterest fa-2x"></i></a>
      <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" className="hover:text-[#fa5d83]"><i className="fab fa-instagram fa-2x"></i></a>
    </div>
  )
}
