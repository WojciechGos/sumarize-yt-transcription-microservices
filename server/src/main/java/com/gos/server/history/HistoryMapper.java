package com.gos.server.history;

import java.text.SimpleDateFormat;

public class HistoryMapper {

    public static HistoryDTO toDTO(History history){
        SimpleDateFormat formatter = new SimpleDateFormat("yyyy-MM-dd HH:mm");
        return new HistoryDTO(history.getId(), history.getContent(), history.getVideoId(), formatter.format(history.getDate()));
    }

}
