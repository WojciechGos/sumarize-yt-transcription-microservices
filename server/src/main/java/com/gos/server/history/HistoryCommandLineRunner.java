package com.gos.server.history;

import com.gos.server.user.User;
import com.gos.server.user.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Profile;
import org.springframework.core.annotation.Order;
import org.springframework.stereotype.Component;

import java.util.List;

@RequiredArgsConstructor
@Component
@Order(2)
@Profile("dev")
public class HistoryCommandLineRunner implements CommandLineRunner {

    private final HistoryRepository historyRepository;
    private final UserRepository userRepository;

    @Override
    public void run(String... args){

        User user1 = userRepository.findById(1L).get();
        List<History> histories1 = List.of(
                new History("test1-1", "dQw4w9WgXcQ"),
                new History("test1-2", "dQw4w9WgXcQ"),
                new History("test1-3", "dQw4w9WgXcQ")
        );

        historyRepository.saveAll(histories1);
        user1.setHistories(histories1);
        userRepository.save(user1);


        User user2 = userRepository.findById(2L).get();
        List<History> histories2 = List.of(
                new History("test2-1", "dQw4w9WgXcQ"),
                new History("test2-2", "dQw4w9WgXcQ"),
                new History("test2-3", "dQw4w9WgXcQ")
        );

        historyRepository.saveAll(histories2);
        user2.setHistories(histories2);
        userRepository.save(user2);
    }
}
