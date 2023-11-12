import Profile from "./Profile";
import Expertise from "./Expertise";
import Skills from "./Skills";

import data from "./data.js";

function App() {
  return (
    <div className="container bg-light">
      <div className="row">
        <div className="col-md-4 border-end">
          <div className="m-4">
            <Profile
              nama={data.profile.nama}
              jabatan={data.profile.jabatan}
              deskripsi={data.profile.deskripsi}
              gambar={data.profile.gambar}
            />
          </div>
        </div>
        <div className="col-md-8 border-top">
          <div className="row">
            <div className="col-12">
              <div className="m-4">
                <span className="text-secondary fw-bold fs-4">Expertise</span>
                <div className="row">
                  {data.expertise.map((expertise, index) => {
                    return (
                      <div className="col-md-6" key={index}>
                        <div className="mt-4">
                          <Expertise
                            keterangan={expertise.keterangan}
                            expertise={expertise.expertise}
                          />
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
            <div className="col-12 border-top">
              <div className="m-4">
                <span className="text-secondary fw-bold fs-4">Skills</span>
                <div className="row">
                  {data.skills.map((skill, index) => {
                    return (
                      <div className="col-12" key={index}>
                        <div className="mt-4">
                          <span className="fs-5 mb-2 d-block">
                            {skill.title}
                          </span>
                          <div className="progress" role="progressbar">
                            <div
                              className="progress-bar bg-warning"
                              style={{ width: `${skill.percentage}%` }}
                            >
                              {skill.percentage}%
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
