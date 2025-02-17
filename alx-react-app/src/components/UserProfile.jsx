function UserProfile(props) {
    return (
      <div>
        <h2>{props.name}</h2>
        <p>Age: {props.age}</p>
        <p>Bio: {props.bio}</p>
      </div>
    )
}
  import UserProfile from './componennts/UserProfile'; 

  function App(){
    return (
        <div>
            <UserProfile
            name="Alice"
            age="25"
            bio="Loves hiking and photography"
            />
        </div>
    )
  }
  export default App;