//jshint esversion:9
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
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
import { registerUser } from 'src/redux/Auth/authActions'
import { getRoles } from 'src/redux/Roles/RolesActions'
import { updateUser } from 'src/redux/User/userActions'
import { useForm } from 'react-hook-form'
import axios from 'axios'
import { toast } from 'react-hot-toast'

const UserEdit = () => {
  const { register, handleSubmit, reset } = useForm()
  let users = useSelector((state) => state.systemUsers.users)
  const selectedUser = useSelector((state) => state.selection.selected) || {}
  const roles = useSelector((state) => state.roles.userRoles) || []
  let [formData, setformData] = useState({ ...selectedUser })

  const dispatch = useDispatch()

  const onSubmit = async (data) => {
    data.id = selectedUser.id ? selectedUser.id : null
    //updating users array

    users = users.map((user) =>
      user._id === selectedUser._id ? (user = { ...user, ...data }) : user,
    )
    data.role = selectedUser.Role.name

    const updateUser = await axios
      .put('http://206.81.29.111:80/api/v1/users/update', data)
      .then((res) => {
        toast.success('user updated')
      })
      .catch((err) => {
        console.log(err)
        toast.error('user updated failed')
      })
    dispatch(updateUser(data, users))
  }

  useEffect(() => {
    dispatch(getRoles())
  }, [])

  return (
    <>
      <CRow>
        <CCol xs={12}>
          <CCard className="mb-4">
            <CCardHeader>
              <h2>
                <strong> Edit user </strong>
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
                  <CFormLabel htmlFor="firstName"> First name </CFormLabel>
                  <CFormInput
                    className="mb-1"
                    type="text"
                    name="firstName"
                    id="firstName"
                    size="md"
                    defaultValue={formData.firstName}
                    {...register('firstName')}
                    required
                  />
                </CCol>
                <CCol md={6}>
                  <CFormLabel htmlFor="lastName"> Last name </CFormLabel>
                  <CFormInput
                    className="mb-1"
                    type="text"
                    name="lastName"
                    id="lastName"
                    size="md"
                    defaultValue={formData.lastName}
                    {...register('lastName')}
                    required
                  />
                </CCol>

                <CCol md={6}>
                  <CFormLabel htmlFor="phone"> Phone </CFormLabel>
                  <CFormInput
                    className="mb-1"
                    type="text"
                    name="phone"
                    id="phone"
                    size="md"
                    required
                    defaultValue={formData.phone ? formData.phone : ''}
                    {...register('phone')}
                  />
                </CCol>
                <CCol md={6}>
                  <CFormLabel htmlFor="email">
                    {' '}
                    email <span className="text-warning"> </span>{' '}
                  </CFormLabel>
                  <CFormInput
                    className="mb-1"
                    type="text"
                    name="email"
                    id="email"
                    size="md"
                    defaultValue={formData.email}
                    {...register('email')}
                    required
                  />
                </CCol>

                <CCol md={6}>
                  <CFormLabel htmlFor="role"> Role </CFormLabel>
                  <CFormSelect
                    name="role"
                    id="role"
                    size="md"
                    className="mb-3"
                    aria-label="update user role"
                    defaultValue={formData.role}
                    {...register('role')}
                  >
                    <option>-- Select -- </option>
                    {roles && roles.length !== 0
                      ? roles.map((role) => (
                          <option value={role.id} key={role._id}>
                            {role.name}
                          </option>
                        ))
                      : null}
                  </CFormSelect>
                </CCol>

                <CCol xs={12}>
                  <CButton
                    component="input"
                    type="submit"
                    value="Save changes"
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

export default UserEdit
