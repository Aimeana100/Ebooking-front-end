// const Step2 = (props) => {
//   const {
//     register,
//     getValues,
//     reset,
//     stockItems,
//     category,
//     packageItems,
//     setPackageItems,
//   } = props

//   const [item, setItem] = useState([])

//   const onAdd = (data) => {
//     data = {
//       ...data,
//       stockItemId: item[0].id,
//       itemName: item[0].name,
//     }
//     setPackageItems([...packageItems, data])
//   }

//   return (
//     <React.Fragment>
//       <CRow>
//         <p className="lead text-center my-2 fw-bolder"> Package contents</p>
//         <CCol md={6}>
//           <CFormLabel htmlFor="quantity"> Quantity </CFormLabel>
//           <CFormInput
//             type="number"
//             name="quantity"
//             id="quantity"
//             placeholder="50  "
//             size="md"
//             required
//             {...register('quantity')}
//           />
//         </CCol>
//         <CCol md={6}>
//           <CFormLabel htmlFor="unit"> Unit </CFormLabel>
//           <CFormSelect
//             name="unit"
//             id="unit"
//             size="md"
//             className="mb-3"
//             aria-label="item quantity unit"
//             {...register('unit', { required: true })}
//           >
//             <option value="Kg"> Kg </option>
//             <option value="l"> ltr </option>
//             <option value="piece"> piece </option>
//           </CFormSelect>
//         </CCol>
//         <CCol md={6}>
//           <div className="d-flex justify-content-between">
//             <CFormLabel htmlFor="name"> Item name </CFormLabel>
//             {stockItems && stockItems.length === 0 ? (
//               <Link to="/stock/item/add" className="d-block">
//                 Add item to list
//               </Link>
//             ) : null}
//           </div>
//           <Typeahead
//             id="basic-typeahead-single"
//             filterBy={['name']}
//             labelKey="name"
//             onChange={setItem}
//             options={stockItems}
//             placeholder="item name ..."
//             selected={item}
//           />
//         </CCol>
//         <CCol xs={12} className="d-flex justify-content-center my-3">
//           <CButton
//             component="input"
//             value="Add item"
//             className="my-2"
//             onClick={() => {
//               const data = getValues()
//               console.log('this is on add data', data)
//               return onAdd(data)
//             }}
//           />
//         </CCol>
//       </CRow>

//       <CRow>
//         <div>
//           {' '}
//           <PurchaseOrder
//             requestItems={packageItems}
//             setRequestItems={setPackageItems}
//           />
//         </div>
//       </CRow>
//     </React.Fragment>
//   )
// }

// const Step3 = (props) => {
//   const { getValues, packageItems, category } = props
//   const data = getValues()
//   let packageDetails
//   console.log('come on', data)
//   if (
//     category &&
//     category.length !== 0 &&
//     Object.keys(data).length !== 0 &&
//     packageItems &&
//     packageItems.length !== 0
//   ) {
//     packageDetails = {
//       name: data.name,
//       price: data.price,
//       items: packageItems,
//       category: category[0].id,
//     }
//   }

//   return (
//     <CCol md={6}>
//       <h4 className="fw-bolder text-center lead">Package details</h4>
//       {packageDetails ? (
//         <div>
//           {packageDetails && Object.keys(packageDetails) ? (
//             <p>Name: {packageDetails.name}</p>
//           ) : null}
//           <p>Price : {packageDetails.price}</p>
//           <p className="fw-bold">Content</p>
//           {packageDetails &&
//           packageDetails.items &&
//           packageDetails.items.length !== 0
//             ? packageDetails.items.map((item, i) => (
//                 <div key={i}>
//                   <p className="fw-bold ps-3">Item {i + 1}</p>
//                   <p>Name: {item.itemName}</p>
//                   <p>
//                     Quantity: {item.quantity} {item.unit}
//                   </p>
//                 </div>
//               ))
//             : null}
//         </div>
//       ) : (
//         <div>No details</div>
//       )}
//     </CCol>
//   )
// }

// in main component
//

/////Alll the remaining code

// import {
//   CButton,
//   CCardBody,
//   CCol,
//   CForm,
//   CFormInput,
//   CFormLabel,
//   CCard,
//   CRow,
//   CCardHeader,
//   CFormSelect,
// } from '@coreui/react'
// import React, { useEffect, useState } from 'react'
// import { Typeahead } from 'react-bootstrap-typeahead'
// import { useForm } from 'react-hook-form'
// import { toast } from 'react-hot-toast'
// import { Link } from 'react-router-dom'
// import instance from 'src/API/AxiosInstance'
// import PurchaseOrder from '../stock/PurchaseOrder'
// import { useDispatch, useSelector } from 'react-redux'
// import {
//   setCurrentStep,
//   setFormData,
// } from 'src/redux/MultiStepForm/formActions'
// import { debounce } from 'lodash'
// const Step1 = (props) => {
//   const { register, setCategory, categories, category } = props
//   console.log('categories', categories)
//   return (
//     <CRow>
//       <CCol md={6}>
//         <CFormLabel htmlFor="price">Package name</CFormLabel>
//         <CFormInput
//           type="text"
//           name="name"
//           id="name"
//           placeholder="...package name"
//           size="md"
//           {...register('name')}
//         />
//       </CCol>

