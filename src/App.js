import './App.css';
import SurveyPage from './questions/Page';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div>
        <h1>Hello World</h1>
        {/* <Link to="about">About Us</Link> */}
      </div>
    ),
  },
  {
    path: "/questions",
    element: <SurveyPage/>,
  },
]);

function App() {
  return (
    <RouterProvider router={router} />

  );
}

export default App;
