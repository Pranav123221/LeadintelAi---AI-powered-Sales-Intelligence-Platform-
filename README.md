# 🚀 LeadIntel AI – AI Powered Sales Intelligence Platform

<p align="center">

![React](https://img.shields.io/badge/React-19-blue?logo=react)
![Vite](https://img.shields.io/badge/Vite-Frontend-purple?logo=vite)
![Tailwind CSS](https://img.shields.io/badge/TailwindCSS-Styling-38BDF8?logo=tailwindcss)
![n8n](https://img.shields.io/badge/n8n-Automation-FF6D5A?logo=n8n)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-Database-336791?logo=postgresql)
![AI Powered](https://img.shields.io/badge/AI-Powered-success)

</p>

---

# 📌 Overview

LeadIntel AI is an AI-powered Sales Intelligence Platform designed to help sales teams and businesses quickly analyze companies, evaluate lead quality, generate personalized outreach messages, and store business insights automatically.

Instead of manually researching prospects, LeadIntel AI automates the complete workflow using AI and business automation.

---

# ✨ Features

- 🔍 Company Search
- 🤖 AI Company Analysis
- 📈 AI Lead Scoring
- 💼 Business Insights Generation
- ✉ Personalized Outreach Message Generation
- 🗄 PostgreSQL Database Storage
- ⚡ Automated n8n Workflow
- 📊 Interactive Dashboard
- 📱 Responsive UI

---

# 🏗️ System Architecture

```text
                           +----------------------+
                           |        User          |
                           | (Sales Executive)    |
                           +----------+-----------+
                                      |
                                      |
                                      v
                    +-------------------------------+
                    | React + Vite Frontend         |
                    | Tailwind CSS Dashboard        |
                    +---------------+---------------+
                                    |
                           REST API Request
                                    |
                                    v
                     +------------------------------+
                     | n8n Webhook                  |
                     +--------------+---------------+
                                    |
                    +---------------+----------------+
                    |                                |
                    v                                v
        +----------------------+        +-------------------------+
        | AI Company Analysis  | -----> | Business Formatter      |
        +----------+-----------+        +------------+------------+
                   |                                 |
                   +---------------+-----------------+
                                   |
                                   v
                    +-------------------------------+
                    | PostgreSQL Database           |
                    | Stores Leads & Analysis       |
                    +---------------+---------------+
                                    |
                                    |
                                    v
                    +-------------------------------+
                    | Respond to Webhook            |
                    +---------------+---------------+
                                    |
                                    |
                                    v
                    +-------------------------------+
                    | React Dashboard               |
                    | Displays Results              |
                    +-------------------------------+
```

---

# ⚙ Workflow

```text
User
   │
   ▼
Frontend (React)
   │
   ▼
Webhook (n8n)
   │
   ▼
AI Analysis
   │
   ▼
Lead Scoring
   │
   ▼
Business Formatter
   │
   ▼
PostgreSQL
   │
   ▼
JSON Response
   │
   ▼
Dashboard
```

---

# 🛠️ Tech Stack

## Frontend

- React
- Vite
- Tailwind CSS
- Axios

## Backend Automation

- n8n

## Database

- PostgreSQL

## AI

- Gemini / OpenAI

## Deployment

- Vercel *(Deployment in Progress)*
- Render *(Planned for n8n)*

---

# 📂 Project Structure

```
LeadIntel AI
│
├── frontend
│   ├── src
│   │   ├── components
│   │   ├── pages
│   │   ├── services
│   │   ├── assets
│   │   └── App.jsx
│   │
│   ├── public
│   ├── package.json
│   └── vite.config.js
│
├── screenshots
│
└── README.md
```

---

# 📸 Screenshots

## Home Page

> Add Screenshot

---

## AI Company Analysis

> Add Screenshot

---

## Lead Score

> Add Screenshot

---

## Business Analysis

> Add Screenshot

---

## Outreach Message

> Add Screenshot

---

## PostgreSQL Database

> Add Screenshot

---

## n8n Workflow

> Add Screenshot

---

# 🚀 Installation

Clone repository

```bash
git clone https://github.com/Pranav123221/LeadintelAi---AI-powered-Sales-Intelligence-Platform-.git
```

Move to frontend

```bash
cd frontend
```

Install dependencies

```bash
npm install
```

Run project

```bash
npm run dev
```

Production build

```bash
npm run build
```

---

# 🎯 Business Problem Solved

Sales teams spend hours researching companies before reaching out.

LeadIntel AI automates:

- Company Research
- Business Intelligence
- Lead Qualification
- Personalized Outreach
- Database Management

Result:

- Faster prospect research
- Better lead prioritization
- Improved sales productivity

---

# 🔮 Future Enhancements

- CRM Integration
- LinkedIn Company Enrichment
- Email Automation
- AI Follow-up Suggestions
- Team Dashboard
- Authentication
- Analytics
- Export Reports

---

# 👨‍💻 Author

## Pranav Sharma

Aspiring AI & Machine Learning Engineer

GitHub

https://github.com/Pranav123221

LinkedIn

(Add your LinkedIn URL)

---

# ⭐ Support

If you found this project useful,

⭐ Star this repository

and feel free to fork it for learning.

---

## 📜 License

This project is created for educational and portfolio purposes.
