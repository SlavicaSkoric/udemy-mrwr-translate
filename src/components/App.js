import React from 'react';
import UserCreate from './UserCreate';
import LanguageContext from '../contexts/LanguageContext';

class App extends React.Component {
  state = { language: 'english' };

  onLanguageChange = (language) => {
    this.setState({ language });
  };
  //we make sure this is defined as an arrow function because it is a callback method that we are passing to something else in our application

  render() {
    return (
      <div className='ui container'>
        <div>
          Select a language:
          <i
            className='flag us'
            onClick={() => this.onLanguageChange('english')}
          />
          <i
            className='flag nl'
            onClick={() => this.onLanguageChange('dutch')}
          />
        </div>
        {/* {this.state.language} */}
        <LanguageContext.Provider value={this.state.language}>
          <UserCreate />
        </LanguageContext.Provider>
      </div>
    );
  }
}

//value in the Provider will be used to update the context object

export default App;
