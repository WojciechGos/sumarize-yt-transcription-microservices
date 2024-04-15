package com.gos.server.user;

import org.springframework.stereotype.Service;

@Service
public class UserMapper {

    public static UserDTO mapToUserDTO(User user) {
        return new UserDTO(
                user.getId(),
                user.getEmail(),
                user.getName(),
                user.getSurname(),
                user.getUserRole()
        );
    }
    public static UserDTO addIdToTheDTO(UserDTO userDTO, Long id) {
        return new UserDTO(
                id,
                userDTO.email(),
                userDTO.name(),
                userDTO.surname(),
                userDTO.role()
        );
    }


}
