function Skill(props) {
  return (
    <>
      <span className="fs-5 mb-2 d-block">{props.title}</span>
      <div className="progress" role="progressbar">
        <div
          className="progress-bar bg-warning"
          style={{ width: `${props.percentage}%` }}
        >
          {props.percentage}%
        </div>
      </div>
    </>
  );
}

export default Skill;
