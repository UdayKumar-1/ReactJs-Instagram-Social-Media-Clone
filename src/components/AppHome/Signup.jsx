import { useRef, useState } from "react";
import { FaRegEye, FaEyeSlash } from "react-icons/fa";
import "../../index.css";
import { Link } from "react-router-dom";
function Signup() {
  const dates = [
    "Day",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "11",
    "12",
    "13",
    "14",
    "15",
    "16",
    "17",
    "18",
    "19",
    "20",
    "21",
    "22",
    "23",
    "24",
    "25",
    "26",
    "27",
    "28",
    "29",
    "30",
    "31",
  ];
  const month = [
    "Month",
    "jan",
    "Feb",
    "Mar",
    "April",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const year = [
    "Year",
    "2023",
    "2022",
    "2021",
    "2020",
    "2019",
    "2018",
    "2017",
    "2016",
    "2015",
    "2014",
    "2013",
    "2012",
    "2011",
    "2010",
    "2009",
    "2008",
    "2007",
    "2006",
    "2005",
    "2004",
    "2003",
    "2002",
    "2001",
    "2000",
    "1999",
    "1998",
    "1997",
    "1996",
    "1995",
    "1994",
    "1993",
    "1992",
    "1990",
  ];
  const firstname = useRef("");
  const lastname = useRef("");
  const email = useRef("");
  const paswrd = useRef("");
  const cnfpaswrd = useRef("");
  const [passwordError, setPasswordError] = useState(false);
  const [Birthday, setBirthday] = useState([]);
  const [gender, setGender] = useState("");
  const [showpasswordd, setshowpassword] = useState(false);
  const [cnfshowpasswordd, setcnfshowpasswordd] = useState(false);
  const register = (e) => {
    e.preventDefault();
    if (paswrd.current.value !== cnfpaswrd.current.value) {
      setPasswordError(true);
    } else {
      setPasswordError(false);
    }
    // console.log("firstname :", firstname.current.value);
    // console.log("lastname :", lastname.current.value);
    // console.log("email :", email.current.value);
    // console.log("password :", paswrd.current.value);
    // console.log("confirm Password :", cnfpaswrd.current.value);
    // console.log("Dob :", Birthday);
    // console.log("gender :", gender);
  };
  return (
    <>
      <div className="register">
        <div className="register_container">
          <h1>Sign Up</h1>
          <p>It's Quick and Easy</p>
          <div className="hr3">
            <form onSubmit={register}>
              <div className="row">
                <input
                  type="text"
                  className="register_name"
                  placeholder="FirstName"
                  required
                  ref={firstname}
                />
                <input
                  type="text"
                  className="register_name"
                  placeholder="LastName"
                  required
                  ref={lastname}
                />
              </div>
              <center className="EmailInput">
                <input
                  className="Email_input"
                  type="mail"
                  placeholder="Enter your Email"
                  required
                  ref={email}
                />
              </center>
              <center className="center">
                <input
                  className="psw"
                  type={showpasswordd ? "text" : "password"}
                  placeholder="New Password"
                  maxLength={"10"}
                  required
                  ref={paswrd}
                />
                <button
                  className="eye"
                  onClick={() => {
                    setshowpassword(!showpasswordd);
                  }}
                >
                  {showpasswordd ? <FaRegEye /> : <FaEyeSlash />}
                </button>
                <input
                  className="psw"
                  type={cnfshowpasswordd ? "text" : "password"}
                  placeholder="Confirm Password"
                  maxLength={"10"}
                  required
                  ref={cnfpaswrd}
                />
                <button
                  className="eye"
                  onClick={() => {
                    setcnfshowpasswordd(!cnfshowpasswordd);
                  }}
                >
                  {cnfshowpasswordd ? <FaRegEye /> : <FaEyeSlash />}
                </button>
              </center>
              {passwordError && (
                <p className="warning">*Password do not match*</p>
              )}
              <h5 className="register_date">Date of Birth</h5>
              <div className="row">
                <select
                  className="register_date2"
                  required
                  onChange={(e) => {
                    setBirthday([...Birthday, e.target.value]);
                  }}
                >
                  {dates.map((item) => (
                    <option key={item}>{item}</option>
                  ))}
                </select>
                <select
                  className="register_date3"
                  required
                  onChange={(e) => {
                    setBirthday([...Birthday, e.target.value]);
                  }}
                >
                  {month.map((item) => (
                    <option key={item}>{item}</option>
                  ))}
                </select>
                <select
                  className="register_date3"
                  required
                  onChange={(e) => {
                    setBirthday([...Birthday, e.target.value]);
                  }}
                >
                  {year.map((item) => (
                    <option key={item}>{item}</option>
                  ))}
                </select>
              </div>
              <h5 className="register_gender">Gender</h5>
              <div className="sizeing">
                <div className="register_radiocontainer">
                  <div className="wrapper">
                    <label>Female</label>
                    <input
                      type="radio"
                      name="gender"
                      value="Female"
                      required
                      onChange={() => setGender("female")}
                    />
                  </div>
                  <div className="wrapper">
                    <label>Male</label>
                    <input
                      type="radio"
                      name="gender"
                      value="Male"
                      required
                      onChange={() => setGender("male")}
                    />
                  </div>
                  <div className="wrapper">
                    <label>Others</label>
                    <input
                      type="radio"
                      name="gender"
                      value="Others"
                      required
                      onChange={(e) => setGender("Other")}
                    />
                  </div>
                </div>
              </div>
              <p className="register_policy">
                By Clicking SignUp,You agree to our{""}{" "}
                <span>Terms,Data Policy</span> and <span>Cookie Policy</span>You
                May recieve Message Notification fron us and can opt out at any
                time.
              </p>
              <center>
                <button className="submit" type="submit">
                  Signup
                </button>
              </center>
              <center>
                <Link to="/login">
                  <p className="register_login">Already Have an account ?</p>
                </Link>
              </center>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
export default Signup;
