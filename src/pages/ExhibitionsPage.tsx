import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const exhibitions = [
  {
    id: 1,
    title: 'Gallery Representation',
    venue: 'Wren Gallery',
    location: 'Burford, Oxfordshire',
    startDate: '2007-01-01',
    endDate: '',
    type: 'ongoing',
    current: true,
    description: 'Anne Songhurst has been a gallery artist at Wren Gallery since 2007, with regular exhibitions showcasing her contemporary still life paintings and trompe-l\'oeil works.'
  },
  {
    id: 2,
    title: 'Local Exhibitions',
    venue: 'Norton Way Gallery',
    location: 'Letchworth, Hertfordshire',
    startDate: '',
    endDate: '',
    type: 'group',
    current: true,
    description: 'Regular participation in group exhibitions and local shows featuring Hertfordshire artists, highlighting Anne\'s contribution to the regional art scene.'
  }
];

const galleries = [
  {
    name: 'Wren Gallery',
    location: 'Burford, Oxfordshire',
    description: 'A prestigious gallery in the heart of the Cotswolds, specialising in contemporary British artists working in traditional mediums.',
    relationship: 'Primary representation for solo exhibitions and major works.',
    website: 'wren-gallery.com'
  },
  {
    name: 'Norton Way Gallery', 
    location: 'Letchworth, Hertfordshire',
    description: 'Local gallery supporting Hertfordshire artists with regular exhibitions and community engagement.',
    relationship: 'Regular group exhibitions and local representation.',
    website: 'nortonwaygallery.co.uk'
  }
];

export default function ExhibitionsPage() {
  return (
    <div className="min-h-screen bg-background-gallery">
      {/* Header */}
      <section className="py-20 bg-gradient-to-br from-neutral-cream to-background-card">
        <div className="section-container text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="page-header">Exhibitions</h1>
            <p className="text-lg text-text-light max-w-3xl mx-auto leading-relaxed">
              Discover Anne Songhurst's exhibition history and current gallery representations, 
              showcasing her contemporary still life paintings in prestigious venues across England.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Current & Upcoming Exhibitions */}
      <section className="py-20">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-display text-primary-dark mb-4">Exhibiting History</h2>
          </motion.div>

          <div className="space-y-8">
            {exhibitions.map((exhibition, index) => (
              <motion.div
                key={exhibition.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-background-card rounded-lg shadow-lg overflow-hidden"
              >
                <div className="p-8">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-2xl font-display text-primary-dark">
                          {exhibition.title}
                        </h3>
                        <span className={`text-xs px-3 py-1 rounded-full font-medium ${
                          exhibition.type === 'solo' 
                            ? 'bg-accent-copper text-white' 
                            : 'bg-neutral-stone text-text-dark'
                        }`}>
                          {exhibition.type === 'solo' ? 'Solo Exhibition' : 'Group Exhibition'}
                        </span>
                      </div>
                      
                      <div className="text-text-light mb-2">
                        <span className="font-semibold text-primary-dark">{exhibition.venue}</span>
                        <span className="mx-2">•</span>
                        <span>{exhibition.location}</span>
                      </div>
                      
                      <div className="text-sm text-text-muted">
                        {new Date(exhibition.startDate).toLocaleDateString('en-GB', {
                          day: 'numeric',
                          month: 'long',
                          year: 'numeric'
                        })}
                        {exhibition.endDate && (
                          <>
                            {' - '}
                            {new Date(exhibition.endDate).toLocaleDateString('en-GB', {
                              day: 'numeric',
                              month: 'long',
                              year: 'numeric'
                            })}
                          </>
                        )}
                      </div>
                    </div>
                  </div>

                  <p className="text-text-dark leading-relaxed">
                    {exhibition.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Representation */}
      <section className="py-20 bg-background-section">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-display text-primary-dark mb-4">Gallery Partners</h2>
            <p className="text-lg text-text-light max-w-2xl mx-auto">
              Anne's work is represented by carefully selected galleries that share 
              her commitment to quality and artistic excellence.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {galleries.map((gallery, index) => (
              <motion.div
                key={gallery.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-background-card p-8 rounded-lg shadow-lg"
              >
                <h3 className="text-xl font-display text-primary-dark mb-2">
                  {gallery.name}
                </h3>
                <p className="text-accent-gold font-medium mb-4">
                  {gallery.location}
                </p>
                <p className="text-text-dark text-sm mb-4 leading-relaxed">
                  {gallery.description}
                </p>
                <p className="text-text-light text-sm mb-4 italic">
                  {gallery.relationship}
                </p>
                <div className="pt-4 border-t border-neutral-warm">
                  <p className="text-xs text-text-muted">
                    {gallery.website}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Exhibition Enquiries */}
      <section className="py-20 bg-primary-dark text-white">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-3xl font-display text-accent-gold mb-4">
              Exhibition Opportunities
            </h2>
            <p className="text-lg text-gray-300 mb-8">
              Galleries and curators interested in exhibiting Anne's work are 
              welcome to get in touch to discuss available pieces and exhibition opportunities.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:anne.songhurst@ntlworld.com?subject=Exhibition Enquiry"
                className="btn-primary"
              >
                Contact for Exhibitions
              </a>
              <Link
                to="/galleries"
                className="border-2 border-accent-gold text-accent-gold px-6 py-3 rounded-sm font-medium hover:bg-accent-gold hover:text-white transition-all duration-300"
              >
                View Available Works
              </Link>
            </div>

            <div className="mt-8 pt-8 border-t border-gray-600">
              <p className="text-sm text-gray-400">
                Professional images, artist CV, and artwork specifications available on request.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}