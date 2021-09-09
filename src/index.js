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
	loadingDescription = 'Loading...',
	loadingSpinner = null,
	isVertical = false,
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
							{title &&
								<div className="card__title">
									<h4 className="card__title-title">{title}</h4>
									{description && body && <p className="card__title-subtitle">{description}</p>}
								</div>
							}

							<div className={classNames('card__body', { 'd-none': isLoading || (!body && !description) })}>
								{body ?
									body
									:
									<p className="card__title-subtitle">{description}</p>
								}
							</div>

							<div className={classNames('modal__options', { 'd-none': isLoading }, { '--vertical': isVertical })}>
								{options && options.map((opt, i) => {
									return <button key={i} onClick={opt.handler} className={classNames(opt.className, className)} >{opt.text}</button>
								})}
								<button key="cancel" onClick={InternalCancelHandler} className={classNames(cancel.className, className)} >{cancel.text}</button>
							</div>

							{isLoading &&
								<>
									{loadingSpinner}
									{<p className="p-4 pt-0">{loadingDescription}</p>}
								</>
							}
						</div>
					</div>

					<div className="modal__bg-close" onClick={InternalCancelHandler} />
				</div>

			</div>
		)
	} else {
		return <React.Fragment />
	}
}

export default Modal;