package com.gos.server.summarize;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.gos.server.exception.BadRequestException;
import com.gos.server.exception.InternalServerErrorException;
import com.gos.server.history.History;
import com.gos.server.history.HistoryService;
import com.gos.server.user.User;
import com.gos.server.user.UserService;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import java.util.HashMap;
import java.util.Map;

@Service
@RequiredArgsConstructor
public class SummarizeService {

    private final HistoryService historyService;
    private final RestTemplate restTemplate;
    private final SummarizeUtils summarizeUtils;
    private final UserService userService;
    @Value("${api.microservice.transcript.url}")
    private String TRANSCRIPT_API;

    @Transactional
    public History summarizeVideo(String email, String videoUrl){

        ResponseEntity<String> response = fetchSummarizationData(videoUrl);

        // If the response is successful, create a history object and append it to the user's history
        if (response.getStatusCode().is2xxSuccessful()) {
            String transcript = summarizeUtils.decodeJson(response.getBody());
            String videoId = summarizeUtils.getVideoId(videoUrl);
            History history = historyService.createHistory(videoId, transcript);
            userService.appendHistory(email, history);
            return history;
        } else {
            throw new BadRequestException("Error occurred: " + response.getBody());
        }

    }

    private ResponseEntity<String> fetchSummarizationData(String videoUrl) {
        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.APPLICATION_JSON);

        String data = summarizeUtils.encodeJson(videoUrl);
        HttpEntity<String> requestEntity = new HttpEntity<>(data, headers);

        String apiUrl = TRANSCRIPT_API + "/core/";
        return restTemplate.postForEntity(apiUrl, requestEntity, String.class);
    }


}
