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
            ],
            term: '',
            filter: 'all'
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

    onToggleProp = (id, prop) => {
        this.setState(({data}) => ({
            data: data.map(elem => {
                if (elem.id === id) {
                    return {...elem, [prop]: !elem[prop]}
                }
                return elem
            })
        }))
    }

    searchEmployees = (items, term) => {
        if (term.length === 0) {
            return items;
        }
        
        return items.filter(item => {
            return item.name.indexOf(term) > -1
        })
    }

    onUpdateSearch = (term) => {
        this.setState({term});
    }
    
    onFilter = (items, filter) => {
        switch(filter) {
            case 'like':
                return items.filter(elem => elem.like);
            case 'salary1000':
                return items.filter(elem => elem.salary > 1000);
            default:
                return items;
        }
    }

    onFilterChange = (filter) => {
        this.setState({filter})
    }

    render() {
        const {data, term, filter} = this.state
        const sumEmp = this.state.data.length;
        const sumPremEmp = this.state.data.filter(item => item.premium).length;
        const visibleData = this.onFilter(this.searchEmployees(data, term), filter);

        return (
            <div className="app">
                <AppInfo
                    sumEmp={sumEmp}
                    sumPremEmp={sumPremEmp} />
    
                <div className="search-panel">
                    <SearchPanel onUpdateSearch={this.onUpdateSearch} />
                    <AppFilter filter={filter} onFilterChange={this.onFilterChange}/>
                </div>
    
                <EmployeesList
                    data={visibleData}
                    onDelete={this.deleteItem}
                    onToggleProp={this.onToggleProp} />
    
                <EmployeesAddForm onAdd={this.addItem} />
            </div>
        )
    }
}

export default App;