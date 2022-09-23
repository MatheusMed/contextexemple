import { Route, BrowserRouter, Routes } from "react-router-dom";

import { ShowData } from "./pages/ShowData";
import { SignUp } from "./pages/SignUp";

import { ContextProvider } from "./contexts/Context";


function App() {
  return (
    <ContextProvider>
      <BrowserRouter>
        <h1>Titulo da pagina</h1>
        <hr />
        <Routes>
          <Route path="/" element={<SignUp />} />
          <Route path="/exibir" element={<ShowData />} />
        </Routes>
      </BrowserRouter>
    </ContextProvider>
  );
}

export default App;