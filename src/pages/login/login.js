import React, { useState } from "react";
import useApi from "../../components/Hooks/useApi";
import { setToken } from "../../redux/authSlice";
import { useDispatch } from "react-redux";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
    
  const api = useApi();

  const dispatch = useDispatch();

  // if(!props.location.href){
  //   document.location.href = './#'
  //   return
  // }

  const formOnSubmit = (event) => {
    //alert(`${email} ve ${password}`)
    
    event.preventDefault()

    const postData = {
      email,
      password,
    };
    console.log(">> POST DATA", postData);

    api
      .post("auth/login", postData)
      .then((response) => {
        dispatch(setToken(response.data.data.token));
        document.location.hash= '#/'
      })
      .catch((err) => {
        alert("Bir hata olustu");
      });
  };

  return (
    <div className="row justify-content-center">
      <div className="col-lg-4 col-md-6 col-sm-12">
        <h3>Lütfen buradan login olun</h3>

        <form noValidate onSubmit={formOnSubmit}>
          <div className="row g-3">
            <div className="col-sm-12">
              <label
                className="form-label"
                style={{ fontSize: "20px", fontWeight: "bold" }}
              >
                E-mail
              </label>
              <input
                type="email"
                className="form-control"
                placeholder="E-Mail"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
            </div>
            <div className="col-12">
              <label
                className="form-label"
                style={{ fontSize: "20px", fontWeight: "bold" }}
              >
                E-mail
              </label>
              <input
                type="password"
                className="form-control"
                placeholder="Password"
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
            </div>
            <div className="col-12">
              <div className="d-grid gap-2">
                <button
                  className="btn btn-primary"
                  type="submit"
                >
                  Login
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
