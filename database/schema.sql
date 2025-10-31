CREATE DATABASE IF NOT EXISTS ev_costsharing_system;
USE ev_costsharing_system;

CREATE TABLE users (
    user_id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    password VARCHAR(100) NOT NULL,
    phone VARCHAR(20),
    email VARCHAR(100) UNIQUE,
    role ENUM('Admin','Staff','CoOwner') NOT NULL
);

CREATE TABLE admins (
    admin_id INT PRIMARY KEY,
    FOREIGN KEY (admin_id) REFERENCES users(user_id)
);

CREATE TABLE staff (
    staff_id INT PRIMARY KEY,
    FOREIGN KEY (staff_id) REFERENCES users(user_id)
);

CREATE TABLE coowners (
    coowner_id INT PRIMARY KEY,
    ownership_percentage DECIMAL(5,2),
    driving_license VARCHAR(50),
    FOREIGN KEY (coowner_id) REFERENCES users(user_id)
);

CREATE TABLE cars (
    car_id INT AUTO_INCREMENT PRIMARY KEY,
    model VARCHAR(100),
    plate_number VARCHAR(20) UNIQUE,
    status ENUM('available','in_use','maintenance') DEFAULT 'available'
);

CREATE TABLE groups (
    group_id INT AUTO_INCREMENT PRIMARY KEY,
    group_name VARCHAR(100)
);

CREATE TABLE group_memberships (
    group_id INT,
    coowner_id INT,
    ownership_share DECIMAL(5,2),
    PRIMARY KEY (group_id, coowner_id),
    FOREIGN KEY (group_id) REFERENCES groups(group_id),
    FOREIGN KEY (coowner_id) REFERENCES coowners(coowner_id)
);

CREATE TABLE contracts (
    contract_id INT AUTO_INCREMENT PRIMARY KEY,
    start_date DATE,
    end_date DATE,
    terms TEXT,
    car_id INT,
    group_id INT,
    FOREIGN KEY (car_id) REFERENCES cars(car_id),
    FOREIGN KEY (group_id) REFERENCES groups(group_id)
);

CREATE TABLE bookings (
    booking_id INT AUTO_INCREMENT PRIMARY KEY,
    car_id INT,
    coowner_id INT,
    start_time DATETIME,
    end_time DATETIME,
    status ENUM('pending','approved','completed','cancelled') DEFAULT 'pending',
    FOREIGN KEY (car_id) REFERENCES cars(car_id),
    FOREIGN KEY (coowner_id) REFERENCES coowners(coowner_id)
);

CREATE TABLE checkinout (
    check_id INT AUTO_INCREMENT PRIMARY KEY,
    booking_id INT,
    type ENUM('checkin','checkout') NOT NULL,
    time_stamp DATETIME,
    signature VARCHAR(255),
    FOREIGN KEY (booking_id) REFERENCES bookings(booking_id)
);

CREATE TABLE expenses (
    expense_id INT AUTO_INCREMENT PRIMARY KEY,
    group_id INT,
    type VARCHAR(50),
    amount DECIMAL(12,2),
    date_incurred DATE,
    share_rule ENUM('by_share','by_usage') DEFAULT 'by_share',
    description TEXT,
    FOREIGN KEY (group_id) REFERENCES groups(group_id)
);

CREATE TABLE payments (
    payment_id INT AUTO_INCREMENT PRIMARY KEY,
    coowner_id INT,
    amount DECIMAL(12,2),
    method ENUM('e-wallet','banking') DEFAULT 'e-wallet',
    status ENUM('processing','success','failed') DEFAULT 'processing',
    date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (coowner_id) REFERENCES coowners(coowner_id)
);

CREATE TABLE votes (
    vote_id INT AUTO_INCREMENT PRIMARY KEY,
    group_id INT,
    topic VARCHAR(255),
    options TEXT,
    result VARCHAR(100),
    FOREIGN KEY (group_id) REFERENCES groups(group_id)
);

CREATE TABLE reports (
    report_id INT AUTO_INCREMENT PRIMARY KEY,
    type VARCHAR(100),
    period VARCHAR(20),
    date_created DATE,
    group_id INT,
    FOREIGN KEY (group_id) REFERENCES groups(group_id)
);

/*====================== Data mẫu ======================*/
/* --- USERS --- */
INSERT INTO users (name, password, phone, email, role) VALUES
('Nguyen Van E', '123', '0909990001', 'e@gmail.com', 'CoOwner'),
('Tran Thi F', '123', '0909990002', 'f@gmail.com', 'CoOwner'),
('Doan Van G', '123', '0909990003', 'g@gmail.com', 'CoOwner');

