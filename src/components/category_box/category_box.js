function CategoryBox(props) {
  return (
    <div className="col">
      <div className="card mb-4 rounded-3 shadow-sm border-primary">
        <div className="card-header py-3 text-bg-primary border-primary">
          <h4 className="my-0 fw-normal">{props.name}</h4>
        </div>
        <div className="card-body">
          <img
            src={props.image}
            style={{ width: "100%", height: "300px", margin: "10px" }}
          />
          <a
            className="btn btn-primary btn-lg w-100"
            href={`/category/${props.slug}`}
          >
            Details
          </a>
        </div>
      </div>
    </div>
  );
}

export default CategoryBox;
