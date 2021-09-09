import React, { useEffect, useState } from 'react';
import Modal from 'react-gold-modal'
import 'react-gold-modal/src/styles.scss'

const App = () => {
	const [openModal, setOpenModal] = useState(false);
	const [openModal2, setOpenModal2] = useState(false);
	const [openModal3, setOpenModal3] = useState(false);

	return <div>

		<button onClick={() => setOpenModal(true)}>Open simple Modal</button>
		<button onClick={() => setOpenModal2(true)}>Open large Modal</button>
		<button onClick={() => setOpenModal3(true)}>Open vertical Modal</button>

		<Modal
			display={openModal}
			title={'This is a modal'}
			description={'Click OK to close'}
			cancel={{
				text: 'OK',
				handler: () => setOpenModal(false),
			}}
		/>

		<Modal
			display={openModal2}
			title={'This is a modal'}
			description={'Click any option to close'}
			body={<div>
				<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
				<p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?</p>
			</div>}
			options={[
				{
					text: 'Yes',
					handler: () => setOpenModal2(false),
				}
			]}
			cancel={{
				text: 'No',
				handler: () => setOpenModal2(false),
			}}
		/>

		<Modal
			isVertical
			display={openModal3}
			options={[
				{
					text: 'Save and Close',
					handler: () => setOpenModal3(false),
				},
				{
					text: 'Don´t Save and close',
					handler: () => setOpenModal3(false)
				}
			]}
			cancel={{
				text: 'Just Close',
				handler: () => setOpenModal3(false),
			}}
		/>
	</div>
}

export default App
