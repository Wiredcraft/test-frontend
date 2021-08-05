import React, { useRef } from 'react';
import { useContainer } from 'unstated-next';
import useObserveNode from '../../hooks/useObserveNode';
import ImageContainer from '../../store/ImageContainer';

function Buoy ({ style }) {
  const buoyRef = useRef(null);
  const { loadMore } = useContainer(ImageContainer);

  useObserveNode({
    nodeRef: buoyRef,
    onNodeDisplay: () => loadMore()
  });

  return (
    <div
      style={{
        ...style,
        position: 'absolute'
      }}
      ref={buoyRef}>
    </div>
  )
}

export default Buoy;