import axios  from "axios";
import React from 'react';

class App extends React.Component{
  state={details: [],}
  
  componentDidMount(){
    let data;
    axios.get('http://localhost:8000')
    .then(res=>{
      data = res.data;
      this.setState({
          details:data
      });
    })
    .catch(err=>{})
  }
  render(){
    return(
      <div>
        <header>Data Generated From Django</header>
        <hr></hr>
        {this.state.details.map((output, id)=>
          <div key = {id}>
            <h2>{output.employee}</h2>
            <h4>{output.department}</h4>
          </div>
          )}
      </div>
    )
  }
}

export default App;
