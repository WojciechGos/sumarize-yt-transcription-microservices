package com.gos.server.authentication;


import lombok.RequiredArgsConstructor;
import org.apache.coyote.BadRequestException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RequiredArgsConstructor
@RestController
@RequestMapping("api/v1")
public class AuthenticationController {

    private final AuthenticationService authenticationService;

    @PostMapping("/sign-in")
    public ResponseEntity<AuthenticationResponse> signin(@RequestBody SignInRequest signInRequest) throws BadRequestException {
        System.out.println(signInRequest.email());
        System.out.println(signInRequest.password());
        AuthenticationResponse response = authenticationService.signin(signInRequest);
        return new ResponseEntity<>(response, HttpStatus.OK);
    }
    @PostMapping("/sign-up")
    public ResponseEntity<AuthenticationResponse> signup(@RequestBody SignUpRequest signUpRequest) {
        System.out.println(signUpRequest.email());
        AuthenticationResponse token = authenticationService.signup(signUpRequest);
        return new ResponseEntity<>(token, HttpStatus.OK);
    }
}
