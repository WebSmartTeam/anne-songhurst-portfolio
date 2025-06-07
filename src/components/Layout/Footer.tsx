import { Link } from 'react-router-dom';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary-dark text-white mt-20">
      <div className="section-container py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Artist Info */}
          <div className="col-span-1 md:col-span-2 lg:col-span-1">
            <div className="mb-4">
              <img
                src="/images/homepage/logo/logo-annesonghurst2.png"
                alt="Anne Songhurst"
                className="h-16 w-auto brightness-200 mb-4"
              />
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Self-taught artist inspired by Dutch Masters, creating contemporary oil still life paintings 
              since 1998. Based in Hertfordshire, England.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-display text-accent-gold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/galleries/recent-works" className="text-gray-300 hover:text-accent-gold transition-colors duration-200">Recent Works</Link></li>
              <li><Link to="/galleries/trompe-loeil" className="text-gray-300 hover:text-accent-gold transition-colors duration-200">Trompe L'Oeil</Link></li>
              <li><Link to="/galleries/archive" className="text-gray-300 hover:text-accent-gold transition-colors duration-200">Archive</Link></li>
              <li><Link to="/about" className="text-gray-300 hover:text-accent-gold transition-colors duration-200">About</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-accent-gold transition-colors duration-200">Contact</Link></li>
            </ul>
          </div>

          {/* Gallery Representation */}
          <div>
            <h4 className="text-lg font-display text-accent-gold mb-4">Gallery Representation</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <div className="text-gray-300">
                  <div className="font-medium">Wren Gallery</div>
                  <div className="text-gray-400">Burford</div>
                </div>
              </li>
              <li>
                <div className="text-gray-300">
                  <div className="font-medium">Norton Way Gallery</div>
                  <div className="text-gray-400">Letchworth</div>
                </div>
              </li>
              <li>
                <div className="text-gray-300">
                  <div className="font-medium">The Marylebone Gallery</div>
                  <div className="text-gray-400">London</div>
                </div>
              </li>
            </ul>
          </div>

          {/* Contact & Social */}
          <div>
            <h4 className="text-lg font-display text-accent-gold mb-4">Connect</h4>
            <div className="space-y-3">
              <div>
                <a 
                  href="mailto:anne.songhurst@ntlworld.com" 
                  className="text-gray-300 hover:text-accent-gold transition-colors duration-200 text-sm"
                >
                  anne.songhurst@ntlworld.com
                </a>
              </div>
              <div className="flex space-x-4">
                <a
                  href="https://www.instagram.com/annesonghurst/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-accent-gold transition-colors duration-200"
                  aria-label="Instagram"
                >
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
                <a
                  href="https://www.pinterest.co.uk/annesonghurstart/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-accent-gold transition-colors duration-200"
                  aria-label="Pinterest"
                >
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.719-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.097.118.112.222.083.343-.09.369-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.736-1.378 0 0-.599 2.282-.744 2.84-.282 1.084-1.064 2.456-1.549 3.235C9.584 23.815 10.77 24.001 12.017 24.001c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001 12.017.001z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-600 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © {currentYear} Anne Songhurst. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0">
            <p className="text-gray-400 text-sm">
              All artwork © Anne Songhurst.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}