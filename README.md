## 🎯 **Why CortexMark?**

### **The Problem**
- **Time Wasting**: People spend 3+ hours daily scrolling through social media platforms
- **Platform Switching**: Constantly opening YouTube, Twitter, Instagram, TikTok to find saved content
- **Content Loss**: Favorite videos, tweets, articles get lost in endless feeds
- **Disorganization**: No centralized place to store and organize digital content


#### After creating this platform, I realized that users often have to open it repeatedly just to save their favorite content. Is there any solution I can make as this? so they never have to open those platforms again and again . This makes the experience seamless, effortless, and truly user-friendly......

### **The Solution ?? **
**CortexMark**  Chrome extension that lets you bookmark content from ANY platform without ever opening those platfrom again an again!

---

## 🚀 **What is CortexMark?**

**CotexMark** is a comprehensive bookmarking platform that consists of:

1. **🌐 Chrome Extension**: Quick bookmarking from any website
2. **💻 Web Application**: Beautiful dashboard to manage all bookmarks
3. **🔗 Share Links**: Public sharing of your bookmark collections
4. **📱 Cross-Platform**: Works on all devices and browsers

### **Core Concept**
> **"Bookmark Everything, Browse Nothing"** - Save content from all platforms in one place, never open social media apps again!

---


## **Key Features**

###  **Beautiful Landing Page**
- **Professional Design**: Modern gradient backgrounds with glass morphism
- **Platform Showcase**: Visual representation of supported platforms
- **Authentication**: Secure JWT-based login system
- **Responsive**: Works perfectly on all devices

###  **Smart Bookmarking**
- **One-Click Save**: Paste any link and add caption
- **Platform Detection**: Automatic recognition of YouTube, Twitter, Instagram, etc.
- **Visual Cards**: Platform-branded cards with colors and logos
- **Content Preview**: See actual content without opening platforms

### 🎯 **Platform Support**
- **📺 YouTube**: Full video player integration
- **🐦 Twitter**: Tweet preview with blue theming
- **📷 Instagram**: Post preview with pink theming
- **🎵 TikTok**: Video preview with dark theming
- **📄 Articles**: Document preview with green theming
- **🔗 Any Link**: Universal link support with purple theming

###  **Authentication & Security**
- **JWT Tokens**: Secure authentication system
- **User Accounts**: Personal bookmark collections
- **Privacy Focused**: No ads, no tracking
- **Data Security**: Your bookmarks are private and secure

### 🔗 **Sharing System**
- **Public Links**: Generate shareable links for your collections
- **No Login Required**: Others can view your shared content
- **Username Display**: Shows who shared the content
- **Social Features**: Share your knowledge with others

---

## 🛠️ **Tech Stack**

### **Frontend**
- **React 19** - Modern UI framework
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first styling
- **Redux Toolkit** - State management
- **React Router** - Navigation
- **Axios** - HTTP client
- **Vite** - Build tool

### **Backend**
- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **TypeScript** - Type-safe backend
- **MongoDB** - Database
- **Mongoose** - ODM for MongoDB
- **JWT** - Authentication tokens
- 
-**Zod** – A TypeScript-first schema validation library
  
-**bcrypt** – A password hashing library. It securely hashes and salts passwords before storing them in the database

- **CORS** - Cross-origin requests

### **Chrome Extension**
- **Manifest V3** - Latest extension API
- **Content Scripts** - Page interaction
- **Background Scripts** - Extension logic
- **Popup Interface** - Quick bookmarking

### **Development Tools**
- **ESLint** - Code linting
- **Prettier** - Code formatting
- **Git** - Version control
- **Chrome DevTools** - Extension debugging

---

## **Project Structure**

