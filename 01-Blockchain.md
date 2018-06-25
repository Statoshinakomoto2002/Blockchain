## Blockchain
### Định nghĩa về Blockchain
* Blockchain là một chuỗi (chain) các khối (block) chứa thông tin và được mở rộng theo thời gian. Mỗi khối đều chứa thông tin về thời gian khởi tạo và được liên kết tới các khối trước đó. Blockchain là một công nghệ được thiết kế dựa trên sự đồng thuận và chống lại việc thay đổi của dữ liệu: Một khi dữ liệu đã ghi vào blockchain thì không có cách nào thay đổi được.
* Cơ chế đồng thuận của Blockchain là cơ chế đồng thuận phi tập trung, chuyển giao quyền lực và sự tin tưởng cho một mạng lưới ảo và cho phép các nút (nodes) của mạng lưới đó liên tục lưu trữ các giao dịch trên một khối (block) công cộng, tạo nên một chuỗi (chain) độc nhất: chuỗi khối (blockchain)
### Định nghĩa Nodes
* Bất cứ máy tính nào có kết nối với blockchain Bitcoin được coi là một node. Bất kỳ các nodes nào thực thi đầy đủ các quy tắc của Bitcoin được gọi là **Full nodes**. Hầu hết các nodes trên mạng là các nodes nhỏ, nhưng các full nodes mới là xương sống của mạng lưới.
* Full nodes tải về mọi khối và giao dịch, kiểm tra chúng theo nguyên tắc đồng thuận cốt lõi của Bitcoin. Ví dụ về một số nguyên tắc đồng thuận (mặc dù còn nhiều hơn nữa) là:
  + Các khối chỉ có thể tạo ra một số lượng bitcoin nhất định (12,5 BTC)
  + Giao dịch phải có chữ ký chính xác cho bitcoin đang được chi tiêu
  + Trong một blockchain đơn lẻ, một BTC không thể được chi tiêu 2 lần
  + Kích cỡ một block là 1 MB
* Mỗi node xác minh một giao dịch và mỗi khối nó nhận được trước khi chuyển nó sang các node khác
* Nếu một giao dịch (hoặc khối) là hợp lệ, node sẽ lưu trữ chúng lại và chuyển đi tất cả các node khác trong mạng lưới kết nối với node đó. Bằng cách này, mọi node sẽ thực thi tất cả các quy tắc đồng thuận, và ngăn không cho bất cứ nội dung nào được đưa vào phá vỡ quy tắc đó
* **Full nodes** chính là cách an toàn nhất để sử dụng Bitcoin. Bạn có thể tìm thấy phiên bản mới nhất của phần mềm "full nodes" trên bitcoin.org
### Miners
* Các node tải về mọi khối và giao dịch, kiểm tra chúng theo nguyên tắc đồng thuận. Miners cũng chính là các node, nhưng có thực hiện thêm các giao dịch khác và kiếm tiền thưởng
* Có thể hình dung Blockchian giống như một sổ cái kế toán có thể lưu trữ thông tin, trong đó có các node đóng vai trò kiểm tra và xác nhận, thì các Miners chính là những nhân viên kế toán có trách nhiệm ghi chép lại các thông tin lên blockchian và tạo ra các block mới, đồng thời sẽ nhận được "thù lao" cho công việc đó.
* Những node tham gia quá trình xác nhận giao dịch và tạo block mới được gọi là miner; và quá trình tạo ra Bitcoin được gọi là mining.

## Khó khăn đang gặp phải hiện nay
* Tiền mặt thì chỉ có thể hữu ích cho những giao dich nhỏ
* Thời gian giao dịch có thể kéo dài
* Các giao dịch lại cần một bên thứ 3 xác thức

## What are Blockchain ?
* Blockchian là một cơ sở dữ liệu phân tán, nơi mà các giao dịch được mã hóa bằng thuật toán và trạng thái mạng dược duy trì bằng thuật toán đông thuận. Hay đơn giản thì Blockchain là một chuỗi khối chứa thông tin
* Mỗi một người trong mạng thì đều có một ledger và không có một ledger tập chung
* Tất cả các giao dịch trên block để được mã hóa và bất cứ ai trong mạng đều có thể xem được lịch sư giao dịch.
* Gian lận hoặc bị tấn công

## How Blockchain Works ?
* Chúng ta sẽ tim hiểu một giao dịch đơn giản với mạng Blockchain

## Ref
* https://www.edureka.co/blog/how-blockchain-works/