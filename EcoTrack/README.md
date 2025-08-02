# 🌱 EcoTrack - Carbon Footprint Calculator

EcoTrack is a modern web application that helps users calculate and track their carbon footprint. Built with React, TypeScript, and Vite, it provides an intuitive interface for environmental impact assessment and promotes sustainable living practices.

## ✨ Features

- **Carbon Footprint Calculator**: Calculate your environmental impact across various categories
- **User Authentication**: Secure login and registration system
- **Modern UI**: Beautiful, responsive interface built with Tailwind CSS
- **Real-time API**: Backend integration with .NET Web API
- **Interactive Dashboard**: Comprehensive dashboard for tracking and analytics
- **Educational Content**: Tips and suggestions for reducing environmental impact

## 🚀 Tech Stack

- **Frontend**: React 19, TypeScript, Vite
- **Styling**: Tailwind CSS
- **Backend**: .NET 8 Web API
- **Authentication**: JWT-based authentication
- **API Documentation**: Swagger/OpenAPI

## 🛠️ Development Setup

### Prerequisites
- Node.js (v18 or higher)
- .NET 8 SDK
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd EcoTrack
```

2. Install frontend dependencies:
```bash
npm install
```

3. Install backend dependencies:
```bash
cd backend
dotnet restore
```

### Running the Application

1. Start the backend server:
```bash
cd backend
dotnet run
```

2. Start the frontend development server:
```bash
npm run dev
```

The application will be available at `http://localhost:5173` with the API running on `http://localhost:5000`.

## 📋 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run lint` - Run ESLint
- `npm run preview` - Preview production build

## 🌍 Environmental Impact

EcoTrack helps users understand and reduce their environmental impact by:
- Calculating carbon footprints across transportation, energy, and lifestyle categories
- Providing personalized recommendations for sustainability
- Tracking progress over time
- Educating users about environmental best practices

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is licensed under the MIT License.

      // Remove tseslint.configs.recommended and replace with this
      ...tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      ...tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      ...tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default tseslint.config([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
