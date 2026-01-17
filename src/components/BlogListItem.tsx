import type { Blog } from "../types";
import { Card, CardContent } from "../components/ui/card";
import { Badge } from "../components/ui/badge";

interface BlogListItemProps {
  blog: Blog;
  onClick: () => void;
  isActive?: boolean; // Highlight if currently selected
}

export const BlogListItem = ({ blog, onClick, isActive }: BlogListItemProps) => {
  // Format date to be readable (e.g., "Jan 12, 2026")
  const formattedDate = new Date(blog.date).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });

  return (
    <Card 
      className={`cursor-pointer transition-all hover:shadow-md mb-3 ${
        isActive ? "border-black border-2 bg-slate-50" : "border-transparent hover:border-gray-200"
      }`}
      onClick={onClick}
    >
      <CardContent className="p-4 flex gap-3">
        {/* Thumbnail Image (Small square) */}
        <img 
          src={blog.coverImage} 
          alt={blog.title} 
          className="w-20 h-20 object-cover rounded-md bg-gray-200 shrink-0"
        />

        <div className="flex flex-col gap-1 w-full overflow-hidden">
            {/* Categories */}
            <div className="flex flex-wrap gap-1 mb-1">
                {blog.category.map((cat) => (
                    <Badge key={cat} variant="secondary" className="text-[10px] px-1 py-0 h-5">
                        {cat}
                    </Badge>
                ))}
            </div>

            {/* Title */}
            <h3 className="font-bold text-sm leading-tight truncate">
                {blog.title}
            </h3>

            {/* Description (Truncated) */}
            <p className="text-xs text-gray-500 line-clamp-2">
                {blog.description}
            </p>

            {/* Date */}
            <p className="text-[10px] text-gray-400 mt-auto pt-1">
                {formattedDate}
            </p>
        </div>
      </CardContent>
    </Card>
  );
};