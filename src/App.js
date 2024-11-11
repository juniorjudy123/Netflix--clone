import './index.css';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Loginpage from "./pages/Loginpage";
import MainPage from "./pages/MainPage";

function App() {
  const appRouter = createBrowserRouter([
    {
      path: '/',
      element: <Loginpage />

    },
    {
      path: "/browse",
      element: <MainPage />
    }
  ])
  return (
    <div>
      <RouterProvider router={appRouter} />

    </div>
  );
}

export default App;
