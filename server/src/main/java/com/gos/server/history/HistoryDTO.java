package com.gos.server.history;

public record HistoryDTO(
        Long id,
        String content,
        String videoId,
        String date
) {
}
