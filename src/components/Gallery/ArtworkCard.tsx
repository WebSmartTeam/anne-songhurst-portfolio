import { useState } from 'react';
import { motion } from 'framer-motion';
import { EyeIcon, MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import { Artwork } from '../../types';

interface ArtworkCardProps {
  artwork: Artwork;
  onViewDetails: (artwork: Artwork) => void;
  priority?: boolean;
}

export default function ArtworkCard({ artwork, onViewDetails, priority = false }: ArtworkCardProps) {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  const handleImageError = () => {
    setImageError(true);
    setImageLoaded(true);
  };

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="gallery-card group cursor-pointer"
      onClick={() => onViewDetails(artwork)}
    >
      <div className="relative overflow-hidden bg-neutral-warm">
        {/* Loading placeholder */}
        {!imageLoaded && (
          <div className="absolute inset-0 image-loading"></div>
        )}
        
        {/* Main image */}
        {!imageError ? (
          <img
            src={artwork.imagePath}
            alt={artwork.title}
            className={`gallery-image ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
            loading={priority ? 'eager' : 'lazy'}
            onLoad={handleImageLoad}
            onError={handleImageError}
          />
        ) : (
          <div className="aspect-4-3 bg-neutral-warm flex items-center justify-center">
            <p className="text-text-light">Image unavailable</p>
          </div>
        )}

        {/* Overlay on hover */}
        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
          <div className="transform scale-0 group-hover:scale-100 transition-transform duration-300 flex space-x-3">
            <button
              className="p-3 bg-white rounded-full shadow-lg hover:bg-accent-gold hover:text-white transition-colors duration-200"
              onClick={(e) => {
                e.stopPropagation();
                onViewDetails(artwork);
              }}
              aria-label={`View details for ${artwork.title}`}
            >
              <MagnifyingGlassIcon className="h-5 w-5" />
            </button>
            <button
              className="p-3 bg-white rounded-full shadow-lg hover:bg-accent-gold hover:text-white transition-colors duration-200"
              onClick={(e) => {
                e.stopPropagation();
                onViewDetails(artwork);
              }}
              aria-label={`View ${artwork.title}`}
            >
              <EyeIcon className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Availability badge */}
        {artwork.available && (
          <div className="absolute top-3 right-3">
            <span className="bg-green-500 text-white text-xs px-2 py-1 rounded-full font-medium">
              Available
            </span>
          </div>
        )}

        {/* Featured badge */}
        {artwork.featured && (
          <div className="absolute top-3 left-3">
            <span className="bg-accent-gold text-white text-xs px-2 py-1 rounded-full font-medium">
              Featured
            </span>
          </div>
        )}
      </div>

      {/* Artwork information */}
      <div className="p-4">
        <h3 className="artwork-title text-lg font-semibold text-primary-dark mb-1 line-clamp-2">
          {artwork.title}
        </h3>
        
        <div className="space-y-1 text-sm text-text-light">
          {artwork.year && (
            <p>{artwork.year}</p>
          )}
          <p className="font-medium">{artwork.dimensions}</p>
          <p className="italic">{artwork.medium}</p>
          
          {artwork.price && artwork.available && (
            <p className="text-accent-gold font-semibold mt-2">
              {artwork.price}
            </p>
          )}
        </div>

        {artwork.description && (
          <p className="mt-2 text-sm text-text-light line-clamp-2">
            {artwork.description}
          </p>
        )}

        {/* Tags */}
        {artwork.tags && artwork.tags.length > 0 && (
          <div className="mt-3 flex flex-wrap gap-1">
            {artwork.tags.slice(0, 3).map((tag, index) => (
              <span
                key={index}
                className="text-xs bg-neutral-cream text-text-dark px-2 py-1 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </motion.div>
  );
}