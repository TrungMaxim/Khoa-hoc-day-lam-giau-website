/* === PRODUCT DATA === */
const products = {
    1: {
        id: 1,
        name: "Bí mật làm giàu của các tỷ phú",
        price: 599,
        image: "image-product/1.png",
        description: "Khám phá những chiến lược đầu tư, tư duy tài chính và thói quen bí mật đã giúp nhiều tỷ phú xây dựng khối tài sản khổng lồ."
    },
    2: {
        id: 2,
        name: "Thiên văn học và các làm giàu bí ẩn",
        price: 649,
        image: "image-product/2.png",
        description: "Cuốn sách bán chạy nhất và chuyên môn nhất về việc kết hợp chiêm tinh học và làm ăn hợp pháp."
    },
    3: {
        id: 3,
        name: "Sổ tay về cách giao tiếp với người giàu ft. Xuân Tóc Đỏ",
        price: 399,
        image: "image-product/3.png",
        description: "Một quyển sổ tay nhỏ giúp mọi người biết cách hòa nhập với giới thượng lưu"
    },
    4: {
        id: 4,
        name: "Giàu không khó khi ta chịu khó",
        price: 367,
        image: "image-product/4.png",
        description: "Một quyển sách self-help cho những người đang gặp khó khăn tài chính."
    },
    5: {
        id: 5,
        name: "Thói quen hằng ngày của giới tài phiệt",
        price: 499,
        image: "image-product/5.png",
        description: "Từ cách quản lý thời gian, đọc sách đến suy nghĩ chiến lược, những thói quen đã giúp nhiều người thành công."
    },
    6: {
        id: 6,
        name: "Mở rộng đời sống vật chất như mở rộng ví tiền",
        price: 799,
        image: "image-product/6.png",
        description: "Hướng dẫn cách phát triển tư duy tài chính và tạo nhiều nguồn thu nhập để nâng cao chất lượng cuộc sống."
    },
    7: {
        id: 7,
        name: "Tết này con bận đi làm",
        price: 199,
        image: "image-product/7.png",
        description: "Một câu chuyện ngắn về một tỷ phú tương lai thay vì về quê thì về công ty làm thêm giờ."
    },
    8: {
        id: 8,
        name: "Mặt dày nhưng ví cũng dày",
        price: 799,
        image: "image-product/8.png",
        description: "Một quyển sách dành riêng cho những người sống cô độc nhưng muốn chứng minh cho cả thế giới thấy rằng mình vẫn có khả năng độc lập tài chính."
    },
    9: {
        id: 9,
        name: "(LIMITED EDITION) Từ điển bách khoa dành riêng cho giới tài phiệt",
        price: 1499,
        image: "image-product/9.png",
        description: "Ấn bản giới hạn tổng hợp các thuật ngữ, chiến lược đầu tư, tư duy kinh doanh và câu chuyện của những người giàu có."
    },
    10: {
        id: 10,
        name: "Bắt đầu một chặng đường dài chính là bước đi đầu tiên",
        price: 299,
        image: "image-product/10.png",
        description: "Cuốn sách dành cho người mới bắt đầu học quản lý tài chính và xây dựng nền tảng kinh tế cá nhân."
    },
    11: {
        id: 11,
        name: "Ánh sáng cuối con đường chính là gì với giới tài phiệt?",
        price: 459,
        image: "image-product/11.png",
        description: "Khám phá mục tiêu thật sự của việc làm giàu: tự do tài chính, tầm ảnh hưởng và giá trị để lại cho xã hội."
    },
    12: {
        id: 12,
        name: "Khi tiền trở thành công cụ chứ không phải mục tiêu",
        price: 529,
        image: "image-product/12.png",
        description: "Giúp người đọc hiểu cách sử dụng tiền để tạo ra cơ hội, đầu tư cho bản thân và xây dựng tương lai bền vững."
    },
    13: {
        id: 13,
        name: "Những thương vụ thay đổi cuộc đời",
        price: 649,
        image: "image-product/13.png",
        description: "Phân tích các thương vụ kinh doanh nổi tiếng và những bài học tài chính đằng sau chúng."
    },
    14: {
        id: 14,
        name: "Tư duy của người giàu: Không phải ai cũng nhìn thấy cơ hội",
        price: 299,
        image: "image-product/14.png",
        description: "So sánh sự khác biệt giữa tư duy tài chính của người giàu và người bình thường."
    },
    15: {
        id: 15,
        name: "Con đường đến tự do tài chính",
        price: 399,
        image: "image-product/15.png",
        description: "Một lộ trình thực tế từ quản lý tiền bạc, đầu tư thông minh đến xây dựng tài sản lâu dài."
    }
};

/* === LOAD PRODUCT DYNAMICALLY === */
function loadProduct() {
    // Lấy ID sản phẩm từ URL query parameter
    const params = new URLSearchParams(window.location.search);
    const productId = params.get('id') || 1; // Mặc định là sản phẩm 1

    const product = products[productId];

    if (product) {
        // Cập nhật title trang
        document.title = `Product Detail - ${product.name}`;

        // Cập nhật breadcrumb
        document.querySelector('.breadcrumb span').textContent = product.name;

        // Cập nhật hình ảnh
        document.querySelector('.product-image img').src = product.image;
        document.querySelector('.product-image img').alt = product.name;

        // Cập nhật tiêu đề sản phẩm
        document.querySelector('.product-details h1').textContent = product.name;

        // Cập nhật giá
        document.querySelector('.price').textContent = `${product.price.toFixed(3)} ₫`;

        // Cập nhật mô tả
        document.querySelector('.description p').textContent = product.description;
    } else {
        console.warn(`Product with ID ${productId} not found`);
    }
}

// Chạy hàm khi trang tải xong
document.addEventListener('DOMContentLoaded', loadProduct);

/* === AUTO SCROLL CHO PHẦN RECOMMENDATIONS === */

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
        // scrollLeft: vị trí hiện tại
        // clientWidth: chiều rộng đang hiển thị
        // scrollWidth: tổng chiều rộng thực tế của danh sách sách
        
        // Nếu vị trí hiện tại + chiều rộng màn hình >= tổng chiều rộng (tức là đã chạm đáy phải)
        if (bookContainer.scrollLeft + bookContainer.clientWidth >= bookContainer.scrollWidth - 1) {
            // Quay về đầu (Reset)
            bookContainer.scrollLeft = 0;
        } else {
            // Dịch sang phải 1 chút
            bookContainer.scrollLeft += scrollStep;
        }
    }, scrollDelay);
}

// Bắt đầu chạy ngay khi tải trang
if (bookContainer) {
    startAutoScroll();

    // === TÍNH NĂNG DỪNG KHI HOVER ===
    // Khi chuột vào vùng chứa sách -> Dừng lướt
    bookContainer.addEventListener('mouseenter', () => {
        clearInterval(scrollInterval);
    });

    // Khi chuột rời ra -> Tiếp tục lướt
    bookContainer.addEventListener('mouseleave', () => {
        startAutoScroll();
    });

    // Hỗ trợ cảm ứng trên điện thoại (khi chạm vào thì dừng)
    bookContainer.addEventListener('touchstart', () => {
        clearInterval(scrollInterval);
    });
    bookContainer.addEventListener('touchend', () => {
        // Đợi 2 giây sau khi thả tay ra mới chạy tiếp (cho trải nghiệm tốt hơn)
        setTimeout(startAutoScroll, 2000);
    });
}

