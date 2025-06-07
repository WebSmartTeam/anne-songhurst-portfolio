import { motion } from 'framer-motion';
import { useState } from 'react';
import { useForm } from 'react-hook-form';

interface ContactForm {
  name: string;
  email: string;
  subject: string;
  message: string;
  artworkInterest?: string;
  phone?: string;
}

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const { register, handleSubmit, formState: { errors }, reset } = useForm<ContactForm>();

  const onSubmit = (data: ContactForm) => {
    // Create mailto link with form data
    const subject = encodeURIComponent(data.subject || 'Enquiry from Anne Songhurst Website');
    const body = encodeURIComponent(`
Hello Anne,

${data.message}

${data.artworkInterest ? `\nArtwork of Interest: ${data.artworkInterest}` : ''}
${data.phone ? `\nPhone: ${data.phone}` : ''}

Best regards,
${data.name}
${data.email}
    `);
    
    window.location.href = `mailto:anne.songhurst@ntlworld.com?subject=${subject}&body=${body}`;
    setSubmitted(true);
    reset();
  };

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
            <h1 className="page-header">Contact Anne Songhurst</h1>
            <p className="text-lg text-text-light max-w-3xl mx-auto leading-relaxed">
              Get in touch for commissions, enquiries about available works, 
              or to discuss your interest in Anne's contemporary still life paintings.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-8">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-white p-8 rounded-lg shadow-lg"
            >
              <h2 className="text-2xl font-display text-primary-dark mb-6">Send a Message</h2>
              
              {submitted && (
                <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg">
                  <p className="text-green-800">
                    Your message has been prepared! Your email client should open shortly.
                  </p>
                </div>
              )}

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-text-dark mb-2">
                      Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      {...register('name', { required: 'Name is required' })}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent-gold focus:border-transparent"
                    />
                    {errors.name && (
                      <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-text-dark mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      {...register('email', { 
                        required: 'Email is required',
                        pattern: {
                          value: /^\S+@\S+$/i,
                          message: 'Invalid email address'
                        }
                      })}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent-gold focus:border-transparent"
                    />
                    {errors.email && (
                      <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
                    )}
                  </div>
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-text-dark mb-2">
                    Phone (optional)
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    {...register('phone')}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent-gold focus:border-transparent"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-text-dark mb-2">
                    Subject
                  </label>
                  <select
                    id="subject"
                    {...register('subject')}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent-gold focus:border-transparent"
                  >
                    <option value="General Enquiry">General Enquiry</option>
                    <option value="Commission Request">Commission Request</option>
                    <option value="Purchase Enquiry">Purchase Enquiry</option>
                    <option value="Gallery Partnership">Gallery Partnership</option>
                    <option value="Press/Media">Press/Media</option>
                    <option value="Exhibition Opportunity">Exhibition Opportunity</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="artworkInterest" className="block text-sm font-medium text-text-dark mb-2">
                    Specific Artwork Interest (optional)
                  </label>
                  <input
                    type="text"
                    id="artworkInterest"
                    {...register('artworkInterest')}
                    placeholder="e.g., Silver Jug with Cherries, Trompe-l'oeil pieces, etc."
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent-gold focus:border-transparent"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-text-dark mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    rows={6}
                    {...register('message', { required: 'Message is required' })}
                    placeholder="Please tell Anne about your enquiry, commission ideas, or any questions you may have..."
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent-gold focus:border-transparent"
                  />
                  {errors.message && (
                    <p className="mt-1 text-sm text-red-600">{errors.message.message}</p>
                  )}
                </div>

                <button
                  type="submit"
                  className="w-full btn-primary"
                >
                  Send Message
                </button>
              </form>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-6"
            >
              {/* Contact Details */}
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h2 className="text-2xl font-display text-primary-dark mb-6">Contact Information</h2>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <svg className="w-5 h-5 text-accent-gold mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.95a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <div>
                      <h3 className="font-semibold text-primary-dark">Email</h3>
                      <a href="mailto:anne.songhurst@ntlworld.com" className="text-accent-gold hover:underline">
                        anne.songhurst@ntlworld.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <svg className="w-5 h-5 text-accent-gold mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <div>
                      <h3 className="font-semibold text-primary-dark">Location</h3>
                      <p className="text-text-light">Hertfordshire, England</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <svg className="w-5 h-5 text-accent-gold mt-1" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                    <div>
                      <h3 className="font-semibold text-primary-dark">Social Media</h3>
                      <div className="space-y-1">
                        <a href="https://www.instagram.com/annesonghurst/" target="_blank" rel="noopener noreferrer" className="block text-accent-gold hover:underline">
                          @annesonghurst
                        </a>
                        <a href="https://www.pinterest.co.uk/annesonghurstart/" target="_blank" rel="noopener noreferrer" className="block text-accent-gold hover:underline">
                          Pinterest Gallery
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Commission Information */}
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-xl font-display text-primary-dark mb-4">Commission Information</h3>
                <div className="space-y-3 text-sm text-text-dark">
                  <p>
                    <strong>Commission Process:</strong> Anne accepts a limited number of 
                    commissions each year for bespoke still life paintings.
                  </p>
                  <p>
                    <strong>Timeline:</strong> Typically 8-12 weeks from initial consultation 
                    to completion, depending on size and complexity.
                  </p>
                  <p>
                    <strong>Sizes Available:</strong> From intimate 8"x8" studies to 
                    large 18"x24" statement pieces.
                  </p>
                  <p>
                    <strong>Subject Matter:</strong> Still life compositions featuring 
                    objects of personal significance, antique vessels, and seasonal produce.
                  </p>
                </div>
              </div>

              {/* Gallery Representation */}
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-xl font-display text-primary-dark mb-4">Gallery Partners</h3>
                <div className="space-y-3">
                  <div>
                    <h4 className="font-semibold text-primary-dark">Wren Gallery</h4>
                    <p className="text-sm text-text-light">Burford, Oxfordshire</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary-dark">Norton Way Gallery</h4>
                    <p className="text-sm text-text-light">Letchworth, Hertfordshire</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary-dark">The Marylebone Gallery</h4>
                    <p className="text-sm text-text-light">London</p>
                  </div>
                </div>
              </div>

              {/* Studio Image */}
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <img
                  src="/images/contact/anne-songhurst-mixedcolour.jpg"
                  alt="Anne Songhurst with palette"
                  className="w-full rounded-lg"
                />
                <p className="text-sm text-text-light text-center mt-3 italic">
                  Anne in her Hertfordshire studio
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}