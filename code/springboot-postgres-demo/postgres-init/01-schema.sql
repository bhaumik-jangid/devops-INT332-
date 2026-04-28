-- This file runs automatically when PostgreSQL starts for the first time

CREATE TABLE IF NOT EXISTS products (
    id      SERIAL PRIMARY KEY,
    name    VARCHAR(100) NOT NULL,
    price   DECIMAL(10,2),
    stock   INT DEFAULT 0,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO products (name, price, stock) VALUES
    ('Laptop', 999.99, 50),
    ('Mouse',   29.99, 200),
    ('Keyboard', 79.99, 150);
