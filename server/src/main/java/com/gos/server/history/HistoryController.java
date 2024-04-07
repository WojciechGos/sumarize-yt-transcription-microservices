package com.gos.server.history;

import jakarta.servlet.http.HttpServletRequest;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.security.Principal;

@RequiredArgsConstructor
@RestController
@RequestMapping("api/v1/histories")
public class HistoryController {

    @GetMapping
    public ResponseEntity<String> getHistories(HttpServletRequest request, Principal principal){
        System.out.println(request);
        System.out.println(principal);
        return new ResponseEntity<>("siema", HttpStatus.OK);
    }

    @GetMapping("{historyId}")
    public ResponseEntity<String> getHistoryById(
            @PathVariable("historyId") String historyId
    ){
        return new ResponseEntity<>("simea ", HttpStatus.OK);
    }

}
