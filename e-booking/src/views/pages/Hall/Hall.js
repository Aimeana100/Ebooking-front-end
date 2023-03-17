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
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'

function Hall() {
  const [halls, setHalls] = useState([])
  useEffect(() => {
    const getHalls = async () => {
      const res = await axios
        .get('http://206.81.29.111:80/api/v1/halls/all')
        .then((res) => {
          console.log(res.data)
          setHalls(res.data.data)
        })
        .catch((err) => {
          console.log('err getting halls')
        })
      console.log('halls async to get halls')
    }

    getHalls()
  }, [])

  return (
    <CRow>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <h2>
              <strong> Available halls </strong>
            </h2>
          </CCardHeader>
          <CCardBody>
            <CTable bordered>
              <CTableHead>
                <CTableRow>
                  <CTableHeaderCell scope="col">#</CTableHeaderCell>
                  <CTableHeaderCell scope="col">Name</CTableHeaderCell>
                  <CTableHeaderCell scope="col"> Action </CTableHeaderCell>
                </CTableRow>
              </CTableHead>
              <CTableBody>
                {halls && halls.length !== 0
                  ? halls.map((hall, i) => {
                      return (
                        <CTableRow key={hall.id}>
                          <CTableHeaderCell scope="row">
                            {i + 1}
                          </CTableHeaderCell>
                          <CTableDataCell>{`${hall.name}`}</CTableDataCell>
                          <CTableDataCell>
                            {' '}
                            <Link
                              to="/booking/halls/info"
                              onClick={() => {
                                console.log('hall view')
                                // return dispatch(selectRoom(hall))
                              }}
                            >
                              view
                            </Link>{' '}
                            <Link
                              to="/booking/hall/edit"
                              onClick={() => {
                                console.log('hall edit')
                                // return dispatch(selectRoom(hall))
                              }}
                            >
                              edit
                            </Link>{' '}
                          </CTableDataCell>
                        </CTableRow>
                      )
                    })
                  : null}
              </CTableBody>
            </CTable>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  )
}

export default Hall
