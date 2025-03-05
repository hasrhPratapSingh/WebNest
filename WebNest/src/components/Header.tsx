"use client";
import { useEffect, useState } from "react";
import { Dialog, DialogPanel } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";

export const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolledUp, setIsScrolledUp] = useState(true);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsScrolledUp(currentScrollY < lastScrollY || currentScrollY == 0);
      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 w-full transition-all duration-300 ${
        isScrolledUp ? "bg-black" : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8">
        <div className="flex lg:flex-1">
          <Link to="#" className="-m-1.5 p-1.5">
            <span className="sr-only">Webnest</span>
            <img
              alt="Webnest Logo"
              src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=600"
              className="h-8 w-auto"
            />
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
          >
            <Bars3Icon className="size-6" />
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          <Link
            to="/"
            className={`text-sm font-semibold transition-colors ${
              isScrolledUp ? "text-white" : "text-gray-900"
            }`}
          >
            Home
          </Link>
          <Link
            to="/services"
            className={`text-sm font-semibold transition-colors ${
              isScrolledUp ? "text-white" : "text-gray-900"
            }`}
          >
            Services
          </Link>
          <Link
            to="/aboutus"
            className={`text-sm font-semibold transition-colors ${
              isScrolledUp ? "text-white" : "text-gray-900" /*  */
            }`}
          >
            About Us
          </Link>
          <Link
            to="contactus"
            className={`text-sm font-semibold transition-colors ${
              isScrolledUp ? "text-white" : "text-gray-900"
            }`}
          >
            Contact Us
          </Link>
        </div>
      </nav>

      <Dialog
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
        className="lg:hidden"
      >
        <div className="fixed inset-0 z-10 bg-black/50" />
        <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full max-w-sm bg-white p-6 sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <Link to="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Webnest</span>
              <img
                alt="Webnest Logo"
                src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=600"
                className="h-8 w-auto"
              />
            </Link>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
            >
              <XMarkIcon className="size-6" />
            </button>
          </div>
          <div className="mt-6 space-y-2">
            <Link
              to="/home"
              className="block px-3 py-2 font-semibold text-gray-900 hover:bg-gray-100"
            >
              Home
            </Link>
            <Link
              to="/services"
              className="block px-3 py-2 font-semibold text-gray-900 hover:bg-gray-100"
            >
              Services
            </Link>
            <Link
              to="/aboutus"
              className="block px-3 py-2 font-semibold text-gray-900 hover:bg-gray-100"
            >
              About Us
            </Link>
            <Link
              to="/contactus"
              className="block px-3 py-2 font-semibold text-gray-900 hover:bg-gray-100"
            >
              Contact Us
            </Link>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  );
};
