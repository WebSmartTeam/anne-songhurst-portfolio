import { motion } from 'framer-motion';

export default function AboutPage() {
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
            <h1 className="page-header">About Anne Songhurst</h1>
            <p className="text-lg text-text-light max-w-3xl mx-auto leading-relaxed">
              Discover the journey of a self-taught artist whose love for Dutch Masters 
              and passion for still life painting has created a distinctive contemporary voice.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Biography */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h2 className="text-2xl font-display text-primary-dark mb-6">Biography</h2>
                <div className="space-y-4 text-text-dark leading-relaxed">
                  <p>
                    <strong>Anne Songhurst</strong> was born in 1946 in Ashford, Kent, and is now based in 
                    Hertfordshire, England. As a self-taught artist, Anne has been painting 
                    full-time since 1998, developing her distinctive style without the influence 
                    of formal art school training.
                  </p>
                  <p>
                    For over 30 years, Anne initially focused on watercolour paintings of birds, 
                    building a reputation for her detailed and sensitive wildlife studies. However, 
                    her artistic journey took a remarkable turn when she made the transition to 
                    oil still life paintings.
                  </p>
                  <p>
                    Inspired by the Dutch and Flemish Masters, Anne's contemporary still life 
                    paintings capture the timeless beauty of everyday objects. Her work seeks to 
                    "convey an atmosphere of stillness and a timeless quality," building detail 
                    through multiple paint layers and emphasizing rich colours and contrasting textures.
                  </p>
                  <p>
                    Anne does not aim for photo-realism in her work. Instead, she focuses on 
                    creating paintings that evoke emotion and showcase the inherent beauty 
                    of her subjects through masterful composition and lighting.
                  </p>
                </div>
              </div>

              {/* Philosophy */}
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h2 className="text-2xl font-display text-primary-dark mb-6">Artistic Philosophy</h2>
                <blockquote className="text-lg italic text-center mb-4 text-accent-gold">
                  "Paint what you love"
                </blockquote>
                <p className="text-text-dark leading-relaxed">
                  This simple yet profound philosophy guides Anne's artistic practice. 
                  She is particularly intrigued by antique objects that have survived 
                  centuries, collecting vessels from antique shops, charity shops, 
                  online auctions, and market stalls to feature in her compositions.
                </p>
              </div>
            </motion.div>

            {/* Images and Details */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-6"
            >
              {/* Portrait */}
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <img
                  src="/images/about/anne-songhurst-mixedcolour.jpg"
                  alt="Anne Songhurst in her studio"
                  className="w-full rounded-lg mb-4"
                />
                <p className="text-sm text-text-light text-center italic">
                  Anne Songhurst in her studio with her palette and brushes
                </p>
              </div>

              {/* Studio Image */}
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <img
                  src="/images/about/dutch-jug-with-clementines.jpg"
                  alt="Studio still life setup"
                  className="w-full rounded-lg mb-4"
                />
                <p className="text-sm text-text-light text-center italic">
                  A typical still life arrangement in Anne's studio
                </p>
              </div>

              {/* Quick Facts */}
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-xl font-display text-primary-dark mb-4">At a Glance</h3>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-text-light">Born:</span>
                    <span className="font-medium">1946, Ashford, Kent</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-text-light">Location:</span>
                    <span className="font-medium">Hertfordshire, England</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-text-light">Training:</span>
                    <span className="font-medium">Self-taught</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-text-light">Full-time since:</span>
                    <span className="font-medium">1998</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-text-light">Medium:</span>
                    <span className="font-medium">Oil on canvas</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-text-light">Speciality:</span>
                    <span className="font-medium">Still life</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-text-light">Inspiration:</span>
                    <span className="font-medium">Dutch Masters</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Recognition */}
      <section className="py-20 bg-white">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-display text-primary-dark mb-4">Recognition & Exhibitions</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-background-gallery p-8 rounded-lg"
            >
              <h3 className="text-xl font-display text-primary-dark mb-4">Critical Recognition</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-accent-gold">Saatchi Online Magazine (2009)</h4>
                  <p className="text-text-dark text-sm">
                    Featured artist with critic Ana Finel Honigman praising Anne as a 
                    "self-taught artist" whose work "benefited from being untouched by 
                    art school training."
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-background-gallery p-8 rounded-lg"
            >
              <h3 className="text-xl font-display text-primary-dark mb-4">Exhibition History</h3>
              <div className="space-y-2 text-text-dark text-sm">
                <p>• Exhibitions throughout Hertfordshire</p>
                <p>• Shows in Bedfordshire galleries</p>
                <p>• London gallery representations</p>
                <p>• Permanent collections at partner galleries</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 bg-primary-dark text-white">
        <div className="section-container text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-display text-accent-gold mb-4">
              Commission a Personal Still Life
            </h2>
            <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
              Anne accepts commissions for bespoke still life paintings. 
              Discuss your vision for a unique artwork.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="mailto:anne.songhurst@ntlworld.com"
                className="btn-primary"
              >
                Contact Anne
              </a>
              <a 
                href="/galleries"
                className="btn-secondary"
              >
                View Galleries
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}