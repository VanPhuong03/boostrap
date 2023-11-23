let prevScrollPos = window.pageYOffset;
let atTop = true;

window.onscroll = function() {
  let currentScrollPos = window.pageYOffset;

  if (prevScrollPos > currentScrollPos) {
    // Lăn chuột lên
    document.getElementById("navbar").style.top = "0";
    atTop = false;
  } else {
    // Lăn chuột xuống
    document.getElementById("navbar").style.top = "-70px";
  }

  prevScrollPos = currentScrollPos;

  // Kiểm tra xem trang có đang ở đầu trang không
  if (currentScrollPos === 0) {
    atTop = true;
  }
};

// Kiểm tra khi cuộn trang
window.onscroll = function() {
  let currentScrollPos = window.pageYOffset;

  if (currentScrollPos === 0 && atTop) {
    // Nếu trang ở đầu trang và đang ở đầu trang, hiển thị thanh navbar
    document.getElementById("navbar").style.top = "0";
  } else {
    // Ngược lại, ẩn thanh navbar
    document.getElementById("navbar").style.top = "-70px";
  }
};
