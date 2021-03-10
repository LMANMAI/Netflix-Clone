import Router from "./routes";
import "./assets/styles/global.css";
import { AuthProvider } from "./provider/AuthProvider";

function App() {
  return (
    <AuthProvider>
      <Router />
    </AuthProvider>
  );
}

export default App;
