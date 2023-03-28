import {
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CForm,
  CFormCheck,
  CFormInput,
  CFormLabel,
  CRow,
} from '@coreui/react'
import axios from 'axios'
import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'react-hot-toast'

function UserRolesAdd() {
  const { register, handleSubmit, watch, reset } = useForm()
  const onSubmit = async (data) => {
    console.log(data)
    if (data.access) {
      data.access = [...data.access, 'Dashboard']
    }

    const res = await axios
      .post('http://206.81.29.111:80/api/v1/roles/add', data)
      .then((res) => {
        toast.success('role created')
        reset()
      })
      .catch((err) => {
        toast.error('role not created')
        reset()
      })
  }
  useEffect(() => {}, [])
  return (
    <div>
      <CCard className="mb-4">
        <CCardHeader>
          <h2>
            <strong> Add Role </strong>
          </h2>
        </CCardHeader>
        <CCardBody>
          <CForm
            className="row"
            name="roomClassAddFrm"
            onSubmit={handleSubmit(onSubmit)}
            encType="multipart/form"
          >
            <CCol md={6}>
              <CFormLabel htmlFor="Role name">Name </CFormLabel>
              <CFormInput
                className="mb-1"
                type="text"
                name="role"
                id="role"
                size="md"
                required
                {...register('name')}
              />
            </CCol>

            <CRow>
              <CCol>
                <p className="fw-bolder"> Role Access</p>
                <div>
                  <CFormCheck
                    id="Access 1"
                    value="halls"
                    label="Halls"
                    {...register(`access`)}
                  />
                  <CFormCheck
                    id="Access 2"
                    value="room class"
                    label="Room class"
                    {...register(`access`)}
                  />
                  <CFormCheck
                    id="access 3"
                    value="room"
                    label="Rooms"
                    {...register(`access`)}
                  />
                  <CFormCheck
                    id="access 4"
                    value="reservations"
                    label="Reservations"
                    {...register(`access`)}
                  />
                  <CFormCheck
                    id="access 5"
                    value="products"
                    label="Products"
                    {...register(`access`)}
                  />
                  <CFormCheck
                    id="access 6"
                    value="customers"
                    label="Customers"
                    {...register(`access`)}
                  />
                  <CFormCheck
                    id="access 7"
                    value="stock"
                    label="Stock"
                    {...register(`access`)}
                  />
                  <CFormCheck
                    id="access 7"
                    value="services"
                    label="Services"
                    {...register(`access`)}
                  />
                  <CFormCheck
                    id="access 7"
                    value="stock items"
                    label="Stock items"
                    {...register(`access`)}
                  />

                  <CFormCheck
                    id="access 6"
                    value="reports"
                    label="Reports"
                    {...register(`access`)}
                  />
                </div>
              </CCol>

              <CCol>
                <p className="fw-bolder"> Role permissions</p>
                <div>
                  <CFormCheck
                    id="permission 1"
                    value="view"
                    label="View"
                    {...register(`permission`)}
                  />
                  <CFormCheck
                    id="permission 2"
                    value="add"
                    label="Add"
                    {...register(`permission`)}
                  />
                  <CFormCheck
                    id="permission 2"
                    value="edit"
                    label="Edit"
                    {...register(`permission`)}
                  />
                  <CFormCheck
                    id="permission 2"
                    value="comment"
                    label="Comment"
                    {...register(`permission`)}
                  />
                  <CFormCheck
                    id="permission 3"
                    value="delete"
                    label="Delete"
                    {...register(`permission`)}
                  />
                </div>
              </CCol>
            </CRow>
            <CRow xs={12} className="my-3">
              <CCol md={6}>
                <CButton component="input" type="submit" value="Create role" />
              </CCol>
            </CRow>
          </CForm>
        </CCardBody>
      </CCard>
    </div>
  )
}

export default UserRolesAdd
