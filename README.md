# Portfolio

## Project Description

Portfolio is a web application created to showcase my skills and projects as a front-end developer. The application includes sections such as "About Me," "CV," "Portfolio," "Blog," and "Contact." The project is built using React, TypeScript, and other modern web technologies.

## Technologies

- React
- TypeScript
- CSS/SCSS
- EmailJS
- i18next (for multilingual support)

## Installation

To install and run the project locally, follow these steps:

1. Clone the repository:

   ```bash
   git clone https://github.com/Just-Krzysztof/portfolio.git
   ```

2. Install dependencies:

   ```bash
   cd portfolio
   npm install
   ```

3. Start the development server:

   ```bash
   npm run dev
   ```

## Usage

To view the project, open your browser and navigate to `http://localhost:5173`.

## Contributing

Contributions are welcome! If you find any issues or have suggestions for improvements, please open an issue or submit a pull request.

## Project Structure

- `src/components`: Contains all React components used in the project.
- `src/assets`: Contains resources such as images and fonts.
- `src/index.tsx`: The main entry point of the application.
- `src/App.tsx`: The main component of the application.

## EmailJS Configuration

To configure EmailJS for sending messages from the contact form, follow these steps:

1. Sign up for [EmailJS](https://www.emailjs.com/) and create a new email service.
2. Set up an email template according to your requirements.
3. Copy the service, template, and user IDs into the `Contact.tsx` file:

   ```typescript
   const result = await emailjs.send(
     'service_zk4rsup', // Service ID
     'template_4fvz74d', // Template ID
     formData,
     '24ssIENU5jsaSVmKu' // User ID
   );

## Multilingual Support

- The project uses i18next for multilingual support. To add new translations, edit the language files in the src/locales directory.

## Author

- [Krzysztof Just](https://github.com/Just-Krzysztof)
