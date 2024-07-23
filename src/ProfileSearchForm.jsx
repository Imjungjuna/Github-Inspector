import { useState } from "react";
import './ProfileSearchForm.css'

function ProfileSearchForm({ search }) {
  const [term, setTerm] = useState("");

  function handleChange(evt) {
    setTerm(evt.target.value);
  }

  function handleSubmit(evt) {
    evt.preventDefault();
    search(term);
    setTerm("");
  }

  return (
    <div className="SearchBox">
    <form onSubmit={handleSubmit}>
      <input value={term} class="input" onChange={handleChange} onMouseOut="this.value = ''; this.blur();" placeholder="Enter Github ID"/>
    </form>
    </div>
  );
}

export default ProfileSearchForm;
