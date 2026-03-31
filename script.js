/* === COURSE DATA === */
const products = {
    1: {
        id: 1,
        name: "Bí mật làm giàu của các tỷ phú",
        price: 599,
        image: "src/image-product/1.png",
        category: "tai-chinh",
        description: "Khám phá những chiến lược đầu tư, tư duy tài chính và thói quen bí mật đã giúp nhiều tỷ phú xây dựng khối tài sản khổng lồ. Khóa học bao gồm 15 chương với các case study thực tế từ những tỷ phú tự thân hàng đầu thế giới."
    },
    2: {
        id: 2,
        name: "Thiên văn học và các làm giàu bí ẩn",
        price: 649,
        image: "src/image-product/2.png",
        category: "kinh-doanh",
        description: "Cuốn sách bán chạy nhất và chuyên môn nhất về việc kết hợp chiêm tinh học và làm ăn hợp pháp. Học cách đọc vị thị trường qua các chu kỳ thiên văn và áp dụng vào đầu tư tài chính."
    },
    3: {
        id: 3,
        name: "Sổ tay về cách giao tiếp với người giàu ft. Xuân Tóc Đỏ",
        price: 399,
        image: "src/image-product/3.png",
        category: "ky-nang-mem",
        description: "Một quyển sổ tay nhỏ giúp mọi người biết cách hòa nhập với giới thượng lưu. Khóa học dạy kỹ năng giao tiếp, networking và xây dựng mối quan hệ với giới tinh hoa."
    },
    4: {
        id: 4,
        name: "Giàu không khó khi ta chịu khó",
        price: 367,
        image: "src/image-product/4.png",
        category: "phat-trien-ban-than",
        description: "Một quyển sách self-help cho những người đang gặp khó khăn tài chính. Lộ trình 90 ngày thay đổi tư duy và thói quen để đạt được tự do tài chính."
    },
    5: {
        id: 5,
        name: "Thói quen hằng ngày của giới tài phiệt",
        price: 499,
        image: "src/image-product/5.png",
        category: "phat-trien-ban-than",
        description: "Từ cách quản lý thời gian, đọc sách đến suy nghĩ chiến lược, những thói quen đã giúp nhiều người thành công. Học 10 thói quen buổi sáng của các CEO hàng đầu."
    },
    6: {
        id: 6,
        name: "Mở rộng đời sống vật chất như mở rộng ví tiền",
        price: 799,
        image: "src/image-product/6.png",
        category: "tai-chinh",
        description: "Hướng dẫn cách phát triển tư duy tài chính và tạo nhiều nguồn thu nhập để nâng cao chất lượng cuộc sống. Chiến lược xây dựng 7 nguồn thu nhập thụ động."
    },
    7: {
        id: 7,
        name: "Tết này con bận đi làm",
        price: 199,
        image: "src/image-product/7.png",
        category: "phat-trien-ban-than",
        description: "Một câu chuyện ngắn về một tỷ phú tương lai thay vì về quê thì về công ty làm thêm giờ. Bài học về sự hy sinh và đánh đổi để đạt được thành công."
    },
    8: {
        id: 8,
        name: "Mặt dày nhưng ví cũng dày",
        price: 799,
        image: "src/image-product/8.png",
        category: "phat-trien-ban-than",
        description: "Một quyển sách dành riêng cho những người sống cô độc nhưng muốn chứng minh cho cả thế giới thấy rằng mình vẫn có khả năng độc lập tài chính. Khóa học về resilience và mental toughness."
    },
    9: {
        id: 9,
        name: "(LIMITED EDITION) Từ điển bách khoa dành riêng cho giới tài phiệt",
        price: 1499,
        image: "src/image-product/9.png",
        category: "tai-chinh",
        description: "Ấn bản giới hạn tổng hợp các thuật ngữ, chiến lược đầu tư, tư duy kinh doanh và câu chuyện của những người giàu có. Bộ khóa học cao cấp với 50+ video và tài liệu độc quyền."
    },
    10: {
        id: 10,
        name: "Bắt đầu một chặng đường dài chính là bước đi đầu tiên",
        price: 299,
        image: "src/image-product/10.png",
        category: "phat-trien-ban-than",
        description: "Cuốn sách dành cho người mới bắt đầu học quản lý tài chính và xây dựng nền tảng kinh tế cá nhân. Lộ trình 12 tháng từ con số 0 đến tự do tài chính."
    },
    11: {
        id: 11,
        name: "Ánh sáng cuối con đường chính là gì với giới tài phiệt?",
        price: 459,
        image: "src/image-product/11.png",
        category: "phat-trien-ban-than",
        description: "Khám phá mục tiêu thật sự của việc làm giàu: tự do tài chính, tầm ảnh hưởng và giá trị để lại cho xã hội. Khóa học về legacy building và philanthropy."
    },
    12: {
        id: 12,
        name: "Khi tiền trở thành công cụ chứ không phải mục tiêu",
        price: 529,
        image: "src/image-product/12.png",
        category: "tai-chinh",
        description: "Giúp người đọc hiểu cách sử dụng tiền để tạo ra cơ hội, đầu tư cho bản thân và xây dựng tương lai bền vững. Tư duy đúng về tiền bạc và thịnh vượng."
    },
    13: {
        id: 13,
        name: "Những thương vụ thay đổi cuộc đời",
        price: 649,
        image: "src/image-product/13.png",
        category: "kinh-doanh",
        description: "Phân tích các thương vụ kinh doanh nổi tiếng và những bài học tài chính đằng sau chúng. Case studies từ các startup kỳ lân và tập đoàn đa quốc gia."
    },
    14: {
        id: 14,
        name: "Tư duy của người giàu: Không phải ai cũng nhìn thấy cơ hội",
        price: 299,
        image: "src/image-product/14.png",
        category: "phat-trien-ban-than",
        description: "So sánh sự khác biệt giữa tư duy tài chính của người giàu và người bình thường. 21 nguyên tắc tư duy làm giàu từ những người thành công nhất."
    },
    15: {
        id: 15,
        name: "Con đường đến tự do tài chính",
        price: 399,
        image: "src/image-product/15.png",
        category: "tai-chinh",
        description: "Một lộ trình thực tế từ quản lý tiền bạc, đầu tư thông minh đến xây dựng tài sản lâu dài. Bản đồ chi tiết 5 năm đến tự do tài chính."
    }
};

