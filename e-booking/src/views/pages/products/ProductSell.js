import React, { useState, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { Typeahead } from 'react-bootstrap-typeahead'

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
} from '@coreui/react'
import { useSelector } from 'react-redux'
import axios from 'axios'

function getPrice(elements, PItem, PackId) {
  elements = elements.filter((e) => (e.Packages.length !== 0 ? e : ''))

  let element = elements.filter((element) =>
    element.name === PItem ? element : '',
  )
  let Packages = element[0].Packages
  console.log(Packages)
  let pack = Packages.filter((pack) => (pack.id == PackId ? pack : null))
  console.log('this is pack', pack)
  let packagePrice = pack && pack.length !== 0 ? pack[0].ProductPackage : null
  let price = packagePrice ? packagePrice.price : 0
  return price
}

function ProductSell() {
  const [products, setProducts] = useState([])
  let loggedInUser = useSelector((state) => state.auth.user.Role.name)

  const { register, handleSubmit, watch, reset } = useForm()
  const [singleSelections, setSingleSelections] = useState([])
  const [productPrice, setProductPrice] = useState([])
  const productPackages = [{}]
  const quantity = watch('quantity')
  const pItem = watch('pItem')
  const inputState = { minLength: 2 }
  let price = 0
  if (singleSelections.length !== 0 && pItem !== '---' && pItem) {
    console.log(singleSelections[0].Packages[0].ProductPackage.price)
    price = getPrice(products, singleSelections[0].name, pItem)
    console.log('this product Price', price)
  }
  // const options = useSelector((state) => state.products) || []
  const noProducts = [{ name: 'product1' }, { name: 'product2' }]
  const onServiceSell = (data) => {
    console.log(data)
    //roomClass.push(formData);
  }
  const onProductSell = (data) => {
    console.log(data)
  }

  useEffect(() => {
    const getAllProducts = async () => {
      const res = await axios
        .get('http://206.81.29.111:80/api/v1/products/all')
        .catch((err) => {
          console.log('error getting products')
        })
      if (res.status === 200) {
        setProducts(res.data.data)
      }
    }
    getAllProducts()
  }, [])
  return (
    <>
      <CRow>
        <CCol xs={12}>
          <CCard className="mb-4">
            <CCardHeader>
              <h2 className="text-center">
                <strong> Checkout product </strong>
              </h2>
            </CCardHeader>
            <CCardBody>
              <CForm
                className="row"
                name="roomClassAddFrm"
                encType="multipart/form"
                onSubmit={handleSubmit(onProductSell)}
              >
                <CCol md={6}>
                  <CFormLabel htmlFor="title"> Client name </CFormLabel>
                  <CFormInput
                    className="mb-1"
                    type="text"
                    name="title"
                    id="title"
                    size="md"
                    required
                    {...register('client-name')}
                  />
                </CCol>
                <CCol md={6}>
                  <CFormLabel htmlFor="title"> Client phone </CFormLabel>
                  <CFormInput
                    className="mb-1"
                    type="text"
                    name="title"
                    id="title"
                    size="md"
                    required
                    {...register('client-phone')}
                  />
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
                  <CFormLabel htmlFor="category"> Product package </CFormLabel>
                  <CFormSelect
                    name="pack"
                    id="pack"
                    size="md"
                    className="mb-3"
                    aria-label="Room class"
                    {...register('pack', { required: true })}
                  >
                    <option>-- Select -- </option>

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
                  <CButton component="input" type="submit" value="Check out" />
                </CCol>
              </CForm>
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
    </>
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
