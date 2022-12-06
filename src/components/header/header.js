import { useDispatch, useSelector } from "react-redux";
import { removeToken } from "../../redux/authSlice";
import {removeAppData} from "../../redux/appDataSlice"

function Header() {
  const authState = useSelector((state) => state.auth);

  const appDataState = useSelector((state) => state.appData);

  console.log(">> HEADER APP DATA STATE", appDataState);

  const dispatch = useDispatch();

  // const auth= useSelector((state)=>{ return state.auth})   üstteki ile aynı anlamda

  //const auth= useSelector( function(state)=>  return state.auth ) eski sistem

  // export default ()=> { Header () tüm içeriği buraya  yazılır }

  return (
    <header>
      <div className="d-flex flex-column flex-md-row align-items-center pb-3 mb-4 border-bottom">
        <a
          href="/"
          className="d-flex align-items-center text-dark text-decoration-none"
        >
          <span className="fs-4">Service Finding</span>
        </a>

        <nav className="d-inline-flex mt-2 mt-md-0 ms-md-auto">
          {/*
        <a className="me-3 py-2 text-dark text-decoration-none" href="#/home">
            Token: {authState.token}
          </a>
        */}

          <a className="me-3 py-2 text-dark text-decoration-none" href="#/home">
            Home
          </a>
          <a
            className="me-3 py-2 text-dark text-decoration-none"
            href="#/categories"
          >
            Categories
          </a>
          {appDataState ? (
            <>
              <a href="#/user/dashboard" className="btn btn-primary">
                {appDataState.fullname}
              </a>
              &nbsp;
              <button
                className="me-3 py-2 btn btn-danger"
                onClick={(event) => {
                  dispatch(removeToken());
                  dispatch(removeAppData());
                }}
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <a
                className="me-3 py-2 text-dark text-decoration-none"
                href="#/login"
              >
                Login
              </a>
              <a
                className="py-2 text-dark text-decoration-none"
                href="#/register"
              >
                Register
              </a>
            </>
          )}
        </nav>
      </div>
    </header>
  );
}

export default Header;
