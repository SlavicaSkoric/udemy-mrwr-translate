//create a context object and export it to import it and make use of it only where we actually need it - where we want to connect it
import React from 'react';

export default React.createContext('english');
//default value passed directly into the context object
//this value cannot be changed, if we want to change it, we have to use the Provider component
