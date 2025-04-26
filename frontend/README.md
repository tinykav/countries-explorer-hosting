# 🌎 Countries Explorer

A modern and responsive React application that allows users to explore countries using the [REST Countries API](https://restcountries.com/).

---

## 📚 Features

- View country details (Name, Capital, Region, Population, Flag, Languages)
- Search countries dynamically by name
- Filter countries by region (Asia, Europe, Americas, etc.)
- Click a country to view detailed information
- Fully responsive UI using TailwindCSS
- Unit and Integration tests with Vitest and React Testing Library
- Local JSON backup for API outage handling
- Hosted live for easy access

---

## 🚀 Setup Instructions

1. Clone the repository:

```bash
git clone <https://github.com/SE1020-IT2070-OOP-DSA-25/af-2-tinykav>
cd frontend
```

2. Install dependencies:

```bash
npm install
```

3. Run the development server:

```bash
npm run dev
```

4. Run unit and integration tests:

```bash
npm run test
```

---

## 🛠 Technologies Used

- ReactJS (Functional Components + Hooks)
- Vite
- TailwindCSS
- Axios
- React Router DOM
- Vitest (Testing)
- @testing-library/react

---

## 🧪 Testing

- `CountryCard`, `SearchFilter`, and `Home` components are tested.
- Tests can be run using:

```bash
npm run test
```

---

## 🌐 Hosting

This project is hosted on **Vercel**:  
🔗 [Live Demo Link](https://countries-explorer-hosting.vercel.app/)

---

## 📦 API Endpoints Used

- `/all` — Fetch all countries
- `/name/{name}` — Search by name
- `/region/{region}` — Filter by region
- `/alpha/{code}` — Fetch full details by country code

---

## 📝 Challenges Faced and Solutions

| Challenge                              | Solution                                                    |
| :------------------------------------- | :---------------------------------------------------------- |
| REST Countries API was down sometimes  | Implemented local backup JSON to fetch countries offline    |
| Vitest and Testing Library integration | Configured vite.config.js properly with globals and jsdom   |
| Search and Filter dynamic updates      | Used local state and API functions to dynamically update UI |

---
