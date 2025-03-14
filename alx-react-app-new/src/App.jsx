import Header from './components/Header';
import MainContent from './components/MainContent';
import Footer from './components/Footer';
import Counter from './components/Counter';


  function App (){
    return (
      <div>
        <Header />
        <MainContent />
        <Footer />
        <Counter />
      </div>
    );
  }


import WelcomeMessage from'./components/WelcomeMessage'; //Correct path same directory

function App() {
  return (
    <div>
      {/* ...other component of your App component... */}
      <WelcomeMessage />{/* inclide the WelcomeMessage component */}
    </div>
  );
}

import UserProfile from'./components/UserProfile';//Or'./UserProfile' if in same directory

function App() {
  return (
    <div>
      <UserProfile
      name="Alice"
      age="25"
      bio="Loves hiking and photography"
      />    
      </div>
  );
}
export default App;

