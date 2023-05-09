import React from 'react'
import SearchBar from './SearchBar'
import ProfileList from './ProfileList'
import profiles from './Data'
import { useState } from 'react'
import "../styles/ProfileSearchApp.css"
 

 
function ProfileSearchApp() {
  const [filteredList, setFilteredList] = useState(profiles);

  const handleChange = (event) => {
    const query = event.target.value;

    let updatedList = [...profiles];

    updatedList = updatedList.filter((profile) => {
      const name = profile.firstName + " " + profile.lastName;
      return (
        profile.firstName.toLowerCase().includes(query.trim()) ||
        profile.lastName.toLowerCase().includes(query.trim()) || name.toLowerCase().includes(query.trim())
      );
    });

    setFilteredList(updatedList);
  };

  return (
    <div className="container">
      <SearchBar onChange={handleChange} />
      <ProfileList filteredList={filteredList} />
    </div>
  );
}

export default ProfileSearchApp;