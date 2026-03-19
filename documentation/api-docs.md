# 📄 API Documentation

## 💰 Money Tracker

---

## 📌 Overview

This document defines the REST APIs for the Money Tracker application. These APIs handle user authentication, expense management, category handling, and budget tracking.

---

## 🔐 Authentication APIs

### ➤ Register User

**POST** `/api/auth/register`

**Request Body:**

```json
{
  "name": "Rahul",
  "email": "rahul@example.com",
  "password": "123456"
}
```

**Response:**

```json
{
  "message": "User registered successfully"
}
```

---

### ➤ Login User

**POST** `/api/auth/login`

**Request Body:**

```json
{
  "email": "rahul@example.com",
  "password": "123456"
}
```

**Response:**

```json
{
  "message": "Login successful",
  "token": "JWT_TOKEN"
}
```

---

## 💰 Expense APIs

### ➤ Add Expense

**POST** `/api/expenses`

**Request Body:**

```json
{
  "category_id": 1,
  "amount": 200,
  "note": "Lunch",
  "expense_date": "2026-03-19"
}
```

**Response:**

```json
{
  "message": "Expense added successfully"
}
```

---

### ➤ Get All Expenses

**GET** `/api/expenses`

**Response:**

```json
[
  {
    "expense_id": 1,
    "amount": 200,
    "category": "Food",
    "note": "Lunch",
    "expense_date": "2026-03-19"
  }
]
```

---

### ➤ Delete Expense

**DELETE** `/api/expenses/:id`

**Response:**

```json
{
  "message": "Expense deleted successfully"
}
```

---

## 📂 Category APIs

### ➤ Get Categories

**GET** `/api/categories`

**Response:**

```json
[
  { "category_id": 1, "name": "Food" },
  { "category_id": 2, "name": "Travel" }
]
```

---

## 🎯 Budget APIs

### ➤ Set Budget

**POST** `/api/budget`

**Request Body:**

```json
{
  "month": "2026-03",
  "amount": 5000
}
```

**Response:**

```json
{
  "message": "Budget set successfully"
}
```

---

### ➤ Get Budget

**GET** `/api/budget`

**Response:**

```json
{
  "month": "2026-03",
  "amount": 5000
}
```

---

## 📊 Summary API

### ➤ Get Monthly Summary

**GET** `/api/summary`

**Response:**

```json
{
  "total": 5000,
  "categories": [
    { "name": "Food", "amount": 3000, "percentage": 60 },
    { "name": "Travel", "amount": 1500, "percentage": 30 }
  ]
}
```

---

## 📌 Conclusion

This API design ensures structured communication between frontend and backend, supporting all core functionalities of the Money Tracker system.
