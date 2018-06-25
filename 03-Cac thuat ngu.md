## Các thuật ngữ dùng trong Blockchain
### Blockchain
> Công nghệ chuỗi khối, các transaction được nhóm thành 1 Block, các Block được nối với nhau thành chuỗi (chain) theo cơ chế block sau đó là lưu hash key của block trước
### Consensus
> Thuật toán đồng thuận, là thuật toán xác nhận sự chính xác của một block
### On-chian
> Dùng để chỉ các tác vụ được thực hiện trên Blockchain
### Cross-chain
> Dùng để chỉ các tác vụ không được thực hiện trên  Blockchain
### Mainchain
> Dùng để chỉ các blockchain chính, trong một nhóm nhiều blockchain kết nối với nhau
### Sidechain
> Dùng để chỉ các blockchain với hệ sinh thái bé hơn có kết nối với Mainchain
### Proof Of Work (PoW)
> Thuật toán đồng thuận giữa các node trong Blockchain, đồng thuận dựa trên công sức bỏ ra của các node
### Proof Of Stake (PoS)
> Thuật toán đồng thuận giữa các node trong Blockchain, đồng thuận dựa trên cổ phần của các Node
### Miner
> Máy đào, dùng để chỉ các máy tính tham gia vào Blockchain, đóng gói và xác nhận Block
### Validator
> Thường chỉ các node tham gia tạo, xác nhận Block trong Blockchain. Khá giống với Miner. Khái niệm này dùng trong Blockchain sử dụng thuật toán đồng thuận
### Fork
> Chỉ các chia tách 1 Blockchain thành 2 hoặc nhiều nhánh, khi 2 hoặc nhiều block sau cùng trỏ vào một block trước. Fork có thể được tạo ra vô tình, xảy ra khi một miner đào được nhiều hơn 1 block mới cùng lúc (sẽ chỉ tồn tại tạm thời), hoặc cố ý, khi cộng đồng chia rẽ làm 2 hay nhiều nhóm chạy các phiên bản phần mềm không tương thích nhau
### Hard fork
> Xảy ra khi quy luật đồng thuận được nới lỏng, nếu tất cả miner update lên phần mềm mới thì sẽ không xảy ra hiện tượng chia tách, nếu còn một số miner vẫn chạy phần mềm cũ thì sẽ chia tách
### Soft fork
> Xảy ra khi quy tắc luật đồng thuận được thắt chặt (quy luật mới là tập con của quy luật cũ) nếu đa số miner update lên phần mềm mới thì sẽ không xảy ra chia tách, nếu chỉ số ít update thì sẽ chia tách
### Nothing at stake
> Chỉ xảy ra khi có hard-fork. Vì trong PoS bạn sẽ không tốn nhiều sức để tạo ra 1 block nên bạn có thể tạo block ở 2 chain cùng một lúc
### Long range attack
> Cũng là vì không tốn sức để tạo ra 1 block nên hoàn toàn có thể tự tạo 1 chain riêng, và chain của bạn dài hơn chain chính