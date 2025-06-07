import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

const navigation = [
  { name: 'Home', href: '/' },
  { 
    name: 'Galleries', 
    href: '/galleries',
    submenu: [
      { name: 'Recent Works', href: '/galleries/recent-works' },
      { name: 'Trompe L\'Oeil', href: '/galleries/trompe-loeil' },
      { name: 'Archive', href: '/galleries/archive' },
      { name: 'Available Works', href: '/galleries/available' }
    ]
  },
  { name: 'About', href: '/about' },
  { name: 'Exhibitions', href: '/exhibitions' },
  { name: 'News', href: '/news' },
  { name: 'Contact', href: '/contact' },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [galleryMenuOpen, setGalleryMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (href: string) => {
    if (href === '/') return location.pathname === '/';
    return location.pathname.startsWith(href);
  };

  return (
    <header className="bg-white/95 backdrop-blur-light shadow-sm sticky top-0 z-50">
      <nav className="section-container">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <img
              src="/images/homepage/logo/logo-annesonghurst2.png"
              alt="Anne Songhurst"
              className="h-12 w-auto"
            />
            <div className="hidden md:block">
              <h1 className="text-xl font-display text-primary-dark">Anne Songhurst</h1>
              <p className="text-sm text-text-light">Contemporary Oil Painter</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => (
              <div key={item.name} className="relative group">
                {item.submenu ? (
                  <>
                    <button
                      className={`text-base font-medium transition-colors duration-200 px-3 py-2 rounded-sm ${
                        isActive(item.href)
                          ? 'text-accent-gold border-b-2 border-accent-gold'
                          : 'text-text-dark hover:text-accent-gold'
                      }`}
                      onMouseEnter={() => setGalleryMenuOpen(true)}
                      onMouseLeave={() => setGalleryMenuOpen(false)}
                    >
                      {item.name}
                    </button>
                    <AnimatePresence>
                      {galleryMenuOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          transition={{ duration: 0.2 }}
                          className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-xl border border-gray-100 py-2"
                          onMouseEnter={() => setGalleryMenuOpen(true)}
                          onMouseLeave={() => setGalleryMenuOpen(false)}
                        >
                          {item.submenu.map((subItem) => (
                            <Link
                              key={subItem.name}
                              to={subItem.href}
                              className="block px-4 py-2 text-sm text-text-dark hover:text-accent-gold hover:bg-neutral-cream transition-colors duration-200"
                            >
                              {subItem.name}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </>
                ) : (
                  <Link
                    to={item.href}
                    className={`text-base font-medium transition-colors duration-200 px-3 py-2 rounded-sm ${
                      isActive(item.href)
                        ? 'text-accent-gold border-b-2 border-accent-gold'
                        : 'text-text-dark hover:text-accent-gold'
                    }`}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </div>

          {/* Mobile menu button */}
          <button
            className="lg:hidden p-2 rounded-md text-text-dark hover:text-accent-gold"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <XMarkIcon className="h-6 w-6" />
            ) : (
              <Bars3Icon className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden border-t border-gray-200 py-4"
            >
              <div className="space-y-2">
                {navigation.map((item) => (
                  <div key={item.name}>
                    {item.submenu ? (
                      <>
                        <Link
                          to={item.href}
                          className={`block px-3 py-2 text-base font-medium rounded-md transition-colors duration-200 ${
                            isActive(item.href)
                              ? 'text-accent-gold bg-neutral-cream'
                              : 'text-text-dark hover:text-accent-gold hover:bg-neutral-cream'
                          }`}
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          {item.name}
                        </Link>
                        <div className="ml-4 space-y-1">
                          {item.submenu.map((subItem) => (
                            <Link
                              key={subItem.name}
                              to={subItem.href}
                              className="block px-3 py-1 text-sm text-text-light hover:text-accent-gold transition-colors duration-200"
                              onClick={() => setMobileMenuOpen(false)}
                            >
                              {subItem.name}
                            </Link>
                          ))}
                        </div>
                      </>
                    ) : (
                      <Link
                        to={item.href}
                        className={`block px-3 py-2 text-base font-medium rounded-md transition-colors duration-200 ${
                          isActive(item.href)
                            ? 'text-accent-gold bg-neutral-cream'
                            : 'text-text-dark hover:text-accent-gold hover:bg-neutral-cream'
                        }`}
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {item.name}
                      </Link>
                    )}
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}