import React, { useState, useEffect } from 'react';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';

const App = () => {
  const [lat, setLat] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      position => setLat(position.coords.latitude),
      err => setErrorMessage(err.message)
    );
  }, []);


  let content;
  if (errorMessage) {
    content = <div>Error: {errorMessage}</div>
  } else if (lat) {
    content = <SeasonDisplay lat={lat} />
  } else {
    content = <Spinner message="Please, accept location request" />
  }

  return <div className="border red">{content}</div>
};


// class App extends React.Component {

//   state = { lat: null, errorMessage: '' };

//   // componentDidMount() {
//   //   navigator.geolocation.getCurrentPosition(
//   //     position => this.setState({ lat: position.coords.latitude }),
//   //     err => this.setState({ errorMessage: err.message })
//   //   );
//   // }

//   renderContent() {
//     if (this.state.errorMessage && !this.state.lat) {
//       return <div>Error:{this.state.errorMessage}</div>
//     }

//     if (this.state.lat && !this.state.errorMessage) {
//       return <div><SeasonDisplay position={this.state.lat} /></div>
//     }

//     return <Spinner message="Please, accept location request" />
//   }




//   render() {
//     return (
//       <div className="red border">
//         {this.renderContent()}
//       </div>
//     )


//   }
//}

export default App;
