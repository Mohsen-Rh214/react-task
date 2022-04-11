import React from 'react'
import { HiHome } from 'react-icons/hi'
import { TiGroup } from 'react-icons/ti'
import { FaBuilding } from 'react-icons/fa'
import { ImDrawer } from 'react-icons/im'
import { IoIosChatbubbles } from 'react-icons/io'
import { useState } from 'react'
import styled from 'styled-components'
import { keyframes } from 'styled-components'

function Footer() {
	const pages = [
		{
			id   : 0,
			icon : <HiHome className='text-3xl lg:text-4xl mx-auto' />
		},
		{
			id   : 1,
			icon : <TiGroup className='text-3xl lg:text-4xl mx-auto' />
		},
		{
			id   : 2,
			icon : <FaBuilding className='text-3xl lg:text-4xl mx-auto' />
		},
		{
			id   : 3,
			icon : <ImDrawer className='text-3xl lg:text-4xl mx-auto' />
		},
		{
			id   : 4,
			icon : <IoIosChatbubbles className='text-3xl lg:text-4xl mx-auto' />
		}
	]

	const [ currentPage, setCurrentPage ] = useState(pages[0])
	const [ prevPage, setPrevPage ] = useState(0)
	const [ position, setPosition ] = useState(0)

	const handlePageChange = (page) => {
		const position = (page - currentPage) * 100
		setCurrentPage(page)
		setPosition(position)
	}

	const transition = () => keyframes`
	from{ transform: translateX(${position}%)}
	to { transform: translateX(0)}
	`

	const Active = styled.div`
		margin-top: 30px;
		background-color: #263056;
		height: 7px;
		width: 100%;
		opacity: ${({ id }) => (id == currentPage ? 1 : 0)};
		animation: ${transition} 1s;
	`

	return (
		<div className='footer flex'>
			<div className='m-auto footer-group flex'>
				<div className='footer-items'>
					{pages.map((page) => (
						<a key={page.id} href='#' className='footer-item' onClick={() => handlePageChange(page.id)}>
							<div className='footer-icon w-24 lg:w-24'>{page.icon}</div>
							<div />
						</a>
					))}
				</div>
				<div className='footer-active flex'>
					<Active id={0} />
					<Active id={1} />
					<Active id={2} />
					<Active id={3} />
					<Active id={4} />
				</div>
			</div>
		</div>
	)
}

export default Footer
