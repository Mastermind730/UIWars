import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className="bg-[#121212] text-white py-10">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Section */}
          <div>
            <h2 className="text-2xl font-semibold mb-4">About Us</h2>
            <p className="text-gray-400">
              Your go-to platform for digital resources. We provide an extensive library of eBooks, articles, and research materials.
            </p>
            <Link href="/about" className="text-blue-400 hover:underline mt-4 inline-block">
              Learn More
            </Link>
          </div>

          {/* Quick Links Section */}
          <div>
            <h2 className="text-2xl font-semibold mb-4">Quick Links</h2>
            <ul className="space-y-2">
              <li>
                <Link href="#home" className="text-gray-400 hover:text-blue-400">
                  Home
                </Link>
              </li>
              <li>
                <Link href="#projects" className="text-gray-400 hover:text-blue-400">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="#contact" className="text-gray-400 hover:text-blue-400">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="#faq" className="text-gray-400 hover:text-blue-400">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Section */}
          <div>
            <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
            <p className="text-gray-400">Email: <span className="text-blue-400">info@yourlibrary.com</span></p>
            <p className="text-gray-400">Phone: <span className="text-blue-400">+123 456 7890</span></p>
            {/* <div className="flex space-x-4 mt-4">
              <Link href="https://twitter.com/yourlibrary" target="_blank">
                <Image src="/icons/twitter.svg" alt="Twitter" width={24} height={24} />
              </Link>
              <Link href="https://facebook.com/yourlibrary" target="_blank">
                <Image src="/icons/facebook.svg" alt="Facebook" width={24} height={24} />
              </Link>
              <Link href="https://instagram.com/yourlibrary" target="_blank">
                <Image src="/icons/instagram.svg" alt="Instagram" width={24} height={24} />
              </Link>
            </div> */}
          </div>
        </div>

        <div className="border-t border-gray-700 mt-10 pt-6 text-center">
          <p className="text-gray-400">© {new Date().getFullYear()} Your Library. All rights reserved.</p>
          <p className="text-gray-400">Designed with ❤️ by Sourav for Team ISTE</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
