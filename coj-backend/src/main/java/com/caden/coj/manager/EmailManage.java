package com.caden.coj.manager;

import com.caden.coj.config.EmailConfig;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;

import javax.mail.*;
import javax.mail.internet.AddressException;
import javax.mail.internet.InternetAddress;
import javax.mail.internet.MimeMessage;
import java.io.UnsupportedEncodingException;
import java.util.Properties;
import java.util.Random;

@Component
@Slf4j
public class EmailManage {

    @Autowired
    private EmailConfig emailConfig;

    // 发送邮件
    public void sendMail(String to, String subject, String content) throws UnsupportedEncodingException, MessagingException {
        Properties props = new Properties();
        props.put("mail.smtp.host", emailConfig.getHost());
        props.put("mail.smtp.port", emailConfig.getPort());
        props.put("mail.smtp.auth", "true");
        props.put("mail.smtp.ssl.enable", "true");  // 关键配置！启用SSL
        props.put("mail.smtp.socketFactory.class", "javax.net.ssl.SSLSocketFactory");
        props.put("mail.smtp.socketFactory.port", emailConfig.getPort());
        props.put("mail.debug", "true");  // 开启调试日志

        // 创建会话
        Session session = Session.getInstance(props, new Authenticator() {
            @Override
            protected PasswordAuthentication getPasswordAuthentication() {
                return new PasswordAuthentication(emailConfig.getUsername(), emailConfig.getPassword());
            }
        });
        // 创建邮件
        Message message = new MimeMessage(session);
        message.setFrom(new InternetAddress(emailConfig.getFrom(), emailConfig.getNickname()));
        message.setRecipient(Message.RecipientType.TO, new InternetAddress(to));
        message.setSubject(subject);
        message.setContent(content, "text/html;charset=UTF-8");
        // 发送邮件
        Transport.send(message);
    }
}
