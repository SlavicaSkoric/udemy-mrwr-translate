import React from 'react';
import LanguageContext from '../contexts/LanguageContext';
import ColorContext from '../contexts/ColorContext';

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

  renderSubmit(language) {
    return language === 'english' ? 'Submit' : 'Voorleggen';
  }

  renderButton(color) {
    return (
      <button className={`ui button ${color}`}>
        <LanguageContext.Consumer>
          {({ language }) => this.renderSubmit(language)}
        </LanguageContext.Consumer>
      </button>
    );
  }

  render() {
    return (
      <ColorContext.Consumer>
        {(color) => this.renderButton(color)}
      </ColorContext.Consumer>
    );
  }
  //we provide a function (a callback) as a child to a React component
  //this function will be called with whatever value we provide inside ColorContext object
}

export default Button;
