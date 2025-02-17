import React from 'react';
import Header from './components/Header';
import MainContent from './components/MainContent';
import Footer from './components/Footer';


  function App (){
    return (
      <div>
        <Header />
        <MainContent />
        <Footer />
      </div>
    );
  }


import React from 'react';
import WelcomeMessage from'./WelcomeMessage'; //Correct path same directory

function App() {
  return (
    <div>
      {/* ...other component of your App component... */}
      <WelcomeMessage />{/* inclide the WelcomeMessage component */}
    </div>
  );
}


import React from 'react';
import UserProfile from'./components/UserProfile';//Or'./UserProfile' if in same directory

function App() {
return (
  <div>
    <UserProfile
    name="Alice"
    age="25"
    bio="Loves hiking and photograhy"
    />
    {/*...other UserPeofile components or other content...*/}
  </div>
);
}

export default App;

