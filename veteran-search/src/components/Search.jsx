import { Formik } from 'formik';
import { Button, Form, InputGroup } from 'react-bootstrap';
import * as Yup from 'yup';

import * as backend from '../helpers/backend.js';

import '../style.css';

const schema = Yup.object().shape({
  input: Yup.string().required('Name required for search'),
});

export const Search = ({setResults}) => {
  return (
    <Formik 
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(async () => {
          setResults(await backend.search(values.input)
          .catch(error => {
            console.log(error);
          }));
          setSubmitting(false);
        }, 400);
      }}
      validationSchema={schema}
      initialValues={{
        input: '',
      }}
    > 
      {({
        values,
        errors,
        touched,
        isSubmitting,
        handleSubmit,
        handleChange,
      }) => (
        <Form onKeyDown={(e) => {e.key === "Enter" ? handleSubmit : null}} onSubmit={handleSubmit}>
          <Form.Group className="mb-3">
            <InputGroup className='search'>
              <Form.Control
                type='text' 
                name='input'
                value={values.input}
                onChange={handleChange}
                placeholder="Search for heros..."
              />
              <Button variant={isSubmitting ? 'secondary' : 'primary'} type='submit'>{isSubmitting ? 'Searching...' : 'Search'}</Button>
            </InputGroup>
          </Form.Group>
          {touched.input && errors.input ? (<div>{errors.input}</div>) : null}
        </Form> 
      )}
    </Formik>
  )
}
