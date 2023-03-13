import { React, useEffect } from 'react';
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
} from '@coreui/react';
import { Link } from 'react-router-dom';
import { deleteUser, getUsers } from 'src/redux/User/userActions';
import { useDispatch, useSelector } from 'react-redux';
import { selectUser } from 'src/redux/User/userActions';
import { getRoles } from 'src/redux/Roles/RolesActions';

const Users = () => {
  let users = useSelector((state) => state.systemUsers.users) || [];
  users = users ? users : [];

  function loadFromLocalStorage() {
    const serializedState = localStorage.getItem('persist:root');
    console.log({ serializedState: JSON.parse(serializedState) });
    if (serializedState === null) return undefined;
    return JSON.parse(serializedState);
  }
  loadFromLocalStorage();

  const dispatch = useDispatch();
  useEffect(() => {
    console.log(users.length);
    if (users.length === 0) {
      dispatch(getUsers());
    }
    //dispatch(getRoles());
  }, []);

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
                      <CTableDataCell> </CTableDataCell>
                      <CTableDataCell> {user.email} </CTableDataCell>
                      <CTableDataCell> {user.role}</CTableDataCell>
                      <CTableDataCell>
                        <div className="d-flex ">
                          <Link
                            to="/booking/user/edit"
                            className="btn btn-sm btn-warning px-1 mx-1"
                            onClick={() => {
                              console.log('this is user', user);
                              return dispatch(selectUser(user));
                            }}
                          >
                            <i class="ri-file-edit-line btn-light " />
                          </Link>
                          <button
                            className="btn btn-sm btn-danger text-bg-light px-1 mx-1"
                            onClick={() => {
                              return dispatch(deleteUser(user, users));
                            }}
                          >
                            <i class="ri-delete-bin-2-fill btn-light " />
                          </button>
                        </div>
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
  );
};

export default Users;
//  <CTableDataCell> {user.Role.name}</CTableDataCell>;
