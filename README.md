This project was bootstrapped with [Create React App (TypeScript)](https://create-react-app.dev/docs/adding-typescript/).

.idea gitignored
Add Prettier with pre-commit hook using Husky
added .env files for environment variable and build / deploy scripts

- enter REACT_APP_BACKEND_URL in env files
- add AWS CLI profile name in package.json scripts
- add S3 bucket names for dev and prod in package.json scripts

Added TailwindCSS following (this guide)[https://blog.logrocket.com/create-react-app-and-tailwindcss/].
Checks local storage for token and redirects to auth / unauth accordingly.
Basic login / sign up and internal view styling.
Verification banner.

## Available Scripts

In the project directory, you can run:

### `yarn start`

### `yarn test`

### `yarn build`
