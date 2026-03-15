# Học Viện Làm Giàu - Website Khóa Học Làm Giàu & Phát Triển Bản Thân

[![Status](https://img.shields.io/badge/status-complete-success)]()
[![Version](https://img.shields.io/badge/version-1.0-blue)]()

Trang thương mại điện tử chuyên bán **khóa học làm giàu** và **sách phát triển bản thân** với thiết kế hiện đại, responsive và đầy đủ tính năng giỏ hàng.

---

## 📋 Mục Lục

- [Tổng Quan Dự Án](#-tổng-quan-dự-án)
- [Thành Viên Nhóm](#-thành-viên-nhóm)
- [Cấu Trúc Website](#-cấu-trúc-website)
- [Tính Năng Chính](#-tính-năng-chính)
- [Hệ Thống Giỏ Hàng](#-hệ-thống-giỏ-hàng)
- [Cấu Trúc Thư Mục](#-cấu-trúc-thư-mục)
- [Danh Sách Khóa Học](#-danh-sách-khóa-học)
- [Công Nghệ Sử Dụng](#-công-nghệ-sử-dụng)
- [Hướng Dẫn Sử Dụng](#-hướng-dẫn-sử-dụng)
- [Tính Năng Tương Lai](#-tính-năng-tương-lai)

---

## 📝 Tổng Quan Dự Án

### Tên Đề Tài
**Trang thương mại cá nhân bán khóa học và sách dạy làm giàu & phát triển bản thân**

### Mô Tả
Website được xây dựng nhằm:
- Quảng bá hình ảnh cá nhân và thương hiệu
- Bán khóa học & sách làm giàu
- Cung cấp nền tảng học tập trực tuyến 24/7
- Kết nối với học viên qua newsletter và social media

### Yêu Cầu Kỹ Thuật Đã Hoàn Thành
- ✅ **Header**: Logo + Menu/Nav + Nút/Biểu tượng (Cart, Shop, User)
- ✅ **Banner/Hero**: Ảnh banner + Tiêu đề + CTA (Call to Action)
- ✅ **Feature Section**: 6 features (Truy Cập Trọn Đời, Học Online 24/7, Tiết Kiệm 90%, Ưu Đãi Đặc Biệt, Cam Kết Hiệu Quả, Hỗ Trợ 24/7)
- ✅ **Product Section**: 15 sản phẩm (tên, giá, ảnh, đánh giá)
- ✅ **Bestsellers Section**: 6 sản phẩm bán chạy nhất
- ✅ **Newsletter Section**: Form nhập email
- ✅ **Footer**: Thông tin + Liên hệ + Social Icons
- ✅ **Mobile Menu**: Hamburger menu responsive
- ✅ **Shopping Cart**: Giỏ hàng đầy đủ chức năng

---

## 👥 Thành Viên Nhóm

Dự án được thực hiện bởi nhóm 5 học sinh lớp **12T1**:

| STT | Họ và Tên | Mã Số | Vai Trò Chính |
|:---:|:---|:---:|:---|
| 1 | **Hồ Khắc Minh Quân** | 1910010 | Leader / Coder / Content Creator |
| 2 | **Trần Khánh Trung** | 1910019 | Readme Writer / Coder |
| 3 | **Vũ Dương Khánh Linh** | 1906139 | Content Creator |
| 4 | **Hồ Thị Minh Khuê** | 1906123 | Content Creator |
| 5 | **Nguyễn Ngọc Linh Đan** | 1906045 | Coder |

---

## 🏛️ Cấu Trúc Website

### Hệ Thống Điều Hướng

```
index.html (Trang Chủ)
├── Header
│   ├── Hamburger Menu → Mobile Menu
│   ├── Shop Icon → shop.html
│   ├── Cart Icon + Badge → cart.html
│   └── User Icon → Account
│
├── Hero Banner
├── Features (6 lợi ích)
├── Bestsellers (6 khóa học bán chạy)
├── Featured Courses
├── Newsletter
└── Footer

shop.html (Tất Cả Khóa Học)
├── Back Arrow → index.html
├── Course Grid (15 khóa học)
└── Cart → cart.html

sproduct.html (Chi Tiết Khóa Học)
├── Breadcrumb: Trang Chủ / Khóa Học / [Tên Khóa Học]
├── Course Features (4 lợi ích)
├── Add to Cart
├── Course Info (curriculum)
└── Related Courses

cart.html (Giỏ Khóa Học)
├── Cart Items (editable)
├── Order Summary
├── Trust Badges
└── Checkout
```

### Breadcrumb Examples

| Trang | Breadcrumb |
|------|------------|
| `index.html` | (Không có) |
| `shop.html` | Trang Chủ / Tất Cả Khóa Học |
| `sproduct.html?id=1` | Trang Chủ / Khóa Học / Bí mật làm giàu của các tỷ phú |

---

## ✨ Tính Năng Chính

### 1. Shopping Cart System
- Hiển thị đầy đủ thông tin sản phẩm (ảnh, tên, giá)
- Điều chỉnh số lượng (+/- buttons và input)
- Xóa sản phẩm khỏi giỏ
- Tự động tính subtotal, shipping, total
- **Miễn phí vận chuyển** cho đơn hàng trên 500,000₫
- Trạng thái giỏ hàng trống với "Continue Shopping"
- Nút Checkout (placeholder cho payment integration)
- Trust badges (Secure payment, 7-day return, Nationwide shipping)

### 2. Add to Cart Functionality
- Hoạt động trên `sproduct.html` và `shop.html`
- Hiển thị thông báo thành công
- Cart count badge tự động cập nhật
- Dữ liệu persist trong localStorage

### 3. Shop Icon trong Header
- Icon store (`fa-store`) bên cạnh cart icon
- Redirect đến `shop.html` khi click
- Có sẵn trên tất cả các trang

### 4. Cart Count Badge
- Badge tròn màu đỏ hiển thị số lượng sản phẩm
- Cập nhật động khi thêm/xóa sản phẩm
- Tự động ẩn khi giỏ hàng trống

### 5. Mobile Hamburger Menu
- Slide-in menu từ bên trái
- Overlay background khi mở
- Menu items:
  - 🏠 Trang chủ (Home)
  - 📚 Khóa Học (Shop)
  - 🛒 Giỏ hàng (Cart)
  - 👤 Tài khoản (Account)
  - ❤️ Yêu thích (Wishlist)
  - 📜 Lịch sử đơn hàng (Order History)
  - ❓ Trợ giúp (Help)
- Social media links trong footer
- Close button và overlay click để đóng

### 6. Footer (4 Columns)

**Hỗ Trợ Học Viên:**
- Contact (mailto:support@hocviendlamgiau.vn)
- Shipping & Delivery
- Terms & Conditions
- FAQ
- Privacy Policy

**Liên Kết Nhanh:**
- Khóa Học
- Về Chúng Tôi
- Blog
- Liên Hệ

**Thông Tin Liên Hệ:**
- 📍 Tầng 15, Tòa nhà Tài Chính, Quận 1, TP.HCM
- 📞 1900 6789
- ✉️ support@hocviendlamgiau.vn
- 🕐 8:00 - 22:00 (Thứ 2 - Chủ Nhật)

**Follow Us:**
- Facebook, Twitter, Instagram, Pinterest, TikTok, YouTube
- Payment methods: Visa, Mastercard, PayPal

---

## 🛒 Hệ Thống Giỏ Hàng

### localStorage Structure
```javascript
cart = [
  {
    id: 1,
    name: "Tên Khóa Học",
    price: 599,  // tính bằng nghìn
    image: "src/image-product/1.png",
    quantity: 2
  },
  // ...
]
```

### Key Functions

| Function | Mô Tả |
|----------|-------------|
| `addToCart(id, qty)` | Thêm sản phẩm vào giỏ |
| `removeFromCart(id)` | Xóa sản phẩm khỏi giỏ |
| `updateQuantity(id, qty)` | Cập nhật số lượng |
| `getCartTotals()` | Tính subtotal, shipping, total |
| `renderCart()` | Hiển thị cart items trên cart.html |
| `updateCartCount()` | Cập nhật badge count trong header |
| `formatPrice(price)` | Định dạng tiền Việt Nam |
| `showNotification(msg, type)` | Hiển thị toast notification |

### Pricing Logic
- Giá lưu trữ dưới dạng nghìn (vd: 599 = 599,000₫)
- Hiển thị định dạng với `formatPrice()`
- Shipping: Miễn phí cho orders ≥ 500,000₫, ngược lại 30,000₫

---

## 📁 Cấu Trúc Thư Mục

```
Khoa-hoc-day-lam-giau-website-main/
├── index.html              # Trang chủ
├── shop.html               # Trang tất cả khóa học
├── sproduct.html           # Trang chi tiết sản phẩm
├── cart.html               # Trang giỏ hàng
├── account.html            # Trang tài khoản
├── script.js               # JavaScript chính
├── style.css               # CSS chính
├── README.md               # Tài liệu này
├── Info.docx               # Thông tin dự án
│
├── src/                    # Thư mục assets
│   ├── image-product/      # 15 ảnh sản phẩm (1.png - 15.png)
│   ├── features/           # 6 icon features (f1.png - f6.png)
│   ├── products/           # Ảnh featured products (f1.jpg - f8.jpg)
│   └── logo/               # Logo website (logo.png)
│
└── Documentation/
    ├── CART_FEATURES.md    # Tài liệu giỏ hàng
    ├── SHOP_IMPLEMENTATION.md # Tài liệu shop page
    ├── IMAGE_MIGRATION.md  # Tài liệu image paths
    └── COURSE_CONVERSION.md # Tài liệu chuyển đổi course platform
```

### Trạng Thái Images

| Folder | Status | Files |
|--------|--------|-------|
| `src/image-product/` | ✅ **Complete** | 12 files (missing: 7, 8, 12) |
| `src/features/` | ❌ Needs images | f1.png - f6.png |
| `src/products/` | ❌ Needs images | f1.jpg - f8.jpg |
| `src/logo/` | ❌ Needs image | logo.png |

---

## 📚 Danh Sách Khóa Học

| ID | Tên Khóa Học | Giá |
|----|--------------|-----|
| 1 | Bí mật làm giàu của các tỷ phú | 599.000₫ |
| 2 | Thiên văn học và các làm giàu bí ẩn | 649.000₫ |
| 3 | Sổ tay về cách giao tiếp với người giàu | 399.000₫ |
| 4 | Giàu không khó khi ta chịu khó | 367.000₫ |
| 5 | Thói quen hằng ngày của giới tài phiệt | 499.000₫ |
| 6 | Mở rộng đời sống vật chất như mở rộng ví tiền | 799.000₫ |
| 7 | Tết này con bận đi làm | 199.000₫ |
| 8 | Mặt dày nhưng ví cũng dày | 799.000₫ |
| 9 | (LIMITED EDITION) Từ điển bách khoa | 1.499.000₫ |
| 10 | Bắt đầu một chặng đường dài | 299.000₫ |
| 11 | Ánh sáng cuối con đường | 459.000₫ |
| 12 | Khi tiền trở thành công cụ | 529.000₫ |
| 13 | Những thương vụ thay đổi cuộc đời | 649.000₫ |
| 14 | Tư duy của người giàu | 299.000₫ |
| 15 | Con đường đến tự do tài chính | 399.000₫ |

---

## 💻 Công Nghệ Sử Dụng

### Frontend
- **HTML5** - Cấu trúc trang
- **CSS3** - Styling với Flexbox, Grid
- **JavaScript (ES6+)** - Xử lý logic, localStorage
- **Font Awesome** - Icons

### Features
- **localStorage API** - Lưu giỏ hàng persistent
- **Responsive Design** - Mobile, Tablet, Desktop
- **Dynamic Content Loading** - URL parameters
- **Toast Notifications** - User feedback

### Browser Compatibility
- Modern browsers (Chrome, Firefox, Safari, Edge)
- localStorage API required
- CSS Grid & Flexbox required
- ES6 JavaScript (const, let, arrow functions, template literals)

---

## 🚀 Hướng Dẫn Sử Dụng

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

## 🔮 Tính Năng Tương Lai

### Giai Đoạn 1 (Cơ Bản)
- [ ] Thêm missing images (7.png, 8.png, 12.png)
- [ ] Hoàn thiện feature icons (f1.png - f6.png)
- [ ] Hoàn thiện product images (f1.jpg - f8.jpg)
- [ ] Thêm logo chính thức

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

## 📞 Liên Hệ

**Học Viện Làm Giàu**

- **Địa chỉ**: Tầng 15, Tòa nhà Tài Chính, Quận 1, TP.HCM
- **Hotline**: 1900 6789
- **Email**: support@hocviendlamgiau.vn
- **Giờ làm việc**: 8:00 - 22:00 (Thứ 2 - Chủ Nhật)

---

## 📄 Giấy Phép

Dự án được thực hiện cho mục đích học tập. Mọi thông tin chỉ mang tính chất minh họa.

---

**© 2026 Học Viện Làm Giàu. Tri thức dẫn lối thành công.**
