import React, { useEffect, useState } from 'react'
import {
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CFormInput,
  CFormLabel,
  CRow,
  CTable,
  CTableBody,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
} from '@coreui/react'

import { useSelector } from 'react-redux'
import { instance, getTokenPromise } from 'src/API/AxiosInstance'
import { toast } from 'react-hot-toast'
import { useForm } from 'react-hook-form'
import CustomersTable from './CustomersTable'
function Customers() {
  const { watch, register } = useForm()
  const query = watch('query') || ''
  const role = useSelector((state) => state.auth.role)
  let [customers, setCustomers] = useState([])
  useEffect(() => {
    const getCustomers = async () => {
      await instance
        .get('/customers/all')
        .then((res) => {
          setCustomers(res.data.data)
        })
        .catch((err) => {
          toast.error(err.message)
        })
    }
    getCustomers()
  }, [])

  if (query && query !== '') {
    customers = customers.filter((customer) =>
      customer.names.toLowerCase().includes(query.toLowerCase()),
    )
  }

  return (
    <CRow>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <h2>
              <strong> Registered customers </strong>
            </h2>
            <form className="col d-flex flex-wrap gap-2">
              <div className="col-3">
                <CFormLabel className="text-center">Search</CFormLabel>
                <CFormInput
                  className="mb-1"
                  type="text"
                  name="customerName"
                  id="customerName"
                  size="md"
                  placeholder="by customer ..."
                  {...register('query')}
                />
              </div>
            </form>
          </CCardHeader>
          <CCardBody>
            <CTable bordered>
              <CTableHead>
                <CTableRow>
                  <CTableHeaderCell scope="col">#</CTableHeaderCell>
                  <CTableHeaderCell scope="col">Name</CTableHeaderCell>
                  <CTableHeaderCell scope="col"> ID</CTableHeaderCell>
                  {role && role === 'admin' ? (
                    <CTableHeaderCell scope="col"> action</CTableHeaderCell>
                  ) : null}
                </CTableRow>
              </CTableHead>
              <CTableBody>
                <CustomersTable customers={customers} />
              </CTableBody>
            </CTable>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  )
}

export default Customers
