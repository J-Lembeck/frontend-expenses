import React, { useEffect } from "react";
import Header from "../../Components/Header";
import api from "../../services/api";

const Categories = () => {

    useEffect(() => {
        // /find-all

        async function loadExpenses() {
            const response = await api.get('/expenses/find-all');
            const response2 = await api.get('/categories/find-all');
            console.log(response);
            console.log(response2);
        }
        loadExpenses();
    }, []);

    return (
        <>
            <Header />
            <h1>Despesas</h1>
        </>
    )
}

export default Categories;