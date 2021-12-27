//create a context object and export it to import it and make use of it only where we actually need it - where we want to connect it
import React from 'react';

const Context = React.createContext('english');
//const context = React.createContext('english');
//default value passed directly into the context object
//this value cannot be changed, if we want to change it, we have to use the Provider component

//console.log(context);
//context object creates for us Provider and Consumer components that we can hook up and use in our code

//export default context;

//named export:
export class LanguageStore extends React.Component {
  state = { language: 'english' };

  //callback function:
  onLanguageChange = (language) => {
    this.setState({ language });
  };

  render() {
    return (
      <Context.Provider
        value={{ ...this.state, onLanguageChange: this.onLanguageChange }}
      >
        {this.props.children}
      </Context.Provider>
    );
  }
}

export default Context;
