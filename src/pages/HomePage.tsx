import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import { featuredArtworks } from '../utils/artworkData';
import { ArtworkCard } from '../components/Gallery';
import { useState } from 'react';
import { Artwork } from '../types';
import ArtworkModal from '../components/Gallery/ArtworkModal';

export default function HomePage() {
  const [selectedArtwork, setSelectedArtwork] = useState<Artwork | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleArtworkClick = (artwork: Artwork) => {
    setSelectedArtwork(artwork);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedArtwork(null);
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center bg-gradient-to-br from-background-gallery via-neutral-warm to-neutral-sand">
        <div className="absolute inset-0 opacity-25">
          <img
            src="/images/homepage/cider-flagon-with-pears/anne-songhurst-cider-flagon-with-pears-12x16.jpg"
            alt="Anne Songhurst artwork"
            className="w-full h-full object-cover"
          />
        </div>
        
        {/* Decorative overlay pattern */}
        <div className="absolute inset-0 opacity-5 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8ZGVmcz4KICAgIDxwYXR0ZXJuIGlkPSJncmlkIiB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiPgogICAgICA8cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMDAwIiBzdHJva2Utd2lkdGg9IjEiLz4KICAgIDwvcGF0dGVybj4KICA8L2RlZnM+CiAgPHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPgo8L3N2Zz4=')]"></div>
        
        <div className="relative text-center px-4 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-display text-primary-dark mb-6 text-shadow">
              Anne Songhurst
            </h1>
            <p className="text-xl md:text-2xl text-text-dark mb-4 font-light">
              Contemporary Oil Painter
            </p>
            <p className="text-lg text-text-light mb-8 max-w-2xl mx-auto leading-relaxed">
              Inspired by Dutch Masters, creating timeless still life paintings 
              that capture the beauty of everyday objects with extraordinary detail.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/galleries/recent-works" className="bg-accent-gold text-white px-8 py-3 rounded-sm font-medium hover:bg-accent-copper transition-colors duration-300 shadow-lg">
                View Recent Works
              </Link>
              <Link to="/about" className="border-2 border-primary-dark text-primary-dark bg-white/90 px-8 py-3 rounded-sm font-medium hover:bg-primary-dark hover:text-white transition-all duration-300">
                About the Artist
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <div className="w-6 h-10 border-2 border-text-light rounded-full flex justify-center">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1 h-3 bg-text-light rounded-full mt-2"
            />
          </div>
        </motion.div>
      </section>

      {/* Artist Quote */}
      <section className="py-20 bg-gradient-to-r from-neutral-cream via-white to-neutral-warm relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-32 h-32 bg-accent-gold/5 rounded-full -translate-x-16 -translate-y-16"></div>
        <div className="absolute bottom-0 right-0 w-48 h-48 bg-accent-bronze/5 rounded-full translate-x-24 translate-y-24"></div>
        
        <div className="section-container text-center relative">
          <motion.blockquote
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-2xl md:text-3xl font-display text-primary-dark italic max-w-3xl mx-auto relative"
          >
            <span className="absolute -left-8 -top-4 text-6xl text-accent-gold/20 font-serif">"</span>
            Paint what you love
            <span className="absolute -right-8 -bottom-4 text-6xl text-accent-gold/20 font-serif">"</span>
          </motion.blockquote>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 text-text-light font-medium"
          >
            — Anne Songhurst's guiding philosophy
          </motion.p>
        </div>
      </section>

      {/* Featured Works */}
      <section className="py-20 bg-background-gallery">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-display text-primary-dark mb-4">
              Featured Works
            </h2>
            <p className="text-lg text-text-light max-w-2xl mx-auto">
              A selection of recent paintings showcasing Anne's mastery of 
              still life composition and her inspiration from Dutch Masters.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {featuredArtworks.slice(0, 3).map((artwork, index) => (
              <motion.div
                key={artwork.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <ArtworkCard
                  artwork={artwork}
                  onViewDetails={handleArtworkClick}
                  priority={index < 2}
                />
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <Link
              to="/galleries"
              className="inline-flex items-center space-x-2 bg-accent-gold text-white px-6 py-3 rounded-sm hover:bg-accent-copper transition-colors duration-300 font-medium"
            >
              <span>View All Galleries</span>
              <ArrowRightIcon className="h-5 w-5" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-20 bg-gradient-to-br from-white via-neutral-warm to-background-section">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl font-display text-primary-dark mb-6">
                About Anne Songhurst
              </h2>
              <div className="space-y-4 text-text-dark">
                <p>
                  Born in 1946 in Ashford, Kent, Anne Songhurst is a self-taught artist 
                  who has been painting full-time since 1998. Originally focused on 
                  watercolour paintings of birds for over 30 years, she made a 
                  remarkable transition to oil still life paintings.
                </p>
                <p>
                  Inspired by Dutch and Flemish Masters, Anne's work captures the 
                  timeless beauty of everyday objects with extraordinary attention 
                  to detail and masterful use of light and shadow.
                </p>
                <p>
                  Her paintings are held in permanent collections at galleries 
                  throughout Hertfordshire, Bedfordshire, and London, and have 
                  been featured in Saatchi Online Magazine.
                </p>
              </div>
              <div className="mt-8">
                <Link to="/about" className="btn-primary">
                  Read Full Biography
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <img
                src="/images/about/anne-songhurst-mixedcolour.jpg"
                alt="Anne Songhurst in her studio"
                className="w-full rounded-lg shadow-xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-lg"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Gallery Representation */}
      <section className="py-20 bg-primary-dark text-white">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-display text-accent-gold mb-4">
              Gallery Representation
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Anne's work is represented by prestigious galleries across England.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: 'Wren Gallery', location: 'Burford' },
              { name: 'Norton Way Gallery', location: 'Letchworth' },
              { name: 'The Marylebone Gallery', location: 'London' }
            ].map((gallery, index) => (
              <motion.div
                key={gallery.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <h3 className="text-xl font-display text-accent-gold mb-2">
                  {gallery.name}
                </h3>
                <p className="text-gray-300">{gallery.location}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 bg-gradient-to-r from-background-gallery via-neutral-sand to-neutral-warm">
        <div className="section-container text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-display text-primary-dark mb-4">
              Interested in a Commission?
            </h2>
            <p className="text-lg text-text-light mb-8 max-w-2xl mx-auto">
              Anne accepts commissions for bespoke still life paintings. 
              Contact her to discuss your vision.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="btn-primary">
                Get in Touch
              </Link>
              <a 
                href="mailto:anne.songhurst@ntlworld.com"
                className="btn-secondary"
              >
                Email Direct
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Artwork Modal */}
      <ArtworkModal
        artwork={selectedArtwork}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </div>
  );
}