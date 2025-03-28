# Movie Search App 🎬

A React Native mobile app for searching movies using the OMDb API. Users can search movies by title, view details, ratings, and plot information.

## Features ✨
- Search movies by title
- Display movie posters in list view
- View detailed movie information
- Responsive design for iOS and Android
- Clean navigation between screens

## Prerequisites 📋
- Node.js (v14+)
- npm/yarn
- Android Studio (for Android) or Xcode (for iOS)
- OMDb API key (free from [omdbapi.com](http://www.omdbapi.com/apikey.aspx))

## Installation & Setup 🛠️

### 1. Clone the repository
```bash
git clone https://github.com/yourusername/movie-search-app.git
cd movie-search-app




#FOLDER STRUCTURE 
movie-search-app/
├─ android/               # Android native code
├─ ios/                   # iOS native code
├─ src/
│  ├─ components/         # Reusable components
│  │  ├─ SearchBar.js
│  │  
│  ├─ screens/            # Application screens
│  │  ├─ HomeScreen.js
│  │  └─ MovieDetailScreen.js
│  |
│  |
│  ├─ navigation/         # Navigation setup
│  │  └─ AppNavigator.js
│  └─ config.js           # API configuration
├─ App.js                 # Root component
└─ package.json           # Project dependencies


#Usage Guide 📱
#Search Movies

Enter at least 3 characters in the search bar

View results in list format with posters

View Movie Details

Tap any movie from the list

See detailed information including:

Movie poster

Title and release year

Genre

IMDb rating

Plot summary

Return to Search

Press back button/gesture to return to search results