import React, { useEffect, useState } from 'react'
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
// import { getData } from 'src/API';
import axios from 'axios'
const Services = () => {
  const [services, setServices] = useState([])
  useEffect(() => {
    const services = async () => {
      const data = await axios
        .get('http://206.81.29.111:80/api/v1/services/all')
        .then((res) => {
          setServices(res.data.data)
        })
        .catch((err) => {
          console.log('error getting services')
        })
    }

    services()
  }, [])
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
                {services && services.length !== 0
                  ? services.map((service, i) => (
                      <CTableRow>
                        <CTableHeaderCell scope="row">{i + 1}</CTableHeaderCell>
                        <CTableDataCell> {service.name} </CTableDataCell>
                        <CTableDataCell> {service.price} </CTableDataCell>
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
                    ))
                  : null}
              </CTableBody>
            </CTable>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  )
}

export default Services
