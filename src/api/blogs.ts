import type { Blog } from "../types";

const BASE_URL = "http://localhost:3000"; // Ensure your json-server is running on this port

// 1. GET All Blogs
export const fetchBlogs = async (): Promise<Blog[]> => {
  const response = await fetch(`${BASE_URL}/blogs`);
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return response.json();
};

// 2. GET Blog by ID
export const fetchBlogById = async (id: string): Promise<Blog> => {
  const response = await fetch(`${BASE_URL}/blogs/${id}`);
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return response.json();
};

// 3. POST Create Blog
export const createBlog = async (newBlog: Omit<Blog, "id">): Promise<Blog> => {
  const response = await fetch(`${BASE_URL}/blogs`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newBlog),
  });
  if (!response.ok) {
    throw new Error("Failed to create blog");
  }
  return response.json();
};