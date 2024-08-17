// Exercises: Why React?

/\*

1. What is React?

   - React is a JavaScript library for building user interfaces, primarily for single-page applications. It's used to create reusable UI components.

2. What is a library?

   - A library is a collection of pre-written code that developers can use to optimize tasks. It provides specific functionalities that can be utilized within an application.

3. What is a single page application?

   - A single-page application (SPA) is a web application that interacts with the user by dynamically rewriting the current page rather than loading entire new pages from the server.

4. What is a component?

   - A component is an independent, reusable piece of UI in a React application. Components can be functional or class-based.

5. What is the latest version of React?

   - The latest version of React is always evolving. As of August 2024, the latest stable version is 18.x.x.

6. What is DOM?

   - DOM (Document Object Model) is a programming interface for web documents. It represents the structure of a document and allows scripts to manipulate its content and structure.

7. What is React Virtual DOM?

   - The React Virtual DOM is a lightweight copy of the actual DOM. React uses it to determine what changes need to be made to the actual DOM, improving performance.

8. What does a web application or a website(composed of) have?
   - A web application or website typically consists of HTML, CSS, and JavaScript. It may also include images, media, APIs, and backend services.
     \*/

// Exercises: Why React?

/\*

1. Why did you choose to use React?

   - React is chosen for its component-based architecture, which promotes reusability and maintainability. It also has a large ecosystem, strong community support, and excellent performance due to its Virtual DOM.

2. What measures do you use to know popularity?

   - Popularity can be measured by the number of GitHub stars, npm downloads, job postings, and developer surveys.

3. What is more popular, React or Vue?
   - React is generally more popular than Vue. It has a larger community, more job opportunities, and is used by more large-scale companies.
     \*/

// Exercises: JSX

/\*

1. What is an HTML element?

   - An HTML element is a part of a webpage defined by a start tag, end tag, and the content in between.

2. How to write a self-closing HTML element?

   - A self-closing HTML element is written with a slash before the closing angle bracket, e.g., <img />, <br />.

3. What is an HTML attribute? Write some of them.

   - An HTML attribute provides additional information about an element. Examples include `class`, `id`, `src`, `href`, `alt`.

4. What is JSX?

   - JSX is a syntax extension for JavaScript that allows you to write HTML directly within JavaScript code.

5. What is Babel?

   - Babel is a JavaScript compiler that translates modern JavaScript and JSX syntax into code that is compatible with older browsers.

6. What is a transpiler?
   - A transpiler converts source code from one programming language into another language with a similar level of abstraction.
     \*/

// Exercises: JSX Elements

/\*

1. What is a JSX element?

   - A JSX element is an element written in JSX syntax, representing a React element that can be rendered in the DOM.

2. Write your name in a JSX element and store it in a name variable.

   const name = <h1>Aytekin Kaplan</h1>;

3. Write a JSX element which displays your full name, country, title, gender, email, phone number. Use h1 for the name and p for the rest of the information and store it in a user variable.

```js
const user = (
  <div>
    <h1>Aytekin Kaplan</h1>
    <p>Country: Turkey</p>
    <p>Title: Fullstack Developer</p>
    <p>Gender: Male</p>
    <p>Email: ytknkpln@gmail.com</p>
  </div>
);
```

4. Write a footer JSX element.

```js
   const footer = <footer>© 2024 Aytekin Kaplan. All rights reserved.</footer>;
   \*/

// Exercises: Inline Style

/\*
```

1. Create a style object for the main JSX.

   const mainStyle = {
   backgroundColor: '#f4f4f4',
   padding: '20px',
   fontFamily: 'Arial, sans-serif'
   };

2. Create a style object for the footer and app JSX.

   const footerStyle = {
   backgroundColor: '#333',
   color: '#fff',
   textAlign: 'center',
   padding: '10px',
   position: 'fixed',
   bottom: '0',
   width: '100%'
   };

   const appStyle = {
   margin: '0 auto',
   maxWidth: '960px'
   };

3. Add more styles to the JSX elements.

   const headerStyle = {
   color: '#333',
   fontSize: '2em',
   textAlign: 'center',
   margin: '10px 0'
   };

   const paragraphStyle = {
   lineHeight: '1.6',
   marginBottom: '15px'
   };
   \*/

// Exercises: Internal Styles

/\*

1. Apply different styles to your JSX elements.

   const headerStyle = {
   backgroundColor: '#282c34',
   padding: '20px',
   color: 'white',
   textAlign: 'center'
   };

   const footerStyle = {
   backgroundColor: '#20232a',
   color: '#61dafb',
   textAlign: 'center',
   padding: '10px',
   position: 'fixed',
   bottom: '0',
   width: '100%'
   };

   const appStyle = {
   maxWidth: '600px',
   margin: '0 auto',
   padding: '20px'
   };
   \*/

// Exercise: Inject data to JSX

/\*

1. Practice how to make JSX element and injecting dynamic data (string, number, boolean, array, object).

   const name = 'Aytekin Kaplan';
   const age = 30;
   const isDeveloper = true;
   const skills = ['JavaScript', 'React', 'Node.js'];
   const contact = {
   email: 'ytknkpln@gmail.com',
   phone: '+905432634397'
   };

   const user = (
   <div>
   <h1>{name}</h1>
   <p>Age: {age}</p>
   <p>Is Developer: {isDeveloper.toString()}</p>
   <p>Skills: {skills.join(', ')}</p>
   <p>Email: {contact.email}</p>
   <p>Phone: {contact.phone}</p>
   </div>
   );
   \*/
