import React from 'react';
import './Dashboard.css';
import { Link } from 'react-router-dom';

function Dashboard() {
    // Sample data for recent orders and sales summary (you can replace this with actual data)
    const recentOrders = [
        { orderNumber: '12345', customer: 'John Doe', totalAmount: 50.0 },
        { orderNumber: '12346', customer: 'Jane Smith', totalAmount: 75.0 },
        // Add more orders as needed
    ];

    const totalSales = recentOrders.reduce((total, order) => total + order.totalAmount, 0);

    return (
        <div className="dashboard-container">
            <h2>Dashboard</h2>
            <Link to="/home">Go to Home</Link>
            {/* Recent Orders Section */}
            <div className="dashboard-section">
                <h3>Recent Orders</h3>
                <ul>
                    {recentOrders.map((order, index) => (
                        <li key={index}>
                            Order #{order.orderNumber} by {order.customer} - ${order.totalAmount}
                        </li>
                    ))}
                </ul>
            </div>

            {/* Sales Summary Section */}
            <div className="dashboard-section">
                <h3>Sales Summary</h3>
                <p>Total Sales: ${totalSales.toFixed(2)}</p>
                {/* You can add more sales-related information here */}
            </div>
        </div>


    );
}

export default Dashboard;