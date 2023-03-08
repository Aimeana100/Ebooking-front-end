import React, { useEffect, useState } from 'react'
import {
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CForm,
  CFormInput,
  CFormLabel,
  CFormSelect,
  CFormTextarea,
  CRow,
} from '@coreui/react'

const FormControl = () => {
  const [formState, setFormState] = useState({})
  const [rooms, setRooms] = useState([])

  const handleChange = (event) => {
    event.preventDefault()
    setFormState({ ...formState, [event.target.name]: event.target.value })
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    rooms.push(formState)
  }

  useEffect(() => {
    console.log(rooms)
  }, [rooms])

  return (
    <CRow>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <h2>
              <strong> Add new room </strong>
            </h2>
          </CCardHeader>
          <CCardBody>
            <CForm name="roomAddFrm" onSubmit={handleSubmit}>
              <div className="mb-3">
                <CFormLabel htmlFor="roomNumber"> Room number </CFormLabel>
                <CFormInput
                  type="text"
                  name="roomNumber"
                  id="roomNumber"
                  placeholder="V10MT"
                  size="md"
                  onChange={handleChange}
                />
              </div>
              <div className="mb-3">
                <CFormLabel htmlFor="roomClassId"> Room Class </CFormLabel>
                <CFormSelect
                  name="roomClassId"
                  id="roomClassId"
                  size="md"
                  className="mb-3"
                  aria-label="Room class"
                  onChange={handleChange}
                >
                  <option>-- Select -- </option>
                  <option value="1"> Class 1 </option>
                  <option value="2"> Class 2 </option>
                </CFormSelect>
              </div>
              <div className="mb-3">
                <CFormLabel htmlFor="description"> Description </CFormLabel>
                <CFormTextarea
                  name="description"
                  id="description"
                  rows="3"
                  onChange={handleChange}
                ></CFormTextarea>
              </div>
              <CCol xs={12}>
                <CButton component="input" type="submit" value="Add room" />
              </CCol>
            </CForm>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  )
}

export default FormControl
