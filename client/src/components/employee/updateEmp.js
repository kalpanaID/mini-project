import '@coreui/coreui/dist/css/coreui.min.css';

const UpdateEmp = () => {
    return (
        <div className="col-sm-6" >
        <div className="card">
        <div className="card-body">
            <h3>Update Employee Info</h3>
            <div className='div'></div>
            <div className="input-group mb-3">
                <span className="input-group-text" id="basic-addon1">*</span>
                <input className="form-control" type="text" placeholder="Name" aria-label="Name" aria-describedby="basic-addon1"></input>
            </div>
            <div className="input-group mb-3">
                <span className="input-group-text" id="basic-addon1">@</span>
                <input className="form-control" type="text" placeholder="Email" aria-label="Email" aria-describedby="basic-addon1"></input>
            </div>
            <div className="input-group mb-3">
            <span className="input-group-text" id="basic-addon1">#</span>
            <select className="form-select" aria-label="Default select example" >
                <option value="1">Admin</option>
                <option value="2">Employee</option>
            </select>
            </div>
            <div className="d-grid gap-2 col-12 mx-auto">
                <button className="btn btn-primary" type="button">Update</button>
            </div>
        </div>
        </div>
        </div>
    );
}

export default UpdateEmp; 