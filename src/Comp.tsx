import React from 'react';
import { FiCalendar, FiUser, FiTag } from 'react-icons/fi';

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
  "author": "👨‍💻 John Doe",
  "date": "📅 September 1, 2022",
  "image": "/avatar.png",
  "description": "📝 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ac ex eget mauris lacinia tempus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Donec ac semper urna. Sed ut tellus vitae neque faucibus tincidunt. Nam interdum dui nec erat varius, vitae auctor eros congue. Proin scelerisque convallis enim, nec eleifend felis sollicitudin nec. Fusce sit amet tellus ut nunc posuere fringilla. Nulla facilisi. Curabitur euismod, lorem nec fringilla condimentum, purus est tincidunt ligula, non porta est enim in mi. Vivamus ullamcorper, libero quis vestibulum aliquam, nibh urna feugiat nisl, eget consectetur elit quam id lectus.",
  "tags": ["⌨️ Programming", "🖥️ Web Development", "📖 Learning"]
}

const BlogCardComp: React.FC<BlogCardCompProps> = ({ data }) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg">
      <img src={data.image} alt={data.title} className="w-full h-48 object-cover rounded-t-lg" />
      <div className="p-4">
        <h2 className="text-xl font-semibold text-gray-800 dark:text-white">{data.title}</h2>
        <div className="flex items-center mt-2 text-gray-500 dark:text-gray-400">
          <FiUser className="w-4 h-4 mr-1" />
          <span>{data.author}</span>
        </div>
        <div className="flex items-center mt-2 text-gray-500 dark:text-gray-400">
          <FiCalendar className="w-4 h-4 mr-1" />
          <span>{data.date}</span>
        </div>
        <p className="mt-4 text-gray-600 dark:text-gray-300">{data.description}</p>
        <div className="flex flex-wrap mt-4">
          {data.tags.map((tag, index) => (
            <span
              key={index}
              className="px-2 py-1 mr-2 text-sm text-gray-600 bg-gray-200 dark:bg-gray-700 dark:text-gray-300 rounded-lg"
            >
              <FiTag className="w-4 h-4 inline-block mr-1" />
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogCardComp;