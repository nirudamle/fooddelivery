const cron = require('node-cron');
const orders = require('../data/orders');

// Function to update statuses
cron.schedule('*/5 * * * *', () => { // Every 5 minutes
    orders.forEach((order) => {
        if (order.status === 'Preparing') {
            order.status = 'Out for Delivery';
            console.log(`Order ${order.id} is now Out for Delivery.`);
        } else if (order.status === 'Out for Delivery') {
            order.status = 'Delivered';
            console.log(`Order ${order.id} has been Delivered.`);
        }
    });

    // Remove orders that are "Delivered" to stop further updates
    const activeOrders = orders.filter(order => order.status !== 'Delivered');
    console.log('Active orders:', activeOrders);
});

