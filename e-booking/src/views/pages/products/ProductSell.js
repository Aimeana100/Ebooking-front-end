import React, { useState, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { Typeahead } from 'react-bootstrap-typeahead'

import {
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CCollapse,
  CForm,
  CFormInput,
  CFormLabel,
  CFormSelect,
  CRow,
} from '@coreui/react'
import { useSelector } from 'react-redux'
import instance from 'src/API/AxiosInstance'
import { toast } from 'react-hot-toast'
import OrdersTable from '../Bar/OrdersTable'

function getPrice(elements, PItem, PackId) {
  elements = elements.filter((e) => (e.Packages.length !== 0 ? e : ''))

  let element = elements.filter((element) =>
    element.name === PItem ? element : '',
  )
  let Packages = element[0].Packages

  let pack = Packages.filter((pack) => (pack.id == PackId ? pack : null))

  let packagePrice = pack && pack.length !== 0 ? pack[0].ProductPackage : null
  let price = packagePrice ? packagePrice.price : 0
  return price
}

function ProductSell() {
  const [products, setProducts] = useState([])
  let loggedInUser = useSelector((state) => state.auth.user.Role.name)
  const { register, handleSubmit, watch, reset, getValues } = useForm()
  const [visible, setVisible] = useState(false)
  const [singleSelections, setSingleSelections] = useState([])
  const [orderItems, setOrderItems] = useState([])
  const quantity = watch('quantity') || 1
  const pItem = watch('pItem')
  const inputState = { minLength: 2 }
  let price = 0
  if (singleSelections.length !== 0 && pItem !== '---' && pItem) {
    price = getPrice(products, singleSelections[0].name, pItem)
  }
  // const options = useSelector((state) => state.products) || []
  const onServiceSell = (data) => {
    console.log(data)
  }
  const onProductSell = (data) => {
    console.log(data)
  }

  const onAddToOrder = (data) => {
    if (singleSelections && singleSelections.length !== 0) {
      data.productName = singleSelections[0].name
      data.unitPrice = price
      data.total = Number(price) * Number(quantity)

      let packName = singleSelections[0].Packages.filter(
        (item) => item.id === Number(data.pItem),
      )[0].name

      data['packName'] = packName
      setOrderItems([...orderItems, data])
    }
    reset()
  }

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
    <React.Fragment>
      <CRow>
        <CCol xs={12}>
          <CCard className="mb-4">
            <CCardHeader>
              <div className="d-flex justify-content-between">
                <h2>Client Order</h2>
                <CButton
                  component="input"
                  value="Add items to list "
                  onClick={() => {
                    return setVisible(!visible)
                  }}
                />
              </div>
            </CCardHeader>
            <CCollapse visible={visible}>
              <CCardBody>
                <CForm
                  className="row"
                  name="roomClassAddFrm"
                  encType="multipart/form"
                  onSubmit={handleSubmit(onProductSell)}
                >
                  <CCol md={6}>
                    <CFormLabel htmlFor="title"> Table </CFormLabel>
                    <CFormInput
                      className="mb-1"
                      type="Number"
                      name="title"
                      id="title"
                      size="md"
                      required
                      {...register('table')}
                    />
                  </CCol>
                  <CCol md={6}>
                    <CFormLabel htmlFor="title"> Client name </CFormLabel>
                    <CFormInput
                      className="mb-1"
                      type="text"
                      name="title"
                      id="title"
                      size="md"
                      {...register('client-name')}
                    />
                  </CCol>
                  <CCol md={6}>
                    <CFormLabel htmlFor="bar"> Bar </CFormLabel>
                    <CFormSelect
                      name="bar"
                      id="unit"
                      size="md"
                      className="mb-3"
                      aria-label="bar "
                      required
                      {...register('bar')}
                    >
                      <option value="main-bar"> Main bar </option>
                      <option value="swimming-pool-bar">
                        {' '}
                        Swimming pool bar{' '}
                      </option>
                    </CFormSelect>
                  </CCol>
                  <CCol md={6}>
                    <CFormLabel htmlFor="title"> Product name </CFormLabel>
                    <Typeahead
                      {...inputState}
                      id="basic-typeahead-single"
                      labelKey="name"
                      onChange={setSingleSelections}
                      options={products}
                      placeholder="search product..."
                      selected={singleSelections}
                    />
                  </CCol>
                  <CCol md={6}>
                    <CFormLabel htmlFor="category">
                      {' '}
                      Product package{' '}
                    </CFormLabel>
                    <CFormSelect
                      name="pack"
                      id="pack"
                      size="md"
                      className="mb-3"
                      aria-label="Room class"
                      required
                      {...register('pack')}
                    >
                      <option>---select---</option>
                      {products.length !== 0 && singleSelections.length !== 0
                        ? singleSelections.map((pack) =>
                            pack.Packages && pack.Packages.length !== 0
                              ? pack.Packages.map((p) => (
                                  <option
                                    value={p.id}
                                    key={p.id}
                                    {...register('pItem')}
                                  >
                                    {p.name}
                                  </option>
                                ))
                              : null,
                          )
                        : null}
                    </CFormSelect>
                  </CCol>
                  <CCol md={6}>
                    <CFormLabel htmlFor="title"> quantity </CFormLabel>
                    <CFormInput
                      className="mb-1"
                      type="Number"
                      name="quantity"
                      id="title"
                      size="md"
                      required
                      {...register('quantity')}
                    />
                  </CCol>
                  <CCol md={6}>
                    <CFormLabel className="d-flex align-content-end flex-col">
                      Total :{' '}
                      <strong className="px-2">
                        {Number(quantity) * Number(price)}
                      </strong>
                    </CFormLabel>
                  </CCol>

                  <CCol
                    xs={12}
                    className={`${
                      loggedInUser === 'controller' ? 'disabled' : ''
                    } text-center my-3`}
                  >
                    <CButton
                      component="input"
                      disabled={
                        singleSelections && singleSelections.length !== 0
                          ? false
                          : true
                      }
                      onClick={() => {
                        const data = getValues()
                        return onAddToOrder(data)
                      }}
                      value="Add item to order"
                    />
                  </CCol>
                </CForm>
              </CCardBody>
            </CCollapse>
          </CCard>
        </CCol>

        <CCol xs={12}>
          <CCard className="mb-4">
            <CCardHeader>
              <h2 className="text-center">
                <strong> Checkout</strong>
              </h2>
            </CCardHeader>
            <CCardBody>
              <OrdersTable orderItems={orderItems} />
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
    </React.Fragment>
  )
}

export default ProductSell
// <CFormInput
//                     className="mb-1"
//                     type="text"
//                     name="title"
//                     id="title"
//                     size="md"
//                     required
//                     {...register('name')}
//                   />

// {
//   products.length !== 0 && singleSelections.length !== 0
//     ? singleSelections.map((pack) =>
//         pack.Packages && pack.Packages.length !== 0
//           ? pack.packages.map((p) => (
//               <option value={p.id} key={p.id} {...register('pItem')}>
//                 {p.name}
//               </option>
//             ))
//           : null,
//       )
//     : null
// }

//  const price =
//    products && products.length !== 0 && singleSelections.length !== 0
//      ? products.filter((product) =>
//          product.id == singleSelections[0].id
//            ? product.Packages.filter((pack) =>
//                pack.id == pItem ? pack.ProductPackage.price : null,
//              )
//            : null,
//        )
//      : 0