//       <CCol md={6}>
//         <CFormLabel htmlFor="category">Package category</CFormLabel>
//         <Typeahead
//           id="basic-typeahead-single"
//           filterBy={['name']}
//           labelKey="name"
//           onChange={setCategory}
//           options={categories}
//           placeholder="category name..."
//           selected={category}
//         />
//       </CCol>

//       <CCol md={6}>
//         <CFormLabel htmlFor="price"> Price / unit </CFormLabel>
//         <CFormInput
//           type="number"
//           name="price"
//           id="price"
//           placeholder="item price in RWF"
//           size="md"
//           required
//           {...register('price')}
//         />
//       </CCol>
//     </CRow>
//   )
// }

// const MultiStepForm = () => {
//   const { register, getValues, reset, handleSubmit } = useForm()
//   const [category, setCategory] = useState([])
//   const [categories, setCategories] = useState([])
//   const [stockItems, setStockItems] = useState([])
//   const [item, setItem] = useState([])
//   const [packageItems, setPackageItems] = useState([])
//   const [currentFormData, setCurrentFormData] = useState({})
//   const [lastClickTime, setLastClickTime] = useState(0)
//   const onSubmit = async (data) => {
//     await instance
//       .post('/packages/add', data)
//       .then((res) => {
//         toast.success('package created')
//       })
//       .catch((err) => {
//         toast.error(err.message)
//       })
//   }
//   useEffect(() => {
//     dispatch(setCurrentStep(0))
//     const getCategories = async () => {
//       await instance
//         .get('/products/category/all')
//         .then((res) => {
//           if (res.status === 200) {
//             console.log(res.data.data)
//             setCategories(res.data.data)
//           }
//         })
//         .catch((err) => {
//           toast.error(err.message)
//         })
//     }
//     const getStockItems = async () => {
//       await instance
//         .get('/stock/item/all')
//         .then((res) => {
//           setStockItems(res.data.data)
//         })
//         .catch((err) => {
//           toast.error(err.message)
//         })
//     }
//     getCategories()
//     getStockItems()
//   }, [])

//   return (
//     <CCard>
//       <CCardHeader className="text-center lead fw-bold">
//         Create product package
//       </CCardHeader>
//       <CForm onSubmit={handleSubmit(onSubmit)}>
//         <CCardBody>
//           {currentStep === 0 && (
//             <Step1
//               getValues={getValues}
//               register={register}
//               categories={categories}
//               category={category}
//               setCategory={setCategory}
//             />
//           )}
//           {currentStep === 1 && (
//             <Step2
//               register={register}
//               getValues={getValues}
//               reset={reset}
//               categories={categories}
//               category={category}
//               setCategory={setCategory}
//               stockItems={stockItems}
//               item={item}
//               setItem={setItem}
//               packageItems={packageItems}
//               setPackageItems={setPackageItems}
//             />
//           )}
//           {currentStep === 2 && (
//             <Step3
//               getValues={getValues}
//               packageItems={packageItems}
//               category={category}
//             />
//           )}
//           <div className="my-3 d-flex justify-content-end gap-2">
//             {currentStep > 0 && (
//               <CButton
//                 type="button"
//                 className=" btn-secondary"
//                 onClick={handleBackClick}
//               >
//                 Back
//               </CButton>
//             )}
//             {currentStep < steps.length - 1 ? (
//               <CButton
//                 type="submit"
//                 className=""
//                 onClick={() => handleNextClick()}
//               >
//                 Next
//               </CButton>
//             ) : (
//               <CButton
//                 type="submit"
//                 className=""
//                 onClick={() => {
//                   const data = getValues()
//                   console.log('final', {
//                     name: data.name,
//                     price: data.price,
//                     items: packageItems,
//                     category: category[0].id,
//                   })
//                 }}
//               >
//                 Submit
//               </CButton>
//             )}
//           </div>
//         </CCardBody>
//       </CForm>
//     </CCard>
//   )
// }

// export default MultiStepForm

//   const getStockItems = async () => {
//     await instance
//       .get('/stock/item/all')
//       .then((res) => {
//         setStockItems(res.data.data)
//       })
//       .catch((err) => {
//         toast.error(err.message)
//       })
//   }
