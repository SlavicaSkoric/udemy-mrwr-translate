import React from 'react';
import LanguageContext from '../contexts/LanguageContext';

class Button extends React.Component {
  //(1) this.context approach (1)

  //static contextType = LanguageContext;
  //we hook up a context object to a class component above
  //contextType - is a property
  //static - keyword - adds a contextType property directly to our class (way 1)

  /*   render() {
    //console.log(this.context);
    const text = this.context === 'english' ? 'Submit' : 'Voorleggen';
    return <button className='ui button primary'>{text}</button>;
  }
*/

  //Button.contextType = LanguageContext;
  //(way 2)

  //(2) Consumer component approach (2)

  renderSubmit(value) {
    return value === 'english' ? 'Submit' : 'Voorleggen';
  }

  render() {
    return (
      <button className='ui button primary'>
        <LanguageContext.Consumer>
          {(value) => this.renderSubmit(value)}
        </LanguageContext.Consumer>
      </button>
    );
  }
  //we provide a function (a callback) as a child to a React component
}

export default Button;
