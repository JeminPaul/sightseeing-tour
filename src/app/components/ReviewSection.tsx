import React, { useState, useEffect, useRef } from 'react';

interface Review {
  id: number;
  author: string;
  rating: number;
  date: string;
  comment: string;
  avatar: string;
}

interface ReviewSectionProps {
  googleBusinessUrl?: string;
  initialReviews?: Review[];
}

const ReviewSection: React.FC<ReviewSectionProps> = ({
  googleBusinessUrl = 'https://g.page/r/Ca6y7hhyxY1uEAE/review',
  initialReviews = []
}) => {
  const defaultReviews: Review[] = [
    {
      id: 1,
      author: 'Sarah Johnson',
      rating: 5,
      date: 'March 15, 2025',
      comment:
        'The tour was absolutely amazing! Our guide was knowledgeable and the luxury car was spotless.',
      avatar: '/api/placeholder/50/50'
    },
    {
      id: 2,
      author: 'Michael Chen',
      rating: 5,
      date: 'March 10, 2025',
      comment:
        'We booked the coastal drive tour and it exceeded all expectations. Best photo spots!',
      avatar: '/api/placeholder/50/50'
    },
    {
      id: 3,
      author: 'Emma Rodriguez',
      rating: 4,
      date: 'February 28, 2025',
      comment:
        'Great experience with their city tour package. Very comfortable ride.',
      avatar: '/api/placeholder/50/50'
    },
    {
      id: 4,
      author: 'David Wilson',
      rating: 5,
      date: 'February 20, 2025',
      comment:
        'Family loved the vineyard tour. Spacious SUV and fantastic guide!',
      avatar: '/api/placeholder/50/50'
    },
    {
      id: 5,
      author: 'Lisa Thompson',
      rating: 5,
      date: 'February 12, 2025',
      comment:
        'Booked for our anniversary — flawless service and luxury experience.',
      avatar: '/api/placeholder/50/50'
    }
  ];

  const [reviews, setReviews] = useState<Review[]>(
    initialReviews.length ? initialReviews : defaultReviews
  );

  const [currentIndex, setCurrentIndex] = useState(0);
  const [reviewsPerView, setReviewsPerView] = useState(3);
  const [visibleReviews, setVisibleReviews] = useState<Review[]>([]);
  const [isAnimating, setIsAnimating] = useState(false);
  const [direction, setDirection] = useState<'next' | 'prev'>('next');

  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const slideInterval = 5000;
  const animationDuration = 500;

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) setReviewsPerView(1);
      else if (window.innerWidth < 1024) setReviewsPerView(2);
      else setReviewsPerView(3);
      setCurrentIndex(0);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    intervalRef.current = setInterval(() => slide('next', true), slideInterval);

    return () => {
      window.removeEventListener('resize', handleResize);
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  useEffect(() => {
    const items: Review[] = [];
    for (let i = 0; i < reviewsPerView; i++) {
      items.push(reviews[(currentIndex + i) % reviews.length]);
    }
    setVisibleReviews(items);
  }, [currentIndex, reviewsPerView, reviews]);

  const slide = (dir: 'next' | 'prev', auto = false) => {
    if (isAnimating) return;

    if (!auto && intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }

    setIsAnimating(true);
    setDirection(dir);

    setTimeout(() => {
      setCurrentIndex((prev) =>
        dir === 'next'
          ? (prev + 1) % reviews.length
          : (prev - 1 + reviews.length) % reviews.length
      );
      setIsAnimating(false);

      if (!intervalRef.current) {
        intervalRef.current = setInterval(
          () => slide('next', true),
          slideInterval
        );
      }
    }, animationDuration);
  };

  const renderStars = (rating: number) =>
    Array.from({ length: 5 }).map((_, i) => (
      <span
        key={i}
        className={`text-xl ${
          i < rating ? 'text-yellow-400' : 'text-gray-300'
        }`}
      >
        ★
      </span>
    ));

  return (
    <div className="w-full py-12 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 rounded-lg shadow-xl">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold mb-2">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600">
              What Our Customers Say
            </span>
          </h2>
          <p className="text-gray-700">
            Real experiences from our luxury car tours
          </p>
        </div>

        {/* Write Review */}
        <div className="flex justify-center mb-8">
          <a
            href={googleBusinessUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-lg shadow hover:scale-105 transition"
          >
            ⭐ Write a Review on Google
          </a>
        </div>

        {/* Carousel */}
        <div className="relative max-w-5xl mx-auto overflow-hidden">
          <button
            onClick={() => slide('prev')}
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-white p-3 rounded-full shadow z-10"
          >
            ‹
          </button>

          <div
            className={`flex gap-6 justify-center transition-transform duration-500 ${
              isAnimating && direction === 'next'
                ? '-translate-x-full'
                : isAnimating
                ? 'translate-x-full'
                : ''
            }`}
          >
            {visibleReviews.map((review) => (
              <a
                key={review.id}
                href={googleBusinessUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white rounded-xl shadow-lg p-6 w-80 hover:scale-105 transition border"
              >
                <div className="flex items-center mb-3">
                  <img
                    src={review.avatar}
                    className="w-12 h-12 rounded-full mr-3"
                  />
                  <div>
                    <h4 className="font-bold">{review.author}</h4>
                    <p className="text-sm text-gray-500">{review.date}</p>
                  </div>
                </div>
                <div className="mb-2">{renderStars(review.rating)}</div>
                <p className="italic text-gray-700">
                  “{review.comment}”
                </p>
              </a>
            ))}
          </div>

          <button
            onClick={() => slide('next')}
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-white p-3 rounded-full shadow z-10"
          >
            ›
          </button>
        </div>

        {/* See All */}
        <div className="text-center mt-10">
          <a
            href={googleBusinessUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg shadow hover:translate-y-1 transition"
          >
            See All Reviews on Google
          </a>
        </div>
      </div>
    </div>
  );
};

export default ReviewSection;
