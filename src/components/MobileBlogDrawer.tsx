import { useState } from "react";
import { Button } from "../components/ui/button";
import { BlogList } from "./BlogList"; // Adjust import path if your file is in /ui/
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "../components/ui/drawer";

interface MobileBlogDrawerProps {
  onSelectBlog: (id: string) => void;
}

export const MobileBlogDrawer = ({ onSelectBlog }: MobileBlogDrawerProps) => {
  const [open, setOpen] = useState(false);

  const handleSelect = (id: string) => {
    onSelectBlog(id);
    setOpen(false); // Close the drawer after clicking a blog
  };

  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerTrigger asChild>
        {/* This button is only for Mobile */}
        <Button variant="outline" className="mr-2">
          ☰ All Blogs
        </Button>
      </DrawerTrigger>
      <DrawerContent className="h-[85vh]">
        <DrawerHeader className="text-left">
          <DrawerTitle>Select a Blog</DrawerTitle>
        </DrawerHeader>
        <div className="px-4 pb-8 h-full overflow-y-auto">
            {/* Reuse the existing BlogList component */}
            <BlogList onSelectBlog={handleSelect} />
        </div>
      </DrawerContent>
    </Drawer>
  );
};