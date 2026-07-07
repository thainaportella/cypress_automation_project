# Cypress E2E Automation Project 🚀

This repository contains a comprehensive automated End-to-End (E2E) testing suite developed with **Cypress** and **JavaScript**. The primary goal of this project is to simulate real-world user interactions and validate the UI/UX workflows of the **Automation Exercise** platform, showcasing software quality engineering best practices.

---

## 🎯 Project Objectives

*   **Robust Selectors:** Utilizing clean and maintainable locator strategies (such as structural IDs and `data-qa` attributes).
*   **Flakiness Prevention:** Implementing dynamic data injection (e.g., dynamic timestamps for registration fields) to guarantee test repeatability without data collision.
*   **UI/UX Assertions:** Verifying element visibility, text accuracy, and successful state transitions.

---

## 🧪 Test Scenarios Covered

### 🟢 Happy Paths
*   **User Registration:** Complete registration workflow from the initial landing page, entering dynamic personal and address information, up to final creation verification.
*   *More scenarios coming soon (Login, Logout, and Cart Management)...*

### 🔴 Error Handling (Upcoming)
*   *Invalid Login Credentials Validation...*
*   *Duplicate Email Registration Constraint Validation...*

---

## 🛠️ Tech Stack & Prerequisites

Before running the tests, make sure you have the following installed:

*   **Node.js** (v20.x or higher recommended)
*   **Cypress** (v13.x or higher)
*   **IDE:** VS Code or IntelliJ IDEA

---

## 🚀 Getting Started

1. **Clone the repository:**
   ```bash
   git clone [https://github.com/YOUR_USERNAME/cypress_automation_project.git](https://github.com/YOUR_USERNAME/cypress_automation_project.git)
   cd cypress_automation_project
