function Profile(props) {
  return (
    <div>
      <img
        src={`/images/${props.gambar}`}
        alt=""
        className="rounded w-100"
      ></img>
      <div className="mt-5">
        <h1 className="fw-bold">{props.nama}</h1>
        <p className="fs-4">{props.jabatan}</p>
        <p>{props.deskripsi}</p>
      </div>
    </div>
  );
}

export default Profile;
