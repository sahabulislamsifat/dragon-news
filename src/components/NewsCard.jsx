import React from "react";
import { FaEye, FaShareAlt, FaStar } from "react-icons/fa";

const NewsCard = ({ news }) => {
  return (
    <div className="card bg-white shadow-lg rounded-lg p-4">
      {/* Author and Share Button */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-3">
          <img
            src={news.author.img}
            alt="author"
            className="w-10 h-10 rounded-full"
          />
          <div>
            <h3 className="font-semibold text-gray-800">{news.author.name}</h3>
            <p className="text-gray-500 text-sm">
              {new Date(news.author.published_date).toLocaleDateString()}
            </p>
          </div>
        </div>
        <FaShareAlt className="text-gray-500 cursor-pointer" />
      </div>

      {/* Title */}
      <h2 className="font-bold text-xl text-gray-800 mb-4">{news.title}</h2>

      {/* Thumbnail Image */}
      <img
        src={news.thumbnail_url}
        alt="thumbnail"
        className="w-full h-80 object-cover rounded-lg mb-4"
      />

      {/* Tags and Details */}
      <p className="text-gray-600 text-sm mb-4">
        {news.details.length > 100
          ? `${news.details.slice(0, 100)}...`
          : news.details}
        <span className="text-red-500 cursor-pointer ml-2">Read More</span>
      </p>

      {/* Rating and Views */}
      <div className="flex items-center justify-between border-t pt-4">
        <div className="flex items-center gap-1 text-yellow-500">
          <FaStar />
          <span className="font-semibold">{news.rating.number}</span>
        </div>
        <div className="flex items-center gap-1 text-gray-600">
          <FaEye />
          <span>{news.total_view}</span>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
