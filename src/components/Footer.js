import React from 'react';
import { Footer } from 'react-materialize';

export default () => {
  return (
    <Footer copyrights="&copy; 2017 Copyright Text"

  links={
    <ul>
      <li><a className="grey-text text-lighten-3" href="https://www.facebook.com/Starbucks/">Facebook</a></li>
      <li><a className="grey-text text-lighten-3" href="https://twitter.com/Starbucks">Twitter</a></li>
      <li><a className="grey-text text-lighten-3" href="https://www.pinterest.com/starbucks/">Pinterest</a></li>
      <li><a className="grey-text text-lighten-3" href="https://www.youtube.com/user/Starbucks">Youtube</a></li>
    </ul>
  }
 className=''
>
    <h5 className="white-text">Starbucks Inc.</h5>
</Footer>
  );
};
