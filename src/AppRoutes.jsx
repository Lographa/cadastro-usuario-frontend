import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import HomePage from "./pages/homePage";
import LoginPage from "./pages/loginPages";
import { AuthContext, AuthProvider } from "./contexts/auth";
import { useContext } from "react";

const AppRoutes = () => {
  const Private = ({ children }) => {
    const { authenticated, loading } = useContext(AuthContext);

    if(loading){
      return <div className="loading">Carregando</div>
    }
  
    if (!authenticated) {
      return <Navigate to={"/login"} />;
    }
    return children;
  };

  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route exact path="/login" element={<LoginPage />} />
          <Route
            exact
            path="/"
            element={
              <Private>
                <HomePage />
              </Private>
            }
          />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
};

export default AppRoutes;
