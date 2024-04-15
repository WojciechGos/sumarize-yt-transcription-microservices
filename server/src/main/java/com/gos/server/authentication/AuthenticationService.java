package com.gos.server.authentication;

import com.gos.server.jwt.JWTUtil;
import com.gos.server.user.*;
import lombok.RequiredArgsConstructor;
import org.apache.coyote.BadRequestException;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Service;
import org.springframework.security.core.GrantedAuthority;

import java.util.stream.Collectors;

@RequiredArgsConstructor
@Service
public class AuthenticationService {
    private final AuthenticationManager authenticationManager;
    private final UserService userService;
    private final JWTUtil jwtUtil;

    public AuthenticationResponse signin(SignInRequest request) {
        Authentication authentication = authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(
                        request.email(),
                        request.password()
                )
        );
        User principal = (User) authentication.getPrincipal();
        UserDTO userDTO = new UserDTO(
                principal.getId(),
                principal.getName(),
                principal.getSurname(),
                principal.getEmail(),
                principal.getUserRole()
        );

        String token = jwtUtil.issueToken(
                principal.getEmail(),
                principal.getAuthorities()
                        .stream()
                        .map(GrantedAuthority::getAuthority)
                        .collect(Collectors.toList()));
        return new AuthenticationResponse(token, userDTO);
    }

    public AuthenticationResponse signup(SignUpRequest signUpRequest) {

        System.out.println(signUpRequest.email());
        User user = new User(signUpRequest.email(), signUpRequest.name(), signUpRequest.surname(), signUpRequest.password(), UserRole.ROLE_USER);

        UserDTO userDTO = UserMapper.mapToUserDTO(user);

        UserDTO createdUser = userService.createUser(user);

        userDTO = UserMapper.addIdToTheDTO(userDTO, createdUser.id());

        String token = jwtUtil.issueToken(user.getEmail(), user.getAuthorities()
                .stream()
                .map(GrantedAuthority::getAuthority)
                .collect(Collectors.toList()));

        return new AuthenticationResponse(token, userDTO);
    }
}
