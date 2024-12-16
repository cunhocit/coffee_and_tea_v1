# SQL COMMAND
    ALTER TABLE history_order
    ADD     CONSTRAINT fk_history_order_pay_methods
            FOREIGN KEY (pay_method) REFERENCES pay_methods(pay_method)
            ON DELETE CASCADE
            ON UPDATE CASCADE,
    ADD     CONSTRAINT fk_history_order_order_status
            FOREIGN KEY (status) REFERENCES order_status(status)
            ON DELETE CASCADE
            ON UPDATE CASCADE,
    ADD     CONSTRAINT fk_history_order_customer
            FOREIGN KEY (email) REFERENCES customer(email)
            ON DELETE CASCADE
            ON UPDATE CASCADE,
    ADD     CONSTRAINT fk_history_order_product
            FOREIGN KEY (product) REFERENCES product(name)
            ON DELETE CASCADE
            ON UPDATE CASCADE,
    ADD     CONSTRAINT fk_history_order_categories
            FOREIGN KEY (category) REFERENCES categories(category)
            ON DELETE CASCADE
            ON UPDATE CASCADE

    ALTER TABLE orders
    ADD     CONSTRAINT fk_pay_method
            FOREIGN KEY (pay_method) REFERENCES pay_methods(pay_method)
            ON DELETE CASCADE
            ON UPDATE CASCADE,
    ADD     CONSTRAINT fk_order_status
            FOREIGN KEY (status) REFERENCES order_status(status)
            ON DELETE CASCADE
            ON UPDATE CASCADE,
    ADD     CONSTRAINT fk_order_categories
            FOREIGN KEY (category) REFERENCES categories(category)
            ON DELETE CASCADE
            ON UPDATE CASCADE,
    ADD     CONSTRAINT fk_order_customer
            FOREIGN KEY (email) REFERENCES customer(email)
            ON DELETE CASCADE
            ON UPDATE CASCADE

    ALTER TABLE product
    ADD     CONSTRAINT fk_category
            FOREIGN KEY (category) REFERENCES categories(category)
            ON DELETE CASCADE
            ON UPDATE CASCADE


# TEST DATA


INSERT INTO products (name, category, description, price, quantity, image, created_at, updated_at) VALUES
('Cà Phê Espresso', 'Coffee', 'Cà phê espresso đặc trưng.', '50000', '100', 'image_1.png', NOW(), NOW()),
('Trà ô long', 'Trà', 'Trà ô long thơm mát.', '50000', '100', 'image_2.png', NOW(), NOW()),
('Trà sữa truyền thống', 'Trà sữa', 'Trà sữa 100% từ sữa.', '50000', '100', 'image_3.png', NOW(), NOW()),
('Bánh trà xanh', 'Bánh ngọt', 'Bánh ngon như trà xanh.', '50000', '100', 'image_4.png', NOW(), NOW()),
('Cà Phê Latte', 'Coffee', 'Cà phê latte thơm ngon.', '60000', '80', 'image_5.png', NOW(), NOW()),
('Trà Đen', 'Trà', 'Trà đen đặc trưng.', '55000', '120', 'image_6.png', NOW(), NOW()),
('Trà sữa matcha', 'Trà sữa', 'Trà sữa matcha hảo hạng.', '65000', '90', 'image_7.png', NOW(), NOW()),
('Bánh quy bơ', 'Bánh ngọt', 'Bánh quy bơ giòn ngon.', '30000', '150', 'image_8.png', NOW(), NOW()),
('Cà Phê Cappuccino', 'Coffee', 'Cà phê cappuccino hấp dẫn.', '70000', '110', 'image_9.png', NOW(), NOW()),
('Trà xanh', 'Trà', 'Trà xanh mát lành.', '50000', '130', 'image_10.png', NOW(), NOW()),
('Trà sữa caramel', 'Trà sữa', 'Trà sữa caramel béo ngậy.', '60000', '95', 'image_11.png', NOW(), NOW()),
('Bánh kem dâu', 'Bánh ngọt', 'Bánh kem dâu tươi ngon.', '80000', '70', 'image_12.png', NOW(), NOW()),
('Cà Phê Mocha', 'Coffee', 'Cà phê mocha ngọt ngào.', '75000', '60', 'image_13.png', NOW(), NOW()),
('Trà ô long nhài', 'Trà', 'Trà ô long nhài thơm dịu.', '55000', '100', 'image_14.png', NOW(), NOW()),
('Trà sữa dâu', 'Trà sữa', 'Trà sữa dâu ngọt ngào.', '65000', '80', 'image_15.png', NOW(), NOW()),
('Bánh su kem', 'Bánh ngọt', 'Bánh su kem mềm mịn.', '40000', '140', 'image_16.png', NOW(), NOW()),
('Cà Phê Americano', 'Coffee', 'Cà phê Americano đậm đà.', '65000', '75', 'image_17.png', NOW(), NOW()),
('Trà Cam', 'Trà', 'Trà cam thơm ngọt.', '45000', '120', 'image_18.png', NOW(), NOW()),
('Trà sữa socola', 'Trà sữa', 'Trà sữa socola đậm đà.', '70000', '85', 'image_19.png', NOW(), NOW()),
('Trà sữa khoai môn', 'Trà sữa', 'Trà sữa socola đậm đà.', '70000', '85', 'image_20.png', NOW(), NOW());


INSERT INTO categories (category, created_at, updated_at) VALUES
('Coffee', NOW(), NOW()),
('Trà', NOW(), NOW()),
('Trà sữa', NOW(), NOW()),
('Bánh ngọt', NOW(), NOW());
