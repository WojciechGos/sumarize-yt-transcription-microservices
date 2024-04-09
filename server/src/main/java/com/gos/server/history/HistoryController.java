package com.gos.server.history;

import jakarta.servlet.http.HttpServletRequest;
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

        return new ResponseEntity<>(historyService.getHistories(principal.getName()), HttpStatus.OK);
    }

    @GetMapping("{historyId}")
    public ResponseEntity<String> getHistoryById(
            @PathVariable("historyId") String historyId
    ){
        return new ResponseEntity<>("simea ", HttpStatus.OK);
    }

}
