'use client';

import { useReducer } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

// Microcomponent: Thumbnail trigger
interface GalleryThumbnailProps {
  image: string;
  title: string;
  className: string;
  onClick: () => void;
}

const GalleryThumbnail = ({ image, title, className, onClick }: GalleryThumbnailProps) => (
  <div
    className={`cursor-pointer ${className}`}
    onClick={onClick}
    role="button"
    tabIndex={0}
    onKeyDown={(e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        onClick();
      }
    }}
  >
    <img
      src={image}
      alt={`${title} - Image 1`}
      className="aspect-auto transition-transform duration-300 group-hover:scale-110"
    />
  </div>
);

// Microcomponent: Close button
interface CloseButtonProps {
  onClick: () => void;
}

const CloseButton = ({ onClick }: CloseButtonProps) => (
  <button
    onClick={onClick}
    className="absolute top-4 right-4 z-10 cursor-pointer rounded-full bg-black/70 p-2 text-white transition-colors hover:bg-black/90 dark:bg-black"
    aria-label="Close gallery"
  >
    <X size={24} />
  </button>
);

// Microcomponent: Navigation button
interface NavButtonProps {
  direction: 'prev' | 'next';
  onClick: () => void;
}

const NavButton = ({ direction, onClick }: NavButtonProps) => {
  const Icon = direction === 'prev' ? ChevronLeft : ChevronRight;
  const position = direction === 'prev' ? 'left-4' : 'right-4';
  const label = direction === 'prev' ? 'Previous image' : 'Next image';

  return (
    <button
      onClick={onClick}
      className={`absolute ${position} cursor-pointer rounded-full text-black/60 transition-all hover:scale-110 hover:text-black`}
      aria-label={label}
    >
      <Icon size={24} />
    </button>
  );
};

// Microcomponent: Image counter
interface ImageCounterProps {
  current: number;
  total: number;
}

const ImageCounter = ({ current, total }: ImageCounterProps) => (
  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 rounded-full bg-black/80 px-4 py-2 text-white">
    {current + 1} / {total}
  </div>
);

// Microcomponent: Thumbnail strip item
interface ThumbnailItemProps {
  image: string;
  title: string;
  index: number;
  isActive: boolean;
  onClick: () => void;
}

const ThumbnailItem = ({ image, title, index, isActive, onClick }: ThumbnailItemProps) => (
  <button
    onClick={onClick}
    className={`relative h-16 w-16 shrink-0 overflow-hidden rounded-lg border-2 transition-all ${
      isActive ? 'border-white opacity-100' : 'border-transparent opacity-60 hover:opacity-100'
    }`}
  >
    <img
      src={image}
      alt={`${title} - Thumbnail ${index + 1}`}
      className="h-full w-full object-cover"
    />
  </button>
);

// Microcomponent: Thumbnail strip
interface ThumbnailStripProps {
  images: string[];
  title: string;
  currentIndex: number;
  onSelectImage: (index: number) => void;
}

const ThumbnailStrip = ({ images, title, currentIndex, onSelectImage }: ThumbnailStripProps) => (
  <div className="absolute bottom-16 left-1/2 flex -translate-x-1/2 gap-2 overflow-x-auto">
    {images.map((image, index) => (
      <ThumbnailItem
        key={index}
        image={image}
        title={title}
        index={index}
        isActive={index === currentIndex}
        onClick={() => onSelectImage(index)}
      />
    ))}
  </div>
);

// Microcomponent: Main image display
interface MainImageProps {
  image: string;
  title: string;
  index: number;
  showNavigation: boolean;
  onPrevious: () => void;
  onNext: () => void;
}

const MainImage = ({ image, title, index, showNavigation, onPrevious, onNext }: MainImageProps) => (
  <div className="relative flex items-center justify-center">
    <img
      src={image}
      alt={`${title} - Image ${index + 1}`}
      className="max-h-[80vh] max-w-full object-contain"
    />

    {showNavigation && (
      <>
        <NavButton direction="prev" onClick={onPrevious} />
        <NavButton direction="next" onClick={onNext} />
      </>
    )}
  </div>
);

