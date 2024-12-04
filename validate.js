const predefinedCategories = ['Appetizer', 'Main Course', 'Dessert', 'Beverage'];

function validateMenuItem(item) {
    if (!item.name || !item.price || !item.category) return 'All fields are required!';
    if (item.price <= 0) return 'Price must be positive!';
    if (!predefinedCategories.includes(item.category)) return `Category must be one of ${predefinedCategories.join(', ')}`;
    return null;
}

function validateOrderRequest(items, menu) {
    if (!Array.isArray(items) || items.length === 0) return 'Items must be a non-empty array!';
    for (let id of items) {
        if (!menu.find((m) => m.id === id)) return `Item with ID ${id} not found in menu!`;
    }
    return null;
}

module.exports = { validateMenuItem, validateOrderRequest };
