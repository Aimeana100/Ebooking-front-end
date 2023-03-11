import { React, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getRoles } from 'src/redux/Roles/RolesActions';
import {
  AppContent,
  AppSidebar,
  AppFooter,
  AppHeader,
} from '../components/index';

const DefaultLayout = () => {
  const userRole = useSelector((state) => state.auth.user.role) || '';
  const dispatch = useDispatch();
  useEffect(() => {
    if (userRole && userRole === 'admin') {
      dispatch(getRoles);
    }
  }, []);
  return (
    <div>
      <AppSidebar />
      <div className="wrapper d-flex flex-column min-vh-100 bg-light">
        <AppHeader />
        <div className="body flex-grow-1 px-3">
          <AppContent />
        </div>
        <AppFooter />
      </div>
    </div>
  );
};

export default DefaultLayout;
