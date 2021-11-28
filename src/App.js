import './App.css';
import ProfileForm from './ProfileForm'
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';

const App = () => {

	const handleSubmit = (values, { setSubmitting }) => {
		setTimeout(() => {
			alert(JSON.stringify(values, null, 2))
			setSubmitting(false)
		}, 400)
	}

	return (

		<Container maxWidth="sm">
			<Box sx={{ my: 4 }}>
				<ProfileForm onSubmit={handleSubmit}/>
			</Box>
		</Container>
	);
}

export default App;
