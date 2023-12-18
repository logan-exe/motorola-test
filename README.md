## How to run the project?

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Structure

This repository is currently arranged as:

```
├─ app/
│ ├─ components/
│ │ ├─ pages/ // Contains all page components
│ │ ├─ reusables/ // Contains all reusable components, buttons, UI elements, etc.
├─ app-routing.module.ts // Contains all routes
├─ app.module.ts // Default app module
├─ auth.guard.ts // Authentication logic for protected routes
├─ assets/ // Image and video assets
├─ tailwind.config.js // Tailwind CSS configuration
├─ style.css // Global styles with Tailwind utilities imported

```

# Application Overview

## Pages

The application consists of three main pages:

1. **Home Page (Protected)**: This is the main page of the application, accessible only to authenticated users. It serves as the dashboard or landing page post-login.

2. **Login Page**: A simple login interface where users can enter their credentials. It accepts any username or password but requires both fields to be filled.

3. **404 Page (Catch-All Route)**: This page is displayed for all other routes that are not defined in the app, effectively handling any incorrect or non-existent URLs.

## Authentication and Navigation Flow

### Login Mechanics

- **Credentials Requirements**: Both username and password are mandatory. If either is missing, the application will display an alert message prompting the user to fill in both fields.

- **Token Storage**: Upon a successful login, a dummy access token is stored in the browser's `localStorage`. This token represents an active login session.

### Session Management

- **Protected Home Page**: The Home page is protected and checks for the presence of the access token in `localStorage`. If the token is absent, indicating no active session, the user is redirected to the Login page.

- **Redirection**: Users attempting to access the Home page without logging in will be automatically redirected to the Login page to authenticate themselves.

- **Logout Functionality**: Logging out of the application will remove the access token from `localStorage`, effectively ending the session.

### Simplified Session Logic

- **Active Session Check**: The presence of an item named `accessToken` in `localStorage` is used as a simple check to determine if there is an active login session.

- **No Persistent Backend Authentication**: For the simplicity of this demo application, the session management does not involve backend authentication checks. It purely relies on the presence or absence of the `accessToken` in `localStorage`.

## Conclusion

This setup provides a basic yet functional demonstration of authentication flow in a single-page application, using Angular's capabilities for routing, component rendering, and simple session management.
