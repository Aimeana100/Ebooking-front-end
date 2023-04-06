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
import React, { useEffect } from 'react'
import { FormCheck } from 'react-bootstrap'
import { useForm } from 'react-hook-form'
import { toast } from 'react-hot-toast'
import { useSelector } from 'react-redux'
import instance from 'src/API/AxiosInstance'

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
    data.access = data.access.reduce((obj, e) => {
      obj[e] = data[e].permission
      return obj
    }, {})
    let arr = Object.keys(data.access)
    let arr2 = Object.keys(data)
    for (let i = 0; i < arr2.length; i++) {
      if (arr.includes(arr2[i])) {
        delete data[arr2[i]]
      }
    }

    console.log(data)
    // if (data.access) {
    //   data.access = [...data.access, 'Dashboard']
    // }
    data = { ...data, id: role.id }
    console.log(data)
    const res = await instance
      .put('/roles/update', data)
      .then((res) => {
        toast.success('user role updated')
        reset()
      })
      .catch((err) => {
        toast.error('user role not updated', err.message)
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
                    ? accessArray.map((job) => {
                        return (
                          <div>
                            <CFormCheck
                              key={job}
                              id="Access 1"
                              value={job}
                              defaultChecked={Object.keys(role.access).includes(
                                job,
                              )}
                              label={job.charAt(0).toUpperCase() + job.slice(1)}
                              {...register(`access`)}
                            />
                            {permissionArray.map((perm, i) => (
                              <div key={i} className="ms-3">
                                <CFormCheck
                                  id="Access 1"
                                  value={perm}
                                  defaultChecked={
                                    Object.keys(role.access).includes(job)
                                      ? role.access[job].includes(perm)
                                        ? true
                                        : false
                                      : false
                                  }
                                  label={perm}
                                  {...register(`${job}.permission`)}
                                />
                              </div>
                            ))}
                          </div>
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

// <CCol>
//                 <p className="fw-bolder"> Role permissions</p>
//                 <div>
//                   {permissionArray && permissionArray.length !== 0
//                     ? permissionArray.map((e, i) => {
//                         return (
//                           <CFormCheck
//                             key={e}
//                             id={`permission ${i}`}
//                             defaultChecked={role.permission.includes(e)}
//                             value={e}
//                             label={e.charAt(0).toUpperCase() + e.slice(1)}
//                             {...register(`permission`)}
//                           />
//                         )
//                       })
//                     : null}
//                 </div>
//               </CCol>
