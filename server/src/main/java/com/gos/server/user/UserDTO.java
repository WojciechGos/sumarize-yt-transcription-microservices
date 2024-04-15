package com.gos.server.user;

public record UserDTO(
        Long id,
        String email,
        String name,
        String surname,
        UserRole role

) {
}
