'use client';

import { useEffect, useRef } from 'react';
import { X } from 'lucide-react';

// Microcomponent: Close button
interface CloseButtonProps {
  onClick: () => void;
}

const CloseButton = ({ onClick }: CloseButtonProps) => (
  <button
    onClick={onClick}
    className="absolute top-4 right-4 z-10 cursor-pointer rounded-full bg-black/70 p-2 text-white transition-colors hover:bg-black/90"
    aria-label="Close video"
  >
    <X size={24} />
  </button>
);

// Microcomponent: Video player
interface VideoPlayerProps {
  src: string;
  title: string;
  autoPlay?: boolean;
  controls?: boolean;
}

const VideoPlayer = ({ src, title, autoPlay = true, controls = true }: VideoPlayerProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    return () => {
      if (videoRef.current) {
        videoRef.current.pause();
      }
    };
  }, []);

  return (
    <video
      ref={videoRef}
      className="max-h-[80vh] max-w-full rounded-lg shadow-2xl"
      controls={controls}
      autoPlay={autoPlay}
      playsInline
      preload="auto"
      src={src}
      aria-label={title}
    >
      <source src={src} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  );
};

// Main Video Modal component
interface VideoModalProps {
  isOpen: boolean;
  videoSrc: string;
  title: string;
  onClose: () => void;
  autoPlay?: boolean;
  controls?: boolean;
}

export const VideoModal = ({
  isOpen,
  videoSrc,
  title,
  onClose,
  autoPlay = true,
  controls = true,
}: VideoModalProps) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isOpen, onClose]);

  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
      onClick={handleBackdropClick}
    >
      <div className="relative w-full max-w-5xl p-4">
        <CloseButton onClick={onClose} />

        <div className="flex items-center justify-center">
          <VideoPlayer src={videoSrc} title={title} autoPlay={autoPlay} controls={controls} />
        </div>
      </div>
    </div>
  );
};
