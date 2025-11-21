package com.project.evco.reporting.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.http.*;
import org.springframework.web.bind.annotation.*;

import java.nio.charset.StandardCharsets;
import java.util.Map;

@RestController
@RequestMapping("/api")
@RequiredArgsConstructor
@CrossOrigin(origins = "*")
public class ReportController {

    // Dashboard cho Admin / Staff
    @GetMapping("/v1/reports/dashboard")
    public ResponseEntity<Map<String,Object>> dashboard() {
        // stub demo – sau bạn query thật bằng JPA
        return ResponseEntity.ok(Map.of(
                "totalGroups", 5,
                "totalVehicles", 12,
                "totalBookings", 48,
                "totalCost", 12345678
        ));
    }

    // Export báo cáo – FE thường set responseType: 'blob'
    @GetMapping("/v1/reports/{key}")
    public ResponseEntity<byte[]> exportReport(@PathVariable String key) {
        // demo: luôn trả 1 file CSV nhỏ
        String csv = "col1,col2,col3\nvalue1,value2,value3\n";
        byte[] bytes = csv.getBytes(StandardCharsets.UTF_8);

        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.parseMediaType("text/csv"));
        headers.setContentDisposition(ContentDisposition.attachment()
                .filename(key + ".csv")
                .build());

        return new ResponseEntity<>(bytes, headers, HttpStatus.OK);
    }
}
