import { useState, useEffect } from "react";
import axios from "axios";
import ProfileSearchForm from "./ProfileSearchForm";
import "./ProfileViewerWithSearch.css"

const BASE_URL = "https://api.github.com/users";

/** GitHub Profile Component --- shows info from GH API */

function ProfileViewerWithSearch() {
  const [username, setUsername] = useState("colt");
  const [profile, setProfile] = useState({ data: null, isLoading: true });

  useEffect(
    function fetchUserOnUsernameChange() {
      async function fetchUser() {
        const userResult = await axios.get(`${BASE_URL}/${username}`);
        setProfile({ data: userResult.data, isLoading: false });
        console.log(userResult.data);
      }
      fetchUser();
    },
    [username]
  );

  function search(username) {
    setProfile({ data: null, isLoading: true });
    setUsername(username);
  }

  if (profile.isLoading) return <div className="i"><i>Loading...</i></div>;

  return (
    <div>
      <ProfileSearchForm search={search} />
      <img src={profile.data.avatar_url} />
      <b>Name : {profile.data.name}</b>
      <p>Followers: {profile.data.followers}</p>
      <p>Following: {profile.data.following}</p>
    </div>
  );
}

export default ProfileViewerWithSearch;
