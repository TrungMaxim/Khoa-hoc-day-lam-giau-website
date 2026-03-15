# Shop Page Implementation Summary

## Overview
Created a new `shop.html` page that serves as the main product catalog, displaying all 15 products. The website now has a clear page hierarchy:

```
index.html (Home/Welcome Page)
    └── shop.html (Shop/All Products Page)
            └── sproduct.html (Single Product Detail Page)
```

## Files Created/Modified

### 1. **shop.html** (NEW)
- Displays all 15 products in a responsive grid
- Each product card shows:
  - Product image from `src/image-product/[id].png`
  - Product name
  - Star rating
  - Price
  - "Add to Cart" button
- Clicking any product redirects to `sproduct.html?id=[id]`
- Includes header with back arrow to home
- Breadcrumb: Home / Shop

### 2. **style.css** (UPDATED)
Added new styles for:
- `.shop-page` - Main shop container
- `.shop-header` - Shop title section
- `.products-grid` - CSS Grid layout for products
- `.shop-item` - Individual product cards
- `.view-shop-btn` - "View All Products" button on homepage
- Responsive breakpoints for mobile devices

### 3. **sproduct.html** (UPDATED)
- Updated breadcrumb to: `Home / Shop / [Product Name]`
- Product name in breadcrumb is now dynamic (updated by JavaScript)

### 4. **index.html** (UPDATED)
- Added "View All Products →" button in Featured Books section
- All cart icons in Featured Books now link to `shop.html`
- Featured Books section now has a `.section-header` wrapper

### 5. **script.js** (UPDATED)
- Updated `loadProduct()` function to populate breadcrumb with product name
- Changed selector from `.breadcrumb span` to `#product-name-breadcrumb`

## Navigation Flow

### From Homepage (index.html):
1. **Bestsellers section** → Click book → `sproduct.html?id=[3,4,6,8,9,11]`
2. **Featured Books** → Click cart icon → `shop.html`
3. **"View All Products" button** → `shop.html`

### From Shop Page (shop.html):
1. **Back arrow** → `index.html`
2. **Click any product** → `sproduct.html?id=[1-15]`

### From Product Detail (sproduct.html):
1. **Breadcrumb: Home** → `index.html`
2. **Breadcrumb: Shop** → `shop.html`
3. **Related products** → Other `sproduct.html?id=[x]`

## Breadcrumb Examples

| Page | Breadcrumb |
|------|------------|
| `index.html` | (No breadcrumb) |
| `shop.html` | Home / Shop |
| `sproduct.html?id=1` | Home / Shop / Bí mật làm giàu của các tỷ phú |
| `sproduct.html?id=3` | Home / Shop / Sổ tay về cách giao tiếp với người giàu |

## Product ID Reference

| ID | Product Name | Price |
|----|--------------|-------|
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

## Responsive Design

### Desktop (>799px):
- Shop grid: 4-5 columns
- Full header with center title

### Tablet (480px - 799px):
- Shop grid: 3-4 columns
- Adjusted padding and font sizes

### Mobile (<480px):
- Shop grid: 2 columns
- Compact product cards
- Smaller images (200px height)

## Images Used

All products use images from `src/image-product/`:
- `1.png` through `15.png`
- Currently 12 images exist (missing: 7.png, 8.png, 12.png)

## Next Steps (Optional Enhancements)

1. **Add filter/sort functionality** on shop page
2. **Add search bar** in shop header
3. **Pagination** if more products are added
4. **Category filtering** (e.g., self-help, fiction, etc.)
5. **Add missing images**: 7.png, 8.png, 12.png
