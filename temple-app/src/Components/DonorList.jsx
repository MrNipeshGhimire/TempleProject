import React from 'react'

const DonorList = () => {
  return (
    <>
     <section id="our-team" className="bg-gray-100 py-10">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8 text-primary">Donor List</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* <!-- Team Member 1 --> */}
            <div className="bg-white rounded-lg shadow-md p-6 my-6 text-center">
              <img
                src="https://plus.unsplash.com/premium_photo-1664474619075-644dd191935f?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW1hZ2V8ZW58MHx8MHx8fDA%3D"
                alt="Team Member 1"
                className="w-full rounded-sm mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">Ram Prasad Poudel</h3>
              <p className="text-gray-700">Role: Software Engineer</p>
            </div>

            {/* Repeat for other team members */}
            <div className="bg-white rounded-lg shadow-md p-6 my-6 text-center">
              <img
                src="https://plus.unsplash.com/premium_photo-1664474619075-644dd191935f?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW1hZ2V8ZW58MHx8MHx8fDA%3D"
                alt="Team Member 1"
                className="w-full rounded-sm mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">Ram Prasad Poudel</h3>
              <p className="text-gray-700">Role: Software Engineer</p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 my-6 text-center">
              <img
                src="https://plus.unsplash.com/premium_photo-1664474619075-644dd191935f?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW1hZ2V8ZW58MHx8MHx8fDA%3D"
                alt="Team Member 1"
                className="w-full rounded-sm mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">Ram Prasad Poudel</h3>
              <p className="text-gray-700">Role: Software Engineer</p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 my-6 text-center">
              <img
                src="https://plus.unsplash.com/premium_photo-1664474619075-644dd191935f?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW1hZ2V8ZW58MHx8MHx8fDA%3D"
                alt="Team Member 1"
                className="w-full rounded-sm mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">Ram Prasad Poudel</h3>
              <p className="text-gray-700">Role: Software Engineer</p>
            </div>
          </div>

          {/* See More Button */}
          <div className="flex justify-center md:justify-end mt-8">
            <button className="bg-blue-500 text-white py-2 px-6 rounded-lg hover:bg-blue-600 transition-all duration-300 md:py-3 md:px-8 text-sm md:text-base">
              See More
            </button>
          </div>
        </div>
      </section>
    </>
  )
}

export default DonorList