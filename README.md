# reactJS-course-project

## TASK 2

Create _package.json_ file and install [react](https://www.npmjs.com/package/react).

Install and configure [webpack](https://www.npmjs.com/package/webpack) & [babel](https://babeljs.io/) to get build artifact by running npm command.
Set _DEV_ and _PROD_ build configuration. Use env variables, dev server, optimizations for _PROD_ build.

Don’t use any React boilerplate (like _create-react-app_) for this task.

### Configure Linter

1. Install [linter](https://cogut.medium.com/what-is-linting-how-does-a-linter-work-49381f28fc60) to check JS files
2. Choose one of the public presets ([configs](https://github.com/dustinspecker/awesome-eslint#configs)) with rules
3. Fix all issues
4. Install [Husky](https://github.com/typicode/husky) + [Lint-staged](https://github.com/okonet/lint-staged) to run linters on pre-commit hook

### Configure TypeScript (optional)

Today most of the projects use TypeScript as a main language.
We highly encourage you to configure [TypeScript](https://www.typescriptlang.org/) for the project:

1. Install [TypeScript](https://www.npmjs.com/package/typescript) package
2. Configure transpiling
3. Change your previous code (if you have any) to the new syntax

You can skip this step if you wish to use plain JavaScript instead.
But keep in mind that by skipping TypeScript you will miss important part of experience.
Discuss this with your mentor.

## TASK 3

Write components implementing HTML markup for required design [for home page](https://www.figma.com/file/fKGjrOqR6nJe6LYJopGCZ8/CDP-Home-Task-%E2%80%93-React-v1?node-id=0%3A2) of InVision prototype (Only UI part).
For this part, no need to implement API calls and routing, the task can be done with mocked data.

Implement and use [ErrorBoundary](https://reactjs.org/docs/error-boundaries.html)
component for catching and displaying errors.
You could create one component and wrap all your application or use several components.

## TASK 4

Implement markup and styles for [“Add movie”](https://www.figma.com/file/fKGjrOqR6nJe6LYJopGCZ8/CDP-Home-Task-%E2%80%93-React-v1?node-id=0%3A505), [“Edit”](https://www.figma.com/file/fKGjrOqR6nJe6LYJopGCZ8/CDP-Home-Task-%E2%80%93-React-v1?node-id=0%3A1005), [“Delete”](https://www.figma.com/file/fKGjrOqR6nJe6LYJopGCZ8/CDP-Home-Task-%E2%80%93-React-v1?node-id=0%3A1817) modal windows and “sorting”.

No need to implement real API calls. Only add pages with mocked data.

## TASK 5

### Prepare

Install and configure [eslint-plugin-react-hooks](https://www.npmjs.com/package/eslint-plugin-react-hooks). It will help you identify mistakes when using hooks.

### Implement a possibility to [view movie details](https://www.figma.com/file/fKGjrOqR6nJe6LYJopGCZ8/CDP-Home-Task-%E2%80%93-React-v1?node-id=0%3A393)

**Given:** the user is on the main page
**And:** there are movies in the list
**When:** the user clicks on a movie card in the list
**Then:** the search panel at the top is replaced with clicked movie details

### Implement a possibility to return back to search

**Given:** the user is viewing movie details
**When:** they click on the search icon at the top right corner
**Then:** the movie details panel is replaced with the search panel

In your project, change class components into functional components and use hooks for state and effect management. Don't use any external libraries/frameworks for state management. The goal is to dive deep into React's built-in state management tools and techniques.

All functionality of the app except forms should work now with mock data, without server-side integrations.

## TASK 6

### Integrate with the backend

1. Clone the [backend repository](https://github.com/VarvaraZadnepriak/MoviesAPI.ReactJS).
2. Navigate to the cloned repository folder and run `npm install` to install dependencies.
3. Run `npm start` command to start the backend server. It will start on https://localhost:4000.
4. Open Swagger API docs: http://localhost:4000/api-docs.
5. Make your components perform real AJAX requests. Implement data fetches as async actions and pass data to your components with redux.
6. Implement filtering and sorting (by genre, rating, and release date) as redux actions. Don't filter or sort on the frontend side, use backend API for this.

## TASK 7

Install [formik](https://formik.org/), implement a possibility to [“Add movie”](https://www.figma.com/file/fKGjrOqR6nJe6LYJopGCZ8/CDP-Home-Task-%E2%80%93-React-v1?node-id=0%3A505), [“Edit”](https://www.figma.com/file/fKGjrOqR6nJe6LYJopGCZ8/CDP-Home-Task-%E2%80%93-React-v1?node-id=0%3A1005), [“Delete”](https://www.figma.com/file/fKGjrOqR6nJe6LYJopGCZ8/CDP-Home-Task-%E2%80%93-React-v1?node-id=0%3A1817).

Required validation criteria can be found in API docs: http://localhost:4000/api-docs.

- Implement “Add movie” form with validation.
- Implement “Edit movie” form with validation. Used hooks from formik.
- Implement “Delete movie” functionality.

## TASK 8

Using [react-router](https://reactrouter.com/) define routes according to the following acceptance criteria.
Move state related to search parameters and current movie into URL.
Use routes to get state from URL and use [react-router](https://reactrouter.com/) API to update URL when changes should be made to the state.

### AC1

**Given:** any state\
**When:** the address bar pathname is changed to "/"\
**Then:** the user should be redirected to "/search".

### AC2

**Given:** any state\
**When:** the address bar pathname is changed to "/search" without a :searchQuery URL segment\
**Then:** the search page with the most popular movies should be displayed (send a request with empty "search" query param)\
**And:** search input value should be empty

### AC3

**Given:** any state\
**When:** the address bar pathname is changed to "/search/:searchQuery" where :searchQuery is not an empty string\
**Then:** the search page with results should be displayed\
**And:** and the search results should match :searchQuery from the URL segment\
**And:** search input value should equal to :searchQuery

### AC4

**Given:** any state\
**When:** the page address is changed\
**And:** the pathname is "/search/:searchQuery" with or without :searchQuery\
**And:** address bar contains "genre" query parameter\
**Then:** the search page results should be filtered by the genre specified in the query
parameter\
**And:** the specified genre name should be highlighted in UI

### AC5

**Given:** any state\
**When:** the page address is changed\
**And:** the pathname is "/search/:searchQuery" with or without :searchQuery\
**And:** address bar contains "sortBy" query parameter\
**Then:** the search page results should be sorted by the property name specified in the query
parameter (Release Date/Name)\
**And:** the specified sorting option should be highlighted in UI

### AC6

**Given:** any state\
**When:** the page address is changed\
**And:** the pathname is "/search/:searchQuery" with or without :searchQuery\
**And:** address bar contains "movie=:movieId" query parameter\
**Then:** the search page is displayed with the search panel replaced with movie details for the movie from "movie" query parameter

### AC7

**Given:** any state\
**When:** the address bar pathname is changed to an unknown value\
**Then:** a 404 page should be displayed

### AC8

**Given:** a user is on the search page\
**When:** they change sorting option via UI\
**Then:** the address bar should be changed to include new sorting option in "sortBy" query parameter

### AC9

**Given:** a user is on the search page\
**When:** they select a genre\
**Then:** the address bar should be changed to include selected genre in "genre" query parameter

### AC10

**Given:** a user is on the search page\
**When:** they type in a query into the search box and hit Enter or click "Search"\
**Then:** the address bar pathname should be changed to "/search/:searchQuery" where :searchQuery equals to the search input value

### AC11

**Given:** a user is on the search page\
**When:** they click on a movie from the list\
**Then:** the address bar query parameter "movie" should be set with value equal to clicked movie ID

### Hint

Don't try to sync router state with Redux state. Use router state as a single source of truth for the state that can be stored in URL.
