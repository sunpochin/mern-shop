import React from 'react';
import Footer from './components/Footer';
import Header from './components/Header';
import HomeScreen from './screens/HomeScreen';
import { Container } from 'react-bootstrap';

const App = () => {
	return (
		<div>
			<Header />
			<main>
				<Container>
					<HomeScreen />
				</Container>
			</main>
			<Footer />
		</div>
	);
};

export default App;
