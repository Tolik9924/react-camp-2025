import './App.css';
import Input from './ui-components/input/Input.tsx';

const App = () => {
	return (
		<div>
			<Input id="Search" type="text" placeholder="Search" theme="primary" fullWidth />
		</div>
	);
};

export default App;
