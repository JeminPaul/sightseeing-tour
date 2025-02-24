import React, { useState } from 'react';
import { Star, MessageSquare } from 'lucide-react';

const reviews = [
  {
    id: 1,
    name: "John Doe",
    rating: 5,
    date: "2024-02-01",
    comment: "Amazing experience with the jeep safari! The guide was very knowledgeable and friendly.",
    profileImage: "/api/placeholder/40/40"
  },
  {
    id: 2,
    name: "Sarah Smith",
    rating: 4,
    date: "2024-01-28",
    comment: "Great auto rickshaw tour through the city. Really got to experience the local culture.",
    profileImage: "/api/placeholder/40/40"
  },
  {
    id: 3,
    name: "Mike Johnson",
    rating: 5,
    date: "2024-01-25",
    comment: "The bike tour was fantastic! Perfect way to explore Kerala's beautiful landscapes.",
    profileImage: "/api/placeholder/40/40"
  }
];

const Review = () => {
  const [showAddReview, setShowAddReview] = useState(false);
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState('');

  const handleSubmitReview = (e) => {
    e.preventDefault();
    console.log({ rating, comment });
    setShowAddReview(false);
    setRating(0);
    setComment('');
  };

  return (
    <section className="py-8 md:py-12 bg-slate-600">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-center mb-8 gap-4">
          <h2 className="text-3xl font-bold text-white text-center sm:text-left">
            What Our Customers Say
          </h2>
          <button
            onClick={() => setShowAddReview(!showAddReview)}
            className="flex items-center gap-2 bg-white text-blue-600 px-6 py-3 rounded-full hover:bg-blue-100 transition-colors shadow-lg w-full sm:w-auto justify-center"
          >
            <MessageSquare size={20} />
            <span className="font-semibold">Write a Review</span>
          </button>
        </div>

        {/* Add Review Form */}
        {showAddReview && (
          <div className="mb-8 bg-white p-6 rounded-lg shadow-lg transform transition-all duration-300 ease-in-out">
            <h3 className="text-xl font-semibold mb-4 text-gray-800">Share Your Experience</h3>
            <form onSubmit={handleSubmitReview} className="space-y-6">
              <div>
                <label className="block text-gray-700 mb-2 font-medium">Rating</label>
                <div className="flex gap-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      type="button"
                      onClick={() => setRating(star)}
                      className="focus:outline-none transform hover:scale-110 transition-transform"
                    >
                      <Star
                        size={32}
                        className={`${
                          star <= rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'
                        }`}
                      />
                    </button>
                  ))}
                </div>
              </div>
              <div>
                <label className="block text-gray-700 mb-2 font-medium">Your Review</label>
                <textarea
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                  className="w-full p-4 border rounded-lg h-32 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Tell us about your experience..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full sm:w-auto bg-blue-600 text-white px-8 py-3 rounded-full hover:bg-blue-700 transition-colors shadow-lg font-semibold"
              >
                Submit Review
              </button>
            </form>
          </div>
        )}

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review) => (
            <div 
              key={review.id} 
              className="bg-white p-6 rounded-lg shadow-lg transform hover:scale-105 transition-all duration-300 ease-in-out"
            >
              <div className="flex items-center mb-4">
                <img
                  src={review.profileImage}
                  alt={review.name}
                  className="w-12 h-12 rounded-full mr-4 border-2 border-blue-200"
                />
                <div>
                  <h3 className="font-semibold text-gray-800">{review.name}</h3>
                  <div className="flex items-center">
                    {[...Array(5)].map((_, index) => (
                      <Star
                        key={index}
                        size={16}
                        className={`${
                          index < review.rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-gray-600 leading-relaxed">{review.comment}</p>
              <p className="text-sm text-gray-500 mt-4 font-medium">
                {new Date(review.date).toLocaleDateString()}
              </p>
            </div>
          ))}
        </div>

        {/* Google Reviews Link */}
        <div className="text-center mt-8">
          <a
            href="https://g.page/r/your-google-business-id"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-blue-200 font-medium inline-flex items-center gap-2 bg-slate-700 px-6 py-3 rounded-full transition-colors"
          >
            <Star size={20} />
            View all reviews on Google
          </a>
        </div>
      </div>
    </section>
  );
};

export default Review;