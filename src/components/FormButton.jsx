import React from 'react'

function FormButton({ model, text, isDisabled }) {
	return (
		<button type='submit' className={`btn btn-${model}`} disabled={isDisabled}>
			{text}
		</button>
	)
}

export default FormButton
