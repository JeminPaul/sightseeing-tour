import React, { useState, useEffect, useRef } from 'react';

// Define the Review type
interface Review {
  id: number;
  author: string;
  rating: number;
  date: string;
  comment: string;
  avatar: string;
}

// Props for the ReviewSection component
interface ReviewSectionProps {
  googleBusinessUrl?: string;
  initialReviews?: Review[]; // Accept initial reviews from props
  onAddReview?: (review: Review) => void; // Callback when a review is added
}

const ReviewSection: React.FC<ReviewSectionProps> = ({ 
  googleBusinessUrl = "https://g.page/r/CVU8X-0iknfYEAE/review",  // Updated with your Google review link
  initialReviews = [],
  onAddReview 
}) => {
  // Sample dummy reviews data - use initialReviews if provided, otherwise use defaults
  const defaultReviews: Review[] = [
    {
      id: 1,
      author: "Sarah Johnson",
      rating: 5,
      date: "March 15, 2025",
      comment: "The tour was absolutely amazing! Our guide was knowledgeable and the luxury car was spotless. Highly recommend their mountain sunset package!",
      avatar: "/api/placeholder/50/50"
    },
    {
      id: 2,
      author: "Michael Chen",
      rating: 5,
      date: "March 10, 2025",
      comment: "We booked the coastal drive tour and it exceeded all expectations. The vehicle was comfortable and our driver knew all the best photo spots!",
      avatar: "/api/placeholder/50/50"
    },
    {
      id: 3,
      author: "Emma Rodriguez",
      rating: 4,
      date: "February 28, 2025",
      comment: "Great experience with their city tour package. The Mercedes they provided was luxurious and made the trip even more special.",
      avatar: "/api/placeholder/50/50"
    },
    {
      id: 4,
      author: "David Wilson",
      rating: 5,
      date: "February 20, 2025",
      comment: "My family loved the vineyard tour! The SUV was spacious and comfortable for all 6 of us. Our guide was fantastic and patient with our kids.",
      avatar: "/api/placeholder/50/50"
    },
    {
      id: 5,
      author: "Lisa Thompson",
      rating: 5,
      date: "February 12, 2025",
      comment: "Booked their luxury car for our anniversary trip and it made the day perfect. The attention to detail and service was outstanding!",
      avatar: "/api/placeholder/50/50"
    }
  ];

  // State for reviews
  const [reviews, setReviews] = useState<Review[]>(initialReviews.length > 0 ? initialReviews : defaultReviews);
  
  // Form states for adding new reviews - keeping this but we won't show the form UI
  const [showForm, setShowForm] = useState(false);
  const [newReview, setNewReview] = useState<Omit<Review, 'id' | 'date' | 'avatar'>>({
    author: '',
    rating: 5,
    comment: ''
  });
  
  // Update reviews if initialReviews prop changes
  useEffect(() => {
    if (initialReviews.length > 0) {
      setReviews(initialReviews);
    }
  }, [initialReviews]);

  // State for tracking animation and slides
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [slideDirection, setSlideDirection] = useState('next');
  
  // Responsive state for reviews per view
  const [reviewsPerView, setReviewsPerView] = useState(3);
  const [visibleReviews, setVisibleReviews] = useState<Review[]>([]);
  
  // Auto-slide interval (in milliseconds)
  const slideInterval = 5000;
  const animationDuration = 500; // ms for slide transition
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Initialize visible reviews and start auto-slide
  useEffect(() => {
    handleResize();
    startAutoSlide();
    
    // Add resize event listener
    window.addEventListener('resize', handleResize);
    
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Handle window resize to make carousel responsive
  const handleResize = () => {
    const width = window.innerWidth;
    let newReviewsPerView;
    
    if (width < 640) {
      newReviewsPerView = 1;
    } else if (width < 1024) {
      newReviewsPerView = 2;
    } else {
      newReviewsPerView = 3;
    }
    
    if (newReviewsPerView !== reviewsPerView) {
      setReviewsPerView(newReviewsPerView);
      // Reset to first slide when screen size changes
      setCurrentIndex(0);
    }
  };

  // Update visible reviews when reviewsPerView, currentIndex, or reviews changes
  useEffect(() => {
    updateVisibleReviews(currentIndex);
  }, [reviewsPerView, currentIndex, reviews]);

  // Update visible reviews based on current index
  const updateVisibleReviews = (index: number) => {
    const visibleItems: Review[] = [];
    for (let i = 0; i < reviewsPerView; i++) {
      const reviewIndex = (index + i) % reviews.length;
      visibleItems.push(reviews[reviewIndex]);
    }
    setVisibleReviews(visibleItems);
  };

  // Start the auto-slide effect
  const startAutoSlide = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    
    intervalRef.current = setInterval(() => {
      handleSlideChange('next', true);
    }, slideInterval);
  };

  // Pause auto-slide on hover
  const pauseAutoSlide = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  // Resume auto-slide when not hovering
  const resumeAutoSlide = () => {
    if (!intervalRef.current && !isAnimating) {
      startAutoSlide();
    }
  };

  // Calculate next visible index considering reviewsPerView
  const getNextIndex = (direction: 'next' | 'prev') => {
    if (direction === 'next') {
      // Make sure we don't skip any reviews by calculating modulo with respect to reviewsPerView
      return (currentIndex + 1) % reviews.length;
    } else {
      return (currentIndex - 1 + reviews.length) % reviews.length;
    }
  };

  // Handle slide change with animation
  const handleSlideChange = (direction: 'next' | 'prev', isAuto = false) => {
    if (isAnimating) return;
    
    // Reset timer if manually navigating
    if (!isAuto && intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
    
    setIsAnimating(true);
    setSlideDirection(direction);
    
    // Calculate next index
    const nextIndex = getNextIndex(direction);
    
    // Wait for animation to complete
    timeoutRef.current = setTimeout(() => {
      setCurrentIndex(nextIndex);
      setIsAnimating(false);
      
      // Restart auto-slide if it was manually triggered
      if (!isAuto && !intervalRef.current) {
        startAutoSlide();
      }
    }, animationDuration);
  };

  // Navigate to specific review index
  const goToIndex = (index: number) => {
    if (isAnimating || index === currentIndex) return;
    
    // Determine direction based on index
    const direction = index > currentIndex ? 'next' : 'prev';
    
    // Reset auto-slide
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
    
    setIsAnimating(true);
    setSlideDirection(direction);
    
    // Wait for animation to complete
    timeoutRef.current = setTimeout(() => {
      setCurrentIndex(index);
      setIsAnimating(false);
      startAutoSlide();
    }, animationDuration);
  };

  // Handle adding a new review - keeping function but we won't use the UI
  const handleAddReview = () => {
    // Generate a new ID (in a real app, this would be handled by the backend)
    const newId = reviews.length > 0 ? Math.max(...reviews.map(r => r.id)) + 1 : 1;
    
    // Get current date
    const today = new Date();
    const formattedDate = today.toLocaleDateString('en-US', { 
      month: 'long', 
      day: 'numeric', 
      year: 'numeric' 
    });
    
    // Create the new review
    const reviewToAdd: Review = {
      id: newId,
      author: newReview.author,
      rating: newReview.rating,
      comment: newReview.comment,
      date: formattedDate,
      avatar: "/api/placeholder/50/50" // Default placeholder
    };
    
    // Add to reviews array
    const updatedReviews = [...reviews, reviewToAdd];
    setReviews(updatedReviews);
    
    // Call the callback if provided
    if (onAddReview) {
      onAddReview(reviewToAdd);
    }
    
    // Reset form
    setNewReview({
      author: '',
      rating: 5,
      comment: ''
    });
    
    // Hide form
    setShowForm(false);
    
    // Reset carousel
    handleResize();
  };

  // Handle form input changes
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setNewReview(prev => ({
      ...prev,
      [name]: name === 'rating' ? parseInt(value, 10) : value
    }));
  };

  // Render star ratings
  const renderStars = (rating: number) => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      stars.push(
        <span key={i} className={`text-xl ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`}>
          ★
        </span>
      );
    }
    return stars;
  };

  // Render star rating input
  const renderStarInput = () => {
    return (
      <div className="flex items-center mb-4">
        {[1, 2, 3, 4, 5].map((star) => (
          <label key={star} className="cursor-pointer mx-1">
            <input
              type="radio"
              name="rating"
              value={star}
              checked={newReview.rating === star}
              onChange={handleInputChange}
              className="sr-only"
            />
            <span 
              className={`text-2xl ${newReview.rating >= star ? 'text-yellow-400' : 'text-gray-300'} hover:text-yellow-300`}
              title={`${star} star`}
            >
              ★
            </span>
          </label>
        ))}
      </div>
    );
  };

  // Get animation classes based on current state
  const getAnimationClasses = () => {
    if (!isAnimating) return 'transform transition-none';
    
    return slideDirection === 'next'
      ? 'transform transition-transform duration-500 -translate-x-full'
      : 'transform transition-transform duration-500 translate-x-full';
  };

  // Calculate max width based on number of reviews per view
  const getContainerStyle = () => {
    const basePadding = 16; // px
    const cardWidth = reviewsPerView === 1 ? 300 : 280; // px
    const gap = 16; // px
    
    return {
      maxWidth: `${(cardWidth * reviewsPerView) + (gap * (reviewsPerView - 1)) + (basePadding * 2)}px`
    };
  };

  return (
    <div className="w-full py-12 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 rounded-lg shadow-xl overflow-hidden">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-2">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600">What Our</span> Customers Say
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-indigo-600 to-purple-600 mx-auto mb-6 rounded-full"></div>
          <p className="text-gray-700 max-w-2xl mx-auto text-lg">
            Discover why our customers love our luxury car tours and packages
          </p>
        </div>
        
        {/* Write a Review button - modified to only show Google Business link */}
        <div className="flex justify-center gap-4 mb-10">
          <a 
            href={googleBusinessUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-green-500 to-emerald-600 text-white font-semibold rounded-lg shadow-md hover:from-green-600 hover:to-emerald-700 transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
          >
            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
            </svg>
            Write a Review on Google
          </a>
        </div>
        
        {/* Add Review Form - keeping but it's hidden */}
        {showForm && (
          <div className="max-w-lg mx-auto mb-12 bg-white p-6 rounded-xl shadow-lg border border-indigo-100">
            <h3 className="text-xl font-bold mb-4 text-indigo-700">Add Your Review</h3>
            <div className="mb-4">
              <label htmlFor="author" className="block text-gray-700 mb-2">Your Name</label>
              <input
                type="text"
                id="author"
                name="author"
                value={newReview.author}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                placeholder="Enter your name"
                required
              />
            </div>
            
            <div className="mb-4">
              <label className="block text-gray-700 mb-2">Your Rating</label>
              {renderStarInput()}
            </div>
            
            <div className="mb-6">
              <label htmlFor="comment" className="block text-gray-700 mb-2">Your Comment</label>
              <textarea
                id="comment"
                name="comment"
                value={newReview.comment}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent h-24"
                placeholder="Share your experience..."
                required
              ></textarea>
            </div>
            
            <div className="flex justify-end">
              <button
                onClick={handleAddReview}
                disabled={!newReview.author || !newReview.comment}
                className={`px-6 py-2 rounded-lg ${
                  !newReview.author || !newReview.comment
                    ? 'bg-gray-300 cursor-not-allowed'
                    : 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white hover:from-indigo-700 hover:to-purple-700'
                } font-medium transition-all duration-300`}
              >
                Submit Review
              </button>
            </div>
          </div>
        )}
        
        <div 
          className="relative mx-auto"
          style={getContainerStyle()}
          ref={containerRef}
          onMouseEnter={pauseAutoSlide} 
          onMouseLeave={resumeAutoSlide}
        >
          {/* Navigation arrows */}
          <button 
            onClick={() => handleSlideChange('prev')}
            className="absolute left-0 top-1/2 -translate-y-1/2 -ml-4 sm:-ml-6 md:-ml-8 bg-white p-2 md:p-3 rounded-full shadow-lg z-20 hover:bg-gray-100 transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-indigo-500 border border-indigo-100"
            aria-label="Previous review"
            disabled={isAnimating}
          >
            <svg className="w-5 h-5 md:w-6 md:h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          {/* Reviews carousel with animation container */}
          <div className="relative w-full overflow-hidden">
            <div className={getAnimationClasses()}>
              <div className="flex justify-center gap-4 md:gap-6">
                {visibleReviews.map((review) => (
                  <div 
                    key={review.id} 
                    className="bg-white rounded-xl shadow-xl p-6 w-full sm:w-72 md:w-80 transform transition-all duration-300 hover:scale-105 border border-indigo-100 hover:border-indigo-300 flex flex-col"
                  >
                    <div className="flex items-center mb-4">
                      <div className="relative">
                        <img 
                          src={review.avatar} 
                          alt={`${review.author}'s avatar`} 
                          className="w-12 h-12 rounded-full object-cover mr-4 border-2 border-indigo-500"
                        />
                        <div className="absolute -bottom-1 -right-1 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold">
                          {review.rating}
                        </div>
                      </div>
                      <div>
                        <h3 className="font-bold text-gray-800">{review.author}</h3>
                        <p className="text-sm text-gray-500">{review.date}</p>
                      </div>
                    </div>
                    <div className="mb-3">
                      {renderStars(review.rating)}
                    </div>
                    <p className="text-gray-700 mb-4 italic flex-grow">&ldquo;{review.comment}&rdquo;</p>
                    <div className="h-1 w-24 bg-gradient-to-r from-indigo-400 to-purple-500 rounded-full"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          <button 
            onClick={() => handleSlideChange('next')}
            className="absolute right-0 top-1/2 -translate-y-1/2 -mr-4 sm:-mr-6 md:-mr-8 bg-white p-2 md:p-3 rounded-full shadow-lg z-20 hover:bg-gray-100 transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-indigo-500 border border-indigo-100"
            aria-label="Next review"
            disabled={isAnimating}
          >
            <svg className="w-5 h-5 md:w-6 md:h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
          
          {/* Progress bar with animation */}
          <div className="absolute bottom-0 left-0 w-full h-1 bg-gray-200 rounded-full overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-indigo-600 to-purple-600 transition-all duration-100 ease-linear"
              style={{
                width: isAnimating ? '0%' : '100%',
                transitionDuration: `${slideInterval}ms`,
                animationPlayState: intervalRef.current ? 'running' : 'paused'
              }}
            ></div>
          </div>
        </div>
        
        {/* Indicator dots */}
        <div className="flex justify-center mt-8">
          {Array.from({ length: Math.ceil(reviews.length / reviewsPerView) }).map((_, groupIndex) => {
            const indexToCheck = groupIndex * reviewsPerView % reviews.length;
            return (
              <button
                key={groupIndex}
                onClick={() => goToIndex(indexToCheck)}
                className={`w-3 h-3 mx-1 rounded-full transition-all duration-300 ${
                  currentIndex === indexToCheck || 
                  (currentIndex > indexToCheck && currentIndex < indexToCheck + reviewsPerView)
                    ? 'bg-indigo-600 w-6' 
                    : 'bg-gray-300 hover:bg-indigo-300'
                }`}
                aria-label={`Go to review group ${groupIndex + 1}`}
                disabled={isAnimating}
              ></button>
            );
          })}
        </div>
        
        {/* See All Reviews button - UPDATED with your Google Maps link */}
        <div className="text-center mt-12">
          <a 
            href={googleBusinessUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold rounded-lg shadow-md hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 transform hover:translate-y-1 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50"
          >
            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd"></path>
            </svg>
            See All Reviews on Google
          </a>
        </div>
        
        {/* Review count indicator with animation */}
        <div className="text-center mt-6 text-gray-600">
          <p className="inline-block px-4 py-1 bg-white rounded-full shadow-sm border border-indigo-100">
            Showing {visibleReviews.length} of {reviews.length} reviews
          </p>
        </div>
      </div>
    </div>
  );
};

export default ReviewSection;