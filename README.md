# Digital Wall

https://digi-wall-fawn.vercel.app/

The Digital Wall is a web application that allows users to create and manage boards, where they can express their thoughts on common topics easily. Users can share text and pictures by creating posts within the boards. The application is built using Next.js and Tailwind CSS and includes the following functionalities.

# Features

Module 1: Basic Functionalities

```Wall:``` Users can view a list of all boards on the wall. They can create new boards, update existing boards, and delete boards.

```Board:``` Each board displays a collection of posts. Users can create new posts, update existing posts, and delete posts within a specific board.

```Like Posts:``` Users can like posts on the board.

```Search Boards:``` Users can search for boards by title on the wall.

```Search Posts:``` Users can search for posts by title on a particular board.

#### CRUD Operations:

```Create:``` Users can create new boards and posts.

```Read:``` Users can view all boards and posts.

```Update:``` Users can update the title and content of boards and posts.

```Delete:``` Users can delete boards and posts.


# Technologies Used
```Next.js:``` A React framework for building rendered applications.

```Tailwind CSS:``` A utility-first CSS framework for rapid UI development.

# Getting Started

#### 1. Navigate to the project directory:

```bash
cd digital-wall
```

#### 2. Install dependencies:

```bash
npm install
```

#### 3. Start the development server:

```bash
npm run dev
```

Open your web browser and visit http://localhost:3000 to access the application.

# Folder Structure
The project follows the following folder structure:

```components:``` Contains reusable React components used throughout the application.

```pages:``` Contains Next.js pages representing different routes of the application.

```public:``` Contains static assets like images and the favicon.

```styles:``` Contains global CSS and Tailwind CSS configuration.

# How to Use
```Home Page:``` The homepage displays a list of all the boards on the wall. Users can create new boards by clicking the "Create Board" button. Users can also search for boards by title using the search bar.

```Board Page:``` Clicking on a board's title will take the user to the board page. Here, users can view all the posts within the board and create new posts by clicking the "Add New Post" button. Users can also search for posts by title using the search bar. Each post has an option to delete, and users can like posts by clicking the heart icon.

#### CRUD Operations:
You can perform CRUD operations as follows:

```Create:``` Click the "Create Board" button to add a new board, and click the "Add New Post" button on a board page to create a new post.

```Read:``` View all boards and posts on their respective pages.

```Update:``` Click the "Edit" button on a board or post to update its title or content.

```Delete:``` Click the "Delete" button on a board or post to delete it.

#### Search:

Users can search boards by title in the wall/Homepage, and posts by title on the particular board.

# Note

The data for this application resides on the frontend, so any changes made will not persist after the page is refreshed. It is intended for demonstration purposes only.


# Author
Heet Dedakiya