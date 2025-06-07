import { Link } from 'react-router-dom';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary-dark text-white mt-20">
      <div className="section-container py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Artist Info */}
          <div className="col-span-1 md:col-span-2 lg:col-span-1">
            <div className="flex items-center space-x-3 mb-4">
              <img
                src="/images/homepage/logo/logo-annesonghurst2.png"
                alt="Anne Songhurst"
                className="h-12 w-auto brightness-200"
              />
              <div>
                <h3 className="text-xl font-display text-accent-gold">Anne Songhurst</h3>
                <p className="text-sm text-gray-300">Contemporary Oil Painter</p>
              </div>
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
                    <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.621 5.367 11.988 11.988 11.988c6.621 0 11.988-5.367 11.988-11.988C24.005 5.367 18.638.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.321-1.291L3.938 16.9l1.193-1.193c-.8-.873-1.291-2.024-1.291-3.321s.49-2.448 1.291-3.321L3.938 7.871l1.193-1.193c.873-.8 2.024-1.291 3.321-1.291s2.448.49 3.321 1.291l1.193 1.193l1.193-1.193c.873-.8 2.024-1.291 3.321-1.291s2.448.49 3.321 1.291l1.193 1.193l1.193-1.193c.8.873 1.291 2.024 1.291 3.321s-.49 2.448-1.291 3.321l1.193 1.193l-1.193 1.193c-.873.8-2.024 1.291-3.321 1.291s-2.448-.49-3.321-1.291L12.017 15.6l-1.193 1.193c-.873.8-2.024 1.291-3.321 1.291z"/>
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
          <div className="mt-4 md:mt-0 flex space-x-6">
            <Link to="/privacy" className="text-gray-400 hover:text-accent-gold text-sm transition-colors duration-200">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-gray-400 hover:text-accent-gold text-sm transition-colors duration-200">
              Terms of Use
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}