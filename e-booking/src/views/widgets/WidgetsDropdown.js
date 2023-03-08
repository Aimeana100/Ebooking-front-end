import React from 'react'
import { CRow, CCol, CWidgetStatsF } from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilOptions, cilUser } from '@coreui/icons'

const WidgetsDropdown = () => {
  return (
    <CRow>
      <CCol xs={12} sm={6} lg={3}>
        <CWidgetStatsF
          className="mb-3"
          icon={<CIcon width={24} icon={cilOptions} size="xl" />}
          title="Free Rooms"
          value="199"
          color="primary"
        />
      </CCol>
      <CCol xs={12} sm={6} lg={3}>
        <CWidgetStatsF
          className="mb-3"
          icon={<CIcon width={24} icon={cilUser} size="xl" />}
          title="Customers"
          value="999"
          color="info"
        />
      </CCol>
      <CCol xs={12} sm={6} lg={3}>
        <CWidgetStatsF
          className="mb-3"
          icon={<CIcon width={24} icon={cilOptions} size="xl" />}
          title="Current Booking"
          value="100"
          color="warning"
        />
      </CCol>
      <CCol xs={12} sm={6} lg={3}>
        <CWidgetStatsF
          className="mb-3"
          icon={<CIcon width={24} icon={cilUser} size="xl" />}
          title="System User"
          value="20"
          color="danger"
        />
      </CCol>
    </CRow>
  )
}

export default WidgetsDropdown
