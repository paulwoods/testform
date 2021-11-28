
import { Formik, Form, Field, ErrorMessage, useField} from 'formik'
import * as yup from 'yup'

const MyTextInput=({label, ...props}) => {
	const [field, meta] = useField(props);
   	return <div>
		<label htmlFor={props.id || props.name}>{label}</label>
		<input className="text-input" {...field} {...props} />
			{meta.touched && meta.error ?
				<div className="error">{meta.error}</div>
				: null
			}
   </div>
   
}

const validationSchema = yup.object({
	firstName: yup
		.string('Enter your first name')
		.required('First name is required'),
	lastName: yup
		.string('Enter your last name')
		.required('last name is required')
})

const ProfileForm = () => {

	return <div> 
		<Formik
			initialValues={{
				firstName: "first",
				middleName: "middle",
				lastName: "last"
			}}
			validationSchema={validationSchema}
			onSubmit={(values, { setSubmitting }) => {
         		setTimeout(() => {
           			alert(JSON.stringify(values, null, 2))
           			setSubmitting(false)
     		}, 400)
       	}}
		> 
		{({isSubmitting, errors, touched}) => (
			<Form>
				<h1>Profile Form</h1>
				<MyTextInput label="First Name" name="firstName" type="text" placeholder="first name"/>
				<MyTextInput label="Middle Name" name="middleName" type="text" placeholder="middle name"/>
				<MyTextInput label="Last Name" name="lastName" type="text" placeholder="last name"/>
				<div>
					<button type="submit" disabled={isSubmitting}>
             		Submit
           			</button>
           		</div>

			</Form>
		)}
		
		</Formik>
	</div>
}

export default ProfileForm;