/* === LOAD PRODUCT DYNAMICALLY (for sproduct.html) === */
function loadProduct() {
    // Chỉ chạy nếu đang ở trang sproduct.html (có element product-display)
    if (!document.querySelector('.product-display')) {
        return;
    }

    // Lấy ID sản phẩm từ URL query parameter
    const params = new URLSearchParams(window.location.search);
    const productId = params.get('id') || 1; // Mặc định là sản phẩm 1

    const product = products[productId];

    if (product) {
        // Cập nhật title trang
        document.title = `Product Detail - ${product.name}`;

        // Cập nhật breadcrumb - chỉ cập nhật nếu có element
        const breadcrumbSpan = document.getElementById('product-name-breadcrumb');
        if (breadcrumbSpan) {
            breadcrumbSpan.textContent = product.name;
        }

        // Cập nhật hình ảnh
        const productImg = document.querySelector('.product-image img');
        if (productImg) {
            productImg.src = product.image;
            productImg.alt = product.name;
        }

        // Cập nhật tiêu đề sản phẩm
        const productTitle = document.querySelector('.product-details h1');
        if (productTitle) {
            productTitle.textContent = product.name;
        }

        // Cập nhật giá
        const priceEl = document.querySelector('.price');
        if (priceEl) {
            priceEl.textContent = `${product.price.toFixed(3)} ₫`;
        }

        // Cập nhật mô tả
        const descEl = document.querySelector('.description p');
        if (descEl) {
            descEl.textContent = product.description;
        }
    } else {
        console.warn(`Product with ID ${productId} not found`);
    }
}

// Chạy hàm khi trang tải xong
document.addEventListener('DOMContentLoaded', loadProduct);

/* === AUTO SCROLL CHO PHẦN RECOMMENDATIONS (for index.html) === */

