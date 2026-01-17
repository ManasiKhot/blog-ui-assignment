import { useQuery } from "@tanstack/react-query";
import { fetchBlogs } from "../api/blogs"; // Check your path (../../api/blogs if in /ui folder)
import { BlogListItem } from "./BlogListItem";

interface BlogListProps {
  onSelectBlog: (id: string) => void;
  selectedId?: string | null; // Optional: to show active state
}

export const BlogList = ({ onSelectBlog, selectedId }: BlogListProps) => {
  const { data: blogs, isLoading, error } = useQuery({
    queryKey: ["blogs"],
    queryFn: fetchBlogs,
  });

  if (isLoading) return <div className="p-4 text-center text-sm text-gray-500">Loading blogs...</div>;
  if (error) return <div className="p-4 text-center text-red-500 text-sm">Error loading blogs</div>;

  return (
    <div className="p-4">
        <h2 className="text-lg font-bold mb-4 px-1">Latest Articles</h2>
        <div className="flex flex-col">
            {blogs?.map((blog) => (
                <BlogListItem 
                    key={blog.id} 
                    blog={blog} 
                    onClick={() => onSelectBlog(blog.id)}
                    isActive={selectedId === blog.id}
                />
            ))}
        </div>
    </div>
  );
};