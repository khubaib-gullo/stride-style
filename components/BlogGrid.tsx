import React from 'react';
import { BlogPost } from '../types';
import { ArrowRight, Calendar, User } from 'lucide-react';

interface BlogGridProps {
  title: string;
  posts: BlogPost[];
}

const BlogGrid: React.FC<BlogGridProps> = ({ title, posts }) => {
  return (
    <div className="py-16 px-4 md:px-8 max-w-7xl mx-auto" id={title.split(' ')[0].toLowerCase()}>
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-dark uppercase relative inline-block">
          {title}
          <div className="absolute -bottom-2 left-0 w-full h-1 bg-primary"></div>
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {posts.map((post) => (
          <div key={post.id} className="group bg-white rounded-lg shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col h-full border border-gray-100">
            <div className="relative overflow-hidden aspect-[4/3]">
              <div className="absolute top-4 left-4 bg-primary text-white text-xs font-bold px-3 py-1 z-10 rounded">
                {post.category.toUpperCase()}
              </div>
              <img 
                src={post.image} 
                alt={post.title} 
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300"></div>
            </div>

            <div className="p-6 flex flex-col flex-grow">
              <div className="flex items-center gap-4 text-xs text-gray-500 mb-3">
                <div className="flex items-center gap-1">
                  <Calendar className="w-3 h-3" />
                  <span>{post.date}</span>
                </div>
                <div className="flex items-center gap-1">
                  <User className="w-3 h-3" />
                  <span>{post.author}</span>
                </div>
              </div>

              <h3 className="text-lg font-bold text-dark mb-3 group-hover:text-primary transition-colors line-clamp-2">
                {post.title}
              </h3>
              
              <p className="text-gray-600 text-sm mb-4 line-clamp-3 flex-grow">
                {post.excerpt}
              </p>
              
              <div className="mt-auto pt-4 border-t border-gray-100">
                <button className="text-dark font-semibold text-sm flex items-center gap-2 group-hover:text-primary transition">
                  Read More
                  <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-12">
        <button className="bg-dark hover:bg-gray-800 text-white font-medium py-3 px-8 rounded transition">
          View All Articles
        </button>
      </div>
    </div>
  );
};

export default BlogGrid;