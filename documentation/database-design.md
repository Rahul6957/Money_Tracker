# 🗄️ Database Design

## 💰 Money Tracker

---

## 📌 Overview

This document defines the database structure for the Money Tracker application, including tables, fields, and relationships.

---

## 🧑 Table: users

* user_id (PK)
* name
* email
* password
* created_at

---

## 📂 Table: categories

* category_id (PK)
* name

---

## 💰 Table: expenses

* expense_id (PK)
* user_id (FK → users)
* category_id (FK → categories)
* amount
* note
* expense_date
* created_at

---

## 🎯 Table: budgets

* budget_id (PK)
* user_id (FK → users)
* month
* amount

---

## 🔗 Relationships

* One user can have multiple expenses
* One category can have multiple expenses
* One user can have one budget per month

---

## 📌 Conclusion

This database design ensures a structured and scalable way to manage users, expenses, categories, and budgets in the Money Tracker system.
