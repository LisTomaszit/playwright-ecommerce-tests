# Playwright UI Test Automation Project

This project contains automated UI tests built with Playwright for a demo web application.

## Project Overview

The goal of this project was to practice test automation using modern tools and simulate real-world QA scenarios.

The tests cover key user flows such as:

- adding a new task
- marking a task as completed
- deleting a task

## Tech Stack

- Playwright
- JavaScript (ES6+)
- Git & GitHub

## Project Structure

```
tests/
  api/
    products-api.spec.js
  ui/
    products-ui.spec.js
```

## Test Scenarios

### 1. Add Todo

- open application
- enter task name
- submit task
- verify task is displayed

### 2. Complete Todo

- add new task
- mark task as completed
- verify completed state

### 3. Delete Todo

- add new task
- remove task
- verify task is removed

## How to Run Tests

Install dependencies:

    npm install

Run tests:

    npx playwright test

Run tests in UI mode:

    npx playwright test --ui

## Notes

- The project focuses on UI testing and user flows
- API tests were excluded from CI due to external API instability
- Demonstrates use of modern locator strategies and assertions

## Author

Tomasz Lis
