import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Dialog } from '@headlessui/react';
import { 
  XMarkIcon, 
  ChevronLeftIcon, 
  ChevronRightIcon,
  HeartIcon
} from '@heroicons/react/24/outline';
import { HeartIcon as HeartSolidIcon } from '@heroicons/react/24/solid';
import { Artwork } from '../../types';

interface ArtworkModalProps {
  artwork: Artwork | null;
  isOpen: boolean;
  onClose: () => void;
  onNext?: () => void;
  onPrevious?: () => void;
  showNavigation?: boolean;
}

export default function ArtworkModal({ 
  artwork, 
  isOpen, 
  onClose, 
  onNext, 
  onPrevious, 
  showNavigation = false 
}: ArtworkModalProps) {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [isFavorited, setIsFavorited] = useState(false);
  const [zoomLevel, setZoomLevel] = useState(1);
  const [imagePosition, setImagePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    if (artwork) {
      setImageLoaded(false);
      setZoomLevel(1);
      setImagePosition({ x: 0, y: 0 });
    }
  }, [artwork]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;
      
      switch (e.key) {
        case 'Escape':
          onClose();
          break;
        case 'ArrowLeft':
          if (onPrevious && showNavigation) onPrevious();
          break;
        case 'ArrowRight':
          if (onNext && showNavigation) onNext();
          break;
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose, onNext, onPrevious, showNavigation]);

  const handleImageClick = (e: React.MouseEvent) => {
    if (zoomLevel === 1) {
      setZoomLevel(2);
      const rect = e.currentTarget.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width;
      const y = (e.clientY - rect.top) / rect.height;
      setImagePosition({ 
        x: (0.5 - x) * 100, 
        y: (0.5 - y) * 100 
      });
    } else {
      setZoomLevel(1);
      setImagePosition({ x: 0, y: 0 });
    }
  };


  if (!artwork) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <Dialog
          as={motion.div}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          open={isOpen}
          onClose={onClose}
          className="fixed inset-0 z-50 overflow-y-auto"
        >
          <div className="flex min-h-screen items-center justify-center p-4">
            <Dialog.Overlay className="fixed inset-0 bg-black bg-opacity-75" />
            
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="relative bg-white rounded-lg shadow-2xl max-w-7xl w-full max-h-[90vh] overflow-hidden"
            >
              {/* Header */}
              <div className="absolute top-0 left-0 right-0 z-10 bg-gradient-to-b from-black/50 to-transparent p-4">
                <div className="flex justify-between items-start">
                  <div className="text-white">
                    <h2 className="text-xl font-display font-semibold">{artwork.title}</h2>
                    {artwork.year && (
                      <p className="text-sm opacity-90">{artwork.year}</p>
                    )}
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <button
                      onClick={() => setIsFavorited(!isFavorited)}
                      className="p-2 rounded-full bg-black/20 hover:bg-black/40 transition-colors"
                      aria-label="Add to favorites"
                    >
                      {isFavorited ? (
                        <HeartSolidIcon className="h-5 w-5 text-red-500" />
                      ) : (
                        <HeartIcon className="h-5 w-5 text-white" />
                      )}
                    </button>
                    
                    <button
                      onClick={onClose}
                      className="p-2 rounded-full bg-black/20 hover:bg-black/40 transition-colors"
                      aria-label="Close modal"
                    >
                      <XMarkIcon className="h-5 w-5 text-white" />
                    </button>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 h-full">
                {/* Image Section */}
                <div className="lg:col-span-2 relative bg-neutral-warm flex items-center justify-center min-h-[60vh] lg:min-h-[80vh]">
                  {!imageLoaded && (
                    <div className="absolute inset-0 image-loading"></div>
                  )}
                  
                  <img
                    src={artwork.imagePath}
                    alt={artwork.title}
                    className={`max-h-full max-w-full object-contain cursor-zoom-in transition-all duration-300 ${
                      imageLoaded ? 'opacity-100' : 'opacity-0'
                    }`}
                    style={{
                      transform: `scale(${zoomLevel}) translate(${imagePosition.x}px, ${imagePosition.y}px)`,
                      cursor: zoomLevel > 1 ? 'zoom-out' : 'zoom-in'
                    }}
                    onLoad={() => setImageLoaded(true)}
                    onClick={handleImageClick}
                  />

                  {/* Navigation arrows */}
                  {showNavigation && (
                    <>
                      {onPrevious && (
                        <button
                          onClick={onPrevious}
                          className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/20 hover:bg-black/40 text-white transition-colors"
                          aria-label="Previous artwork"
                        >
                          <ChevronLeftIcon className="h-6 w-6" />
                        </button>
                      )}
                      
                      {onNext && (
                        <button
                          onClick={onNext}
                          className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/20 hover:bg-black/40 text-white transition-colors"
                          aria-label="Next artwork"
                        >
                          <ChevronRightIcon className="h-6 w-6" />
                        </button>
                      )}
                    </>
                  )}

                  {zoomLevel > 1 && (
                    <div className="absolute bottom-4 left-4 bg-black/20 text-white px-3 py-1 rounded-full text-sm">
                      Click to zoom out
                    </div>
                  )}
                </div>

                {/* Details Section */}
                <div className="p-6 bg-white overflow-y-auto">
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-2xl font-display text-primary-dark mb-4">
                        {artwork.title}
                      </h3>
                      
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span className="text-text-light">Dimensions:</span>
                          <span className="font-medium">{artwork.dimensions}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </Dialog>
      )}
    </AnimatePresence>
  );
}