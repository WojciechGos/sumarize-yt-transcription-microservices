package com.gos.server.history;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@RequiredArgsConstructor
@Service
public class HistoryMapper {

    public HistoryDTO toDTO(History history) {
        return new HistoryDTO(history.getId(), history.getVideoId(), history.getVideoTitle(), history.getContent());
    }



}
