package com.gos.server.summarize;

import com.gos.server.history.HistoryService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RequiredArgsConstructor
@RestController
@RequestMapping("api/v1/summarize")
public class SummarizeController {

    private final SummarizeService summarizeService;

    @PostMapping
    public ResponseEntity<String> summarizeVideo(@RequestBody String videoUrl){

        System.out.println(videoUrl);
        String response = summarizeService.summarizeVideo(videoUrl);

        return new ResponseEntity<>(response, HttpStatus.CREATED);
    }

}