import { useState } from 'react'
import { Container, Row } from 'react-bootstrap'

import { Search } from './components/Search'
import { Results } from './components/Results'

import './style.css';

const App = () => {
  const [results, setResults] = useState();

  return (
    <>
      <Container className='banner' fluid>
        <Row className='banner-heading'>
          <h1 className='heading'>Veterans Search</h1>
          <h3 className='subheading'>The largest database of heros</h3>
        </Row>
      </Container>
      <Container>
        <Row sm>
          <Search setResults={setResults} sm/>
        </Row>
      </Container>
      {results ? <Container><Results results={results}/></Container> : null}
    </>
  )
}

export default App