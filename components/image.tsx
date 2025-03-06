'use client'

import NextImage, { ImageProps as NextImageProps } from 'next/image'
import { cn } from '@/lib/utils'
import { useEffect, useRef, useState } from 'react'
import { X } from 'lucide-react'

interface ImageProps extends Omit<NextImageProps, 'alt'> {
  alt?: string
  caption?: string
  className?: string
  containerClassName?: string
  priority?: boolean
  zoomable?: boolean
  lazyLoad?: boolean
}

const Image = ({
  alt = '',
  caption,
  className,
  containerClassName,
  priority = false,
  zoomable = true,
  lazyLoad = true,
  ...props
}: ImageProps) => {
  const [isLoading, setIsLoading] = useState(true)
  const [isError, setIsError] = useState(false)
  const [isZoomed, setIsZoomed] = useState(false)
  const [shouldRender, setShouldRender] = useState(!lazyLoad || priority)
  const [errorMessage, setErrorMessage] = useState<string>('')
  const [useFallback, setUseFallback] = useState(false)
  const imageRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    console.log('Image props:', props)
  }, [props])

  useEffect(() => {
    if (!lazyLoad || priority || shouldRender) return

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setShouldRender(true)
          observer.disconnect()
        }
      },
      {
        rootMargin: '200px', // 提前200px加载
        threshold: 0.01,
      }
    )

    if (imageRef.current) {
      observer.observe(imageRef.current)
    }

    return () => {
      observer.disconnect()
    }
  }, [lazyLoad, priority, shouldRender])

  useEffect(() => {
    if (props.src) {
      console.log('Image component mounted with props:', {
        src: props.src,
        width: props.width,
        height: props.height,
        priority: priority,
        className: className,
        alt: alt
      });

      // 预加载图片
      const preloadImage = new globalThis.Image();
      preloadImage.onload = () => {
        console.log('Image preloaded successfully:', props.src);
      };
      preloadImage.onerror = () => {
        console.error('Image preload failed');
      };
      preloadImage.src = typeof props.src === 'string' ? props.src : props.src.toString();
    }
  }, [props.src, props.width, props.height, priority, className, alt]);

  const handleImageClick = () => {
    if (zoomable && !isError) {
      setIsZoomed(true)
      document.body.style.overflow = 'hidden'
    }
  }

  const handleCloseZoom = () => {
    setIsZoomed(false)
    document.body.style.overflow = ''
  }

  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    const imgElement = e.target as HTMLImageElement;
    console.error('Image load error details:', {
      src: imgElement.src,
      naturalWidth: imgElement.naturalWidth,
      naturalHeight: imgElement.naturalHeight,
      complete: imgElement.complete,
      currentSrc: imgElement.currentSrc,
      originalSrc: props.src,
      baseURL: window.location.origin,
      fullURL: new URL(imgElement.src).href
    });
    
    setIsLoading(false);
    setIsError(true);
    
    if (typeof props.src === 'string') {
      const imagePath = props.src.startsWith('/') ? props.src : `/${props.src}`;
      const fullUrl = `${window.location.origin}${imagePath}`;
      setErrorMessage(`尝试加载图片: ${fullUrl}`);
      
      // 尝试直接使用完整URL
      const img = new globalThis.Image();
      img.onload = () => {
        console.log('Image loaded successfully with full URL');
        setIsError(false);
        setUseFallback(true);
      };
      img.onerror = () => {
        console.error('Failed to load image with full URL');
        setUseFallback(false);
      };
      img.src = fullUrl;
    } else {
      setErrorMessage(`图片加载失败: ${JSON.stringify(props.src)}`);
      setUseFallback(false);
    }
  };

  return (
    <>
      <figure className={cn("my-8", containerClassName)}>
        <div 
          ref={imageRef}
          className={cn(
            "overflow-hidden rounded-md border bg-muted transition-colors relative",
            "max-w-[400px] mx-auto",
            isLoading ? "bg-muted" : "bg-background",
            !isError && zoomable && "cursor-pointer",
            className
          )}
          onClick={handleImageClick}
          style={{ 
            minHeight: shouldRender ? undefined : '200px',
            maxHeight: '300px',
          }}
        >
          {isLoading && (
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="h-8 w-8 animate-spin rounded-full border-4 border-primary border-t-transparent"></div>
            </div>
          )}
          
          {isError ? (
            useFallback ? (
              <img 
                src={typeof props.src === 'string' ? props.src : '/placeholder.jpg'} 
                alt={alt}
                width={props.width}
                height={props.height}
                className="h-auto w-full object-cover"
                onLoad={() => {
                  console.log('Fallback image loaded successfully');
                  setIsLoading(false);
                  setIsError(false);
                }}
                onError={(e) => {
                  console.error('Fallback image load failed:', e);
                  setIsLoading(false);
                  setIsError(true);
                  setUseFallback(false);
                  setErrorMessage('所有图片加载尝试均失败');
                }}
              />
            ) : (
              <div className="flex h-48 w-full flex-col items-center justify-center bg-muted p-4">
                <span className="text-sm text-muted-foreground mb-2">图片加载失败</span>
                {errorMessage && (
                  <span className="text-xs text-red-500">{errorMessage}</span>
                )}
                <button 
                  className="mt-2 px-3 py-1 text-xs bg-blue-500 text-white rounded hover:bg-blue-600"
                  onClick={() => {
                    setIsError(false);
                    setIsLoading(true);
                    setUseFallback(false);
                    setErrorMessage('');
                  }}
                >
                  重试
                </button>
              </div>
            )
          ) : shouldRender ? (
            <NextImage
              className={cn(
                "transition-opacity duration-300",
                "w-full h-[300px]",
                "object-contain bg-muted",
                isLoading ? "opacity-0" : "opacity-100"
              )}
              alt={alt}
              onLoad={() => setIsLoading(false)}
              onError={handleImageError}
              priority={priority}
              quality={90}
              {...props}
            />
          ) : null}
        </div>
        {caption && (
          <figcaption className="mt-2 text-center text-sm text-muted-foreground">
            {caption}
          </figcaption>
        )}
      </figure>

      {isZoomed && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
          onClick={handleCloseZoom}
        >
          <button 
            className="absolute right-4 top-4 rounded-full bg-black/50 p-2 text-white hover:bg-black/70"
            onClick={(e) => {
              e.stopPropagation()
              handleCloseZoom()
            }}
          >
            <X className="h-6 w-6" />
          </button>
          <div 
            className="relative max-h-[90vh] max-w-[90vw] overflow-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <NextImage
              {...props}
              alt={alt}
              className="h-auto w-auto max-h-[90vh] max-w-[90vw] object-contain"
              sizes="90vw"
              quality={90}
            />
            {caption && (
              <div className="mt-2 text-center text-sm text-white/80">
                {caption}
              </div>
            )}
          </div>
        </div>
      )}
    </>
  )
}

export default Image 