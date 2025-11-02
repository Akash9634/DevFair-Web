import { useDispatch } from "react-redux";
import { BASE_URL } from "../utils/constants"
import axios from "axios";
import { addFeed } from "../utils/feedSlice";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import UserCard from "./UserCard";

const Feed = () => {
  const feed = useSelector((store) => store.feed);
  const dispatch = useDispatch();
  const getFeed = async () => {
    try{
    const res = await axios.get(BASE_URL+"/feed", {withCredentials: true});
    dispatch(addFeed(res?.data));
    }
    catch(err){
      console.log(err.message);
    }
  }

  useEffect(()=>{
    getFeed();
  }, []);

 
  return ( 
  feed && (<div className="flex justify-center my-10">
  <UserCard user={feed[0]} />
  </div>
  )
)
}

export default Feed;