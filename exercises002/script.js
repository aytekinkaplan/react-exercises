const header = (
  <header>
    <h1>My Blog</h1>
    <p>Welcome to my personal blog</p>
  </header>
);

const main = (
  <main>
    <h2>Main Content</h2>
    <p>
      Welcome to the main content of this blog. Here, you can find a variety of
      articles on different topics including technology, lifestyle, and more.
      Enjoy your stay!
    </p>
  </main>
);

const footer = (
  <footer>
    <p>&copy; 2024 My Blog. All rights reserved.</p>
    <p>
      Follow me on
      <a href="#">Twitter</a>,<a href="#">LinkedIn</a>, and
      <a href="#">GitHub</a>.
    </p>
  </footer>
);
const App = () => (
  <React.Fragment>
    {header}
    {main}
    {footer}
  </React.Fragment>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