const bookContainer = document.querySelector('.book-container');

// Tốc độ lướt (số pixel mỗi lần dịch chuyển)
const scrollStep = 1;
// Thời gian nghỉ (số mili-giây, càng nhỏ càng mượt)
const scrollDelay = 20;

let scrollInterval;

function startAutoScroll() {
    // Xóa interval cũ nếu có để tránh bị chồng chéo
    clearInterval(scrollInterval);

    scrollInterval = setInterval(() => {
        // Kiểm tra xem đã cuộn tới cuối chưa
        if (bookContainer.scrollLeft + bookContainer.clientWidth >= bookContainer.scrollWidth - 1) {
            // Quay về đầu (Reset)
            bookContainer.scrollLeft = 0;
        } else {
            // Dịch sang phải 1 chút
            bookContainer.scrollLeft += scrollStep;
        }
    }, scrollDelay);
}

// Bắt đầu chạy ngay khi tải trang - chỉ chạy nếu tồn tại book-container
if (bookContainer) {
    startAutoScroll();

    // === TÍNH NĂNG DỪNG KHI HOVER ===
    bookContainer.addEventListener('mouseenter', () => {
        clearInterval(scrollInterval);
    });

    bookContainer.addEventListener('mouseleave', () => {
        startAutoScroll();
    });

    bookContainer.addEventListener('touchstart', () => {
        clearInterval(scrollInterval);
    });
    bookContainer.addEventListener('touchend', () => {
        setTimeout(startAutoScroll, 2000);
    });
}

/* ===========================================
   === CART MANAGEMENT SYSTEM ===
   =========================================== */

// Initialize cart from localStorage or empty array
let cart = JSON.parse(localStorage.getItem('cart')) || [];

// Save cart to localStorage
function saveCart() {
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCount();
}

// Update cart count badge in header
function updateCartCount() {
    const cartCountEl = document.getElementById('cart-count');
    if (cartCountEl) {
        const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
        cartCountEl.textContent = totalItems;
        cartCountEl.style.display = totalItems > 0 ? 'flex' : 'none';
    }
}

// Add product to cart
function addToCart(productId, quantity = 1) {
    const product = products[productId];
    if (!product) {
        alert('Sản phẩm không tồn tại!');
        return;
    }

    // Check if product already in cart
    const existingItem = cart.find(item => item.id === productId);
    if (existingItem) {
        existingItem.quantity += quantity;
    } else {
        cart.push({
            id: productId,
            name: product.name,
            price: product.price,
            image: product.image,
            quantity: quantity
        });
    }

    saveCart();
    
    // Show success message
    showNotification('Đã thêm sản phẩm vào giỏ hàng!', 'success');
}

// Remove product from cart
function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    saveCart();
    renderCart();
    showNotification('Đã xóa sản phẩm khỏi giỏ hàng!', 'info');
}

// Update product quantity in cart
function updateQuantity(productId, newQuantity) {
    const item = cart.find(item => item.id === productId);
    if (item) {
        if (newQuantity <= 0) {
            removeFromCart(productId);
        } else {
            item.quantity = newQuantity;
            saveCart();
            renderCart();
        }
    }
}

// Calculate cart totals
function getCartTotals() {
    const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const shipping = subtotal >= 500000 ? 0 : 30000; // Free shipping over 500k
    const total = subtotal + shipping;
    
    return { subtotal, shipping, total };
}

// Format price as Vietnamese Dong
function formatPrice(price) {
    return price.toLocaleString('vi-VN') + '₫';
}

