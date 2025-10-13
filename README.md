# 📦 TwiTube

blogHorizon is amodern blogging platform inspired by the **Chai aur React** series by *Hitesh Choudhary*.  
It allows users to **create, edit, and view posts** with a rich text editor, user authentication, and seamless content rendering.
It focuses on delivering a smooth and intuitive experience for bloggers and readers alike.

Built with **ReactJS**, **TailwindCSS**, and **Appwrite**, this project serves as a full-featured frontend blogging solution.

---

## 📁 Project Structure

```text
root/
├── public/               # Static assets (images, icons, etc.)
├── src/
│   ├── components/       # React components (Navbar, PostCard, etc.)
│   ├── pages/            # Application pages (Home, Post, Editor, Auth)
│   ├── services/         # API calls and Appwrite service functions
│   ├── utils/            # Helper functions
│   ├── constants/        # Global constants
│   ├── app.js            # React app setup
│   └── main.jsx          # React DOM rendering
├── .env
├── .gitignore
├── package.json
└── README.md
```

---

## 🚀 Features

- ✅ User authentication with Appwrite
- ✅ Rich text editing via TinyMCE
- ✅ Post creation, editing, and deletion
- ✅ Seamless HTML content rendering with HTML React Parser
- ✅ Responsive design using TailwindCSS
- ✅ Client-side routing with React Router
- ✅ Form validation using React Hook Form

---

## 🧰 Tech Stack

Frontend: ReactJS, Vite
Styling: TailwindCSS
Editor: TinyMCE
Authentication: Appwrite
Form Handling: React Hook Form
Content Parsing: HTML React Parser

---

## 🔐 Environment Variables

Create a .env file in the root folder and add the following:  

VITE_APPWRITE_ENDPOINT=your_appwrite_endpoint
VITE_APPWRITE_PROJECT=your_project_id
VITE_APPWRITE_API_KEY=your_api_key
VITE_TINYMCE_API_KEY=your_tinymce_api_key

---

## 🛠️ Installation & Run

git clone https://github.com/asmitpathi/blogHorizon.git
cd blogHorizon
npm install
npm run dev 

---

## 📮 API Testing

All interactions (creating, editing, deleting posts) have been tested using the Appwrite SDK.
All forms include validation, and responses return clear success or error messages.

---

## 📌 Author

Asmit  
GitHub: https://github.com/asmitpathi  

---

## 🙏 Acknowledgment

Thanks to Hitesh Choudhary sir for his incredible Chai aur React series, which served as the foundation for this project.  
