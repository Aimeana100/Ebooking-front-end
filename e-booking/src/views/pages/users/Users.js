import { React, useEffect } from 'react'
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

const Users = () => {
  let users = useSelector((state) => state.systemUsers.users) || []
  let role = useSelector((state) => state.auth.user.Role.name)
  users = users ? users : []
  const dispatch = useDispatch()
  useEffect(() => {
    console.log(users.length)
    if (users.length === 0) {
      dispatch(getUsers())
    }
    //dispatch(getRoles());
  }, [])

  return (
    <CRow>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <h2>
              <strong> All Users </strong>
            </h2>
          </CCardHeader>
          <CCardBody>
            <CTable bordered>
              <CTableHead>
                <CTableRow>
                  <CTableHeaderCell scope="col">#</CTableHeaderCell>
                  <CTableHeaderCell scope="col"> Names </CTableHeaderCell>
                  <CTableHeaderCell scope="col"> Phone </CTableHeaderCell>
                  <CTableHeaderCell scope="col"> Email </CTableHeaderCell>
                  <CTableHeaderCell scope="col"> Roles </CTableHeaderCell>
                  <CTableHeaderCell scope="col"> Option </CTableHeaderCell>
                </CTableRow>
              </CTableHead>
              <CTableBody>
                {users && users.length !== 0 ? (
                  users.map((user, i) => (
                    <CTableRow key={user._id}>
                      <CTableHeaderCell scope="row">{i + 1}</CTableHeaderCell>
                      <CTableDataCell>
                        {' '}
                        {user.firstName + ' ' + user.lastName}{' '}
                      </CTableDataCell>
                      <CTableDataCell>{user.phone} </CTableDataCell>
                      <CTableDataCell> {user.email} </CTableDataCell>
                      <CTableDataCell> {user.Role.name}</CTableDataCell>
                      <CTableDataCell>
                        <Link
                          to="/booking/user/edit"
                          className={`${
                            role === 'controller' ? 'disabled' : ''
                          } btn btn-sm btn-warning`}
                          onClick={() => {
                            console.log('this is user', user)
                            return dispatch(selectItem(user))
                          }}
                        >
                          {' '}
                          Edit{' '}
                        </Link>
                        <button
                          className={`${
                            role === 'controller' ? 'disabled' : ''
                          } btn btn-sm btn-danger`}
                          onClick={() => {
                            return dispatch(deleteUser(user, users))
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

export default Users
