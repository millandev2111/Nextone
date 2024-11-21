'use client';

import { PeopleIcon } from "../../../assets/icons/people";
import { LogoIcon } from "../../../assets/icons/logo";
import { useEffect, useState } from "react";
import { getAuth, onAuthStateChanged, signOut, User } from "firebase/auth";
import app from "../../services/firebase/firebaseConfig";

const auth = getAuth(app);

export function Navbar() {
  const [user, setUser] = useState<User | null>(null);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user); //aqui me dice el error
      } else {
        setUser(null);
      }
    });

    return () => unsubscribe();
  }, []);

  const handleSignOut = () => {
    signOut(auth).then(() => {
      // Opcional: redirige al usuario a una página específica después de cerrar sesión
      window.location.href = '/';
    }).catch((error) => {
      console.error('Error al cerrar sesión:', error);
    });
  };

  return (
    <nav className="bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <a
              className="text-5xl font-extrabold flex items-center text-black hover:scale-110 transition"
              href="/"
            >
              <LogoIcon className="size-12" />
              <span className="ml-2">NT</span>
            </a>
            <div className="hidden lg:flex lg:ml-6 lg:space-x-8">
              <a href="/about" className="text-gray-500 hover:text-gray-700 inline-flex items-center px-1 pt-1 text-sm font-medium">
                Sobre nosotros
              </a>
              <a href="/contact" className="text-gray-500 hover:text-gray-700 inline-flex items-center px-1 pt-1 text-sm font-medium">
                Contáctanos
              </a>
              <a href="/events" className="text-gray-500 hover:text-gray-700 inline-flex items-center px-1 pt-1 text-sm font-medium">
                Eventos
              </a>
            </div>
          </div>
          <div className="hidden lg:flex lg:items-center">
            {user ? (
              <button
                onClick={handleSignOut}
                className="ml-3 inline-flex items-center px-14 py-1 font-medium border border-transparent text-sm rounded-md text-white bg-red-600 hover:bg-red-800 transition"
              >
                Cerrar sesión
              </button>
            ) : (
              <a
                href="/auth/login"
                className="ml-3 inline-flex items-center px-14 py-1 font-medium border border-transparent text-sm rounded-md text-white bg-purple-600 hover:bg-purple-800 transition"
              >
                <PeopleIcon className="size-5 mr-3" />
                Parchate
              </a>
            )}
          </div>
          <div className="flex lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-500 hover:text-gray-700 focus:outline-none"
            >
              <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="lg:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <a href="/about" className="block text-gray-500 hover:bg-gray-200 px-3 py-2 rounded-md text-base font-medium">
              Sobre nosotros
            </a>
            <a href="/contact" className="block text-gray-500 hover:bg-gray-200 px-3 py-2 rounded-md text-base font-medium">
              Contáctanos
            </a>
            <a href="/events" className="block text-gray-500 hover:bg-gray-200 px-3 py-2 rounded-md text-base font-medium">
              Eventos
            </a>
            {user ? (
              <button
                onClick={handleSignOut}
                className="block mt-2 w-full text-center px-4 py-2 font-medium text-white bg-red-600 rounded-md hover:bg-red-800 transition"
              >
                Cerrar sesión
              </button>
            ) : (
              <a
                href="/auth/login"
                className="block mt-2 text-center px-4 py-2 font-medium text-white bg-purple-600 rounded-md hover:bg-purple-800 transition"
              >
                <PeopleIcon className="size-5 inline mr-3" />
                Parchate
              </a>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}


