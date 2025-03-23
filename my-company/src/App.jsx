
import React from 'react';
import Header from './components/Header';
import MainContent from './components/MainContent';
import Footer from './components/Footer';
import Counter from `./components/Counter.jsx`


function App() {
  return (
    <div>
      <Header />
      <Navbar/>
      <MainContent />
      <Footer />
    </div>
  );
}



import React from 'react';
import WelcomeMessage from './WelcomeMessage'; // Correct path - same directory

function App() {
  return (
    <div>
      {/* ... other content of your App component ... */}
      <WelcomeMessage /> {/* Include the WelcomeMessage component */}
      {/* ... more content if needed ... */}
    </div>
  );
}



import React from 'react';
import UserProfile from './alx-react-app-new/UserProfile'; // Or './UserProfile' if in same directory

function App() {
  return (
    <div>
      <UserProfile 
        name="Alice" 
        age="25" 
        bio="Loves hiking and photography" 
      />
      {/* ... other UserProfile components or other content ... */}
    </div>
  );
}




import React from 'react';
import Counter from './Counter'; // Assuming Counter.jsx is in the same directory

function App() {
  return (
    <div>
      <Counter />
    </div>
  );
}



import ProfilePage from './ProfilePage';

function App() {
  const userData = { name: "Jane Doe", email: "jane.doe@example.com" };

  return <ProfilePage userData={userData} />;
}









import React, { useState } from 'react';
import UserContext from './UserContext';
import ProfilePage from './ProfilePage';

function App() {
  const [userData, setUserData] = useState({ 
    name: "Jane Doe", 
    email: "jane.doe@example.com" 
  }); // Initialize with your actual user data!

  return (
    <UserContext.Provider value={{ userData, setUserData }}>
      <ProfilePage />
    </UserContext.Provider>
  );
}






import React, { useState } from 'react';
import UserContext from './UserContext';
import ProfilePage from './ProfilePage';

function App() {
  const [userData, setUserData] = useState({ /* Your user data here */ }); // Initialize with actual data

  return (
    <UserContext.Provider value={{ userData, setUserData }}>
      <ProfilePage />
    </UserContext.Provider>
  );
}




import ProfilePage from './ProfilePage';

function App() {
  const userData = { name: "Jane Doe", email: "jane.doe@example.com" };

  return <ProfilePage userData={userData} />;
}




import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
