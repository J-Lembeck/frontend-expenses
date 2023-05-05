import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Categories from '../pages/Categories';
import Expenses from '../pages/Expenses';
import Index from '../pages/Index';

const ApplicationRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Index />}></Route>
                <Route path='/categories' element={<Categories />}></Route>
                <Route path='/expenses' element={<Expenses />}></Route>
                <Route path='*' element={<h1>ERROR 404 - PAGE NOT FOUND</h1>}></Route>
            </Routes>
        </BrowserRouter>
    )
}

export default ApplicationRoutes;