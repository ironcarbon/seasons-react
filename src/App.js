import React,{Component} from 'react';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';

class App extends Component {
  //Babel makes for us
  // constructor(props){
  //   super(props);

  //   this.state = {lat: null, errorMessage: ''};
  // }

  state={lat: null, errorMessage: ''};

    componentDidMount(){
      navigator.geolocation.getCurrentPosition(
        position => this.setState({lat: position.coords.latitude}),
        err =>this.setState({errorMessage: err.message})
      );
    }
  

  render(){
  if(this.state.errorMessage && !this.state.lat){
    return <div>Error:{this.state.errorMessage}</div>
  } 

  if(this.state.lat && !this.state.errorMessage){
    return <div><SeasonDisplay position={this.state.lat}/></div>
  } 

  return <Spinner message="Please, accept location request"/>
     
  }  
}

export default App;
