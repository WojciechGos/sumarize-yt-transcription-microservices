package com.gos.server.oauth2;

import jakarta.servlet.http.HttpServletResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;

@RequiredArgsConstructor
@RestController
@RequestMapping("/api/v1/oauth2/authorization")
public class OAuth2Controller {

    @GetMapping("/google")
    public String handleGoogleCallback(HttpServletResponse response, Authentication authentication) {
        response.setHeader("Location", "http://localhost:3000");
        System.out.println(authentication);

        return "redirect:http://localhost:3000";
    }

}
