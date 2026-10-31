function upDate(previewPic) {
    // 3.1. Kiểm tra sự kiện đã kích hoạt chưa
    console.log("Sự kiện mouseover đã kích hoạt!");

    // 3.2. In thông tin alt và src ra console
    console.log("Alt: " + previewPic.alt);
    console.log("Src: " + previewPic.src);

    // 3.3 & 3.4. Thay đổi nội dung văn bản thành thuộc tính alt của ảnh
    document.getElementById("image").innerHTML = previewPic.alt;

    // 3.5 & 3.6. Thay đổi hình nền của div#image thành src của ảnh đang rê chuột vào
    document.getElementById("image").style.backgroundImage = "url('" + previewPic.src + "')";
}

function unDo() {
    // 4.1. Đưa hình nền trở lại rỗng ban đầu
    document.getElementById("image").style.backgroundImage = "url('')";

    // 4.2. Khôi phục lại đoạn văn bản ban đầu
    document.getElementById("image").innerHTML = "Di chuột qua một hình ảnh bên dưới để hiển thị ở đây.";
}