import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';

import { CBadge } from '@coreui/react';
import { useSelector } from 'react-redux';

export const AppSidebarNav = ({ items }) => {
  let noAddPrivilage = ['manager', 'cashier', 'receiptionist', 'waiter'];
  let isAuth = useSelector((state) => state.auth.isAuth);
  let role = useSelector((state) => state.auth.user.role) || '';
  let user = useSelector((state) => {
    if (isAuth) {
      return state.auth.user;
    } else {
      return {};
    }
  });

  let isUser = user ? user : false;
  const userRole = isUser ? role : '';
  console.log('THIS IS THE USER ROLE', user);
  let tabsNotVisible = {
    waiter: [
      'Stock',
      'User',
      'Reservations',
      'Room',
      'Room class',
      'Reports',
      'Customers',
    ],
    receiptionist: ['Stock', 'User', 'Room class', 'Reports', 'Customers'],
    cashier: ['User'],
    manager: ['User'],
    admin: [],
  };

  let itemsNow = items.filter((item) => {
    if (userRole) {
      return !tabsNotVisible[userRole].includes(item) ? item : '';
    } else {
      return !tabsNotVisible['waiter'];
    }
  });
  //console.log('the alternative', itemsNow);
  items = items.filter((item) => {
    switch (userRole) {
      case 'waiter':
        return ![
          'Stock',
          'User',
          'Reservations',
          'Room',
          'Room class',
          'Reports',
          'Customers',
        ].includes(item.name)
          ? item
          : '';
      case 'receiptionist':
        return ![
          'Stock',
          'User',
          'Room class',
          'Reports',
          'Customers',
        ].includes(item.name)
          ? item
          : '';
      case 'cashier':
        return !['User'].includes(item.name) ? item : '';
      case 'manager':
        return !['User'].includes(item.name) ? item : '';
      case 'admin':
        return item;
      default:
        return ![
          'Stock',
          'User',
          'Reservations',
          'Room',
          'Room class',
          'Reports',
          'Customers',
        ].includes(item.name)
          ? item
          : '';
    }
  });

  if (noAddPrivilage.includes(userRole) && isAuth) {
    items = items.map((item) => {
      let subNavs = item.items ? item.items : [];

      item.items =
        subNavs.length !== 0
          ? subNavs.filter((item) => !item.name.includes('Add'))
          : null;
      return item;
    });
    console.log('inside if', items);
  }

  const location = useLocation();
  const navLink = (name, icon, badge) => {
    return (
      <>
        {icon && icon}
        {name && name}
        {badge && (
          <CBadge color={badge.color} className="ms-auto">
            {badge.text}
          </CBadge>
        )}
      </>
    );
  };

  const navItem = (item, index) => {
    const { component, name, badge, icon, ...rest } = item;
    const Component = component;
    return (
      <Component
        {...(rest.to &&
          !rest.items && {
            component: NavLink,
          })}
        key={index}
        {...rest}
      >
        {navLink(name, icon, badge)}
      </Component>
    );
  };
  const navGroup = (item, index) => {
    const { component, name, icon, to, ...rest } = item;
    const Component = component;
    return (
      <Component
        idx={String(index)}
        key={index}
        toggler={navLink(name, icon)}
        visible={location.pathname.startsWith(to)}
        {...rest}
      >
        {item.items?.map((item, index) =>
          item.items ? navGroup(item, index) : navItem(item, index)
        )}
      </Component>
    );
  };

  return (
    <React.Fragment>
      {items &&
        items.map((item, index) =>
          item.items ? navGroup(item, index) : navItem(item, index)
        )}
    </React.Fragment>
  );
};

AppSidebarNav.propTypes = {
  items: PropTypes.arrayOf(PropTypes.any).isRequired,
};
