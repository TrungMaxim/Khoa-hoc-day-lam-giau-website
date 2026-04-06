# TÀI LIỆU KỸ THUẬT - Website Monro Academy

> **Tài liệu Tham khảo Kỹ thuật Hoàn chỉnh** cho mọi file trong nền tảng thương mại điện tử khóa học Monro Academy. Tài liệu này bao gồm cấu trúc HTML, kỹ thuật CSS, logic JavaScript, cách sử dụng localStorage, event listeners, responsive breakpoints và DOM manipulation trên tất cả các file trong dự án.

---

## MỤC LỤC

1. [Tổng Quan Dự Án](#tong-quan-du-an)
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
12. [Assets: Ảnh Sản Phẩm](#assets-anh-san-pham)
13. [Assets: Logo](#assets-logo)
14. [localStorage - Khóa & Cấu Trúc Dữ Liệu](#localstorage-reference)
15. [Tổng Kết Responsive Breakpoints](#responsive-breakpoints)
16. [Tất Cả Event Listeners](#event-listeners)
17. [Danh Mục Sản Phẩm](#product-catalog)

---

## TỔNG QUAN DỰ ÁN

**Monro Academy** là một website thương mại điện tử tĩnh bằng tiếng Việt bán các khóa học làm giàu và nội dung phát triển bản thân. Được xây dựng như một đồ án học tập bởi 5 học sinh lớp 12T1, đây là ứng dụng thuần HTML/CSS/JavaScript với **không server, không framework, và không có build tools**. Tất cả lưu trữ dữ liệu được xử lý qua `localStorage`.

**Thống Kê Chính:**
- **8 trang HTML** (index, shop, sproduct, cart, account, about, blog, contact)
- **1 file CSS** (`style.css` -- 4645 dòng)
- **1 file JavaScript** (`script.js` -- 850 dòng)
- **15 ảnh sản phẩm** (`src/image-product/1.png` đến `15.png`)
- **1 logo** (`src/logo/shop-logo.png`)

**Công Nghệ:**
- HTML5 (semantic markup)
- CSS3 (Flexbox, Grid, CSS Custom Properties, Media Queries, Animations)
- JavaScript ES6+ (const/let, arrow functions, template literals, modules pattern)
- Font Awesome 6 (thư viện icon qua CDN)
- Google Fonts (Pacifico, Spartan, Montserrat, Roboto)

---

## FILE: `index.html`

**Đường Dẫn Tuyệt Đối:** `C:\Users\LENOVO\Downloads\Khoa-hoc-day-lam-giau-website\index.html`

### Mô Tả
Trang chủ đóng vai trò là landing page chính. Giới thiệu khách hàng đến với Monro Academy thông qua banner hero, các điểm nổi bật, khóa học bán chạy nhất, banner khuyến mãi và form đăng ký newsletter. Đây là trang có mật độ nội dung dày đặc nhất trên website.

### Các Tính Năng

| Tính Năng | Mô Tả |
|-----------|-------|
| **Header Cố Định** | Bố cục 3 cột: menu hamburger (trái), icon shop/giỏ hàng/người dùng (phải). Luôn cố định ở trên cùng khi cuộn trang. |
| **Banner Hero Lớn** | Section full-width với ảnh logo nền mờ và tiêu đề "HỌC VIỆN LÀM GIÀU" kèm slogan "Tri thức dẫn lối thành công". |
| **6 Ô Tính Năng** | 6 ô icon thể hiện lợi ích nền tảng (Truy Cập Trọn Đời, Học Online 24/7, Tiết Kiệm 90%, Ưu Đãi Đặc Biệt, Cam Kết Hiệu Quả, Hỗ Trợ 24/7). |
| **Giới Thiệu Ngắn** | Đoạn văn ngắn giới thiệu về nền tảng. |
| **Khóa Học Bán Chạy (Cuộn Ngang)** | 6 thẻ khóa học trong container cuộn ngang với animation tự động cuộn. Mỗi thẻ có nút wishlist trái tim, ảnh khóa học, tiêu đề, xếp hạng sao, giá và nút "Ghi Danh Ngay". |
| **Câu Chuyện Của Chúng Tôi** | Section 2 cột (văn bản + ảnh logo) với link "Tìm Hiểu Thêm" dẫn đến about.html. |
| **Lưới Khóa Học Mới** | 4 thẻ khóa học trong bố cục flex-wrap grid với nút wishlist và icon giỏ hàng. |
| **Banner Khuyến Mãi** | 2 section banner: SM Banner (2 hộp với khuyến mãi "Mua 1 tặng 1" và "Học kỳ mới") và Banner 3 (3 hộp cho danh mục Kỹ Năng Mềm, Tài Chính, Kinh Doanh). |
| **Newsletter** | Form đăng ký email với thiết kế khung viền. |
| **Footer (4 cột)** | Link hỗ trợ, Liên Kết Nhanh, Thông Tin Liên Hệ (địa chỉ, số điện thoại, email, giờ làm), Icon mạng xã hội (Facebook, Twitter, Instagram, Pinterest, TikTok, YouTube), Icon phương thức thanh toán (Visa, Mastercard, PayPal). |
| **Menu Trượt Mobile** | Điều hướng trượt ra từ hamburger với 3 phần: điều hướng chính, công cụ tài khoản, footer với link social. |

### Cấu Trúc HTML

```html
<!DOCTYPE html>
<html lang="vi">
<head>
    <!-- Meta, viewport, title -->
    <!-- CSS ngoài: style.css -->
    <!-- CDN: Font Awesome 6.0.0 -->
    <!-- CDN: Google Fonts (Pacifico, Spartan, Montserrat) -->
</head>
<body>
    <header id="main-header">          <!-- Header cố định -->
        <div class="header-left">      <!-- Nút menu hamburger -->
        <div class="header-right">     <!-- Icon Shop, Giỏ hàng (với badge #cart-count), User -->
    </header>

    <section id="big-hero">            <!-- Hero với nền logo mờ -->
        <div class="big-hero-content">
            <img class="monro-logo-bg"> <!-- Logo mờ, trong suốt -->
            <div class="big-hero-text"> <!-- Tiêu đề đè lên trên -->
                <h1 class="sketch-logo">
                <p class="slogan">
    </section>

    <section id="feature" class="section-p1"> <!-- 6 ô tính năng -->
        <div class="fe-box"> x6
    </section>

    <section id="about-intro">         <!-- Đoạn giới thiệu ngắn -->
    </section>

    <section id="recommendations">     <!-- Khóa học bán chạy cuộn ngang -->
        <div class="book-container">   <!-- overflow-x: auto, tự động cuộn qua JS -->
            <div class="book-card" onclick="window.location.href='sproduct.html?id=3'"> x6
                <button class="wishlist-btn" onclick="event.stopPropagation(); toggleWishlist(3)">
                <div class="book-img"><img></div>
                <div class="book-info"><h5>, <div class="stars">, <h4>, <button></div>
    </section>

    <section id="our-story">          <!-- Câu chuyện 2 cột -->
        <div class="story-content">
            <div class="story-text"><h3>, <p>, <a class="read-more"></div>
            <div class="story-image"><img></div>
    </section>

    <section id="product1" class="section-p1"> <!-- Lưới khóa học mới -->
        <div class="pro-container">    <!-- flex-wrap -->
            <div class="pro" onclick="window.location.href='sproduct.html?id=13'"> x4
                <button class="wishlist-btn">
                <img>
                <div class="des"><span>, <h5>, <div class="stars">, <h4></div>
                <a><i class="cart"></i></a>
    </section>

    <section id="sm-banner" class="section-p1"> <!-- 2 banner khuyến mãi -->
        <div class="banner-box">
        <div class="banner-box banner-box2">
    </section>

    <section id="banner3">            <!-- 3 banner danh mục -->
        <div class="banner-box"> x3
    </section>

    <section id="newsletter-sketch">  <!-- Form newsletter -->
        <div class="news-box">
            <h4>
            <form class="form"><input>, <button></form>
    </section>

    <footer class="sketch-footer">    <!-- Footer 4 cột -->
        <div class="col"> x4
    </footer>

    <div class="menu-overlay" id="menu-overlay"></div> <!-- Overlay tối cho menu mobile -->
    <div class="mobile-menu" id="mobile-menu">         <!-- Điều hướng trượt trên mobile -->
        <div class="mobile-menu-header"><h3>, <button id="close-menu"></div>
        <nav class="mobile-menu-nav"><a> x8 + <div class="menu-divider"> x2</nav>
        <div class="mobile-menu-footer"><p>, <div class="mobile-menu-social"></div>
    </div>

    <script src="script.js"></script>
</body>
</html>
```

### Các Phần Tử Semantic Được Sử Dụng
- `<header>`, `<main>` (ngầm định qua section), `<footer>`, `<section>`, `<nav>`, `<article>` (ngầm định cho card)
- Thuộc tính `id` cho tất cả section chính (`big-hero`, `feature`, `recommendations`, `our-story`, `product1`, `sm-banner`, `banner3`, `newsletter-sketch`)
- `class="section-p1"` cho padding section đồng nhất

### Tương Tác JavaScript Trên Trang Này
- `loadProduct()` -- Có kiểm tra; KHÔNG chạy trên trang này (kiểm tra `.product-display`)
- Tự động cuộn `.book-container` -- Chỉ chạy nếu `.book-container` tồn tại
- `updateCartCount()` -- Chạy khi DOMContentLoaded
- `updateWishlistButtons()` -- Chạy khi DOMContentLoaded
- Menu mobile: `#menu-btn` click để mở, `#close-menu` và `#menu-overlay` click để đóng
- Mỗi `.book-card` có inline `onclick` để chuyển hướng đến `sproduct.html?id=X`
- Mỗi `.wishlist-btn` có inline `onclick="event.stopPropagation(); toggleWishlist(X)"`

---

## FILE: `shop.html`

**Đường Dẫn Tuyệt Đối:** `C:\Users\LENOVO\Downloads\Khoa-hoc-day-lam-giau-website\shop.html`

### Mô Tả
Trang danh sách tất cả khóa học. Hiển thị 15 khóa học trong bố cục CSS Grid responsive với chức năng tìm kiếm và lọc theo danh mục. Sản phẩm được render động bởi JavaScript.

### Các Tính Năng

| Tính Năng | Mô Tả |
|-----------|-------|
| **Header Với Nút Quay Lại** | Trái: mũi tên quay lại index.html, Giữa: tiêu đề "Khóa Học", Phải: icon chuông thông báo, icon giỏ hàng (với badge), icon người dùng. |
| **Breadcrumb** | "Trang Chủ / Tất Cả Khóa Học" |
| **Header Shop** | Tiêu đề lớn "Tất Cả Khóa Học" với phụ đề trên nền xám nhạt. |
| **Ô Tìm Kiếm** | Input text với icon kính lúp. Lọc sản phẩm theo thời gian thực với sự kiện `input`. |
| **Lọc Theo Danh Mục** | Dropdown `<select>` với các tùy chọn: Tất Cả, Tài Chính, Kinh Doanh, Kỹ Năng Mềm, Phát Triển Bản Thân. Lọc với sự kiện `change`. |
| **Bộ Đếm Kết Quả** | Text động hiển thị "Hiển thị **N** khóa học" cập nhật khi bộ lọc thay đổi. |
| **Lưới Sản Phẩm** | Bố cục CSS Grid `auto-fill, minmax(250px, 1fr)`. Được render động bởi `renderShopProducts()`. Mỗi thẻ có nút wishlist, ảnh, tên, sao, giá và nút "Ghi Danh Ngay". |
| **Trạng Thái Rỗng** | Khi không có sản phẩm phù hợp, hiển thị icon tìm kiếm với thông báo "Không tìm thấy khóa học nào". |
| **Menu Mobile** | Menu trượt giống các trang khác. |

### Cấu Trúc HTML

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

    <!-- Menu mobile (cấu trúc giống index.html) -->
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
                <!-- Được fill động bởi renderShopProducts() -->
            </div>
        </section>
    </main>

    <footer class="sketch-footer">...</footer>
    <script src="script.js"></script>
</body>
</html>
```

### Tương Tác JavaScript
- `renderShopProducts()` -- Lọc và render 15 sản phẩm vào `.products-grid`
- `initShopFilters()` -- Gán sự kiện `input` cho `#search-input` và `change` cho `#category-filter`
- `updateCartCount()` -- Cập nhật badge giỏ hàng
- `updateWishlistButtons()` -- Cập nhật icon trái tim trên nút wishlist
- Sản phẩm được render từ object `products` trong script.js dùng `Object.values(products).filter()`

---

## FILE: `sproduct.html`

**Đường Dẫn Tuyệt Đối:** `C:\Users\LENOVO\Downloads\Khoa-hoc-day-lam-giau-website\sproduct.html`

### Mô Tả
Trang chi tiết sản phẩm đơn. Tải động dữ liệu khóa học dựa trên tham số URL `?id=`. Hiển thị ảnh khóa học, tên, giá, danh sách tính năng, mô tả, thông tin chương trình học và 12 khóa học liên quan.

### Các Tính Năng

| Tính Năng | Mô Tả |
|-----------|-------|
| **Tải Nội Dung Động** | JavaScript đọc `?id=` từ URL và điền tất cả trường (tiêu đề, giá, ảnh, mô tả, breadcrumb) từ object `products`. |
| **Breadcrumb** | "Trang Chủ / Cửa Hàng / [Tên Khóa Học Động]" -- phần tên khóa học được cập nhật bởi JS qua `#product-name-breadcrumb`. |
| **Ảnh Sản Phẩm** | Ảnh lớn (400x500px) với nền trắng và góc bo tròn. Nguồn ảnh được cập nhật bởi JS. |
| **Chi Tiết Sản Phẩm** | Tên khóa học (H1 động), giá (động, màu xanh), lưới tính năng khóa học (4 mục), input số lượng (readonly, mặc định 1), nút thêm vào giỏ hàng "Ghi Danh Ngay". |
| **Lưới Tính Năng Khóa Học** | Grid 2x2 hiển thị: Truy cập trọn đời, Học online 24/7, Chứng chỉ hoàn thành, Cập nhật miễn phí. Mỗi mục có icon Font Awesome. |
| **Section Nội Dung Khóa Học** | Danh sách 6 điểm nổi bật với dấu tích xanh: video bài giảng, tài liệu tải về, bài tập thực hành, quiz, hỗ trợ giảng viên, cộng đồng học viên. |
| **Sản Phẩm Liên Quan** | 12 thẻ sản phẩm cứng link đến các trang `sproduct.html?id=X` khác. Tất cả hiển thị ảnh (cao 200px), tên và giá. |

### Cấu Trúc HTML

```html
<!DOCTYPE html>
<html lang="vi">
<head><!-- Meta, style.css, Font Awesome, Google Fonts --></head>
<body>
    <header>  <!-- Lưu ý: không có id trên header này (khác với trang khác) -->
        <div class="header-left"><i class="fa-bars" id="menu-btn"></i></div>
        <div class="header-right">
            <a href="shop.html"><i class="fa-store"></i></a>
            <a href="cart.html"><i class="fa-cart-shopping"></i><span id="cart-count">0</span></a>
            <a href="account.html"><i class="fa-user"></i></a>
        </div>
    </header>

    <!-- Menu mobile -->
    <div class="menu-overlay" id="menu-overlay"></div>
    <div class="mobile-menu" id="mobile-menu">...</div>

    <main class="container">
        <nav class="breadcrumb">
            <a href="index.html">Trang Chủ</a> /
            <a href="shop.html">Cửa Hàng</a> /
            <span id="product-name-breadcrumb">Chi Tiết</span>
        </nav>

        <section class="product-display"> <!-- Grid 2 cột -->
            <div class="product-image">
                <img src="src/image-product/1.png" alt="Khóa Học Image"> <!-- Mặc định, được JS cập nhật -->
            </div>

            <div class="product-details">
                <h1>Tên Khóa Học</h1> <!-- Được JS cập nhật -->
                <p class="price"></p>  <!-- Được JS cập nhật -->

                <div class="course-features"> <!-- Grid 2x2 -->
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
                    <p></p> <!-- Được JS cập nhật -->
                </div>

                <div class="course-info">
                    <h4>Nội Dung Khóa Học</h4>
                    <ul> <!-- 6 mục với icon tích -->
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
                <!-- 12 thẻ sản phẩm cứng -->
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

### Tương Tác JavaScript
- `loadProduct()` -- CHỈ chạy trên trang này (kiểm tra phần tử `.product-display`). Parse tham số `?id=`, mặc định là 1. Cập nhật: `document.title`, `#product-name-breadcrumb`, `.product-image img` src/alt, `.product-details h1`, `.price`, `.description p`.
- Sự kiện click nút thêm vào giỏ hàng: đọc `?id=` và số lượng, gọi `addToCart(productId, quantity)`
- `updateCartCount()` -- Chạy khi DOMContentLoaded

---

## FILE: `cart.html`

**Đường Dẫn Tuyệt Đối:** `C:\Users\LENOVO\Downloads\Khoa-hoc-day-lam-giau-website\cart.html`

### Mô Tả
Trang giỏ hàng mua sắm. Hiển thị tất cả mục trong giỏ hàng với số lượng có thể chỉnh sửa, tự động tính tổng và nút thanh toán. Sử dụng bố cục 2 cột: mục giỏ hàng bên trái, tóm tắt đơn hàng bên phải.

### Các Tính Năng

| Tính Năng | Mô Tả |
|-----------|-------|
| **Header** | Mũi tên quay lại index.html, tiêu đề "Giỏ Hàng" ở giữa, icon mũ tốt nghiệp, icon giỏ hàng, icon người dùng. |
| **Breadcrumb** | "Trang Chủ / Khóa Học / Giỏ hàng" |
| **Section Mục Giỏ Hàng** | Mỗi mục hiển thị dạng grid: ảnh thu nhỏ (100x140px), tên, đơn giá, điều khiển số lượng (nút +/- + input số), tổng tiền, nút xóa. Render động bởi `renderCart()`. |
| **Trạng Thái Giỏ Rỗng** | Khi giỏ trống: icon mũ tốt nghiệp (80px), thông báo "Giỏ khóa học của bạn đang trống", nút "Khám Phá Khóa Học". Ẩn khi giỏ có mục. |
| **Tóm Tắt Đơn Hàng** | Thanh bên sticky hiển thị: tạm tính, phí vận chuyển ("Miễn phí" cho đơn >= 500,000₫), tổng cộng. Nút thanh toán (vô hiệu hóa khi giỏ trống). |
| **Trust Badges** | 4 badge dưới tóm tắt: Thanh Toán An Toàn, Hoàn Tiền 7 Ngày, Truy Cập Trọn Đời, Chứng Chỉ Hoàn Thành. Mỗi badge có icon và nhãn. |
| **Điều Kontrol Số Lượng** | Nút minus/plus với icon +/-, input số với handler `onchange` gọi `updateQuantity(productId, value)`. Số lượng tối thiểu là 1; đặt thành 0 sẽ kích hoạt xóa. |
| **Xóa Mục** | Nút icon thùng rác đỏ gọi `removeFromCart(productId)`. Hiển thị thông báo info. |
| **Nút Thanh Toán** | Vô hiệu hóa khi giỏ trống. Khi click: kiểm tra giỏ hàng, hiển thị alert (chỗ giữ chỗ cho tích hợp thanh toán). |

### Cấu Trúc HTML

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

        <div class="cart-container"> <!-- Grid 2 cột: 1fr 380px -->
            <div class="cart-items-section">
                <h2>Giỏ Khóa Học Của Bạn</h2>
                <div id="cart-items">
                    <!-- Mục giỏ hàng được render động -->
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

### Tương Tác JavaScript
- `renderCart()` -- Chạy khi DOMContentLoaded. Render mục giỏ hàng từ mảng `cart` vào `#cart-items`. Hiển thị/ẩn thông báo giỏ trống. Cập nhật subtotal, shipping, total. Kích hoạt/vô hiệu hóa nút thanh toán.
- `getCartTotals()` -- Tính subtotal, shipping (miễn phí >= 500,000₫, ngược lại 30,000₫), và total.
- `updateQuantity(productId, newQuantity)` -- Được gọi từ inline `onchange` và `onclick` nút.
- `removeFromCart(productId)` -- Được gọi từ inline `onclick` trên nút thùng rác.
- Sự kiện click nút thanh toán: kiểm tra giỏ hàng, hiển thị alert.

---

## FILE: `account.html`

**Đường Dẫn Tuyệt Đối:** `C:\Users\LENOVO\Downloads\Khoa-hoc-day-lam-giau-website\account.html`

### Mô Tả
Trang tài khoản người dùng với 2 chế độ xem: chế độ khách (form đăng nhập/đăng ký) và chế độ đã đăng nhập (sidebar với điều hướng tab). Quản lý trạng thái xác thực người dùng qua localStorage và cung cấp quyền truy cập vào khóa học, yêu thích, chứng chỉ, lịch sử đơn hàng, cài đặt và trợ giúp.

### Các Tính Năng

| Tính Năng | Mô Tả |
|-----------|-------|
| **Chế Độ Khách (Mặc Định)** | Thông báo chào mừng với icon người dùng, 2 thẻ auth (form Đăng Nhập và Đăng Ký), nút "Tiếp Tục Như Khách", và lưới 4 lợi ích. |
| **Form Đăng Nhập** | Trường email và mật khẩu, nút submit. Tạo object người dùng trong localStorage khi submit. |
| **Form Đăng Ký** | Trường tên, email, mật khẩu, nút submit. Tạo object người dùng trong localStorage khi submit. |
| **Tiếp Tục Như Khách** | Đặt `currentUser` là khách trong localStorage, chuyển sang chế độ đã đăng nhập. |
| **Chế Độ Đã Đăng Nhập** | Bố cục 2 cột: sidebar (hồ sơ người dùng + điều hướng) và khu vực nội dung với các section theo tab. |
| **Hồ Sơ Người Dùng** | Icon avatar, hiển thị tên, hiển thị email, nút đăng xuất. |
| **Điều Hướng Tài Khoản** | 6 link nav với icon: Khóa Học Của Tôi, Yêu Thích, Chứng Chỉ, Lịch Sử Đơn Hàng, Cài Đặt, Trợ Giúp. Click để chuyển đổi section nội dung hiển thị. |
| **Tab Khóa Học Của Tôi** | Hiển thị trạng thái trống hoặc lưới khóa học (chuẩn bị cho tracking enrollment trong tương lai). |
| **Tab Yêu Thích** | Hiển thị trạng thái trống hoặc lưới yêu thích được render động từ mảng `wishlist` trong localStorage. Mỗi mục có nút xóa và nút "Thêm Vào Giỏ". |
| **Tab Chứng Chỉ** | Trạng thái trống với icon chứng chỉ (giữ chỗ cho generation trong tương lai). |
| **Tab Lịch Sử Đơn Hàng** | Trạng thái trống (giữ chỗ cho tracking đơn hàng trong tương lai). |
| **Tab Cài Đặt** | Trường tên có thể chỉnh sửa, trường email vô hiệu hóa, nút lưu. Cập nhật `currentUser` trong localStorage. |
| **Tab Trợ Giúp** | Lưới 4 thẻ: Email Support, Hotline, Live Chat, FAQ. |

### Cấu Trúc HTML

```html
<!DOCTYPE html>
<html lang="vi">
<head><!-- Meta, style.css, Font Awesome, Google Fonts --></head>
<body>
    <header id="main-header">...</header>

    <main class="account-page">
        <nav class="breadcrumb">...</nav>

        <div class="account-container">
            <!-- CHẾ ĐỘ KHÁCH (hiển thị mặc định) -->
            <div id="guest-view" class="account-guest">
                <div class="guest-header">
                    <i class="fa-user-circle"></i>
                    <h1>Chào Mừng Đến Với Monro</h1>
                    <p>Đăng nhập để truy cập khóa học...</p>
                </div>

                <div class="auth-options"> <!-- Grid 2 cột -->
                    <div class="auth-card"> <!-- Đăng nhập -->
                        <h3>Đăng Nhập</h3>
                        <form id="login-form">
                            <div class="form-group"><label>Email</label><input type="email" id="login-email"></div>
                            <div class="form-group"><label>Mật khẩu</label><input type="password" id="login-password"></div>
                            <button type="submit" class="auth-btn login-btn">Đăng Nhập</button>
                        </form>
                        <button class="guest-btn" onclick="continueAsGuest()">Tiếp Tục Như Khách</button>
                    </div>

                    <div class="auth-card"> <!-- Đăng ký -->
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
                    <div class="benefits-grid"> <!-- Grid 4 cột -->
                        <div class="benefit-item"><i class="fa-graduation-cap"><div><h4>, <p></div></div>
                        <div class="benefit-item"><i class="fa-certificate">...</div>
                        <div class="benefit-item"><i class="fa-heart">...</div>
                        <div class="benefit-item"><i class="fa-percent">...</div>
                    </div>
                </div>
            </div>

            <!-- CHẾ ĐỘ ĐÃ ĐĂNG NHẬP (ẩn mặc định) -->
            <div id="logged-view" class="account-logged" style="display: none;">
                <!-- Grid 2 cột: sidebar + nội dung -->
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
                    <div class="content-section" id="order-history" style="display: none;">...</div>
                    <div class="content-section" id="settings" style="display: none;">
                        <form class="settings-form">
                            <div class="form-group"><label>Họ và tên</label><input type="text" id="settings-name"></div>
                            <div class="form-group"><label>Email</label><input type="email" id="settings-email" disabled></div>
                            <button type="button" class="save-btn" onclick="saveSettings()">Lưu Thay Đổi</button>
                        </form>
                    </div>
                    <div class="content-section" id="help" style="display: none;">
                        <div class="help-grid"> <!-- 4 thẻ --> </div>
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

### Tương Tác JavaScript
- `initAccountPage()` -- Chạy khi DOMContentLoaded nếu `.account-page` tồn tại. Kiểm tra `currentUser` từ localStorage, hiển thị chế độ phù hợp.
- `handleLogin(e)` -- Handler submit form đăng nhập. Tạo người dùng, lưu localStorage, chuyển sang chế độ đã đăng nhập.
- `handleRegister(e)` -- Handler submit form đăng ký. Tương tự đăng nhập nhưng có trường tên.
- `continueAsGuest()` -- Tạo người dùng khách, lưu localStorage, chuyển sang chế độ đã đăng nhập.
- `logout()` -- Xác nhận với người dùng, xóa `currentUser` khỏi localStorage, hiển thị chế độ khách.
- `saveSettings()` -- Cập nhật tên người dùng trong `currentUser` và localStorage.
- `setupAccountNav()` -- Gán handler click cho link `.account-nav`. Chuyển đổi hiển thị `.content-section` dựa trên href của link được click. Kích hoạt `renderWishlist()` khi mở tab yêu thích.
- `renderWishlist()` -- Render mục wishlist từ mảng `wishlist` vào `#wishlist-grid`.

---

## FILE: `about.html`

**Đường Dẫn Tuyệt Đối:** `C:\Users\LENOVO\Downloads\Khoa-hoc-day-lam-giau-website\about.html`

### Mô Tả
Trang "Về Chúng Tôi". Chứa nội dung tĩnh về câu chuyện Monro Academy, sứ mệnh, tầm nhìn, giá trị cốt lõi, đội ngũ giảng viên, thống kê và section kêu gọi hành động. Thuần HTML/CSS không có nội dung JavaScript động.

### Các Tính Năng

| Tính Năng | Mô Tả |
|-----------|-------|
| **Section Hero** | Nền gradient (màu chính), tiêu đề lớn "Học Viện Làm Giàu Monro", slogan, đoạn mô tả. |
| **Section Câu Chuyện** | Grid 2 cột: ảnh logo bên trái, văn bản câu chuyện bên phải với các cụm từ khóa in đậm. |
| **Section Sứ Mệnh & Tầm Nhìn** | Grid 3 thẻ với icon tròn: Sứ Mệnh (icon bullseye), Tầm Nhìn (icon mắt), Giá Trị Cốt Lõi (icon trái tim). Thẻ nâng lên khi hover. |
| **Section Giảng Viên** | Grid 4 thẻ với avatar giảng viên (icon Font Awesome), tên, vai trò, tiểu sử và link social (LinkedIn, Facebook). |
| **Section Thống Kê** | Nền gradient, grid 4 thẻ: 15+ Khóa Học, 10,000+ Học Viên, 50+ Giảng Viên, 95% Hài Lòng. |
| **Section CTA** | Kêu gọi hành động căn giữa với nút "Xem Tất Cả Khóa Học" link đến shop.html. |
| **Menu Mobile** | Điều hướng trượt tiêu chuẩn. |

### Cấu Trúc HTML

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
                <div class="mv-grid"> <!-- 3 cột -->
                    <div class="mv-card"><div class="mv-icon"><i>, <h3>, <p></div> x3
                </div>
            </div>
        </section>

        <section class="about-section instructors">
            <div class="container">
                <h2 class="section-title-centered">Đội Ngũ Giảng Viên</h2>
                <p class="section-subtitle-centered">...</p>
                <div class="instructors-grid"> <!-- 4 cột -->
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
                <div class="stats-grid"> <!-- 4 cột -->
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

### Tương Tác JavaScript
- Tối thiểu. Chỉ `script.js` được tải cho chức năng menu mobile và cập nhật badge giỏ hàng. Không có hàm cụ thể nào được gọi.

---

## FILE: `blog.html`

**Đường Dẫn Tuyệt Đối:** `C:\Users\LENOVO\Downloads\Khoa-hoc-day-lam-giau-website\blog.html`

### Mô Tả
Trang blog với 9 thẻ bài viết tĩnh bao gồm các chủ đề tài chính, kinh doanh, kỹ năng mềm và phát triển bản thân. Thuần HTML/CSS không có tương tác JavaScript.

### Các Tính Năng

| Tính Năng | Mô Tả |
|-----------|-------|
| **Blog Hero** | Nền gradient, tiêu đề "Blog Làm Giàu", đoạn mô tả. |
| **Thẻ Bài Viết** | 9 thẻ trong CSS Grid 3 cột. Mỗi thẻ có: khu vực icon, badge danh mục, tiêu đề (giới hạn 2 dòng), trích dẫn (giới hạn 3 dòng), ngày, nút "Đọc Thêm". |
| **Danh Mục** | Bài viết được gắn thẻ: Tài Chính, Kinh Doanh, Kỹ Năng Mềm, Phát Triển Bản Thân. |
| **Hiệu Ứng Hover Card** | Card nâng lên 5px với shadow tăng khi hover. |
| **Menu Mobile** | Điều hướng trượt tiêu chuẩn. |

### Cấu Trúc HTML

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
                    <h3>Tiêu Đề Bài Viết</h3>
                    <p class="blog-card-excerpt">Trích dẫn...</p>
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

### Danh Sách Bài Viết

| # | Danh Mục | Tiêu Đề | Ngày |
|---|----------|---------|------|
| 1 | Tài Chính | 7 Bước Quản Lý Tài Chính Cá Nhân Hiệu Quả Cho Người Mới Bắt Đầu | 25/03/2026 |
| 2 | Kinh Doanh | Khởi Nghiệp Từ Số 0: Những Bài Học Xương Máu Từ Các Tỷ Phú Tự Thân | 22/03/2026 |
| 3 | Kỹ Năng Mềm | Nghệ Thuật Giao Tiếp Với Người Giàu: 10 Nguyên Tắc Vàng | 20/03/2026 |
| 4 | Tài Chính | Đầu Tư Chứng Khoán Cho Người Mới: Từ A Đến Z | 18/03/2026 |
| 5 | Phát Triển Bản Thân | 10 Thói Quen Buổi Sáng Của Các CEO Thành Công | 15/03/2026 |
| 6 | Kinh Doanh | Xây Dựng Thương Hiệu Cá Nhân: Chìa Khóa Thành Công Thời Đại Số | 12/03/2026 |
| 7 | Tài Chính | Đầu Tư Bất Động Sản: 5 Sai Lầm Cần Tránh | 10/03/2026 |
| 8 | Kỹ Năng Mềm | Kỹ Năng Đàm Phán: Cách Đạt Được Thỏa Thuận Win-Win | 08/03/2026 |
| 9 | Phát Triển Bản Thân | Tư Duy Tăng Trưởng: Chìa Khóa Vượt Qua Giới Hạn Bản Thân | 05/03/2026 |

### Tương Tác JavaScript
- Tối thiểu. Chỉ `script.js` được tải cho menu mobile và badge giỏ hàng. Không có JavaScript cụ thể cho blog.

---

## FILE: `contact.html`

**Đường Dẫn Tuyệt Đối:** `C:\Users\LENOVO\Downloads\Khoa-hoc-day-lam-giau-website\contact.html`

### Mô Tả
Trang liên hệ với bố cục 2 cột: form liên hệ bên trái, thông tin liên hệ và Google Maps embed bên phải. Thuần HTML/CSS với handler submit form trong JavaScript.

### Các Tính Năng

| Tính Năng | Mô Tả |
|-----------|-------|
| **Contact Hero** | Nền gradient, tiêu đề "Liên Hệ Với Chúng Tôi", phụ đề. |
| **Form Liên Hệ** | 5 trường: Tên (bắt buộc), Email (bắt buộc), Số điện thoại (tùy chọn), Subject dropdown (tùy chọn), Message textarea (bắt buộc). Nút submit với icon máy bay giấy. |
| **Section Thông Tin Liên Hệ** | 4 thẻ thông tin với icon: Địa Chỉ, Hotline, Email, Giờ Làm Việc. Mỗi thẻ có tiêu đề và text chi tiết. |
| **Google Maps Embed** | iframe embed hiển thị Quận 1, TP. Hồ Chí Minh. Cao 300px, responsive. |
| **Submit Form** | JavaScript xử lý sự kiện submit form, hiển thị thông báo thành công, reset form. |
| **Menu Mobile** | Điều hướng trượt tiêu chuẩn. |

### Cấu Trúc HTML

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

        <div class="contact-container"> <!-- Grid 2 cột: 1fr 1fr -->
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

### Tương Tác JavaScript
- Handler submit form liên hệ: ngăn default, hiển thị thông báo thành công, reset form.
- Menu mobile và handler badge giỏ hàng chạy như bình thường.

---

## FILE: `style.css`

**Đường Dẫn Tuyệt Đối:** `C:\Users\LENOVO\Downloads\Khoa-hoc-day-lam-giau-website\style.css`
**Tổng Số Dòng:** 4,645

### Mô Tả
Stylesheet đơn, khổng lồ kiểm soát toàn bộ giao diện website. Sử dụng CSS Custom Properties, Flexbox, CSS Grid, Media Queries, transitions, animations và pseudo-elements. Không có CSS frameworks hoặc preprocessors.

### CSS Custom Properties (Design Tokens)

```css
:root {
    --primary: #088178;        /* Màu teal/xanh chính */
    --text-dark: #1a1a1a;      /* Màu text tối */
    --bg-light: #f5f5f5;       /* Màu nền xám nhạt */
    --border-color: #cce7d0;   /* Màu border xanh nhạt */
    --shadow: 20px 20px 30px rgba(0, 0, 0, 0.02); /* Shadow mềm */
}
```

### Font Imports

| Font | Nguồn | Sử Dụng Cho |
|------|-------|-------------|
| **Spartan** (100-900) | Google Fonts | Text body chính |
| **Pacifico** (400) | Google Fonts | Logo, tiêu đề section, heading (phong cách viết tay) |
| **Montserrat** (300-900) | Google Fonts | Tiêu đề banner, text khuyến mãi |
| **Roboto** (300,400,500,700) | Google Fonts | Font body mặc định (`* { font-family: 'Roboto' }`) |

### Global Reset & Base Styles

```css
* { margin: 0; padding: 0; box-sizing: border-box; font-family: 'Roboto', sans-serif; }
body { width: 100%; }
.section-p1 { padding: 40px 80px; }
```

### Các Section Style Chính

#### 1. Style Header (~50 dòng)
- `#main-header`: Flexbox, `justify-content: space-between`, vị trí sticky, `z-index: 100`, nền trắng với shadow nhẹ
- `.header-center`: `flex: 1`, căn giữa tiêu đề với font Pacifico 28px
- `.header-right`: Flex row, gap 20px, relative positioning cho badge giỏ hàng
- `#cart-count`: Absolute positioning, nền đỏ (#ff4444), hình tròn 18px, `display: none` mặc định, hiển thị qua JS

#### 2. Section Hero (~40 dòng)
- `#big-hero`: padding 100px/20px/60px, `overflow: hidden`
- `.monro-logo-bg`: max-width 500px, opacity 0.15, blur 2px, transition 0.3s
- `.sketch-logo`: Pacifico 70px, xoay -3deg, text-shadow
- `.slogan`: 18px, uppercase, letter-spacing 2px

#### 3. Ô Tính Năng (~40 dòng)
- `#feature`: Flexbox, `flex-wrap: wrap`
- `.fe-box`: width 180px, box-shadow, border, transition khi hover
- Mỗi ô tính năng có màu nền riêng cho phần tử h6 dùng selector `:nth-child()`

#### 4. Cuộn Ngang / Bán Chạy (~80 dòng)
- `.book-container`: `display: flex`, `overflow-x: auto`, ẩn scrollbar (`-ms-overflow-style: none`, `scrollbar-width: none`, `::-webkit-scrollbar { display: none }`)
- `.book-card`: min-width 250px, border, border-radius, shadow khi hover
- `.book-img img`: height 250px, `object-fit: cover`
- `.book-info h5`: `-webkit-line-clamp: 2` để cắt text

#### 5. Câu Chuyện Của Chúng Tôi (~30 dòng)
- `.story-content`: Flexbox, `justify-content: space-between`, `flex-wrap: wrap`
- Responsive: `flex-direction: column-reverse` trên mobile

#### 6. Newsletter (~30 dòng)
- `.news-box`: Khung viền với `border-radius: 30px 10px 30px 10px`, layout flex
- `.form`: Flex row với gap, nút màu đen

#### 7. Footer (~50 dòng)
- `.sketch-footer`: Flexbox, `justify-content: space-between`, padding 40px
- `.col`: `flex-direction: column` cho link xếp chồng
- Icons: flex row, gap 15px, hover đổi màu sang primary
- Section phương thức thanh toán với inline flex

#### 8. Section Sản Phẩm (~50 dòng)
- `#product1 .pro-container`: Flex-wrap, `justify-content: space-between`
- `.pro`: width 23%, min-width 250px, border, border-radius, shadow khi hover
- Icon giỏ hàng: absolute positioning, góc dưới-phải, hình tròn 40px

#### 9. Section Banner (~60 dòng)
- `#sm-banner`: Flex row, wrap, min-width 580px mỗi hộp, height 350px, ảnh nền với linear-gradient overlays
- `#banner3`: Flex row, 30% width mỗi hộp, 30vh height, ảnh nền
- Hiệu ứng hover trên nút banner: background đổi sang màu primary

#### 10. Style sproduct (~100 dòng)
- `.product-display`: `grid-template-columns: 1fr 1fr`, gap 40px
- `.product-image img`: max-width 400px, height 500px, `object-fit: contain`
- `.course-features`: `grid-template-columns: repeat(2, 1fr)`, nền xám nhạt
- `.course-info ul li`: Flex items, dấu tích xanh, border dưới
- `.quantity`: width 60px, input có viền
- `.add-to-cart`: Nút xanh, hover tối hơn

#### 11. Style Shop (~80 dòng)
- `.products-grid`: `grid-template-columns: repeat(auto-fill, minmax(250px, 1fr))`
- `.shop-item .product-img`: height 350px, hiệu ứng zoom khi hover (`transform: scale(1.05)`)
- `.add-cart-btn`: Nút tối, hover đổi sang primary

#### 12. Style Giỏ Hàng (~200 dòng)
- `.cart-container`: `grid-template-columns: 1fr 380px`, gap 30px
- `.cart-item`: `grid-template-columns: 100px 1fr auto auto auto`, grid phức tạp
- `.cart-summary-section`: `position: sticky`, `top: 100px`
- `.qty-btn`: Vuông 32px, hover màu primary
- `.checkout-btn`: Trạng thái disabled với nền xám, `cursor: not-allowed`
- `.trust-badges`: 4 hàng badge với icons

#### 13. Notification Toast (~40 dòng)
- `.notification`: Vị trí fixed, `top: 100px`, `right: 20px`, `z-index: 10000`
- Animation transform: `translateX(400px)` sang `translateX(0)` với ease 0.3s
- `.notification.show`: Được JS kích hoạt sau 100ms
- `.notification.success`: Border trái xanh (#22c55e)
- `.notification.info`: Border trái xanh dương (#3b82f6)

#### 14. Menu Mobile (~80 dòng)
- `.mobile-menu`: Fixed, `left: -280px`, width 280px, `transition: left 0.3s ease`
- `.mobile-menu.active`: `left: 0`
- `.menu-overlay`: Fixed, full viewport, `rgba(0,0,0,0.5)`, transition opacity/visibility
- Link nav: flex row với icons, hover active với highlight border trái
- Icon social: hình tròn 40px, hover primary

#### 15. Style Trang Tài Khoản (~300 dòng)
- `.account-guest`: Card trắng, góc bo tròn, shadow
- `.auth-options`: `grid-template-columns: repeat(2, 1fr)`
- `.auth-card`: Card có viền, text căn giữa
- `.benefits-grid`: `grid-template-columns: repeat(4, 1fr)`
- `.account-logged`: `grid-template-columns: 280px 1fr`
- `.account-sidebar`: Sticky, `top: 100px`
- `.user-avatar`: Hình tròn 100px, căn giữa
- `.account-nav a`: Hover/active với background và màu primary
- `.help-grid`: `grid-template-columns: repeat(2, 1fr)`

#### 16. Style Trang Giới Thiệu (~250 dòng)
- `.about-hero`: Linear gradient, padding 80px, căn giữa
- `.story-grid`: `grid-template-columns: 1fr 1.5fr`, gap 50px
- `.mv-grid`: `grid-template-columns: repeat(3, 1fr)`, hiệu ứng nâng khi hover
- `.instructors-grid`: `grid-template-columns: repeat(4, 1fr)`, hover shadow + nâng
- `.stats-grid`: `grid-template-columns: repeat(4, 1fr)`, nền gradient
- `.stat-number`: Cỡ chữ 48px

#### 17. Style Trang Blog (~100 dòng)
- `.blog-grid`: `grid-template-columns: repeat(auto-fill, minmax(320px, 1fr))`
- `.blog-card`: Card trắng, bo tròn, shadow, hover nâng lên
- `.blog-card-img`: Height 200px, icon căn giữa
- `.blog-card-category`: Badge pill với màu primary
- `-webkit-line-clamp` dùng cho tiêu đề (2 dòng) và trích dẫn (3 dòng)
- `.read-more-btn`: Nút pill xanh

#### 18. Style Trang Liên Hệ (~100 dòng)
- `.contact-container`: `grid-template-columns: 1fr 1fr`
- `.contact-form .form-group textarea`: `min-height: 150px`, `resize: vertical`
- `.contact-info-item`: Flex row, nền xám nhạt, bo tròn
- `.map-container`: Height 300px, `border-radius: 12px`, iframe 100% width/height

#### 19. Style Wishlist (~150 dòng)
- `.wishlist-btn`: Absolute positioning trên card, hình tròn 40px, nền trắng
- `.wishlist-btn.active`: Nền đỏ (#ff4444), icon trắng
- `.wishlist-grid`: `grid-template-columns: repeat(auto-fill, minmax(250px, 1fr))`
- `.wishlist-item-img`: Height 250px, zoom khi hover
- `.wishlist-item-remove`: Absolute positioning, đỏ khi hover
- `.wishlist-item-actions`: Flex row, hai nút

#### 20. Style Bộ Lọc Shop (~60 dòng)
- `.shop-filters`: Card trắng, padding 25px, bo tròn
- `.search-box`: Relative positioning, icon absolute bên phải
- `.filter-box select`: Full width, có viền
- Responsive: flex-direction column trên mobile

### Kỹ Thuật CSS Được Sử Dụng

| Kỹ Thuật | Sử Dụng |
|----------|---------|
| **CSS Custom Properties** | 5 design tokens trong `:root` |
| **Flexbox** | Header, footer, navigation, feature boxes, banners, cart items, form layouts |
| **CSS Grid** | Product grids, course features, account layouts, stats, blog grid, instructor grid |
| **Media Queries** | 4 breakpoints: 799px, 477px, 360px, 1200px |
| **Transitions** | Ease 0.3s cho hiệu ứng hover, ease 0.2s cho tương tác nhanh |
| **Transform** | Scale khi hover (ảnh sản phẩm), translate (notification toast), translateY (hover button) |
| **-webkit-line-clamp** | Cắt text tiêu đề khóa học (2 dòng) và trích dẫn blog (3 dòng) |
| **Linear Gradients** | Hero sections, about hero, blog hero, contact hero, stats section |
| **Position Sticky** | Header (z-index: 100), cart summary sidebar, account sidebar |
| **Position Absolute** | Cart badge, wishlist buttons, cart icon trên product cards, notification toast |
| **Pseudo-elements** | Ẩn scrollbar (`::-webkit-scrollbar`) |
| **:nth-child()** | Màu nền riêng cho từng feature box |
| **Object-fit** | `cover` cho ảnh, `contain` cho ảnh chi tiết sản phẩm |
| **overflow-x: auto** | Cuộn ngang cho carousel bán chạy |

---

## FILE: `script.js`

**Đường Dẫn Tuyệt Đối:** `C:\Users\LENOVO\Downloads\Khoa-hoc-day-lam-giau-website\script.js`
**Tổng Số Dòng:** 850

### Mô Tả
File JavaScript đơn cung cấp tất cả chức năng tương tác trên website. Chứa dữ liệu sản phẩm, quản lý giỏ hàng, quản lý wishlist, lọc shop, quản lý tài khoản, menu mobile, notifications và tải nội dung động.

### Biến Toàn Cục

| Biến | Kiểu | Mô Tả |
|------|------|-------|
| `products` | Object | 15 object khóa học theo ID (1-15) |
| `cart` | Array | Mảng mục giỏ hàng, tải từ `localStorage.getItem('cart')` hoặc `[]` |
| `wishlist` | Array | Mảng mục yêu thích, tải từ `localStorage.getItem('wishlist')` hoặc `[]` |
| `currentUser` | Object\|null | Object người dùng hiện tại, tải từ `localStorage.getItem('currentUser')` hoặc `null` |
| `bookContainer` | Element | Tham chiếu phần tử `.book-container` |
| `scrollStep` | Number | 1 (pixel mỗi lần tự động cuộn) |
| `scrollDelay` | Number | 20 (ms giữa các bước tự động cuộn) |
| `scrollInterval` | Timer | Tham chiếu setInterval cho tự động cuộn |
| `categoryNames` | Object | Ánh xạ slug danh mục sang tên tiếng Việt |

### Tham Khảo Hàm

#### Lớp Dữ Liệu
| Hàm | Dòng | Mục Đích |
|-----|------|----------|
| `products` (object) | 1-117 | 15 object khóa học với id, name, price (nghìn), image path, category, description |
| `categoryNames` (object) | ~520 | Ánh xạ 'all', 'tai-chinh', 'kinh-doanh', 'ky-nang-mem', 'phat-trien-ban-than' sang tên tiếng Việt |

#### Trang Chi Tiết Sản Phẩm
| Hàm | Dòng | Mục Đích |
|-----|------|----------|
| `loadProduct()` | ~125-160 | CHỈ chạy trên sproduct.html. Parse URL param `?id=`, điền title, price, image, description, breadcrumb từ object `products` |
| `DOMContentLoaded: loadProduct` | ~163 | Chạy `loadProduct()` khi tải trang |

#### Tự Động Cuộn (Trang Chủ)
| Hàm | Dòng | Mục Đích |
|-----|------|----------|
| `startAutoScroll()` | ~175-187 | Chạy setInterval di chuyển scrollLeft của `.book-container` thêm `scrollStep` mỗi `scrollDelay` ms. Quay về 0 khi đến cuối |
| `bookContainer: mouseenter` | ~196-198 | Tạm dừng tự động cuộn khi hover |
| `bookContainer: mouseleave` | ~199-201 | Tiếp tục tự động cuộn khi rời chuột |
| `bookContainer: touchstart` | ~202-204 | Tạm dừng tự động cuộn khi chạm |
| `bookContainer: touchend` | ~205-207 | Tiếp tục tự động cuộn 2 giây sau khi chạm xong |

#### Quản Lý Giỏ Hàng
| Hàm | Dòng | Mục Đích |
|-----|------|----------|
| `saveCart()` | ~220-223 | Lưu mảng `cart` vào `localStorage.setItem('cart')`, gọi `updateCartCount()` |
| `updateCartCount()` | ~226-232 | Cập nhật text và visibility của badge `#cart-count` dựa trên tổng mục trong giỏ |
| `addToCart(productId, quantity)` | ~235-258 | Thêm sản phẩm vào giỏ (hoặc tăng số lượng), lưu, hiển thị thông báo thành công |
| `removeFromCart(productId)` | ~261-265 | Lọc sản phẩm khỏi giỏ, lưu, render lại giỏ, hiển thị thông báo info |
| `updateQuantity(productId, newQuantity)` | ~268-279 | Cập nhật số lượng; nếu <= 0, xóa mục; ngược lại lưu và render lại |
| `getCartTotals()` | ~282-288 | Trả về {subtotal, shipping, total}. Shipping: 0 nếu subtotal >= 500,000₫, ngược lại 30,000₫ |
| `formatPrice(price)` | ~291-293 | Định dạng số thành Việt Nam Đồng: `price.toLocaleString('vi-VN') + '₫'` |
| `renderCart()` | ~296-340 | Render HTML mục giỏ hàng vào `#cart-items`. Xử lý trạng thái giỏ trống. Cập nhật totals. Kích hoạt/vô hiệu hóa nút thanh toán |
| `showNotification(message, type)` | ~343-364 | Tạo phần tử toast notification, animate vào với setTimeout, tự xóa sau 3s |

#### Quản Lý Wishlist
| Hàm | Dòng | Mục Đích |
|-----|------|----------|
| `saveWishlist()` | ~375-378 | Lưu mảng `wishlist` vào `localStorage`, gọi `updateWishlistButtons()` |
| `toggleWishlist(productId)` | ~381-405 | Thêm/xóa sản phẩm khỏi mảng wishlist, lưu, render lại nếu ở trang account, hiển thị thông báo |
| `updateWishlistButtons()` | ~408-427 | Lặp qua tất cả phần tử `.wishlist-btn`, parse productId từ thuộc tính onclick, đặt class active và icon trái tim solid/regular |
| `renderWishlist()` | ~430-459 | Render lưới wishlist vào `#wishlist-grid`. Hiển thị trạng thái trống nếu trống. Mỗi mục có nút xóa và "Thêm Vào Giỏ" |
| `initWishlist()` | ~462-464 | Gọi `updateWishlistButtons()` và `renderWishlist()` |

#### Tìm Kiếm & Lọc Shop
| Hàm | Dòng | Mục Đích |
|-----|------|----------|
| `renderShopProducts()` | ~474-530 | Lọc sản phẩm theo truy vấn tìm kiếm và danh mục. Render HTML vào `.products-grid`. Cập nhật bộ đếm kết quả. Hiển thị trạng thái trống nếu không khớp |
| `initShopFilters()` | ~533-546 | Gán sự kiện `input` cho `#search-input` và `change` cho `#category-filter` để gọi `renderShopProducts()` |

#### Quản Lý Tài Khoản
| Hàm | Dòng | Mục Đích |
|-----|------|----------|
| `initAccountPage()` | ~555-575 | Nếu ở trang account, kiểm tra `currentUser`, hiển thị chế độ phù hợp, thiết lập handler form đăng nhập/đăng ký, thiết lập điều hướng tài khoản |
| `showGuestView()` | ~578-582 | Hiển thị `#guest-view`, ẩn `#logged-view` |
| `showLoggedInView()` | ~585-596 | Ẩn guest view, hiển thị logged view, điền tên/email người dùng vào profile và form cài đặt |
| `handleLogin(e)` | ~599-610 | Handler submit form. Tạo người dùng từ email, lưu localStorage, hiển thị thông báo, chuyển sang logged view sau 500ms |
| `handleRegister(e)` | ~613-626 | Handler submit form. Tạo người dùng từ tên+email, lưu localStorage, hiển thị thông báo chào mừng, chuyển sang logged view |
| `continueAsGuest()` | ~629-637 | Tạo object người dùng khách, lưu localStorage, hiển thị thông báo, chuyển sang logged view |
| `logout()` | ~640-646 | Xác nhận với người dùng, xóa `currentUser` khỏi localStorage, hiển thị thông báo, chuyển sang guest view |
| `saveSettings()` | ~649-656 | Cập nhật tên người dùng từ form cài đặt, lưu localStorage, cập nhật hiển thị, hiển thị thông báo |
| `setupAccountNav()` | ~659-680 | Gán handler click cho link nav. Chuyển đổi class active và hiển thị/ẩn `.content-section` tương ứng. Kích hoạt `renderWishlist()` khi mở tab wishlist |

#### Handler DOMContentLoaded
| Dòng | Mục Đích |
|------|----------|
| ~684-770 | Khối khởi tạo chính. Chạy `updateCartCount()`, `renderCart()`, `initAccountPage()`, `initWishlist()`, `initShopFilters()`, `renderShopProducts()`. Thiết lập menu mobile (mở/đóng/overlay/link). Thiết lập nút thêm vào giỏ trên sproduct.html. Thiết lập handler nút thanh toán. Thiết lập handler submit form liên hệ. |

### Event Listeners Đã Đăng Ký

| Sự Kiện | Target | Handler | Điều Kiện |
|---------|--------|---------|-----------|
| `click` | `#menu-btn` | Mở menu mobile | Nếu phần tử tồn tại |
| `click` | `#close-menu` | Đóng menu mobile | Nếu phần tử tồn tại |
| `click` | `#menu-overlay` | Đóng menu mobile | Nếu phần tử tồn tại |
| `click` | `.mobile-menu-nav a` | Đóng menu mobile | Tất cả link |
| `click` | `.add-to-cart` (sproduct) | Thêm vào giỏ với số lượng | Nếu phần tử tồn tại |
| `click` | `#checkout-btn` | Handler thanh toán | Nếu phần tử tồn tại |
| `submit` | `#contact-form` | Handler form liên hệ | Nếu phần tử tồn tại |
| `submit` | `#login-form` | `handleLogin()` | Nếu ở trang account |
| `submit` | `#register-form` | `handleRegister()` | Nếu ở trang account |
| `click` | `.account-nav a` | Chuyển đổi tab | Tất cả link nav trên trang account |
| `input` | `#search-input` | `renderShopProducts()` | Nếu ở trang shop |
| `change` | `#category-filter` | `renderShopProducts()` | Nếu ở trang shop |
| `mouseenter` | `.book-container` | Xóa interval cuộn | Nếu phần tử tồn tại |
| `mouseleave` | `.book-container` | Khởi động lại tự động cuộn | Nếu phần tử tồn tại |
| `touchstart` | `.book-container` | Xóa interval cuộn | Nếu phần tử tồn tại |
| `touchend` | `.book-container` | Khởi động lại tự động cuộn sau 2s | Nếu phần tử tồn tại |

### Cách Sử Dụng localStorage

| Khóa | Kiểu | Giá Trị | Được Đặt Bởi | Được Đọc Bởi |
|------|------|---------|--------------|--------------|
| `cart` | JSON string | Mảng `{id, name, price, image, quantity}` | `saveCart()` | `JSON.parse(localStorage.getItem('cart'))` khi tải |
| `wishlist` | JSON string | Mảng `{id, name, price, image}` | `saveWishlist()` | `JSON.parse(localStorage.getItem('wishlist'))` khi tải |
| `currentUser` | JSON string | `{name, email, isGuest, enrolledCourses}` hoặc `null` | `handleLogin()`, `handleRegister()`, `continueAsGuest()`, `saveSettings()`, `logout()` | `JSON.parse(localStorage.getItem('currentUser'))` khi tải |

### Tổng Kết DOM Manipulation

| Kiểu | Mô Tả | Vị Trí |
|------|-------|--------|
| **innerHTML** | Thay thế toàn bộ HTML | `renderCart()`, `renderShopProducts()`, `renderWishlist()` |
| **textContent** | Cập nhật nội dung text | `loadProduct()`, `updateCartCount()`, cập nhật breadcrumb, cập nhật profile người dùng |
| **style.display** | Hiển thị/ẩn phần tử | Guest/logged views, thông báo giỏ trống, wishlist empty/grid, content sections, mục giỏ hàng |
| **classList.add/remove/toggle** | Thao tác CSS class | Mobile menu active state, overlay active, wishlist buttons active, notification show |
| **Thuộc tính src** | Cập nhật nguồn ảnh | `loadProduct()` cập nhật ảnh sản phẩm |
| **document.title** | Cập nhật tiêu đề trang | `loadProduct()` đặt tiêu đề bao gồm tên sản phẩm |
| **createElement** | Tạo phần tử DOM mới | `showNotification()` tạo div toast notification |
| **appendChild/remove** | Thêm/xóa phần tử | `showNotification()` thêm toast vào body, xóa sau timeout |
| **body.style.overflow** | Kiểm soát cuộn | Đặt `'hidden'` khi mở menu mobile, `''` khi đóng |

---

## ASSETS: ẢNH SẢN PHẨM

**Đường Dẫn Tuyệt Đối:** `C:\Users\LENOVO\Downloads\Khoa-hoc-day-lam-giau-website\src\image-product\`

### Danh Sách File (15 file)

| File | ID Khóa Học | Tên Khóa Học | Giá |
|------|-------------|--------------|-----|
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

### Cách Sử Dụng
- Tất cả ảnh được tham chiếu qua `src/image-product/[id].png` trong HTML và JavaScript
- Sử dụng trong: lưới sản phẩm shop.html, view chi tiết sproduct.html, thumbnail cart.html, lưới wishlist, sản phẩm liên quan, bán chạy trên trang chủ, sản phẩm mới trên trang chủ
- Chiều cao hiển thị thay đổi theo ngữ cảnh: 350px (shop), 500px (chi tiết), 200px (liên quan), 140px (giỏ hàng), 250px (bán chạy)

---

## ASSETS: LOGO

**Đường Dẫn Tuyệt Đối:** `C:\Users\LENOVO\Downloads\Khoa-hoc-day-lam-giau-website\src\logo\shop-logo.png`

### Cách Sử Dụng
| Vị Trí | Ngữ Cảnh | Style |
|--------|----------|-------|
| `index.html` - Section hero | Ảnh nền sau text hero | Mờ (2px), opacity 15%, max-width 500px |
| `index.html` - Section Our Story | Ảnh bên | Width 200px |
| `about.html` - Section Our Story | Ảnh chính | Max-width 300px, bo tròn, shadow |

---

## THAM KHẢO LOCALSTORAGE

### `cart`
```javascript
// Cấu trúc
[
  {
    id: 1,              // Number, ID sản phẩm
    name: "Bí mật làm giàu của các tỷ phú", // String
    price: 599,         // Number, tính bằng nghìn (599 = 599,000₫)
    image: "src/image-product/1.png", // String, đường dẫn tương đối
    quantity: 2         // Number, tối thiểu 1
  }
]
```
- **Đọc:** `JSON.parse(localStorage.getItem('cart')) || []` (khi tải trang, dòng ~217)
- **Ghi:** `localStorage.setItem('cart', JSON.stringify(cart))` trong `saveCart()` (dòng ~221)
- **Xóa:** Không bao giờ bị xóa chương trình. Chỉ sửa đổi qua `removeFromCart()` lọc mảng.

### `wishlist`
```javascript
// Cấu trúc
[
  {
    id: 3,              // Number, ID sản phẩm
    name: "Sổ tay về cách giao tiếp với người giàu...", // String
    price: 399,         // Number, tính bằng nghìn
    image: "src/image-product/3.png" // String, đường dẫn tương đối
  }
]
```
- **Đọc:** `JSON.parse(localStorage.getItem('wishlist')) || []` (khi tải trang)
- **Ghi:** `localStorage.setItem('wishlist', JSON.stringify(wishlist))` trong `saveWishlist()`
- **Xóa:** Không bao giờ bị xóa chương trình. Chỉ sửa đổi qua `toggleWishlist()`.

### `currentUser`
```javascript
// Cấu trúc (người dùng đã đăng nhập)
{
  name: "Nguyễn Văn A",    // String
  email: "user@email.com", // String
  isGuest: false,          // Boolean
  enrolledCourses: []      // Array (dành cho sử dụng tương lai)
}

// Cấu trúc (khách)
{
  name: "Khách",
  email: "guest@monro.edu.vn",
  isGuest: true,
  enrolledCourses: []
}
```
- **Đọc:** `JSON.parse(localStorage.getItem('currentUser')) || null` (khi tải trang)
- **Ghi:** Trong `handleLogin()`, `handleRegister()`, `continueAsGuest()`, `saveSettings()`
- **Xóa:** `localStorage.removeItem('currentUser')` trong `logout()`

---

## RESPONSIVE BREAKPOINTS

### Breakpoint 1: `@media (min-width: 1200px)` -- Desktop Lớn
- Padding section: 60px 80px
- Width sản phẩm: 22%
- Lưới sản phẩm: `auto-fill, minmax(280px, 1fr)`
- Max-width cart container: 1400px

### Breakpoint 2: `@media (max-width: 1000px)` -- Tablet Landscape
- SM Banner: full width, height 300px
- Banner 3: box full width

### Breakpoint 3: `@media (max-width: 999px)` -- Tablet
- Auth options: 1 cột
- Lưới lợi ích: 2 cột
- Account đã đăng nhập: 1 cột
- Cart container: 1 cột
- Cart summary: không sticky
- Mục giỏ hàng: grid đơn giản (ảnh 80px + chi tiết)
- Lưới trợ giúp: 2 cột

### Breakpoint 4: `@media (max-width: 799px)` -- Tablet Portrait / Mobile Lớn
- **Menu hamburger xuất hiện** (`#menu-btn { display: block }`)
- Padding section: 40px 40px
- Feature boxes: layout căn giữa, width 30% mỗi box
- Product container: căn giữa
- Our Story: column-reverse
- Newsletter: layout column
- Product display: 1 cột
- Product cards: width 45%
- Banner 3: full width, 25vh height
- Lưới shop: `auto-fill, minmax(200px, 1fr)`
- Ảnh shop: height 280px
- Lưới blog: `auto-fill, minmax(280px, 1fr)`
- About hero: padding 60px, tiêu đề 36px
- About story grid: 1 cột
- About MV grid: 1 cột
- About instructors: 2 cột
- About stats: 2 cột
- Contact container: 1 cột
- Course features: 1 cột

### Breakpoint 5: `@media (max-width: 579px)`
- Lưới lợi ích: 1 cột
- Lưới trợ giúp: 1 cột

### Breakpoint 6: `@media (max-width: 480px)` -- Mobile Nhỏ
- Cart page: padding 15px
- Mục giỏ hàng: 1 cột, căn giữa
- Ảnh mục giỏ hàng: 80px x 110px
- Lưới shop: `repeat(2, 1fr)` với gap 10px
- Ảnh shop: height 200px
- Text thông tin sản phẩm: 12px
- Nút thêm vào giỏ: padding nhỏ hơn

### Breakpoint 7: `@media (max-width: 477px)` -- Mobile
- Padding section: 20px 15px
- Header: padding 12px 15px
- Logo: cỡ chữ 32px
- Feature boxes: width 45%
- Product cards: width 100%
- Product display: gap 20px
- Purchase actions: layout column
- Add to cart: full width
- Mục giỏ hàng: 1 cột
- Cart summary: padding 20px 15px
- Notification: full width (left: 15px, right: 15px)
- Menu mobile: full width (100%)
- Auth cards: padding 20px 15px
- Lưới lợi ích: 1 cột
- Lưới trợ giúp: 1 cột
- About hero: padding 40px 20px, tiêu đề 28px
- Lưới blog: 1 cột
- Ảnh blog: height 180px
- Contact: padding 70px 15px 20px

### Breakpoint 8: `@media (max-width: 360px)` -- Mobile Rất Nhỏ
- Padding section: 15px 10px
- Logo: cỡ chữ 28px
- Feature boxes: width 100%
- Our Story: font 13px
- Product cards: min-width 180px

### Thang Typo

| Phần Tử | Desktop (>799px) | Tablet (<=799px) | Mobile (<=477px) | Nhỏ (<=360px) |
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

### Sự Kiện Tải Trang (DOMContentLoaded)
Tất cả được đăng ký trong khối `document.addEventListener('DOMContentLoaded', ...)` duy nhất:

1. `updateCartCount()` -- Luôn chạy
2. `renderCart()` -- Luôn chạy
3. `initAccountPage()` -- Chỉ hiệu quả trên account.html
4. `initWishlist()` -- Luôn chạy
5. `initShopFilters()` -- Chỉ hiệu quả trên shop.html
6. `renderShopProducts()` -- Chỉ hiệu quả trên shop.html
7. Thiết lập nút menu mobile
8. Thiết lập nút đóng menu
9. Handler click overlay
10. Handler đóng link nav mobile menu
11. Nút thêm vào giỏ trên sproduct.html
12. Nút thêm vào giỏ trên shop.html
13. Nút thanh toán trên cart.html

### Handler Sự Kiện Inline (thuộc tính HTML)

| Phần Tử | Handler | Vị Trí |
|---------|---------|--------|
| `.book-card` onclick | `window.location.href='sproduct.html?id=X'` | index.html (6 card) |
| `.pro` onclick | `window.location.href='sproduct.html?id=X'` | index.html (4 card) |
| `.wishlist-btn` onclick | `event.stopPropagation(); toggleWishlist(X)` | index.html, shop.html |
| `#sm-banner button` onclick | `window.location.href='shop.html'` | index.html (2 nút) |
| `continueAsGuest()` onclick | `continueAsGuest()` | account.html |
| `logout()` onclick | `logout()` | account.html |
| `saveSettings()` onclick | `saveSettings()` | account.html |
| `qty-btn` onclick | `updateQuantity(X, Y)` | cart.html (qua innerHTML từ renderCart) |
| `cart-item input` onchange | `updateQuantity(X, parseInt(this.value))` | cart.html (qua innerHTML) |
| `.remove-item` onclick | `removeFromCart(X)` | cart.html (qua innerHTML) |
| `.product-card` onclick | `window.location.href='sproduct.html?id=X'` | shop.html (qua innerHTML) |
| `.add-cart-btn` onclick | `event.stopPropagation(); addToCart(X, 1)` | shop.html (qua innerHTML) |
| `.wishlist-item-remove` onclick | `toggleWishlist(X); event.stopPropagation()` | account.html (qua innerHTML) |
| `.add-to-cart-btn` onclick | `addToCart(X, 1)` | account.html (qua innerHTML) |

### Event Listener Chương Trình (addEventListener trong script.js)

| Sự Kiện | Target | Handler | Hàm |
|---------|--------|---------|-----|
| `click` | `#menu-btn` | Mở menu mobile | Đặt class `active` cho `#mobile-menu` và `#menu-overlay`, `body.style.overflow = 'hidden'` |
| `click` | `#close-menu` | Đóng menu mobile | Hàm `closeMenu()` |
| `click` | `#menu-overlay` | Đóng menu mobile | Hàm `closeMenu()` |
| `click` | `.mobile-menu-nav a` (mỗi cái) | Đóng menu mobile | Hàm `closeMenu()` |
| `click` | `.add-to-cart` (sproduct) | Thêm vào giỏ | Đọc param `?id=` và số lượng, gọi `addToCart()` |
| `click` | `#checkout-btn` | Thanh toán | Kiểm tra giỏ hàng, hiển thị alert |
| `submit` | `#contact-form` | Form liên hệ | Prevents default, hiển thị thông báo, reset form |
| `submit` | `#login-form` | Đăng nhập | `handleLogin()` |
| `submit` | `#register-form` | Đăng ký | `handleRegister()` |
| `click` | `.account-nav a` (mỗi cái) | Chuyển đổi tab | Chuyển đổi class nav active và visibility content section |
| `input` | `#search-input` | Lọc tìm kiếm | `renderShopProducts()` |
| `change` | `#category-filter` | Lọc danh mục | `renderShopProducts()` |
| `mouseenter` | `.book-container` | Tạm dừng tự động cuộn | `clearInterval(scrollInterval)` |
| `mouseleave` | `.book-container` | Tiếp tục tự động cuộn | `startAutoScroll()` |
| `touchstart` | `.book-container` | Tạm dừng tự động cuộn | `clearInterval(scrollInterval)` |
| `touchend` | `.book-container` | Tiếp tục sau 2s | `setTimeout(startAutoScroll, 2000)` |

---

## DANH MỤC SẢN PHẨM

### Dữ Liệu Sản Phẩm Hoàn Chỉnh

| ID | Tên | Giá (nghìn) | Giá (₫) | Danh Mục | Ảnh |
|----|-----|-------------|---------|----------|-----|
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

### Phân Bổ Danh Mục

| Danh Mục | Tiếng Việt | Số Lượng | IDs |
|----------|-----------|----------|-----|
| tai-chinh | Tài Chính | 5 | 1, 6, 9, 12, 15 |
| kinh-doanh | Kinh Doanh | 2 | 2, 13 |
| ky-nang-mem | Kỹ Năng Mềm | 1 | 3 |
| phat-trien-ban-than | Phát Triển Bản Thân | 7 | 4, 5, 7, 8, 10, 11, 14 |

### Phân Bổ Giá

| Thống Kê | Giá Trị |
|----------|---------|
| **Rẻ Nhất** | 199,000₫ (ID 7 - Tết này con bận đi làm) |
| **Đắt Nhất** | 1,499,000₫ (ID 9 - Từ điển bách khoa) |
| **Giá Trung Bình** | ~599,000₫ |
| **Tổng Tất Cả** | ~8,999,000₫ |

---

## MA TRẬN PHỤ THUỘC TRANG

| Hàm/Feature | index.html | shop.html | sproduct.html | cart.html | account.html | about.html | blog.html | contact.html |
|-------------|-----------|-----------|---------------|-----------|--------------|------------|-----------|-------------|
| `loadProduct()` | ✗ | ✗ | ✓ | ✗ | ✗ | ✗ | ✗ | ✗ |
| `startAutoScroll()` | ✓ | ✗ | ✗ | ✗ | ✗ | ✗ | ✗ | ✗ |
| `updateCartCount()` | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ |
| `renderCart()` | ✗ | ✗ | ✗ | ✓ | ✗ | ✗ | ✗ | ✗ |
| `renderShopProducts()` | ✗ | ✓ | ✗ | ✗ | ✗ | ✗ | ✗ | ✗ |
| `initShopFilters()` | ✗ | ✓ | ✗ | ✗ | ✗ | ✗ | ✗ | ✗ |
| `initAccountPage()` | ✗ | ✗ | ✗ | ✗ | ✓ | ✗ | ✗ | ✗ |
| `renderWishlist()` | ✗ | ✗ | ✗ | ✗ | ✓ | ✗ | ✗ | ✗ |
| `toggleWishlist()` | ✓ | ✓ | ✗ | ✗ | ✓ | ✗ | ✗ | ✗ |
| `addToCart()` | ✓ (qua icon giỏ hàng) | ✓ | ✓ | ✗ | ✓ (wishlist→cart) | ✗ | ✗ | ✗ |
| Mobile Menu | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ |

**Ghi chú:** Dấu ✓ có nghĩa là hàm/feature được gọi hoặc hoạt động trên trang đó. Dấu ✗ có nghĩa là không được gọi/không liên quan.

---

## CÁC KỸ THUẬT JavaScript ĐÁNG CHÚ Ý

### 1. Guard Clauses (Mệnh Đề Bảo Vệ)
```javascript
function loadProduct() {
    if (!document.querySelector('.product-display')) {
        return;  // Thoát sớm nếu không ở trang sproduct
    }
}
```
Đảm bảo hàm chỉ chạy trên trang phù hợp, tránh lỗi trên các trang khác.

### 2. Event Delegation (Ủy Quyền Sự Kiện)
```javascript
document.querySelectorAll('.mobile-menu-nav a').forEach(link => {
    link.addEventListener('click', closeMenu);
});
```
Gán handler cho nhiều phần tử thay vì dùng event bubbling từ parent.

### 3. Template Literals (Chuôn Mẫu)
```javascript
cartItemsEl.innerHTML = cart.map(item => `
    <div class="cart-item" data-id="${item.id}">
        <p>${formatPrice(item.price * 1000)}</p>
    </div>
`).join('');
```
Sử dụng backticks và `${}` để chèn biến vào HTML string.

### 4. Destructuring & Spread
```javascript
let cart = JSON.parse(localStorage.getItem('cart')) || [];
let wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
```
Parse JSON từ localStorage với giá trị mặc định là mảng rỗng.

### 5. Array Methods (Phương Thức Mảng)
- `cart.reduce((sum, item) => sum + item.quantity, 0)` -- Tính tổng số lượng
- `cart.find(item => item.id === productId)` -- Tìm mục theo ID
- `cart.filter(item => item.id !== productId)` -- Xóa mục theo ID
- `Object.values(products).filter(...)` -- Lọc sản phẩm theo điều kiện

### 6. URLSearchParams
```javascript
const params = new URLSearchParams(window.location.search);
const productId = params.get('id') || 1;
```
Đọc query parameter từ URL để xác định sản phẩm cần hiển thị.

### 7. setTimeout & setInterval
```javascript
scrollInterval = setInterval(() => {
    bookContainer.scrollLeft += scrollStep;
}, scrollDelay);

setTimeout(() => notification.classList.add('show'), 100);
```
- `setInterval` cho auto-scroll liên tục
- `setTimeout` cho animation và delayed execution

### 8. Conditional (Ternary) Operator
```javascript
cartCountEl.style.display = totalItems > 0 ? 'flex' : 'none';
```
Toggle visibility dựa trên điều kiện.

---

## TÍNH NĂNG BẢO MẬT & HIỆU SUẤT

### Bảo Mật
- **localStorage only**: Tất cả dữ liệu lưu trữ phía client, không có server-side validation
- **No authentication**: Form đăng nhập/đăng ký chỉ mang tính chất demo, không có mã hóa hoặc xác thực thực sự
- **XSS risk**: Sử dụng `innerHTML` với user-generated content có thể tạo lỗ hổng XSS nếu có input người dùng
- **No CSRF protection**: Không có token CSRF cho form submission

### Hiệu Suất
- **Single JS file**: Tất cả 850 dòng được tải trên mọi trang, kể cả khi không cần thiết
- **No lazy loading**: Ảnh không sử dụng `loading="lazy"` (trừ iframe map)
- **No image optimization**: Ảnh PNG có thể lớn, không có format WebP/AVIF
- **No code splitting**: Không có dynamic import hay code splitting
- **CDN caching**: Font Awesome và Google Fonts được cache bởi trình duyệt
- **Minimal DOM manipulation**: Sử dụng innerHTML để render hàng loạt thay vì tạo từng phần tử

---

## HƯỚNG DẪN SỬ DỤNG

### Chạy Website
1. Mở file `index.html` trong trình duyệt
2. Không cần server, chạy trực tiếp từ file system

### Thêm Sản Phẩm Vào Giỏ
1. Click vào sản phẩm bất kỳ
2. Click nút "Ghi Danh Ngay" hoặc "Add to Cart"
3. Thông báo thành công sẽ hiện lên
4. Số lượng trong giỏ hàng tự động cập nhật

### Quản Lý Giỏ Hàng
1. Click vào icon giỏ hàng trên header
2. Điều chỉnh số lượng bằng +/- buttons
3. Xóa sản phẩm bằng nút Remove
4. Click "Thanh Toán Ghi Danh" để checkout

### Responsive Breakpoints
- **Desktop**: >799px (4-5 columns)
- **Tablet**: 480px - 799px (3-4 columns)
- **Mobile**: <480px (2 columns)

---

## TÍNH NĂNG TƯƠNG LAI

### Giai Đoạn 1 (Cơ Bản)
- [ ] Thêm feature icons (f1.png - f6.png) cho `src/features/`
- [ ] Xóa folder `src/products/` (không còn sử dụng)

### Giai Đoạn 2 (Nâng Cao)
- [ ] Wishlist/favorites functionality
- [ ] Order history page
- [ ] User authentication
- [ ] Payment gateway integration
- [ ] Email notifications
- [ ] Promo code system
- [ ] Product reviews
- [ ] Advanced search & filters

### Giai Đoạn 3 (Course Platform)
- [ ] Add actual course videos/content
- [ ] Course progress tracking
- [ ] Quiz/assessment system
- [ ] Generate completion certificates
- [ ] Student dashboard
- [ ] Reviews and ratings system

---

## LIÊN HỆ

**Học Viện Làm Giàu Monro**

- **Địa chỉ**: Tầng 15, Tòa nhà Tài Chính, Quận 1, TP.HCM
- **Hotline**: 1900 6789
- **Email**: support@monro.edu.vn
- **Giờ làm việc**: 8:00 - 22:00 (Thứ 2 - Chủ Nhật)

---

**© 2026 Monro Academy. Tài liệu kỹ thuật nội bộ.**
