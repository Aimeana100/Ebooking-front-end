import React, { useState, useEffect } from 'react'
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
import axios from 'axios'

export default function RoomSell() {
  const [rooms, setRooms] = useState([])
  const { register, handleSubmit, watch, reset } = useForm()
  const [singleSelections, setSingleSelections] = useState([])
  const price = 0
  //console.log('This is selected', singleSelections)
  // const options = useSelector((state) => state.products) || []

  const onServiceSell = (data) => {
    console.log(data)
    //roomClass.push(formData);
  }
  const onProductSell = (data) => {
    console.log(data)
  }
  const productPackages = [{}]
  const days = watch('quantity')
  const pItem = watch('pItem')
  const inputState = { minLength: 2 }
  useEffect(() => {
    const getRoomClasses = async () => {
      const res = await axios
        .get('http://206.81.29.111:80/api/v1/roomclass/all')
        .then((res) => {
          console.log(res.data)
          setRoom(res.data.data)
        })
        .catch((err) => {
          console.log('err getting room classes')
        })
    }
    getRoomClasses()
  }, [])
  return (
    <>
      <CRow>
        <CCol xs={12}>
          <CCard className="mb-4">
            <CCardHeader>
              <h2 className="text-center">
                <strong> Checkout Room </strong>
              </h2>
            </CCardHeader>
            <CCardBody>
              <CForm
                className="row"
                name="roomClassAddFrm"
                encType="multipart/form"
                onSubmit={handleSubmit(onProductSell)}
              >
                <CCol md={6}>
                  <CFormLabel htmlFor="title"> Room number </CFormLabel>

                  <Typeahead
                    {...inputState}
                    id="basic-typeahead-single"
                    labelKey="name"
                    onChange={setSingleSelections}
                    options={rooms}
                    placeholder="room number ..."
                    selected={singleSelections}
                  />
                </CCol>

                <CCol md={6}>
                  <CFormLabel htmlFor="title"> days </CFormLabel>
                  <CFormInput
                    className="mb-1"
                    type="Number"
                    name="quantity"
                    id="title"
                    size="md"
                    required
                    {...register('days')}
                  />
                </CCol>
                <CCol md={6}>
                  <CFormLabel className="d-flex align-content-end flex-col">
                    Total :{' '}
                    <strong className="px-2">
                      {Number(days) * Number(price)}
                    </strong>
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
