import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SignInPage from "./pages/signIn";
import SignUpPage from "./pages/signUp";
import ErrorRoute from "./pages/errorRoute";
import ForgotPasswordPage from "./pages/forgotPassword";
import DashboardPage from "./pages/dashboard";
import BalancePage from "./pages/balance";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PredictionPage from "./pages/expense";
import VisualisationPage from "./pages/goal";

const App = () => {
  const myRouter = createBrowserRouter([
    {
      path: "/",
      element: <DashboardPage />,
      errorElement: <ErrorRoute />,
    },
    {
      path: "/login",
      element: <SignInPage />,
    },
    {
      path: "/register",
      element: <SignUpPage />,
    },
    {
      path: "/forgot-password",
      element: <ForgotPasswordPage />,
    },
    {
      path: "/balance",
      element: <BalancePage />,
    },
    {
      path: "/goal",
      element: <VisualisationPage />,
    },
    {
      path: "/expense",
      element: <PredictionPage />,
    },
  ]);
  function App() {
    return (
      <Router>
      <Routes>
        <Route path="/" element={<PredictionPage />} />
        <Route path="/visualisation" element={<VisualisationPage />} />
      </Routes>
    </Router>
    );
  }
  return (
    <>
      <RouterProvider router={myRouter} />
    </>
  );
};

export default App;
