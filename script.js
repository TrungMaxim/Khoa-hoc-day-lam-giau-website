/* === PRODUCT DATA === */
const products = {
    1: {
        id: 1,
        name: "Bí mật làm giàu của các tỷ phú",
        price: 599,
        image: "1.png",
        description: "Khám phá những chiến lược đầu tư, tư duy tài chính và thói quen bí mật đã giúp nhiều tỷ phú xây dựng khối tài sản khổng lồ."
    },
    2: {
        id: 2,
        name: "Thiên văn học và các làm giàu bí ẩn",
        price: 649,
        image: "2.png",
        description: "Cuốn sách bán chạy nhất và chuyên môn nhất về việc kết hợp chiêm tinh học và làm ăn hợp pháp."
    },
    3: {
        id: 3,
        name: "Sổ tay về cách giao tiếp với người giàu ft. Xuân Tóc Đỏ",
        price: 399,
        image: "https://via.placeholder.com/400x500",
        description: "Chiếc áo Polo Shirt tinh tế với chất liệu premium, phù hợp cho cả những buổi casual lẫn semi-formal."
    },
    4: {
        id: 4,
        name: "Giàu không khó khi ta chịu khó",
        price: 367,
        image: "4.png",
        description: "Áo V-Neck T-Shirt với form dáng thanh lịch và thoải mái. Lựa chọn tốt cho những dịp hàng ngày hoặc đi ra ngoài."
    },
    5: {
        id: 5,
        name: "Thói quen hằng ngày của giới tài phiệt",
        price: 499,
        image: "5.png",
        description: "Áo thun sọc với thiết kế hiện đại và màu sắc bắt mắt. Chất liệu cotton mềm mại, phù hợp với mọi lứa tuổi."
    },
    6: {
        id: 6,
        name: "Mở rộng đời sống vật chất như mở rộng ví tiền",
        price: 799,
        image: "6.png",
        description: "Chiếc áo Henley cổ điển với nút cài trên ngực. Thoải mái và phong cách, hoàn hảo cho những dịp bình thường."
    },
    7: {
        id: 7,
        name: "Tết này con bận đi làm",
        price: 199,
        image: "7.png",
        description: "Áo tay dài từ chất liệu cotton chất lượng cao. Thích hợp cho mùa thu đông hoặc những ai thích style tay dài."
    },
    8: {
        id: 8,
        name: "Mặt dày nhưng ví cũng dày",
        price: 799,
        image: "8.png",
        description: "Áo thun cổ tròn kinh điển với phom dáng năng động. Lựa chọn an toàn và thời trang cho mọi mùa."
    },
    9: {
        id: 9,
        name: "(LIMITED EDITION) Từ điển bách khoa dành riêng cho giới tài phiệt",
        price: 1499,
        image: "9.png",
        description: "Áo sơ mi Oxford với chất vải bền và bóng mịn. Lý tưởng cho những buổi làm việc hoặc dự tiệc."
    },
    10: {
        id: 10,
        name: "Bắt đầu một chặng đường dài chính là bước đi đầu tiên",
        price: 299,
        image: "10.png",
        description: "Áo linen casual với màu sắc nhẹ nhàng. Thích hợp cho những ngày hè nóng bức."
    },
    11: {
        id: 11,
        name: "Ánh sáng cuối con đường chính là gì với giới tài phiệt?",
        price: 459,
        image: "11.png",
        description: "Áo denim bền chắc với kiểu dáng trendy. Phù hợp phối với quần jeans hoặc khaki."
    },
    12: {
        id: 12,
        name: "Khi tiền trở thành công cụ chứ không phải mục tiêu",
        price: 529,
        image: "12.png",
        description: "Áo thun phong cách vintage với thiết kế độc đáo. Tạo điểm nhấn cho outfit hàng ngày."
    },
    13: {
        id: 13,
        name: "Những thương vụ thay đổi cuộc đời",
        price: 649,
        image: "13.png",
        description: "Áo vừa vặn cơ thể được thiết kế cho những người tập thể dục. Thoáng khí và co giãn tốt."
    },
    14: {
        id: 14,
        name: "Tư duy của người giàu: Không phải ai cũng nhìn thấy cơ hội",
        price: 299,
        image: "14.png",
        description: "Áo thun oversized với phom dáng thoải mái. Phù hợp với phong cách streetwear hiện đại."
    },
    15: {
        id: 15,
        name: "Con đường đến tự do tài chính",
        price: 399,
        image: "15.png",
        description: "Áo thun từ cotton cao cấp với độ mềm mại tuyệt vời. Bền lâu và giữ màu tốt sau nhiều lần giặt."
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

