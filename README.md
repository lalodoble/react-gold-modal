# react-gold-modal

> Made with create-react-library

[![NPM](https://img.shields.io/npm/v/react-gold-modal.svg)](https://www.npmjs.com/package/react-gold-modal) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save react-gold-modal
```

## Usage

```jsx
import React, { Component } from 'react'

import Modal from 'react-gold-modal'
import 'react-gold-modal/src/styles.scss'

const App = () => {
	const [openModal, setOpenModal] = useState(false);

 
		return <>
			<Modal
				display={openModal}
				title={'This is a modal'}
				description={'Click OK to close'}
				cancel={{
					text: 'OK',
					handler: () => setOpenModal(false),
				}}
			/>
		</>
}
```

## Component Props

|Prop Name          |Required  |Type                     |Description                                       |
|-------------------|----------|-------------------------|--------------------------------------------------|
|display            |Yes       |`bool` (Default false)   |Shows or hides the modal |
|cancel             |Yes       |`option` object          |The object for closing the modal |
|options            |No        |List of `option` object  |The object for closing the modal |
|className          |No        |`str`                    |Any class to be added to all the options buttons (used for styling) |
|isVertical         |No        |`bool` (Default false)   |If `true`, the options will be placed vertically |
|title        		  |No        |`str`                    |Title text for the modal |
|description   		  |No        |`str`                    |Description text for the modal |
|body         		  |No        |`any`                    |The body content for the modal |
|isLoading     		  |No        |`bool` (Default false)   |If `true`, the body and actions will be replaced with a loading state |
|loadingDescription |No        |`str`                    |Description for the modal loading state |
|loadingSpinner     |No        |`obj`                    |The spinner object for the modal loading state |


### Option object
```jsx
option = {
	text: 'Yes', 
	handler: () => setModalOpen(false), 
	className: ''
};
```



## License

MIT © [lalodoble](https://github.com/lalodoble)
