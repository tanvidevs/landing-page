import React from 'react'

const Footer = () => {
  return (
    <div>
       <footer class="text-gray-600 body-font">
        <div class="bg-gray-100">
          <div class="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
            <p class="text-gray-500 text-sm text-center sm:text-left">© 2023 fukat —
              <a href="https://www.iconicpages.com/" class="text-gray-600 ml-1" target="_blank" rel="noopener noreferrer">@Iconicpages</a>
            </p>
            <span class="sm:ml-auto sm:mt-0 mt-2 sm:w-auto w-full sm:text-left text-center text-gray-500 text-sm">All rights are reserved by Iconicpages</span>
          </div>
        </div>
      </footer>    
    </div>
  )
}

export default Footer
