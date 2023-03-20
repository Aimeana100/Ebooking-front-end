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
import axios from 'axios'
import React from 'react'
import { useForm } from 'react-hook-form'
import { useSelector } from 'react-redux'

function HallServicesAdd() {
  let loggedInUser = useSelector((state) => state.auth.role)
  const { register, handleSubmit, reset } = useForm()
  const onSubmit = async (data) => {
    console.log(data)
    const res = await axios
      .post('http://206.81.29.111:80/api/v1/hall/services/add', data)
      .then((res) => {
        console.log(res.data)
      })
      .catch((err) => {
        console.log('err creating Hall product', err.message)
      })
    reset()
  }

  return (
    <CRow>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <h2>
              <strong> Add new hall product </strong>
            </h2>
          </CCardHeader>
          <CCardBody>
            <CForm name="roomAddFrm" onSubmit={handleSubmit(onSubmit)}>
              <div className="mb-3">
                <CFormLabel htmlFor="hallName">Product name </CFormLabel>
                <CFormInput
                  type="text"
                  name="hallName"
                  id="hallName"
                  placeholder="product name"
                  size="md"
                  {...register('name', { required: true })}
                />
              </div>
              <div className="mb-3">
                <div>
                  <CFormLabel htmlFor="hallPrice"> Price in USD </CFormLabel>
                  <CFormInput
                    type="text"
                    name="hallServicePrice "
                    id="hallServicePrice"
                    placeholder="price in USD"
                    size="md"
                    {...register('price', { required: true })}
                  />
                </div>
              </div>

              <div className="mb-3">
                <CFormLabel htmlFor="description"> Description </CFormLabel>
                <CFormTextarea
                  name="description"
                  id="description"
                  rows="3"
                  {...register('description')}
                ></CFormTextarea>
              </div>
              <CCol xs={12}>
                <CButton
                  component="input"
                  className={`${
                    loggedInUser === 'controller' || loggedInUser !== 'admin'
                      ? 'disabled'
                      : ''
                  }`}
                  type="submit"
                  value="Add Hall"
                />
              </CCol>
            </CForm>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  )
}

export default HallServicesAdd
