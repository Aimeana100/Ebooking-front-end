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
import { useSelector } from 'react-redux'

function UserRolesEdit() {
  const { register, handleSubmit, watch, reset } = useForm()
  const role = useSelector((state) => state.selection.selected)
  const accessArray = [
    'halls',
    'room class',
    'rooms',
    'reservations',
    'products',
    'customers',
    'stock',
    'services',
    'stock items',
    'reports',
  ]
  const permissionArray = ['view', 'add', 'edit', 'comment', 'delete']
  const onSubmit = async (data) => {
    //console.log(data)
    if (data.access) {
      data.access = [...data.access, 'Dashboard']
    }
    data = { ...data, id: role.id }
    console.log(data)
    const res = await axios
      .put('http://206.81.29.111:80/api/v1/roles/update', data)
      .then((res) => {
        toast.success('user role updated')
        reset()
      })
      .catch((err) => {
        toast.error('user role not updated')
        reset()
      })
  }
  useEffect(() => {}, [])
  return (
    <div>
      <CCard className="mb-4">
        <CCardHeader>
          <h2>
            <strong> Edit Role </strong>
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
                defaultValue={role.name}
                readOnly
                required
                {...register('name')}
              />
            </CCol>

            <CRow>
              <CCol>
                <p className="fw-bolder"> Role Access</p>
                <div>
                  {accessArray && accessArray.length !== 0
                    ? accessArray.map((e) => {
                        return (
                          <CFormCheck
                            key={e}
                            id="Access 1"
                            value={e}
                            defaultChecked={role.access.includes(e)}
                            label={e.charAt(0).toUpperCase() + e.slice(1)}
                            {...register(`access`)}
                          />
                        )
                      })
                    : null}
                </div>
              </CCol>
              <CCol>
                <p className="fw-bolder"> Role permissions</p>
                <div>
                  {permissionArray && permissionArray.length !== 0
                    ? permissionArray.map((e, i) => {
                        return (
                          <CFormCheck
                            key={e}
                            id={`permission ${i}`}
                            defaultChecked={role.permission.includes(e)}
                            value={e}
                            label={e.charAt(0).toUpperCase() + e.slice(1)}
                            {...register(`permission`)}
                          />
                        )
                      })
                    : null}
                </div>
              </CCol>
            </CRow>
            <CRow xs={12} className="my-3">
              <CCol md={6}>
                <CButton
                  component="input"
                  type="submit"
                  value="Update user role"
                />
              </CCol>
            </CRow>
          </CForm>
        </CCardBody>
      </CCard>
    </div>
  )
}

export default UserRolesEdit
