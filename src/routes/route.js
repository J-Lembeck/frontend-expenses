import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Categories from '../pages/Categories/Categories';
import Expenses from '../pages/Expenses/Expenses';

const ApplicationRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Expenses />}></Route>
                <Route path='/categories' element={<Categories />}></Route>
                <Route path='*' element={<h1>ERROR 404 - PAGE NOT FOUND</h1>}></Route>
            </Routes>
        </BrowserRouter>
    )
}

export default ApplicationRoutes;