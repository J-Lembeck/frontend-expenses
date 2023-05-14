import React, { useEffect, useState } from "react";
import Header from "../../Components/Header";
import api from "../../services/api";

const Categories = () => {

    const [expenses, setExpenses] = useState([]);
    const [categories, setCategories] = useState([]);

    useEffect(() => {

        async function loadExpenses() {
            const expensesResponse = await api.get('/expenses/find-all');
            const categoriesResponse = await api.get('/categories/find-all');

            setExpenses(expensesResponse.data);
            setCategories(categoriesResponse.data)
        }
        loadExpenses();
    }, []);

    return (
        <>
            <Header />
            <h1>{
                expenses.map((expense) => {
                    return (
                        <div>
                            <h1>{expense.description}</h1>
                            <h2>{expense.value}</h2>
                            <p>--------------------------------------------</p>
                        </div>
                    )
                })
            }</h1>
            <h1>{
                categories.map((categorie) => {
                    return (
                        <div>
                            <h1>{categorie.description}</h1>
                            <p>--------------------------------------------</p>
                        </div>
                    )
                })
            }</h1>
        </>
    )
}

export default Categories;