/* --- COOWNERS --- */
INSERT INTO coowners (coowner_id, ownership_percentage, driving_license)
VALUES (5, 50.0, 'B999888'),
       (6, 30.0, 'C888777'),
       (7, 20.0, 'D777666');

/* --- CARS --- */
INSERT INTO cars (model, plate_number, status)
VALUES ('VinFast VF8', '51H-88888', 'available'),
       ('Tesla Model 3', '51H-77777', 'available');

/* --- GROUPS --- */
INSERT INTO groups (group_name)
VALUES ('Group VF8 Owners'), ('Group Tesla Owners');

/* --- GROUP MEMBERSHIPS --- */
INSERT INTO group_memberships VALUES
(2, 5, 50.0), (2, 6, 30.0), (2, 7, 20.0),
(3, 4, 60.0), (3, 5, 40.0);

/* --- CONTRACTS --- */
INSERT INTO contracts (start_date, end_date, terms, car_id, group_id)
VALUES 
('2025-02-01','2026-02-01','VF8 shared ownership',2,2),
('2025-03-01','2026-03-01','Tesla co-sharing plan',3,3);

/* --- BOOKINGS --- */
INSERT INTO bookings (car_id, coowner_id, start_time, end_time, status)
VALUES 
(2,5,'2025-10-10 08:00:00','2025-10-10 12:00:00','completed'),
(2,6,'2025-10-12 14:00:00','2025-10-12 19:00:00','completed'),
(3,4,'2025-09-05 09:00:00','2025-09-05 16:00:00','completed');

/* --- CHECKINOUT --- */
INSERT INTO checkinout (booking_id,type,time_stamp,signature)
VALUES 
(2,'checkin','2025-10-10 07:50:00','SignE'),
(2,'checkout','2025-10-10 12:10:00','SignEout'),
(3,'checkin','2025-10-12 13:55:00','SignF'),
(3,'checkout','2025-10-12 19:05:00','SignFout'),
(4,'checkin','2025-09-05 08:50:00','SignD'),
(4,'checkout','2025-09-05 16:05:00','SignDout');

/* --- EXPENSES --- */
INSERT INTO expenses (group_id,type,amount,date_incurred,share_rule,description)
VALUES 
-- Group 1 (VF5)
(1,'charging',1200000,'2025-10-21','by_usage','Phi sac thang 10'),
(1,'maintenance',800000,'2025-09-10','by_share','Bao duong thang 9'),
-- Group 2 (VF8)
(2,'charging',1500000,'2025-10-15','by_usage','Phi sac VF8'),
(2,'insurance',3000000,'2025-08-05','by_share','Phi bao hiem nam'),
-- Group 3 (Tesla)
(3,'charging',2500000,'2025-09-20','by_usage','Phi sac Tesla'),
(3,'maintenance',1200000,'2025-10-10','by_share','Bao duong dinh ky');

/* --- PAYMENTS --- */
INSERT INTO payments (coowner_id,amount,method,status)
VALUES 
(3,480000,'e-wallet','success'),
(4,720000,'banking','success'),
(5,1500000,'banking','success'),
(6,900000,'e-wallet','success'),
(7,600000,'banking','success');

/* --- VOTES --- */
INSERT INTO votes (group_id,topic,options,result)
VALUES 
(2,'Buy New Battery','Yes;No;Delay','Delay'),
(3,'Upgrade Charger','Yes;No','Yes');

/* --- REPORTS --- */
INSERT INTO reports (type,period,date_created,group_id)
VALUES 
('Cost Summary','2025-09','2025-09-30',2),
('Cost Summary','2025-10','2025-10-25',3);

-- Lấy tổng chi phí của nhóm
SELECT 
    g.group_id,
    g.group_name,
    SUM(e.amount) AS total_cost
FROM groups g
JOIN expenses e ON g.group_id = e.group_id
GROUP BY g.group_id, g.group_name;

-- Lấy phần chi phí của từng user trong nhóm
SELECT 
    u.name AS coowner_name,
    g.group_name,
    gm.ownership_share,
    ROUND(e.amount * (gm.ownership_share / 100), 0) AS cost_share
FROM expenses e
JOIN groups g ON g.group_id = e.group_id
JOIN group_memberships gm ON gm.group_id = g.group_id
JOIN coowners c ON c.coowner_id = gm.coowner_id
JOIN users u ON u.user_id = c.coowner_id
ORDER BY g.group_id, coowner_name;

-- Báo cáo tổng kết chi phí tháng
SELECT 
    g.group_name,
    DATE_FORMAT(e.date_incurred, '%Y-%m') AS month,
    SUM(e.amount) AS total_monthly_cost
FROM expenses e
JOIN groups g ON g.group_id = e.group_id
GROUP BY g.group_id, month
ORDER BY month DESC;

