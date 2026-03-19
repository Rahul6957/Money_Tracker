# 📘 Software Requirements Specification (SRS)

## 💰 Money Tracker

---

## 1. Introduction

### 1.1 Purpose

The purpose of this system is to help users track their daily expenses, analyze spending patterns, and manage their financial budget effectively.

---

### 1.2 Scope

Money Tracker is a web-based application that allows users to:

* Record daily expenses
* Categorize spending
* Monitor monthly financial activity
* Set and track budgets
* Gain insights into spending habits

---

### 1.3 Definitions

* **Expense**: Money spent by the user
* **Category**: Classification of expenses (e.g., Food, Travel)
* **Budget**: Monthly spending limit set by the user

---

## 2. Overall Description

### 2.1 Product Perspective

Money Tracker is a standalone web application built using:

* React (Frontend)
* Express.js (Backend)
* MySQL (Database)

---

### 2.2 Product Functions

* User registration and login
* Add, update, and delete expenses
* Categorize expenses
* Generate monthly reports
* Budget management
* Display insights and analytics

---

### 2.3 User Classes and Characteristics

| User Type | Description                          |
| --------- | ------------------------------------ |
| User      | Can manage expenses and view reports |

---

### 2.4 Operating Environment

* Web browser (Chrome, Edge, etc.)
* Node.js runtime environment
* MySQL database server

---

## 3. Functional Requirements

### 3.1 User Authentication

* The system shall allow users to register
* The system shall allow users to log in securely

---

### 3.2 Expense Management

* The system shall allow users to add expenses
* The system shall allow users to view expense history
* The system shall allow users to delete expenses

---

### 3.3 Category Management

* The system shall allow predefined categories
* The system shall allow assigning categories to expenses

---

### 3.4 Reporting

* The system shall calculate total monthly expenses
* The system shall display category-wise spending
* The system shall calculate percentage distribution

---

### 3.5 Budget Management

* The system shall allow users to set monthly budgets
* The system shall notify users when budget limits are reached

---

### 3.6 Insights

* The system shall provide spending insights
* The system shall compare spending patterns over time

---

## 4. Non-Functional Requirements

### 4.1 Performance

* The system should respond within 2 seconds

---

### 4.2 Security

* User data must be protected
* Passwords must be encrypted

---

### 4.3 Usability

* The system should have a simple and user-friendly interface

---

### 4.4 Reliability

* The system should be available 24/7 with minimal downtime

---

## 5. System Design Constraints

* Must use React for frontend
* Must use Express.js for backend
* Must use MySQL for database

---

## 6. Future Enhancements

* Mobile application version
* Advanced analytics and charts
* Export reports (PDF/CSV)
* Notification system

---

## 7. Conclusion

Money Tracker aims to provide users with a simple yet powerful tool to manage personal finances effectively and make informed financial decisions.
