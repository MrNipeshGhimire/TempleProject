import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <>
      <section className="bg-gray-100">
        <div className="container mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
            {/* Image Section */}
            <div className="order-2 md:order-1">
              <img
                src="https://t3.ftcdn.net/jpg/06/18/51/68/360_F_618516899_5MTPaCA96bARDcFysmB2XZYfzuOiJrtx.jpg"
                alt="A welcoming office space"
                className="object-cover rounded-lg shadow-md w-full h-auto"
              />
            </div>

            {/* Text Section */}
            <div className="order-1 md:order-2 max-w-lg mx-auto md:mx-0 text-center md:text-left">
              <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                About Us
              </h2>
              <p className="mt-4 text-gray-600 text-lg leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                quis eros at lacus feugiat hendrerit sed ut tortor. Suspendisse
                et magna quis elit efficitur consequat. Mauris eleifend velit a
                pretium iaculis. Donec sagittis velit et magna euismod, vel
                aliquet nulla malesuada. Nunc pharetra massa lectus, a
                fermentum arcu volutpat vel.
              </p>
              <div className="mt-8">
                <Link
                  to="/about"
                  className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg shadow-md transition-all transform hover:scale-105"
                >
                  Learn more about us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
