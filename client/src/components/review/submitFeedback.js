import '@coreui/coreui/dist/css/coreui.min.css';

const SubmitFeedback= () => {
    return (
        <div className="col-sm-6" >
        <div className="card">
        <div className="card-body">
            <h3>Submit Review Feedback</h3>
            <div className='div'></div>
            <div className="input-group mb-3">
                <span className="input-group-text">From</span>
                <input className="form-control" type="text" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"></input>
            </div>
            <div className="input-group mb-3">
                <span className="input-group-text" >To</span>
                <input className="form-control" type="text" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"></input>
            </div>
            <div className="input-group mb-3">
                <span className="input-group-text">Year</span>
                <input className="form-control" type="text" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"></input>
            </div>
            <div className="input-group mb-3">
                <span className="input-group-text" >Quater</span>
                <input className="form-control" type="text" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"></input>
            </div>
            <div className="input-group mb-3">
                <span className="input-group-text" >Rating</span>
                <input className="form-control" type="text" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"></input>
            </div>
            <div className="form-floating">
                <textarea className="form-control" id="floatingTextarea2" placeholder="Remarks" ></textarea>
                <label htmlFor="floatingTextarea2">Comments</label>
            </div>
            <div className='div'></div>
            <div className="d-grid gap-2 col-12 mx-auto">
                <button className="btn btn-primary" type="button">Submit</button>
            </div>
        </div>
        </div>
        </div>
    );
}

export default SubmitFeedback;