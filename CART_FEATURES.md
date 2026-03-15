# Cart System & Features Implementation

## Overview
Implemented a complete shopping cart system with localStorage persistence, mobile navigation menu, shop icon, and updated footer with real business information.

## Features Implemented

### 1. **Shopping Cart System** (`cart.html`)
- Full cart display with product images, names, prices
- Quantity adjustment (+/- buttons and input)
- Remove items from cart
- Automatic subtotal, shipping, and total calculation
- Free shipping for orders over 500,000₫
- Empty cart state with "Continue Shopping" button
- Checkout button (placeholder for future payment integration)
- Trust badges (Secure payment, 7-day return, Nationwide shipping)

### 2. **Add to Cart Functionality**
- Works on `sproduct.html` (product detail page)
- Works on `shop.html` (all products)
- Shows success notification when adding
- Cart count badge updates automatically
- Data persists in localStorage

### 3. **Shop Icon in Header**
- Added store icon (`fa-store`) next to cart icon
- Redirects to `shop.html` when clicked
- Available on all pages (index, sproduct, shop, cart)

### 4. **Cart Count Badge**
- Red circular badge showing number of items
- Displays on cart icon in header
- Updates dynamically when adding/removing items
- Hidden when cart is empty

### 5. **Mobile Hamburger Menu** (`index.html`)
- Slide-in menu from left
- Overlay background when open
- Menu items:
  - Trang chủ (Home)
  - Cửa hàng (Shop)
  - Giỏ hàng (Cart)
  - Tài khoản (Account)
  - Yêu thích (Wishlist)
  - Lịch sử đơn hàng (Order History)
  - Trợ giúp (Help)
- Social media links in footer
- Close button and overlay click to dismiss

### 6. **Updated Footer** (`index.html`)
Four columns with real information:

**Support:**
- Contact (mailto:support@bookstore.vn)
- Shipping & Delivery
- Terms & Conditions
- FAQ
- Privacy Policy

**Quick Links:**
- Shop
- About Us
- Blog
- Contact

**Contact:**
- 📍 123 Đường Sách, Quận 1, TP.HCM
- 📞 1900 xxxx
- ✉️ support@bookstore.vn
- 🕐 8:00 - 22:00 (T2 - CN)

**Follow Us:**
- Facebook, Twitter, Instagram, Pinterest, TikTok
- Payment methods: Visa, Mastercard, PayPal

## Files Created/Modified

### Created:
- `cart.html` - Shopping cart page

### Modified:
- `script.js` - Cart management system, mobile menu
- `style.css` - Cart styles, mobile menu styles, footer styles
- `index.html` - Header with shop icon & cart count, footer, mobile menu HTML
- `sproduct.html` - Header with shop icon & cart count
- `shop.html` - Header with cart count

## Cart System Details

### localStorage Structure
```javascript
cart = [
  {
    id: 1,
    name: "Product Name",
    price: 599,  // in thousands
    image: "src/image-product/1.png",
    quantity: 2
  },
  // ...
]
```

### Key Functions

| Function | Description |
|----------|-------------|
| `addToCart(id, qty)` | Add product to cart |
| `removeFromCart(id)` | Remove product from cart |
| `updateQuantity(id, qty)` | Update product quantity |
| `getCartTotals()` | Calculate subtotal, shipping, total |
| `renderCart()` | Display cart items on cart.html |
| `updateCartCount()` | Update badge count in header |
| `formatPrice(price)` | Format as Vietnamese Dong |
| `showNotification(msg, type)` | Show toast notification |

### Pricing Logic
- Prices stored in thousands (e.g., 599 = 599,000₫)
- Display formatted with `formatPrice()` function
- Shipping: Free for orders ≥ 500,000₫, otherwise 30,000₫

## Navigation Flow

```
index.html
├── Header
│   ├── Hamburger Menu → Mobile Menu
│   ├── Shop Icon → shop.html
│   ├── Cart Icon + Badge → cart.html
│   └── User Icon → #
│
├── Bestsellers → sproduct.html?id=[3,4,6,8,9,11]
├── Featured Books (cart icons) → shop.html
├── "View All Products" → shop.html
└── Footer
    ├── Support links
    ├── Quick links
    ├── Contact info
    └── Social media

shop.html
├── Back Arrow → index.html
├── Products → sproduct.html?id=[1-15]
└── Cart Icon → cart.html

sproduct.html
├── Breadcrumb: Home / Shop / Product Name
├── Add to Cart → Adds to cart, shows notification
└── Related Products → Other sproduct.html?id=[x]

cart.html
├── Back Arrow → index.html
├── Cart Items (editable quantities)
├── Remove buttons
├── Order summary
└── Checkout button → Alert (placeholder)
```

## User Experience Features

### Notifications
- Success notification (green) when adding to cart
- Info notification (blue) for other messages
- Auto-dismiss after 3 seconds
- Slide-in animation from right

### Mobile Menu
- Smooth slide-in animation
- Body scroll locked when open
- Closes on:
  - Close button click
  - Overlay click
  - Menu link click

### Cart Features
- Persistent cart (survives page refresh)
- Real-time count update
- Quantity validation (min: 1)
- Auto-remove when quantity = 0
- Empty state with call-to-action

## Browser Compatibility
- Modern browsers (Chrome, Firefox, Safari, Edge)
- localStorage API required
- CSS Grid & Flexbox required
- ES6 JavaScript (const, let, arrow functions, template literals)

## Future Enhancements (Optional)
1. Wishlist/favorites functionality
2. Order history page
3. User authentication
4. Payment gateway integration
5. Email notifications
6. Promo code system
7. Product reviews
8. Advanced search & filters
