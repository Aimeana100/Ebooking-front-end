import React, { useState, useEffect } from 'react'

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
  CFormCheck,
} from '@coreui/react'
import { useForm } from 'react-hook-form'
import { useSelector, useDispatch } from 'react-redux'
import axios, { all } from 'axios'
import { createProduct } from 'src/redux/Product/productActions'

const ProductAdd = () => {
  const [success, setSuccess] = useState(false)
  const { register, handleSubmit, watch, reset } = useForm()
  const [allDataPackages, setAllDataPackages] = useState([])
  const [allDataCategories, setAllDataCategories] = useState([])
  const [allProducts, setAllProducts] = useState([])
  const dispatch = useDispatch()
  const [categories, setCategories] = useState([
    { name: 'food', id: 5001209 },
    { name: 'drinks', id: 69560 },
  ])
  const [drinkPackages, setDrinkPackages] = useState({
    id: '69560',
    packs: [
      { name: 'bottle', id: 500129 },
      { name: 'shot', id: 6560 },
      { name: 'glass', id: 6950 },
    ],
  })
  const [foodPackages, setFoodPackages] = useState({
    id: '5001209',
    packs: [
      { name: 'plate', id: 50129 },
      { name: 'large-plate', id: 660 },
      { name: 'piece', id: 650 },
    ],
  })
  const role = useSelector((state) => state.auth.role)
  const packages = [drinkPackages, foodPackages]
  const category = watch('category', '---')
  const packs = watch('packs', '---')
  console.log('packs', packs)

  const onSubmit = (data) => {
    console.log(data)
    dispatch(createProduct(data, allProducts))
    reset()
  }
  const onManagerSubmit = (data) => {
    console.log(data, { role })
    reset()
  }

  //   category !== '---' && category !== '-- Select -- '
  //     ? packages.map((packageSet) =>
  //         packageSet.id === category && packs && packs !== '---'
  //           ? packageSet.packs.map((pack) =>
  //               packs.map((item) => {
  //                 if (pack.id == item) {
  //                   console.log('now now ' + pack.name);
  //                 }
  //                 return pack.id == item ? item : null;
  //               })
  //             )
  //           : null
  //       )
  //     : null;
  console.log('this is trhe role', role)
  console.log(category)
  console.log(allDataPackages)
  console.log(allDataCategories)

  useEffect(() => {
    const getAllPacks = async () => {
      const res = await axios
        .get('http://206.81.29.111:80/api/v1/packages/all')
        .catch((err) => {
          console.log('error getting packages')
        })
      if (res.status === 200) {
        setAllDataPackages(res.data.data)
      }
    }
    const getAllCategories = async () => {
      const res = await axios
        .get('http://206.81.29.111:80/api/v1/products/category/all')
        .catch((err) => {
          console.log('error getting categories')
        })
      if (res.status === 200) {
        setAllDataCategories(res.data.data)
      }
    }
    const getAllProducts = async () => {
      const res = await axios
        .get('http://206.81.29.111:80/api/v1/products/all')
        .catch((err) => {
          console.log('error getting all products')
        })
      if (res.status === 200) {
        setAllProducts(res.data.data)
        setSuccess(true)
      }
    }
    getAllCategories()
    getAllPacks()
    getAllProducts()
  }, [])

  if (role === 'admin') {
    return (
      <>
        <CRow>
          <CCol xs={12}>
            <CCard className="mb-4">
              <CCardHeader>
                <h2 className="text-center">
                  <strong> Add Product </strong>
                </h2>
              </CCardHeader>
              <CCardBody>
                <CForm
                  className="row"
                  name="roomClassAddFrm"
                  encType="multipart/form"
                  onSubmit={handleSubmit(onSubmit)}
                >
                  <CCol md={6}>
                    <CFormLabel htmlFor="title"> Product title </CFormLabel>
                    <CFormInput
                      className="mb-1"
                      type="text"
                      name="title"
                      id="title"
                      size="md"
                      required
                      {...register('name')}
                    />
                  </CCol>
                  <CCol md={6}>
                    <CFormLabel htmlFor="category">
                      {' '}
                      Product category{' '}
                    </CFormLabel>
                    <CFormSelect
                      name="category"
                      id="category"
                      size="md"
                      className="mb-3"
                      aria-label="Room class"
                      {...register('category', { required: true })}
                    >
                      <option>-- Select -- </option>
                      {allDataCategories && allDataCategories.length !== 0
                        ? allDataCategories.map((category) => (
                            <option value={category.id} key={category.id}>
                              {category.name}
                            </option>
                          ))
                        : null}
                    </CFormSelect>
                  </CCol>
                  <CCol xs={12} className="text-center my-3">
                    <CButton
                      component="input"
                      type="submit"
                      value=" Save product details"
                    />
                  </CCol>

                  <CCol>
                    {category && category !== '-- Select -- '
                      ? allDataPackages.map((packageSet) =>
                          packageSet.categoryId == category ? (
                            <CCol md={6}>
                              <CFormLabel htmlFor="package">
                                Product packages{' '}
                              </CFormLabel>
                              <CFormCheck
                                name={packageSet.name}
                                id="check"
                                size="md"
                                label={packageSet.name}
                                value={packageSet.id}
                                className="mb-3"
                                aria-label={packageSet.name}
                                {...register('packs', { required: true })}
                              />
                            </CCol>
                          ) : null,
                        )
                      : null}

                    {category && category !== '---'
                      ? allDataPackages.map((packageSet) =>
                          packageSet.categoryId == category &&
                          packs &&
                          packs !== '---'
                            ? packs.map((item) =>
                                packageSet.id == item ? (
                                  <div>
                                    <CCol md={6}>
                                      <CFormLabel
                                        htmlFor="price1"
                                        className="col-form-label"
                                      >
                                        Set price for
                                        <span className="strong">
                                          {' '}
                                          {packageSet.name}
                                        </span>{' '}
                                        package
                                      </CFormLabel>
                                    </CCol>
                                    <CCol md="6">
                                      <CFormInput
                                        type="Number"
                                        min="1"
                                        id="price1"
                                        aria-describedby={packageSet.name}
                                        {...register(
                                          `package_${packageSet.id}`,
                                          {
                                            required: true,
                                          },
                                        )}
                                      />
                                    </CCol>
                                  </div>
                                ) : null,
                              )
                            : null,
                        )
                      : null}

                    {packs && packs !== '---' ? (
                      <CCol xs={12} className="text-center my-3">
                        <CButton
                          component="input"
                          type="submit"
                          value=" Save product"
                        />
                      </CCol>
                    ) : null}
                  </CCol>
                </CForm>
              </CCardBody>
            </CCard>
          </CCol>
        </CRow>
      </>
    )
  } else {
    return (
      <>
        <CRow>
          <CCol xs={12}>
            <CCard className="mb-4">
              <CCardHeader>
                <h2 className="text-center">
                  <strong> Add Product </strong>
                </h2>
              </CCardHeader>
              <CCardBody>
                <CForm
                  className="row"
                  name="roomClassAddFrm"
                  encType="multipart/form"
                  onSubmit={handleSubmit(onManagerSubmit)}
                >
                  <CCol md={6}>
                    <CFormLabel htmlFor="title"> Product title </CFormLabel>
                    <CFormInput
                      className="mb-1"
                      type="text"
                      name="title"
                      id="title"
                      size="md"
                      required
                      {...register('name')}
                    />
                  </CCol>
                  <CCol md={6}>
                    <CFormLabel htmlFor="category">
                      {' '}
                      Product category{' '}
                    </CFormLabel>
                    <CFormSelect
                      name="category"
                      id="category"
                      size="md"
                      className="mb-3"
                      aria-label="Room class"
                      {...register('category', { required: true })}
                    >
                      <option>-- Select -- </option>
                      {allDataCategories && allDataCategories.length !== 0
                        ? allDataCategories.map((category) => (
                            <option value={category.id} key={category.id}>
                              {category.name}
                            </option>
                          ))
                        : null}
                    </CFormSelect>
                  </CCol>
                  <CCol xs={12} className="text-center my-3">
                    <CButton
                      component="input"
                      type="submit"
                      value=" Save product details"
                    />
                  </CCol>
                </CForm>
              </CCardBody>
            </CCard>
          </CCol>
        </CRow>
      </>
    )
  }
}

