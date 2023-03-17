import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { Typeahead } from 'react-bootstrap-typeahead'

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
import { useSelector } from 'react-redux'

function ServiceSell() {
  const { register, handleSubmit, watch, reset } = useForm()
  const [singleSelections, setSingleSelections] = useState([])
  // const options = useSelector((state) => state.products) || []
  const noProducts = [{ name: 'product1' }, { name: 'product2' }]
  const onServiceSell = (data) => {
    console.log(data)
    //roomClass.push(formData);
  }
  const productPackages = [{}]
  const quantity = watch('quantity')
  const inputState = { minLength: 2 }
  return (
    <>
      <CRow>
        <CCol xs={12}>
          <CCard className="mb-4">
            <CCardHeader>
              <h2 className="text-center">
                <strong> Checkout service </strong>
              </h2>
            </CCardHeader>
            <CCardBody>
              <CForm
                className="row"
                name="roomClassAddFrm"
                encType="multipart/form"
                onSubmit={handleSubmit(onServiceSell)}
              >
                <CCol md={6}>
                  <CFormLabel htmlFor="title"> Service name </CFormLabel>

                  <Typeahead
                    {...inputState}
                    id="basic-typeahead-single"
                    labelKey="name"
                    onChange={setSingleSelections}
                    options={noProducts}
                    placeholder="search service..."
                    selected={singleSelections}
                  />
                </CCol>

                <CCol md={6}>
                  <CFormLabel className="d-flex align-content-end flex-col">
                    Total : <strong className="px-2"> xxx</strong>
                  </CFormLabel>
                </CCol>

                <CCol xs={12} className="text-center my-3">
                  <CButton component="input" type="submit" value="Check out" />
                </CCol>
              </CForm>
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
    </>
  )
}

export default ServiceSell
// <CFormInput
//                     className="mb-1"
//                     type="text"
//                     name="title"
//                     id="title"
//                     size="md"
//                     required
//                     {...register('name')}
//                   />
