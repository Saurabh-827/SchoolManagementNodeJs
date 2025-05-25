# 🏫 School Management Node.js API

A simple and robust REST API built with **Node.js**, **Express.js**, **Sequelize**, and **MySQL** to manage school data.  
Easily add new schools and retrieve a list of schools sorted by proximity to a user-specified location!

---

## 🚀 Features

- **Add School**: Register new schools with name, address, and coordinates.
- **List Schools by Proximity**: Fetch all schools sorted by distance from your location.
- **Robust Validation**: Ensures all input data is valid before saving.
- **Easy Integration**: Ready-to-use endpoints for your frontend or mobile app.
- **Environment Config**: Securely manage DB credentials with `.env`.

---

## 🗄️ Database Schema

| Field      | Type      | Description         |
|------------|-----------|---------------------|
| id         | INTEGER   | Primary Key (Auto)  |
| name       | VARCHAR   | School Name         |
| address    | VARCHAR   | School Address      |
| latitude   | FLOAT     | Latitude            |
| longitude  | FLOAT     | Longitude           |

---

## 📦 Installation

1. **Clone the repo**
   ```sh
   git clone https://github.com/Saurabh-827/SchoolManagementNodeJs.git
   cd SchoolManagementNodeJs
   ```

2. **Install dependencies**
   ```sh
   npm install
   ```

3. **Configure environment**
   - Create a `.env` file in the root:
     ```
     DB_USERNAME=your_db_username
     DB_PASSWORD=your_db_password
     DB_NAME=your_db_name
     DB_HOST=localhost
     DB_PORT=3306
     DIALECT=mysql
     PORT=3000
     ```

4. **Start the server**
   ```sh
   npm run dev
   ```
   The server runs on [http://localhost:3000](http://localhost:3000)

---

## 📚 API Endpoints

### ➕ Add School

- **Endpoint:** `POST /addSchool`
- **Payload:**
  ```json
  {
    "name": "ABC School",
    "address": "123 Main St",
    "latitude": 28.7041,
    "longitude": 77.1025
  }
  ```
- **Response:**
  ```json
  {
    "id": 1,
    "name": "ABC School",
    "address": "123 Main St",
    "latitude": 28.7041,
    "longitude": 77.1025,
    "createdAt": "...",
    "updatedAt": "..."
  }
  ```

---

### 📍 List Schools by Proximity

- **Endpoint:** `GET /listSchools?latitude=<your_lat>&longitude=<your_long>`
- **Response:**
  ```json
  [
    {
      "id": 2,
      "name": "XYZ School",
      "address": "456 Park Ave",
      "latitude": 28.7042,
      "longitude": 77.1026,
      "distance": 0.0001
    },
    ...
  ]
  ```

---


## 🌐 Deployment

- You can deploy this app on platforms like **Render**, **Vercel**, **Railway**, or any VPS with Node.js and MySQL support.
- Update your `.env` with production DB credentials.

---

## 🤝 Contributing

Pull requests are welcome! For major changes, please open an issue first to discuss what you would like to change.

---

## 📄 License

[MIT](LICENSE)

---

## ✨ Made with ❤️ by Saurabh
