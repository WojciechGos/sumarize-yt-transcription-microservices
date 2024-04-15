package com.gos.server.history;

import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.security.Principal;
import java.util.List;

@RequiredArgsConstructor
@RestController
@RequestMapping("api/v1/histories")
public class HistoryController {

    private final HistoryService historyService;

    @GetMapping
    public ResponseEntity<List<HistoryDTO>> getHistories(Principal principal){

        return new ResponseEntity<>(historyService.getHistoriesByUserEmail(principal.getName()), HttpStatus.OK);
    }

    @GetMapping("{historyId}")
    public ResponseEntity<HistoryDTO> getHistoryById(
            @PathVariable("historyId") Long historyId,
            Principal principal
    ){
        HistoryDTO history = historyService.getUserHistory(principal.getName(), historyId);
        return new ResponseEntity<>(history, HttpStatus.OK);
    }

}
