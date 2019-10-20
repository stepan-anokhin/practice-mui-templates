import React from "react";
import LaptopMacIcon from '@material-ui/icons/LaptopMac';
import PhoneIphoneIcon from '@material-ui/icons/PhoneIphone';
import TabletMacIcon from '@material-ui/icons/TabletMac';

export const data = theme => ({
    datasets: [
        {
            data: [63, 15, 22],
            backgroundColor: [
                theme.palette.primary.main,
                theme.palette.error.main,
                theme.palette.warning.main
            ],
            borderWidth: 8,
            borderColor: theme.palette.white,
            hoverBorderColor: theme.palette.white
        }
    ],
    labels: ['Desktop', 'Tablet', 'Mobile']
});

export const options = theme => ({
    legend: {
        display: false
    },
    responsive: true,
    maintainAspectRatio: false,
    cutoutPercentage: 80,
    layout: {padding: 0},
    tooltips: {
        enabled: true,
        mode: 'index',
        intersect: false,
        borderWidth: 1,
        borderColor: theme.palette.divider,
        backgroundColor: theme.palette.white,
        titleFontColor: theme.palette.text.primary,
        bodyFontColor: theme.palette.text.secondary,
        footerFontColor: theme.palette.text.secondary
    }
});

export const devices = theme => [
    {
        title: 'Desktop',
        value: '63',
        icon: <LaptopMacIcon/>,
        color: theme.palette.primary.main
    },
    {
        title: 'Tablet',
        value: '15',
        icon: <TabletMacIcon/>,
        color: theme.palette.error.main
    },
    {
        title: 'Mobile',
        value: '23',
        icon: <PhoneIphoneIcon/>,
        color: theme.palette.warning.main
    }
];