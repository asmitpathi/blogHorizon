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

✅ User authentication with Appwrite <br/>
✅ Rich text editing via TinyMCE <br/>
✅ Post creation, editing, and deletion <br/>
✅ Seamless HTML content rendering with HTML React Parser <br/>
✅ Responsive design using TailwindCSS <br/>
✅ Client-side routing with React Router <br/>
✅ Form validation using React Hook Form <br/>

---

## 🧰 Tech Stack

Frontend: ReactJS, Vite <br/>
Styling: TailwindCSS <br/>
Editor: TinyMCE <br/>
Authentication: Appwrite <br/>
Form Handling: React Hook Form <br/>
Content Parsing: HTML React Parser <br/>

---

## 🔐 Environment Variables

Create a .env file in the root folder and add the following:  <br/>
<br/>
VITE_APPWRITE_ENDPOINT=your_appwrite_endpoint <br/>
VITE_APPWRITE_PROJECT=your_project_id <br/>
VITE_APPWRITE_API_KEY=your_api_key <br/>
VITE_TINYMCE_API_KEY=your_tinymce_api_key <br/>

---

## 🛠️ Installation & Run

git clone https://github.com/asmitpathi/blogHorizon.git  <br/>
cd blogHorizon <br/>
npm install <br/>
npm run dev <br/>

---

## 📮 API Testing

All interactions (creating, editing, deleting posts) have been tested using the Appwrite SDK. <br/>
All forms include validation, and responses return clear success or error messages. <br/>

---

## 📌 Author

Asmit <br/>
GitHub: https://github.com/asmitpathi <br/>

---

## 🙏 Acknowledgment

Thanks to Hitesh Choudhary sir for his incredible Chai aur React series, which served as the foundation for this project.  
