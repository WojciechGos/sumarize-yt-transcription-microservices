package com.gos.server.summarize;

public record TranscriptServiceResponse(
        String transcript,
        String videoUrl
) {
}
