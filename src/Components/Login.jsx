import axios from "axios";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../utils/constants";
export const Login = () => {
  
  const [emailId, setEmailId] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = async () => {
    try{
      const res = await axios.post(BASE_URL + "/login", {
        emailId,
        password,
      },
    {withCredentials: true})
    dispatch(addUser(res.data));
    return navigate("/feed");
    }
    catch(err){
      console.error(err);
    }
  }
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="card bg-accent text-primary-content w-[28rem]">
  <div className="card-body">
    <h2 className="card-title justify-center">Login</h2>
    <div>
      <fieldset className="fieldset">
  <legend className="fieldset-legend">Email Id</legend>
  <input type="text" value={emailId} className="input" onChange={(e) => setEmailId(e.target.value)} placeholder="Type here" />
</fieldset>
 <fieldset className="fieldset">
  <legend className="fieldset-legend">Password</legend>
  <input type="text" value={password} className="input" onChange={(e) => setPassword(e.target.value)} placeholder="Type here" />
</fieldset>
    </div>
    <div className="card-actions justify-center">
      <button className="btn" onClick={handleLogin}>Login</button>
    </div>
  </div>
</div>
    </div>
  )
}
