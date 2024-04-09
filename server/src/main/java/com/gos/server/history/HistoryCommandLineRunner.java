package com.gos.server.history;

import com.gos.server.customUserDetails.CustomUserDetailsRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.boot.CommandLineRunner;
import org.springframework.core.annotation.Order;
import org.springframework.stereotype.Component;

@RequiredArgsConstructor
@Component
@Order(2)
public class HistoryCommandLineRunner implements CommandLineRunner {

    private final HistoryRepository historyRepository;
    private final CustomUserDetailsRepository userRepository;

    @Override
    public void run(String... args){

        historyRepository.save(new History("test1-1", "dQw4w9WgXcQ", "title 1", userRepository.findById(1L).get()));
        historyRepository.save(new History("test1-2", "dQw4w9WgXcQ", "title 2", userRepository.findById(1L).get()));
        historyRepository.save(new History("test1-3", "dQw4w9WgXcQ", "title 3", userRepository.findById(1L).get()));

        historyRepository.save(new History("test2-1", "dQw4w9WgXcQ", "title 4", userRepository.findById(2L).get()));
        historyRepository.save(new History("test2-2", "dQw4w9WgXcQ", "title 5", userRepository.findById(2L).get()));
        historyRepository.save(new History("test2-3", "dQw4w9WgXcQ", "title 6", userRepository.findById(2L).get()));
    }
}
