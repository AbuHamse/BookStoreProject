# 📚 BookstoreApp (Oh Me Oh My)

A high-performance, full-stack **MERN** (MongoDB, Express, React, Node.js) application designed for a modern bookstore community. This project features a unique "Mondrian-inspired" dashboard, real-time data integration, and a secure, containerized architecture.

---

## 🚀 Key Features

* **Mondrian Dashboard:** A high-end UI built with **PrimeReact** and **Tailwind CSS**, featuring a structural grid:
    * **Yellow Zone:** Personalized user greeting and profile avatar.
    * **Red Zone:** Interactive carousel featuring the Top 10 Rated Authors.
    * **Burgundy Zone:** A scrollable "Community Favorites" book list.
* **Crispy Backend:** A robust RESTful API (v1) featuring global error handling, request logging, and rate limiting.
* **Social Connectivity:** A "Friends" carousel that pulls random community members to encourage interaction.
* **Secure Auth:** Full authentication suite using **JWT** and **BcryptJS** for automatic password hashing.
* **Dockerized:** Fully containerized environment for the Database, Backend, and Frontend.

---

## 🛠 Tech Stack

| Component | Technology |
| :--- | :--- |
| **Frontend** | React (Vite), PrimeReact, Tailwind CSS |
| **Backend** | Node.js, Express.js, Mongoose |
| **Database** | MongoDB (NoSQL) |
| **Security** | BcryptJS, JWT, Express Rate Limit |
| **DevOps** | Docker, Docker Compose, Nginx |
| **Data Seeding** | Faker.js, DiceBear API, Picsum API |

---

## 🏗 Project Structure

```text
.
├── client/                # React Vite Frontend
├── server/                # Node.js Express Backend
├── docker-compose.yml     # Orchestration for the entire stack
└── README.md              # Project documentation
