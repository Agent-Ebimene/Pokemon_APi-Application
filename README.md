# Exploring The Pokemon Api.

In this project,the Pokemon API's endpoints were fetched with modern Javascript asynchronous approach (the fetch API,alongside with async and await). The returning data was rendered across different components.
A debounced search mechanism that allows the user to search for a given pokemon was implemented.A list of data returns after 500ms for all pokemons whose names match with input value.
Performance enhancing React lifecycle methods like useEffect were used to prevent unneccessary re-rendering of components.
I explored the context API in React(for managing values that were used in different components like the authentication state of the app),Local Storage(for managing the theme)

## This project was built with React,Typescript and Bootstrap 5 to consume API endpoints from the Pokemon API.

### Packages installed for this project

React-router-dom, React Switch and React-icons.

#### React-Icons Library

An Icon Library that is used in the development of most Applications and websites.
This was imported to add the search icon in the search modal

#### React Switch

This is a package to add switch to our frontend applications to improve great user experience. This was used in the project to add the switching functionality to our Application.

#### React-router-dom.

The react-router-dom package contains bindings for using React Router in web applications. Please see the Getting Started guide for more information on how to get started with React Router.
This was used for all the routings in the application.

##### To start this project,You can clone this repository.

git using git clone in GitHub here

In the project directory.
App.tsx is the entry file of the app.
The Pages Folder contains the routes of the app and the components folder contains a few UI components.

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
