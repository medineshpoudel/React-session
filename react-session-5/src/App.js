import { BrowserRouter, Route, Routes } from "react-router-dom";
import AdminRoute from "./utils/AdminRoute";
import "./assets/css/App.css";
import Home from "./views/Home";
import NotFound from "./views/NotFound";
import Page1 from "./views/Sales/Page1";
import Page2 from "./views/Page2";
import { Provider } from "react-redux";
import { store } from "./redux/store";

//UI Framework vs CSS Framework

//CSS Framework - Bootstrap

//Bunch of stylesheets and classes, decorators, variables, functions, etc. related to CSS and JS (Jquery),
//Bootstrap 5 - Pure JS

//UI Framework - CSS Framework + Components related to a library/framework

//UI Framwework - Material UI, Alert, TextField

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <header className="App-header">
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
          {/* <Functional content={"Hello this is content"} />
        <HOC content={<Functional />} /> */}
          <BrowserRouter>
            <Routes>
              {/* To handle 404 */}
              <Route path="*" element={<NotFound />} />
              <Route path="/" element={<Home />} />
              <Route path="/page1/:id" element={<Page1 />} />
              <Route path="/page2" element={<AdminRoute loggedIn={true} />}>
                <Route index element={<Page2 />} />
              </Route>
            </Routes>
          </BrowserRouter>
        </header>
      </div>
    </Provider>
  );
}

export default App;
