function UserProfile(props) {
    return (
      <div style={{ border: '1px solid gray', padding: '10px', margin: '10px' }}>
      <h2 style={{ color: 'blue' }}>{props.name}</h2>
      <p>Age: <span style={{ fontWeight: 'bold' }}>{props.age}</span></p>
      <p>Bio: {props.bio}</p>
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