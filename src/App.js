import { Switch, Route } from "react-router-dom";

import Layout from "./components/Layout/Layout";
import UserProfile from "./components/Profile/UserProfile";
import AuthPage from "./pages/AuthPage";
import HomePage from "./pages/HomePage";
import { useContext } from "react";
import { LoginToken } from "./Store/LoginContext";
function App() {
  const ctxData = useContext(LoginToken);
  return (
    <Layout>
      <Switch>
        <Route path="/" exact>
          <HomePage />
        </Route>
        {!!!ctxData.token && (
          <Route path="/auth">
            <AuthPage />
          </Route>
        )}

        {!!ctxData.token && (
          <Route path="/profile">
            <UserProfile />
          </Route>
        )}
      </Switch>
    </Layout>
  );
}

export default App;
