import { React, useEffect, useState } from 'react'
import {
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CRow,
  CTable,
  CTableBody,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
} from '@coreui/react'
import { Link } from 'react-router-dom'
import { deleteUser, getUsers } from 'src/redux/User/userActions'
import { useDispatch, useSelector } from 'react-redux'
import { selectUser } from 'src/redux/User/userActions'
import { getRoles } from 'src/redux/Roles/RolesActions'
import { selectItem } from 'src/redux/Select/selectionActions'
import axios from 'axios'
import { toast } from 'react-hot-toast'

const UserRoles = () => {
  let users = useSelector((state) => state.systemUsers.users) || []
  let loggedInUser = useSelector((state) => state.auth.user.Role.name)
  const [roles, setRoles] = useState([])
  const [change, setChange] = useState(false)
  users = users ? users : []
  const dispatch = useDispatch()
  const deleteUserRole = async (id) => {
    const res = await axios
      .delete(`http://206.81.29.111:80/api/v1/roles/delete/${id}`)
      .then((res) => {
        toast.success('User role deleted')
        console.log(res)
      })
      .catch((err) => {
        console.log('role delete error', err.message)
      })
  }
  useEffect(() => {
    const getAllRoles = async () => {
      const res = await axios
        .get('http://206.81.29.111:80/api/v1/roles/all')
        .then((res) => {
          setRoles(res.data.roles)
          toast.success('all roles available')
        })
        .catch(() => {
          toast.error('network error')
        })
    }
    getAllRoles()
  }, [change])
  useEffect(() => {}, [roles])

  return (
    <CRow>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <h2>
              <strong> All user roles </strong>
            </h2>
          </CCardHeader>
          <CCardBody>
            <CTable bordered>
              <CTableHead>
                <CTableRow>
                  <CTableHeaderCell scope="col">#</CTableHeaderCell>
                  <CTableHeaderCell scope="col"> Name </CTableHeaderCell>
                  <CTableHeaderCell scope="col"> Access </CTableHeaderCell>
                  <CTableHeaderCell scope="col"> Permissions </CTableHeaderCell>
                  <CTableHeaderCell scope="col"> Action </CTableHeaderCell>
                </CTableRow>
              </CTableHead>
              <CTableBody>
                {roles && roles.length !== 0 ? (
                  roles.map((role, i) => (
                    <CTableRow key={role._id}>
                      <CTableHeaderCell scope="row">{i + 1}</CTableHeaderCell>
                      <CTableDataCell> {role.name} </CTableDataCell>
                      <CTableDataCell>
                        {' '}
                        {role.access && role.access.length !== 0
                          ? role.access.map((acces) => <p>{acces}</p>)
                          : role.name === 'admin'
                          ? 'all'
                          : ''}{' '}
                      </CTableDataCell>
                      <CTableDataCell>
                        {' '}
                        {role.permission && role.permission.length !== 0
                          ? role.permission.map((perm) => <p>{perm}</p>)
                          : role.name === 'admin'
                          ? 'all'
                          : ''}{' '}
                      </CTableDataCell>
                      <CTableDataCell className="d-flex gap-2">
                        <Link
                          to="/booking/user/roles/edit"
                          className={`${
                            loggedInUser === 'controller' ? 'disabled' : ''
                          } btn btn-sm btn-warning`}
                          onClick={() => {
                            console.log('this is role', role)
                            return dispatch(selectItem(role))
                          }}
                        >
                          {' '}
                          Edit{' '}
                        </Link>
                        <button
                          className={`${
                            loggedInUser === 'controller' ? 'disabled' : ''
                          } btn btn-sm btn-danger`}
                          onClick={() => {
                            setChange(!change)
                            return deleteUserRole(role.id)
                          }}
                        >
                          Delete
                        </button>
                      </CTableDataCell>
                    </CTableRow>
                  ))
                ) : (
                  <CTableRow></CTableRow>
                )}
              </CTableBody>
            </CTable>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  )
}

export default UserRoles
