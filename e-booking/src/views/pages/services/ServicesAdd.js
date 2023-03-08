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
  CFormTextarea,
  CRow,
} from '@coreui/react'

const ServicesAdd = () => {
  const [formData, setformData] = useState({})
  const [roomClass, setroomClass] = useState([])

  const handleChange = (e) => {
    setformData({ ...formData, [e.target.name]: e.target.value })
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
                <strong> Add Service </strong>
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
                  <CFormLabel htmlFor="title"> Service title </CFormLabel>
                  <CFormInput
                    className="mb-1"
                    type="text"
                    name="title"
                    id="title"
                    size="md"
                    required
                    onChange={handleChange}
                  />
                </CCol>

                <CCol md={6}>
                  <CFormLabel htmlFor="price"> Price </CFormLabel>
                  <CFormInput
                    className="mb-1"
                    type="number"
                    name="price"
                    id="price"
                    size="md"
                    required
                    onChange={handleChange}
                  />
                </CCol>
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
                  <CButton component="input" type="submit" value="create service" />
                </CCol>
              </CForm>
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
    </>
  )
}

export default ServicesAdd
