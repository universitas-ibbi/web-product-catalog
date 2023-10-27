export default function ProductPage() {
    return (
        <div className="card mb-3">
            <div className="row g-0">
                <div className="col-md-4">
                    <img src="..." className="img-fluid rounded-start"></img>
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <div className="d-flex justify-content-between p-3">
                            <p className="lead mb-0">Today's Combo Offer</p>
                            <div
                                className="bg-info rounded-circle d-flex align-items-center justify-content-center shadow-1-strong"
                                style={{ width: "35px", height: "35px" }}>
                                <p className="text-white mb-0 small">{props.offer}</p>
                            </div>
                        </div>
                        <div className="d-flex justify-content-between">
                            <p className="small"><a href="#!" className="text-muted">{props.type}</a></p>
                            <p className="small text-danger"><s>${props.priceBefore}</s></p>
                        </div>

                        <div className="d-flex justify-content-between mb-3">
                            <h5 className="mb-0">{props.productName}</h5>
                            <h5 className="text-dark mb-0">${props.priceAfter}</h5>
                        </div>

                        <div className="d-flex justify-content-between mb-2">
                            <p className="text-muted mb-0">Available: <span className="fw-bold">{props.stock}</span></p>
                            <Star rating={props.rating} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}