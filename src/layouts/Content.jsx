import React from 'react'
import { useState } from 'react'
import { AiFillEdit } from 'react-icons/ai'
import FormButton from '../components/FormButton'
import FormInputs from '../components/FormInputs'

function Content() {
	const [ text, setText ] = useState('')
	const [ btnDisabled, setBtnDisabled ] = useState(true)
	const [ message, setMessage ] = useState('')

	const handleTextChange = (e) => {
		if (text === '') {
			setBtnDisabled(true)
			setMessage(null)
		} else if (text !== '' && text.trim().length <= 6) {
			setMessage('باید حداقل 6 حرف باشد.')
			setBtnDisabled(true)
		} else {
			setMessage(null)
			setBtnDisabled(false)
		}

		setText(e.target.value)
	}
	return (
		<form className='flex'>
			<div className='content-container mx-auto flex'>
				<h1 className='font-bold text-lg ml-auto mr-2 content-title'>
					<AiFillEdit className='ml-2 mt-2 text-xl' />ویرایش کاربر
				</h1>
				<div className='content'>
					<FormInputs
						label={'نام'}
						id={'firstName'}
						placeholder={'محسن'}
						onChanged={handleTextChange}
						value={text}
						message={message}
					/>
					<FormInputs
						label={'نام خانوادگی'}
						id={'lastName'}
						placeholder={'ذاکری'}
						onChanged={handleTextChange}
						value={text}
						message={message}
					/>
					<FormInputs
						label={'کد ملی'}
						onChanged={handleTextChange}
						value={text}
						id={'codeMelli'}
						placeholder={'3429392022'}
						message={message}
					/>
					<FormInputs
						label={'شماره تماس'}
						onChanged={handleTextChange}
						value={text}
						id={'phoneNumber'}
						placeholder={'9932437564'}
						message={message}
					/>
					<FormInputs
						label={'کد کاربر'}
						onChanged={handleTextChange}
						value={text}
						id={'userCode'}
						placeholder={'2346300003'}
						message={message}
					/>
				</div>

				<h1 className='mr-auto mt-auto'>
					<div className='mr-6 form-btn form-item'>
						<FormButton model={'danger'} text={'لغو'} isDisabled={btnDisabled} />
						<FormButton model={'success'} text={'ثبت'} isDisabled={btnDisabled} />
					</div>
				</h1>
			</div>
		</form>
	)
}

export default Content
