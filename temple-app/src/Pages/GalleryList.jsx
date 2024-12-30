import React, { useState } from 'react';
import Navbar from '../Components/Navbar';

const GalleryList = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const images = [
    "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvC96H0QN-oiLcJ9lIVLz4HnI_Ti0wtELWQryimIsMPbfql1eleWyyulmOvqGXTI3ilNA&usqp=CAU",
    "https://flowbite.s3.amazonaws.com/docs/gallery/square/image.jpg",
    "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg",
    "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-2.jpg",
    "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-3.jpg",
    "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-4.jpg",
    "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-5.jpg",
    "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-6.jpg",
    "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-7.jpg",
    "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-8.jpg",
    "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-9.jpg",
    "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-10.jpg",
    "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-11.jpg",
  ];

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <>
      <Navbar />

      {/* Heading and Description */}
      <div className="text-center mt-24">
        <h1 className="text-4xl font-bold mb-4">Gallery</h1>
        <p className="text-lg text-gray-600">Explore our collection of beautiful images</p>
      </div>

      {/* Image Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-10 px-4">
        {images.map((image, index) => (
          <div key={index}>
            <img
              className="h-auto max-w-full rounded-lg cursor-pointer"
              src={image}
              alt={`Gallery ${index + 1}`}
              onClick={() => handleImageClick(image)}
            />
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
          <div className="relative">
            <button
              className="absolute top-4 right-4 text-white text-3xl font-bold cursor-pointer"
              onClick={closeModal}
            >
              &times;
            </button>
            <img
              className="max-w-full max-h-screen rounded-lg"
              src={selectedImage}
              alt="Selected"
            />
            <div className="flex justify-between mt-4 items-center absolute inset-y-1/2 w-full px-4">
              <button
                className="text-white bg-gray-700 px-4 py-2 rounded-md hover:bg-gray-600"
                onClick={() => {
                  const currentIndex = images.indexOf(selectedImage);
                  const prevIndex = (currentIndex - 1 + images.length) % images.length;
                  setSelectedImage(images[prevIndex]);
                }}
              >
                &larr;
              </button>
              <button
                className="text-white bg-gray-700 px-4 py-2 rounded-md hover:bg-gray-600"
                onClick={() => {
                  const currentIndex = images.indexOf(selectedImage);
                  const nextIndex = (currentIndex + 1) % images.length;
                  setSelectedImage(images[nextIndex]);
                }}
              >
                &rarr;
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default GalleryList;
