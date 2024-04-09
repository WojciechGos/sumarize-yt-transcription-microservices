package com.gos.server.history;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@RequiredArgsConstructor
@Service
public class HistoryService {

    private final HistoryRepository historyRepository;

    public List<HistoryDTO> getHistories(String email){

        List<History> histories= historyRepository.findByUserEmail(email);
        List<HistoryDTO> dto = histories.stream().map(history -> new HistoryDTO(history.getId(), history.getVideoId(), history.getVideoTitle(), history.getContent())).toList();
        return dto;
    }

    public History getHistory(){

        return new History();
    }

    public String createHistory(String videoId, String videoTitle, String content){

        History history = new History(content, videoId, videoTitle, null);



        return "new History()";
    }

}
