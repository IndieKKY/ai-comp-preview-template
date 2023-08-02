import React from 'react';
import { AiOutlineCalendar, AiOutlineUser, AiOutlineTag } from 'react-icons/ai';

interface BlogCardCompProps {
  data: BlogCard;
}

export interface BlogCard {
  title: string;
  author: string;
  date: string;
  image: string;
  description: string;
  tags: string[];
}

export const Example: BlogCard = {
  "title": "📚 My Journey in Programming",
  "author": "👩‍💻 Jane Doe",
  "date": "📅 January 1, 2022",
  "image": "/avatar.png",
  "description": "📝 This is a blog post about my journey in programming and how I overcame challenges along the way.",
  "tags": ["🔖 programming", "🔖 coding", "🔖 career"]
}

const BlogCardComp: React.FC<BlogCardCompProps> = ({ data }) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg">
      <img src={data.image} alt={data.title} className="w-full h-64 object-cover rounded-t-lg" />
      <div className="p-4">
        <h2 className="text-xl font-bold text-gray-800 dark:text-white">{data.title}</h2>
        <div className="flex items-center mt-2">
          <AiOutlineUser className="w-4 h-4 mr-1 text-gray-600 dark:text-gray-400" />
          <p className="text-sm text-gray-600 dark:text-gray-400">{data.author}</p>
        </div>
        <div className="flex items-center mt-2">
          <AiOutlineCalendar className="w-4 h-4 mr-1 text-gray-600 dark:text-gray-400" />
          <p className="text-sm text-gray-600 dark:text-gray-400">{data.date}</p>
        </div>
        <div className="flex items-center mt-2">
          <AiOutlineTag className="w-4 h-4 mr-1 text-gray-600 dark:text-gray-400" />
          {data.tags.map((tag, index) => (
            <p key={index} className="text-sm text-gray-600 dark:text-gray-400 mr-2">
              {tag}
            </p>
          ))}
        </div>
        <p className="mt-4 text-gray-600 dark:text-gray-400">{data.description}</p>
      </div>
    </div>
  );
};

export default BlogCardComp;
