package com.project.evco.reporting.controller;

import com.project.evco.reporting.entity.AuditLog;
import com.project.evco.reporting.repository.AuditLogRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api")
@RequiredArgsConstructor
@CrossOrigin(origins = "*")
public class AuditLogController {

    private final AuditLogRepository auditLogRepository;

    @GetMapping("/v1/audit-logs")
    public ResponseEntity<List<AuditLog>> listAuditLogs() {
        return ResponseEntity.ok(auditLogRepository.findAll());
    }
}
