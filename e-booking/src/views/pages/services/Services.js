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
// import { getData } from 'src/API';
import axios from 'axios';
const Users = () => {
  useEffect(() => {
    const services = async () => {
      const data = await axios.get(
        'https://bbd5-2c0f-eb68-65f-f700-ca6-f42-f3af-a6e5.ngrok.io/api/v1/users/all'
      );
      console.log(data);
    };
    services();
  }, []);
  return (
    <CRow>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <h2>
              <strong> All Services </strong>
            </h2>
          </CCardHeader>
          <CCardBody>
            <CTable bordered>
              <CTableHead>
                <CTableRow>
                  <CTableHeaderCell scope="col">#</CTableHeaderCell>
                  <CTableHeaderCell scope="col">
                    {' '}
                    Service title{' '}
                  </CTableHeaderCell>
                  <CTableHeaderCell scope="col">
                    {' '}
                    Service Price{' '}
                  </CTableHeaderCell>
                  <CTableHeaderCell scope="col"> Description </CTableHeaderCell>
                  <CTableHeaderCell scope="col"> Option </CTableHeaderCell>
                </CTableRow>
              </CTableHead>
              <CTableBody>
                <CTableRow>
                  <CTableHeaderCell scope="row">1</CTableHeaderCell>
                  <CTableDataCell> Swimming pool </CTableDataCell>
                  <CTableDataCell> 2000 </CTableDataCell>
                  <CTableDataCell>
                    {' '}
                    Swimming pool access for a whole day once{' '}
                  </CTableDataCell>
                  <CTableDataCell>
                    <Link to="" className="btn btn-sm btn-warning">
                      Edit
                    </Link>
                  </CTableDataCell>
                </CTableRow>
              </CTableBody>
            </CTable>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  );
};

export default Users;
