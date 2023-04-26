// import logo from './logo.svg';
import './App.css';
import Details from './components/Details/Details';
import Footer from './components/Footer/Footer';
import JobBar from './components/JobBar/JobBar';
import NavBar from './components/NavBar/NavBar';
import Search from './components/Search/Search';

function App() {
  return (
    <div >
      <NavBar/>
      <Search/>
      <JobBar/>
      <Details/>
      <Footer/>
    </div>
  );
}

export default App;
