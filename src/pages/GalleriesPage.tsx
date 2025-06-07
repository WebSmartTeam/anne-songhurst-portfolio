import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { recentWorksData, trompeLoeilData, archiveData, offTheEaselData } from '../utils/artworkData';

const galleryCards = [
  {
    title: 'Off the Easel',
    description: 'Fresh works recently completed in the studio',
    href: '/galleries/off-the-easel',
    artworks: offTheEaselData,
    coverImage: '/images/paintings/off-the-easel/chinese-porcelain-with-apricots/fbec482e-e806-458e-a4b6-3b8ed52ed4af.jpg'
  },
  {
    title: 'Recent Works',
    description: 'Latest paintings showcasing contemporary still life compositions',
    href: '/galleries/recent-works',
    artworks: recentWorksData,
    coverImage: '/images/paintings/recent-works/basket-with-lemons/anne-songhurst--basket_with_lemons_10x10.jpg'
  },
  {
    title: 'Trompe L\'Oeil',
    description: 'Masterful trompe-l\'oeil paintings that deceive the eye',
    href: '/galleries/trompe-loeil',
    artworks: trompeLoeilData,
    coverImage: '/images/paintings/trompe-loeil/cabinet-of-memories/anne-songhurst-cabinet-of-memories.jpg'
  },
  {
    title: 'Archive',
    description: 'Historical collection of Anne\'s earlier masterpieces',
    href: '/galleries/archive',
    artworks: archiveData,
    coverImage: '/images/paintings/archive/cider-flagon-with-pears/anne-songhurst-cider-flagon-with-pears-14x18.jpg'
  }
];

export default function GalleriesPage() {
  return (
    <div className="min-h-screen bg-primary-light">
      {/* Header */}
      <section className="py-20 bg-gradient-to-br from-neutral-cream to-white">
        <div className="section-container text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="page-header">Paintings</h1>
            <p className="text-lg text-text-light max-w-3xl mx-auto leading-relaxed">
              Explore Anne Songhurst's complete collection of oil paintings, 
              from her latest contemporary works to masterful trompe-l'oeil pieces 
              and treasured archival paintings.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-20">
        <div className="section-container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {galleryCards.map((gallery, index) => (
              <motion.div
                key={gallery.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Link
                  to={gallery.href}
                  className="block group bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500"
                >
                  <div className="relative aspect-4-3 overflow-hidden">
                    <img
                      src={gallery.coverImage}
                      alt={gallery.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-opacity duration-300"></div>
                    
                    {/* Artwork count badge */}
                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
                      <span className="text-sm font-medium text-primary-dark">
                        {gallery.artworks.length} {gallery.artworks.length === 1 ? 'artwork' : 'artworks'}
                      </span>
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="text-2xl font-display text-primary-dark mb-2 group-hover:text-accent-gold transition-colors duration-200">
                      {gallery.title}
                    </h3>
                    <p className="text-text-light leading-relaxed mb-4">
                      {gallery.description}
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <span className="text-accent-gold font-medium group-hover:underline">
                        View Gallery →
                      </span>
                      
                      <div className="flex items-center space-x-1">
                        {gallery.artworks.slice(0, 3).map((artwork, i) => (
                          <div
                            key={artwork.id}
                            className="w-8 h-8 rounded-sm overflow-hidden border-2 border-white shadow-sm"
                            style={{ marginLeft: i > 0 ? '-8px' : '0' }}
                          >
                            <img
                              src={artwork.imagePath}
                              alt=""
                              className="w-full h-full object-cover"
                            />
                          </div>
                        ))}
                        {gallery.artworks.length > 3 && (
                          <div className="w-8 h-8 rounded-sm bg-neutral-warm border-2 border-white shadow-sm flex items-center justify-center text-xs font-medium text-text-dark"
                               style={{ marginLeft: '-8px' }}>
                            +{gallery.artworks.length - 3}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-20 bg-white">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-display text-primary-dark mb-4">
              Collection Overview
            </h2>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { 
                number: recentWorksData.length + trompeLoeilData.length + archiveData.length + offTheEaselData.length, 
                label: 'Total Artworks' 
              },
              { 
                number: recentWorksData.filter(a => a.available).length + 
                        trompeLoeilData.filter(a => a.available).length + 
                        offTheEaselData.filter(a => a.available).length, 
                label: 'Available Works' 
              },
              { 
                number: new Date().getFullYear() - 1998, 
                label: 'Years Creating' 
              },
              { 
                number: 3, 
                label: 'Gallery Partners' 
              }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl font-display text-accent-gold mb-2">
                  {stat.number}
                </div>
                <div className="text-text-light font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary-dark text-white">
        <div className="section-container text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-display text-accent-gold mb-4">
              Interested in Purchasing?
            </h2>
            <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
              Many of Anne's paintings are available for purchase. 
              Contact her directly for pricing and availability.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="btn-primary">
                Contact Anne
              </Link>
              <a 
                href="mailto:anne.songhurst@ntlworld.com"
                className="btn-secondary"
              >
                Email Directly
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}