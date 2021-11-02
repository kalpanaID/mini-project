import '@coreui/coreui/dist/css/coreui.min.css';

const SubmitReview = () => {
    return (
        <div class="col-sm-6" >
        <div class="card">
        <div class="card-body">
            <h3>Submit Review Request</h3>
            <div className='div'></div>
            <div class="input-group mb-3">
                <span class="input-group-text">From  </span>
                <input class="form-control" type="text" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"></input>
            </div>
            <div class="input-group mb-3">
                <span class="input-group-text" > To    </span>
                <input class="form-control" type="text" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"></input>
            </div>
            <div class="input-group mb-3">
                <span class="input-group-text">Year  </span>
                <input class="form-control" type="text" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"></input>
            </div>
            <div class="input-group mb-3">
                <span class="input-group-text" >Quater</span>
                <input class="form-control" type="text" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"></input>
            </div>
            <div class="d-grid gap-2 col-12 mx-auto">
                <button class="btn btn-primary" type="button">ADD</button>
            </div>
        </div>
        </div>
        </div>
    );
}

export default SubmitReview;