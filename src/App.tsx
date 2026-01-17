import { useState } from "react";
import { BlogList } from "./components/BlogList"; // Check path
import { BlogDetail } from "./components/BlogDetails"; // Check path
import { MobileBlogDrawer } from "./components/MobileBlogDrawer";
import { CreateBlogForm } from "./components/CreateBlogForm";
import { Button } from "./components/ui/button";

function App() {
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [isCreateOpen, setIsCreateOpen] = useState(false); // State for Modal

  return (
    <div className="h-screen flex flex-col overflow-hidden">
      
      {/* 1. THE CREATE FORM MODAL (Hidden until opened) */}
      <CreateBlogForm 
        isOpen={isCreateOpen} 
        onClose={() => setIsCreateOpen(false)} 
      />

      {/* 2. HEADER */}
      <div className="p-4 border-b flex justify-between items-center bg-slate-50 shrink-0">
        <div className="flex items-center">
          <div className="md:hidden">
            <MobileBlogDrawer onSelectBlog={setSelectedId} />
          </div>
          <h1 className="font-bold text-xl ml-2 md:ml-0">Blog App</h1>
        </div>
        
        {/* Button now opens the Modal */}
        <Button onClick={() => setIsCreateOpen(true)} size="sm">
          + Create
        </Button>
      </div>

      {/* 3. MAIN CONTENT */}
      <div className="flex flex-1 overflow-hidden">
        <aside className="hidden md:flex w-1/3 border-r bg-gray-50 flex-col overflow-y-auto">
          <BlogList onSelectBlog={setSelectedId} selectedId={selectedId} />
        </aside>

        <main className="flex-1 w-full md:w-2/3 bg-white overflow-y-auto">
          <BlogDetail blogId={selectedId} />
        </main>
      </div>
    </div>
  );
}

export default App;