import { useEffect } from 'react';


function useObserveNode ({
  node = '',
  onNodeDisplay
}) {

  useEffect(() => {
    const nodeElm = typeof node === 'string'
      ? document.querySelector(node)
      : node;

    const io = new IntersectionObserver((entrys) => {

    });

    return () => {

    }
  }, [node, onNodeDisplay]);
}


export default useObserveNode;