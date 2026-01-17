import { useQuery } from "@tanstack/react-query";
import { fetchBlogs } from "../api/blogs";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";

// Accept a prop to handle clicking a blog
interface BlogListProps {
  onSelectBlog: (id: string) => void;
}

export const BlogList = ({ onSelectBlog }: BlogListProps) => {
  // TanStack Query Hook
  const { data: blogs, isLoading, error } = useQuery({
    queryKey: ["blogs"],
    queryFn: fetchBlogs,
  });

  if (isLoading) return <div>Loading blogs...</div>;
  if (error) return <div className="text-red-500">Error loading blogs</div>;

  return (
    <div className="flex flex-col gap-4 p-4 h-full overflow-y-auto">
      <h2 className="text-xl font-bold mb-2">All Blogs</h2>
      {blogs?.map((blog) => (
        <Card 
          key={blog.id} 
          className="cursor-pointer hover:bg-gray-100 transition-colors"
          onClick={() => onSelectBlog(blog.id)}
        >
          <CardHeader>
            <CardTitle className="text-sm">{blog.title}</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-xs text-gray-500">ID: {blog.id}</p>
            {/* Raw Dump as requested */}
            <pre className="text-[10px] mt-2 overflow-hidden text-ellipsis">
                {JSON.stringify(blog, null, 2).slice(0, 100)}...
            </pre>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};