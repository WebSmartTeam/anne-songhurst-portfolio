import { Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import HomePage from './pages/HomePage';
import GalleriesPage from './pages/GalleriesPage';
import AboutPage from './pages/AboutPage';
import NewsPage from './pages/NewsPage';
import ContactPage from './pages/ContactPage';
import ExhibitionsPage from './pages/ExhibitionsPage';
import { GalleryGrid } from './components/Gallery';
import { recentWorksData, trompeLoeilData, archiveData, offTheEaselData, availableArtworks } from './utils/artworkData';

// Simple placeholder components for routes not yet implemented




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