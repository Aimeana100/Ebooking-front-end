import { useSelector } from 'react-redux'

const { CCol, CRow } = require('@coreui/react')

const Step3 = (props) => {
  const formData = useSelector((state) => state.multiStepForm.formData)
  const { getValues, packageItems, productPackages } = props
  const data = getValues()
  let packageDetails
  console.log('come on', { data: data, productPackages })
  if (
    Object.keys(data).length !== 0 &&
    productPackages &&
    productPackages.length !== 0
  ) {
    packageDetails = {
      name: data.name,
      category: data.category,
      packages: productPackages,
    }
    console.log(packageDetails)
  }
  console.log(formData)

  return (
    <CCol>
      <h4 className="fw-bolder text-center lead">Package details</h4>
      {packageDetails ? (
        <CRow>
          {packageDetails && Object.keys(packageDetails) ? (
            <p>Name: {packageDetails.name}</p>
          ) : null}
          <p>Price : {packageDetails.price}</p>
          <p className="fw-bold">Content</p>

          {packageDetails &&
          packageDetails.items &&
          packageDetails.items.length !== 0
            ? packageDetails.items.map((item, i) => (
                <CCol key={i} className="col">
                  <p className="fw-bold ps-3">Item {i + 1}</p>
                  <p>Name: {item.itemName}</p>
                  <p>
                    Quantity: {item.quantity} {item.unit}
                  </p>
                </CCol>
              ))
            : null}
        </CRow>
      ) : (
        <div>No details</div>
      )}
    </CCol>
  )
}

export default Step3
