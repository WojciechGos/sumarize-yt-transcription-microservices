package com.gos.server.history;

import com.gos.server.exception.ResourceNotFoundException;
import com.gos.server.user.User;
import com.gos.server.user.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@RequiredArgsConstructor
@Service
public class HistoryService {

    private final HistoryRepository historyRepository;
    private final UserService userService;

    public List<HistoryDTO> getHistoriesByUserEmail(String email){
        User user = userService.getUserByEmail(email);
        return user.getHistories().stream().map(HistoryMapper::toDTO).toList();
    }

    @Transactional
    public HistoryDTO getUserHistory(String email, Long id){
        User user = userService.getUserByEmail(email);
        History tmp = user.getHistories().stream().filter(history -> history.getId().equals(id)).findFirst().orElseThrow(() -> new ResourceNotFoundException("History with id " + id + " not found"));
        return HistoryMapper.toDTO(tmp);
    }

    public History createHistory(String videoId, String content){
        return historyRepository.save(new History(content, videoId));
    }

}
