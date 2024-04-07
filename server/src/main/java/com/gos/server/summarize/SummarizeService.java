package com.gos.server.summarize;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.gos.server.exception.InternalServerErrorException;
import com.gos.server.history.HistoryService;
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
    @Value("${api.transcript.url}")
    private String TRANSCRIPT_API;

    public String summarizeVideo(String videoUrl){

        ResponseEntity<String> response = fetchSummarizationData(videoUrl);

        if (response.getStatusCode().is2xxSuccessful()) {
            // save the summarization data to history

            return response.getBody();
        } else {
            throw new InternalServerErrorException("Error occurred: " + response.getStatusCode());
        }
    }

    private ResponseEntity<String> fetchSummarizationData(String videoUrl) {
        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.APPLICATION_JSON);

        String data = createJson(videoUrl);
        HttpEntity<String> requestEntity = new HttpEntity<>(data, headers);

        String apiUrl = TRANSCRIPT_API + "/core/";
        return restTemplate.postForEntity(apiUrl, requestEntity, String.class);
    }

    private String createJson(String videoUrl) {

        Map<String, String> jsonMap = new HashMap<>();
        jsonMap.put("video_url", videoUrl);

        ObjectMapper objectMapper = new ObjectMapper();

        try {
            return objectMapper.writeValueAsString(jsonMap);
        } catch (Exception e) {
            e.printStackTrace();
            return null;
        }
    }
}
