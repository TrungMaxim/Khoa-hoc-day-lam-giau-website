# DOCUMENTATION.md - Monro Academy Website

> **Complete Technical Reference** for every file in the Monro Academy Vietnamese e-commerce course platform. This document covers HTML structure, CSS techniques, JavaScript logic, localStorage usage, event listeners, responsive breakpoints, and DOM manipulation across all project files.

---

## TABLE OF CONTENTS

1. [Project Overview](#project-overview)
2. [File: `index.html`](#file-indexhtml)
3. [File: `shop.html`](#file-shophhtml)
4. [File: `sproduct.html`](#file-sproducthtml)
5. [File: `cart.html`](#file-carthtml)
6. [File: `account.html`](#file-accounthtml)
7. [File: `about.html`](#file-abouthtml)
8. [File: `blog.html`](#file-bloghtml)
9. [File: `contact.html`](#file-contacthtml)
10. [File: `style.css`](#file-stylecss)
11. [File: `script.js`](#file-scriptjs)
12. [Assets: Product Images](#assets-product-images)
13. [Assets: Logo](#assets-logo)
14. [localStorage Keys & Data Structures](#localstorage-reference)
15. [Responsive Breakpoints Summary](#responsive-breakpoints)
16. [All Event Listeners](#event-listeners)
17. [Product Data Catalog](#product-catalog)

---

## PROJECT OVERVIEW

**Monro Academy** is a Vietnamese-language static e-commerce website selling wealth-building courses and self-development content. Built as a school project by 5 students from class 12T1, it is a pure HTML/CSS/JavaScript application with **no server, no framework, and no build tools**. All data persistence is handled via `localStorage`.

**Key Statistics:**
- **8 HTML pages** (index, shop, sproduct, cart, account, about, blog, contact)
- **1 CSS file** (`style.css` -- 4645 lines)
- **1 JavaScript file** (`script.js` -- 850 lines)
- **15 product images** (`src/image-product/1.png` through `15.png`)
- **1 logo** (`src/logo/shop-logo.png`)

**Technologies:**
- HTML5 (semantic markup)
- CSS3 (Flexbox, Grid, CSS Custom Properties, Media Queries, Animations)
- JavaScript ES6+ (const/let, arrow functions, template literals, modules pattern)
- Font Awesome 6 (icon library via CDN)
- Google Fonts (Pacifico, Spartan, Montserrat, Roboto)

---

## FILE: `index.html`

**Absolute Path:** `C:\Users\LENOVO\Downloads\Khoa-hoc-day-lam-giau-website\index.html`

### Description
The homepage serves as the primary landing page. It introduces visitors to Monro Academy with a hero banner, feature highlights, bestseller courses, promotional banners, and a newsletter signup form. It is the most content-dense page on the site.

### Features

| Feature | Description |
|---------|-------------|
| **Sticky Header** | Three-column layout: hamburger menu (left), shop/cart/user icons (right). Stays fixed at top on scroll. |
| **Big Hero Banner** | Full-width section with blurred background logo image and overlaid text "HỌC VIỆN LÀM GIÀU" with slogan "Tri thức dẫn lối thành công". |
| **Feature Boxes** | 6 icon boxes showcasing platform benefits (Lifetime Access, 24/7 Online, 90% Savings, Special Deals, Guaranteed Results, 24/7 Support). |
| **About Intro** | Brief paragraph introducing the platform. |
| **Bestseller Courses (Horizontal Scroll)** | 6 course cards in a horizontally-scrolling container with auto-scroll animation. Each card has a wishlist heart button, course image, title, star rating, price, and "Ghi Danh Ngay" (Enroll Now) button. |
| **Our Story** | Two-column section (text + logo image) with "Read More" link to about.html. |
| **New Courses Grid** | 4 course cards in a flex-wrap grid layout with wishlist buttons and cart icons. |
| **Promotional Banners** | Two banner sections: SM Banner (2 boxes with "Buy 1 Get 1 Free" and "New Semester" promos) and Banner 3 (3 boxes for Soft Skills, Finance, Business categories). |
| **Newsletter** | Email subscription form with bordered box design. |
| **Footer (4 columns)** | Support links, Quick Links, Contact Info (address, phone, email, hours), Social Media icons (Facebook, Twitter, Instagram, Pinterest, TikTok, YouTube), Payment method icons (Visa, Mastercard, PayPal). |
| **Mobile Slide-in Menu** | Hamburger-activated slide-out navigation with 3 sections: main navigation, account tools, footer with social links. |

### HTML Structure

```html
<!DOCTYPE html>
<html lang="vi">
<head>
    <!-- Meta, viewport, title -->
    <!-- External CSS: style.css -->
    <!-- CDN: Font Awesome 6.0.0 -->
    <!-- CDN: Google Fonts (Pacifico, Spartan, Montserrat) -->
</head>
<body>
    <header id="main-header">          <!-- Sticky header -->
        <div class="header-left">      <!-- Hamburger menu button -->
        <div class="header-right">     <!-- Shop, Cart (with #cart-count badge), User icons -->
    </header>

    <section id="big-hero">            <!-- Hero with blurred logo background -->
        <div class="big-hero-content">
            <img class="monro-logo-bg"> <!-- Blurred, semi-transparent logo -->
            <div class="big-hero-text"> <!-- Overlaid text -->
                <h1 class="sketch-logo">
                <p class="slogan">
    </section>

    <section id="feature" class="section-p1"> <!-- 6 feature boxes -->
        <div class="fe-box"> x6
    </section>

    <section id="about-intro">         <!-- Brief about paragraph -->
    </section>

    <section id="recommendations">     <!-- Bestsellers horizontal scroll -->
        <div class="book-container">   <!-- overflow-x: auto, auto-scroll via JS -->
            <div class="book-card" onclick="window.location.href='sproduct.html?id=3'"> x6
                <button class="wishlist-btn" onclick="event.stopPropagation(); toggleWishlist(3)">
                <div class="book-img"><img></div>
                <div class="book-info"><h5>, <div class="stars">, <h4>, <button></div>
    </section>

    <section id="our-story">          <!-- Our Story two-column -->
        <div class="story-content">
            <div class="story-text"><h3>, <p>, <a class="read-more"></div>
            <div class="story-image"><img></div>
    </section>

    <section id="product1" class="section-p1"> <!-- New courses grid -->
        <div class="pro-container">    <!-- flex-wrap -->
            <div class="pro" onclick="window.location.href='sproduct.html?id=13'"> x4
                <button class="wishlist-btn">
                <img>
                <div class="des"><span>, <h5>, <div class="stars">, <h4></div>
                <a><i class="cart"></i></a>
    </section>

    <section id="sm-banner" class="section-p1"> <!-- 2 promo banners -->
        <div class="banner-box">
        <div class="banner-box banner-box2">
    </section>

    <section id="banner3">            <!-- 3 category banners -->
        <div class="banner-box"> x3
    </section>

    <section id="newsletter-sketch">  <!-- Newsletter email form -->
        <div class="news-box">
            <h4>
            <form class="form"><input>, <button></form>
    </section>

    <footer class="sketch-footer">    <!-- 4-column footer -->
        <div class="col"> x4
    </footer>

    <div class="menu-overlay" id="menu-overlay"></div> <!-- Dark overlay for mobile menu -->
    <div class="mobile-menu" id="mobile-menu">         <!-- Slide-in mobile navigation -->
        <div class="mobile-menu-header"><h3>, <button id="close-menu"></div>
        <nav class="mobile-menu-nav"><a> x8 + <div class="menu-divider"> x2</nav>
        <div class="mobile-menu-footer"><p>, <div class="mobile-menu-social"></div>
    </div>

    <script src="script.js"></script>
</body>
</html>
```

### Semantic Elements Used
- `<header>`, `<main>` (implicit via sections), `<footer>`, `<section>`, `<nav>`, `<article>` (implicit for cards)
- `id` attributes for all major sections (`big-hero`, `feature`, `recommendations`, `our-story`, `product1`, `sm-banner`, `banner3`, `newsletter-sketch`)
- `class="section-p1"` for consistent section padding

### JavaScript Interactions on This Page
- `loadProduct()` -- Guarded; does NOT run on this page (checks for `.product-display`)
- Auto-scroll for `.book-container` -- Runs only if `.book-container` exists
- `updateCartCount()` -- Runs on DOMContentLoaded
- `updateWishlistButtons()` -- Runs on DOMContentLoaded
- Mobile menu: `#menu-btn` click opens, `#close-menu` and `#menu-overlay` click closes
- Each `.book-card` has inline `onclick` to navigate to `sproduct.html?id=X`
- Each `.wishlist-btn` has inline `onclick="event.stopPropagation(); toggleWishlist(X)"`

---

## FILE: `shop.html`

**Absolute Path:** `C:\Users\LENOVO\Downloads\Khoa-hoc-day-lam-giau-website\shop.html`

### Description
The all-courses catalog page. Displays all 15 courses in a responsive CSS Grid layout with search and category filtering functionality. Products are dynamically rendered by JavaScript.

### Features

| Feature | Description |
|---------|-------------|
| **Header with Back Arrow** | Left: back arrow to index.html, Center: "Khóa Học" title, Right: notification bell, cart icon (with badge), user icon. |
| **Breadcrumb** | "Trang Chủ / Tất Cả Khóa Học" |
| **Shop Header** | Large title "Tất Cả Khóa Học" with subtitle on light gray background. |
| **Search Box** | Text input with magnifying glass icon. Filters products in real-time on `input` event. |
| **Category Filter** | Dropdown `<select>` with options: All, Tai Chinh (Finance), Kinh Doanh (Business), Ky Nang Mem (Soft Skills), Phat Trien Ban Than (Personal Development). Filters on `change` event. |
| **Results Counter** | Dynamic text showing "Hiển thị **N** khóa học" that updates as filters change. |
| **Products Grid** | CSS Grid `auto-fill, minmax(250px, 1fr)` layout. Dynamically rendered by `renderShopProducts()`. Each card has wishlist button, image, name, stars, price, and "Ghi Danh Ngay" button. |
| **Empty State** | When no products match filters, shows search icon with "No courses found" message. |
| **Mobile Menu** | Same slide-in menu as other pages. |

### HTML Structure

```html
<!DOCTYPE html>
<html lang="vi">
<head><!-- Meta, style.css, Font Awesome, Google Fonts --></head>
<body>
    <header id="main-header">
        <div class="header-left"><a href="index.html"><i class="fa-arrow-left"></i></a></div>
        <div class="header-center"><h2>Khóa Học</h2></div>
        <div class="header-right">
            <a><i class="fa-bell"></i></a>
            <a href="cart.html"><i class="fa-cart-shopping"></i><span id="cart-count">0</span></a>
            <a href="account.html"><i class="fa-user"></i></a>
        </div>
    </header>

    <!-- Mobile menu (same structure as index.html) -->
    <div class="menu-overlay" id="menu-overlay"></div>
    <div class="mobile-menu" id="mobile-menu">...</div>

    <main class="shop-page">
        <nav class="breadcrumb"><a href="index.html">Trang Chủ</a> / <span>Tất Cả Khóa Học</span></nav>

        <section class="shop-header"><h1>, <p></section>

        <section class="shop-products">
            <div class="shop-filters">
                <div class="shop-filters-row">
                    <div class="search-box">
                        <input type="text" id="search-input" placeholder="Tìm kiếm khóa học...">
                        <i class="fa-magnifying-glass"></i>
                    </div>
                    <div class="filter-box">
                        <select id="category-filter">
                            <option value="all">Tất Cả Danh Mục</option>
                            <option value="tai-chinh">Tài Chính</option>
                            <option value="kinh-doanh">Kinh Doanh</option>
                            <option value="ky-nang-mem">Kỹ Năng Mềm</option>
                            <option value="phat-trien-ban-than">Phát Triển Bản Thân</option>
                        </select>
                    </div>
                </div>
                <div class="filter-results">Hiển thị <strong>15</strong> khóa học</div>
            </div>

            <div class="products-grid">
                <!-- Dynamically populated by renderShopProducts() -->
            </div>
        </section>
    </main>

    <footer class="sketch-footer">...</footer>
    <script src="script.js"></script>
</body>
</html>
```

### JavaScript Interactions
- `renderShopProducts()` -- Filters and renders all 15 products into `.products-grid`
- `initShopFilters()` -- Binds `input` event on `#search-input` and `change` event on `#category-filter`
- `updateCartCount()` -- Updates cart badge
- `updateWishlistButtons()` -- Updates heart icons on wishlist buttons
- Products are rendered from the `products` object in script.js using `Object.values(products).filter()`

---

## FILE: `sproduct.html`

**Absolute Path:** `C:\Users\LENOVO\Downloads\Khoa-hoc-day-lam-giau-website\sproduct.html`

### Description
The single product detail page. Dynamically loads course data based on the `?id=` URL query parameter. Shows course image, name, price, features list, description, curriculum info, and 12 related courses.

### Features

| Feature | Description |
|---------|-------------|
| **Dynamic Content Loading** | JavaScript reads `?id=` from URL and populates all fields (title, price, image, description, breadcrumb) from the `products` object. |
| **Breadcrumb** | "Trang Chủ / Cửa Hàng / [Dynamic Course Name]" -- the course name portion is updated by JS via `#product-name-breadcrumb`. |
| **Product Image** | Large image (400x500px) with white background and rounded corners. Source updated by JS. |
| **Product Details** | Course name (dynamic H1), price (dynamic, green color), course features grid (4 items), quantity input (readonly, defaults to 1), "Ghi Danh Ngay" add-to-cart button. |
| **Course Features Grid** | 2x2 grid showing: Lifetime Access, 24/7 Online Learning, Completion Certificate, Free Updates. Each with Font Awesome icon. |
| **Course Info Section** | List of 6 curriculum highlights with green checkmarks: video lectures, downloadable materials, practice exercises, quizzes, instructor support, student community. |
| **Related Products** | 12 hard-coded product cards linking to other `sproduct.html?id=X` pages. All show images (200px height), names, and prices. |

### HTML Structure

```html
<!DOCTYPE html>
<html lang="vi">
<head><!-- Meta, style.css, Font Awesome, Google Fonts --></head>
<body>
    <header>  <!-- Note: no id on this header (different from other pages) -->
        <div class="header-left"><i class="fa-bars" id="menu-btn"></i></div>
        <div class="header-right">
            <a href="shop.html"><i class="fa-store"></i></a>
            <a href="cart.html"><i class="fa-cart-shopping"></i><span id="cart-count">0</span></a>
            <a href="account.html"><i class="fa-user"></i></a>
        </div>
    </header>

    <!-- Mobile menu -->
    <div class="menu-overlay" id="menu-overlay"></div>
    <div class="mobile-menu" id="mobile-menu">...</div>

    <main class="container">
        <nav class="breadcrumb">
            <a href="index.html">Trang Chủ</a> /
            <a href="shop.html">Cửa Hàng</a> /
            <span id="product-name-breadcrumb">Chi Tiết</span>
        </nav>

        <section class="product-display"> <!-- 2-column grid -->
            <div class="product-image">
                <img src="src/image-product/1.png" alt="Khóa Học Image"> <!-- Default, updated by JS -->
            </div>

            <div class="product-details">
                <h1>Tên Khóa Học</h1> <!-- Updated by JS -->
                <p class="price"></p>  <!-- Updated by JS -->

                <div class="course-features"> <!-- 2x2 grid -->
                    <div class="feature-item"><i class="fa-clock"></i><span>Truy cập trọn đời</span></div>
                    <div class="feature-item"><i class="fa-laptop"></i><span>Học online 24/7</span></div>
                    <div class="feature-item"><i class="fa-certificate"></i><span>Chứng chỉ hoàn thành</span></div>
                    <div class="feature-item"><i class="fa-infinity"></i><span>Cập nhật miễn phí</span></div>
                </div>

                <div class="purchase-actions">
                    <input type="number" value="1" min="1" class="quantity" readonly>
                    <button class="add-to-cart">Ghi Danh Ngay</button>
                </div>

                <div class="description">
                    <h3>Mô Tả Khóa Học</h3>
                    <p></p> <!-- Updated by JS -->
                </div>

                <div class="course-info">
                    <h4>Nội Dung Khóa Học</h4>
                    <ul> <!-- 6 items with checkmark icons -->
                        <li><i class="fa-check"></i> Video bài giảng chất lượng cao</li>
                        <li><i class="fa-check"></i> Tài liệu học tập downloadable</li>
                        <li><i class="fa-check"></i> Bài tập thực hành sau mỗi chương</li>
                        <li><i class="fa-check"></i> Quiz kiểm tra kiến thức</li>
                        <li><i class="fa-check"></i> Hỗ trợ từ giảng viên</li>
                        <li><i class="fa-check"></i> Cộng đồng học viên</li>
                    </ul>
                </div>
            </div>
        </section>

        <hr>

        <section class="related-products">
            <h2>Khóa Học Liên Quan</h2>
            <div class="product-grid">
                <!-- 12 hard-coded product cards -->
                <div class="product-card"><a href="sproduct.html?id=1"><img><p><span></a></div>
                ... x12
            </div>
        </section>
    </main>

    <footer class="sketch-footer">...</footer>
    <script src="script.js"></script>
</body>
</html>
```

### JavaScript Interactions
- `loadProduct()` -- Runs ONLY on this page (checks for `.product-display` element). Parses `?id=` query parameter, defaults to 1. Updates: `document.title`, `#product-name-breadcrumb`, `.product-image img` src/alt, `.product-details h1`, `.price`, `.description p`.
- Add-to-cart button click handler: reads `?id=` and quantity, calls `addToCart(productId, quantity)`
- `updateCartCount()` -- Runs on DOMContentLoaded

---

## FILE: `cart.html`

**Absolute Path:** `C:\Users\LENOVO\Downloads\Khoa-hoc-day-lam-giau-website\cart.html`

### Description
The shopping cart page. Displays all items in the cart with editable quantities, automatic total calculation, and a checkout button. Uses a two-column layout: cart items on the left, order summary on the right.

### Features

| Feature | Description |
|---------|-------------|
| **Header** | Back arrow to index.html, centered "Giỏ Hàng" title, graduation cap icon, cart icon, user icon. |
| **Breadcrumb** | "Trang Chủ / Khóa Học / Giỏ hàng" |
| **Cart Items Section** | Each item displayed as a grid row: thumbnail image (100x140px), name, unit price, quantity controls (+/- buttons + number input), total price, delete button. Rendered dynamically by `renderCart()`. |
| **Empty Cart State** | When cart is empty: graduation cap icon (80px), message "Giỏ khóa học của bạn đang trống", "Khám Phá Khóa Học" link button. Hidden when cart has items. |
| **Order Summary** | Sticky sidebar panel showing: subtotal, shipping fee ("Miễn phí" for orders >= 500,000₫), total. Checkout button (disabled when cart is empty). |
| **Trust Badges** | 4 badges below summary: Secure Payment, 7-day Refund, Lifetime Access, Completion Certificate. Each with icon and label. |
| **Quantity Controls** | Minus/plus buttons with +/- icons, number input with `onchange` handler calling `updateQuantity(productId, value)`. Minimum quantity is 1; setting to 0 triggers removal. |
| **Remove Items** | Red trash icon button that calls `removeFromCart(productId)`. Shows info notification. |
| **Checkout Button** | Disabled when cart is empty. On click: validates cart, shows alert (placeholder for payment integration). |

### HTML Structure

```html
<!DOCTYPE html>
<html lang="vi">
<head><!-- Meta, style.css, Font Awesome, Google Fonts --></head>
<body>
    <header id="main-header">
        <div class="header-left"><a href="index.html"><i class="fa-arrow-left"></i></a></div>
        <div class="header-center"><h2>Giỏ Hàng</h2></div>
        <div class="header-right">
            <a href="shop.html"><i class="fa-graduation-cap"></i></a>
            <a href="cart.html"><i class="fa-cart-shopping"></i></a>
            <a href="account.html"><i class="fa-user"></i></a>
        </div>
    </header>

    <main class="cart-page">
        <nav class="breadcrumb">...</nav>

        <div class="cart-container"> <!-- 2-column grid: 1fr 380px -->
            <div class="cart-items-section">
                <h2>Giỏ Khóa Học Của Bạn</h2>
                <div id="cart-items">
                    <!-- Dynamically rendered cart items -->
                </div>
                <div id="empty-cart-message" class="empty-cart" style="display:none;">
                    <i class="fa-graduation-cap"></i>
                    <p>Giỏ khóa học của bạn đang trống</p>
                    <a href="shop.html" class="continue-shopping">Khám Phá Khóa Học</a>
                </div>
            </div>

            <div class="cart-summary-section">
                <div class="cart-summary">
                    <h3>Tổng Đơn Hàng</h3>
                    <div class="summary-row"><span>Tạm tính:</span><span id="subtotal">0₫</span></div>
                    <div class="summary-row"><span>Phí truy cập:</span><span id="shipping">Miễn phí</span></div>
                    <hr>
                    <div class="summary-row total"><span>Tổng cộng:</span><span id="total">0₫</span></div>
                    <button class="checkout-btn" id="checkout-btn" disabled>Thanh Toán Ghi Danh</button>
                    <div class="trust-badges">
                        <div class="badge"><i class="fa-lock"></i><span>Thanh toán an toàn</span></div>
                        <div class="badge"><i class="fa-rotate-left"></i><span>Hoàn tiền trong 7 ngày</span></div>
                        <div class="badge"><i class="fa-infinity"></i><span>Truy cập trọn đời</span></div>
                        <div class="badge"><i class="fa-certificate"></i><span>Chứng chỉ hoàn thành</span></div>
                    </div>
                </div>
            </div>
        </div>
    </main>

    <footer class="sketch-footer">...</footer>
    <script src="script.js"></script>
</body>
</html>
```

### JavaScript Interactions
- `renderCart()` -- Runs on DOMContentLoaded. Renders cart items from `cart` array into `#cart-items`. Shows/hides empty cart message. Updates subtotal, shipping, total. Enables/disables checkout button.
- `getCartTotals()` -- Calculates subtotal, shipping (free >= 500,000₫, else 30,000₫), and total.
- `updateQuantity(productId, newQuantity)` -- Called from inline `onchange` and button `onclick` handlers.
- `removeFromCart(productId)` -- Called from inline `onclick` on trash buttons.
- Checkout button click handler: validates cart, shows alert.

---

## FILE: `account.html`

**Absolute Path:** `C:\Users\LENOVO\Downloads\Khoa-hoc-day-lam-giau-website\account.html`

### Description
The user account page with dual view modes: guest view (login/register forms) and logged-in view (sidebar with navigation tabs). Manages user authentication state via localStorage and provides access to courses, wishlist, certificates, order history, settings, and help.

### Features

| Feature | Description |
|---------|-------------|
| **Guest View (Default)** | Welcome message with user icon, two auth cards (Login and Register forms), "Continue as Guest" button, and 4-item benefits grid. |
| **Login Form** | Email and password fields, submit button. Creates user object in localStorage on submit. |
| **Register Form** | Name, email, password fields, submit button. Creates user object in localStorage on submit. |
| **Continue as Guest** | Sets `currentUser` as guest in localStorage, switches to logged-in view. |
| **Logged-In View** | Two-column layout: sidebar (user profile + navigation) and content area with tabbed sections. |
| **User Profile** | Avatar icon, name display, email display, logout button. |
| **Account Navigation** | 6 nav links with icons: My Courses, Wishlist, Certificates, Order History, Settings, Help. Clicking switches visible content section. |
| **My Courses Tab** | Shows empty state or courses grid (prepared for future enrollment tracking). |
| **Wishlist Tab** | Shows empty state or dynamically rendered wishlist grid from `wishlist` localStorage array. Each item has remove button and "Add to Cart" button. |
| **Certificates Tab** | Empty state with certificate icon (placeholder for future generation). |
| **Order History Tab** | Empty state (placeholder for future order tracking). |
| **Settings Tab** | Editable name field, disabled email field, save button. Updates `currentUser` in localStorage. |
| **Help Tab** | 4-card grid: Email Support, Hotline, Live Chat, FAQ. |

### HTML Structure

```html
<!DOCTYPE html>
<html lang="vi">
<head><!-- Meta, style.css, Font Awesome, Google Fonts --></head>
<body>
    <header id="main-header">...</header>

    <main class="account-page">
        <nav class="breadcrumb">...</nav>

        <div class="account-container">
            <!-- GUEST VIEW -->
            <div id="guest-view" class="account-guest">
                <div class="guest-header">
                    <i class="fa-user-circle"></i>
                    <h1>Chào Mừng Đến Với Monro</h1>
                    <p>Đăng nhập để truy cập khóa học...</p>
                </div>

                <div class="auth-options"> <!-- 2-column grid -->
                    <div class="auth-card"> <!-- Login -->
                        <h3>Đăng Nhập</h3>
                        <form id="login-form">
                            <div class="form-group"><label>Email</label><input type="email" id="login-email"></div>
                            <div class="form-group"><label>Mật khẩu</label><input type="password" id="login-password"></div>
                            <button type="submit" class="auth-btn login-btn">Đăng Nhập</button>
                        </form>
                        <button class="guest-btn" onclick="continueAsGuest()">Tiếp Tục Như Khách</button>
                    </div>

                    <div class="auth-card"> <!-- Register -->
                        <h3>Đăng Ký</h3>
                        <form id="register-form">
                            <div class="form-group"><label>Họ và tên</label><input type="text" id="register-name"></div>
                            <div class="form-group"><label>Email</label><input type="email" id="register-email"></div>
                            <div class="form-group"><label>Mật khẩu</label><input type="password" id="register-password"></div>
                            <button type="submit" class="auth-btn register-btn">Đăng Ký Ngay</button>
                        </form>
                    </div>
                </div>

                <div class="guest-benefits">
                    <div class="benefits-grid"> <!-- 4-column grid -->
                        <div class="benefit-item"><i class="fa-graduation-cap"><div><h4>, <p></div></div>
                        <div class="benefit-item"><i class="fa-certificate">...</div>
                        <div class="benefit-item"><i class="fa-heart">...</div>
                        <div class="benefit-item"><i class="fa-percent">...</div>
                    </div>
                </div>
            </div>

            <!-- LOGGED-IN VIEW (hidden by default) -->
            <div id="logged-view" class="account-logged" style="display: none;">
                <!-- 2-column grid: sidebar + content -->
                <div class="account-sidebar">
                    <div class="user-profile">
                        <div class="user-avatar"><i class="fa-user-circle"></i></div>
                        <h3 id="user-name-display">Khách</h3>
                        <p id="user-email-display">guest@hocviendlamgiau.vn</p>
                        <button class="logout-btn" onclick="logout()">Đăng Xuất</button>
                    </div>
                    <nav class="account-nav">
                        <a href="#my-courses" class="active"><i class="fa-book-open"><span>Khóa Học Của Tôi</span></a>
                        <a href="#wishlist"><i class="fa-heart"><span>Khóa Học Yêu Thích</span></a>
                        <a href="#certificates"><i class="fa-certificate"><span>Chứng Chỉ</span></a>
                        <a href="#order-history"><i class="fa-clock-rotate-left"><span>Lịch Sử Đơn Hàng</span></a>
                        <a href="#settings"><i class="fa-gear"><span>Cài Đặt</span></a>
                        <a href="#help"><i class="fa-circle-question"><span>Trợ Giúp</span></a>
                    </nav>
                </div>

                <div class="account-content">
                    <div class="content-section" id="my-courses">...</div>
                    <div class="content-section" id="wishlist" style="display: none;">
                        <div id="wishlist-empty" class="wishlist-empty">...</div>
                        <div id="wishlist-grid" class="wishlist-grid" style="display: none;"></div>
                    </div>
                    <div class="content-section" id="certificates" style="display: none;">...</div>
                    <div class="content-section" id="order-history" style="display: display: none;">...</div>
                    <div class="content-section" id="settings" style="display: none;">
                        <form class="settings-form">
                            <div class="form-group"><label>Họ và tên</label><input type="text" id="settings-name"></div>
                            <div class="form-group"><label>Email</label><input type="email" id="settings-email" disabled></div>
                            <button type="button" class="save-btn" onclick="saveSettings()">Lưu Thay Đổi</button>
                        </form>
                    </div>
                    <div class="content-section" id="help" style="display: none;">
                        <div class="help-grid"> <!-- 4 cards --> </div>
                    </div>
                </div>
            </div>
        </div>
    </main>

    <footer class="sketch-footer">...</footer>
    <script src="script.js"></script>
</body>
</html>
```

### JavaScript Interactions
- `initAccountPage()` -- Runs on DOMContentLoaded if `.account-page` exists. Checks `currentUser` from localStorage, shows appropriate view.
- `handleLogin(e)` -- Login form submit handler. Creates user, saves to localStorage, switches to logged-in view.
- `handleRegister(e)` -- Register form submit handler. Same as login but with name field.
- `continueAsGuest()` -- Creates guest user, saves to localStorage, switches to logged-in view.
- `logout()` -- Confirms with user, clears `currentUser` from localStorage, shows guest view.
- `saveSettings()` -- Updates user name in `currentUser` and localStorage.
- `setupAccountNav()` -- Binds click handlers to `.account-nav a` links. Switches `.content-section` visibility based on clicked link's href. Triggers `renderWishlist()` when wishlist tab is opened.
- `renderWishlist()` -- Renders wishlist items from `wishlist` array into `#wishlist-grid`.

---

## FILE: `about.html`

**Absolute Path:** `C:\Users\LENOVO\Downloads\Khoa-hoc-day-lam-giau-website\about.html`

### Description
The "About Us" page. Contains static content about Monro Academy's story, mission, vision, core values, instructor team, statistics, and a call-to-action section. Pure HTML/CSS with no dynamic JavaScript content.

### Features

| Feature | Description |
|---------|-------------|
| **Hero Section** | Gradient background (primary color), large title "Học Viện Làm Giàu Monro", slogan, description paragraph. |
| **Our Story Section** | Two-column grid: logo image on left, story text on right with bold key phrases. |
| **Mission & Vision Section** | 3-card grid with icon circles: Mission (bullseye icon), Vision (eye icon), Core Values (heart icon). Cards lift on hover. |
| **Instructors Section** | 4-card grid with instructor avatar icons (Font Awesome user icons), names, roles, bios, and social links (LinkedIn, Facebook). |
| **Stats Section** | Gradient background, 4-card grid: 15+ Courses, 10,000+ Students, 50+ Instructors, 95% Satisfaction. |
| **CTA Section** | Centered call-to-action with "Xem Tất Cả Khóa Học" button linking to shop.html. |
| **Mobile Menu** | Standard slide-in navigation. |

### HTML Structure

```html
<!DOCTYPE html>
<html lang="vi">
<head><!-- Meta, style.css, Font Awesome, Google Fonts --></head>
<body>
    <header id="main-header">...</header>
    <div class="menu-overlay" id="menu-overlay"></div>
    <div class="mobile-menu" id="mobile-menu">...</div>

    <main class="about-page">
        <nav class="breadcrumb"><a href="index.html">Trang Chủ</a> / <span>Về Chúng Tôi</span></nav>

        <section class="about-hero">
            <div class="about-hero-content">
                <h1>Học Viện Làm Giàu Monro</h1>
                <p class="hero-slogan">"Tri thức dẫn lối thành công"</p>
                <p class="hero-description">...</p>
            </div>
        </section>

        <section class="about-section our-story">
            <div class="container">
                <div class="story-grid"> <!-- 1fr 1.5fr -->
                    <div class="story-image"><img src="src/logo/shop-logo.png"></div>
                    <div class="story-content"><h2>, <p> x3</div>
                </div>
            </div>
        </section>

        <section class="about-section mission-vision">
            <div class="container">
                <div class="mv-grid"> <!-- 3 columns -->
                    <div class="mv-card"><div class="mv-icon"><i>, <h3>, <p></div> x3
                </div>
            </div>
        </section>

        <section class="about-section instructors">
            <div class="container">
                <h2 class="section-title-centered">Đội Ngũ Giảng Viên</h2>
                <p class="section-subtitle-centered">...</p>
                <div class="instructors-grid"> <!-- 4 columns -->
                    <div class="instructor-card">
                        <div class="instructor-img"><i class="fa-user-tie"></i></div>
                        <h4>TS. Nguyễn Văn A</h4>
                        <p class="instructor-role">Chuyên gia Tài chính</p>
                        <p class="instructor-bio">...</p>
                        <div class="instructor-social"><a><i class="fa-linkedin"></i></a><a><i class="fa-facebook"></i></a></div>
                    </div> x4
                </div>
            </div>
        </section>

        <section class="about-section stats">
            <div class="container">
                <div class="stats-grid"> <!-- 4 columns -->
                    <div class="stat-card"><div class="stat-number">15+</div><div class="stat-label">Khóa Học</div></div> x4
                </div>
            </div>
        </section>

        <section class="about-section cta">
            <div class="container">
                <div class="cta-content">
                    <h2>Bắt Đầu Hành Trình Làm Giàu Của Bạn</h2>
                    <p>...</p>
                    <a href="shop.html" class="cta-btn"><i class="fa-graduation-cap"></i> Xem Tất Cả Khóa Học</a>
                </div>
            </div>
        </section>
    </main>

    <footer class="sketch-footer">...</footer>
    <script src="script.js"></script>
</body>
</html>
```

### JavaScript Interactions
- Minimal. Only `script.js` is loaded for the mobile menu functionality and cart count badge update. No page-specific functions are called.

---

## FILE: `blog.html`

**Absolute Path:** `C:\Users\LENOVO\Downloads\Khoa-hoc-day-lam-giau-website\blog.html`

### Description
The blog page featuring 9 static article cards covering finance, business, soft skills, and personal development topics. Pure HTML/CSS with no JavaScript interactivity.

### Features

| Feature | Description |
|---------|-------------|
| **Blog Hero** | Gradient background, title "Blog Làm Giàu", description paragraph. |
| **Article Cards** | 9 cards in a 3-column CSS Grid. Each card has: icon image area, category badge, title (2-line clamp), excerpt (3-line clamp), date, "Read More" button. |
| **Categories** | Articles are tagged with: Tài Chính (Finance), Kinh Doanh (Business), Kỹ Năng Mềm (Soft Skills), Phát Triển Bản Thân (Personal Development). |
| **Card Hover Effects** | Cards lift up 5px with increased shadow on hover. |
| **Mobile Menu** | Standard slide-in navigation. |

### HTML Structure

```html
<!DOCTYPE html>
<html lang="vi">
<head><!-- Meta, style.css, Font Awesome, Google Fonts --></head>
<body>
    <header id="main-header">...</header>
    <div class="menu-overlay" id="menu-overlay"></div>
    <div class="mobile-menu" id="mobile-menu">...</div>

    <main class="blog-page">
        <nav class="breadcrumb"><a href="index.html">Trang Chủ</a> / <span>Blog</span></nav>

        <section class="blog-hero"><h1>, <p></section>

        <section class="blog-grid"> <!-- auto-fill minmax(320px, 1fr) -->
            <article class="blog-card"> x9
                <div class="blog-card-img"><i class="fa-icon"></i></div>
                <div class="blog-card-content">
                    <span class="blog-card-category">Tài Chính</span>
                    <h3>Article Title</h3>
                    <p class="blog-card-excerpt">Excerpt text...</p>
                    <div class="blog-card-footer">
                        <span class="blog-date"><i class="fa-calendar"></i> DD/MM/YYYY</span>
                        <a href="#" class="read-more-btn">Đọc Thêm <i class="fa-arrow-right"></i></a>
                    </div>
                </div>
            </article>
        </section>
    </main>

    <footer class="sketch-footer">...</footer>
    <script src="script.js"></script>
</body>
</html>
```

### Article List

| # | Category | Title | Date |
|---|----------|-------|------|
| 1 | Tài Chính | 7 Bước Quản Lý Tài Chính Cá Nhân Hiệu Quả Cho Người Mới Bắt Đầu | 25/03/2026 |
| 2 | Kinh Doanh | Khởi Nghiệp Từ Số 0: Những Bài Học Xương Máu Từ Các Tỷ Phú Tự Thân | 22/03/2026 |
| 3 | Kỹ Năng Mềm | Nghệ Thuật Giao Tiếp Với Người Giàu: 10 Nguyên Tắc Vàng | 20/03/2026 |
| 4 | Tài Chính | Đầu Tư Chứng Khoán Cho Người Mới: Từ A Đến Z | 18/03/2026 |
| 5 | Phát Triển Bản Thân | 10 Thói Quen Buổi Sáng Của Các CEO Thành Công | 15/03/2026 |
| 6 | Kinh Doanh | Xây Dựng Thương Hiệu Cá Nhân: Chìa Khóa Thành Công Thời Đại Số | 12/03/2026 |
| 7 | Tài Chính | Đầu Tư Bất Động Sản: 5 Sai Lầm Cần Tránh | 10/03/2026 |
| 8 | Kỹ Năng Mềm | Kỹ Năng Đàm Phán: Cách Đạt Được Thỏa Thuận Win-Win | 08/03/2026 |
| 9 | Phát Triển Bản Thân | Tư Duy Tăng Trưởng: Chìa Khóa Vượt Qua Giới Hạn Bản Thân | 05/03/2026 |

### JavaScript Interactions
- Minimal. Only `script.js` loaded for mobile menu and cart badge. No blog-specific JavaScript.

---

## FILE: `contact.html`

**Absolute Path:** `C:\Users\LENOVO\Downloads\Khoa-hoc-day-lam-giau-website\contact.html`

### Description
The contact page with a two-column layout: contact form on the left, contact information and Google Maps embed on the right. Pure HTML/CSS with a form submit handler in JavaScript.

### Features

| Feature | Description |
|---------|-------------|
| **Contact Hero** | Gradient background, title "Liên Hệ Với Chúng Tôi", subtitle. |
| **Contact Form** | 5 fields: Name (required), Email (required), Phone (optional), Subject dropdown (optional), Message textarea (required). Submit button with paper plane icon. |
| **Contact Info Section** | 4 info cards with icons: Address, Hotline, Email, Working Hours. Each with title and detail text. |
| **Google Maps Embed** | iframe embed showing District 1, Ho Chi Minh City. 300px height, responsive. |
| **Form Submission** | JavaScript handles form submit event, shows success notification, resets form. |
| **Mobile Menu** | Standard slide-in navigation. |

### HTML Structure

```html
<!DOCTYPE html>
<html lang="vi">
<head><!-- Meta, style.css, Font Awesome, Google Fonts --></head>
<body>
    <header id="main-header">...</header>
    <div class="menu-overlay" id="menu-overlay"></div>
    <div class="mobile-menu" id="mobile-menu">...</div>

    <main class="contact-page">
        <nav class="breadcrumb"><a href="index.html">Trang Chủ</a> / <span>Liên Hệ</span></nav>

        <section class="contact-hero"><h1>, <p></section>

        <div class="contact-container"> <!-- 2-column grid: 1fr 1fr -->
            <section class="contact-form-section">
                <h2>Gửi Tin Nhắn</h2>
                <p>Điền vào form bên dưới...</p>
                <form class="contact-form" id="contact-form">
                    <div class="form-group"><label>Họ và tên *</label><input type="text" id="contact-name" required></div>
                    <div class="form-group"><label>Email *</label><input type="email" id="contact-email" required></div>
                    <div class="form-group"><label>Số điện thoại</label><input type="tel" id="contact-phone"></div>
                    <div class="form-group"><label>Chủ đề</label>
                        <select id="contact-subject">
                            <option value="">-- Chọn chủ đề --</option>
                            <option value="course">Tư vấn khóa học</option>
                            <option value="support">Hỗ trợ kỹ thuật</option>
                            <option value="payment">Thanh toán</option>
                            <option value="partnership">Hợp tác</option>
                            <option value="other">Khác</option>
                        </select>
                    </div>
                    <div class="form-group"><label>Nội dung *</label><textarea id="contact-message" required></textarea></div>
                    <button type="submit" class="submit-btn"><i class="fa-paper-plane"></i> Gửi Tin Nhắn</button>
                </form>
            </section>

            <section class="contact-info-section">
                <h2>Thông Tin Liên Hệ</h2>
                <div class="contact-info-item"> x4
                    <i class="fa-icon"></i>
                    <div class="contact-info-item-content"><h4>, <p></div>
                </div>
                <div class="map-container">
                    <iframe src="https://www.google.com/maps/embed?..." allowfullscreen loading="lazy"></iframe>
                </div>
            </section>
        </div>
    </main>

    <footer class="sketch-footer">...</footer>
    <script src="script.js"></script>
</body>
</html>
```

### JavaScript Interactions
- Contact form submit handler: prevents default, shows success notification, resets form.
- Mobile menu and cart badge handlers run as usual.

---

## FILE: `style.css`

**Absolute Path:** `C:\Users\LENOVO\Downloads\Khoa-hoc-day-lam-giau-website\style.css`
**Total Lines:** 4,645

### Description
The single, monolithic stylesheet controlling the entire website's appearance. Uses CSS Custom Properties, Flexbox, CSS Grid, Media Queries, transitions, animations, and pseudo-elements. No CSS frameworks or preprocessors.

### CSS Custom Properties (Design Tokens)

```css
:root {
    --primary: #088178;        /* Primary teal/green color */
    --text-dark: #1a1a1a;      /* Dark text color */
    --bg-light: #f5f5f5;       /* Light gray background */
    --border-color: #cce7d0;   /* Light green border color */
    --shadow: 20px 20px 30px rgba(0, 0, 0, 0.02); /* Soft shadow */
}
```

### Font Imports

| Font | Source | Used For |
|------|--------|----------|
| **Spartan** (100-900) | Google Fonts | Primary body text |
| **Pacifico** (400) | Google Fonts | Logo, section titles, headings (handwritten style) |
| **Montserrat** (300-900) | Google Fonts | Banner headings, promotional text |
| **Roboto** (300,400,500,700) | Google Fonts | Default body font (`* { font-family: 'Roboto' }`) |

### Global Reset & Base Styles

```css
* { margin: 0; padding: 0; box-sizing: border-box; font-family: 'Roboto', sans-serif; }
body { width: 100%; }
.section-p1 { padding: 40px 80px; }
```

### Major Style Sections

#### 1. Header Styles (~50 lines)
- `#main-header`: Flexbox, `justify-content: space-between`, sticky positioning, `z-index: 100`, white background with subtle shadow
- `.header-center`: `flex: 1`, centers title with Pacifico font at 28px
- `.header-right`: Flex row, gap 20px, relative positioning for cart badge
- `#cart-count`: Absolute positioning, red background (#ff4444), 18px circle, `display: none` by default, shown via JS

#### 2. Hero Section (~40 lines)
- `#big-hero`: 100px/20px/60px padding, `overflow: hidden`
- `.monro-logo-bg`: 500px max-width, 0.15 opacity, 2px blur, transition 0.3s
- `.sketch-logo`: Pacifico 70px, -3deg rotation, text-shadow
- `.slogan`: 18px, uppercase, 2px letter-spacing

#### 3. Feature Boxes (~40 lines)
- `#feature`: Flexbox, `flex-wrap: wrap`
- `.fe-box`: 180px width, box-shadow, border, transition on hover
- Each feature box has a unique background color for its h6 element using `:nth-child()` selectors

#### 4. Horizontal Scroll / Bestsellers (~80 lines)
- `.book-container`: `display: flex`, `overflow-x: auto`, hidden scrollbar (`-ms-overflow-style: none`, `scrollbar-width: none`, `::-webkit-scrollbar { display: none }`)
- `.book-card`: 250px min-width, border, border-radius, hover shadow
- `.book-img img`: 250px height, `object-fit: cover`
- `.book-info h5`: `-webkit-line-clamp: 2` for text truncation

#### 5. Our Story (~30 lines)
- `.story-content`: Flexbox, `justify-content: space-between`, `flex-wrap: wrap`
- Responsive: `flex-direction: column-reverse` on mobile

#### 6. Newsletter (~30 lines)
- `.news-box`: Bordered box with `border-radius: 30px 10px 30px 10px`, flex layout
- `.form`: Flex row with gap, black button styling

#### 7. Footer (~50 lines)
- `.sketch-footer`: Flexbox, `justify-content: space-between`, 40px padding
- `.col`: `flex-direction: column` for stacked links
- Icons: flex row, 15px gap, hover color change to primary
- Payment methods section with inline flex

#### 8. Product Section (~50 lines)
- `#product1 .pro-container`: Flex-wrap, `justify-content: space-between`
- `.pro`: 23% width, min-width 250px, border, border-radius, hover shadow
- Cart icon: absolute positioning, bottom-right corner, 40px circle

#### 9. Banner Sections (~60 lines)
- `#sm-banner`: Flex row, wrap, 580px min-width per box, 350px height, background images with linear-gradient overlays
- `#banner3`: Flex row, 30% width each, 30vh height, background images
- Hover effect on banner buttons: background changes to primary color

#### 10. sproduct Styles (~100 lines)
- `.product-display`: `grid-template-columns: 1fr 1fr`, 40px gap
- `.product-image img`: 400px max-width, 500px height, `object-fit: contain`
- `.course-features`: `grid-template-columns: repeat(2, 1fr)`, light gray background
- `.course-info ul li`: Flex items, green checkmarks, bottom borders
- `.quantity`: 60px width, bordered input
- `.add-to-cart`: Green button, hover darkens

#### 11. Shop Page Styles (~80 lines)
- `.products-grid`: `grid-template-columns: repeat(auto-fill, minmax(250px, 1fr))`
- `.shop-item .product-img`: 350px height, hover zoom effect (`transform: scale(1.05)`)
- `.add-cart-btn`: Dark button, hover changes to primary color

#### 12. Cart Page Styles (~200 lines)
- `.cart-container`: `grid-template-columns: 1fr 380px`, 30px gap
- `.cart-item`: `grid-template-columns: 100px 1fr auto auto auto`, complex grid
- `.cart-summary-section`: `position: sticky`, `top: 100px`
- `.qty-btn`: 32px square, hover primary color
- `.checkout-btn`: Disabled state with gray background, `cursor: not-allowed`
- `.trust-badges`: 4 badge rows with icons

#### 13. Notification Toast (~40 lines)
- `.notification`: Fixed position, `top: 100px`, `right: 20px`, `z-index: 10000`
- Transform animation: `translateX(400px)` to `translateX(0)` with 0.3s ease
- `.notification.show`: Triggered by JS after 100ms delay
- `.notification.success`: Green left border (#22c55e)
- `.notification.info`: Blue left border (#3b82f6)

#### 14. Mobile Menu (~80 lines)
- `.mobile-menu`: Fixed, `left: -280px`, 280px width, `transition: left 0.3s ease`
- `.mobile-menu.active`: `left: 0`
- `.menu-overlay`: Fixed, full viewport, `rgba(0,0,0,0.5)`, opacity/visibility transition
- Nav links: flex row with icons, hover active state with left border highlight
- Social icons: 40px circles, hover primary color

#### 15. Account Page Styles (~300 lines)
- `.account-guest`: White card, rounded corners, shadow
- `.auth-options`: `grid-template-columns: repeat(2, 1fr)`
- `.auth-card`: Bordered card, centered text
- `.benefits-grid`: `grid-template-columns: repeat(4, 1fr)`
- `.account-logged`: `grid-template-columns: 280px 1fr`
- `.account-sidebar`: Sticky, `top: 100px`
- `.user-avatar`: 100px circle, centered
- `.account-nav a`: Hover/active with background and primary color
- `.help-grid`: `grid-template-columns: repeat(2, 1fr)`

#### 16. About Page Styles (~250 lines)
- `.about-hero`: Linear gradient, 80px padding, centered
- `.story-grid`: `grid-template-columns: 1fr 1.5fr`, 50px gap
- `.mv-grid`: `grid-template-columns: repeat(3, 1fr)`, hover lift effect
- `.instructors-grid`: `grid-template-columns: repeat(4, 1fr)`, hover shadow + lift
- `.stats-grid`: `grid-template-columns: repeat(4, 1fr)`, gradient background
- `.stat-number`: 48px font size

#### 17. Blog Page Styles (~100 lines)
- `.blog-grid`: `grid-template-columns: repeat(auto-fill, minmax(320px, 1fr))`
- `.blog-card`: White card, rounded, shadow, hover lift
- `.blog-card-img`: 200px height, centered icon
- `.blog-card-category`: Pill badge with primary color
- `-webkit-line-clamp` used on title (2 lines) and excerpt (3 lines)
- `.read-more-btn`: Green pill button

#### 18. Contact Page Styles (~100 lines)
- `.contact-container`: `grid-template-columns: 1fr 1fr`
- `.contact-form .form-group textarea`: `min-height: 150px`, `resize: vertical`
- `.contact-info-item`: Flex row, light gray background, rounded
- `.map-container`: 300px height, `border-radius: 12px`, iframe 100% width/height

#### 19. Wishlist Styles (~150 lines)
- `.wishlist-btn`: Absolute positioning on cards, 40px circle, white background
- `.wishlist-btn.active`: Red background (#ff4444), white icon
- `.wishlist-grid`: `grid-template-columns: repeat(auto-fill, minmax(250px, 1fr))`
- `.wishlist-item-img`: 250px height, hover zoom
- `.wishlist-item-remove`: Absolute positioning, red on hover
- `.wishlist-item-actions`: Flex row, two buttons

#### 20. Shop Filter Styles (~60 lines)
- `.shop-filters`: White card, 25px padding, rounded
- `.search-box`: Relative positioning, icon absolute right
- `.filter-box select`: Full width, bordered
- Responsive: flex-direction column on mobile

### CSS Techniques Used

| Technique | Usage |
|-----------|-------|
| **CSS Custom Properties** | 5 design tokens in `:root` |
| **Flexbox** | Headers, footers, navigation, feature boxes, banners, cart items, form layouts |
| **CSS Grid** | Product grids, course features, account layouts, stats, blog grid, instructor grid |
| **Media Queries** | 4 breakpoints: 799px, 477px, 360px, 1200px |
| **Transitions** | 0.3s ease on hover effects, 0.2s ease on quick interactions |
| **Transform** | Scale on hover (product images), translate (notification toast), translateY (button hover) |
| **-webkit-line-clamp** | Text truncation on course titles (2 lines) and blog excerpts (3 lines) |
| **Linear Gradients** | Hero sections, about hero, blog hero, contact hero, stats section |
| **Position Sticky** | Header (z-index: 100), cart summary sidebar, account sidebar |
| **Position Absolute** | Cart badge, wishlist buttons, cart icon on product cards, notification toast |
| **Pseudo-elements** | Scrollbar hiding (`::-webkit-scrollbar`) |
| **:nth-child()** | Unique background colors for feature boxes |
| **Object-fit** | `cover` for images, `contain` for product detail image |
| **overflow-x: auto** | Horizontal scrolling for bestsellers carousel |

---

## FILE: `script.js`

**Absolute Path:** `C:\Users\LENOVO\Downloads\Khoa-hoc-day-lam-giau-website\script.js`
**Total Lines:** 850

### Description
The single JavaScript file powering all interactive functionality across the website. Contains product data, cart management, wishlist management, shop filtering, account management, mobile menu, notifications, and dynamic content loading.

### Global Variables

| Variable | Type | Description |
|----------|------|-------------|
| `products` | Object | 15 course data objects keyed by ID (1-15) |
| `cart` | Array | Cart items array, loaded from `localStorage.getItem('cart')` or `[]` |
| `wishlist` | Array | Wishlist items array, loaded from `localStorage.getItem('wishlist')` or `[]` |
| `currentUser` | Object\|null | Current user object, loaded from `localStorage.getItem('currentUser')` or `null` |
| `bookContainer` | Element | `.book-container` element reference |
| `scrollStep` | Number | 1 (pixels per auto-scroll interval) |
| `scrollDelay` | Number | 20 (ms between auto-scroll steps) |
| `scrollInterval` | Timer | setInterval reference for auto-scroll |
| `categoryNames` | Object | Maps category slugs to Vietnamese display names |

### Function Reference

#### Data Layer
| Function | Lines | Purpose |
|----------|-------|---------|
| `products` (object) | 1-117 | 15 course objects with id, name, price (in thousands), image path, category, description |
| `categoryNames` (object) | ~520 | Maps 'all', 'tai-chinh', 'kinh-doanh', 'ky-nang-mem', 'phat-trien-ban-than' to Vietnamese names |

#### Product Detail Page
| Function | Lines | Purpose |
|----------|-------|---------|
| `loadProduct()` | ~125-160 | Runs ONLY on sproduct.html. Parses `?id=` URL param, populates title, price, image, description, breadcrumb from `products` object |
| `DOMContentLoaded: loadProduct` | ~163 | Runs `loadProduct()` on page load |

#### Auto-Scroll (Homepage)
| Function | Lines | Purpose |
|----------|-------|---------|
| `startAutoScroll()` | ~175-187 | Starts setInterval moving `.book-container` scrollLeft by `scrollStep` every `scrollDelay` ms. Loops back to 0 when reaching end |
| `bookContainer: mouseenter` | ~196-198 | Pauses auto-scroll on hover |
| `bookContainer: mouseleave` | ~199-201 | Resumes auto-scroll on mouse leave |
| `bookContainer: touchstart` | ~202-204 | Pauses auto-scroll on touch |
| `bookContainer: touchend` | ~205-207 | Resumes auto-scroll 2 seconds after touch ends |

#### Cart Management
| Function | Lines | Purpose |
|----------|-------|---------|
| `saveCart()` | ~220-223 | Saves `cart` array to `localStorage.setItem('cart')`, calls `updateCartCount()` |
| `updateCartCount()` | ~226-232 | Updates `#cart-count` badge text and visibility based on total items in cart |
| `addToCart(productId, quantity)` | ~235-258 | Adds product to cart (or increments quantity), saves, shows success notification |
| `removeFromCart(productId)` | ~261-265 | Filters product out of cart, saves, re-renders cart, shows info notification |
| `updateQuantity(productId, newQuantity)` | ~268-279 | Updates item quantity; if <= 0, removes item; otherwise saves and re-renders |
| `getCartTotals()` | ~282-288 | Returns {subtotal, shipping, total}. Shipping: 0 if subtotal >= 500,000₫, else 30,000₫ |
| `formatPrice(price)` | ~291-293 | Formats number as Vietnamese Dong: `price.toLocaleString('vi-VN') + '₫'` |
| `renderCart()` | ~296-340 | Renders cart items HTML into `#cart-items`. Handles empty cart state. Updates totals. Enables/disables checkout button |
| `showNotification(message, type)` | ~343-364 | Creates toast notification element, animates in with setTimeout, auto-removes after 3s |

#### Wishlist Management
| Function | Lines | Purpose |
|----------|-------|---------|
| `saveWishlist()` | ~375-378 | Saves `wishlist` array to `localStorage`, calls `updateWishlistButtons()` |
| `toggleWishlist(productId)` | ~381-405 | Adds/removes product from wishlist array, saves, re-renders if on account page, shows notification |
| `updateWishlistButtons()` | ~408-427 | Iterates all `.wishlist-btn` elements, parses productId from onclick attribute, sets active class and solid/regular heart icon |
| `renderWishlist()` | ~430-459 | Renders wishlist grid into `#wishlist-grid`. Shows empty state if empty. Each item has remove and "Add to Cart" buttons |
| `initWishlist()` | ~462-464 | Calls `updateWishlistButtons()` and `renderWishlist()` |

#### Shop Search & Filter
| Function | Lines | Purpose |
|----------|-------|---------|
| `renderShopProducts()` | ~474-530 | Filters products by search query and category. Renders HTML into `.products-grid`. Updates results count. Shows empty state if no matches |
| `initShopFilters()` | ~533-546 | Binds `input` event on `#search-input` and `change` event on `#category-filter` to call `renderShopProducts()` |

#### Account Management
| Function | Lines | Purpose |
|----------|-------|---------|
| `initAccountPage()` | ~555-575 | If on account page, checks `currentUser`, shows appropriate view, sets up login/register form handlers, sets up account navigation |
| `showGuestView()` | ~578-582 | Shows `#guest-view`, hides `#logged-view` |
| `showLoggedInView()` | ~585-596 | Hides guest view, shows logged view, populates user name/email in profile and settings form |
| `handleLogin(e)` | ~599-610 | Form submit handler. Creates user from email, saves to localStorage, shows notification, switches to logged view after 500ms |
| `handleRegister(e)` | ~613-626 | Form submit handler. Creates user from name+email, saves to localStorage, shows welcome notification, switches to logged view |
| `continueAsGuest()` | ~629-637 | Creates guest user object, saves to localStorage, shows notification, switches to logged view |
| `logout()` | ~640-646 | Confirms with user, clears `currentUser` from localStorage, shows notification, switches to guest view |
| `saveSettings()` | ~649-656 | Updates user name from settings form, saves to localStorage, updates display, shows notification |
| `setupAccountNav()` | ~659-680 | Binds click handlers to nav links. Switches active class and shows/hides corresponding `.content-section`. Triggers `renderWishlist()` when wishlist tab opens |

#### DOMContentLoaded Handler
| Lines | Purpose |
|-------|---------|
| ~684-770 | Main initialization block. Runs `updateCartCount()`, `renderCart()`, `initAccountPage()`, `initWishlist()`, `initShopFilters()`, `renderShopProducts()`. Sets up mobile menu (open/close/overlay/link clicks). Sets up add-to-cart button on sproduct.html. Sets up checkout button handler. Sets up contact form submit handler. |

### Event Listeners Registered

| Event | Target | Handler | Condition |
|-------|--------|---------|-----------|
| `click` | `#menu-btn` | Open mobile menu | If element exists |
| `click` | `#close-menu` | Close mobile menu | If element exists |
| `click` | `#menu-overlay` | Close mobile menu | If element exists |
| `click` | `.mobile-menu-nav a` | Close mobile menu | All links |
| `click` | `.add-to-cart` (sproduct) | Add to cart with quantity | If element exists |
| `click` | `#checkout-btn` | Checkout handler | If element exists |
| `submit` | `#contact-form` | Contact form handler | If element exists |
| `submit` | `#login-form` | `handleLogin()` | If on account page |
| `submit` | `#register-form` | `handleRegister()` | If on account page |
| `click` | `.account-nav a` | Tab switching | All nav links on account page |
| `input` | `#search-input` | `renderShopProducts()` | If on shop page |
| `change` | `#category-filter` | `renderShopProducts()` | If on shop page |
| `mouseenter` | `.book-container` | Clear scroll interval | If element exists |
| `mouseleave` | `.book-container` | Restart auto-scroll | If element exists |
| `touchstart` | `.book-container` | Clear scroll interval | If element exists |
| `touchend` | `.book-container` | Restart auto-scroll after 2s | If element exists |

### localStorage Usage

| Key | Type | Value | Set By | Read By |
|-----|------|-------|--------|---------|
| `cart` | JSON string | Array of `{id, name, price, image, quantity}` | `saveCart()` | `JSON.parse(localStorage.getItem('cart'))` on load |
| `wishlist` | JSON string | Array of `{id, name, price, image}` | `saveWishlist()` | `JSON.parse(localStorage.getItem('wishlist'))` on load |
| `currentUser` | JSON string | `{name, email, isGuest, enrolledCourses}` or `null` | `handleLogin()`, `handleRegister()`, `continueAsGuest()`, `saveSettings()`, `logout()` | `JSON.parse(localStorage.getItem('currentUser'))` on load |

### DOM Manipulation Summary

| Type | Description | Locations |
|------|-------------|-----------|
| **innerHTML** | Replaces entire HTML content | `renderCart()`, `renderShopProducts()`, `renderWishlist()` |
| **textContent** | Updates text content | `loadProduct()`, `updateCartCount()`, breadcrumb updates, user profile updates |
| **style.display** | Shows/hides elements | Guest/logged views, empty cart message, wishlist empty/grid, content sections, cart items |
| **classList.add/remove/toggle** | CSS class manipulation | Mobile menu active state, overlay active, wishlist buttons active, notification show |
| **src attribute** | Updates image source | `loadProduct()` updates product image |
| **document.title** | Updates page title | `loadProduct()` sets title to include product name |
| **createElement** | Creates new DOM element | `showNotification()` creates toast notification div |
| **appendChild/remove** | Adds/removes elements | `showNotification()` appends toast to body, removes after timeout |
| **body.style.overflow** | Controls scroll | Sets `'hidden'` when mobile menu opens, `''` when closed |

---

## ASSETS: PRODUCT IMAGES

**Absolute Path:** `C:\Users\LENOVO\Downloads\Khoa-hoc-day-lam-giau-website\src\image-product\`

### File List (15 files)

| File | Course ID | Course Name | Price |
|------|-----------|-------------|-------|
| `1.png` | 1 | Bí mật làm giàu của các tỷ phú | 599,000₫ |
| `2.png` | 2 | Thiên văn học và các làm giàu bí ẩn | 649,000₫ |
| `3.png` | 3 | Sổ tay về cách giao tiếp với người giàu ft. Xuân Tóc Đỏ | 399,000₫ |
| `4.png` | 4 | Giàu không khó khi ta chịu khó | 367,000₫ |
| `5.png` | 5 | Thói quen hằng ngày của giới tài phiệt | 499,000₫ |
| `6.png` | 6 | Mở rộng đời sống vật chất như mở rộng ví tiền | 799,000₫ |
| `7.png` | 7 | Tết này con bận đi làm | 199,000₫ |
| `8.png` | 8 | Mặt dày nhưng ví cũng dày | 799,000₫ |
| `9.png` | 9 | (LIMITED EDITION) Từ điển bách khoa dành riêng cho giới tài phiệt | 1,499,000₫ |
| `10.png` | 10 | Bắt đầu một chặng đường dài chính là bước đi đầu tiên | 299,000₫ |
| `11.png` | 11 | Ánh sáng cuối con đường chính là gì với giới tài phiệt? | 459,000₫ |
| `12.png` | 12 | Khi tiền trở thành công cụ chứ không phải mục tiêu | 529,000₫ |
| `13.png` | 13 | Những thương vụ thay đổi cuộc đời | 649,000₫ |
| `14.png` | 14 | Tư duy của người giàu: Không phải ai cũng nhìn thấy cơ hội | 299,000₫ |
| `15.png` | 15 | Con đường đến tự do tài chính | 399,000₫ |

### Usage
- All images are referenced via `src/image-product/[id].png` in HTML and JavaScript
- Used in: shop.html product grid, sproduct.html detail view, cart.html item thumbnails, wishlist grid, related products, bestsellers on homepage, new products on homepage
- Display heights vary by context: 350px (shop), 500px (detail), 200px (related), 140px (cart), 250px (bestsellers)

---

## ASSETS: LOGO

**Absolute Path:** `C:\Users\LENOVO\Downloads\Khoa-hoc-day-lam-giau-website\src\logo\shop-logo.png`

### Usage
| Location | Context | Styling |
|----------|---------|---------|
| `index.html` - Hero section | Background image behind hero text | Blurred (2px), 15% opacity, 500px max-width |
| `index.html` - Our Story section | Side image | 200px width |
| `about.html` - Our Story section | Main image | 300px max-width, rounded, shadow |

---

## LOCALSTORAGE REFERENCE

### `cart`
```javascript
// Structure
[
  {
    id: 1,              // Number, product ID
    name: "Bí mật làm giàu của các tỷ phú", // String
    price: 599,         // Number, in thousands (599 = 599,000₫)
    image: "src/image-product/1.png", // String, relative path
    quantity: 2         // Number, minimum 1
  }
]
```
- **Read:** `JSON.parse(localStorage.getItem('cart')) || []` (on page load, line ~217)
- **Written:** `localStorage.setItem('cart', JSON.stringify(cart))` in `saveCart()` (line ~221)
- **Cleared:** Never programmatically cleared. Only modified via `removeFromCart()` which filters the array.

### `wishlist`
```javascript
// Structure
[
  {
    id: 3,              // Number, product ID
    name: "Sổ tay về cách giao tiếp với người giàu...", // String
    price: 399,         // Number, in thousands
    image: "src/image-product/3.png" // String, relative path
  }
]
```
- **Read:** `JSON.parse(localStorage.getItem('wishlist')) || []` (on page load)
- **Written:** `localStorage.setItem('wishlist', JSON.stringify(wishlist))` in `saveWishlist()`
- **Cleared:** Never programmatically cleared. Only modified via `toggleWishlist()`.

### `currentUser`
```javascript
// Structure (logged-in user)
{
  name: "Nguyễn Văn A",    // String
  email: "user@email.com", // String
  isGuest: false,          // Boolean
  enrolledCourses: []      // Array (reserved for future use)
}

// Structure (guest)
{
  name: "Khách",
  email: "guest@monro.edu.vn",
  isGuest: true,
  enrolledCourses: []
}
```
- **Read:** `JSON.parse(localStorage.getItem('currentUser')) || null` (on page load)
- **Written:** In `handleLogin()`, `handleRegister()`, `continueAsGuest()`, `saveSettings()`
- **Cleared:** `localStorage.removeItem('currentUser')` in `logout()`

---

## RESPONSIVE BREAKPOINTS

### Breakpoint 1: `@media (min-width: 1200px)` -- Large Desktop
- Section padding: 60px 80px
- Product width: 22%
- Product grid: `auto-fill, minmax(280px, 1fr)`
- Cart container max-width: 1400px

### Breakpoint 2: `@media (max-width: 1000px)` -- Tablet Landscape
- SM Banner: full width, 300px height
- Banner 3: full width boxes

### Breakpoint 3: `@media (max-width: 999px)` -- Tablet
- Auth options: 1 column
- Benefits grid: 2 columns
- Account logged-in: 1 column
- Cart container: 1 column
- Cart summary: not sticky
- Cart items: simplified grid (80px image + details)
- Help grid: 2 columns

### Breakpoint 4: `@media (max-width: 799px)` -- Tablet Portrait / Large Mobile
- **Hamburger menu appears** (`#menu-btn { display: block }`)
- Section padding: 40px 40px
- Feature boxes: centered layout, 30% width each
- Product container: centered
- Our Story: column-reverse
- Newsletter: column layout
- Product display: 1 column
- Product cards: 45% width
- Banner 3: full width, 25vh height
- Shop grid: `auto-fill, minmax(200px, 1fr)`
- Shop images: 280px height
- Blog grid: `auto-fill, minmax(280px, 1fr)`
- About hero: 60px padding, 36px title
- About story grid: 1 column
- About MV grid: 1 column
- About instructors: 2 columns
- About stats: 2 columns
- Contact container: 1 column
- Course features: 1 column

### Breakpoint 5: `@media (max-width: 579px)`
- Benefits grid: 1 column
- Help grid: 1 column

### Breakpoint 6: `@media (max-width: 480px)` -- Small Mobile
- Cart page: 15px padding
- Cart items: single column, centered
- Cart item image: 80px x 110px
- Shop grid: `repeat(2, 1fr)` with 10px gap
- Shop images: 200px height
- Product info text: 12px
- Add to cart button: smaller padding

### Breakpoint 7: `@media (max-width: 477px)` -- Mobile
- Section padding: 20px 15px
- Header: 12px 15px padding
- Logo: 32px font size
- Feature boxes: 45% width
- Product cards: 100% width
- Product display: gap 20px
- Purchase actions: column layout
- Add to cart: full width
- Cart items: single column
- Cart summary: 20px 15px padding
- Notification: full width (left: 15px, right: 15px)
- Mobile menu: full width (100%)
- Auth cards: 20px 15px padding
- Benefits grid: 1 column
- Help grid: 1 column
- About hero: 40px 20px padding, 28px title
- Blog grid: 1 column
- Blog images: 180px height
- Contact: 70px 15px 20px padding

### Breakpoint 8: `@media (max-width: 360px)` -- Very Small Mobile
- Section padding: 15px 10px
- Logo: 28px font size
- Feature boxes: 100% width
- Our Story: 13px font
- Product cards: 180px min-width

### Typography Scale

| Element | Desktop (>799px) | Tablet (<=799px) | Mobile (<=477px) | Small (<=360px) |
|---------|-----------------|-----------------|-----------------|-----------------|
| .sketch-logo | 70px | 42px | 32px | 28px |
| .section-title | 40px | 32px | 26px | 22px |
| .shop-header h1 | 42px | 32px | -- | -- |
| .product-details h1 | 32px | 26px | 22px | -- |
| .price | 26px | 22px | 20px | -- |
| .about-hero h1 | 48px | 36px | 28px | 24px |
| .blog-hero h1 | 42px | 32px | 26px | -- |
| .stat-number | 48px | 36px | 32px | 28px |
| Body text | 16px | 14px | 13px | -- |

---

## EVENT LISTENERS

### Page Load Events (DOMContentLoaded)
All registered in the single `document.addEventListener('DOMContentLoaded', ...)` block:

1. `updateCartCount()` -- Always runs
2. `renderCart()` -- Always runs
3. `initAccountPage()` -- Only effective on account.html
4. `initWishlist()` -- Always runs
5. `initShopFilters()` -- Only effective on shop.html
6. `renderShopProducts()` -- Only effective on shop.html
7. Mobile menu button setup
8. Close menu button setup
9. Overlay click handler
10. Mobile menu nav link close handlers
11. Add-to-cart button on sproduct.html
12. Add-to-cart buttons on shop.html
13. Checkout button on cart.html

### Inline Event Handlers (HTML attributes)

| Element | Handler | Location |
|---------|---------|----------|
| `.book-card` onclick | `window.location.href='sproduct.html?id=X'` | index.html (6 cards) |
| `.pro` onclick | `window.location.href='sproduct.html?id=X'` | index.html (4 cards) |
| `.wishlist-btn` onclick | `event.stopPropagation(); toggleWishlist(X)` | index.html, shop.html |
| `#sm-banner button` onclick | `window.location.href='shop.html'` | index.html (2 buttons) |
| `continueAsGuest()` onclick | `continueAsGuest()` | account.html |
| `logout()` onclick | `logout()` | account.html |
| `saveSettings()` onclick | `saveSettings()` | account.html |
| `qty-btn` onclick | `updateQuantity(X, Y)` | cart.html (via innerHTML from renderCart) |
| `cart-item input` onchange | `updateQuantity(X, parseInt(this.value))` | cart.html (via innerHTML) |
| `.remove-item` onclick | `removeFromCart(X)` | cart.html (via innerHTML) |
| `.product-card` onclick | `window.location.href='sproduct.html?id=X'` | shop.html (via innerHTML) |
| `.add-cart-btn` onclick | `event.stopPropagation(); addToCart(X, 1)` | shop.html (via innerHTML) |
| `.wishlist-item-remove` onclick | `toggleWishlist(X); event.stopPropagation()` | account.html (via innerHTML) |
| `.add-to-cart-btn` onclick | `addToCart(X, 1)` | account.html (via innerHTML) |

### Programmatic Event Listeners (addEventListener in script.js)

| Event | Target | Handler | Function |
|-------|--------|---------|----------|
| `click` | `#menu-btn` | Open mobile menu | Sets `#mobile-menu` and `#menu-overlay` class `active`, `body.style.overflow = 'hidden'` |
| `click` | `#close-menu` | Close mobile menu | `closeMenu()` function |
| `click` | `#menu-overlay` | Close mobile menu | `closeMenu()` function |
| `click` | `.mobile-menu-nav a` (each) | Close mobile menu | `closeMenu()` function |
| `click` | `.add-to-cart` (sproduct) | Add to cart | Reads `?id=` param and quantity, calls `addToCart()` |
| `click` | `#checkout-btn` | Checkout | Validates cart, shows alert |
| `submit` | `#contact-form` | Contact form | Prevents default, shows notification, resets form |
| `submit` | `#login-form` | Login | `handleLogin()` |
| `submit` | `#register-form` | Register | `handleRegister()` |
| `click` | `.account-nav a` (each) | Tab switching | Switches active nav class and content section visibility |
| `input` | `#search-input` | Search filter | `renderShopProducts()` |
| `change` | `#category-filter` | Category filter | `renderShopProducts()` |
| `mouseenter` | `.book-container` | Pause auto-scroll | `clearInterval(scrollInterval)` |
| `mouseleave` | `.book-container` | Resume auto-scroll | `startAutoScroll()` |
| `touchstart` | `.book-container` | Pause auto-scroll | `clearInterval(scrollInterval)` |
| `touchend` | `.book-container` | Resume after 2s | `setTimeout(startAutoScroll, 2000)` |

---

## PRODUCT CATALOG

### Complete Product Data

| ID | Name | Price (thousands) | Price (₫) | Category | Image |
|----|------|-------------------|-----------|----------|-------|
| 1 | Bí mật làm giàu của các tỷ phú | 599 | 599,000₫ | tai-chinh | src/image-product/1.png |
| 2 | Thiên văn học và các làm giàu bí ẩn | 649 | 649,000₫ | kinh-doanh | src/image-product/2.png |
| 3 | Sổ tay về cách giao tiếp với người giàu ft. Xuân Tóc Đỏ | 399 | 399,000₫ | ky-nang-mem | src/image-product/3.png |
| 4 | Giàu không khó khi ta chịu khó | 367 | 367,000₫ | phat-trien-ban-than | src/image-product/4.png |
| 5 | Thói quen hằng ngày của giới tài phiệt | 499 | 499,000₫ | phat-trien-ban-than | src/image-product/5.png |
| 6 | Mở rộng đời sống vật chất như mở rộng ví tiền | 799 | 799,000₫ | tai-chinh | src/image-product/6.png |
| 7 | Tết này con bận đi làm | 199 | 199,000₫ | phat-trien-ban-than | src/image-product/7.png |
| 8 | Mặt dày nhưng ví cũng dày | 799 | 799,000₫ | phat-trien-ban-than | src/image-product/8.png |
| 9 | (LIMITED EDITION) Từ điển bách khoa dành riêng cho giới tài phiệt | 1,499 | 1,499,000₫ | tai-chinh | src/image-product/9.png |
| 10 | Bắt đầu một chặng đường dài chính là bước đi đầu tiên | 299 | 299,000₫ | phat-trien-ban-than | src/image-product/10.png |
| 11 | Ánh sáng cuối con đường chính là gì với giới tài phiệt? | 459 | 459,000₫ | phat-trien-ban-than | src/image-product/11.png |
| 12 | Khi tiền trở thành công cụ chứ không phải mục tiêu | 529 | 529,000₫ | tai-chinh | src/image-product/12.png |
| 13 | Những thương vụ thay đổi cuộc đời | 649 | 649,000₫ | kinh-doanh | src/image-product/13.png |
| 14 | Tư duy của người giàu: Không phải ai cũng nhìn thấy cơ hội | 299 | 299,000₫ | phat-trien-ban-than | src/image-product/14.png |
| 15 | Con đường đến tự do tài chính | 399 | 399,000₫ | tai-chinh | src/image-product/15.png |

### Category Distribution

| Category | Vietnamese | Count | IDs |
|----------|-----------|-------|-----|
| tai-chinh | Tài Chính | 5 | 1, 6, 9, 12, 15 |
| kinh-doanh | Kinh Doanh | 2 | 2, 13 |
| ky-nang-mem | Kỹ Năng Mềm | 1 | 3 |
| phat-trien-ban-than | Phát Triển Bản Thân | 7 | 4, 5, 7, 8, 10, 11, 14 |

### Price Range
- **Cheapest:** #7 "Tết này con bận đi làm" -- 199,000₫
- **Most Expensive:** #9 "(LIMITED EDITION) Từ điển bách khoa" -- 1,499,000₫
- **Average Price:** ~569,000₫

---

## ADDITIONAL DOCUMENTATION FILES

The project also contains these supplementary documentation files:

| File | Absolute Path | Purpose |
|------|--------------|---------|
| `README.md` | `C:\Users\LENOVO\Downloads\Khoa-hoc-day-lam-giau-website\README.md` | Main project README with team info, features list, setup instructions |
| `CART_FEATURES.md` | `C:\Users\LENOVO\Downloads\Khoa-hoc-day-lam-giau-website\CART_FEATURES.md` | Detailed cart system documentation |
| `COURSE_CONVERSION.md` | `C:\Users\LENOVO\Downloads\Khoa-hoc-day-lam-giau-website\COURSE_CONVERSION.md` | Documentation of the bookstore-to-course-platform conversion |
| `IMAGE_MIGRATION.md` | `C:\Users\LENOVO\Downloads\Khoa-hoc-day-lam-giau-website\IMAGE_MIGRATION.md` | Image path organization and migration documentation |
| `SHOP_IMPLEMENTATION.md` | `C:\Users\LENOVO\Downloads\Khoa-hoc-day-lam-giau-website\SHOP_IMPLEMENTATION.md` | Shop page implementation details |
| `RESPONSIVE_IMPLEMENTATION.md` | `C:\Users\LENOVO\Downloads\Khoa-hoc-day-lam-giau-website\RESPONSIVE_IMPLEMENTATION.md` | Responsive design implementation documentation |
| `Info.docx` | `C:\Users\LENOVO\Downloads\Khoa-hoc-day-lam-giau-website\Info.docx` | Project information document (Word format) |

---

## QUICK REFERENCE: PAGE DEPENDENCIES

| Page | Uses `loadProduct()` | Uses `renderCart()` | Uses `renderShopProducts()` | Uses `renderWishlist()` | Uses `initAccountPage()` | Has Mobile Menu |
|------|---------------------|---------------------|---------------------------|------------------------|-------------------------|----------------|
| index.html | No | Yes (badge only) | No | Yes (buttons) | No | Yes |
| shop.html | No | Yes (badge only) | Yes | Yes (buttons) | No | Yes |
| sproduct.html | Yes | Yes (badge only) | No | No | No | Yes |
| cart.html | No | Yes (full) | No | No | No | No |
| account.html | No | Yes (badge only) | No | Yes (full) | Yes | Yes |
| about.html | No | Yes (badge only) | No | No | No | Yes |
| blog.html | No | Yes (badge only) | No | No | No | Yes |
| contact.html | No | Yes (badge only) | No | No | No | Yes |

---

**End of DOCUMENTATION.md**

*Generated for the Monro Academy Vietnamese e-learning course platform. All file paths are absolute. Last reviewed: April 6, 2026.*
