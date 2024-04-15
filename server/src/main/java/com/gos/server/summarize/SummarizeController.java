package com.gos.server.summarize;

import com.gos.server.history.History;
import com.gos.server.history.HistoryService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.security.Principal;

@RequiredArgsConstructor
@RestController
@RequestMapping("api/v1/summarize")
public class SummarizeController {

    private final SummarizeService summarizeService;

    @PostMapping
    public ResponseEntity<History> summarizeVideo(Principal principal, @Valid @RequestBody SummarizeRequest summarizeRequest) {
        History response = summarizeService.summarizeVideo(principal.getName(), summarizeRequest.videoUrl());
        return new ResponseEntity<>(response, HttpStatus.CREATED);
    }

}
