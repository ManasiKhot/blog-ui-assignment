# 📱 Blog UI Assignment (Responsive)

A modern, responsive blog application built for the CA Monk assignment. This project demonstrates a master-detail layout, server-state management with TanStack Query, and a fully functional CRUD simulation using JSON Server.

## 🚀 Tech Stack

- **Frontend:** React (Vite), TypeScript, Tailwind CSS
- **UI Library:** ShadCN UI (Radix Primitives)
- **State Management:** TanStack Query (React Query)
- **Routing/Icons:** Lucide React
- **Backend Simulation:** JSON Server

---

## 🛠️ How to Run Locally

This project requires **two terminals** running simultaneously (one for the React App, one for the Mock API).

### 1. Clone & Install
```bash
git clone <your-repo-url>
cd blog-ui-assignment
npm install

2. Start the Backend (Terminal 1)
This runs the JSON Server on port 3000 to serve the db.json file.

Bash

npx json-server --watch db.json --port 3000

3. Start the Frontend (Terminal 2)
This runs the Vite development server.

Bash

npm run dev
Open http://localhost:5173 in your browser to view the app.

📸 Development Journey (Commit by Commit)
Commit 1: Project Setup & ShadCN Integration
Initial setup with Vite, Tailwind, and ShadCN components configuration. <img src="./screenshots/commit-1-setup.png" alt="Project Setup" width="700" />

Commit 2: Data Fetching (TanStack Query)
Implemented useQuery to fetch blogs from json-server. Handles Loading and Error states gracefully. <img src="./screenshots/commit-2-data-fetching.png" alt="Data Fetching" width="700" />

Commit 3: Responsiveness (Mobile Drawer)
Desktop: Split-screen layout (List | Details).

Mobile: The List panel moves to a ShadCN Bottom Drawer for better UX.

<img src="./screenshots/commit-3-responsiveness.png" alt="Mobile Drawer" width="300" />

Commit 4: Blog List UI
Enhanced the list items with Card and Badge components, adding proper spacing and hover effects. <img src="./screenshots/commit-4-list-ui.png" alt="Blog List UI" width="700" />

Commit 5: Blog Detail View
Professional article layout with cover image, author avatar, separator lines, and typography styling. <img src="./screenshots/commit-5-detail-view.png" alt="Blog Detail View" width="700" />

Commit 6: Create Blog Form
A Modal (Dialog) form to add new posts. Uses useMutation to update the server and automatically invalidate queries to refresh the list instantly. <img src="./screenshots/commit-6-create-form.png" alt="Create Blog Form" width="700" />

Commit 7: Header & Footer (Final Layout)
Added a clean Header with a "Create" action button and a standard Footer with copyright info. <img src="./screenshots/commit-7-final.png" alt="Final App Layout" width="700" />

📂 Project Structure
Plaintext

src/
├── api/             # API calls (axios/fetch wrappers)
├── components/      # React components (BlogList, BlogDetail, Header, Footer)
│   └── ui/          # ShadCN UI components (Button, Card, Drawer, Dialog...)
├── App.tsx          # Main layout logic
├── main.tsx         # App entry point & QueryClientProvider
└── types.ts         # TypeScript interfaces
📝 License
This project is submitted as an assignment for CA Monk.


### Step 3: Save and Submit
1.  Press `Ctrl + S` (Windows) or `Cmd + S` (Mac) to save the file.
2.  Run your final git commands to push this file to GitHub:

```bash
git add .
git commit -m "docs: Add README with screenshots"
git push