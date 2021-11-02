import '@coreui/coreui/dist/css/coreui.min.css';

const UpdateEmp = () => {
    return (
        <div class="col-sm-6" >
        <div class="card">
        <div class="card-body">
            <h3>Update Employee Info</h3>
            <div className='div'></div>
            <div class="input-group mb-3">
                <span class="input-group-text" id="basic-addon1">*</span>
                <input class="form-control" type="text" placeholder="Name" aria-label="Name" aria-describedby="basic-addon1"></input>
            </div>
            <div class="input-group mb-3">
                <span class="input-group-text" id="basic-addon1">@</span>
                <input class="form-control" type="text" placeholder="Email" aria-label="Email" aria-describedby="basic-addon1"></input>
            </div>
            <div class="input-group mb-3">
            <span class="input-group-text" id="basic-addon1">#</span>
            <select class="form-select" aria-label="Default select example" >
                <option value="1">Admin</option>
                <option value="2">Employee</option>
            </select>
            </div>
            <div class="d-grid gap-2 col-12 mx-auto">
                <button class="btn btn-primary" type="button">Update</button>
            </div>
        </div>
        </div>
        </div>
    );
}

export default UpdateEmp; 