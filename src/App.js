import logo from './logo.svg';
import './App.css';
import { ButtonComponent, MaterialButton } from './lib';
import SignIn from './lib/components/sign-in/SignIn';


function App() {
  return (
    <div className="App"style={{marginTop:"40px"}}>
      <ButtonComponent />
      <MaterialButton />
      <SignIn />
    </div>
  );
}

export default App;
