import '@coreui/coreui/dist/css/coreui.min.css';

const SubmitFeedback= () => {
    return (
        <div class="col-sm-6" >
        <div class="card">
        <div class="card-body">
            <h3>Submit Review Feedback</h3>
            <div className='div'></div>
            <div class="input-group mb-3">
                <span class="input-group-text">From</span>
                <input class="form-control" type="text" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"></input>
            </div>
            <div class="input-group mb-3">
                <span class="input-group-text" >To</span>
                <input class="form-control" type="text" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"></input>
            </div>
            <div class="input-group mb-3">
                <span class="input-group-text">Year</span>
                <input class="form-control" type="text" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"></input>
            </div>
            <div class="input-group mb-3">
                <span class="input-group-text" >Quater</span>
                <input class="form-control" type="text" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"></input>
            </div>
            <div class="input-group mb-3">
                <span class="input-group-text" >Rating</span>
                <input class="form-control" type="text" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"></input>
            </div>
            <div class="form-floating">
                <textarea class="form-control" id="floatingTextarea2" placeholder="Remarks" ></textarea>
                <label for="floatingTextarea2">Comments</label>
            </div>
            <div className='div'></div>
            <div class="d-grid gap-2 col-12 mx-auto">
                <button class="btn btn-primary" type="button">Submit</button>
            </div>
        </div>
        </div>
        </div>
    );
}

export default SubmitFeedback;