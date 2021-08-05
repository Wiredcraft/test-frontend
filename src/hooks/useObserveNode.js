import { useEffect } from 'react';


function useObserveNode ({
  nodeRef = '',
  onNodeDisplay
}) {

  useEffect(() => {
    const nodeElm = typeof nodeRef === 'function'
      ? nodeRef()
      : nodeRef.current;


    const io = new IntersectionObserver((entries) => {
      if (entries[0].intersectionRatio <= 0) {
        return;
      }
      onNodeDisplay && onNodeDisplay();
    });

    io.observe(nodeElm);

    return () => {
      io.unobserve(nodeElm)
      io.disconnect()
    };
  }, [nodeRef]);
}


export default useObserveNode;