export default ProductAdd

//product description keep for later

//  <div className="mb-3">
//                   <CFormLabel htmlFor="description"> Description </CFormLabel>
//                   <CFormTextarea
//                     name="description"
//                     id="description"
//                     rows="3"
//
//                   ></CFormTextarea>
//                 </div>

//  {formData && formData.category
//     ? formData.category === 'food'
//       ? foodPackages.map((itemPackage) => (

//         ))
//       : drinkPackages.map((itemPackage) => (
//           <CCol md={6} key={itemPackage.id}>
//             <CFormLabel htmlFor="package">
//               Product packages{' '}
//             </CFormLabel>

//             <CFormCheck
//               name={itemPackage.name}
//               id="check"
//               size="md"
//               label={itemPackage.name}
//               value={itemPackage.name}
//               className="mb-3"
//               aria-label={itemPackage.name}
//
//             />
//           </CCol>
//         ))
//     : null}
//   <CCol md={6}>
//     <CFormLabel htmlFor="package"> Prices </CFormLabel>

//</CCol>
//   <CCol xs={12} className="text-center my-3">
//     <CButton
//       component="input"
//       type="submit"
//       className="btn-danger"
//       value=" Save product "
//     />
//   </CCol>

// {packs && packs.length !== 0
//                   ? packs.filter((pack) =>

//                   )
//                   : null}
