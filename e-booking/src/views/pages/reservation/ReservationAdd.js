import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
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
  CRow,
} from '@coreui/react'

const ReservationAdd = () => {
  const [formData, setformData] = useState({})
  const [roomClass, setroomClass] = useState([])

  const handleChange = (e) => {
    setformData({ ...formData, [e.target.name]: e.target.value })
    console.log(formData)
  }
  const handleFileChange = (e) => {
    setformData({ ...formData, [e.target.name]: e.target.files[0] })
    console.log(formData)
  }

  const hundleSubmit = (e) => {
    e.preventDefault()
    roomClass.push(formData)
  }

  useEffect(() => {
    console.log(roomClass)
  }, [roomClass])

  return (
    <>
      <CRow>
        <CCol xs={12}>
          <CCard className="mb-4">
            <CCardHeader>
              <h2>
                <strong> Book room </strong>
              </h2>
            </CCardHeader>
            <CCardBody>
              <CForm
                className="row"
                name="roomClassAddFrm"
                onSubmit={hundleSubmit}
                encType="multipart/form"
              >
                <CCol md={6}>
                  <CFormLabel htmlFor="firstName"> First name </CFormLabel>
                  <CFormInput
                    className="mb-1"
                    type="text"
                    name="firstName"
                    id="firstName"
                    size="md"
                    required
                    onChange={handleChange}
                  />
                </CCol>
                <CCol md={6}>
                  <CFormLabel htmlFor="lastName"> First name </CFormLabel>
                  <CFormInput
                    className="mb-1"
                    type="text"
                    name="lastName"
                    id="lastName"
                    size="md"
                    required
                    onChange={handleChange}
                  />
                </CCol>

                <CCol md={6}>
                  <CFormLabel htmlFor="phone"> Phone </CFormLabel>
                  <CFormInput
                    className="mb-1"
                    type="text"
                    name="phone"
                    id="phone"
                    size="md"
                    required
                    onChange={handleChange}
                  />
                </CCol>
                <CCol md={6}>
                  <CFormLabel htmlFor="email"> email </CFormLabel>
                  <CFormInput
                    className="mb-1"
                    type="text"
                    name="email"
                    id="email"
                    size="md"
                    required
                    onChange={handleChange}
                  />
                </CCol>

                <div className="mb-3">
                  <CFormLabel htmlFor="gender"> Gender </CFormLabel>
                  <CFormSelect
                    name="gender"
                    id="gender"
                    size="md"
                    className="mb-3"
                    aria-label="Room class"
                    onChange={handleChange}
                  >
                    <option>-- Select -- </option>
                    <option value="male"> Male </option>
                    <option value="female"> Female </option>
                  </CFormSelect>
                </div>

                <div className="mb-4">
                  <CCardHeader>
                    <h5>
                      <strong> Customer </strong>
                    </h5>
                  </CCardHeader>
                  <CCardBody className="row">
                    <CCol md={6}>
                      <CFormLabel htmlFor="checkIn"> Check - in </CFormLabel>
                      <CFormInput
                        className="mb-1"
                        type="date"
                        name="checkIn"
                        id="checkIn"
                        size="md"
                        required
                        onChange={handleChange}
                      />
                    </CCol>
                    <CCol md={6}>
                      <CFormLabel htmlFor="checkOut"> Check - Out </CFormLabel>
                      <CFormInput
                        className="mb-1"
                        type="date"
                        name="email"
                        id="email"
                        size="md"
                        required
                        onChange={handleChange}
                      />
                    </CCol>

                    <div className="mb-3">
                      <CFormLabel htmlFor="room"> Check in Room </CFormLabel>
                      <CFormSelect
                        name="room"
                        id="room"
                        size="md"
                        className="mb-3"
                        aria-label="Room class"
                        onChange={handleChange}
                      >
                        <option>-- Select -- </option>
                        <option value="room"> Room 1 </option>
                        <option value="room"> Room 2 </option>
                      </CFormSelect>
                    </div>
                  </CCardBody>
                </div>
                <CCol xs={12}>
                  <CButton component="input" type="submit" value="Book now" />
                </CCol>
              </CForm>
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
    </>
  )
}

export default ReservationAdd
