# 🧪 Test Cases

## 💰 Money Tracker

---

## 📌 Overview

This document defines test cases to verify the functionality of the Money Tracker application. Each test case ensures that the system behaves as expected.

---

## 🔐 Authentication Test Cases

| TC ID | Scenario      | Steps                             | Expected Result                   | Priority |
| ----- | ------------- | --------------------------------- | --------------------------------- | -------- |
| TC-01 | Register user | Enter valid name, email, password | User registered successfully      | High     |
| TC-02 | Login user    | Enter valid email & password      | Login successful, token generated | High     |
| TC-03 | Invalid login | Enter wrong password              | Error message displayed           | High     |

---

## 💰 Expense Management Test Cases

| TC ID | Scenario       | Steps                       | Expected Result              | Priority |
| ----- | -------------- | --------------------------- | ---------------------------- | -------- |
| TC-04 | Add expense    | Enter valid expense details | Expense added successfully   | High     |
| TC-05 | View expenses  | Request all expenses        | List of expenses displayed   | High     |
| TC-06 | Delete expense | Delete existing expense     | Expense removed successfully | Medium   |

---

## 📂 Category Test Cases

| TC ID | Scenario       | Steps                  | Expected Result           | Priority |
| ----- | -------------- | ---------------------- | ------------------------- | -------- |
| TC-07 | Get categories | Request categories API | Categories list displayed | High     |

---

## 🎯 Budget Test Cases

| TC ID | Scenario      | Steps                      | Expected Result           | Priority |
| ----- | ------------- | -------------------------- | ------------------------- | -------- |
| TC-08 | Set budget    | Enter month and amount     | Budget saved successfully | High     |
| TC-09 | Get budget    | Request budget API         | Correct budget returned   | High     |
| TC-10 | Exceed budget | Add expenses beyond budget | Warning/alert shown       | Medium   |

---

## 📊 Summary Test Cases

| TC ID | Scenario               | Steps               | Expected Result                    | Priority |
| ----- | ---------------------- | ------------------- | ---------------------------------- | -------- |
| TC-11 | Monthly summary        | Request summary API | Total and category breakdown shown | High     |
| TC-12 | Percentage calculation | Check category %    | Correct percentage displayed       | High     |

---

## 🔍 Filter Test Cases

| TC ID | Scenario           | Steps                 | Expected Result            | Priority |
| ----- | ------------------ | --------------------- | -------------------------- | -------- |
| TC-13 | Filter by date     | Apply date filter     | Filtered results displayed | Medium   |
| TC-14 | Filter by category | Apply category filter | Filtered results displayed | Medium   |

---

## 📌 Conclusion

These test cases ensure that all core functionalities of the Money Tracker application are working correctly and meet user requirements.
