import Router from "./routes";
import "./assets/styles/global.css";
import { Provider } from "react-redux";
import store from "./app/store";
function App() {
  return (
    <Provider store={store}>
      <Router />
    </Provider>
  );
}

export default App;
