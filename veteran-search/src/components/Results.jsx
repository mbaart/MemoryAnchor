import { Stack } from 'react-bootstrap';
import { Result } from './Result';

import '../style.css';

export const Results = ({ results }) => {
  return (
    <Stack gap={3} className='stack'>
      {results ? results.map(result => <Result key={result.id} data={result}></Result>) : null}
    </Stack>
  )
}
