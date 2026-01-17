import { useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createBlog } from "../api/blogs"; // Check path (../../api/blogs)
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { Textarea } from "../components/ui/textarea";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "../components/ui/dialog";

interface CreateBlogFormProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CreateBlogForm = ({ isOpen, onClose }: CreateBlogFormProps) => {
  const queryClient = useQueryClient();
  
  // Form State
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    content: "",
    coverImage: "https://via.placeholder.com/150", // Default image
    category: "Tech", // Default category
  });

  // Mutation to send data to API
  const mutation = useMutation({
    mutationFn: createBlog,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["blogs"] }); // Refresh list
      onClose(); // Close modal
      setFormData({ // Reset form
        title: "",
        description: "",
        content: "",
        coverImage: "https://via.placeholder.com/150",
        category: "Tech"
      });
      alert("Blog post created successfully!");
    },
    onError: () => {
        alert("Failed to create blog. Is the backend running?");
    }
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Validate simple fields
    if (!formData.title || !formData.content) return;

    mutation.mutate({
      ...formData,
      category: [formData.category], // Convert string to array
      date: new Date().toISOString(),
    });
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[500px] overflow-y-auto max-h-[90vh]">
        <DialogHeader>
          <DialogTitle>Create New Article</DialogTitle>
          <DialogDescription>
            Fill in the details below to publish a new blog post.
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="grid gap-4 py-4">
          
          {/* Title Input */}
          <div className="grid gap-2">
            <Label htmlFor="title">Title</Label>
            <Input
              id="title"
              value={formData.title}
              onChange={(e) => setFormData({ ...formData, title: e.target.value })}
              placeholder="e.g., The Future of AI"
              required
            />
          </div>

          {/* Description Input */}
          <div className="grid gap-2">
            <Label htmlFor="description">Short Description</Label>
            <Input
              id="description"
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              placeholder="A brief summary for the card view..."
            />
          </div>

          {/* Category Input */}
          <div className="grid gap-2">
            <Label htmlFor="category">Category</Label>
            <Input
              id="category"
              value={formData.category}
              onChange={(e) => setFormData({ ...formData, category: e.target.value })}
              placeholder="e.g., Finance, Tech, Health"
            />
          </div>

          {/* Content Textarea */}
          <div className="grid gap-2">
            <Label htmlFor="content">Content</Label>
            <Textarea
              id="content"
              value={formData.content}
              onChange={(e) => setFormData({ ...formData, content: e.target.value })}
              placeholder="Write your article here..."
              className="h-32"
              required
            />
          </div>

           {/* Image URL Input */}
           <div className="grid gap-2">
            <Label htmlFor="image">Cover Image URL</Label>
            <Input
              id="image"
              value={formData.coverImage}
              onChange={(e) => setFormData({ ...formData, coverImage: e.target.value })}
              placeholder="https://..."
            />
          </div>

        </form>

        <DialogFooter>
          <Button variant="outline" onClick={onClose}>Cancel</Button>
          <Button onClick={handleSubmit} disabled={mutation.isPending}>
            {mutation.isPending ? "Publishing..." : "Publish Article"}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};