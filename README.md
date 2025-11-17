# 🎬 Netflix-GPT — AI Powered Movie Recommender  
A full-featured Netflix-style UI with AI-powered movie suggestions using **Google Gemini**, real-time movie data from **TMDB**, and user authentication via **Firebase**.  
Includes autoplay trailers, GPT-based search, multilingual support, custom hooks, Redux integration, and a fully responsive Netflix-style design.

---

## 🚀 Live Demo  
🔗 **https://netflix-gpt-alpha-plum.vercel.app/**

---

## 🛠️ Tech Stack

### **Frontend**
- React (Create React App)
- React Router
- Redux Toolkit
- Tailwind CSS
- Custom Hooks
- Memoization

### **Backend & APIs**
- Firebase Authentication
- TMDB API
- Google Gemini API
- Hosted on **Vercel**

---

## 🌟 Features

### 🔐 Authentication
- Create account & Login using Firebase Auth  
- Form validation using `useRef`  
- Update display name & profile photo  
- Protected `/browse` route  
- Auto redirect based on auth  
- Unsubscribe `onAuthStateChanged` on unmount  

---

### 🎥 Browse Page (Protected)
- Netflix-style header & profile
- Hero section with:
  - Autoplay YouTube trailer
  - Muted + Loop playback
  - Gradient overlays
- Movie rows:
  - Now Playing  
  - Popular Movies  
  - Top Rated  
  - TV Series  
- Smooth horizontal scroll  
- Hover zoom animation (Netflix-like)  

---

### 🤖 Netflix-GPT (AI Movie Suggestions)
- GPT search interface  
- Multi-language input  
- Uses **Google Gemini API** for movie suggestions  
- Gemini suggests names → TMDB fetches posters & details  
- Responsive grid layout  

---

## 📁 Folder Structure

src/
components/
Header.js
Login.js
Browse.js
MovieCard.js
VideoContainer.js
GPTSearch.js
hooks/
useNowPlayingMovies.js
usePopularMovies.js
useMovieTrailer.js
redux/
userSlice.js
movieSlice.js
gptSlice.js
appStore.js
utils/
firebase.js
constants.js
validate.js
languages.js


---

## 📌 Development Journey (Milestones)
- CRA setup  
- Tailwind config  
- Routing + Header  
- Login / Signup page  
- Firebase Auth  
- Update profile  
- Redux store  
- Protected routes  
- TMDB registration + API setup  
- Now Playing / Popular / Top Rated movies  
- Custom hooks for fetching movies  
- Trailer fetch via TMDB `/videos`  
- Autoplay YouTube iframe  
- GPT Slice + toggle  
- GPT search UI  
- Multi-language support  
- Gemini integration  
- Secure API keys  
- Fully responsive UI  
- **Deployed on Vercel**

---

## ⚙️ Installation & Setup

### Clone the repo
```bash
git clone https://github.com/yourusername/netflix-gpt.git
cd netflix-gpt

Install dependencies
npm install

Environment variables

Create a .env file:

REACT_APP_FIREBASE_API_KEY=xxxx
REACT_APP_FIREBASE_AUTH_DOMAIN=xxxx
REACT_APP_FIREBASE_PROJECT_ID=xxxx
REACT_APP_TMDB_KEY=xxxx
REACT_APP_GEMINI_API_KEY=xxxx

Run locally
npm start

Build
npm run build

🚀 Deployment (Vercel)

Push project to GitHub

Import repo into Vercel

Add environment variables

Deploy and enjoy your live site

🔮 Future Enhancements

Watchlist system

Continue Watching

User reviews & ratings

Multiple user profiles

More advanced GPT prompts

Actor/Director pages