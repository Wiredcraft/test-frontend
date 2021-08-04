import React from 'react';
import ImageContainer from './ImageContainer';
  
// it's easy to extends;
const compose = providers => props => {
  return providers.reduceRight((children, Provider) => {
    return (
      <Provider>
        {children}
      </Provider>
    );
  }, props.children);
}

const Provider = compose([
  ImageContainer.Provider
]);

export default Provider;