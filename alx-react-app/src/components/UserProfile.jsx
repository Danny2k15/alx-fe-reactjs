import React from 'react';
function UserProfile(props) {
    return (
      <div>
        <h2>{props.name}</h2>
        <p>Age: {props.age}</p>
        <p>Bio: {props.bio}</p>
      </div>
    )
  }

  import React from 'react';
  import UserProfile from './componennts/UserProfile'; 

  function App(){
    return (
        <div>
            <UserProfile
            name="Alice"
            age="25"
            bio="Loves hiking and photography"
            />
            <UserProfile
            name="Bob"
            age="30"
            bio="Enjoys coding and gaming"
            />
        </div>
    )
  }
  export default App;