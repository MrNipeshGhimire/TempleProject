import React from 'react'

const NoticeSection = () => {
  return (
    <>
        <h2 className="text-4xl font-bold dark:text-gray-100 text-center mt-6">Notice</h2>
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-10 md:px-20">

    <div class="bg-white rounded-xl shadow-md overflow-hidden">
        <div class="relative">
            <img class="w-full h-48 object-cover" src="https://www.nefscun.org.np/wp-content/uploads/2024/12/notice-081.9.9_page-0001-1.jpg"/>
            <div class="absolute top-0 right-0 bg-indigo-500 text-white font-bold px-2 py-1 m-2 rounded-md">New
            </div>
            <div class="absolute bottom-0 right-0 bg-gray-800 text-white px-2 py-1 m-2 rounded-md text-xs">3 min read
            </div>
        </div>
        <div class="p-4">
            <div class="text-lg font-medium text-gray-800 mb-2">Title</div>
            <p class="text-gray-500 text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor, mi sed
                egestas tincidunt, libero dolor bibendum nisl, non aliquam quam massa id lacus.</p>
        </div>
    </div>


    <div class="bg-white rounded-xl shadow-md overflow-hidden">
        <div class="relative">
            <img class="w-full h-48 object-cover" src="https://via.placeholder.com/600x360"/>
            <div class="absolute bottom-0 right-0 bg-gray-800 text-white px-2 py-1 m-2 rounded-md text-xs">3 min read
            </div>
        </div>
        <div class="p-4">
            <div class="text-lg font-medium text-gray-800 mb-2">Title</div>
            <p class="text-gray-500 text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor, mi sed
                egestas tincidunt, libero dolor bibendum nisl, non aliquam quam massa id lacus.</p>
        </div>
    </div>


    <div class="bg-white rounded-xl shadow-md overflow-hidden">
        <div class="relative">
            <img class="w-full h-48 object-cover" src="https://via.placeholder.com/600x360"/>
            <div class="absolute top-0 right-0 bg-indigo-500 text-white font-bold px-2 py-1 m-2 rounded-md">New</div>
            <div class="absolute bottom-0 right-0 bg-gray-800 text-white px-2 py-1 m-2 rounded-md text-xs">3 min read
            </div>
        </div>
        <div class="p-4">
            <div class="text-lg font-medium text-gray-800 mb-2">Title</div>
            <p class="text-gray-500 text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor, mi sed
                egestas tincidunt, libero dolor bibendum nisl, non aliquam quam massa id lacus.</p>
        </div>
    </div>
    
</div>
<div className="flex justify-center items-center md:justify-center mb-4">
            <button className="bg-blue-500 text-white py-2 px-6 rounded-lg hover:bg-blue-600 transition-all duration-300 md:py-3 md:px-8 text-sm md:text-base">
              See More
            </button>
          </div>
    </>
  )
}

export default NoticeSection