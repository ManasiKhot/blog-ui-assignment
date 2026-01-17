import { useState } from "react";
import { BlogList } from "./components/BlogList";
import { BlogDetail } from "./components/BlogDetails";
import { CreateBlogForm } from "./components/CreateBlogForm";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";

function App() {
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [isCreateOpen, setIsCreateOpen] = useState(false);

  return (
    <div className="h-screen flex flex-col overflow-hidden bg-white">
      
      {/* 1. Modal (Hidden) */}
      <CreateBlogForm 
        isOpen={isCreateOpen} 
        onClose={() => setIsCreateOpen(false)} 
      />

      {/* 2. Header */}
      <Header 
        onSelectBlog={setSelectedId} 
        onCreateClick={() => setIsCreateOpen(true)} 
      />

      {/* 3. Main Content (Scrollable Area) */}
      <div className="flex flex-1 overflow-hidden">
        {/* Left Sidebar (Desktop) */}
        <aside className="hidden md:flex w-1/3 border-r bg-gray-50 flex-col overflow-y-auto">
          <BlogList onSelectBlog={setSelectedId} selectedId={selectedId} />
        </aside>

        {/* Right Detail View */}
        <main className="flex-1 w-full md:w-2/3 bg-white overflow-y-auto">
          <BlogDetail blogId={selectedId} />
        </main>
      </div>

      {/* 4. Footer */}
      <Footer />
    </div>
  );
}

export default App;