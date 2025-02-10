# Set Up a New React Project Using Vite
npm create vite@latest todo-app --template react - Creates a new React project using Vite.
cd todo-app - Navigates into the project folder.
npm install - Installs all necessary dependencies.
npm run dev - Starts a development server (http://localhost:5173).

# created Components folder in src - Stores reusable components
Header.jsx - Displays app title
ToDoList.jsx - Displays the list of tasks
ToDoItem.jsx - Displays a single task (with edit/delete)

# src folder 
styles.css - Styles for the web page

# To-Do List App
Add new tasks
Mark tasks as completed
Edit tasks
Delete tasks
Responsive and user-friendly UI

# Breakdown of App.jsx:

useState([]) → Manages the list of tasks.
addTask() → Adds a new task to the list.
toggleTask(id) → Marks a task as complete/incomplete.
deleteTask(id) → Removes a task from the list.
editTask(id, newText) → Updates a task’s text.
ToDoList Component → Renders the list of tasks.

# Breakdown of Header.jsx:

Simple component that displays the app title.

# Breakdown of ToDoList.jsx:

tasks.map(task => <ToDoItem key={task.id} />) → Loops through tasks and renders each task using ToDoItem.
key={task.id} → Ensures each item has a unique key for performance optimization.
Props (toggleTask, deleteTask, editTask) → Passed down to ToDoItem for functionality.

# Breakdown of ToDoItem.jsx:

isEditing → Controls whether the task is in edit mode.
handleEdit() → Updates the task text when the "Save" button is clicked.
toggleTask(task.id) → Marks a task as complete/incomplete when clicked.
deleteTask(task.id) → Removes a task.
Uses conditional rendering:
If editing → Shows an input box & save button.
If not editing → Shows task text with "Edit" & "Delete" buttons.

# Breakdown of styles.css:

Centers the app.
Styles the list, buttons, and input fields.
Adds a "line-through" effect for completed tasks.

<!-- Uses React Hooks (useState) for state management.
Implements CRUD Operations (Create, Read, Update, Delete).
Uses Props for passing data between components.
Styled with CSS for a clean UI. -->