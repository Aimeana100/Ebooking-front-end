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
  CRow,
} from '@coreui/react'

const UserAdd = () => {
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
                <strong> Add User </strong>
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
                  <CFormLabel htmlFor="email">
                    {' '}
                    email <span className="text-warning"> use for login </span>{' '}
                  </CFormLabel>
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

                <CCol md={6}>
                  <CFormLabel htmlFor="role"> Role </CFormLabel>
                  <CFormSelect
                    name="role"
                    id="role"
                    size="md"
                    className="mb-3"
                    aria-label="Room class"
                    onChange={handleChange}
                  >
                    <option>-- Select -- </option>
                    <option value="1"> Admin </option>
                    <option value="2"> Receptionist </option>
                    <option value="3"> Cashier </option>
                    <option value="4"> Manager </option>
                    <option value="4"> Waiter </option>
                  </CFormSelect>
                </CCol>
                <CCol md={6}>
                  <CFormLabel htmlFor="password"> Password </CFormLabel>
                  <CFormInput
                    className="mb-1"
                    type="text"
                    name="password"
                    id="password"
                    size="md"
                    required
                    onChange={handleChange}
                    value="12345678"
                    readOnly
                  />
                </CCol>
                <CCol xs={12}>
                  <CButton component="input" type="submit" value="Add a User" />
                </CCol>
              </CForm>
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
    </>
  )
}

export default UserAdd
