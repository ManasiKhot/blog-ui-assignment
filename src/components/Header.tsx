import { MobileBlogDrawer } from "./MobileBlogDrawer";
import { Button } from "../components/ui/button";
import { BookOpen } from "lucide-react"; // Icon

interface HeaderProps {
  onSelectBlog: (id: string) => void;
  onCreateClick: () => void;
}

export const Header = ({ onSelectBlog, onCreateClick }: HeaderProps) => {
  return (
    <header className="p-4 border-b flex justify-between items-center bg-white shadow-sm shrink-0">
      <div className="flex items-center gap-2">
        {/* Mobile Drawer Trigger */}
        <div className="md:hidden">
          <MobileBlogDrawer onSelectBlog={onSelectBlog} />
        </div>

        {/* Logo & Title */}
        <div className="flex items-center gap-2">
          <div className="bg-black text-white p-1 rounded">
            <BookOpen size={20} />
          </div>
          <h1 className="font-bold text-xl tracking-tight hidden sm:block">
            CA Monk Blog
          </h1>
        </div>
      </div>

      {/* Action Buttons */}
      <Button onClick={onCreateClick} size="sm" className="bg-blue-600 hover:bg-blue-700">
        + Create New
      </Button>
    </header>
  );
};