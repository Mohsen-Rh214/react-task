import React from 'react'
import { RiSettings5Fill } from 'react-icons/ri'
import { ImExit } from 'react-icons/im'

function Header() {
	return (
		<div className='header w-full h-24 flex'>
			<img className='rounded-full h-16 py-auto m-5' src={require('../assets/img/avatar.jpg')} />
			<h3 className='my-auto text-sm'>خوش آمدید</h3>

			<RiSettings5Fill className='header-icon text-2xl mr-auto my-auto' />
			<ImExit className='header-icon text-2xl mr-4 ml-5 my-auto' />
		</div>
	)
}

export default Header
