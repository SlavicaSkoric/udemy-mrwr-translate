import React from 'react';
import LanguageContext from '../contexts/LanguageContext';

class Button extends React.Component {
  static contextType = LanguageContext;
  //we hook up a context object to a class component above
  //contextType - is a property
  //static - keyword - adds a contextType property directly to our class (way 1)

  render() {
    //console.log(this.context);
    const text = this.context === 'english' ? 'Submit' : 'Voorleggen';
    return <button className='ui button primary'>{text}</button>;
  }
}

//Button.contextType = LanguageContext;
//(way 2)

export default Button;
