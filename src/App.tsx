import { useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { BlogList } from "./components/BlogList";
import { BlogDetail } from "./components/BlogDetails";
import { createBlog } from "./api/blogs";
import { Button } from "./components/ui/button";

function App() {
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const queryClient = useQueryClient();

  // Mutation for creating a dummy blog
  const mutation = useMutation({
    mutationFn: createBlog,
    onSuccess: () => {
      // Invalidate and refetch blogs list immediately
      queryClient.invalidateQueries({ queryKey: ["blogs"] });
      alert("Dummy Blog Created!");
    },
  });

  const handleCreateDummy = () => {
    mutation.mutate({
      title: "New Dummy Blog " + Date.now(),
      category: ["TEST"],
      description: "This is a test description generated automatically.",
      content: "Lorem ipsum content...",
      date: new Date().toISOString(),
      coverImage: "https://via.placeholder.com/150",
    });
  };

  return (
    <div className="h-screen flex flex-col">
      {/* Temp Header for Testing */}
      <div className="p-4 border-b flex justify-between items-center bg-slate-50">
        <h1 className="font-bold text-xl">Blog App (Dev Mode)</h1>
        <Button onClick={handleCreateDummy} disabled={mutation.isPending}>
          {mutation.isPending ? "Creating..." : "Test Create POST"}
        </Button>
      </div>

      {/* Split Layout */}
      <div className="flex flex-1 overflow-hidden">
        {/* Left Panel - 30% width */}
        <div className="w-1/3 border-r bg-gray-50">
          <BlogList onSelectBlog={setSelectedId} />
        </div>

        {/* Right Panel - 70% width */}
        <div className="w-2/3 bg-white">
          <BlogDetail blogId={selectedId} />
        </div>
      </div>
    </div>
  );
}

export default App;