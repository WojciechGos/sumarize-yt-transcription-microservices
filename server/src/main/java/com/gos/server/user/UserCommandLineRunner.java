package com.gos.server.user;

import lombok.RequiredArgsConstructor;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Profile;
import org.springframework.core.annotation.Order;
import org.springframework.stereotype.Component;

@Component
@Order(1)
@RequiredArgsConstructor
@Profile("dev")
public class UserCommandLineRunner implements CommandLineRunner {

    private final UserService userService;

    @Override
    public void run(String... args) throws Exception {
        userService.createUser(new User("test1@test.com", "test1", "test1", "test1", UserRole.ROLE_USER));
        userService.createUser(new User("test2@test.com", "test2", "test2", "test2", UserRole.ROLE_USER));
    }
}
