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
  CFormTextarea,
  CRow,
  CWidgetStatsF,
} from '@coreui/react'
import { cilArrowRight, cilClone } from '@coreui/icons'
import CIcon from '@coreui/icons-react'
import { useForm } from 'react-hook-form'
import axios from 'axios'
import { toast } from 'react-hot-toast'

const RoomClassAdd = () => {
  const [formData, setformData] = useState({})
  const [roomClass, setroomClass] = useState([])
  const { register, handleSubmit, watch, reset } = useForm()

  const handleChange = (e) => {
    setformData({ ...formData, [e.target.name]: e.target.value })
    console.log(formData)
  }
  const handleFileChange = (e) => {
    setformData({ ...formData, [e.target.name]: e.target.files[0] })
    console.log(formData)
  }

  const onSubmit = async (data) => {
    const res = await axios
      .post('http://206.81.29.111:80/api/v1/roomclass/add', data)
      .then((res) => {
        console.log(res.data)
        toast.success('Room class created')
        reset()
      })
      .catch((err) => {
        console.log('err creating room class', err.message)
        toast.error('Room class creation failed')
        reset()
      })
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
                <strong> Add room category</strong>
              </h2>
            </CCardHeader>
            <CCardBody>
              <CForm
                name="roomClassAddFrm"
                onSubmit={handleSubmit(onSubmit)}
                encType="multipart/form"
              >
                <div className="mb-3">
                  <CFormLabel htmlFor="name"> Class name </CFormLabel>
                  <CFormInput
                    type="text"
                    name="name"
                    id="name"
                    placeholder="VIP"
                    size="sm"
                    required
                    {...register('name', { required: true })}
                  />
                </div>
                <div className="mb-3">
                  <CFormLabel htmlFor="price"> Class Price in USD </CFormLabel>
                  <CFormInput
                    type="number"
                    name="price"
                    id="price"
                    placeholder="price in USD"
                    size="md"
                    required
                    {...register('price')}
                  />
                </div>

                <div className="mb-3">
                  <CFormLabel htmlFor="description"> Description </CFormLabel>
                  <CFormTextarea
                    name="description"
                    id="description"
                    rows="3"
                    {...register('description', { required: true })}
                  ></CFormTextarea>
                </div>
                <CCol xs={12}>
                  <CButton
                    component="input"
                    type="submit"
                    value="Add room Class"
                  />
                </CCol>
              </CForm>
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
      {roomClass.length ? (
        <CRow>
          {roomClass.map((item, index) => (
            <CCol xs={12} sm={6} lg={3} key={index}>
              <CWidgetStatsF
                className="mb-3"
                icon={<CIcon width={24} icon={cilClone} size="xl" />}
                title={item.name}
                value={item.price}
                color="warning"
                footer={
                  <Link
                    className="font-weight-bold font-xs text-medium-emphasis"
                    to="/"
                  >
                    View 40 Rooms
                    <CIcon
                      icon={cilArrowRight}
                      className="float-end"
                      width={16}
                    />
                  </Link>
                }
              />
            </CCol>
          ))}
        </CRow>
      ) : (
        <div> No Records </div>
      )}
    </>
  )
}

export default RoomClassAdd
