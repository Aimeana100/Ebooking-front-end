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
import { useSelector, useDispatch } from 'react-redux'
import { selectProduct } from 'src/redux/Product/productActions'
import { instance, getTokenPromise } from 'src/API/AxiosInstance'
import { toast } from 'react-hot-toast'

const Products = () => {
  const dispatch = useDispatch()
  const [products, setProducts] = useState([])
  let loggedInUser = useSelector((state) => state.auth.user.Role.name)
  useEffect(() => {
    const getAllProducts = async () => {
      await instance
        .get('/products/all')
        .then((res) => {
          if (res.status === 200) {
            setProducts(res.data.data)
          }
        })
        .catch((err) => {
          toast.error(err.message)
        })
    }
    getAllProducts()
  }, [])

  return (
    <CRow>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <h2>
              <strong> All Products </strong>
            </h2>
          </CCardHeader>
          <CCardBody>
            <CTable bordered>
              <CTableHead>
                <CTableRow>
                  <CTableHeaderCell scope="col">#</CTableHeaderCell>
                  <CTableHeaderCell scope="col"> Name </CTableHeaderCell>
                  <CTableHeaderCell scope="col">
                    {' '}
                    Price per item{' '}
                  </CTableHeaderCell>
                  <CTableHeaderCell scope="col"> Packages </CTableHeaderCell>
                  <CTableHeaderCell scope="col"> Description </CTableHeaderCell>
                  <CTableHeaderCell scope="col"> Option </CTableHeaderCell>
                </CTableRow>
              </CTableHead>
              <CTableBody>
                {products.length !== 0
                  ? products.map((product, i) => (
                      <CTableRow>
                        <CTableHeaderCell scope="row">{i + 1}</CTableHeaderCell>
                        <CTableDataCell> {product.name} </CTableDataCell>
                        <CTableDataCell>
                          {product.Packages.length !== 0
                            ? product.Packages.map((e) => (
                                <p className="d-block">
                                  {e.ProductPackage.price}
                                </p>
                              ))
                            : null}
                        </CTableDataCell>
                        <CTableDataCell>
                          {' '}
                          {product.Packages.length !== 0
                            ? product.Packages.map((pack) => (
                                <div>
                                  <p>{pack.name}</p>
                                </div>
                              ))
                            : 'not set'}{' '}
                        </CTableDataCell>
                        <CTableDataCell>
                          {' '}
                          {product.description
                            ? product.description
                            : 'not set'}{' '}
                        </CTableDataCell>
                        <CTableDataCell>
                          <Link
                            to="/booking/products/edit"
                            className={`${
                              loggedInUser === 'controller' ? 'disabled' : ''
                            } btn btn-sm btn-warning`}
                            onClick={() => {
                              return dispatch(selectProduct(product))
                            }}
                          >
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

export default Products
