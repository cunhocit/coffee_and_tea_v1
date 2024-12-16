# New update 21/11/2024 - 12:01

# Đọc kỹ:
    - Chỉ làm việc ở thư mục, file được phân công
    - Chỉ push -> nhánh của mình
    - Thay đổi dữ liệu ở file ko đuợc cấp quyền => báo liền trong nhóm

# Lưu ý:
    - git log --stat : check lại lịch sử commit, bao gồm các file đã chỉnh sửa trong các lần push truớc đó
    - git status : xem lại các thay đổi chưa commit, tức là chưa => push git
    - git fetch : lấy tất cả branch từ repo về local
    - git branch -a : hiển thị các nhánh hiện có và nhánh đang làm việc
    - git add . , git commit -m"< time + day + thông tin push>", git push origin main: combo push code
		    ví dụ: git commit: 11:55 11/21/2024 - update JWT, fix send Email
    - git checkout <tên nhánh> : chuyển nhánh làm việc
    - học jwt để xác thực mỗi khi thực hiện 1 requet -> server
    - sử dung encryptAES(), decryptAES() trong CryptAES.jsx or CryptAES.php để mã hóa thông tin nhạy cảm ví dụ: email, phone. Đây là function được t viết sẵn => giấu key nên ko có key cố định, chỉ việc đem ra xài thôi