# reactJS-course-project

## TASK 2

### Description

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

### Description

Write components implementing HTML markup for required design [for home page](https://www.figma.com/file/fKGjrOqR6nJe6LYJopGCZ8/CDP-Home-Task-%E2%80%93-React-v1?node-id=0%3A2) of InVision prototype (Only UI part).
For this part, no need to implement API calls and routing, the task can be done with mocked data.

Implement and use [ErrorBoundary](https://reactjs.org/docs/error-boundaries.html)
component for catching and displaying errors.
You could create one component and wrap all your application or use several components.

## TASK 4

### Description

Implement markup and styles for [“Add movie”](https://www.figma.com/file/fKGjrOqR6nJe6LYJopGCZ8/CDP-Home-Task-%E2%80%93-React-v1?node-id=0%3A505), [“Edit”](https://www.figma.com/file/fKGjrOqR6nJe6LYJopGCZ8/CDP-Home-Task-%E2%80%93-React-v1?node-id=0%3A1005), [“Delete”](https://www.figma.com/file/fKGjrOqR6nJe6LYJopGCZ8/CDP-Home-Task-%E2%80%93-React-v1?node-id=0%3A1817) modal windows and “sorting”.

No need to implement real API calls. Only add pages with mocked data.
