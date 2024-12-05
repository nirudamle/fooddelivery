This is the backend for a Food Delivery System built with Node.js. It provides APIs for managing menu items, placing orders, and tracking order statuses with automated updates.

Features
Menu Management: Add, update, and retrieve menu items with details like name, price, and category.
Order Placement: Create orders with multiple items from the menu.
Order Tracking: Monitor order statuses, which automatically update from Preparing → Out for Delivery → Delivered.
Automated Updates: Uses node-cron to simulate periodic status updates.
Data Validation: Ensures menu items have valid fields, and order requests reference existing items.
Tech Stack
Backend: Node.js with Express.js
Scheduler: node-cron for periodic updates
Database: In-memory storage (for simplicity)
Testing: Postman for API testing

Note:To get the full folder structure of the project download the fooddel zip file and extract it.
