import { Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import HomePage from './pages/HomePage';
import GalleriesPage from './pages/GalleriesPage';
import { GalleryGrid } from './components/Gallery';
import { recentWorksData, trompeLoeilData, archiveData, offTheEaselData, availableArtworks } from './utils/artworkData';

// Simple placeholder components for routes not yet implemented
const AboutPage = () => (
  <div className="min-h-screen bg-primary-light py-20">
    <div className="section-container text-center">
      <h1 className="page-header">About Anne Songhurst</h1>
      <p className="text-lg text-text-light max-w-3xl mx-auto">
        This page is coming soon. Please visit the contact page to learn more about Anne's background and artistic journey.
      </p>
    </div>
  </div>
);

const ContactPage = () => (
  <div className="min-h-screen bg-primary-light py-20">
    <div className="section-container text-center">
      <h1 className="page-header">Contact</h1>
      <div className="max-w-2xl mx-auto space-y-6">
        <p className="text-lg text-text-light">
          Get in touch with Anne Songhurst for commissions, enquiries, or to purchase artwork.
        </p>
        <div className="bg-white p-8 rounded-lg shadow-lg">
          <h2 className="text-2xl font-display text-primary-dark mb-4">Contact Information</h2>
          <div className="space-y-4 text-left">
            <div>
              <h3 className="font-semibold text-primary-dark">Email</h3>
              <a href="mailto:anne.songhurst@ntlworld.com" className="text-accent-gold hover:underline">
                anne.songhurst@ntlworld.com
              </a>
            </div>
            <div>
              <h3 className="font-semibold text-primary-dark">Social Media</h3>
              <div className="space-x-4">
                <a href="https://www.instagram.com/annesonghurst/" target="_blank" rel="noopener noreferrer" className="text-accent-gold hover:underline">
                  Instagram
                </a>
                <a href="https://www.pinterest.co.uk/annesonghurstart/" target="_blank" rel="noopener noreferrer" className="text-accent-gold hover:underline">
                  Pinterest
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const ExhibitionsPage = () => (
  <div className="min-h-screen bg-primary-light py-20">
    <div className="section-container text-center">
      <h1 className="page-header">Exhibitions</h1>
      <p className="text-lg text-text-light max-w-3xl mx-auto">
        Exhibition information coming soon. Anne's work is currently represented at Wren Gallery (Burford), 
        Norton Way Gallery (Letchworth), and The Marylebone Gallery (London).
      </p>
    </div>
  </div>
);

const NewsPage = () => (
  <div className="min-h-screen bg-primary-light py-20">
    <div className="section-container text-center">
      <h1 className="page-header">News</h1>
      <p className="text-lg text-text-light max-w-3xl mx-auto">
        Latest news and updates coming soon. Follow Anne on Instagram @annesonghurst for the latest updates.
      </p>
    </div>
  </div>
);

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        
        {/* Galleries */}
        <Route path="/galleries" element={<GalleriesPage />} />
        <Route 
          path="/galleries/recent-works" 
          element={
            <div className="min-h-screen bg-primary-light py-20">
              <div className="section-container">
                <GalleryGrid 
                  artworks={recentWorksData}
                  title="Recent Works"
                  description="Latest paintings showcasing Anne's contemporary approach to still life, featuring everyday objects transformed through masterful technique and Dutch Master-inspired lighting."
                />
              </div>
            </div>
          } 
        />
        <Route 
          path="/galleries/trompe-loeil" 
          element={
            <div className="min-h-screen bg-primary-light py-20">
              <div className="section-container">
                <GalleryGrid 
                  artworks={trompeLoeilData}
                  title="Trompe L'Oeil"
                  description="Masterful trompe-l'oeil paintings that challenge perception and showcase Anne's extraordinary technical skill in creating three-dimensional illusions on canvas."
                />
              </div>
            </div>
          } 
        />
        <Route 
          path="/galleries/archive" 
          element={
            <div className="min-h-screen bg-primary-light py-20">
              <div className="section-container">
                <GalleryGrid 
                  artworks={archiveData}
                  title="Archive"
                  description="A collection of Anne's earlier masterpieces, showcasing the evolution of her distinctive style and enduring commitment to still life excellence."
                />
              </div>
            </div>
          } 
        />
        <Route 
          path="/galleries/off-the-easel" 
          element={
            <div className="min-h-screen bg-primary-light py-20">
              <div className="section-container">
                <GalleryGrid 
                  artworks={offTheEaselData}
                  title="Off the Easel"
                  description="Fresh works recently completed in Anne's studio, offering collectors the first opportunity to view and acquire her newest creations."
                />
              </div>
            </div>
          } 
        />
        <Route 
          path="/galleries/available" 
          element={
            <div className="min-h-screen bg-primary-light py-20">
              <div className="section-container">
                <GalleryGrid 
                  artworks={availableArtworks}
                  title="Available Works"
                  description="Paintings currently available for purchase. Contact Anne directly for pricing and shipping information."
                />
              </div>
            </div>
          } 
        />

        {/* Other pages */}
        <Route path="/about" element={<AboutPage />} />
        <Route path="/exhibitions" element={<ExhibitionsPage />} />
        <Route path="/news" element={<NewsPage />} />
        <Route path="/contact" element={<ContactPage />} />
        
        {/* 404 */}
        <Route 
          path="*" 
          element={
            <div className="min-h-screen bg-primary-light py-20">
              <div className="section-container text-center">
                <h1 className="text-4xl font-display text-primary-dark mb-4">Page Not Found</h1>
                <p className="text-lg text-text-light mb-8">
                  The page you're looking for doesn't exist.
                </p>
                <a href="/" className="btn-primary">
                  Return Home
                </a>
              </div>
            </div>
          } 
        />
      </Routes>
    </Layout>
  );
}

export default App;