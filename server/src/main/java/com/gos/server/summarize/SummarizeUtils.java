package com.gos.server.summarize;

import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.stereotype.Service;

import java.net.URI;
import java.net.URISyntaxException;
import java.util.Arrays;
import java.util.HashMap;
import java.util.Map;
import java.util.stream.Collectors;

@Service
public class SummarizeUtils {
    public String encodeJson(String videoUrl) {

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

    public String decodeJson(String json) {
        ObjectMapper objectMapper = new ObjectMapper();
        try {
            Map<String, String> jsonMap = objectMapper.readValue(json, Map.class);
            return jsonMap.get("transcript");
        } catch (Exception e) {
            e.printStackTrace();
            return null;
        }
    }


    public String getVideoId(String url) {
        try {
            URI uri = new URI(url);
            if (uri.getQuery() != null) {
                Map<String, String> params = Arrays.stream(uri.getQuery().split("&"))
                        .map(param -> param.split("="))
                        .collect(Collectors.toMap(item -> item[0], item -> item[1]));
                return params.get("v");
            }
        } catch (URISyntaxException e) {
            throw new RuntimeException("Invalid URL", e);
        }
        return null;
    }

}
