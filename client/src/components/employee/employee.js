import '@coreui/coreui/dist/css/coreui.min.css';

const Employees = () => {
    return (
        <div class="col-sm-6" >
        <div class="card">
        <div class="card-body">
        <div class="col">
            <h3>Employees</h3> <button class="btn btn-primary" type="button">Add</button>
        </div>
        <div className='div'></div>
        <div className='child'></div>
        <table class="table table-hover">
        <thead>
        <tr>
            <th scope="col">Emp Id</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Action</th>
        </tr>
        </thead>
        <tbody>
        <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
        </tr>
        </tbody>
        </table>
        </div>
        </div>
        </div>
    );
}

export default Employees; 