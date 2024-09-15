import { usePage } from '@inertiajs/react';
import { IconBooks, IconBox, IconCategory, IconChartArrowsVertical, IconChartBarPopular, IconChartInfographic, IconCirclePlus, IconClockHour6, IconFileCertificate, IconFileDescription, IconFolder, IconLayout2, IconSchool, IconShoppingCart, IconTable, IconUserBolt, IconUserShield, IconUserSquare, IconUsers, IconUsersPlus } from '@tabler/icons-react';
import hasAnyPermission from './Permission';
import React from 'react'

export default function Menu() {

    // define use page
    const { url } = usePage();

    // define menu navigations
    const menuNavigation = [{
        title: 'Overview',
        details: [
            {
                title: 'Dashboard',
                href: route('dashboard'),
                active: url === '/dashboard' ? true : false, // Update comparison here
                icon: <IconLayout2 size={20} strokeWidth={1.5} />,
                permissions: hasAnyPermission(['dashboard-access']),
            },
        ]
    },
    {
        title: 'Data Management',
        details: [
            {
                title: 'Category',
                href: route('categories.index'),
                active: url === '/dashboard/categories' ? true : false, // Update comparison here
                icon: <IconFolder size={20} strokeWidth={1.5} />,
                permissions: hasAnyPermission(['categories-access']),
            },
            {
                title: 'Product',
                href: route('products.index'),
                active: url === '/dashboard/products' ? true : false, // Update comparison here
                icon: <IconBox size={20} strokeWidth={1.5} />,
                permissions: hasAnyPermission(['products-access']),
            },
            {
                title: 'Customer',
                href: route('customers.index'),
                active: url === '/dashboard/customers' ? true : false, // Update comparison here
                icon: <IconUsersPlus size={20} strokeWidth={1.5} />,
                permissions: hasAnyPermission(['customers-access']),
            }
        ]
    },
    {
        title: 'Transaction',
        details: [
            {
                title: 'Transaction',
                href: route('transactions.index'),
                active: url === '/dashboard/customers' ? true : false, // Update comparison here
                icon: <IconShoppingCart size={20} strokeWidth={1.5} />,
                permissions: hasAnyPermission(['transactions-access']),
            },
        ]
    },
    {
        title: 'User Management',
        details: [
            {
                title: 'Permission',
                href: route('permissions.index'),
                active: url === '/dashboard/permissions' ? true : false, // Update comparison here
                icon: <IconUserBolt size={20} strokeWidth={1.5} />,
                permissions: hasAnyPermission(['permissions-access']),
            },
            {
                title: 'Role Group',
                href: route('roles.index'),
                active: url === '/dashboard/roles' ? true : false, // Update comparison here
                icon: <IconUserShield size={20} strokeWidth={1.5} />,
                permissions: hasAnyPermission(['roles-access']),
            },
            {
                title: 'User',
                icon: <IconUsers size={20} strokeWidth={1.5} />,
                permissions: hasAnyPermission(['users-access']),
                subdetails: [
                    {
                        title: 'User Data',
                        href: route('users.index'),
                        icon: <IconTable size={20} strokeWidth={1.5} />,
                        active: url === '/dashboard/users' ? true : false,
                        permissions: hasAnyPermission(['users-access']),
                    },
                    {
                        title: 'Add User Data',
                        href: route('users.create'),
                        icon: <IconCirclePlus size={20} strokeWidth={1.5} />,
                        active: url === '/dashboard/users/create' ? true : false,
                        permissions: hasAnyPermission(['users-create']),
                    },
                ]
            }
        ]
    }
    ]

    return menuNavigation;
}
