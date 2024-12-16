<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Coffe & Tea</title>
</head>
<body style="
    width: 100dvw;
    height: 100dvh;
    margin: 0;
    padding: 0;
">
    <div style="
                width: 100%;
                height: 100%;
                margin: 0;
                padding: 0;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                text-align: center;
                background-color: rgb(50, 50, 50);
                color: white;
    ">
        <div>
            <h1 style="font-size: 8rem; font-weight: bold;">Coffe & Tea</h1>

            @if (session('status') === 'success')
                <!-- xác thực thành công -->
                <p style="font-size: 2rem; font-weight: bold;">Xác thực thành công</p>
                <p style="font-size: 2rem;">Cảm ơn bạn đã sử dụng dịch vụ của chúng tôi!</p>
                <a href="http://localhost:5700" style="font-size: 2rem; color: white">Trở về trang chủ</a>
            @elseif (session('status') === 'expired')
                <!-- token đã hết hạn -->
                <p style="font-size: 2rem; font-weight: bold;">Token đã hết hạn!</p>
                <p style="font-size: 2rem;">Vui lòng kiểm tra email để nhận link kích hoạt mới</p>
                <p style="font-size: 2rem;">Xin cảm ơn</p>
            @elseif (session('status') === 'invalid')
                <!-- token không hợp lệ -->
                <p style="font-size: 2rem; font-weight: bold;">Token không hợp lệ!</p>
                <p style="font-size: 2rem;">Vui lòng kiểm tra lại email!</p>
            @elseif (session('status') === 'error')
                <!-- lỗi hệ thống -->
                <p style="font-size: 2rem; font-weight: bold;">Có lỗi xảy ra!</p>
                <p style="font-size: 2rem;">Vui lòng thử lại sau...</p>
                <p style="font-size: 2rem;">Lỗi: {{ session('message') }}</p>
            @elseif (session('status') === 'new-password')
                <!-- lấy mật khẩu mới -->
                <p style="font-size: 2rem; font-weight: bold;">Tạo mật khẩu mới thành công!</p>
                <p style="font-size: 2rem;">Mật khẩu mới của bạn là: <u><i>{{ session('message') }}</i></u></p>
                <p style="font-size: 2rem;">Hãy đăng nhập và đổi mật khẩu</p>
                <a href="http://localhost:5700" style="font-size: 2rem; color: white">Trang chủ</a>
            @endif


        </div>
    </div>
</body>
</html>
