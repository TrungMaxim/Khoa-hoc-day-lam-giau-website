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
