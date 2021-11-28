
import { Formik, useField} from 'formik'
import * as yup from 'yup'
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

const MyTextInput=({label, ...props}) => {
	const [field, meta] = useField(props);
	return <TextField
		id={props.id}
		label={label}
		helperText={meta.touched && meta.error ? meta.error : ' '}
		error={null != meta.error && meta.touched}
		{...field} 
		{...props}
	/>
}

const validationSchema = yup.object({
	firstName: yup
		.string('Enter your first name')
		.required('First name is required'),
	lastName: yup
		.string('Enter your last name')
		.required('last name is required')
})

const ProfileForm = ({onSubmit}) => {

	return <div> 
		<Formik
			initialValues={{
				firstName: "",
				middleName: "",
				lastName: ""
			}}
			validationSchema={validationSchema}
			onSubmit={onSubmit}
		> 
		{({isSubmitting, errors, touched, handleSubmit}) => (
			<div>

				<Typography variant="h4" component="h1" gutterBottom>
					Profile Form
				</Typography>

				<Stack
					component="form"
					sx={{
						width: '25ch',
					}}
					spacing={2}
						noValidate
						autoComplete="off"
					>

					<MyTextInput variant="standard" label="First Name" name="firstName" type="text" placeholder="first name"/>
					<MyTextInput variant="standard" label="Middle Name" name="middleName" type="text" placeholder="middle name"/>
					<MyTextInput variant="standard" label="Last Name" name="lastName" type="text" placeholder="last name"/>
					<Button type="button" variant="contained" onClick={handleSubmit} disabled={isSubmitting}>Submit</Button>

				</Stack>
			</div>
		)}
		
		</Formik>
	</div>
}

export default ProfileForm;
