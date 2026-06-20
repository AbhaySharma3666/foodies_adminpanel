# 🍔 Foodies Admin Panel

Admin dashboard for the **Foodies** food delivery platform. Built with **React + Vite**, this panel allows administrators to manage food items and track customer orders.

## 🌐 Live Demo

| Service | URL |
| --- | --- |
| **Admin Panel** | [foodies-adminpanel.vercel.app](https://foodies-adminpanel.vercel.app) |
| **Customer Panel** | [foodies-panel.vercel.app](https://foodies-panel.vercel.app) |
| **Backend API** | [foodies-api-0d6g.onrender.com](https://foodies-api-0d6g.onrender.com/api/health) |

> [!NOTE]
> The backend is hosted on Render's free tier and may take 30–60 seconds to wake up on the first request.

## ✨ Features

- **Add Food** — Upload food items with name, description, category, price, and image
- **List Food** — View all food items in a table with delete capability
- **Orders** — Monitor and update order statuses (Preparing → On the way → Delivered)
- **Responsive Sidebar** — Collapsible navigation sidebar

## 🛠️ Tech Stack

| Technology | Purpose |
| --- | --- |
| [React 19](https://react.dev/) | UI framework |
| [Vite 7](https://vite.dev/) | Build tool & dev server |
| [Bootstrap 5](https://getbootstrap.com/) | CSS framework & components |
| [Bootstrap Icons](https://icons.getbootstrap.com/) | Icon library |
| [Axios](https://axios-http.com/) | HTTP client |
| [React Router v7](https://reactrouter.com/) | Client-side routing |
| [React Toastify](https://fkhadra.github.io/react-toastify/) | Toast notifications |

## 📁 Project Structure

```
foodies_adminpanel/
├── public/
├── src/
│   ├── assets/          # Static assets (images, logos)
│   ├── components/
│   │   ├── Menubar/     # Top navigation bar
│   │   └── Sidebar/     # Collapsible sidebar navigation
│   ├── config/
│   │   └── api.js       # Centralized Axios instance
│   ├── pages/
│   │   ├── AddFood/     # Add food form page
│   │   ├── ListFood/    # Food listing table page
│   │   └── Orders/      # Orders management page
│   ├── services/
│   │   ├── foodService.js   # Food CRUD API calls
│   │   └── orderService.js  # Order API calls
│   ├── App.jsx          # Root component with routing
│   ├── main.jsx         # Application entry point
│   └── index.css        # Global styles
├── .env                 # Environment variables (not committed)
├── .env.example         # Environment variable template
├── index.html           # HTML entry point
├── vite.config.js       # Vite configuration
└── package.json
```

## 🚀 Getting Started

### Prerequisites

- **Node.js** v18+ and **npm** v9+
- Backend API server running (default: `http://localhost:8080`)

### Installation

```bash
# Clone the repository
git clone <repository-url>
cd foodies_adminpanel

# Install dependencies
npm install

# Create environment file from template
cp .env.example .env

# Start the dev server
npm run dev
```

The app will be available at `http://localhost:5173`.

### Environment Variables

| Variable | Description | Default |
| --- | --- | --- |
| `VITE_API_BASE_URL` | Backend API base URL | `http://localhost:8080/api` |

> Configure the API base URL in the `.env` file. See `.env.example` for the template.

### Available Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start development server with HMR |
| `npm run build` | Build for production |
| `npm run preview` | Preview the production build |
| `npm run lint` | Run ESLint checks |

## 🔗 Related Projects

- **Foodies** — Customer-facing frontend
- **Foodies API** — Spring Boot backend REST API
