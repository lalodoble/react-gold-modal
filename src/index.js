/* eslint-disable react/jsx-no-bind */
/* eslint-disable prettier/prettier */
// import Spinner from '@/components/base/Spinner';
import classNames from 'classnames';
import React, { useEffect, useState } from 'react';

const Modal = ({
	display = false,
	title = '',
	description = '',
	body = null,
	options = [], // {text, handler, className}
	className = '',
	cancel = {
		text: 'Cancel',
		handler: () => false,
	},
	isLoading = false,
	loadingContent = null,
	isVertical = false,
	cancelIsClose = false,
	overlayIsCancel = false,
	...props
}) => {
	const [displayEffect, setDisplayEffect] = useState(false);
	const [displayEffect2, setDisplayEffect2] = useState(false);

	useEffect(() => {
		setTimeout(() => {
			setDisplayEffect(display);
		}, displayEffect ? 300 : 50);
		setTimeout(() => {
			setDisplayEffect2(display);
		}, displayEffect ? 50 : 300);
	}, [display]);


	function InternalCancelHandler() {
		cancel.handler && cancel.handler();
	}

	if (display || displayEffect) {
		return (

			<div className={classNames({ "--active": displayEffect2 }, "gold-modal")}>
				<div className="modal__container">

					<div className="modal__sub-container">
						<div className="modal__card">
							{/* MODAL CLOSE BUTTON */}
							{cancelIsClose && <button className="modal__close-button" onClick={InternalCancelHandler}><CloseIcon/></button>}

							{/* MODAL TITLES */}
							{title &&
								<div className="card__title">
									<h4 className="card__title-title">{title}</h4>
									{description && body && <p className="card__title-subtitle">{description}</p>}
								</div>
							}

							{/* MODAL BODY */}
							<div className={classNames('card__body', { 'd-none': isLoading || (!body && !description) })}>
								{body || <p className="card__title-subtitle">{description}</p>}
							</div>


							{/* MODAL OPTIONS */}
							<div className={classNames('modal__options', { 'd-none': isLoading }, { '--vertical': isVertical })}>
								{options && options.map((opt, i) => {
									return <button key={i} onClick={opt.handler} className={classNames(opt.className, className)} >{opt.text}</button>
								})}
								{!cancelIsClose && <button key="cancel" onClick={InternalCancelHandler} className={classNames(cancel.className, className)} >{cancel.text}</button>}
							</div>


							{/* LOADING STATE */}
							{isLoading &&
								<div className="card__loading">
									{loadingContent || <p>Loading...</p>}
								</div>
							}
						</div>
					</div>

					{overlayIsCancel && <div className="modal__bg-close" onClick={InternalCancelHandler} />}
				</div>

			</div>
		)
	} else {
		return <React.Fragment />
	}
}

export default Modal;

function CloseIcon() {
	return (
		<i className="ic"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="#6c757d" d="M13.41,12l4.3-4.29a1,1,0,1,0-1.42-1.42L12,10.59,7.71,6.29A1,1,0,0,0,6.29,7.71L10.59,12l-4.3,4.29a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0L12,13.41l4.29,4.3a1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.42Z"/></svg></i>
	)
}