interface GalleryModalProps {
  images: string[];
  title: string;
  currentIndex: number;
  onClose: () => void;
  onPrevious: () => void;
  onNext: () => void;
  onSelectImage: (index: number) => void;
}

const GalleryModal = ({
  images,
  title,
  currentIndex,
  onClose,
  onPrevious,
  onNext,
  onSelectImage,
}: GalleryModalProps) => (
  <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 dark:bg-gray-900/50">
    <div className="relative h-full w-full max-w-7xl p-4">
      <CloseButton onClick={onClose} />

      <div className="flex h-full items-center justify-center">
        <MainImage
          image={images[currentIndex]}
          title={title}
          index={currentIndex}
          showNavigation={images.length > 1}
          onPrevious={onPrevious}
          onNext={onNext}
        />
      </div>

      {images.length > 1 && (
        <>
          <ImageCounter current={currentIndex} total={images.length} />
          <ThumbnailStrip
            images={images}
            title={title}
            currentIndex={currentIndex}
            onSelectImage={onSelectImage}
          />
        </>
      )}
    </div>
  </div>
);

// Reducer for gallery state management
interface GalleryState {
  isOpen: boolean;
  currentImageIndex: number;
}

type GalleryAction =
  | { type: 'OPEN_GALLERY'; payload: number }
  | { type: 'CLOSE_GALLERY' }
  | { type: 'GO_TO_PREVIOUS'; payload: number }
  | { type: 'GO_TO_NEXT'; payload: number }
  | { type: 'GO_TO_IMAGE'; payload: number };

const galleryReducer = (state: GalleryState, action: GalleryAction): GalleryState => {
  switch (action.type) {
    case 'OPEN_GALLERY':
      document.body.style.overflow = 'hidden';
      return {
        ...state,
        isOpen: true,
        currentImageIndex: action.payload,
      };
    case 'CLOSE_GALLERY':
      document.body.style.overflow = 'unset';
      return {
        ...state,
        isOpen: false,
      };
    case 'GO_TO_PREVIOUS':
      return {
        ...state,
        currentImageIndex:
          state.currentImageIndex === 0 ? action.payload - 1 : state.currentImageIndex - 1,
      };
    case 'GO_TO_NEXT':
      return {
        ...state,
        currentImageIndex:
          state.currentImageIndex === action.payload - 1 ? 0 : state.currentImageIndex + 1,
      };
    case 'GO_TO_IMAGE':
      return {
        ...state,
        currentImageIndex: action.payload,
      };
    default:
      return state;
  }
};

// Main Gallery component
interface GalleryProps {
  images: string[];
  title: string;
  className?: string;
  thumbnail?: string;
}

export const Gallery = ({ images, title, className = '', thumbnail }: GalleryProps) => {
  const [state, dispatch] = useReducer(galleryReducer, {
    isOpen: false,
    currentImageIndex: 0,
  });

  const openGallery = (index: number = 0) => {
    dispatch({ type: 'OPEN_GALLERY', payload: index });
  };

  const closeGallery = () => {
    dispatch({ type: 'CLOSE_GALLERY' });
  };

  const goToPrevious = () => {
    dispatch({ type: 'GO_TO_PREVIOUS', payload: images.length });
  };

  const goToNext = () => {
    dispatch({ type: 'GO_TO_NEXT', payload: images.length });
  };

  const goToImage = (index: number) => {
    dispatch({ type: 'GO_TO_IMAGE', payload: index });
  };

  if (!images || images.length === 0) {
    return null;
  }

  return (
    <>
      <GalleryThumbnail
        image={thumbnail || images[0]}
        title={title}
        className={className}
        onClick={() => openGallery(0)}
      />

      {state.isOpen && (
        <GalleryModal
          images={images}
          title={title}
          currentIndex={state.currentImageIndex}
          onClose={closeGallery}
          onPrevious={goToPrevious}
          onNext={goToNext}
          onSelectImage={goToImage}
        />
      )}
    </>
  );
};
