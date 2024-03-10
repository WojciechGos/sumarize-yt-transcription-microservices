package com.gos.server.history;

import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RequiredArgsConstructor
@RestController
@RequestMapping("api/v1/history")
public class HistoryController {

    @GetMapping
    public ResponseEntity<HttpStatus> getHistories(){
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @GetMapping("{historyId}")
    public ResponseEntity<History> getHistoryById(
            @PathVariable("historyId") String historyId
    ){
        return new ResponseEntity<>(new History(), HttpStatus.OK);
    }

}
