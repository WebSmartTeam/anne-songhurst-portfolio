import { motion } from 'framer-motion';

const galleries = [
  {
    name: 'Wren Gallery',
    location: 'Burford',
    description: 'Situated in the High Street of the Cotswold town of Burford, Wren Gallery has been established for over twenty years specialising in contemporary British and Irish art.',
    relationship: 'Anne Songhurst has been a gallery artist since 2007',
    details: 'Open daily (except Thursdays)',
    website: 'www.wrenfineart.co.uk',
    image: '/images/galleries/wren-gallery.jpg'
  },
  {
    name: 'Norton Way Gallery',
    location: 'Letchworth Garden City',
    description: 'This real gem of a gallery is situated in the rural arts and crafts town of Letchworth Garden City and is devoted to original works of art - oils, watercolours, drawings, mixed media pieces.',
    relationship: 'Anne Songhurst has been a gallery artist since 2007',
    details: 'A gallery devoted to original works of art',
    website: 'nortonwaygallery.com',
    image: '/images/galleries/norton-way-gallery.jpg'
  }
];

export default function GalleryLocationsPage() {
  return (
    <div className="min-h-screen bg-background-gallery">
      {/* Header */}
      <section className="py-20 bg-gradient-to-br from-neutral-cream to-white">
        <div className="section-container text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="page-header">Galleries</h1>
            <p className="text-lg text-text-light max-w-3xl mx-auto leading-relaxed">
              Anne Songhurst's paintings are represented by carefully selected galleries 
              that share her commitment to quality and artistic excellence.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Gallery Listings */}
      <section className="py-20">
        <div className="section-container">
          <div className="space-y-12">
            {galleries.map((gallery, index) => (
              <motion.div
                key={gallery.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-lg overflow-hidden"
              >
                <div className={`grid grid-cols-1 ${gallery.image ? 'lg:grid-cols-3' : ''} gap-0`}>
                  {/* Gallery Image */}
                  {gallery.image && (
                    <div className="lg:col-span-1">
                      <img
                        src={gallery.image}
                        alt={`${gallery.name} exterior`}
                        className="w-full h-64 lg:h-full object-cover"
                      />
                    </div>
                  )}
                  
                  {/* Gallery Info */}
                  <div className={`${gallery.image ? 'lg:col-span-2' : ''} p-8`}>
                    <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                      <div className="flex-1">
                        <h2 className="text-3xl font-display text-primary-dark mb-2">
                          {gallery.name}
                        </h2>
                        
                        <div className="text-accent-gold font-medium mb-4">
                          {gallery.location}
                        </div>
                        
                        <p className="text-text-dark text-lg mb-4 leading-relaxed">
                          {gallery.description}
                        </p>
                        
                        <div className="space-y-2 text-sm">
                          <div className="flex items-start space-x-3">
                            <span className="text-text-light font-medium min-w-[120px]">Partnership:</span>
                            <span className="text-text-dark">{gallery.relationship}</span>
                          </div>
                          
                          <div className="flex items-start space-x-3">
                            <span className="text-text-light font-medium min-w-[120px]">Details:</span>
                            <span className="text-text-dark">{gallery.details}</span>
                          </div>
                          
                          <div className="flex items-start space-x-3">
                            <span className="text-text-light font-medium min-w-[120px]">Website:</span>
                            <a 
                              href={`https://${gallery.website}`}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-accent-gold hover:text-accent-copper transition-colors duration-200"
                            >
                              {gallery.website}
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="pt-6 border-t border-neutral-warm">
                      <p className="text-text-light text-sm">
                        Anne Songhurst has been proudly represented by {gallery.name} since 2007, 
                        showcasing her contemporary still life paintings to collectors and art enthusiasts.
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 bg-primary-dark text-white">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-3xl font-display text-accent-gold mb-4">
              Gallery Partnerships
            </h2>
            <p className="text-lg text-gray-300 mb-8">
              Galleries interested in representing Anne's work are welcome to get in touch 
              to discuss partnership opportunities and available pieces.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:anne.songhurst@ntlworld.com?subject=Gallery Partnership Enquiry"
                className="btn-primary"
              >
                Gallery Enquiries
              </a>
              <a
                href="/galleries"
                className="border-2 border-accent-gold text-accent-gold px-6 py-3 rounded-sm font-medium hover:bg-accent-gold hover:text-white transition-all duration-300"
              >
                View Paintings
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}