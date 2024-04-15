package com.gos.server.authentication;


import com.gos.server.user.UserDTO;

public record AuthenticationResponse(
        String token,
        UserDTO user
) {
}
