export interface Blog {
  id: string; // json-server usually uses string ids
  title: string;
  category: string[];
  description: string;
  date: string;
  coverImage: string;
  content: string;
}