```
CoertexMark/
├── Frontend/                 # React web application
│   ├── src/
│   │   ├── components/      # Reusable UI components
│   │   ├── Pages/          # Page components
│   │   ├── Store/          # Redux store and slices
│   │   ├── icons/          # Icon components
│   │   └── hooks/          # Custom hooks
│   └── package.json
├── Backend/                 # Node.js API server
│   ├── src/
│   │   ├── Routes/         # API routes
│   │   ├── Db/            # Database models
│   │   ├── Middleware/    # Custom middleware
│   │   └── utils/         # Utility functions
│   └── package.json
├── Chrome-Extension/        # Chrome extension files
│   ├── manifest.json       # Extension manifest (Manifest V3)
│   ├── background.js       # Background script for extension
│   ├── content-script.js   # Content script for page interaction
│   ├── popup.html          # Extension popup interface
│   ├── popup.js            # Popup functionality
│   ├── popup.css           # Popup styling
│   ├── icons/              # Extension icons
│   │   ├── icon16.png      # 16x16 icon
│   │   ├── icon48.png      # 48x48 icon
│   │   └── icon128.png     # 128x128 icon
│   └── assets/             # Extension assets
└── README.md              # This file

```

---

## 🚀 **How It Works**

### **1. Chrome Extension Workflow**
```
User finds content → Click extension → Paste link → Add caption → Save to Second Brain
```

### **2. Web Application Workflow**
```
Sign up → Create account → Start bookmarking → Organize content → Share collections
```

### **3. Sharing Workflow**
```
Generate share link → Share with others → They view your content → No login required
```

---

## 📦 **Installation & Setup**

### **Prerequisites**
- Node.js (v18 or higher)
- MongoDB (local or cloud)
- Chrome browser
- Git

### **1. Clone Repository**
```bash
git clone https://github.com/yourusername/Chrome_Extension_Brainhub.git
cd Chrome_Extension_Brainhub
```

### **2. Backend Setup**
```bash
cd Backend
npm install
npm start
```
Backend runs on `http://localhost:3009`

### **3. Frontend Setup**
```bash
cd Frontend
npm install
npm run dev
```
Frontend runs on `http://localhost:5173`

### **4. Chrome Extension Setup**
1. Open Chrome and go to `chrome://extensions/`
2. Enable "Developer mode"
3. Click "Load unpacked"
4. Select the project root folder
5. Extension will appear in your browser toolbar

---

## 🎯 **Usage Guide**

### **Getting Started**
1. **Visit Landing Page**: Go to `http://localhost:5173`
2. **Sign Up**: Create your account
3. **Install Extension**: Load the Chrome extension
4. **Start Bookmarking**: Click extension icon on any website

### **Bookmarking Content**
1. **Find Content**: Browse YouTube, Twitter, Instagram, etc.
2. **Copy Link**: Copy the URL of content you like
3. **Open Extension**: Click the Second Brain extension icon
4. **Paste & Describe**: Paste link and add your caption
5. **Save**: Content is now in your Second Brain!

### **Managing Bookmarks**
1. **Dashboard**: View all your bookmarked content
2. **Filter**: Filter by platform (YouTube, Twitter, etc.)
3. **Search**: Find specific bookmarks quickly
4. **Delete**: Remove content you no longer need

### **Sharing Collections**
1. **Generate Link**: Create a shareable link
2. **Share**: Send link to friends or post publicly
3. **View**: Others can see your content without logging in

---

##  **API Endpoints**

### **Authentication**
- `POST /api/v1/user/signup` - User registration
- `POST /api/v1/user/signin` - User login

### **Content Management**
- `GET /api/v1/content/viewcontent` - Get user content
- `POST /api/v1/content/addcontent` - Add new content
- `DELETE /api/v1/content/deletecontent/:id` - Delete content

### **Sharing**
- `POST /api/v1/links/brain/share` - Generate share link
- `GET /api/v1/links/brain/:shareLink` - Get shared content


## 📝 **License**

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

Suggestions or feedback?
->>Feel free to reach out to me at suvamoysamanta907@gmail.com



suvamoy99



