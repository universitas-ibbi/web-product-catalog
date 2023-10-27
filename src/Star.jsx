export default function Star(props){
    return (
        <div className="ms-auto text-warning">
            {[...Array(5)].map((star, index) => {
                index += 1;
                return (
                    <span key={index}>
                        <i className={index <= props.rating ? "fas fa-star" : "far fa-star"}></i>
                    </span>
                )
            })}
        </div>
    )
}