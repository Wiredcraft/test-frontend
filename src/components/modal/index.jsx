import React from 'react'
import { useGlobalContext } from '../../store/global'
import ImageZoom from './ImageZoom'
 
const Modal = () => {

	const { modalOpen, modalType, closeModal, zoomedImage } = useGlobalContext()

	return modalOpen ? (
		<div className={`modal ${modalType}`} onClick={closeModal}>
			{ modalType === 'image-zoom' && 
				<ImageZoom src={zoomedImage} closeModal={closeModal} />
			}
		</div>
	) : null
}

export default Modal