import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { AdjustmentsHorizontalIcon, MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import { Artwork } from '../../types';
import ArtworkCard from './ArtworkCard';
import ArtworkModal from './ArtworkModal';

interface GalleryGridProps {
  artworks: Artwork[];
  title?: string;
  description?: string;
  showFilters?: boolean;
  columns?: 'auto' | 2 | 3 | 4;
}

export default function GalleryGrid({ 
  artworks, 
  title, 
  description, 
  showFilters = true,
  columns = 'auto'
}: GalleryGridProps) {
  const [selectedArtwork, setSelectedArtwork] = useState<Artwork | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState<'title' | 'year' | 'price'>('title');
  const [filterBy, setFilterBy] = useState<'all' | 'available' | 'sold'>('all');
  const [showFiltersPanel, setShowFiltersPanel] = useState(false);

  // Filter and sort artworks
  const filteredAndSortedArtworks = useMemo(() => {
    let filtered = artworks.filter(artwork => {
      const matchesSearch = artwork.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           artwork.description?.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           artwork.tags?.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
      
      const matchesFilter = filterBy === 'all' || 
                           (filterBy === 'available' && artwork.available) ||
                           (filterBy === 'sold' && !artwork.available);
      
      return matchesSearch && matchesFilter;
    });

    // Sort artworks
    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'year':
          return (b.year || 0) - (a.year || 0);
        case 'price':
          // Simple price sorting (would need proper price parsing in real app)
          return a.title.localeCompare(b.title);
        default:
          return a.title.localeCompare(b.title);
      }
    });

    return filtered;
  }, [artworks, searchTerm, sortBy, filterBy]);

  const handleArtworkClick = (artwork: Artwork) => {
    setSelectedArtwork(artwork);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedArtwork(null);
  };

  const handleNext = () => {
    if (!selectedArtwork) return;
    const currentIndex = filteredAndSortedArtworks.findIndex(art => art.id === selectedArtwork.id);
    const nextIndex = (currentIndex + 1) % filteredAndSortedArtworks.length;
    setSelectedArtwork(filteredAndSortedArtworks[nextIndex]);
  };

  const handlePrevious = () => {
    if (!selectedArtwork) return;
    const currentIndex = filteredAndSortedArtworks.findIndex(art => art.id === selectedArtwork.id);
    const prevIndex = currentIndex === 0 ? filteredAndSortedArtworks.length - 1 : currentIndex - 1;
    setSelectedArtwork(filteredAndSortedArtworks[prevIndex]);
  };

  const getGridColumns = () => {
    if (columns === 'auto') {
      return 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4';
    }
    return `grid-cols-1 sm:grid-cols-2 lg:grid-cols-${Math.min(columns, 3)} xl:grid-cols-${columns}`;
  };

  return (
    <div className="w-full">
      {/* Header */}
      {(title || description) && (
        <div className="text-center mb-12">
          {title && (
            <h1 className="page-header">{title}</h1>
          )}
          {description && (
            <p className="text-lg text-text-light max-w-3xl mx-auto leading-relaxed">
              {description}
            </p>
          )}
        </div>
      )}

      {/* Search and Filters */}
      {showFilters && (
        <div className="mb-8">
          <div className="flex flex-col md:flex-row gap-4 mb-4">
            {/* Search */}
            <div className="relative flex-1">
              <MagnifyingGlassIcon className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-text-light" />
              <input
                type="text"
                placeholder="Search artworks..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent-gold focus:border-transparent"
              />
            </div>

            {/* Filters toggle */}
            <button
              onClick={() => setShowFiltersPanel(!showFiltersPanel)}
              className="btn-secondary flex items-center space-x-2"
            >
              <AdjustmentsHorizontalIcon className="h-5 w-5" />
              <span>Filters</span>
            </button>
          </div>

          {/* Filters panel */}
          <AnimatePresence>
            {showFiltersPanel && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                className="overflow-hidden bg-neutral-cream rounded-lg p-4 mb-4"
              >
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-text-dark mb-2">
                      Sort by
                    </label>
                    <select
                      value={sortBy}
                      onChange={(e) => setSortBy(e.target.value as typeof sortBy)}
                      className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-accent-gold focus:border-transparent"
                    >
                      <option value="title">Title (A-Z)</option>
                      <option value="year">Year (Newest first)</option>
                      <option value="price">Price</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-text-dark mb-2">
                      Availability
                    </label>
                    <select
                      value={filterBy}
                      onChange={(e) => setFilterBy(e.target.value as typeof filterBy)}
                      className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-accent-gold focus:border-transparent"
                    >
                      <option value="all">All artworks</option>
                      <option value="available">Available only</option>
                      <option value="sold">Sold works</option>
                    </select>
                  </div>

                  <div className="flex items-end">
                    <button
                      onClick={() => {
                        setSearchTerm('');
                        setSortBy('title');
                        setFilterBy('all');
                      }}
                      className="text-sm text-accent-gold hover:underline"
                    >
                      Clear all filters
                    </button>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Results count */}
          <div className="flex justify-between items-center mb-6">
            <p className="text-sm text-text-light">
              Showing {filteredAndSortedArtworks.length} of {artworks.length} artworks
            </p>
            
            {searchTerm && (
              <p className="text-sm text-text-light">
                Results for "{searchTerm}"
              </p>
            )}
          </div>
        </div>
      )}

      {/* Gallery Grid */}
      {filteredAndSortedArtworks.length > 0 ? (
        <motion.div
          layout
          className={`grid gap-6 ${getGridColumns()}`}
        >
          {filteredAndSortedArtworks.map((artwork, index) => (
            <ArtworkCard
              key={artwork.id}
              artwork={artwork}
              onViewDetails={handleArtworkClick}
              priority={index < 8} // Prioritize first 8 images for loading
            />
          ))}
        </motion.div>
      ) : (
        <div className="text-center py-12">
          <p className="text-lg text-text-light mb-4">
            {searchTerm ? 'No artworks found matching your search.' : 'No artworks available.'}
          </p>
          {searchTerm && (
            <button
              onClick={() => setSearchTerm('')}
              className="text-accent-gold hover:underline"
            >
              Clear search
            </button>
          )}
        </div>
      )}

      {/* Artwork Modal */}
      <ArtworkModal
        artwork={selectedArtwork}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        onNext={handleNext}
        onPrevious={handlePrevious}
        showNavigation={filteredAndSortedArtworks.length > 1}
      />
    </div>
  );
}