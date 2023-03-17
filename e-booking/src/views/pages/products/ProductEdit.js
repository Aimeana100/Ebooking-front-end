import React, { useEffect } from 'react'
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
import { useForm } from 'react-hook-form'
import { useSelector } from 'react-redux'

function ProductEdit() {
  const { register, handleSubmit, watch, reset } = useForm()
  const [allDataCategories, setAllDataCategories] = useState([])
  const role = useSelector((state) => state.auth.user.role)
  const selectedProduct =
    useSelector((state) => state.products.selectedProduct) || {}
  const onSubmit = (data) => {
    console.log(data)
    //roomClass.push(formData);
  }
  const onManagerSubmit = (data) => {
    console.log(data, { role })
  }
  useEffect(() => {
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
    getAllCategories()
  }, [])
  return (
    <>
      <CRow>
        <CCol xs={12}>
          <CCard className="mb-4">
            <CCardHeader>
              <h2 className="text-center">
                <strong> Edit Product </strong>
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
                    value={selectedProduct.name}
                    size="md"
                    required
                    {...register('name')}
                  />
                </CCol>
                <CCol md={6}>
                  <CFormLabel htmlFor="category"> Product category </CFormLabel>
                  <CFormSelect
                    name="category"
                    id="category"
                    size="md"
                    className="mb-3"
                    aria-label="Room class"
                    value={
                      allDataCategories.filter(
                        (cat) => cat.id == selectedProduct.categoryId,
                      )[0]
                    }
                    {...register('category')}
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
                    value=" Update product"
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

export default ProductEdit

//  <CCol>
//                   {category && category !== '-- Select -- '
//                     ? packages.map((packageSet) =>
//                         packageSet.id === category ? (
//                           <CCol md={6}>
//                             <CFormLabel htmlFor="package">
//                               Product packages{' '}
//                             </CFormLabel>
//                             {packageSet.packs.map((item) => (
//                               <CFormCheck
//                                 name={item.name}
//                                 id="check"
//                                 size="md"
//                                 label={item.name}
//                                 value={item.id}
//                                 className="mb-3"
//                                 aria-label={item.name}
//                                 {...register('packs', { required: true })}
//                               />
//                             ))}
//                           </CCol>
//                         ) : null,
//                       )
//                     : null}

//  {
//    category && category !== '---'
//      ? packages.map((packageSet) =>
//          packageSet.id === category && packs && packs !== '---'
//            ? packageSet.packs.map((pack) =>
//                packs.map((item) =>
//                  pack.id == item ? (
//                    <div>
//                      <CCol md={6}>
//                        <CFormLabel htmlFor="price1" className="col-form-label">
//                          Set price for
//                          <span className="strong"> {pack.name}</span> package
//                        </CFormLabel>
//                      </CCol>
//                      <CCol md="6">
//                        <CFormInput
//                          type="Number"
//                          min="1"
//                          id="price1"
//                          aria-describedby={pack.name}
//                          {...register(`package_${pack.id}`, {
//                            required: true,
//                          })}
//                        />
//                      </CCol>
//                    </div>
//                  ) : null,
//                ),
//              )
//            : null,
//        )
//      : null
//  }
