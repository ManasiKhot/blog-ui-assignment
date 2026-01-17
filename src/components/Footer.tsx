export const Footer = () => {
  return (
    <footer className="border-t bg-slate-50 p-4 text-center text-xs text-gray-500 shrink-0">
      <p>
        &copy; {new Date().getFullYear()} CA Monk Blog App. All rights reserved.
      </p>
      <div className="flex justify-center gap-4 mt-2">
        <a href="#" className="hover:text-gray-900">Privacy Policy</a>
        <a href="#" className="hover:text-gray-900">Terms of Service</a>
        <a href="#" className="hover:text-gray-900">Twitter</a>
      </div>
    </footer>
  );
};