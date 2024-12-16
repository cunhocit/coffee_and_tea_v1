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

# TRIGGER
        DELIMITER $$

        CREATE TRIGGER update_category_quantity_after_insert
        AFTER INSERT ON product
        FOR EACH ROW
        BEGIN
        UPDATE categories
        SET quantity = (SELECT SUM(CAST(quantity AS UNSIGNED)) FROM product WHERE category = NEW.category)
        WHERE category = NEW.category;
        END $$

        -- Trigger khi cập nhật sản phẩm trong bảng product
        CREATE TRIGGER update_category_quantity_after_update
        AFTER UPDATE ON product
        FOR EACH ROW
        BEGIN
        UPDATE categories
        SET quantity = (SELECT SUM(CAST(quantity AS UNSIGNED)) FROM product WHERE category = NEW.category)
        WHERE category = NEW.category;
        END $$

        DELIMITER ;

# TEST DATA
        INSERT INTO categories (category, quantity) VALUES
        ('Coffee', 0),
        ('Trà', 0),
        ('Trà sữa', 0),
        ('Bánh ngọt', 0);

        INSERT INTO pay_methods(pay_method) VALUES 
        ('Thanh toán khi nhận hàng'), ('Thanh toán bằng tài khoản');

        INSERT INTO order_status(status) VALUES 
        ('Đang vận chuyển'), ('Hoàn thành'), ('Đã hủy'), ('Đang chờ');

        INSERT INTO orders (email, cus_name, phone, address, category, product, quantity, price, pay_method, status, created_at, updated_at)
        SELECT 
        c.email, 
        c.name AS cus_name, 
        c.phone, 
        c.address, 
        p.category, 
        p.name AS product,
        FLOOR(1 + RAND() * 10) AS quantity, -- Số lượng ngẫu nhiên từ 1-10
        p.price, 
        (SELECT pay_method FROM pay_methods ORDER BY RAND() LIMIT 1) AS pay_method,
        (SELECT status FROM order_status ORDER BY RAND() LIMIT 1) AS status,
        DATE(CONCAT('2024-', FLOOR(1 + RAND() * 12), '-', FLOOR(1 + RAND() * 28))) AS created_at,
        NOW() AS updated_at
        FROM 
        product p
        JOIN 
        (SELECT * FROM customer ORDER BY RAND() LIMIT 20) c -- Lấy ngẫu nhiên 20 khách hàng
        ORDER BY RAND()
        LIMIT 50;

        INSERT INTO revenue (category, product, quantity, revenue, created_at, updated_at)
        SELECT
        (SELECT category FROM categories ORDER BY RAND() LIMIT 1) AS category, -- Danh mục ngẫu nhiên từ bảng categories
        (SELECT name FROM product ORDER BY RAND() LIMIT 1) AS product,         -- Tên sản phẩm ngẫu nhiên từ bảng products
        FLOOR(1 + RAND() * 50) AS quantity,                                      -- Số lượng ngẫu nhiên 
        FLOOR(50000 + RAND() * 500000) AS revenue,                         -- Doanh thu ngẫu nhiên từ 50,000 đến 500,000
        DATE(CONCAT('2024-', FLOOR(1 + RAND() * 12), '-', FLOOR(1 + RAND() * 28))) AS created_at, -- Ngày ngẫu nhiên trong 12 tháng
        NOW() AS updated_at                                                      -- Thời gian cập nhật bản ghi
        FROM
        (SELECT 1 UNION ALL SELECT 2 UNION ALL SELECT 3 UNION ALL SELECT 4 UNION ALL SELECT 5 UNION ALL SELECT 6 UNION ALL SELECT 7 UNION ALL SELECT 8 UNION ALL SELECT 9 UNION ALL SELECT 10) t1,
        (SELECT 1 UNION ALL SELECT 2 UNION ALL SELECT 3 UNION ALL SELECT 4 UNION ALL SELECT 5) t2
        LIMIT 50;
