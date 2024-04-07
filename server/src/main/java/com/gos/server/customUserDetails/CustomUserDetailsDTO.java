package com.gos.server.customUserDetails;

public record CustomUserDetailsDTO(
        String email,
        String password,
        String firstName,
        String lastName
) {
}
