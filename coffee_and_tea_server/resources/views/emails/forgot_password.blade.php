<div>
    <div>
        <p>Xin Chào, <span>{{ $name }}</span></p>
        <p>Cảm ơn bạn đã đăng ký dịch vụ của chúng tôi, vui lòng nhấn vào "Lấy lại mật khẩu" để tiếp tục sử dụng dịch vụ</p>
        <p>Xin cảm ơn!</p>
        <a href="{{ route('verify.token', ['email' => $email, 'token' => $token, 'handle' => 'forgot_password']) }}"
           style="text-decoration: underline">
            Lấy mật lại mật khẩu
        </a>
        <p><b><i><u>Email chỉ có hiệu lực trong 5 phút!</u></i></b></p>
        <br>
        <p>Coffe & Tea</p>
    </div>
</div>
