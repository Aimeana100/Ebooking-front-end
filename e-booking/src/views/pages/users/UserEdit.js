//jshint esversion:9
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
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
} from '@coreui/react';
import { registerUser } from 'src/redux/Auth/authActions';
import { getRoles } from 'src/redux/Roles/RolesActions';
import { updateUser } from 'src/redux/User/userActions';

const UserEdit = () => {
  let users = useSelector((state) => state.systemUsers.users);
  const selectedUser =
    useSelector((state) => state.systemUsers.selectedUser) || {};
  const roles = useSelector((state) => state.roles.userRoles) || [];
  let [formData, setformData] = useState({ ...selectedUser });

  const [roomClass, setroomClass] = useState([]);
  const dispatch = useDispatch();
  const handleChange = (e) => {
    setformData({ ...formData, [e.target.name]: e.target.value });
  };

  const hundleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);
    roomClass.push(formData);
    let myItem = JSON.parse(localStorage.getItem('persist:root'));
    console.log(myItem);
    //updating users array
    users = users.map((user) =>
      user._id === selectedUser._id ? (user = { ...user, ...formData }) : user
    );
    let role = formData.role;
    console.log('role');
    dispatch(updateUser(formData, users));
    // const addUser = async () => {
    //   dispatch(registerUser(formData));
    // };
    // addUser();
  };

  useEffect(() => {
    dispatch(getRoles());
  }, []);

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
                onSubmit={(e) => hundleSubmit(e)}
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
                    value={formData.firstName}
                    required
                    onChange={handleChange}
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
                    value={formData.lastName}
                    required
                    onChange={handleChange}
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
                    onChange={handleChange}
                  />
                </CCol>
                <CCol md={6}>
                  <CFormLabel htmlFor="email">
                    {' '}
                    email <span className="text-warning">
                      {' '}
                      use for login{' '}
                    </span>{' '}
                  </CFormLabel>
                  <CFormInput
                    className="mb-1"
                    type="text"
                    name="email"
                    id="email"
                    size="md"
                    value={formData.email}
                    required
                    onChange={handleChange}
                  />
                </CCol>

                <CCol md={6}>
                  <CFormLabel htmlFor="role"> Role </CFormLabel>
                  <CFormSelect
                    name="role"
                    id="role"
                    size="md"
                    className="mb-3"
                    aria-label="Room class"
                    value={formData.role}
                    onChange={handleChange}
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
                <CCol md={6}>
                  <CFormLabel htmlFor="password"> Password </CFormLabel>
                  <CFormInput
                    className="mb-1"
                    type="text"
                    name="password"
                    id="password"
                    size="md"
                    required
                    onChange={handleChange}
                  />
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
  );
};

export default UserEdit;
