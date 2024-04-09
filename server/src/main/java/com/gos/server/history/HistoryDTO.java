package com.gos.server.history;

public record HistoryDTO(
        Long id,
        String videoID,
        String videoTitle,
        String content
) {
}
