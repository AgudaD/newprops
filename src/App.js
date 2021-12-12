import './App.css';
import ProfileComponent from './Components/Profile/ProfileComponent';
import anim from "./anim.jpg"

// import Bind from './components/Bind';
// import Comp from './components/Comp';



function App() {
function handleName(){
alert(this.fullName)
}

return (

<div className="App" style={{
    display: 'flex',
    justifyContent: "center",
    backgroundColor: "sandybrown"
}}>
<ProfileComponent fullName='Aguda David'
handle = {handleName}
bio= "i love watching movies, coding and playing games "
profession='Software Engineer'>
<img src= {anim} style = {{width: "10rem"}} alt = "AnimatedPhoto"/>
</ProfileComponent>
</div>
);
}

export default App;
