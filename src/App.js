import { useState } from 'react'
import Header from "./Components/Header"
import Footer from "./Components/Footer"
import Sittings from "./Components/Sittings"
import SelectOption from "./Components/SelectOption"
import 'bootstrap/dist/css/bootstrap.min.css';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import DatePicker from 'react-date-picker';

const App = () => {
  const [sitingList, setSitings] = useState([
    {
      id: 1,
      animalName: "Dog",
      Breed: "Pomerian",
      sittingBookedDate: "Dec 30th 2022",
      time: "3:00PM"
    },
    {
      id: 2,
      animalName: "Cat",
      Breed: "Persian",
      sittingBookedDate: "Dec 25th 2022",
      time: "5:05PM"
    },
    {
      id: 3,
      animalName: "Rat",
      Breed: "Hamster",
      sittingBookedDate: "Jan 3th 2022",
      time: "6:10PM"
    }
  ])

  const [value, onChange] = useState(new Date());

  const optionAnimalData = ["Cat"]

  const optionBreedData = ["Perisan", "American shorthair"]

  return (
    <Container className="container">
      <Header />
      <Row className='mb-4'>
        <Col>
          <Form.Label>Select Animal</Form.Label>
          <SelectOption optionData={optionAnimalData} />
        </Col>
        <Col>
          <Form.Label>Select Breed</Form.Label>
          <SelectOption optionData={optionBreedData} />
        </Col>
        <Col>
          <Form.Label>Appointment Date</Form.Label>
          <DatePicker onChange={onChange} value={value} />
        </Col>
      </Row>
      {
        Sittings.length > 0 ? (
          <Sittings sitingList={sitingList} />
        ) : (
          'No siting is in the list'
        )
      }
      <Footer />
    </Container >

  )
}


export default App
