import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddForm from '../employes-add-form/employees-add-form';

import './app.css'

function App() {

    const data = [
        {name: 'Michel S.', salary: 3000, premium: false, id: 1},
        {name: 'Alex M.', salary: 800, premium: true, id: 2},
        {name: 'Leo K.', salary: 5000, premium: false, id: 3}
    ]

    return (
        <div className="app">
            <AppInfo />

            <div className="search-panel">
                <SearchPanel />
                <AppFilter />
            </div>

            <EmployeesList data={data} />

            <EmployeesAddForm />
        </div>
    )
}

export default App;