package com.gos.server.customUserDetails;

import lombok.RequiredArgsConstructor;
import org.springframework.boot.CommandLineRunner;
import org.springframework.core.annotation.Order;
import org.springframework.stereotype.Component;

@RequiredArgsConstructor
@Component
@Order(1)
public class CustomUserDetailsCommandLineRunner implements CommandLineRunner {

    private final CustomUserDetailsRepository userRepository;

    @Override
    public void run(String... args) throws Exception {
        userRepository.save(new CustomUserDetails("test1@test.com", "test1", "test1", "password"));
        userRepository.save(new CustomUserDetails("test2@test.com", "test2", "test2", "password"));
    }
}
