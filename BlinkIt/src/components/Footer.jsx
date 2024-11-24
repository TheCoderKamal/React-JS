// eslint-disable-next-line no-unused-vars
import React from 'react';

const Footer = () => {
  const useLinks = [
    "About",
    "Careers",
    "Blog",
    "Press",
    "Lead",
    "Value",
    "Privacy",
    "Terms",
    "FAQs",
    "Security",
    "Mobile",
    "Contact",
    "Partner",
    "Franchise",
    "Seller",
    "Warehouse",
    "Deliver",
    "Resources",
  ];
  const column1Links = useLinks.slice(0, 6);
  const column2Links = useLinks.slice(6, 12);
  const column3Links = useLinks.slice(12);



  const categories = [
    "Vegetables & Fruits",
    "Cold Drinks & Juices",
    "Bakery & Biscuits",
    "Dry Fruits, Masala & Oil",
    "Paan Corner",
    "Cleaning Essentials",
    "Personal Care",
    "Electronics & Electricals",
    "Navratri Specials",
    "Dairy & Breakfast",
    "Instant & Frozen Food",
    "Sweet Tooth",
    "Sauces & Spreads",
    "Baby Care",
    "Home & Office",
    "Pet Care",
    "Toys & Games",
    "Munchies",
    "Tea, Coffee & Health Drinks",
    "Atta, Rice & Dal",
    "Organic & Premium",
    "Pharma & Wellness",
    "Ice Creams & Frozen Desserts",
    "Beauty & Cosmetics",
    "Print Store",
  ];
  const column1categories = categories.slice(0, 8);
  const column2categories = categories.slice(8, 16);
  const column3categories = categories.slice(16, 24);

  return (
    <footer className="w-full text-gray-600">
      <div className=" mt-[100px]">
        <div className="flex leading-[30px] gap-[40px] ">
          {/* Useful Links Section */}
          <div className=' w-[30%] '>
            <h5 className="font-bold text-lg mb-4">Useful Links</h5>
            <div className="grid grid-cols-3 gap-8 text-[#6D6D6D]">
              {/* Column 1 */}
              <ul>
                {column1Links.map((link) => (
                  <li key={link}>
                    <a href="#" className="hover:underline">{link}</a>
                  </li>
                ))}
              </ul>
              {/* Column 2 */}
              <ul>
                {column2Links.map((link) => (
                  <li key={link}>
                    <a href="#" className="hover:underline">{link}</a>
                  </li>
                ))}
              </ul>
              {/* Column 3 */}
              <ul>
                {column3Links.map((link) => (
                  <li key={link}>
                    <a href="#" className="hover:underline">{link}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Categories Section */}
          <div className=' w-[70%] '>
            <h5 className="font-bold text-lg mb-4 ">Categories <span className='ms-4 text-[#359845] font-normal '>see all</span></h5>
            <div className="grid grid-cols-3 gap-8 text-[#6D6D6D] ">
              {/* Column 1 */}
              <ul>
                {column1categories.map((link) => (
                  <li key={link}>
                    <a href="#" className="hover:underline">{link}</a>
                  </li>
                ))}
              </ul>
              {/* Column 2 */}
              <ul>
                {column2categories.map((link) => (
                  <li key={link}>
                    <a href="#" className="hover:underline">{link}</a>
                  </li>
                ))}
              </ul>
              {/* Column 3 */}
              <ul>
                {column3categories.map((link) => (
                  <li key={link}>
                    <a href="#" className="hover:underline">{link}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>


        </div>

        {/* Download App and Social Media */}
        <div className='h-[50px] mt-[50px] px-[100px] flex justify-between items-center' >
          <div className="flex">
            <p className='text-[12px] '>
              &copy; Blink Commerce Private Limited, 2016-2024
            </p>
          </div>
          <div className="flex justify-center items-center gap-5">
            <h5 className="font-bold text-sm text-[#7A7A7A] ">Download App</h5>
            <a href="#" className="block">
              <img
                src="https://blinkit.com/8ed033800ea38f24c4f0.png"
                alt="Google Play"
                className="h-8"
              />
            </a>
            <a href="#" className="block">
              <img
                src="https://blinkit.com/d61019073b700ca49d22.png"
                alt="App Store"
                className="h-8"
              />
            </a>
          </div>
          <div className="flex space-x-4">
            <a href="#" className="text-white bg-gray-800 h-10 w-10 border flex justify-center items-center text-xl rounded-full" >
              <i className="ri-facebook-fill"></i>
            </a>
            <a href="#" className="text-white bg-gray-800 h-10 w-10 border flex justify-center items-center text-xl rounded-full" >
              <i className="ri-twitter-fill"></i>
            </a>
            <a href="#" className="text-white bg-gray-800 h-10 w-10 border flex justify-center items-center text-xl rounded-full" >
              <i className="ri-instagram-line"></i>
            </a>
            <a href="#" className="text-white bg-gray-800 h-10 w-10 border flex justify-center items-center text-xl rounded-full" >
              <i className="ri-linkedin-fill"></i>
            </a>
            <a href="#" className="text-white bg-gray-800 h-10 w-10 border flex justify-center items-center text-xl rounded-full" >
              <i className="ri-threads-fill"></i>
            </a>
          </div>
        </div>

        {/* Footer Disclaimer */}
        <div className="mt-8 text-left text-4 font-sans text-gray-500 mb-5">
          <p>
          “Blinkit” is owned & managed by `Blink Commerce Private Limited` and is not related, linked or interconnected in whatsoever manner or nature, to “GROFFR.COM” which is a real estate services business operated by “Redstone Consultancy Services Private Limited”.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;