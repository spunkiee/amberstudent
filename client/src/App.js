import React, { useEffect, useState } from "react";
import axios from "axios";
import location from "./assets/location.png";

function App() {
  const [state, setState] = useState("");
  const [appData, setAppData] = useState({});

  const handelChange = (e) => {
    setState(e.target.value);
    console.log(appData);
  };

  useEffect(() => {
    const apiUrl = `https://base.amberstudent.com/api/v0/regions?sort_key=search_name&sort_order=desc&states=active&search_name=${state}`;
    axios.get(apiUrl).then((repos) => {
      const allRepos = repos.data;
      setAppData(allRepos);
    });
  }, [state]);

  return (
    <>
      <div className="container">
        <div className="background-image">
          <div className="card-overlay">
            <div className="heading-container">
              <div className="heading-title">Home away from Home</div>
              <div className="heading-desc">
                Book your student accommodation near top universities across the
                globe.
              </div>
            </div>
            <div className="input-container">
              <div className="input-field">
                <input
                  type="text"
                  placeholder="Search by College or City"
                  onChange={handelChange}
                  value={state}
                />
                {state.length > 0 && state.length < 3 && (
                  <div className="suggestion-container">
                    {`Please type ${3 - state.length} more letter to get
                    suggestions`}
                  </div>
                )}
                {state.length >= 3 && appData.data.result.length >= 5 && (
                  <div className="result-container">
                    <div className="result">
                      <div className="location-image">
                        <img src={location} alt="" />
                      </div>
                      <div className="result-data">
                        <div className="result-heading">
                          {appData.data.result[0].name}
                        </div>
                        <div className="result-desc">
                          {appData.data.result[0].secondary_name}
                        </div>
                      </div>
                    </div>
                    <div className="result">
                      <div className="location-image">
                        <img src={location} alt="" />
                      </div>
                      <div className="result-data">
                        <div className="result-heading">
                          {" "}
                          {appData.data.result[1].name}
                        </div>
                        <div className="result-desc">
                          {appData.data.result[1].secondary_name}
                        </div>
                      </div>
                    </div>
                    <div className="result">
                      <div className="location-image">
                        <img src={location} alt="" />
                      </div>
                      <div className="result-data">
                        <div className="result-heading">
                          {" "}
                          {appData.data.result[2].name}
                        </div>
                        <div className="result-desc">
                          {appData.data.result[2].secondary_name}
                        </div>
                      </div>
                    </div>
                    <div className="result">
                      <div className="location-image">
                        <img src={location} alt="" />
                      </div>
                      <div className="result-data">
                        <div className="result-heading">
                          {" "}
                          {appData.data.result[3].name}
                        </div>
                        <div className="result-desc">
                          {appData.data.result[3].secondary_name}
                        </div>
                      </div>
                    </div>
                    <div className="result">
                      <div className="location-image">
                        <img src={location} alt="" />
                      </div>
                      <div className="result-data">
                        <div className="result-heading">
                          {" "}
                          {appData.data.result[4].name}
                        </div>
                        <div className="result-desc">
                          {appData.data.result[4].secondary_name}
                        </div>
                      </div>
                    </div>
                  </div>
                )}
                {state.length >= 3 && appData.data.result.length < 5 && (
                  <div className="result-container">
                    {appData.data.result.map((data) => {
                      return (
                        <div key={data.id} className="result">
                          <div className="location-image">
                            <img src={location} alt="" />
                          </div>
                          <div className="result-data">
                            <div className="result-heading"> {data.name}</div>
                            <div className="result-desc">
                              {data.secondary_name}
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>
              <div className="submit-button">
                <button>Submit</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
