import React, { useState } from "react";
import ExpenseItem from "../ExpenseItem/ExpenseItem";
import Card from '../Card/Card'
import './Expenses.css'
import ExpensesFilter from "../ExpensesFilter/ExpensesFilter";

function Expenses(props) {
    const [filteredYear, setFilteredYear] = useState('2022')

    function filterChangeHandler(selectedYear) {
        console.log(selectedYear)
        setFilteredYear(selectedYear)
    }

    return (
        <div>
            <Card className="expenses">
                <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
                {props.items.map(expense =>
                    <ExpenseItem
                        key={expense.id}
                        title={expense.title}
                        amount={expense.amount}
                        date={expense.date}
                    />)}
            </Card>
        </div>
    )
}

export default Expenses;