import Link from "next/link";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-primary text-white pt-16 uppercase">
      <div className="max-w-7xl mx-auto px-6 lg:px-20">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 pb-12">
          {/* Brand */}
          <div>
            <Link href="/">
              <h2
                className="text-lg lg:text-2xl font-extrabold tracking-wide
      ml-[-4px] text-accent "
              >
          Crème & Crust
              </h2>
            </Link>
            <p className="mt-4 text-sm text-white">
              At Crème & Crust, every bite is crafted to bring comfort and joy — the perfect place to spend quality time with friends, family, and your loved ones.  
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex justify-center flex-col text-white">
            <h3 className="footer-title">Quick Links</h3>
            <a className="link link-hover">Home</a>
            <a className="link link-hover">Shop</a>
            <a className="link link-hover">Menus</a>
            <a className="link link-hover">Contact Us</a>
          </div>

          {/* Company */}
          <div className="flex justify-center flex-col text-white">
            <h3 className="footer-title">Company</h3>
            <a className="link link-hover">About Us</a>
            <a className="link link-hover">Our Goal</a>
            <a className="link link-hover">Collaborate</a>
            <a className="link link-hover">Privacy Policy</a>
          </div>

          {/* Social */}
          <div className="flex justify-center flex-col text-white">
            <h3 className="footer-title">Connect With Us</h3>
            <div className="flex gap-4 mt-4">
              <FaFacebookF className="cursor-pointer hover:text-primary transition" />
              <FaInstagram className="cursor-pointer hover:text-primary transition" />
              <FaTwitter className="cursor-pointer hover:text-primary transition" />
              <FaLinkedinIn className="cursor-pointer hover:text-primary transition" />
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-neutral-content/20 py-6 text-center text-sm text-neutral-content/70">
          © {new Date().getFullYear()} Crème & Crust . All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;