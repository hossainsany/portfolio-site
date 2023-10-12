import { Route, Routes, useLocation } from 'react-router-dom';
import { Home, NotFound, ProjectsPage, FormSuccess } from './pages';
import { Footer, Navbar } from './components';
import ScrollToTop from './components/utils/ScrollToTop';

function App() {
    const location = useLocation();
    return (
        <>
            <Navbar location={location} />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/projects' element={<ProjectsPage />} />
                <Route path='/form-success' element={<FormSuccess />} />
                <Route path='*' element={<NotFound />} />
            </Routes>
            <Footer location={location} />
            <ScrollToTop />
        </>
    );
}

export default App;
