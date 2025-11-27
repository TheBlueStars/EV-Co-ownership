package com.project.evco;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

@SpringBootApplication
@EnableJpaRepositories(basePackages = {
        "com.project.evco.auth.repository",
        "com.project.evco.operation.repository",      // booking / operation
        "com.project.evco.governance.repository",     // group / vote / fund / cost
        "com.project.evco.cost.repository",
        "com.project.evco.fund.repository",
        "com.project.evco.notification.repository",
        "com.project.evco.reporting.repository"
})
@EntityScan(basePackages = {
        "com.project.evco.auth.entity",
        "com.project.evco.operation.entity",
        "com.project.evco.governance.entity",
        "com.project.evco.cost.entity",
        "com.project.evco.fund.entity",
        "com.project.evco.notification.entity",
        "com.project.evco.reporting.entity"
        // KHÔNG thêm "com.project.evco.entity" để tránh trùng User
})
public class EvcoBackendApplication {

    public static void main(String[] args) {
        SpringApplication.run(EvcoBackendApplication.class, args);
    }
}
