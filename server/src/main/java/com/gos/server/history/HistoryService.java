package com.gos.server.history;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@RequiredArgsConstructor
@Service
public class HistoryService {

    private final HistoryRepository historyRepository;

    public List<History> getHistories(){

        return  historyRepository.findAll();
    }

    public History getHistory(){

        return new History();
    }

    public String createHistory(String videoUrl, String content){

        History history = new History(content, videoUrl, null);



        return "new History()";
    }

}
