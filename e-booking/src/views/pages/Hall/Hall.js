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
import { useDispatch } from 'react-redux'
import { selectItem } from 'src/redux/Select/selectionActions'
import instance from 'src/API/AxiosInstance'
import { toast } from 'react-hot-toast'

function Hall() {
  const dispatch = useDispatch()
  const [halls, setHalls] = useState([])
  useEffect(() => {
    const getHalls = async () => {
      const res = await instance
        .get('/halls/all')
        .then((res) => {
          setHalls(res.data.data)
        })
        .catch((err) => {
          toast.error(err.message)
        })
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
                                return dispatch(selectItem(hall))
                              }}
                            >
                              view
                            </Link>{' '}
                            <Link
                              to="/booking/halls/edit"
                              onClick={() => {
                                console.log('hall edit')

                                return dispatch(selectItem(hall))
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
