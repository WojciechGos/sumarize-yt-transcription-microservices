package com.gos.server.history;

import com.gos.server.user.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.boot.CommandLineRunner;
import org.springframework.core.annotation.Order;
import org.springframework.stereotype.Component;

@RequiredArgsConstructor
@Component
@Order(2)
public class HistoryCommandLineRunner implements CommandLineRunner {

    private final HistoryRepository historyRepository;
    private final UserRepository userRepository;

    @Override
    public void run(String... args) throws Exception {

        historyRepository.save(new History("test1-1", userRepository.findById(1L).get()));
        historyRepository.save(new History("test1-2", userRepository.findById(1L).get()));
        historyRepository.save(new History("test1-3", userRepository.findById(1L).get()));

        historyRepository.save(new History("test2-1", userRepository.findById(2L).get()));
        historyRepository.save(new History("test2-2", userRepository.findById(2L).get()));
        historyRepository.save(new History("test2-3", userRepository.findById(2L).get()));
    }
}
