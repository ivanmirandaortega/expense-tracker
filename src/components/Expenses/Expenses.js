import React, { useState } from "react";
import Card from '../Card/Card'
import './Expenses.css'
import ExpensesFilter from "../ExpensesFilter/ExpensesFilter";
import ExpensesList from "../ExpensesList/ExpensesList";

function Expenses(props) {
    const [filteredYear, setFilteredYear] = useState('2022')

    function filterChangeHandler(selectedYear) {
        console.log(selectedYear)
        setFilteredYear(selectedYear)
    }

    const filteredExpenses = props.items.filter(expense => {
        return expense.date.getFullYear().toString() === filteredYear
    })

    return (
        <div>
            <Card className="expenses">
                <ExpensesFilter
                    selected={filteredYear}
                    onChangeFilter={filterChangeHandler}
                />
                <ExpensesList items={filteredExpenses} />
            </Card>
        </div>
    )
}

export default Expenses;