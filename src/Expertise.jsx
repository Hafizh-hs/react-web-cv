function Expertise(props) {
  return (
    <>
      <span className="d-block fw-bold fs-5 mb-3">{props.expertise}</span>
      <p>{props.keterangan}</p>
    </>
  );
}

export default Expertise;
