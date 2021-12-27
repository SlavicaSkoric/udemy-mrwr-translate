import React from 'react';
import UserCreate from './UserCreate';
//importing the named export/import value w {}:
import { LanguageStore } from '../contexts/LanguageContext';
import ColorContext from '../contexts/ColorContext';
import LanguageSelector from './LanguageSelector';

class App extends React.Component {
  //state = { language: 'english' };

  /* onLanguageChange = (language) => {
    this.setState({ language });
  }; */
  //we make sure this is defined as an arrow function because it is a callback method that we are passing to something else in our application

  render() {
    return (
      <div className='ui container'>
        {/* {this.state.language} */}
        <LanguageStore>
          <LanguageSelector />
          <ColorContext.Provider value='red'>
            {/* <LanguageContext.Provider value={this.state.language}> */}
            <UserCreate />
            {/* </LanguageContext.Provider> */}
          </ColorContext.Provider>
        </LanguageStore>
      </div>
    );
  }
}

//value in the Provider will be used to update the context object

export default App;
