export default function Product(props){
    return (
        <div className="col-md-12 col-lg-4 mb-4 mb-lg-0">
            <div className="card">
                <div className="d-flex justify-content-between p-3">
                <p className="lead mb-0">Today's Combo Offer</p>
                <div
                    className="bg-info rounded-circle d-flex align-items-center justify-content-center shadow-1-strong"
                    style={{ width: "35px", height: "35px" }}>
                    <p className="text-white mb-0 small">{props.offer}</p>
                </div>
                </div>
                <img src={props.image}
                className="card-img-top" alt="Laptop" />
                <div className="card-body">
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
                    <div className="ms-auto text-warning">
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    </div>
                </div>
                </div>
            </div>
            </div>
    )
}