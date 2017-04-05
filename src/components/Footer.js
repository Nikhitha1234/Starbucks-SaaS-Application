import React from 'react';
import { Footer } from 'react-materialize';

export default () => {
  return (
    <Footer copyrights="&copy; 2017 Copyright Text"

  links={
    <ul>
      <li><a className="grey-text text-lighten-3" href="#!">Facebook</a></li>
      <li><a className="grey-text text-lighten-3" href="#!">Twitter</a></li>
      <li><a className="grey-text text-lighten-3" href="#!">Pinterest</a></li>
      <li><a className="grey-text text-lighten-3" href="#!">Youtube</a></li>
    </ul>
  }
 className=''
>
    <h5 className="white-text">Starbucks Inc.</h5>
    <p className="grey-text text-lighten-4">You can use rows and columns here to organize your footer content.</p>
</Footer>
  );
};