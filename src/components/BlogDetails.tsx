import { useQuery } from "@tanstack/react-query";
import { fetchBlogById } from "../api/blogs"; // Check path (../../api/blogs if needed)
import { Badge } from "../components/ui/badge";
import { Separator } from "../components/ui/separator";
import { Avatar, AvatarFallback, AvatarImage } from "../components/ui/avatar";

interface BlogDetailProps {
  blogId: string | null;
}

export const BlogDetail = ({ blogId }: BlogDetailProps) => {
  const { data: blog, isLoading, error } = useQuery({
    queryKey: ["blog", blogId],
    queryFn: () => fetchBlogById(blogId!),
    enabled: !!blogId,
  });

  // 1. Empty State (No blog selected)
  if (!blogId) {
    return (
      <div className="h-full flex flex-col items-center justify-center text-center p-8 text-gray-500">
        <div className="bg-gray-100 p-6 rounded-full mb-4">
          <span className="text-4xl">👋</span>
        </div>
        <h2 className="text-xl font-bold text-gray-800">Welcome to the Blog</h2>
        <p className="max-w-md mt-2">
          Select an article from the list on the left (or the menu on mobile) to start reading.
        </p>
      </div>
    );
  }

  // 2. Loading State
  if (isLoading) return <div className="p-8 text-center text-gray-500 animate-pulse">Loading article content...</div>;
  
  // 3. Error State
  if (error) return <div className="p-8 text-center text-red-500">Failed to load blog details.</div>;
  if (!blog) return null;

  // Format Date
  const formattedDate = new Date(blog.date).toLocaleDateString("en-US", {
    weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' 
  });

  // 4. Success State (The Article)
  return (
    <div className="max-w-3xl mx-auto p-6 md:p-10 pb-20 animate-in fade-in duration-500">
      
      {/* Category Badges */}
      <div className="flex gap-2 mb-4">
        {blog.category.map((cat) => (
          <Badge key={cat} className="bg-blue-600 hover:bg-blue-700">
            {cat}
          </Badge>
        ))}
      </div>

      {/* Title */}
      <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight mb-6">
        {blog.title}
      </h1>

      {/* Author & Meta Data */}
      <div className="flex items-center gap-3 mb-8">
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>AU</AvatarFallback>
        </Avatar>
        <div className="flex flex-col text-sm">
          <span className="font-semibold text-gray-900">John Doe</span>
          <span className="text-gray-500">{formattedDate} · 5 min read</span>
        </div>
      </div>

      {/* Cover Image */}
      <div className="w-full h-64 md:h-96 mb-10 overflow-hidden rounded-xl bg-gray-100 shadow-sm">
        <img 
            src={blog.coverImage} 
            alt={blog.title}
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
        />
      </div>

      {/* Blog Content */}
      <article className="prose prose-lg max-w-none text-gray-700 leading-relaxed whitespace-pre-wrap">
        {/* We use whitespace-pre-wrap to respect newlines in the dummy text */}
        {blog.content}
      </article>

      <Separator className="my-10" />
      
      <p className="text-gray-400 text-sm italic text-center">
        End of article
      </p>
    </div>
  );
};