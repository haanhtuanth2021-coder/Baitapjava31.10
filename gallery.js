// Yêu cầu 8: Trình nghe sự kiện onload và vòng lặp qua từng hình ảnh (Yêu cầu 9.b)
window.onload = function() {
    console.log("Trang web đã tải xong hoàn toàn.");
    
    // Lấy tất cả các hình ảnh có class là 'preview'
    let images = document.querySelectorAll(".gallery img");
    
    // Viết vòng lặp for để duyệt qua từng hình ảnh và gán thêm sự kiện focus, blur
    for (let i = 0; i < images.length; i++) {
        console.log("Đang thiết lập sự kiện cho ảnh thứ: " + (i + 1));
        
        // Yêu cầu 6 & 9: Thêm trình nghe sự kiện focus (khi dùng bàn phím Tab)
        images[i].addEventListener('focus', function() {
            console.log("Sự kiện focus đã được kích hoạt trên ảnh số " + (i + 1));
            upDate(this);
        });
        
        // Yêu cầu 6: Thêm trình nghe sự kiện blur (khi rời focus) tương tự unDo
        images[i].addEventListener('blur', function() {
            console.log("Sự kiện blur đã được kích hoạt trên ảnh số " + (i + 1));
            unDo();
        });
    }
};

function upDate(previewPic) {
    console.log("Sự kiện kích hoạt (mouseover/focus)");
    console.log("Alt text: " + previewPic.alt);
    console.log("Image source: " + previewPic.src);

    // Thay đổi văn bản và hình nền
    document.getElementById("image").innerHTML = previewPic.alt;
    document.getElementById("image").style.backgroundImage = "url('" + previewPic.src + "')";
}

function unDo() {
    console.log("Sự kiện khôi phục (mouseout/blur)");
    
    // Đưa về trạng thái ban đầu
    document.getElementById("image").style.backgroundImage = "url('')";
    document.getElementById("image").innerHTML = "Hover over an image below to display here.";
}
