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
                <strong> Add Stock </strong>
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
                  <CFormLabel htmlFor="product"> Select Product </CFormLabel>
                  <CFormSelect
                    name="product"
                    id="product"
                    size="md"
                    className="mb-3"
                    aria-label="Product"
                    onChange={handleChange}
                  >
                    <option>-- Select -- </option>
                    <option value="1"> Product 1 </option>
                    <option value="2"> Product 2 </option>
                  </CFormSelect>
                </CCol>
                <CCol md={6}>
                  <CFormLabel htmlFor="quantity"> Quantity </CFormLabel>
                  <CFormInput
                    className="mb-1"
                    type="text"
                    name="quantity"
                    id="quantity"
                    size="md"
                    required
                    onChange={handleChange}
                    value="12345678"
                    readOnly
                  />
                </CCol>
                <CCol xs={12}>
                  <CButton component="input" type="submit" value="Add Stock" />
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
