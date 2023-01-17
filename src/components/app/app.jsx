import { Component } from 'react';

import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddForm from '../employes-add-form/employees-add-form';

import './app.css'

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                {name: 'Michel S.', salary: 3000, premium: false, like: false, id: 1},
                {name: 'Alex M.', salary: 800, premium: true, like: true, id: 2},
                {name: 'Leo K.', salary: 5000, premium: false, like: false, id: 3}
            ]
        }
        this.maxId = 4;
    }

    deleteItem = (id) => {
        this.setState(({data}) => {
            return {
                data: data.filter(item => item.id !== id)
            }
        })
    }

    addItem = (name, salary) => {
        const newItem = {
            name,
            salary,
            premium: false,
            like: false,
            id: this.maxId++
        }
        this.setState(({data}) => {
            return {
                data: [...data, newItem]
            }
        })
    }

    onTogglePremium = (id) => {
        this.setState(({data}) => ({
            data: data.map(elem => {
                if (elem.id === id) {
                    return {...elem, premium: !elem.premium}
                }
                return elem
            })
        }))
    }

    onToggleLike = (id) => {
        console.log(`Like this ${id}`)
    }
    
    render() {
        return (
            <div className="app">
                <AppInfo />
    
                <div className="search-panel">
                    <SearchPanel />
                    <AppFilter />
                </div>
    
                <EmployeesList
                    data={this.state.data}
                    onDelete={this.deleteItem}
                    onTogglePremium={this.onTogglePremium}
                    onToggleLike={this.onToggleLike} />
    
                <EmployeesAddForm onAdd={this.addItem} />
            </div>
        )
    }
}

export default App;