// Render cart items on cart.html
function renderCart() {
    const cartItemsEl = document.getElementById('cart-items');
    const emptyCartEl = document.getElementById('empty-cart-message');
    const subtotalEl = document.getElementById('subtotal');
    const shippingEl = document.getElementById('shipping');
    const totalEl = document.getElementById('total');
    const checkoutBtn = document.getElementById('checkout-btn');

    if (!cartItemsEl) return; // Not on cart page

    if (cart.length === 0) {
        cartItemsEl.style.display = 'none';
        emptyCartEl.style.display = 'block';
        if (checkoutBtn) checkoutBtn.disabled = true;
        return;
    }

    cartItemsEl.style.display = 'block';
    emptyCartEl.style.display = 'none';
    if (checkoutBtn) checkoutBtn.disabled = false;

    // Render cart items
    cartItemsEl.innerHTML = cart.map(item => `
        <div class="cart-item" data-id="${item.id}">
            <div class="cart-item-image">
                <img src="${item.image}" alt="${item.name}">
            </div>
            <div class="cart-item-details">
                <h4 class="cart-item-name">${item.name}</h4>
                <p class="cart-item-price">${formatPrice(item.price * 1000)}</p>
            </div>
            <div class="cart-item-quantity">
                <button class="qty-btn minus" onclick="updateQuantity(${item.id}, ${item.quantity - 1})">
                    <i class="fa-solid fa-minus"></i>
                </button>
                <input type="number" value="${item.quantity}" min="1" 
                       onchange="updateQuantity(${item.id}, parseInt(this.value))">
                <button class="qty-btn plus" onclick="updateQuantity(${item.id}, ${item.quantity + 1})">
                    <i class="fa-solid fa-plus"></i>
                </button>
            </div>
            <div class="cart-item-total">
                <p>${formatPrice(item.price * item.quantity * 1000)}</p>
            </div>
            <button class="remove-item" onclick="removeFromCart(${item.id})">
                <i class="fa-solid fa-trash"></i>
            </button>
        </div>
    `).join('');

    // Update totals
    const totals = getCartTotals();
    if (subtotalEl) subtotalEl.textContent = formatPrice(totals.subtotal * 1000);
    if (shippingEl) shippingEl.textContent = totals.shipping === 0 ? 'Miễn phí' : formatPrice(totals.shipping * 1000);
    if (totalEl) totalEl.textContent = formatPrice(totals.total * 1000);
}

