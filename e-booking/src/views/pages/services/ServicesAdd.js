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
  CFormSelect,
  CRow,
  CFormCheck,
} from '@coreui/react'
import { useForm } from 'react-hook-form'
import { useSelector, useDispatch } from 'react-redux'
import axios from 'axios'

const ServiceAdd = () => {
  const { register, handleSubmit, watch, reset } = useForm()
  const role = useSelector((state) => state.auth.user.role) || ''
  const dispatch = useDispatch()
  const [categories, setCategories] = useState([
    { name: 'Sauna', id: 5001209 },
    { name: 'Gym', id: 69560 },
  ])

  const category = watch('category', '---')
  const price = watch('price', '---')
  console.log(role)
  const onSubmit = async (data) => {
    const res = await axios
      .post('http://206.81.29.111:80/api/v1/services/add', data)
      .then((res) => {
        console.log(res.data)
      })
      .catch((err) => {
        console.log('error adding service', err.message)
      })
  }
  const onManagerSubmit = async (data) => {
    const res = await axios
      .post('http://206.81.29.111:80/api/v1/services/add', data)
      .then((res) => {
        console.log(res.data)
      })
      .catch((err) => {
        console.log('error adding service', err.message)
      })
  }
  useEffect(() => {
    const getServiceCategories = async () => {
      const res = await axios
        .get('http://206.81.29.111:80/api/v1/services/category/all')
        .then((res) => {
          setCategories(res.data.data)
        })
        .catch((err) => {
          console.log('error getting categories')
        })
    }
    getServiceCategories()
  }, [])

  if (role === 'admin') {
    return (
      <>
        <CRow>
          <CCol xs={12}>
            <CCard className="mb-4">
              <CCardHeader>
                <h2 className="text-center">
                  <strong> Add Service </strong>
                </h2>
              </CCardHeader>
              <CCardBody>
                <CForm
                  className="row"
                  name="roomClassAddFrm"
                  encType="multipart/form"
                  onSubmit={handleSubmit(onSubmit)}
                >
                  <CCol md={6}>
                    <CFormLabel htmlFor="category"> Select service</CFormLabel>
                    <CFormSelect
                      name="category"
                      id="category"
                      size="md"
                      className="mb-3"
                      aria-label="Room class"
                      {...register('category', { required: true })}
                    >
                      <option>-- Select -- </option>
                      {categories && categories.length !== 0
                        ? categories.map((category) => (
                            <option value={category.id} key={category.id}>
                              {category.name}
                            </option>
                          ))
                        : null}
                    </CFormSelect>
                  </CCol>
                  <CCol md={6}>
                    <CFormLabel htmlFor="title"> Service title </CFormLabel>
                    <CFormInput
                      className="mb-1"
                      type="text"
                      name="title"
                      id="title"
                      size="md"
                      required
                      {...register('name')}
                    />
                  </CCol>

                  <CCol xs={12} className="text-center my-3">
                    <CButton
                      component="input"
                      type="submit"
                      value=" Save product details"
                    />
                  </CCol>

                  <CCol>
                    {category && category !== '---'
                      ? categories.map((cat) =>
                          cat.id == category ? (
                            <div>
                              <CCol md={6}>
                                <CFormLabel
                                  htmlFor="price1"
                                  className="col-form-label"
                                >
                                  Set price for
                                  <span className="strong"> {cat.name} </span>
                                  package
                                </CFormLabel>
                              </CCol>
                              <CCol md="6">
                                <CFormInput
                                  type="Number"
                                  min="1"
                                  id="price1"
                                  aria-describedby={cat.name}
                                  {...register('price', {
                                    required: true,
                                  })}
                                />
                              </CCol>
                            </div>
                          ) : null,
                        )
                      : null}
                    {price && price !== '---' ? (
                      <CCol xs={12} className="text-center my-3">
                        <CButton
                          component="input"
                          type="submit"
                          value=" Save product"
                        />
                      </CCol>
                    ) : null}
                  </CCol>
                </CForm>
              </CCardBody>
            </CCard>
          </CCol>
        </CRow>
      </>
    )
  } else {
    return (
      <>
        <CRow>
          <CCol xs={12}>
            <CCard className="mb-4">
              <CCardHeader>
                <h2 className="text-center">
                  <strong> Add Service </strong>
                </h2>
              </CCardHeader>
              <CCardBody>
                <CForm
                  className="row"
                  name="roomClassAddFrm"
                  encType="multipart/form"
                  onSubmit={handleSubmit(onManagerSubmit)}
                >
                  <CCol md={6}>
                    <CFormLabel htmlFor="category"> Select service</CFormLabel>
                    <CFormSelect
                      name="category"
                      id="category"
                      size="md"
                      className="mb-3"
                      aria-label="Room class"
                      {...register('category', { required: true })}
                    >
                      <option>-- Select -- </option>
                      {categories && categories.length !== 0
                        ? categories.map((category) => (
                            <option value={category.id} key={category.id}>
                              {category.name}
                            </option>
                          ))
                        : null}
                    </CFormSelect>
                  </CCol>
                  <CCol md={6}>
                    <CFormLabel htmlFor="title"> Service title </CFormLabel>
                    <CFormInput
                      className="mb-1"
                      type="text"
                      name="title"
                      id="title"
                      size="md"
                      required
                      {...register('name')}
                    />
                  </CCol>

                  <CCol xs={12} className="text-center my-3">
                    <CButton
                      component="input"
                      type="submit"
                      value=" Save product details"
                    />
                  </CCol>
                </CForm>
              </CCardBody>
            </CCard>
          </CCol>
        </CRow>
      </>
    )
  }
}

export default ServiceAdd
