import './App.css';
import ProfileForm from './ProfileForm'

const App = () => {

	const handleSubmit = (values, { setSubmitting }) => {
		setTimeout(() => {
			alert(JSON.stringify(values, null, 2))
			setSubmitting(false)
		}, 400)
	}

	return (
		<div className="App">
			<ProfileForm onSubmit={handleSubmit}/>
		</div>
	);
}

export default App;
