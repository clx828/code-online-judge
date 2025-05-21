package com.caden.coj.config;

import lombok.Data;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.context.annotation.Configuration;
import org.springframework.stereotype.Component;

@Data
@Configuration
@ConfigurationProperties(prefix = "email.client")
public class EmailConfig {
    private String host;       // SMTP服务器地址
    private String username;   // 发件人邮箱
    private String password;   // 邮箱密码/授权码
    private String protocol;   // 协议
    private int port;          // 端口
    private String from;       // 发件人
    private String nickname;  // 发件人昵称
}