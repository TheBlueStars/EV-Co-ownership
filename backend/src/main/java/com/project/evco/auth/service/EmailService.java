package com.project.evco.auth.service;

import jakarta.mail.MessagingException;
import jakarta.mail.internet.MimeMessage;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.mail.javamail.*;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class EmailService {

    private final JavaMailSender mailSender;

    @Value("${spring.mail.username:}")
    private String from;

    public void sendOtp(String to, String otp) {
        String subject = "EV Co-ownership - Mã xác thực (OTP)";
        String body = "Mã OTP của bạn là: " + otp + "\n\nCó hiệu lực trong 10 phút.";

        sendTextMail(to, subject, body);
    }

    public void sendTextMail(String to, String subject, String text) {
        MimeMessage message = mailSender.createMimeMessage();
        try {
            MimeMessageHelper helper =
                    new MimeMessageHelper(message, false, "UTF-8");
            helper.setTo(to);
            helper.setSubject(subject);
            helper.setText(text, false);
            if (from != null && !from.isBlank()) {
                helper.setFrom(from);
            }
            mailSender.send(message);
        } catch (MessagingException e) {
            // không làm fail flow chính, chỉ log
            e.printStackTrace();
        }
    }
}
