# Kemet

Kemet is a **fully original ReactJS project** built with **Next.js** and **TailwindCSS**, designed to explore and present the rich history, culture, and mythology of ancient Egypt. The project is powered by a **custom API** developed in **Node.js**, providing dynamic content for gods, historical sections, and thematic visuals.

The application features user authentication with **Firebase**, allowing users to sign in via Google or email, access their account, and interact with the content seamlessly.

![kemet](https://github.com/user-attachments/assets/f835eb59-7c40-4eb3-ad9b-1b97e46195af)

---

## 📝 Overview

This project was **designed and built from scratch** as a portfolio-grade application to demonstrate:

- Modern React architecture with Next.js
- Custom API integration
- Firebase authentication flows
- Responsive UI/UX design
- Dynamic content management
- Interactive component development

**Kemet** is not a template, clone, or tutorial project. It represents a complete, production-ready web application showcasing advanced frontend and backend integration skills.

---

## 🚀 Features

- ✨ **Fully original content and design**, with no external templates used
- 🔌 **Dynamic content fetching** via a custom API
- 🔐 **User authentication** with Google and email/password options
- 🎨 **Interactive image sliders** and **modal pop-ups** for gods and historical sections
- 📱 **Responsive design** optimized for desktop and mobile
- 🏛️ **Thematic sections:**
  - **Home** – Overview of Kemet and its meaning
  - **Gods** – Interactive cards for Egyptian deities with modal details
  - **History** – Chronological display of Egypt's historical events
  - **Contact** – Contact form for users
  - **Account** – User profile with logout functionality

---

## 🛠️ Tech Stack

| Category | Technology |
|----------|-----------|
| **Frontend** | ReactJS, Next.js, TailwindCSS |
| **Backend** | Node.js (Custom API) |
| **Database & Authentication** | Firebase Firestore |
| **Routing** | React Router DOM |
| **Icons** | React Icons |
| **Deployment** | Vercel |

---

## 📂 Project Structure

```
kemet/
 ├─ components/
 │   ├─ Navbar.js
 │   ├─ Footer.js
 │   ├─ Subscribe.js
 │   ├─ ImageSlider.js
 │   └─ ...
 ├─ pages/
 │   ├─ index.js (Home)
 │   ├─ gods.js
 │   ├─ history.js
 │   ├─ contact.js
 │   ├─ signin.js
 │   ├─ signup.js
 │   └─ account.js
 ├─ context/
 │   └─ AuthContext.js
 ├─ assets/
 │   └─ images/
 ├─ api/
 │   └─ custom endpoints
 ├─ styles/
 │   └─ globals.css
 └─ public/
```

---

## 🎨 UI & UX Design

The application features a **custom Egyptian-themed design** with:

- **Color Palette:** Gold, yellow, red, teal, and blue accents
- **Interactive Modals:** Detailed content views for gods and historical events
- **Responsive Grid Layouts:** Optimized for all screen sizes
- **Smooth Animations:** Image scaling, transitions, and slider effects
- **Clean Typography:** Modern fonts paired with ancient Egyptian aesthetics

---

## ⚡ Getting Started

### Prerequisites

- Node.js 18+
- Yarn
- Firebase account (for authentication setup)

### Installation

```bash
# Clone the repository
git clone https://github.com/SALVADORPOETA/Kemet-sm.git

# Navigate to project directory
cd Kemet-sm

# Install dependencies
yarn install
```

### Environment Variables

Create a `.env.local` file in the root directory:

```env
NEXT_PUBLIC_FIREBASE_API_KEY=your_api_key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_auth_domain
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_storage_bucket
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id
```

### Development Server

```bash
yarn dev
```

The application will be available at:

```
http://localhost:3000
```

### Build for Production

```bash
yarn build
yarn start
```

---

## 🔐 Authentication Flow

- Users can **sign up** using email/password or Google authentication
- **Protected routes** ensure only authenticated users access account features
- **Firebase Firestore** manages user sessions and data
- **Sign out** functionality available from account page

---

## 🌐 API Integration

The project consumes a **custom Node.js API** that provides:

- Egyptian gods data (names, descriptions, images, attributes)
- Historical events and timelines
- Cultural information and references

API endpoints are structured for scalability and easy content management.

---

## 📌 Originality Statement

This project is **100% original**.

- No starter templates were used
- No UI kits were copied
- No tutorial projects were followed
- All components, layouts, API structure, and logic were independently designed and implemented

**Kemet** was built as a **serious portfolio project**, intended to demonstrate real-world full-stack development skills, architectural decisions, and engineering excellence.

---

## 👨🏽‍💻 Author

**Salvador Martínez**  
*Full-Stack Developer*

- **GitHub:** [https://github.com/SALVADORPOETA](https://github.com/SALVADORPOETA)
- **LinkedIn:** [https://www.linkedin.com/in/salvador-martinez-sm/](https://www.linkedin.com/in/salvador-martinez-sm/)

---

## ⚖️ License

This is a portfolio project by **Salvador Martinez**.

No commercial use intended.  
All rights reserved to the author.

---

## 💡 Notes

- Designed for **educational, cultural, and portfolio purposes**
- The project demonstrates advanced React patterns, Firebase integration, and custom API development

---

## 🙏 Acknowledgments

Inspired by the enduring legacy and fascinating history of the ancient Egypt.
