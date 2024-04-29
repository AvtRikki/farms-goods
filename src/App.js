import './App.css';
import PageWrapper from './components/layouts/page-wrapper/page-wrapper';
import Header from './components/layouts/header/header';
import Footer from './components/layouts/footer/footer';
import Main from './components/pages/main';
import { ThemeProvider } from 'styled-components';
import theme from './components/ui/theme';
import Catalog from './components/pages/catalog';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <PageWrapper>
        <Header/>
        <Catalog/>
        {/* <Main/> */}
        <Footer/>
      </PageWrapper>
    </ThemeProvider>
  );
}

export default App;
