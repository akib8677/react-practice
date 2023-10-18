import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './components/Layout';
import Home from './components/Home';
import AppProvider from './context/appContext'
import Checkout from './components/Checkout';
import { ReviewAndSubmit } from './components/ReviewSubmitOrder';

function App() {

  return (
    <AppProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
          </Route>
          <Route path='/checkout' exact element={<Checkout />} />
          <Route path='/review' exact element={<ReviewAndSubmit />} />
        </Routes>
      </BrowserRouter>
    </AppProvider>
  );
}

export default App;
