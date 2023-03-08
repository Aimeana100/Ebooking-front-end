import React from 'react'
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
            <CForm name="roomAddFrm">
              <div className="mb-3">
                <CFormLabel htmlFor="roomNumber"> Room number </CFormLabel>
                <CFormInput
                  type="text"
                  name="roomNumber"
                  id="roomNumber"
                  placeholder="V10MT"
                  size="md"
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
                >
                  <option>-- Select -- </option>
                  <option value="1"> One </option>
                  <option value="2"> Two </option>
                  <option value="3"> Three </option>
                </CFormSelect>
              </div>
              <div className="mb-3">
                <CFormLabel htmlFor="description"> Description </CFormLabel>
                <CFormTextarea name="description" id="description" rows="3"></CFormTextarea>
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
