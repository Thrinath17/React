import React from "react"
import './App.css'
class App extends React.Component {
  constructor() {
    super()
    this.state = {
        value: '',
        message:'',
        strength:''
    }
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event){
    let strength=0;
    let lCount=0, uCount=0,nCount=0,scCount=0,tCount=0;
    let inputValue = event.target.value;
    let lowerCase = /^[a-z]$/;
    let upperCase = /^[A-Z]$/;
    let numbers = /^[0-9]$/;
    let specialCharacters = /^[!@#$%^&*()_+]$/;
    this.setState({value:inputValue});
    let strLength = inputValue.length;
    for(let i=0;i<strLength;i++){
        if(lowerCase.test(inputValue[i]) === true){
            lCount = 1;
        }
        if(upperCase.test(inputValue[i]) === true){
            uCount =1;
        }
        if(numbers.test(inputValue[i]) === true){
            nCount = 1;
        }
        if(specialCharacters.test(inputValue[i]) === true){
            scCount =1;
        }
    }
    console.log(lCount,uCount,scCount,nCount);
    tCount = lCount + uCount + nCount + scCount;
    if(strLength >= 8 && tCount === 4 ){
        this.setState({message:"very strong",strength:"4"});
    }
    if(strLength >= 8 && tCount === 3 ){
        this.setState({message:"strong",strength:"3"});
        //strength = 3;
    }
    if(strLength >= 8 && tCount === 2 ){
        this.setState({message:"medium",strength:"2"});
        //strength = 2;
    }
    if(strLength >= 8 && tCount === 1){
        this.setState({message:"poor",strength:"1"});
        //strength = 1;
    }
    if(strLength < 8 && strLength > 0){
        this.setState({message:"very poor",strength:"0"});
        //strength = 0;
    }
  }
  render() {
    const styles = {
      display:"flex",
      flexDirection:"column",
      alignItems:"center",
      justifyContent:"center",
      padding:"10px",
      backgroundColor:"#282c34",
      minHeight:"100vh"
    }
    const inputStyles = {
      height: "20px",
      borderRadius: "10px",
      border: "none",
      paddingLeft: "10px",
      paddingRight: "10px"
    }
    return (
      <div style={styles}>
        <h1 style={{color:"deepskyblue"}}>Password strength Component</h1>
        <input style={inputStyles} className="inputStyles" type="password" value={this.state.value} onChange={this.handleChange}/>
        <p style={{color:"white"}}>Strength: {this.state.message}</p>
        <meter id="meter" className="meterStyles" min="0" low="2" high="3" optimum="4"  max="4" value={this.state.strength}></meter>
      </div>
    )
  }
}

export default App