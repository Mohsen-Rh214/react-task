import React from 'react'

function FormInputs({ label, id, placeholder, message, onChanged }) {
	return (
		<div className={`form-item flex flex-col`}>
			<label htmlFor='firstName'>{label}</label>
			<input className='input' onChange={onChanged} id={id} placeholder={placeholder} type='text' />
			{message && <div className='message'>{message}</div>}
		</div>
	)
}

export default FormInputs
