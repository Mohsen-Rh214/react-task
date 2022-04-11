import './App.css'
import Header from './layouts/Header'
import Content from './layouts/Content'
import Footer from './layouts/Footer'

function App() {
	console.log(window.innerHeight, window.innerWidth)

	return (
		<div className='body h-full w-full'>
			<Header />
			<Content />
			<Footer />
		</div>
	)
}

export default App
