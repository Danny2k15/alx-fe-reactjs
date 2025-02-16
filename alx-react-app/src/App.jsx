import WelcomeMessage from './components/WelcomeMessage'
import Header from './Header';
import MainContent from './MainContent';
import Footer from './Footer';
import './App.css'


  const App = () => {
    return (
      <div>
        <WelcomeMessage />  {/* Include the WelcomeMessage component here */}
        <Header/>
        <MainContent/>
        <Footer/>
    
      </div>
    );
  }

export default App