// import React from 'react'
// import { useState } from 'react'
  
//   const ProfileList = () => {
//     const[profiles, setProfiles] = useState([
//         {
//             "id": "60d0fe4f5311236168a109f5",
//             "title": "ms",
//             "firstName": " Charlotte ",
//             "lastName": " Legrand ",
//             "picture": "https://randomuser.me/api/portraits/med/women/77.jpg"
//         },
//         {
//             "id": "60d0fe4f5311236168a109f6",
//             "title": " miss ",
//             "firstName": " Madison ",
//             "lastName": " Ambrose ",
//             "picture": "https://randomuser.me/api/portraits/med/women/15.jpg"
//         },
//         {
//             "id": "60d0fe4f5311236168a109fa",
//             "title": " ms ",
//             "firstName": " Ann ",
//             "lastName": " Mason ",
//             "picture": "https://randomuser.me/api/portraits/med/women/18.jpg"
//         },
//         {
//             "id": "60d0fe4f5311236168a109fb",
//             "title": " mr ",
//             "firstName": " Sohan ",
//             "lastName": " Pierre ",
//             "picture": "https://randomuser.me/api/portraits/med/men/77.jpg"
//         },
//         {
//             "id": "60d0fe4f5311236168a109fc",
//             "title": " mr ",
//             "firstName": " Gonzaga ",
//             "lastName": "Ribeiro",
//             "picture": "https://randomuser.me/api/portraits/med/men/10.jpg"
//         },
//         {
//             "id": "60d0fe4f5311236168a109ff",
//             "title": " mrs ",
//             "firstName": " Josefina ",
//             "lastName": " Calvo ",
//             "picture": "https://randomuser.me/api/portraits/med/women/3.jpg"
//         },
//         {
//             "id": "60d0fe4f5311236168a10a00",
//             "title": " mrs ",
//             "firstName": " Els ",
//             "lastName": " Ijsseldijk ",
//             "picture": "https://randomuser.me/api/portraits/med/women/75.jpg"
//         },
//         {
//             "id": "60d0fe4f5311236168a10a01",
//             "title": " mr ",
//             "firstName": " Jesus ",
//             "lastName": " Riley ",
//             "picture": "https://randomuser.me/api/portraits/med/men/45.jpg"
//         },
//         {
//             "id": "60d0fe4f5311236168a10a03",
//             "title": " mr ",
//             "firstName":  "Andri ",
//             "lastName": " Leclerc ",
//             "picture": "https://randomuser.me/api/portraits/med/men/57.jpg"
//         },
//         {
//             "id": "60d0fe4f5311236168a10a04",
//             "title": " mr ",
//             "firstName": " Konsta ",
//             "lastName": " Manninen ",
//             "picture": "https://randomuser.me/api/portraits/med/men/24.jpg"
//         }
    
//     ])

    
//     return (
//       <div className="profile-list">
//         {profiles.map((profile) => (
//        <li>
//             <div className="profile-info" key ={profile.id}>
//             <div> {profile.id}</div>
//             <div>{profile.title}</div>
//             <div>{profile.firstName}</div>
//             <div>{profile.lastName}</div>
//            </div>

//            <div className="profile-images">
//             <div><img src={profile.picture}></img></div>
//            </div>
//             </li>
      
//         // <li key={id} classname='profile-list'>
//         //     <div className="profile-picture-wrapper">
//         //         <img src="{profile.picture}" alt="" />
//         //     </div>

        
//         ))}
//       </div>
//     )
//   }

  
//   export default ProfileList 
 
export default function ProfileList({ filteredList }) {
    const userProfiles = filteredList.map((profile) => {
      const { picture, id, title, firstName, lastName } = profile;
      return (
        <li key={id} className="profile-list">
          <div className="profile-picture-wrapper">
            <img src={picture} alt={firstName} />
          </div>
          <div className="profile-wrapper">
            <div className="profile-id">{id}</div>
            <div className="profile-details">
              <p className="profile-title">{title}</p>
              <p className="profile-name">{firstName}</p>
              <p className="profile-name">{lastName}</p>
            </div>
          </div>
        </li>
      );
    });
  
    return (
      <div className="profile-list-container">
        <ul className="profile-list-wrapper">{userProfiles}</ul>
      </div>
    );
  }

 

