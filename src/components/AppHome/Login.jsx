import { useRef, useState } from "react";
import styles from "../../ModuleFiles/Login.module.css";
import { Link } from "react-router-dom";
import { FaRegEye, FaEyeSlash } from "react-icons/fa";
const Login = () => {
  const password = useRef("");
  const username = useRef("");
  const [passwordIcon, setPasswordIcon] = useState(false);
  const HandleSubmit = (e) => {
    // e.preventDefault();
    // console.log("userName: ", username.current.value);
    // console.log("Password:", password.current.value);
  };
  return (
    <>
      <div className={styles.MainBox}>
        <form className={styles.formTag} onSubmit={HandleSubmit}>
          <p className={styles.LoginHeading}>Login Page</p>
          <div className={styles.inputBoxes}>
            <input
              className={styles.inputs}
              type="text"
              placeholder="Enter your Email"
              ref={username}
            />
            <br />
            <input
              className={styles.inputs}
              type="password"
              placeholder="Enter Password"
              ref={password}
            />{" "}
            <button
              type="button"
              className={styles.eye}
              onClick={() => setPasswordIcon(!passwordIcon)}
            >
              {passwordIcon ? <FaRegEye /> : <FaEyeSlash />}
            </button>
            <br />
            <Link to="/home" className={`${styles.LoginBtn} btn btn-primary`}>
              Login
            </Link>
            <p className={styles.dontHaveAcc}>
              Dont Have an Account?
              <Link to="/signup" className={styles.signUp} href="">
                Signup
              </Link>
            </p>
          </div>
        </form>
      </div>
    </>
  );
};
export default Login;
