import './App.css';
import PageWrapper from './components/layouts/page-wrapper/page-wrapper';
import Header from './components/layouts/header/header';
import Footer from './components/layouts/footer/footer';
import Main from './components/pages/main';
import { ThemeProvider } from 'styled-components';
import theme from './components/ui/theme';
import Catalog from './components/pages/catalog';
import { AppRoute } from "./const";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <PageWrapper>
        <Router>
          <Header/>
          <Routes>
            <Route index path={AppRoute.MAIN} element={<Main/>}/>
            <Route path={AppRoute.BUY} element={<Catalog/>}/>
          </Routes>
          <Footer/>
        </Router>
      </PageWrapper>
    </ThemeProvider>
  );
}

export default App;
