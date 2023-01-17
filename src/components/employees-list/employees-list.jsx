import EmployeesListItem from "../employees-list-item/employees-list-item"

import './employees-list.css'

const EmployeesList = ({data, onDelete, onTogglePremium, onToggleLike}) => {

    const elements = data.map(elem => {
        const {id, ...elemProps} = elem

        return (
            <EmployeesListItem
                key={id}
                {...elemProps}
                onDelete = {() => onDelete(id)}
                onTogglePremium = {() => onTogglePremium(id)}
                onToggleLike = {() => onToggleLike(id)}
                />
        )
    });

    return (
        <ul className="app-list list-group">
            {elements}
        </ul>
    )
}

export default EmployeesList;