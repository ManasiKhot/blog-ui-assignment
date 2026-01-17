import { useMutation } from "@tanstack/react-query";
import { createBlog } from "../api/blogs";
import { Button } from "../components/ui/button";

export default function CreateBlog() {
  const mutation = useMutation({
    mutationFn: createBlog,
    onSuccess: (data) => {
      console.log("Blog created:", data);
      alert("Blog created successfully (dummy)");
    },
  });

  return (
    <Button onClick={() => mutation.mutate()}>
      Create Dummy Blog
    </Button>
  );
}
