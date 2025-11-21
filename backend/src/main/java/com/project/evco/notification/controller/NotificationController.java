package com.project.evco.notification.controller;

import com.project.evco.notification.entity.Notification;
import com.project.evco.notification.service.NotificationService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api")
@RequiredArgsConstructor
@CrossOrigin(origins = "*")
public class NotificationController {

    private final NotificationService notificationService;

    @GetMapping("/v1/notifications")
    public ResponseEntity<List<Notification>> listMyNotifications(Authentication auth) {
        // demo: userId = 1L, thực tế lấy từ JWT
        Long userId = 1L;
        return ResponseEntity.ok(notificationService.listForUser(userId));
    }

    @PostMapping("/v1/notifications/{id}/read")
    public ResponseEntity<?> markRead(
            @PathVariable Long id,
            Authentication auth
    ) {
        Long userId = 1L;
        notificationService.markRead(id, userId);
        return ResponseEntity.ok().build();
    }

    @PostMapping("/v1/notifications/read-all")
    public ResponseEntity<?> markAllRead(Authentication auth) {
        Long userId = 1L;
        notificationService.markAllRead(userId);
        return ResponseEntity.ok().build();
    }
}
