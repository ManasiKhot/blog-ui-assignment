import { useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { BlogList } from "./components/BlogList";     // Check path
import { BlogDetail } from "./components/BlogDetails"; // Check path
import { MobileBlogDrawer } from "./components/MobileBlogDrawer";
import { createBlog } from "./api/blogs";
import { Button } from "./components/ui/button";

function App() {
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: createBlog,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["blogs"] });
      alert("Dummy Blog Created!");
    },
  });

  const handleCreateDummy = () => {
    mutation.mutate({
      title: "New Dummy Blog " + Date.now(),
      category: ["TEST"],
      description: "Auto-generated test blog description.",
      content: "Lorem ipsum content...",
      date: new Date().toISOString(),
      coverImage: "https://via.placeholder.com/150",
    });
  };

  return (
    <div className="h-screen flex flex-col overflow-hidden">
      {/* HEADER */}
      <div className="p-4 border-b flex justify-between items-center bg-slate-50 shrink-0">
        <div className="flex items-center">
          {/* MOBILE ONLY: Drawer Trigger (hidden on 'md' screens and up) */}
          <div className="md:hidden">
            <MobileBlogDrawer onSelectBlog={setSelectedId} />
          </div>
          <h1 className="font-bold text-xl ml-2 md:ml-0">Blog App</h1>
        </div>
        
        <Button onClick={handleCreateDummy} disabled={mutation.isPending} size="sm">
          {mutation.isPending ? "..." : "+ Create"}
        </Button>
      </div>

      {/* MAIN CONTENT LAYOUT */}
      <div className="flex flex-1 overflow-hidden">
        
        {/* LEFT PANEL: Sidebar List 
            - 'hidden': Hidden by default (mobile)
            - 'md:flex': Becomes a flexbox on medium screens and up
        */}
        <aside className="hidden md:flex w-1/3 border-r bg-gray-50 flex-col overflow-y-auto">
          <BlogList onSelectBlog={setSelectedId} />
        </aside>

        {/* RIGHT PANEL: Details
            - 'w-full': Full width on mobile
            - 'md:w-2/3': 2/3 width on desktop
        */}
        <main className="flex-1 w-full md:w-2/3 bg-white overflow-y-auto">
          <BlogDetail blogId={selectedId} />
        </main>

      </div>
    </div>
  );
}

export default App;