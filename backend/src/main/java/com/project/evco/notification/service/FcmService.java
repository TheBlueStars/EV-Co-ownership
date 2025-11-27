package com.project.evco.notification.service;

import com.project.evco.notification.dto.NotificationRequest;
import org.springframework.stereotype.Service;

@Service
public class FcmService {

    // TODO: Tích hợp FCM thật (HTTP v1)
    public void send(NotificationRequest req) {
        // hiện tại chỉ mock, không gọi ra ngoài
        System.out.printf("Send FCM to user=%d: %s - %s%n",
                req.getUserId(), req.getTitle(), req.getMessage());
    }
}
