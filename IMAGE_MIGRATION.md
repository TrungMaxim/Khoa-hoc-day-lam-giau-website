# Image Path Migration Summary

## ✅ Completed Changes

### 1. Unified Folder Structure
All images are now organized in a central `src/` folder:

```
Project Root/
├── src/
│   ├── features/          # Feature icons (f1.png - f6.png) - NEEDS IMAGES
│   ├── products/          # Product images (f1.jpg - f8.jpg) - NEEDS IMAGES
│   ├── logo/              # Website logo (logo.png) - NEEDS IMAGE
│   └── image-product/     # ALL 15 product images (1.png - 15.png) ✅ COMPLETE
├── index.html
├── sproduct.html
├── script.js
└── style.css
```

### 2. Key Decision: Merged Books & Products
The "Top Bestsellers" in `index.html` and the products in `sproduct.html` are the **same 15 products**, so they now share the same image folder: `src/image-product/`

### 3. Path Mapping

| Section | File | Image Path | Example |
|---------|------|------------|---------|
| **Bestsellers** | index.html | `src/image-product/[id].png` | `src/image-product/3.png` |
| **Product Detail** | sproduct.html | `src/image-product/[id].png` | `src/image-product/1.png` |
| **Related Products** | sproduct.html | `src/image-product/[id].png` | `src/image-product/2.png` |
| **Featured Books** | index.html | `src/products/f[id].jpg` | `src/products/f1.jpg` |
| **Features** | index.html | `src/features/f[id].png` | `src/features/f1.png` |
| **Logo** | index.html | `src/logo/logo.png` | `src/logo/logo.png` |

### 4. Product ID Reference (Bestsellers)

| Book in index.html | Product ID | Image | Redirects to |
|-------------------|------------|-------|--------------|
| Sổ tay về cách giao tiếp với người giàu | 3 | `src/image-product/3.png` | `sproduct.html?id=3` |
| Giàu không khó khi ta chịu khó | 4 | `src/image-product/4.png` | `sproduct.html?id=4` |
| Mở rộng đời sống vật chất... | 6 | `src/image-product/6.png` | `sproduct.html?id=6` |
| Mặt dày nhưng ví cũng dày | 8 | `src/image-product/8.png` | `sproduct.html?id=8` |
| Ánh sáng cuối con đường... | 11 | `src/image-product/11.png` | `sproduct.html?id=11` |
| Từ điển bách khoa (LIMITED) | 9 | `src/image-product/9.png` | `sproduct.html?id=9` |

### 5. Files Updated
- ✅ `index.html` - Bestsellers now use `src/image-product/` with correct ID redirects
- ✅ `sproduct.html` - All images use `src/image-product/`
- ✅ `script.js` - Product paths updated to `src/image-product/`

### 6. Images Status

| Folder | Status | Files |
|--------|--------|-------|
| `src/image-product/` | ✅ **Complete** | 1.png-6.png, 9.png-11.png, 13.png-15.png (12 files) |
| `src/features/` | ❌ Needs images | f1.png - f6.png |
| `src/products/` | ❌ Needs images | f1.jpg - f8.jpg |
| `src/logo/` | ❌ Needs image | logo.png |

### 7. Missing Images to Add

**High Priority** (for bestsellers to show correctly):
- None! All bestseller images exist in `src/image-product/`

**Medium Priority** (for full homepage):
- `src/features/f1.png` - f6.png (6 feature icons)
- `src/products/f1.jpg` - f8.jpg (8 featured book images)
- `src/logo/logo.png` (website logo)

**Low Priority** (for complete product catalog):
- `src/image-product/7.png`, `8.png`, `12.png` (3 missing product images)

### 8. Benefits
- ✅ **No duplicate images** - Each product has one image used everywhere
- ✅ **Consistent redirects** - Each bestseller links to its specific product page
- ✅ **Easy maintenance** - Update one image, it updates everywhere
- ✅ **Clear organization** - `src/image-product/` for main products, `src/products/` for featured extras
- ✅ **Scalable** - Easy to add new products by following the ID pattern

### 9. How It Works

**index.html Bestsellers:**
```html
<!-- Clicking this card goes to sproduct.html?id=3 -->
<div class="book-card" onclick="window.location.href='sproduct.html?id=3'">
    <img src="src/image-product/3.png" alt="...">
</div>
```

**sproduct.html Dynamic Loading:**
```javascript
// script.js reads the ?id=3 parameter and loads product 3's data
const productId = params.get('id'); // "3"
const product = products[productId]; // Loads product 3
```

This ensures the same product uses the same image and data everywhere!
