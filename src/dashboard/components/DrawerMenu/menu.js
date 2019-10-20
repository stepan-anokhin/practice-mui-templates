import DashboardIcon from '@material-ui/icons/Dashboard';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import PeopleIcon from '@material-ui/icons/People';
import BarChartIcon from '@material-ui/icons/BarChart';
import LayersIcon from '@material-ui/icons/Layers';
import AssignmentIcon from '@material-ui/icons/Assignment';

export const primaryItems = [
    {
        icon: DashboardIcon,
        text: "Dashboard",
        link: "/dashboard/mini",
    },
    {
        icon: ShoppingCartIcon,
        text: "Orders",
        link: "/dashboard/mini",
    },
    {
        icon: PeopleIcon,
        text: "Customers",
        link: "/dashboard/mini",
    },
    {
        icon: BarChartIcon,
        text: "Reports",
        link: "/dashboard/mini",
    },
    {
        icon: LayersIcon,
        text: "Integrations",
        link: "/dashboard/mini",
    },
];

export const secondaryItems = [
    {
        icon: AssignmentIcon,
        text: "Current month",
        link: "/dashboard/mini",
    },
    {
        icon: AssignmentIcon,
        text: "Last quarter",
        link: "/dashboard/mini",
    },
    {
        icon: AssignmentIcon,
        text: "Year-end sale",
        link: "/dashboard/mini",
    },
];

const categories = [
    {
        items: primaryItems,
    },
    {
        title: "Saved reports",
        items: secondaryItems,
    },
];

export default categories;