import { motion } from 'framer-motion';

const newsItems = [
  {
    id: 1,
    date: '2025-04-01',
    title: 'Upcoming Exhibition: Spring Collection 2025',
    excerpt: 'Anne will showcase her latest works inspired by spring\'s arrival at Wren Gallery, Burford.',
    image: '/images/news/news-image-1.jpg',
    content: `Anne Songhurst is preparing for her next solo exhibition at Wren Gallery in Burford, Oxfordshire, scheduled for April-May 2025. The exhibition will feature her latest works inspired by spring's arrival, including new paintings of early flowers, seasonal fruits, and the interplay of natural and artificial light in her compositions.

This collection represents Anne's continued exploration of Dutch Master techniques applied to contemporary subjects. Visitors can expect to see her signature attention to detail and masterful use of light and shadow in pieces that capture the freshness and renewal of spring.

The exhibition will run from 1st April to 31st May 2025 at Wren Gallery, a prestigious venue in the heart of the Cotswolds that specialises in contemporary British artists working in traditional mediums.

For more information about viewing times and private viewings, please contact Wren Gallery directly or get in touch with Anne through her website.`
  },
  {
    id: 2,
    date: '2024-11-10',
    title: 'Saatchi Online Recognition',
    excerpt: 'Anne\'s work was featured in Saatchi Online Magazine, praised by critic Ana Finel Honigman.',
    image: '/images/news/news-image-2.jpg',
    content: `Anne Songhurst's distinctive approach to still life painting has received recognition in Saatchi Online Magazine. Art critic Ana Finel Honigman praised Anne as a "self-taught artist" whose work has "benefited from being untouched by art school training."

The feature highlighted Anne's unique journey from watercolour bird paintings to her current focus on oil still life works inspired by Dutch and Flemish Masters. The article explored how her self-taught background has allowed her to develop a distinctive voice within the classical tradition.

Anne's philosophy of "paint what you love" was central to the piece, showcasing her particular fascination with antique objects that have survived centuries. Her practice of collecting vessels from antique shops, charity shops, online auctions, and market stalls provides the foundation for her carefully composed still life arrangements.

The recognition from Saatchi Online has helped introduce Anne's work to a broader international audience of collectors and art enthusiasts who appreciate her contemporary approach to traditional techniques.`
  }
];

export default function NewsPage() {
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
            <h1 className="page-header">News & Updates</h1>
            <p className="text-lg text-text-light max-w-3xl mx-auto leading-relaxed">
              Stay updated with Anne Songhurst's latest exhibitions, new works, 
              and artistic developments in the world of contemporary still life painting.
            </p>
          </motion.div>
        </div>
      </section>

      {/* News Articles */}
      <section className="py-20">
        <div className="section-container">
          <div className="space-y-12">
            {newsItems.map((item, index) => (
              <motion.article
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-lg overflow-hidden"
              >
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-0">
                  {/* Image */}
                  <div className="lg:col-span-1">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-64 lg:h-full object-cover"
                    />
                  </div>

                  {/* Content */}
                  <div className="lg:col-span-2 p-8">
                    <div className="flex items-center gap-4 mb-4">
                      <time className="text-sm text-accent-gold font-medium">
                        {new Date(item.date).toLocaleDateString('en-GB', {
                          day: 'numeric',
                          month: 'long',
                          year: 'numeric'
                        })}
                      </time>
                      <span className="w-2 h-2 bg-accent-gold rounded-full"></span>
                      <span className="text-sm text-text-light">News</span>
                    </div>

                    <h2 className="text-2xl font-display text-primary-dark mb-4">
                      {item.title}
                    </h2>

                    <p className="text-text-dark text-lg mb-6 leading-relaxed">
                      {item.excerpt}
                    </p>

                    <div className="prose prose-lg max-w-none">
                      {item.content.split('\n\n').map((paragraph, pIndex) => (
                        <p key={pIndex} className="text-text-dark mb-4 leading-relaxed">
                          {paragraph}
                        </p>
                      ))}
                    </div>

                    <div className="mt-8 pt-6 border-t border-neutral-warm">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4">
                          <span className="text-sm text-text-light">Share:</span>
                          <div className="flex space-x-2">
                            <button className="text-accent-gold hover:text-accent-brown transition-colors">
                              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                              </svg>
                            </button>
                            <button className="text-accent-gold hover:text-accent-brown transition-colors">
                              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"/>
                              </svg>
                            </button>
                          </div>
                        </div>
                        <a 
                          href="/contact"
                          className="text-accent-gold hover:text-accent-brown font-medium transition-colors"
                        >
                          Contact for more information →
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 bg-white">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-2xl mx-auto"
          >
            <h2 className="text-3xl font-display text-primary-dark mb-4">
              Stay Updated
            </h2>
            <p className="text-lg text-text-light mb-8">
              Follow Anne on social media for the latest studio updates, 
              new works, and exhibition announcements.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://www.instagram.com/annesonghurst/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary flex items-center justify-center space-x-2"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
                <span>Follow on Instagram</span>
              </a>
              
              <a
                href="https://www.pinterest.co.uk/annesonghurstart/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary flex items-center justify-center space-x-2"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.719-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.097.118.112.222.083.343-.09.369-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.736-1.378 0 0-.599 2.282-.744 2.84-.282 1.084-1.064 2.456-1.549 3.235C9.584 23.815 10.77 24.001 12.017 24.001c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001 12.017.001z"/>
                </svg>
                <span>Pinterest</span>
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}