// Show notification
function showNotification(message, type = 'success') {
    // Remove existing notification
    const existing = document.querySelector('.notification');
    if (existing) existing.remove();

    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.innerHTML = `
        <i class="fa-solid ${type === 'success' ? 'fa-circle-check' : 'fa-circle-info'}"></i>
        <span>${message}</span>
    `;

    document.body.appendChild(notification);

    // Animate in
    setTimeout(() => notification.classList.add('show'), 100);

    // Remove after 3 seconds
    setTimeout(() => {
        notification.classList.remove('show');
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

/* ===========================================
   === WISHLIST MANAGEMENT SYSTEM ===
   =========================================== */

// Initialize wishlist from localStorage or empty array
let wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];

// Save wishlist to localStorage
function saveWishlist() {
    localStorage.setItem('wishlist', JSON.stringify(wishlist));
    updateWishlistButtons();
}

// Toggle wishlist (add/remove)
function toggleWishlist(productId) {
    const product = products[productId];
    if (!product) {
        alert('Sản phẩm không tồn tại!');
        return;
    }

    const existingIndex = wishlist.findIndex(item => item.id === productId);
    
    if (existingIndex > -1) {
        // Remove from wishlist
        wishlist.splice(existingIndex, 1);
        showNotification('Đã xóa khỏi danh sách yêu thích', 'info');
    } else {
        // Add to wishlist
        wishlist.push({
            id: productId,
            name: product.name,
            price: product.price,
            image: product.image
        });
        showNotification('Đã thêm vào danh sách yêu thích!', 'success');
    }

    saveWishlist();
    
    // If on account page, re-render wishlist
    if (document.querySelector('#wishlist-grid')) {
        renderWishlist();
    }
}

// Update wishlist buttons state (filled/empty heart)
function updateWishlistButtons() {
    document.querySelectorAll('.wishlist-btn').forEach(btn => {
        // Get product ID from onclick attribute or data attribute
        const onclick = btn.getAttribute('onclick');
        const match = onclick.match(/toggleWishlist\((\d+)\)/);
        if (match) {
            const productId = parseInt(match[1]);
            const isInWishlist = wishlist.some(item => item.id === productId);
            
            if (isInWishlist) {
                btn.classList.add('active');
                btn.querySelector('i').classList.remove('fa-regular');
                btn.querySelector('i').classList.add('fa-solid');
            } else {
                btn.classList.remove('active');
                btn.querySelector('i').classList.remove('fa-solid');
                btn.querySelector('i').classList.add('fa-regular');
            }
        }
    });
}

// Render wishlist in account page
function renderWishlist() {
    const wishlistGrid = document.getElementById('wishlist-grid');
    const wishlistEmpty = document.getElementById('wishlist-empty');
    
    if (!wishlistGrid) return; // Not on account page
    
    if (wishlist.length === 0) {
        wishlistGrid.style.display = 'none';
        wishlistEmpty.style.display = 'block';
        return;
    }

    wishlistEmpty.style.display = 'none';
    wishlistGrid.style.display = 'grid';

    wishlistGrid.innerHTML = wishlist.map(item => `
        <div class="wishlist-item">
            <div class="wishlist-item-img">
                <img src="${item.image}" alt="${item.name}">
                <button class="wishlist-item-remove" onclick="toggleWishlist(${item.id}); event.stopPropagation();">
                    <i class="fa-solid fa-times"></i>
                </button>
            </div>
            <div class="wishlist-item-info">
                <h5>${item.name}</h5>
                <p class="price">${formatPrice(item.price * 1000)}</p>
                <div class="wishlist-item-actions">
                    <button class="add-to-cart-btn" onclick="addToCart(${item.id}, 1)">
                        <i class="fa-solid fa-cart-shopping"></i> Thêm Vào Giỏ
                    </button>
                    <button class="remove-wishlist-btn" onclick="toggleWishlist(${item.id})">
                        <i class="fa-solid fa-trash"></i> Xóa
                    </button>
                </div>
            </div>
        </div>
    `).join('');
}

// Initialize wishlist on page load
function initWishlist() {
    updateWishlistButtons();
    renderWishlist();
}

/* ===========================================
   === SHOP SEARCH & FILTER SYSTEM ===
   =========================================== */

// Category names mapping
const categoryNames = {
    'all': 'Tất Cả',
    'tai-chinh': 'Tài Chính',
    'kinh-doanh': 'Kinh Doanh',
    'ky-nang-mem': 'Kỹ Năng Mềm',
    'phat-trien-ban-than': 'Phát Triển Bản Thân'
};

// Render shop products with filter and search
function renderShopProducts() {
    const productsGrid = document.querySelector('.products-grid');
    const searchInput = document.getElementById('search-input');
    const categoryFilter = document.getElementById('category-filter');
    const filterResults = document.querySelector('.filter-results');
    
    if (!productsGrid) return; // Not on shop page
    
    // Get search query and category filter
    const searchQuery = searchInput ? searchInput.value.toLowerCase().trim() : '';
    const selectedCategory = categoryFilter ? categoryFilter.value : 'all';
    
    // Filter products
    let filteredProducts = Object.values(products).filter(product => {
        const matchesSearch = product.name.toLowerCase().includes(searchQuery);
        const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
        return matchesSearch && matchesCategory;
    });
    
    // Update results count
    if (filterResults) {
        filterResults.innerHTML = `Hiển thị <strong>${filteredProducts.length}</strong> khóa học`;
    }
    
    // Render products
    if (filteredProducts.length === 0) {
        productsGrid.innerHTML = `
            <div style="grid-column: 1/-1; text-align: center; padding: 60px 20px;">
                <i class="fa-solid fa-magnifying-glass" style="font-size: 60px; color: #ddd; margin-bottom: 20px;"></i>
                <h3 style="font-size: 20px; color: #666; margin-bottom: 10px;">Không tìm thấy khóa học nào</h3>
                <p style="color: #999;">Thử tìm kiếm với từ khóa khác hoặc chọn danh mục khác</p>
            </div>
        `;
        return;
    }
    
    productsGrid.innerHTML = filteredProducts.map(product => `
        <div class="product-card shop-item" onclick="window.location.href='sproduct.html?id=${product.id}'">
            <button class="wishlist-btn" onclick="event.stopPropagation(); toggleWishlist(${product.id})">
                <i class="fa-${wishlist.some(item => item.id === product.id) ? 'solid' : 'regular'} fa-heart${wishlist.some(item => item.id === product.id) ? ' active' : ''}"></i>
            </button>
            <div class="product-img">
                <img src="${product.image}" alt="${product.name}">
            </div>
            <div class="product-info">
                <h5>${product.name}</h5>
                <div class="stars">
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star${product.id % 2 === 0 ? '-half-alt' : ''}"></i>
                </div>
                <h4>${formatPrice(product.price * 1000)}</h4>
                <button class="add-cart-btn" onclick="event.stopPropagation(); addToCart(${product.id}, 1)">Ghi Danh Ngay</button>
            </div>
        </div>
    `).join('');
    
    // Re-bind wishlist button clicks
    updateWishlistButtons();
}

// Initialize shop filters
function initShopFilters() {
    const searchInput = document.getElementById('search-input');
    const categoryFilter = document.getElementById('category-filter');
    
    if (searchInput) {
        searchInput.addEventListener('input', () => {
            renderShopProducts();
        });
    }
    
    if (categoryFilter) {
        categoryFilter.addEventListener('change', () => {
            renderShopProducts();
        });
    }
}



// Initialize cart on page load
document.addEventListener('DOMContentLoaded', function() {
    updateCartCount();
    renderCart();

    // Initialize account page if on account.html
    initAccountPage();
    
    // Initialize wishlist
    initWishlist();
    
    // Initialize shop filters if on shop page
    initShopFilters();
    renderShopProducts();

    // === MOBILE MENU FUNCTIONALITY ===
    const menuBtn = document.getElementById('menu-btn');
    const closeMenuBtn = document.getElementById('close-menu');
    const mobileMenu = document.getElementById('mobile-menu');
    const menuOverlay = document.getElementById('menu-overlay');

    // Open menu
    if (menuBtn) {
        menuBtn.addEventListener('click', function() {
            mobileMenu.classList.add('active');
            menuOverlay.classList.add('active');
            document.body.style.overflow = 'hidden';
        });
    }

    // Close menu
    function closeMenu() {
        if (mobileMenu) mobileMenu.classList.remove('active');
        if (menuOverlay) menuOverlay.classList.remove('active');
        document.body.style.overflow = '';
    }

    if (closeMenuBtn) {
        closeMenuBtn.addEventListener('click', closeMenu);
    }

    if (menuOverlay) {
        menuOverlay.addEventListener('click', closeMenu);
    }

    // Close menu when clicking a link
    document.querySelectorAll('.mobile-menu-nav a').forEach(link => {
        link.addEventListener('click', closeMenu);
    });

    // Add event listeners for "Add to Cart" buttons on sproduct.html
    const addToCartBtn = document.querySelector('.add-to-cart');
    if (addToCartBtn) {
        addToCartBtn.addEventListener('click', function() {
            const params = new URLSearchParams(window.location.search);
            const productId = parseInt(params.get('id')) || 1;
            const quantityInput = document.querySelector('.quantity');
            const quantity = parseInt(quantityInput.value) || 1;
            addToCart(productId, quantity);
        });
    }

    // Add event listeners for "Add to Cart" buttons on shop.html
    document.querySelectorAll('.add-cart-btn').forEach((btn, index) => {
        btn.addEventListener('click', function(e) {
            e.stopPropagation();
            const productId = index + 1;
            addToCart(productId, 1);
        });
    });

    // Checkout button handler
    const checkoutBtn = document.getElementById('checkout-btn');
    if (checkoutBtn) {
        checkoutBtn.addEventListener('click', function() {
            if (cart.length === 0) {
                showNotification('Giỏ hàng đang trống!', 'info');
                return;
            }
            alert('Chức năng thanh toán đang được phát triển!\n\nTổng tiền: ' + formatPrice(getCartTotals().total * 1000));
        });
    }
});

/* ===========================================
   === ACCOUNT PAGE FUNCTIONALITY ===
   =========================================== */

// Guest account data (stored in localStorage)
let currentUser = JSON.parse(localStorage.getItem('currentUser')) || null;

// Initialize account page
function initAccountPage() {
    // Check if we're on account page
    if (!document.querySelector('.account-page')) return;
    
    // Check if user is logged in (or guest)
    if (currentUser) {
        showLoggedInView();
    } else {
        showGuestView();
    }
    
    // Setup login form
    const loginForm = document.getElementById('login-form');
    if (loginForm) {
        loginForm.addEventListener('submit', handleLogin);
    }
    
    // Setup register form
    const registerForm = document.getElementById('register-form');
    if (registerForm) {
        registerForm.addEventListener('submit', handleRegister);
    }
    
    // Setup account navigation
    setupAccountNav();
}

// Show guest view
function showGuestView() {
    const guestView = document.getElementById('guest-view');
    const loggedView = document.getElementById('logged-view');
    if (guestView) guestView.style.display = 'block';
    if (loggedView) loggedView.style.display = 'none';
}

// Show logged in view
function showLoggedInView() {
    const guestView = document.getElementById('guest-view');
    const loggedView = document.getElementById('logged-view');
    if (guestView) guestView.style.display = 'none';
    if (loggedView) loggedView.style.display = 'grid';
    
    // Update user info
    if (currentUser) {
        document.getElementById('user-name-display').textContent = currentUser.name;
        document.getElementById('user-email-display').textContent = currentUser.email;
        document.getElementById('settings-name').value = currentUser.name;
        document.getElementById('settings-email').value = currentUser.email;
    }
}

// Handle login
function handleLogin(e) {
    e.preventDefault();
    const email = document.getElementById('login-email').value;
    // For demo, create a guest-like account
    currentUser = {
        name: email.split('@')[0],
        email: email,
        isGuest: false,
        enrolledCourses: []
    };
    localStorage.setItem('currentUser', JSON.stringify(currentUser));
    showNotification('Đăng nhập thành công!', 'success');
    setTimeout(() => showLoggedInView(), 500);
}

// Handle register
function handleRegister(e) {
    e.preventDefault();
    const name = document.getElementById('register-name').value;
    const email = document.getElementById('register-email').value;
    
    currentUser = {
        name: name,
        email: email,
        isGuest: false,
        enrolledCourses: []
    };
    localStorage.setItem('currentUser', JSON.stringify(currentUser));
    showNotification('Đăng ký thành công! Chào mừng ' + name + ' đến với Monro', 'success');
    setTimeout(() => showLoggedInView(), 500);
}

// Continue as guest
function continueAsGuest() {
    currentUser = {
        name: 'Khách',
        email: 'guest@monro.edu.vn',
        isGuest: true,
        enrolledCourses: []
    };
    localStorage.setItem('currentUser', JSON.stringify(currentUser));
    showNotification('Đã tiếp tục như khách', 'success');
    setTimeout(() => showLoggedInView(), 500);
}

// Logout
function logout() {
    if (confirm('Bạn có chắc muốn đăng xuất?')) {
        currentUser = null;
        localStorage.removeItem('currentUser');
        showNotification('Đã đăng xuất', 'info');
        setTimeout(() => showGuestView(), 500);
    }
}

// Save settings
function saveSettings() {
    if (currentUser) {
        const newName = document.getElementById('settings-name').value;
        currentUser.name = newName;
        localStorage.setItem('currentUser', JSON.stringify(currentUser));
        document.getElementById('user-name-display').textContent = newName;
        showNotification('Đã lưu thay đổi', 'success');
    }
}

// Setup account navigation
function setupAccountNav() {
    const navLinks = document.querySelectorAll('.account-nav a');
    const sections = document.querySelectorAll('.content-section');

    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();

            // Update active state
            navLinks.forEach(l => l.classList.remove('active'));
            this.classList.add('active');

            // Show corresponding section
            const target = this.getAttribute('href').substring(1);
            sections.forEach(section => {
                if (section.id === target) {
                    section.style.display = 'block';
                    // Render wishlist if opening wishlist tab
                    if (target === 'wishlist') {
                        renderWishlist();
                    }
                } else {
                    section.style.display = 'none';
                }
            });
        });
    });
}
