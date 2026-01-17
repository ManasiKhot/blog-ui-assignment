import { useQuery } from "@tanstack/react-query";
import { fetchBlogById } from "../api/blogs";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";

interface BlogDetailProps {
  blogId: string | null;
}

export const BlogDetail = ({ blogId }: BlogDetailProps) => {
  const { data: blog, isLoading, error } = useQuery({
    queryKey: ["blog", blogId],
    queryFn: () => fetchBlogById(blogId!),
    enabled: !!blogId, // Only fetch if we have an ID
  });

  if (!blogId) return <div className="p-10 text-gray-400">Select a blog to view details</div>;
  if (isLoading) return <div>Loading detail...</div>;
  if (error) return <div className="text-red-500">Error loading detail</div>;

  return (
    <div className="p-4 h-full overflow-y-auto">
      <Card className="h-full">
        <CardHeader>
          <CardTitle>Details for ID: {blogId}</CardTitle>
        </CardHeader>
        <CardContent>
           {/* Raw Data Dump */}
           <pre className="bg-gray-100 p-4 rounded text-xs overflow-auto h-[500px]">
             {JSON.stringify(blog, null, 2)}
           </pre>
        </CardContent>
      </Card>
    </div>
  );
};