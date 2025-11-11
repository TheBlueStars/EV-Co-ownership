package com.ev_co_ownership.model;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name = "users") // tên bảng trong MySQL
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String name;  // Tên người dùng

    @Column(nullable = false, unique = true)
    private String email; // Email đăng nhập

    @Column(nullable = false)
    private String password; // Mật khẩu (đã mã hóa)

    @Column
    private String role = "USER"; // Vai trò mặc định
}
