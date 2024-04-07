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
    public void run(String... args) throws Exception {

        historyRepository.save(new History("test1-1", "https://www.youtube.com/watch?v=dQw4w9WgXcQ", userRepository.findById(1L).get()));
        historyRepository.save(new History("test1-2", "https://www.youtube.com/watch?v=dQw4w9WgXcQ", userRepository.findById(1L).get()));
        historyRepository.save(new History("test1-3", "https://www.youtube.com/watch?v=dQw4w9WgXcQ", userRepository.findById(1L).get()));

        historyRepository.save(new History("test2-1", "https://www.youtube.com/watch?v=dQw4w9WgXcQ", userRepository.findById(2L).get()));
        historyRepository.save(new History("test2-2", "https://www.youtube.com/watch?v=dQw4w9WgXcQ", userRepository.findById(2L).get()));
        historyRepository.save(new History("test2-3", "https://www.youtube.com/watch?v=dQw4w9WgXcQ", userRepository.findById(2L).get()));
    }
}
